import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ScrollToTop from "@/components/ScrollToTop";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-8 text-center">Mentions Légales</h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Éditeur du site</h2>
              <div className="bg-card rounded-lg p-6">
                <p><strong>Organisation :</strong> FOCOM UES ILIAD</p>
                <p><strong>Siège social :</strong> [Adresse à compléter]</p>
                <p><strong>Email :</strong> contact@focomues-iliad.fr</p>
                <p><strong>Téléphone :</strong> [Numéro à compléter]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Hébergement</h2>
              <div className="bg-card rounded-lg p-6">
                <p>Ce site est hébergé par :</p>
                <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
                <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Propriété intellectuelle</h2>
              <div className="bg-card rounded-lg p-6">
                <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Responsabilité</h2>
              <div className="bg-card rounded-lg p-6">
                <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année.</p>
                <p>Cependant, des erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations et signaler toutes erreurs ou omissions.</p>
                <p>FOCOM UES ILIAD ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Données personnelles</h2>
              <div className="bg-card rounded-lg p-6">
                <p>En général, vous n'êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet.</p>
                <p>Cependant, ce principe comporte certaines exceptions. En effet, pour certains services proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom, votre fonction, le nom de votre société, votre adresse électronique, et votre numéro de téléphone.</p>
                <p>Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique « contact ».</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Droit applicable et juridiction compétente</h2>
              <div className="bg-card rounded-lg p-6">
                <p>Tout litige en relation avec l'utilisation du site est soumis au droit français.</p>
                <p>Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
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

export default MentionsLegales;