import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CursorTrail from "@/components/CursorTrail";
import CookieBanner from "@/components/CookieBanner";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://imperium-gym.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IMPERIUM GYM — Salle de Musculation Porto-Vecchio, Corse",
    template: "%s | IMPERIUM GYM",
  },
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IMPERIUM GYM — Porto-Vecchio, Corse",
    description:
      "Salle de musculation haut de gamme équipée Etenon. Coachs diplômés. Accès 6h – 23h - 7j/7.",
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "IMPERIUM GYM",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMPERIUM GYM — Porto-Vecchio, Corse",
    description:
      "Salle de musculation haut de gamme équipée Etenon. Coachs diplômés. Accès 6h – 23h - 7j/7.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "IMPERIUM GYM",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-imperium.png`,
      sameAs: [
        "https://www.instagram.com/imperium_gym_club/",
      ],
    },
    {
      "@type": "HealthClub",
      "@id": `${SITE_URL}#healthclub`,
      name: "IMPERIUM GYM",
      description:
        "Salle de musculation haut de gamme à Porto-Vecchio, équipée Etenon Fitness. Coachs diplômés en musculation, natural bodybuilding et boxe. Accès 6h–23h, 7j/7.",
      url: SITE_URL,
      image: `${SITE_URL}/images/logo-imperium.png`,
      telephone: "+33495523352",
      email: "contact@imperium-gym.com",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "U Centru, Avenue de Bastia",
        addressLocality: "Porto-Vecchio",
        postalCode: "20137",
        addressRegion: "Corse-du-Sud",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.60995401675176,
        longitude: 9.277529055772426,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "06:00",
          closes: "23:00",
        },
      ],
      parentOrganization: { "@id": `${SITE_URL}#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
