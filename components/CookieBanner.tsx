"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies-accepted")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-black/95 backdrop-blur-sm border-t border-neon-green/20 px-4 py-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-gray-400 text-xs leading-relaxed max-w-2xl">
          Ce site utilise uniquement des cookies{" "}
          <span className="text-white font-semibold">strictement nécessaires</span>{" "}
          à son fonctionnement et à la sécurisation des paiements via Stripe.
          Aucun cookie publicitaire ou de tracking n&apos;est déposé.{" "}
          <Link href="/confidentialite" className="text-neon-green hover:underline">
            En savoir plus
          </Link>
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 px-6 py-2.5 bg-neon-green text-black text-xs font-black tracking-widest uppercase rounded hover:bg-white transition-colors duration-300"
        >
          Compris
        </button>
      </div>
    </div>
  );
}
