import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import GymImage from "@/components/GymImage";

export const metadata: Metadata = {
  title: "Votre Salle — IMPERIUM GYM Porto-Vecchio",
  description:
    "Découvrez l'espace musculation Etenon, le cardio dernière génération et le coaching de Peggy FABY, championne IFBB, à IMPERIUM GYM Porto-Vecchio.",
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SectionPhoto({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-card border border-neon-green/10">
      <GymImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        fallbackLabel={fallback}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent pointer-events-none" />
    </div>
  );
}

export default function SallePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-end pb-16 pt-32 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <GymImage
              src="/images/salle-hero.jpg"
              alt="IMPERIUM GYM — La salle"
              fill
              className="object-cover opacity-30"
              priority
              fallbackLabel="Photo hero salle"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-neon-green/5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection>
            <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Espace & Équipements</span>
            <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tight text-white">
              Un espace<br />
              <span className="text-neon-green">haut de gamme</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-2xl leading-relaxed">
              Entièrement équipé en matériel <span className="text-white font-semibold">Etenon Fitness</span> dernière génération.
              Biomécanique optimale, confort inégalé, performance maximale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ZONE MUSCULATION ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <SectionPhoto
                src="/images/musculation.jpg"
                alt="Zone musculation Etenon"
                fallback="Photo zone musculation"
              />
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Machines de précision</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-white">
                Équipement <span className="text-white font-semibold">Etenon Fitness</span>
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Découvrez un espace de musculation entièrement équipé de machines <span className="text-white font-semibold">Etenon Fitness</span>,
                conçues pour allier innovation, confort et performance. Nos équipements ont été
                développés en tenant compte des dernières avancées en biomécanique pour vous offrir
                une expérience d&apos;entraînement optimale.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Machines de haute technologie",
                    desc: "Chaque appareil est conçu pour respecter la physiologie du corps humain, avec des mouvements fluides et naturels qui garantissent un recrutement musculaire parfait.",
                  },
                  {
                    title: "Amplitudes de mouvement optimales",
                    desc: "Nos machines permettent une liberté de mouvement maximale, offrant un entraînement complet qui respecte les courbes naturelles de votre corps.",
                  },
                  {
                    title: "Confort inégalé",
                    desc: "Conçues pour s'adapter à toutes les morphologies, nos machines offrent un confort exceptionnel grâce à des assises ergonomiques et des réglages précis.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <CheckIcon />
                    <div>
                      <span className="text-white font-semibold text-sm block">{item.title}</span>
                      <span className="text-gray-400 text-sm leading-relaxed mt-1 block">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── ESPACE CARDIO ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left" className="lg:order-2">
              <SectionPhoto
                src="/images/cardio.jpg"
                alt="Espace cardio IMPERIUM GYM"
                fallback="Photo espace cardio"
              />
            </AnimatedSection>

            <AnimatedSection direction="right" className="lg:order-1">
              <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Performance cardio</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-white">
                Cardio <span className="text-neon-green">Dernière Génération</span>
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Profitez de tapis de course, vélos d&apos;intérieur, elliptiques, escaliers et rameurs
                de dernière génération, équipés d&apos;écrans tactiles interactifs et de capteurs
                pour suivre votre performance en temps réel.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Tapis de course",
                  "Vélos d'intérieur",
                  "Elliptiques",
                  "Escaliers & Rameurs",
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-4 bg-dark-card border border-dark-border rounded-xl hover:border-neon-green/30 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-gray-500 text-sm">
                Écrans tactiles interactifs · Suivi en temps réel · Performance tracking
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── COACHS RÉSIDENTS ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-14">
            <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">L&apos;équipe</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white">
              Coachs <span className="text-neon-green">Résidents</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Une équipe de passionnés à votre service. Séances individuelles, duo, trio, programmes personnalisés et conseils nutrition.
            </p>
            <div className="mt-4 w-20 h-0.5 bg-neon-green mx-auto" />
          </AnimatedSection>

          {/* Coach cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Peggy */}
            <AnimatedSection direction="left">
              <div className="group relative bg-dark-card border border-dark-border hover:border-neon-green/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <GymImage
                    src="/images/coach-peggy.jpg"
                    alt="Peggy — Gérante IMPERIUM GYM"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    fallbackLabel="Photo Peggy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-neon-green text-black text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase">
                      Gérante
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-black text-white tracking-tight">
                      <span className="text-neon-green">Peggy</span>
                    </h3>
                    <p className="text-white/80 text-sm font-medium tracking-wide mt-1">Gérante & Coach</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Passionnée de musculation et de nutrition, Peggy gère IMPERIUM GYM avec exigence.
                    Elle accompagne les membres dans leur progression avec des programmes sur mesure
                    et un suivi personnalisé.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Programmes sur mesure", "Suivi personnalisé", "Nutrition"].map((tag) => (
                      <span key={tag} className="text-[10px] tracking-widest uppercase text-gray-500 bg-dark-bg border border-dark-border px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a
                      href="https://wa.me/33495523352"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-bold tracking-widest uppercase rounded hover:bg-[#25D366] hover:text-black transition-all duration-300"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="https://www.instagram.com/peggy_faby_personal_trainer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-bold tracking-widest uppercase rounded hover:bg-neon-green hover:text-black transition-all duration-300"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Maximilien */}
            <AnimatedSection direction="right">
              <div className="group relative bg-dark-card border border-dark-border hover:border-neon-green/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <GymImage
                    src="/images/coach-maximilien.png"
                    alt="Maximilien — Coach diplômé IMPERIUM GYM"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    fallbackLabel="Photo Maximilien"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-neon-green text-black text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase">
                      Coach
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-black text-white tracking-tight">
                      <span className="text-neon-green">Maximilien</span>
                    </h3>
                    <p className="text-white/80 text-sm font-medium tracking-wide mt-1">Coach Sportif & Nutritionniste</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Maximilien, 23 ans, athlète de natural bodybuilding. Il met son expertise au service
                    des membres pour les accompagner dans la progression de leur entraînement et de leur
                    nutrition.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Natural Bodybuilding", "Individuel · Duo · Trio", "Nutrition"].map((tag) => (
                      <span key={tag} className="text-[10px] tracking-widest uppercase text-gray-500 bg-dark-bg border border-dark-border px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a
                      href="https://wa.me/33495523352"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-bold tracking-widest uppercase rounded hover:bg-[#25D366] hover:text-black transition-all duration-300"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="https://www.instagram.com/m4x1m1l1un_coaching/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-bold tracking-widest uppercase rounded hover:bg-neon-green hover:text-black transition-all duration-300"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Nicolas */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="group relative bg-dark-card border border-dark-border hover:border-neon-green/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <GymImage
                    src="/images/coach-nicolas.png"
                    alt="Nicolas — Coach de boxe IMPERIUM GYM"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    fallbackLabel="Photo Nicolas"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-neon-green text-black text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase">
                      Coach Boxe
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-black text-white tracking-tight">
                      <span className="text-neon-green">Nicolas</span>
                    </h3>
                    <p className="text-white/80 text-sm font-medium tracking-wide mt-1">Coach de Boxe</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nicolas encadre les séances de boxe à IMPERIUM GYM. Travail technique, préparation
                    physique, sparring et conditionnement — il accompagne tous les niveaux, du débutant
                    au pratiquant confirmé.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Boxe technique", "Préparation physique", "Tous niveaux"].map((tag) => (
                      <span key={tag} className="text-[10px] tracking-widest uppercase text-gray-500 bg-dark-bg border border-dark-border px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a
                      href="https://wa.me/33495523352"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-bold tracking-widest uppercase rounded hover:bg-[#25D366] hover:text-black transition-all duration-300"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="https://www.instagram.com/chino_chinois/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-bold tracking-widest uppercase rounded hover:bg-neon-green hover:text-black transition-all duration-300"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-12 text-center" delay={0.3}>
            <Link
              href="/contact"
              className="btn-neon inline-block px-8 py-4 bg-neon-green text-black font-bold tracking-widest uppercase text-sm rounded hover:bg-white transition-colors duration-300"
            >
              Prendre rendez-vous
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-neon-green/20">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white">
            Rejoignez <span className="text-neon-green">IMPERIUM</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Accès illimité · 6h – 23h - 7j/7 · Équipement premium
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tarifs"
              className="btn-neon px-8 py-4 bg-neon-green text-black font-bold tracking-widest uppercase text-sm rounded hover:bg-white transition-colors duration-300"
            >
              Voir les tarifs
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 text-white font-bold tracking-widest uppercase text-sm rounded hover:border-neon-green hover:text-neon-green transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
