import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import GymImage from "@/components/GymImage";

export const metadata: Metadata = {
  title: "À Propos — IMPERIUM GYM Porto-Vecchio",
  description:
    "L'histoire et la philosophie d'IMPERIUM GYM. Une salle de musculation haut de gamme à Porto-Vecchio, Corse du Sud, avec équipement Etenon et coaching IFBB.",
};

export default function AProposPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Notre histoire</span>
              <h1 className="mt-3 text-5xl sm:text-6xl font-black tracking-tight text-white">
                À Propos<br />d&apos;<span className="text-neon-green">IMPERIUM</span>
              </h1>
              <div className="mt-4 w-20 h-0.5 bg-neon-green" />
              <p className="mt-6 text-gray-400 leading-relaxed">
                IMPERIUM GYM est né d&apos;une vision simple : offrir à la Corse du Sud une salle
                de musculation digne des plus grandes métropoles. Un espace où l&apos;excellence
                de l&apos;équipement rencontre la passion du sport.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Installée au cœur de Porto-Vecchio, sur l&apos;Avenue de Bastia, notre salle
                a été pensée pour ceux qui prennent leur entraînement au sérieux — débutants
                ambitieux comme athlètes confirmés.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-dark-card border border-neon-green/10">
                <GymImage
                  src="/images/ambiance.jpg"
                  alt="Ambiance IMPERIUM GYM"
                  fill
                  className="object-cover opacity-80"
                  fallbackLabel="Photo ambiance salle"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">Porto-Vecchio, Corse du Sud</p>
                  <p className="text-neon-green text-sm">U Centru, Avenue de Bastia</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHIE ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Notre philosophie</span>
            <h2 className="mt-3 text-4xl font-black text-white">
              Force · Puissance · <span className="text-neon-green">Communauté</span>
            </h2>
            <div className="mt-4 w-20 h-0.5 bg-neon-green mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Excellence",
                desc: "Chaque détail compte. De l'équipement Etenon aux vestiaires, tout est pensé pour votre confort et votre performance.",
              },
              {
                number: "02",
                title: "Inclusivité",
                desc: "IMPERIUM accueille tous les niveaux. Débutant ou athlète confirmé, vous trouverez votre place dans notre communauté.",
              },
              {
                number: "03",
                title: "Résultats",
                desc: "Notre objectif ? Que vous atteigniez le vôtre. Équipement top, coaching expert, accès 24/7 — tout est là.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.number} delay={i * 0.15}>
                <div className="p-8 bg-dark-card border border-dark-border rounded-2xl hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-1 group">
                  <span className="text-neon-green/30 font-black text-6xl block mb-4 group-hover:text-neon-green/50 transition-colors duration-300">
                    {item.number}
                  </span>
                  <h3 className="text-white font-black text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ETENON ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="text-neon-green text-xs tracking-[0.4em] uppercase font-bold">Notre équipement</span>
              <h2 className="mt-3 text-4xl font-black text-white">
                Partenaire <span className="text-neon-green">Etenon Fitness</span>
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                IMPERIUM GYM a choisi Etenon Fitness pour l&apos;ensemble de son équipement de
                musculation. Leader de l&apos;équipement fitness professionnel, Etenon garantit
                des machines de haute technologie, une durabilité sans compromis et une expérience
                utilisateur premium.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Chaque machine respecte les dernières avancées en biomécanique, pour un
                entraînement efficace, sûr et agréable.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Biomécanique optimale",
                  "Réglages précis",
                  "Durabilité premium",
                  "Design moderne",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-neon-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative p-12 bg-dark-card border border-neon-green/20 rounded-2xl flex flex-col items-center justify-center min-h-[300px]">
                <div className="relative w-48 h-20 mb-4">
                  <GymImage
                    src="/images/logo-etenon.png"
                    alt="Etenon Fitness"
                    fill
                    className="object-contain"
                    fallbackLabel="Logo Etenon"
                  />
                </div>
                <p className="text-white font-bold text-lg">Etenon Fitness</p>
                <p className="text-neon-green text-sm font-medium mt-2">Équipement officiel IMPERIUM GYM</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg border-t border-dark-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "24/7", label: "Accès libre" },
              { value: "Etenon", label: "Équipement" },
              { value: "IFBB", label: "Coaching" },
              { value: "P.V.", label: "Porto-Vecchio" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <p className="text-4xl sm:text-5xl font-black text-neon-green">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-2 tracking-widest uppercase">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-neon-green/20">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white">
            Prêt à rejoindre <span className="text-neon-green">IMPERIUM</span> ?
          </h2>
          <p className="mt-4 text-gray-400">
            Venez visiter la salle. Aucun engagement requis pour une visite.
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
              Nous trouver
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
