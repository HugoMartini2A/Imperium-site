import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neon-green/20 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-dark-card border border-neon-green/40 flex items-center justify-center">
                <span className="text-neon-green font-black text-lg">I</span>
              </div>
              <div>
                <span className="font-black text-white text-lg tracking-widest block">IMPERIUM</span>
                <span className="text-neon-green text-xs tracking-[0.3em] font-medium">GYM</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Salle de musculation haut de gamme à Porto-Vecchio.<br />
              Équipement Etenon Premium. Coaching IFBB.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-neon-green font-bold tracking-widest uppercase text-xs mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/salle", label: "Votre Salle" },
                { href: "/tarifs", label: "Tarifs & Abonnement" },
                { href: "/contact", label: "Contact" },
                { href: "/apropos", label: "À Propos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-neon-green font-bold tracking-widest uppercase text-xs mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-sm text-gray-400">
              <p>U Centru, Avenue de Bastia</p>
              <p>20137 Porto-Vecchio, Corse du Sud</p>
              <p className="mt-3">
                <a href="tel:+33495523352" className="hover:text-neon-green transition-colors">
                  +33 4 95 52 33 52
                </a>
              </p>
              <p>
                <a href="mailto:contact@imperium-gym.com" className="hover:text-neon-green transition-colors">
                  contact@imperium-gym.com
                </a>
              </p>
            </address>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-gray-500">Accès libre : 6h–23h • 7j/7</p>
              <p className="text-xs text-gray-500">Accueil : Lun–Ven 10h–14h / 15h30–19h30</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} IMPERIUM GYM — Porto-Vecchio, Corse
          </p>
          <p className="text-gray-600 text-xs">
            Équipement{" "}
            <span className="text-neon-green font-medium">Etenon Fitness</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
