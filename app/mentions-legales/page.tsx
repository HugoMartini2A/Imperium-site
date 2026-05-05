import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalNote } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales — IMPERIUM GYM",
  description: "Mentions légales du site IMPERIUM GYM, salle de musculation à Porto-Vecchio, Corse du Sud.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updated="mai 2025">

      <LegalSection title="1. Éditeur du site">
        <p>
          Le site <strong className="text-white">imperium-gym.com</strong> est édité par :
        </p>
        <ul className="space-y-1 mt-2">
          <li><span className="text-white font-semibold">Dénomination :</span> IMPERIUM GYM</li>
          <li><span className="text-white font-semibold">Forme juridique :</span> [À compléter — ex. SAS, SARL, EI…]</li>
          <li><span className="text-white font-semibold">Siège social :</span> U Centru, Avenue de Bastia, 20137 Porto-Vecchio, Corse du Sud</li>
          <li><span className="text-white font-semibold">SIRET :</span> [À compléter]</li>
          <li><span className="text-white font-semibold">Téléphone :</span> +33 4 95 52 33 52</li>
          <li><span className="text-white font-semibold">Email :</span> contact@imperium-gym.com</li>
          <li><span className="text-white font-semibold">Directeur de la publication :</span> [Prénom NOM du gérant]</li>
        </ul>
        <LegalNote>
          Les champs indiqués [À compléter] doivent être renseignés avant la mise en ligne du paiement en ligne. Les mentions légales incomplètes exposent à une amende jusqu&apos;à 75 000 € (LCEN art. 6).
        </LegalNote>
      </LegalSection>

      <LegalSection title="2. Hébergement">
        <p>Le site est hébergé par :</p>
        <ul className="space-y-1 mt-2">
          <li><span className="text-white font-semibold">Société :</span> Vercel Inc.</li>
          <li><span className="text-white font-semibold">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
          <li><span className="text-white font-semibold">Site :</span> vercel.com</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Propriété intellectuelle">
        <p>
          L&apos;ensemble des éléments constituant ce site (textes, images, graphismes, logo, icônes, sons, logiciels…)
          est la propriété exclusive d&apos;IMPERIUM GYM, à l&apos;exception des éléments fournis par des tiers.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie
          des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation
          écrite préalable d&apos;IMPERIUM GYM.
        </p>
        <p>
          Toute exploitation non autorisée du site ou de l&apos;un des éléments qu&apos;il contient sera considérée
          comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles
          L.335-2 et suivants du Code de Propriété Intellectuelle.
        </p>
      </LegalSection>

      <LegalSection title="4. Données personnelles et cookies">
        <p>
          La collecte et le traitement des données personnelles sont détaillés dans notre{" "}
          <a href="/confidentialite" className="text-neon-green hover:underline">
            Politique de confidentialité
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="5. Liens hypertextes">
        <p>
          Le site peut contenir des liens vers des sites tiers (Instagram, WhatsApp, Stripe…).
          IMPERIUM GYM n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité
          quant à leur contenu, leurs pratiques en matière de vie privée ou leur disponibilité.
        </p>
        <p>
          La création de liens vers le site imperium-gym.com est autorisée sans accord préalable,
          à condition de ne pas nuire à l&apos;image d&apos;IMPERIUM GYM.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitation de responsabilité">
        <p>
          IMPERIUM GYM s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
          diffusées sur ce site. Toutefois, IMPERIUM GYM ne peut garantir l&apos;exactitude, la complétude
          ou l&apos;actualité des informations diffusées.
        </p>
        <p>
          IMPERIUM GYM se réserve le droit de corriger, à tout moment et sans préavis, le contenu du site.
        </p>
      </LegalSection>

      <LegalSection title="7. Droit applicable et juridiction">
        <p>
          Tout litige en relation avec l&apos;utilisation du site imperium-gym.com est soumis au droit français.
          Il est fait attribution exclusive de juridiction aux tribunaux compétents de Bastia.
        </p>
      </LegalSection>

    </LegalPage>
  );
}
