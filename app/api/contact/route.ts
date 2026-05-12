import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const contactSchema = z.object({
  nom: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(150),
  telephone: z.string().trim().max(30).optional().or(z.literal("")),
  sujet: z.enum(["abonnement", "coaching", "visite", "autre", ""]).optional(),
  message: z.string().trim().min(10, "Message trop court").max(3000),
  _hp: z.string().max(0).optional().or(z.literal("")),
});

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "IMPERIUM GYM <onboarding@resend.dev>";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "contact@imperium-gym.com";

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const SUBJECT_LABELS: Record<string, string> = {
  abonnement: "Abonnement & Tarifs",
  coaching: "Coaching personnel",
  visite: "Visite de la salle",
  autre: "Autre",
};

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? "anonymous";

  const { success: rateOk } = await checkRateLimit(`ip:${ip}`);
  if (!rateOk) {
    return NextResponse.json(
      { error: "Trop de requêtes. Réessayez dans une minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Champs invalides", details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { nom, email, telephone, sujet, message, _hp } = parsed.data;

  // Honeypot — bot detected, silently accept without sending
  if (_hp && _hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!resend) {
    // eslint-disable-next-line no-console
    console.warn("[contact] RESEND_API_KEY absent — email non envoyé (mode no-op).");
    return NextResponse.json({
      ok: true,
      warning: "Email non envoyé : RESEND_API_KEY manquante côté serveur.",
    });
  }

  const safeSubject = sujet ? SUBJECT_LABELS[sujet] ?? "Demande" : "Demande";
  const html = `
    <h2>Nouveau message — IMPERIUM GYM</h2>
    <p><strong>Sujet :</strong> ${escapeHtml(safeSubject)}</p>
    <p><strong>Nom :</strong> ${escapeHtml(nom)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    ${telephone ? `<p><strong>Téléphone :</strong> ${escapeHtml(telephone)}</p>` : ""}
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `[IMPERIUM GYM] ${safeSubject} — ${nom}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message pour l'instant." },
      { status: 502 }
    );
  }
}
