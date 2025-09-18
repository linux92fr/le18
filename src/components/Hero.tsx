import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Megaphone, UserCheck, FileText } from "lucide-react";
import focomLogo from "@/assets/logo_OP_FOCOM.png";
import poingImage from "@/assets/ensemble_OP.png";

const FlashBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-red-600 text-white overflow-hidden">
      <div className="animate-marquee flex items-center h-full py-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center mx-4">
            <Megaphone className="h-5 w-5 mx-1" />
            <span className="font-bold mx-1">FLASH INFO :</span>
            <span className="mx-1">Dernière chance pour déclarer votre participation à la grève !</span>
            <Megaphone className="h-5 w-5 mx-1" />
          </div>
        ))}
      </div>
    </div>
  );
};


const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  // Ajout du CSS pour l'animation du bandeau
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const revendicationsDetails = (
    <div className="space-y-4 text-center">
      <h2 className="text-xl font-bold text-foreground mx-auto">Nos revendications</h2>
      <ul className="list-disc pl-6 space-y-2 text-sm text-foreground max-w-xs mx-auto">
        <li><strong>Augmentation des salaires</strong> : Pour l'augmentation des salaires, des pensions, des minima sociaux.</li>
        <li><strong>Défense des services publics</strong> : Pour la défense et le renforcement des services publics.</li>
        <li><strong>Contre l'austérité</strong> : Contre l'austérité pour les salariés et les services publics.</li>
        <li><strong>Conditionnalité des aides</strong> : Pour la conditionnalité des aides publiques aux entreprises.</li>
        <li><strong>Justice fiscale</strong> : Pour une répartition équitable des charges fiscales.</li>
        <li><strong>Justice sociale</strong> : Pour une société plus juste et équitable pour tous.</li>
        <li><strong>Techniciens</strong> : Prise en compte du temps de trajet entre le domicile et le premier site, ainsi qu'entre le dernier site et le domicile, comme temps de travail effectif.</li>
      </ul>
      <div className="flex justify-center">
        <a
          href={`${process.env.PUBLIC_URL}/Tract_Revendications_FOCOM_18Sept.pdf`}
          download="Tract_Revendications_FOCOM_18Sept.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:underline font-medium"
          aria-label="Télécharger le tract en PDF"
          onClick={(e) => {
            fetch(`${process.env.PUBLIC_URL}/Tract_Revendications_FOCOM_18Sept.pdf`, {
              method: 'HEAD'
            })
            .then(response => {
              if (!response.ok) {
                e.preventDefault();
                setPdfError(true);
              }
            })
            .catch(() => {
              e.preventDefault();
              setPdfError(true);
            });
          }}
        >
          <FileText className="h-4 w-4 mr-1" />
          Télécharger le tract en PDF
        </a>
      </div>
      {pdfError && (
        <p className="text-sm text-destructive mt-2 text-center">
          Le fichier PDF est introuvable. Veuillez réessayer plus tard.
        </p>
      )}
    </div>
  );

  return (
    <>
      {/* Bandeau flash en haut de page */}
      <FlashBanner />

      <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden pt-10">
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
              <div className="flex justify-center mt-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowModal(false);
                    setPdfError(false);
                  }}
                >
                  Fermer
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
