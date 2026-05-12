import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalNote } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de protection des données personnelles d'IMPERIUM GYM.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updated="mai 2025">

      <LegalNote>
        IMPERIUM GYM s&apos;engage à protéger la vie privée de ses utilisateurs et à traiter leurs
        données personnelles conformément au Règlement Général sur la Protection des Données (RGPD —
        Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
      </LegalNote>

      <LegalSection title="1. Responsable du traitement">
        <p>
          <strong className="text-white">IMPERIUM GYM</strong><br />
          U Centru, Avenue de Bastia, 20137 Porto-Vecchio, Corse du Sud<br />
          Email : contact@imperium-gym.com<br />
          Téléphone : +33 4 95 52 33 52
        </p>
      </LegalSection>

      <LegalSection title="2. Données collectées et finalités">
        <p className="text-white font-semibold">a) Formulaire de contact</p>
        <div className="mt-2 space-y-1 pl-4 border-l-2 border-dark-border">
          <p><span className="text-white">Données :</span> nom, adresse email, numéro de téléphone (facultatif), message</p>
          <p><span className="text-white">Finalité :</span> traitement de votre demande de contact</p>
          <p><span className="text-white">Base légale :</span> intérêt légitime (art. 6.1.f RGPD)</p>
          <p><span className="text-white">Durée de conservation :</span> 3 ans à compter du dernier contact</p>
        </div>

        <p className="text-white font-semibold mt-5">b) Souscription d&apos;abonnement (paiement en ligne)</p>
        <div className="mt-2 space-y-1 pl-4 border-l-2 border-dark-border">
          <p><span className="text-white">Données :</span> nom, prénom, email, informations de paiement</p>
          <p><span className="text-white">Finalité :</span> exécution du contrat d&apos;abonnement et facturation</p>
          <p><span className="text-white">Base légale :</span> exécution d&apos;un contrat (art. 6.1.b RGPD)</p>
          <p><span className="text-white">Durée de conservation :</span> durée du contrat + 5 ans (obligations comptables)</p>
          <p className="text-gray-500 text-xs mt-1">
            ⚠ Les données bancaires (numéro de carte, CVV…) sont traitées exclusivement par
            Stripe et ne transitent jamais par nos serveurs. IMPERIUM GYM n&apos;a pas accès
            à ces informations.
          </p>
        </div>

        <p className="text-white font-semibold mt-5">c) Navigation sur le site</p>
        <div className="mt-2 space-y-1 pl-4 border-l-2 border-dark-border">
          <p><span className="text-white">Données :</span> adresse IP, type de navigateur, pages visitées (journaux serveur)</p>
          <p><span className="text-white">Finalité :</span> sécurité, maintenance et amélioration du site</p>
          <p><span className="text-white">Base légale :</span> intérêt légitime (sécurité des systèmes)</p>
          <p><span className="text-white">Durée de conservation :</span> 12 mois maximum</p>
        </div>
      </LegalSection>

      <LegalSection title="3. Destinataires des données">
        <p>Les données collectées sont destinées à :</p>
        <ul className="mt-2 space-y-2">
          <li>
            <span className="text-white font-semibold">IMPERIUM GYM</span> — traitement interne des demandes et gestion des abonnements
          </li>
          <li>
            <span className="text-white font-semibold">Stripe</span> (prestataire de paiement) — traitement sécurisé des transactions.
            Stripe est certifié PCI-DSS niveau 1 et soumis à sa propre politique de confidentialité
            disponible sur stripe.com/fr/privacy
          </li>
          <li>
            <span className="text-white font-semibold">Vercel Inc.</span> (hébergeur) — hébergement du site et des données de navigation
          </li>
        </ul>
        <p className="mt-3">
          Aucune donnée personnelle n&apos;est vendue, louée ou cédée à des tiers à des fins commerciales.
        </p>
      </LegalSection>

      <LegalSection title="4. Transferts hors Union Européenne">
        <p>
          Vercel Inc. est une société américaine. L&apos;hébergement peut impliquer un transfert de données
          vers les États-Unis. Ce transfert est encadré par les clauses contractuelles types de la
          Commission européenne, conformément à l&apos;art. 46 RGPD.
        </p>
      </LegalSection>

      <LegalSection title="5. Vos droits">
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants
          concernant vos données personnelles :
        </p>
        <ul className="mt-3 space-y-2">
          {[
            { right: "Droit d'accès", desc: "obtenir une copie des données vous concernant" },
            { right: "Droit de rectification", desc: "corriger des données inexactes ou incomplètes" },
            { right: "Droit à l'effacement", desc: "supprimer vos données (\"droit à l'oubli\")" },
            { right: "Droit à la limitation", desc: "limiter le traitement de vos données" },
            { right: "Droit à la portabilité", desc: "recevoir vos données dans un format structuré" },
            { right: "Droit d'opposition", desc: "vous opposer à un traitement basé sur l'intérêt légitime" },
          ].map(({ right, desc }) => (
            <li key={right} className="flex gap-2">
              <span className="text-neon-green mt-0.5 flex-shrink-0">·</span>
              <span><span className="text-white font-semibold">{right} :</span> {desc}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Pour exercer ces droits, contactez-nous à{" "}
          <a href="mailto:contact@imperium-gym.com" className="text-neon-green hover:underline">
            contact@imperium-gym.com
          </a>.
          Nous répondrons dans un délai d&apos;un mois. En cas de réponse insatisfaisante, vous pouvez
          introduire une réclamation auprès de la{" "}
          <span className="text-white font-semibold">CNIL</span> (cnil.fr).
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies">
        <p>
          Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d&apos;un site.
        </p>
        <div className="mt-3 space-y-4">
          <div>
            <p className="text-white font-semibold">Cookies strictement nécessaires</p>
            <p className="mt-1">
              Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement
              (gestion de session, sécurité). Ces cookies ne nécessitent pas votre consentement
              conformément à l&apos;article 5.3 de la Directive ePrivacy.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold">Cookies Stripe</p>
            <p className="mt-1">
              Lors du paiement, Stripe peut déposer des cookies sur son propre domaine
              (checkout.stripe.com) à des fins de sécurité et de prévention de la fraude.
              Ces cookies relèvent de la politique de Stripe et sont nécessaires au traitement
              sécurisé du paiement.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold">Cookies analytiques / publicitaires</p>
            <p className="mt-1">
              Ce site n&apos;utilise <strong className="text-white">aucun</strong> cookie de tracking,
              d&apos;analyse ou publicitaire (pas de Google Analytics, Facebook Pixel, etc.).
            </p>
          </div>
        </div>
        <p className="mt-4">
          Vous pouvez configurer votre navigateur pour refuser les cookies. Cela peut altérer
          certaines fonctionnalités du site.
        </p>
      </LegalSection>

      <LegalSection title="7. Sécurité des données">
        <p>
          IMPERIUM GYM met en œuvre les mesures techniques et organisationnelles appropriées pour
          protéger vos données personnelles contre toute perte, destruction, altération, accès ou
          divulgation non autorisés. Le site est servi exclusivement en HTTPS (chiffrement TLS).
          Les paiements sont traités par Stripe, certifié PCI-DSS.
        </p>
      </LegalSection>

      <LegalSection title="8. Modifications de la présente politique">
        <p>
          IMPERIUM GYM se réserve le droit de modifier la présente politique de confidentialité
          à tout moment, notamment pour se conformer à toute évolution légale, réglementaire,
          jurisprudentielle ou technique. La date de mise à jour est indiquée en haut de la page.
        </p>
        <p>
          Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance
          des éventuelles modifications.
        </p>
      </LegalSection>

    </LegalPage>
  );
}
