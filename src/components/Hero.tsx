import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Megaphone, UserCheck, FileText } from "lucide-react";
import focomLogo from "@/assets/logo_OP_FOCOM.png";
import poingImage from "@/assets/ensemble_OP.png";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const revendicationsDetails = (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Nos revendications</h2>
      <ul className="list-disc pl-6 space-y-2 text-sm text-foreground">
        <li><strong>Augmentation des salaires</strong> : Pour l'augmentation des salaires, des pensions, des minima sociaux.</li>
        <li><strong>Défense des services publics</strong> : Pour la défense et le renforcement des services publics.</li>
        <li><strong>Contre l'austérité</strong> : Contre l'austérité pour les salariés et les services publics.</li>
        <li><strong>Conditionnalité des aides</strong> : Pour la conditionnalité des aides publiques aux entreprises.</li>
        <li><strong>Justice fiscale</strong> : Pour une répartition équitable des charges fiscales.</li>
        <li><strong>Justice sociale</strong> : Pour une société plus juste et équitable pour tous.</li>
        <li><strong>Techniciens</strong> : Prise en compte du temps de trajet entre le domicile et le premier site, ainsi qu'entre le dernier site et le domicile, comme temps de travail effectif.</li>
      </ul>
      <a
        href="/tract-revendications.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary hover:underline"
      >
        <FileText className="h-4 w-4 mr-1" />
        Télécharger le tract en PDF
      </a>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo and Organization */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <img
              src={focomLogo}
              alt="Logo FOCOM"
              className="h-16 w-16 transition-transform duration-300 hover:scale-150"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">FOCOM</h2>
              <p className="text-2xl font-bold text-white/80">UES ILIAD</p>
            </div>
          </div>

          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold text-lg shadow-glow">
            <Calendar className="h-5 w-5" />
            18 SEPTEMBRE
          </div>

          {/* Main Title avec image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-center text-white">
              <span className="block">TOUS</span>
              <span className="block">CONCERNÉS</span>
              <span className="block">TOUS MOBILISÉS</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Contre l'austérité pour les salariés et les services publics.
            La facture du "quoi qu'il en coûte" ne doit pas peser sur les travailleurs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="group">
              <Megaphone className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              J'Y SERAI !
            </Button>
            <Button
              variant="outline-hero"
              size="lg"
              onClick={() => setShowModal(true)}
            >
              <Users className="h-5 w-5 mr-2" />
              Découvrir nos revendications
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-2xl font-bold">Justice</div>
              <div className="text-sm opacity-90">Fiscale</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-2xl font-bold">Justice</div>
              <div className="text-sm opacity-90">Sociale</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-2xl font-bold">Défense</div>
              <div className="text-sm opacity-90">Services Publics</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Modale des revendications */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-background p-6 rounded-lg shadow-lg max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
            {revendicationsDetails}
            <div className="flex justify-end mt-4">
              <Button
                variant="outline"
                onClick={() => setShowModal(false)}
              >
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
