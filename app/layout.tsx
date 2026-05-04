import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IMPERIUM GYM — Salle de Musculation Porto-Vecchio, Corse",
  description:
    "Salle de musculation haut de gamme à Porto-Vecchio, Corse du Sud. Équipement Etenon premium, coaching personnel avec Peggy FABY, ancienne championne IFBB. Accès 24h/24.",
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
    description: "Salle de musculation haut de gamme équipée Etenon. Coaching IFBB. Accès 24/7.",
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
      </body>
    </html>
  );
}
