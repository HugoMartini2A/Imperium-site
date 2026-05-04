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
                  { label: "Tapis de course", icon: "🏃" },
                  { label: "Vélos d'intérieur", icon: "🚴" },
                  { label: "Elliptiques", icon: "⚡" },
                  { label: "Escaliers & Rameurs", icon: "🎯" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 bg-dark-card border border-dark-border rounded-xl hover:border-neon-green/30 transition-colors duration-300"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-300 text-sm font-medium">{item.label}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                </div>
              </div>
            </AnimatedSection>

            {/* Maximilien */}
            <AnimatedSection direction="right">
              <div className="group relative bg-dark-card border border-dark-border hover:border-neon-green/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <GymImage
                    src="/images/coach-maximilien.png"
                    alt="Maximilien — Coach résident IMPERIUM GYM"
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
            Accès illimité · 24h/24 · 7j/7 · Équipement premium
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
