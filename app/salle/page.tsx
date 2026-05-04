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
              Entièrement équipé en matériel Etenon Fitness dernière génération.
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
                Équipement <span className="text-neon-green">Etenon Fitness</span>
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Découvrez un espace de musculation entièrement équipé de machines Etenon Fitness,
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

      {/* ─── COACHING PEGGY ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
          <div className="w-96 h-96 rounded-full bg-neon-green/5 blur-3xl translate-x-32" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <SectionPhoto
                src="/images/peggy.jpg"
                alt="Peggy FABY — Coach IMPERIUM GYM"
                fallback="Photo Peggy FABY"
              />
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Coaching personnel</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-white">
                Peggy <span className="text-neon-green">FABY</span>
              </h2>
              <h3 className="mt-1 text-gray-400 text-lg font-medium">Votre Coach</h3>

              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full">
                <svg className="w-4 h-4 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-neon-green text-xs font-bold tracking-widest uppercase">Championne IFBB France 2014</span>
              </div>

              <p className="mt-6 text-gray-400 leading-relaxed">
                Peggy est une passionnée de musculation depuis de nombreuses années et ancienne
                athlète de bodybuilding en catégorie Bikini Master. Championne de France IFBB en
                2014, elle a participé exclusivement à des compétitions internationales sous les
                couleurs de l&apos;Équipe de France IFBB de 2014 à 2018.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Elle propose des séances en individuel, duo ou trio, ainsi que des programmes
                d&apos;entraînement personnalisés et des conseils en nutrition adaptés.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: "Individuel", icon: "👤" },
                  { label: "Duo / Trio", icon: "👥" },
                  { label: "Nutrition", icon: "🥗" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 bg-dark-card border border-dark-border rounded-xl text-center hover:border-neon-green/30 transition-colors duration-300"
                  >
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <span className="text-gray-300 text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn-neon inline-block px-8 py-4 bg-neon-green text-black font-bold tracking-widest uppercase text-sm rounded hover:bg-white transition-colors duration-300"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </AnimatedSection>
          </div>
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
