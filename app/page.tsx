"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const gorillaScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);
  const gorillaOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1.2, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const bgOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 0.8]);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[200vh]"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
          {/* Animated bg photo reveal */}
          <motion.div
            style={{ opacity: bgOpacity }}
            className="absolute inset-0 z-0"
          >
            <ImagePlaceholder
              label="Photo ambiance salle (à ajouter dans /public/images/salle-hero.jpg)"
              className="w-full h-full rounded-none border-0"
              aspectRatio=""
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>

          {/* Grid lines decoration */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "linear-gradient(rgba(57,255,20,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Gorilla + glow */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              style={{ scale: gorillaScale, opacity: gorillaOpacity }}
              className="relative"
            >
              {/* Glow ring */}
              <motion.div
                style={{ opacity: glowOpacity }}
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 40px 20px rgba(57,255,20,0.3), 0 0 80px 40px rgba(57,255,20,0.15)",
                    "0 0 80px 40px rgba(57,255,20,0.5), 0 0 160px 80px rgba(57,255,20,0.25)",
                    "0 0 40px 20px rgba(57,255,20,0.3), 0 0 80px 40px rgba(57,255,20,0.15)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Gorilla logo */}
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px]">
                {/* Try to load real image, fallback to styled placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/logo-gorille.png"
                    alt="IMPERIUM GYM — Logo Gorille"
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(57,255,20,0.8)]"
                    priority
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* SVG fallback gorilla silhouette */}
                  <svg
                    viewBox="0 0 200 200"
                    className="absolute inset-0 w-full h-full opacity-60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Gorilla silhouette stylized */}
                    <ellipse cx="100" cy="80" rx="45" ry="50" fill="#39FF14" fillOpacity="0.15" />
                    <ellipse cx="100" cy="80" rx="35" ry="38" fill="#39FF14" fillOpacity="0.2" />
                    {/* Head */}
                    <ellipse cx="100" cy="75" rx="28" ry="30" fill="#2a2a2a" stroke="#39FF14" strokeWidth="2" />
                    {/* Eyes */}
                    <ellipse cx="90" cy="70" rx="5" ry="5" fill="#39FF14" />
                    <ellipse cx="110" cy="70" rx="5" ry="5" fill="#39FF14" />
                    <circle cx="90" cy="70" r="2.5" fill="#000" />
                    <circle cx="110" cy="70" r="2.5" fill="#000" />
                    <circle cx="91.5" cy="68.5" r="1" fill="#fff" />
                    <circle cx="111.5" cy="68.5" r="1" fill="#fff" />
                    {/* Nose */}
                    <ellipse cx="100" cy="80" rx="8" ry="6" fill="#1a1a1a" stroke="#39FF14" strokeWidth="1" />
                    {/* Nostrils */}
                    <circle cx="96" cy="80" r="2" fill="#39FF14" fillOpacity="0.5" />
                    <circle cx="104" cy="80" r="2" fill="#39FF14" fillOpacity="0.5" />
                    {/* Ears */}
                    <ellipse cx="70" cy="72" rx="10" ry="14" fill="#2a2a2a" stroke="#39FF14" strokeWidth="1.5" />
                    <ellipse cx="130" cy="72" rx="10" ry="14" fill="#2a2a2a" stroke="#39FF14" strokeWidth="1.5" />
                    {/* Body */}
                    <ellipse cx="100" cy="135" rx="40" ry="42" fill="#2a2a2a" stroke="#39FF14" strokeWidth="1.5" />
                    {/* Chest line */}
                    <path d="M85 115 Q100 125 115 115" stroke="#39FF14" strokeWidth="1" strokeOpacity="0.5" fill="none" />
                    {/* Arms */}
                    <ellipse cx="55" cy="128" rx="14" ry="30" fill="#2a2a2a" stroke="#39FF14" strokeWidth="1.5" transform="rotate(-10 55 128)" />
                    <ellipse cx="145" cy="128" rx="14" ry="30" fill="#2a2a2a" stroke="#39FF14" strokeWidth="1.5" transform="rotate(10 145 128)" />
                    {/* Legs */}
                    <ellipse cx="85" cy="175" rx="15" ry="18" fill="#2a2a2a" stroke="#39FF14" strokeWidth="1" />
                    <ellipse cx="115" cy="175" rx="15" ry="18" fill="#2a2a2a" stroke="#39FF14" strokeWidth="1" />
                    {/* Crown / power indicator */}
                    <path d="M78 48 L85 38 L92 48 L100 35 L108 48 L115 38 L122 48" stroke="#39FF14" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Hero text */}
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute bottom-[-80px] sm:bottom-[-100px] text-center w-full px-4"
            >
              <motion.h1
                className="font-black text-5xl sm:text-7xl lg:text-8xl tracking-[0.15em] text-white uppercase"
                style={{
                  textShadow: "0 0 40px rgba(57,255,20,0.4)",
                }}
              >
                IMPERIUM
                <span className="block text-neon-green" style={{ textShadow: "0 0 30px #39FF14, 0 0 60px #39FF14" }}>
                  GYM
                </span>
              </motion.h1>
              <motion.p
                className="mt-3 text-gray-300 tracking-[0.3em] text-sm sm:text-base uppercase"
              >
                Porto-Vecchio, Corse du Sud
              </motion.p>
              <motion.p
                className="mt-2 text-neon-green/70 tracking-[0.2em] text-xs uppercase font-medium"
              >
                Équipement Etenon · Premium · 24/7
              </motion.p>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-8 flex flex-col items-center gap-2"
              >
                <span className="text-gray-500 text-xs tracking-widest uppercase">Découvrir</span>
                <svg className="w-5 h-5 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
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
                title: "Équipement Etenon Premium",
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
                desc: "Peggy FABY, ancienne championne IFBB, programmes sur mesure et suivi personnalisé pour atteindre vos objectifs.",
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
