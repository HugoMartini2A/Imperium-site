"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import HeroBubble from "@/components/HeroBubble";

export default function HomePage() {
  return (
    <>
      {/* ─── HERO — BULLE GORILLE ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-bg pt-32 pb-24">
        {/* Subtle grid background for depth */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(57,255,20,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Soft radial glow background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-neon-green/[0.04] blur-3xl" />
        </div>

        {/* Hero bubble centerpiece */}
        <div className="relative z-10 flex items-center justify-center min-h-[520px] sm:min-h-[600px]">
          <HeroBubble />
        </div>

        {/* Hero text below bubble — protected from effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative z-20 mt-12 text-center px-4 max-w-3xl"
        >
          <h1 className="font-black text-4xl sm:text-6xl lg:text-7xl tracking-[0.1em] text-white uppercase">
            IMPERIUM
            <span className="block text-neon-green mt-1" style={{ textShadow: "0 0 20px #39FF14, 0 0 40px rgba(57,255,20,0.5)" }}>
              GYM
            </span>
          </h1>
          <p className="mt-6 text-neon-green tracking-[0.4em] text-xs sm:text-sm uppercase font-bold">
            Porto-Vecchio · Corse du Sud
          </p>
          <p className="mt-2 text-white/70 tracking-[0.3em] text-[10px] sm:text-xs uppercase font-medium">
            Équipement Etenon Fitness · Accès 24/7
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.6 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative z-10 mt-12 flex flex-col items-center gap-1"
        >
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-medium">
            Découvrir
          </span>
          <svg className="w-4 h-4 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* ─── HOURS BANNER (above the fold) ────────────────────────────────── */}
      <section className="bg-black border-y border-neon-green/20 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm">
          <span className="flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="font-bold tracking-widest uppercase">Ouvert maintenant</span>
          </span>
          <span className="text-gray-400">
            <span className="text-neon-green font-bold">6h–23h</span> · 7j/7 · QR code via Sportigo
          </span>
          <a href="tel:+33495523352" className="text-white hover:text-neon-green font-bold tracking-wider transition-colors duration-200 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            04 95 52 33 52
          </a>
        </div>
      </section>

      {/* ─── POURQUOI IMPERIUM ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-bg relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Notre différence</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white">
              Pourquoi <span className="text-neon-green">IMPERIUM</span>
            </h2>
            <div className="mt-4 w-20 h-0.5 bg-neon-green mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ),
                title: "Équipement Etenon",
                desc: "Machines conçues pour allier innovation, confort et performance. Biomécanique optimale pour un recrutement musculaire parfait.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Cardio Haut de Gamme",
                desc: "Tapis, vélos, elliptiques, escaliers, rameurs dernière génération avec écrans tactiles interactifs et capteurs de performance.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: "Coaching Personnel",
                desc: "Maximilien, coach résident athlète de natural bodybuilding, programmes sur mesure et suivi nutritionnel personnalisé.",
              },
            ].map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(57,255,20,0.15)" }}
                  className="group p-8 bg-dark-card border border-dark-border hover:border-neon-green/50 rounded-xl transition-all duration-400 cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-neon-green/10 flex items-center justify-center mb-6 group-hover:bg-neon-green/20 transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3 tracking-wide">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{card.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LA SALLE ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Espace & Équipements</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white">
              La <span className="text-neon-green">Salle</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Un espace musculation entièrement équipé en matériel Etenon Fitness de dernière génération, dans un cadre premium à Porto-Vecchio.
            </p>
            <div className="mt-4 w-20 h-0.5 bg-neon-green mx-auto" />
          </AnimatedSection>

          {/* Photo gallery */}
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Zone musculation Etenon", file: "musculation.jpg" },
                { label: "Espace cardio", file: "cardio.jpg" },
                { label: "Ambiance salle", file: "ambiance.jpg" },
              ].map((photo) => (
                <motion.div
                  key={photo.label}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl group cursor-pointer"
                >
                  <div className="aspect-[4/3] relative bg-dark-card border border-neon-green/10">
                    <Image
                      src={`/images/${photo.file}`}
                      alt={photo.label}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {/* Placeholder shown when image missing */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <svg className="w-10 h-10 text-neon-green/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-600 text-xs mt-2 text-center px-3">{photo.label}</p>
                      <p className="text-gray-700 text-[10px] mt-1">→ /public/images/{photo.file}</p>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white text-sm font-medium">{photo.label}</span>
                    </div>
                    {/* Neon corner accent */}
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-10 text-center" delay={0.2}>
            <Link
              href="/salle"
              className="inline-block btn-neon px-8 py-4 border border-neon-green text-neon-green font-bold tracking-widest uppercase text-sm hover:bg-neon-green hover:text-black transition-all duration-300 rounded"
            >
              Découvrir la salle complète
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA TARIFS ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-bg relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-neon-green/5 blur-3xl" />
        </div>

        <AnimatedSection className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Rejoindre la communauté</span>
          <h2 className="mt-3 text-4xl sm:text-6xl font-black tracking-tight text-white">
            Prêt à commencer ?
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Accès illimité · 24h/24 · 7j/7<br />
            Des formules pour tous les profils, avec ou sans engagement.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tarifs"
              className="btn-neon px-10 py-5 bg-neon-green text-black font-black text-sm tracking-widest uppercase rounded hover:bg-white transition-colors duration-300"
            >
              Voir les tarifs
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded hover:border-neon-green hover:text-neon-green transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>

          <p className="mt-6 text-gray-600 text-xs">
            Frais d&apos;inscription 40€ · Dès 44,90€/mois
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}
