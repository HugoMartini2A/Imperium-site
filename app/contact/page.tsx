"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    _hp: "", // honeypot — must stay empty
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState._hp) return; // bot detected — silently ignore
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.status === 429) {
        setErrorMsg("Trop de tentatives. Merci de patienter une minute.");
        return;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          (data as { error?: string }).error ??
            "Impossible d'envoyer le message. Réessayez plus tard."
        );
        return;
      }
      setSent(true);
    } catch {
      setErrorMsg("Erreur réseau. Vérifiez votre connexion et réessayez.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-3xl" />
        </div>
        <AnimatedSection className="max-w-4xl mx-auto relative z-10">
          <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Porto-Vecchio, Corse</span>
          <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tight text-white">
            Nous <span className="text-neon-green">Contacter</span>
          </h1>
          <div className="mt-4 w-20 h-0.5 bg-neon-green" />
          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            Notre équipe est disponible pour répondre à toutes vos questions
            concernant l&apos;abonnement, le coaching ou l&apos;accès à la salle.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* ─── INFOS ──────────────────────────────────────────────────── */}
            <AnimatedSection direction="left" className="space-y-8">
              {/* Address */}
              <div className="p-6 bg-dark-card border border-dark-border rounded-xl hover:border-neon-green/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-neon-green font-bold text-xs tracking-widest uppercase mb-2">Adresse</h3>
                    <address className="not-italic text-gray-300 leading-relaxed text-sm">
                      <strong className="text-white font-bold block">IMPERIUM GYM</strong>
                      U Centru, Avenue de Bastia<br />
                      20137 Porto-Vecchio<br />
                      Corse du Sud
                    </address>
                  </div>
                </div>
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+33495523352"
                  className="group p-6 bg-dark-card border border-dark-border rounded-xl hover:border-neon-green/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center mb-3 group-hover:bg-neon-green/20 transition-colors">
                    <svg className="w-5 h-5 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-neon-green font-bold text-xs tracking-widest uppercase mb-1">Téléphone</p>
                  <p className="text-white font-medium text-sm">+33 4 95 52 33 52</p>
                </a>

                <a
                  href="mailto:contact@imperium-gym.com"
                  className="group p-6 bg-dark-card border border-dark-border rounded-xl hover:border-neon-green/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center mb-3 group-hover:bg-neon-green/20 transition-colors">
                    <svg className="w-5 h-5 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-neon-green font-bold text-xs tracking-widest uppercase mb-1">Email</p>
                  <p className="text-white font-medium text-sm break-all">contact@imperium-gym.com</p>
                </a>
              </div>

              {/* Horaires */}
              <div className="p-6 bg-dark-card border border-dark-border rounded-xl">
                <h3 className="text-neon-green font-bold text-xs tracking-widest uppercase mb-4">Horaires</h3>
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-medium text-sm">Accès libre (QR Sportigo)</p>
                    </div>
                    <span className="text-neon-green font-bold text-sm text-right">6h – 23h - 7j/7</span>
                  </div>
                  <div className="h-px bg-dark-border" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-medium text-sm">Accueil</p>
                      <p className="text-gray-500 text-xs">Lundi – Vendredi</p>
                    </div>
                    <span className="text-neon-green font-bold text-sm text-right">10h–14h<br />15h30–19h30</span>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-dark-border h-64">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=9.27452%2C41.60795%2C9.28052%2C41.61195&layer=mapnik&marker=41.60995401675176%2C9.277529055772426"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IMPERIUM GYM — Porto-Vecchio"
                />
              </div>
            </AnimatedSection>

            {/* ─── FORMULAIRE ─────────────────────────────────────────────── */}
            <AnimatedSection direction="right">
              <div className="p-8 bg-dark-card border border-dark-border rounded-2xl">
                <h2 className="text-2xl font-black text-white mb-2">Envoyez-nous un message</h2>
                <p className="text-gray-500 text-sm mb-8">Réponse sous 24h ouvrées.</p>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-neon-green/20 border border-neon-green flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Message envoyé !</h3>
                    <p className="text-gray-400 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot — hidden from real users, filled by bots */}
                    <input
                      type="text"
                      name="_hp"
                      value={formState._hp}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
                    />
                    {[
                      { name: "nom", label: "Nom complet", type: "text", placeholder: "Jean Dupont" },
                      { name: "email", label: "Email", type: "email", placeholder: "jean@email.com" },
                      { name: "telephone", label: "Téléphone", type: "tel", placeholder: "+33 6 00 00 00 00" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formState[field.name as keyof typeof formState]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.name === "nom" || field.name === "email"}
                          className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-neon-green transition-colors duration-200"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                        Sujet
                      </label>
                      <select
                        name="sujet"
                        value={formState.sujet}
                        onChange={handleChange}
                        className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green transition-colors duration-200"
                      >
                        <option value="">Choisir un sujet</option>
                        <option value="abonnement">Abonnement & Tarifs</option>
                        <option value="coaching">Coaching personnel</option>
                        <option value="visite">Visite de la salle</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Votre message..."
                        rows={5}
                        required
                        className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-neon-green transition-colors duration-200 resize-none"
                      />
                    </div>

                    <p className="text-gray-500 text-xs leading-relaxed">
                      En envoyant ce formulaire, vous acceptez que vos données
                      (nom, email, téléphone, message) soient utilisées pour
                      répondre à votre demande. Conservation 3 ans max — voir
                      notre{" "}
                      <Link
                        href="/confidentialite"
                        className="text-neon-green hover:underline"
                      >
                        politique de confidentialité
                      </Link>
                      .
                    </p>

                    {errorMsg && (
                      <p
                        role="alert"
                        className="text-red-400 text-xs bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3"
                      >
                        {errorMsg}
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-neon-green text-black font-black tracking-widest uppercase text-sm rounded-lg hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Envoi en cours…
                        </span>
                      ) : (
                        "Envoyer le message"
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
