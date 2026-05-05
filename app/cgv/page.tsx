import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalNote } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — IMPERIUM GYM",
  description: "Conditions générales de vente des abonnements IMPERIUM GYM, Porto-Vecchio, Corse.",
};

export default function CGVPage() {
  return (
    <LegalPage title="Conditions Générales de Vente" updated="mai 2025">

      <LegalNote>
        Les présentes CGV s&apos;appliquent à toute souscription d&apos;abonnement effectuée en ligne
        sur le site imperium-gym.com. En validant sa commande, le client reconnaît avoir lu et accepté
        sans réserve les présentes conditions.
      </LegalNote>

      <LegalSection title="Article 1 — Identification du vendeur">
        <p>
          <strong className="text-white">IMPERIUM GYM</strong><br />
          U Centru, Avenue de Bastia, 20137 Porto-Vecchio, Corse du Sud<br />
          SIRET : [À compléter]<br />
          Téléphone : +33 4 95 52 33 52<br />
          Email : contact@imperium-gym.com
        </p>
      </LegalSection>

      <LegalSection title="Article 2 — Champ d'application">
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
          entre IMPERIUM GYM et toute personne physique majeure (le « Client ») souhaitant souscrire
          un abonnement à distance via le site internet imperium-gym.com.
        </p>
        <p>
          Toute commande implique l&apos;adhésion pleine et entière aux présentes CGV. IMPERIUM GYM
          se réserve le droit de modifier ses CGV à tout moment ; les CGV applicables sont celles
          en vigueur au moment de la commande.
        </p>
      </LegalSection>

      <LegalSection title="Article 3 — Offres et tarifs">
        <p>
          Les offres d&apos;abonnement proposées par IMPERIUM GYM sont présentées sur la page Tarifs
          du site. Les prix sont indiqués en euros TTC.
        </p>
        <p>Les tarifs indicatifs sont les suivants :</p>
        <div className="mt-3 space-y-2 pl-4 border-l-2 border-neon-green/30">
          <p>· Frais d&apos;inscription : <span className="text-white font-semibold">40,00 €</span> (une fois)</p>
          <p>· Abonnement mensuel sans engagement : à partir de <span className="text-white font-semibold">44,90 € / mois</span></p>
          <p>· Autres formules : voir page Tarifs</p>
        </div>
        <p className="mt-3">
          IMPERIUM GYM se réserve le droit de modifier ses tarifs à tout moment.
          Le prix applicable est celui affiché au moment de la validation de la commande.
        </p>
      </LegalSection>

      <LegalSection title="Article 4 — Processus de commande">
        <p>La souscription en ligne s&apos;effectue selon les étapes suivantes :</p>
        <ol className="list-decimal list-inside space-y-1.5 mt-2 pl-2">
          <li>Sélection de la formule d&apos;abonnement souhaitée</li>
          <li>Renseignement des informations personnelles</li>
          <li>Vérification et validation du récapitulatif de commande</li>
          <li>Paiement sécurisé via la plateforme Stripe</li>
          <li>Confirmation de commande par email</li>
        </ol>
        <p className="mt-3">
          La validation de la commande vaut acceptation des présentes CGV et engagement de paiement.
          Toute commande validée et payée est ferme et définitive, sous réserve du droit de rétractation
          prévu à l&apos;article 6.
        </p>
      </LegalSection>

      <LegalSection title="Article 5 — Paiement">
        <p>
          Le paiement s&apos;effectue exclusivement en ligne, de manière sécurisée, via la plateforme
          de paiement <strong className="text-white">Stripe</strong> (Stripe Payments Europe, Ltd.,
          1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irlande).
        </p>
        <p>
          Les moyens de paiement acceptés sont ceux proposés par Stripe (carte bancaire Visa,
          Mastercard, American Express…).
        </p>
        <p>
          IMPERIUM GYM ne stocke à aucun moment les coordonnées bancaires du Client.
          Ces données sont traitées directement par Stripe et sont soumises à sa propre
          politique de confidentialité (stripe.com/fr/privacy).
        </p>
        <p>
          En cas d&apos;échec de paiement, la commande est automatiquement annulée.
        </p>
      </LegalSection>

      <LegalSection title="Article 6 — Droit de rétractation">
        <p>
          Conformément aux articles L221-18 et suivants du Code de la consommation, le Client
          dispose d&apos;un délai de <strong className="text-white">14 jours calendaires</strong> à compter
          de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à justifier
          de motif ni à payer de pénalité.
        </p>
        <p>
          Pour exercer ce droit, le Client doit notifier sa décision par email à{" "}
          <a href="mailto:contact@imperium-gym.com" className="text-neon-green hover:underline">
            contact@imperium-gym.com
          </a>{" "}
          ou par courrier à l&apos;adresse du siège social.
        </p>
        <div className="p-3 bg-dark-card border border-dark-border rounded-lg mt-3">
          <p className="text-white font-semibold text-xs uppercase tracking-widest mb-2">Exception importante</p>
          <p>
            Conformément à l&apos;article L221-28 12° du Code de la consommation, le droit de rétractation
            ne peut être exercé pour les contrats de fourniture d&apos;un service pleinement exécuté avant
            la fin du délai de rétractation et dont l&apos;exécution a commencé après accord exprès du consommateur.
          </p>
          <p className="mt-2">
            Si le Client demande expressément à accéder à la salle dès la validation du paiement
            (avant la fin du délai de 14 jours), il reconnaît renoncer à son droit de rétractation
            pour la partie du service déjà consommée.
          </p>
        </div>
        <p className="mt-3">
          En cas de rétractation valide, IMPERIUM GYM procédera au remboursement sous 14 jours
          par le même moyen de paiement que celui utilisé lors de la transaction.
        </p>
      </LegalSection>

      <LegalSection title="Article 7 — Durée et résiliation de l'abonnement">
        <p>
          La durée de l&apos;abonnement est celle mentionnée lors de la souscription (mensuel, trimestriel,
          annuel…). Pour les abonnements sans engagement, le Client peut résilier à tout moment avec
          un préavis d&apos;un (1) mois calendaire, par email à contact@imperium-gym.com.
        </p>
        <p>
          IMPERIUM GYM se réserve le droit de résilier l&apos;abonnement en cas de non-respect du
          règlement intérieur de la salle, sans remboursement de la période restante.
        </p>
      </LegalSection>

      <LegalSection title="Article 8 — Responsabilité">
        <p>
          L&apos;accès à la salle et la pratique sportive se font sous la responsabilité entière du
          Client. IMPERIUM GYM décline toute responsabilité en cas d&apos;accident résultant du
          non-respect des consignes de sécurité ou d&apos;un état de santé incompatible avec la
          pratique sportive.
        </p>
        <p>
          Le Client certifie être médicalement apte à la pratique sportive. Il est recommandé de
          consulter un médecin avant de débuter toute activité physique intensive.
        </p>
      </LegalSection>

      <LegalSection title="Article 9 — Réclamations et litiges">
        <p>
          Pour toute réclamation, le Client peut contacter IMPERIUM GYM à l&apos;adresse
          contact@imperium-gym.com ou par téléphone au +33 4 95 52 33 52.
        </p>
        <p>
          En cas de litige non résolu à l&apos;amiable, le Client peut recourir gratuitement à un
          médiateur de la consommation. En application de l&apos;article L616-1 du Code de la
          consommation, IMPERIUM GYM propose le recours à la médiation via la plateforme
          européenne de règlement en ligne des litiges :{" "}
          <span className="text-white">ec.europa.eu/consumers/odr</span>
        </p>
      </LegalSection>

      <LegalSection title="Article 10 — Droit applicable">
        <p>
          Les présentes CGV sont soumises au droit français.
          Tout litige relatif à leur interprétation ou exécution sera de la compétence exclusive
          des tribunaux de Bastia, sauf disposition légale contraire.
        </p>
      </LegalSection>

    </LegalPage>
  );
}
