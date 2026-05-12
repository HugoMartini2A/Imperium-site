import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Tarifs & Abonnement",
  description:
    "Découvrez nos formules d'abonnement à partir de 44,90€/mois. Accès 6h – 23h - 7j/7. Avec ou sans engagement. IMPERIUM GYM Porto-Vecchio, Corse.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs & Abonnement | IMPERIUM GYM",
    description:
      "Formules dès 44,90€/mois — Avec ou sans engagement. Accès 6h–23h, 7j/7.",
    url: "/tarifs",
  },
};

interface PricingCardProps {
  title: string;
  horaires: string;
  prix: string;
  note: string;
  highlight?: boolean;
  badge?: string;
}

function PricingCard({ title, horaires, prix, note, highlight, badge }: PricingCardProps) {
  return (
    <div
      className={`relative h-full flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
        highlight
          ? "bg-neon-green/10 border-neon-green shadow-[0_0_40px_rgba(57,255,20,0.15)]"
          : "bg-dark-card border-dark-border hover:border-neon-green/40"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-neon-green text-black text-xs font-black px-4 py-1 rounded-full tracking-widest uppercase">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6 min-h-[4rem]">
        <h3 className={`font-black text-sm tracking-widest uppercase mb-2 ${highlight ? "text-neon-green" : "text-gray-300"}`}>
          {title}
        </h3>
        <p className="text-gray-500 text-xs">{horaires}</p>
      </div>

      <div className="mb-6">
        <span className={`text-5xl font-black ${highlight ? "text-neon-green" : "text-white"}`}>
          {prix.split("€")[0]}
          <span className="text-2xl">€</span>
        </span>
        <span className="text-gray-500 text-sm ml-2">/ mois</span>
      </div>

      <p className="text-gray-500 text-xs mb-8">{note}</p>

      <Link
        href="/contact"
        className={`mt-auto block text-center py-3 px-6 rounded font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
          highlight
            ? "bg-neon-green text-black hover:bg-white"
            : "border border-neon-green/40 text-neon-green hover:bg-neon-green hover:text-black"
        }`}
      >
        S&apos;abonner
      </Link>
    </div>
  );
}

export default function TarifsPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-3xl" />
        </div>
        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Formules</span>
          <h1 className="mt-3 text-6xl sm:text-8xl font-black tracking-tight text-white">
            NOS <span className="text-neon-green">TARIFS</span>
          </h1>
          <div className="mt-4 w-24 h-0.5 bg-neon-green mx-auto" />
          <p className="mt-6 text-gray-400 text-lg">
            Accès illimité · 6h – 23h - 7j/7
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            {["Équipement Premium", "Coaching disponible", "Accès QR Sportigo", "Sans frais cachés"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ─── AVEC ENGAGEMENT ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-dark-border" />
              <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium">Avec engagement 12 mois</span>
              <div className="h-px flex-1 bg-dark-border" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">
            <AnimatedSection delay={0} className="h-full">
              <PricingCard
                title="Heures Creuses + Engagement"
                horaires="6h–11h, 14h–16h · 7j/7"
                prix="44,90€"
                note="Engagement 12 mois · Frais d'inscription 40€"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="h-full">
              <PricingCard
                title="Full Access + Engagement"
                horaires="6h – 23h - 7j/7"
                prix="54,90€"
                note="Engagement 12 mois · Frais d'inscription 40€"
                highlight
                badge="Populaire"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── SANS ENGAGEMENT ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-dark-border" />
              <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium">Sans engagement</span>
              <div className="h-px flex-1 bg-dark-border" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            <AnimatedSection delay={0} className="h-full">
              <PricingCard
                title="Étudiant Sans Engagement"
                horaires="6h – 23h - 7j/7"
                prix="44,90€"
                note="Pas d'engagement · Frais d'inscription 40€"
                badge="Étudiant"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="h-full">
              <PricingCard
                title="Heures Creuses Sans Engagement"
                horaires="6h–11h, 14h–16h · 7j/7"
                prix="54,90€"
                note="Pas d'engagement · Frais d'inscription 40€"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="h-full">
              <PricingCard
                title="Full Access Sans Engagement"
                horaires="6h – 23h - 7j/7"
                prix="64,90€"
                note="Pas d'engagement · Frais d'inscription 40€"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── AUTRES OPTIONS ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-dark-border" />
              <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium">Accès ponctuel</span>
              <div className="h-px flex-1 bg-dark-border" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "1 Séance", prix: "15€", desc: "Accès journée" },
              { label: "1 Semaine", prix: "34,90€", desc: "7 jours consécutifs" },
              { label: "1 Mois", prix: "64,90€", desc: "Accès mensuel" },
              { label: "3 Mois", prix: "189,90€", desc: "Accès trimestriel" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.08}>
                <div className="p-6 bg-dark-card border border-dark-border rounded-xl text-center hover:border-neon-green/30 hover:-translate-y-1 transition-all duration-300 group">
                  <p className="text-gray-500 text-xs tracking-widest uppercase font-medium mb-3">{item.label}</p>
                  <p className="text-3xl font-black text-white group-hover:text-neon-green transition-colors duration-300">
                    {item.prix.split("€")[0]}
                    <span className="text-lg">€</span>
                  </p>
                  <p className="text-gray-600 text-xs mt-2">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INFO INSCRIPTION ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-neon-green/20">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl font-black text-white">Informations pratiques</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Frais d'inscription",
                content: "40€ à l'ouverture du contrat (tous abonnements). Inclus : accès via QR code Sportigo.",
              },
              {
                title: "Accueil & Inscriptions",
                content: "Lundi – Vendredi : 10h–14h et 15h30–19h30. Ou contactez-nous pour fixer un rendez-vous.",
              },
              {
                title: "Accès libre — QR Sportigo",
                content: "Votre salle est accessible 6h – 23h - 7j/7. Scannez votre QR code depuis l'application Sportigo : il valide votre passage et déclenche l'ouverture automatique de la porte.",
              },
              {
                title: "Moyens de paiement",
                content: "Prélèvement mensuel automatique. CB, espèces acceptés pour les accès ponctuels.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-dark-card border border-dark-border rounded-xl">
                <h3 className="text-neon-green font-bold text-sm tracking-widest uppercase mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center" delay={0.2}>
            <p className="text-gray-500 text-sm mb-6">Une question ? Notre équipe est à votre disposition.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-neon px-8 py-4 bg-neon-green text-black font-bold tracking-widest uppercase text-sm rounded hover:bg-white transition-colors duration-300"
              >
                Nous contacter
              </Link>
              <a
                href="tel:+33495523352"
                className="px-8 py-4 border border-white/20 text-white font-bold tracking-widest uppercase text-sm rounded hover:border-neon-green hover:text-neon-green transition-all duration-300 text-center"
              >
                +33 4 95 52 33 52
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
