import Link from "next/link";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-neon-green/4 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neon-green text-xs tracking-[0.3em] uppercase font-bold hover:text-white transition-colors mb-6"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </Link>
          <span className="block text-neon-green text-xs tracking-[0.4em] uppercase font-bold">
            Informations légales
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white">
            {title}
          </h1>
          <div className="mt-4 w-20 h-0.5 bg-neon-green" />
          <p className="mt-3 text-gray-600 text-xs">
            Dernière mise à jour : {updated}
          </p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-4xl mx-auto space-y-10">{children}</div>
      </section>
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-black text-white mb-4 pb-3 border-b border-dark-border tracking-wide">
        {title}
      </h2>
      <div className="text-gray-400 text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export function LegalNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 bg-neon-green/5 border border-neon-green/20 rounded-lg text-xs text-gray-400 leading-relaxed">
      {children}
    </div>
  );
}
