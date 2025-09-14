import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Politique de Confidentialité</h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Collecte des informations</h2>
              <div className="bg-card rounded-lg p-6">
                <p>Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et / ou lorsque vous vous déconnectez.</p>
                <p>Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone, et / ou carte de crédit.</p>
                <p>En outre, nous recevons et enregistrons automatiquement des informations à partir de votre ordinateur et navigateur, y compris votre adresse IP, vos logiciels et matériels, et la page que vous demandez.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Utilisation des informations</h2>
              <div className="bg-card rounded-lg p-6">
                <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                  <li>Fournir un contenu publicitaire personnalisé</li>
                  <li>Améliorer notre site web</li>
                  <li>Améliorer le service client et vos besoins de prise en charge</li>
                  <li>Vous contacter par e-mail</li>
                  <li>Administrer un concours, une promotion, ou une enquête</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Confidentialité du commerce en ligne</h2>
              <div className="bg-card rounded-lg p-6">
                <p>Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction, comme par exemple pour expédier une commande.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Divulgation à des tiers</h2>
              <div className="bg-card rounded-lg p-6">
                <p>Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.</p>
                <p>Nous pensons qu'il est nécessaire de partager des informations afin d'enquêter, de prévenir ou de prendre des mesures concernant des activités illégales, fraudes présumées, situations impliquant des menaces potentielles à la sécurité physique de toute personne, violations de nos conditions d'utilisation, ou quand la loi nous y oblige.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Protection des informations</h2>
              <div className="bg-card rounded-lg p-6">
                <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne. Seuls les employés qui ont besoin d'effectuer un travail spécifique (par exemple, la facturation ou le service à la clientèle) ont accès aux informations personnelles identifiables.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies</h2>
              <div className="bg-card rounded-lg p-6">
                <p>Nous utilisons des cookies pour comprendre et enregistrer vos préférences pour les visites futures et compiler des données globales sur le trafic du site et l'interaction du site afin que nous puissions offrir une meilleure expérience du site et de meilleurs outils à l'avenir. Nous pouvons passer contrat avec des fournisseurs de services tiers pour nous aider à mieux comprendre les visiteurs de notre site.</p>
                <p>Ces fournisseurs de services ne sont pas autorisés à utiliser les informations recueillies en notre nom, sauf pour nous aider à mener et à améliorer nos activités.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Vos droits</h2>
              <div className="bg-card rounded-lg p-6">
                <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données personnelles</li>
                  <li>Droit à l'effacement de vos données personnelles</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                <p className="mt-4">Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@focomues-iliad.fr</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Consentement</h2>
              <div className="bg-card rounded-lg p-6">
                <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
                <p>Cette politique de confidentialité a été mise à jour le : 2025</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;