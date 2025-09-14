import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ScrollToTop from "@/components/ScrollToTop";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-8 text-center">Politique de Confidentialité</h1>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Absence de collecte de données</h2>
              <div className="bg-card rounded-lg p-6">
                <p>
                  <strong>Ce site ne collecte, ne stocke, ni ne traite aucune donnée personnelle.</strong>
                </p>
                <p>
                  Tous les outils proposés (comme le générateur de notification de grève) fonctionnent <strong>uniquement en local dans votre navigateur</strong>. Aucune information saisie (noms, emails, messages, etc.) n'est transmise, enregistrée ou conservée sur nos serveurs.
                </p>
                <p>
                  Nous n'utilisons aucun système de suivi, de base de données, ou de stockage pour les informations que vous pourriez entrer sur ce site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Utilisation des outils</h2>
              <div className="bg-card rounded-lg p-6">
                <p>
                  Les outils disponibles (ex. : générateur d'email pour la grève) sont conçus pour :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Fonctionner entièrement côté client (dans votre navigateur).</li>
                  <li>Ne pas transmettre d'informations à des serveurs externes.</li>
                  <li>Vous permettre de générer des contenus (emails, documents) sans laisser de trace.</li>
                </ul>
                <p className="mt-4">
                  Par exemple, le formulaire de notification de grève ne fait que préparer un email dans votre client mail par défaut, sans conservation des données saisies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Protection de votre vie privée</h2>
              <div className="bg-card rounded-lg p-6">
                <p>
                  Votre vie privée est notre priorité. Nous nous engageons à :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Ne pas utiliser de cookies ou de technologies de suivi.</li>
                  <li>Ne pas partager d'informations avec des tiers (puisqu'aucune n'est collectée).</li>
                  <li>Ne pas enregistrer d'adresses IP, de logs, ou de données de navigation.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Transparence totale</h2>
              <div className="bg-card rounded-lg p-6">
                <p>
                  Ce site est conçu pour être <strong>100% respectueux de votre anonymat</strong>. Vous pouvez l'utiliser en toute confiance, sans crainte pour la sécurité de vos données personnelles.
                </p>
                <p>
                  Si vous avez des questions sur notre approche de la confidentialité, vous pouvez nous contacter à : <a href="mailto:contact@focomues-iliad.fr" className="text-primary">contact@focomues-iliad.fr</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Mise à jour</h2>
              <div className="bg-card rounded-lg p-6">
                <p>
                  Cette politique de confidentialité a été mise à jour le : <strong>14 septembre 2025</strong>.
                </p>
                <p>
                  En cas de modification de nos pratiques (ex. : ajout d'un nouvel outil), nous mettrons à jour cette page pour refléter ces changements.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PolitiqueConfidentialite;
