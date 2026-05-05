import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CursorTrail from "@/components/CursorTrail";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "IMPERIUM GYM — Salle de Musculation Porto-Vecchio, Corse",
  description:
    "Salle de musculation haut de gamme à Porto-Vecchio, Corse du Sud. Équipement Etenon premium, coaching personnel diplômé. Accès 6h – 23h - 7j/7.",
  keywords: [
    "salle de sport Porto-Vecchio",
    "musculation Corse",
    "gym Porto-Vecchio",
    "Etenon fitness",
    "coaching personnel Corse",
    "Peggy FABY",
    "IMPERIUM GYM",
  ],
  openGraph: {
    title: "IMPERIUM GYM — Porto-Vecchio, Corse",
    description: "Salle de musculation haut de gamme équipée Etenon. Coach diplômé. Accès 6h – 23h - 7j/7.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-dark-bg text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <CursorTrail />
        <CookieBanner />
      </body>
    </html>
  );
}
