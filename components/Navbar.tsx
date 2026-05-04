"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/salle", label: "Votre Salle" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
  { href: "/apropos", label: "À Propos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-neon-green/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-dark-card border border-neon-green/40 flex items-center justify-center group-hover:border-neon-green transition-colors duration-300">
              <span className="text-neon-green font-black text-lg">I</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-black text-white text-lg tracking-widest">IMPERIUM</span>
              <span className="block text-neon-green text-xs tracking-[0.3em] font-medium -mt-0.5">GYM</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-neon-green relative group ${
                    pathname === link.href ? "text-neon-green" : "text-gray-300"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-neon-green transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <Link
            href="/tarifs"
            className="hidden lg:block btn-neon px-5 py-2.5 bg-neon-green text-black font-bold text-sm tracking-widest uppercase rounded hover:bg-white transition-colors duration-300"
          >
            S&apos;abonner
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
            aria-label="Menu"
          >
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-neon-green/20"
          >
            <ul className="flex flex-col py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-4 text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-neon-green bg-neon-green/5"
                        : "text-gray-300 hover:text-neon-green hover:bg-neon-green/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-6 py-4">
                <Link
                  href="/tarifs"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center py-3 bg-neon-green text-black font-bold text-sm tracking-widest uppercase rounded"
                >
                  S&apos;abonner
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
