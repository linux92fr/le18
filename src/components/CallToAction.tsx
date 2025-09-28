import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Users2 } from "lucide-react";
import poingImage from "@/assets/ensemble_OP.png";

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(0_72%_51%/0.1),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="bg-card rounded-3xl p-12 shadow-card border mb-12 backdrop-blur-sm bg-card/80">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="h-8 w-8 text-primary" />
              <span className="text-3xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent">
                02 OCTOBRE 2025
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">J'Y SERAI !</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Rejoins-nous pour défendre nos droits
              <br />
              et nos services publics. Ensemble, nous pouvons faire la différence !
            </p>

            <div className="flex justify-center items-center w-full h-full my-8">
              <img
                src={poingImage}
                alt="Poing levé"
                className="w-48 h-auto"
              />
            </div>

            {/* Supporting Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
                <div className="text-primary font-bold text-2xl mb-2">
                  Tous concernés
                </div>
                <p className="text-muted-foreground text-sm">
                  Chaque travailleur est impacté par ces politiques d'austérité
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
                <div className="text-primary font-bold text-2xl mb-2">
                  Tous mobilisés
                </div>
                <p className="text-muted-foreground text-sm">
                  L'union fait la force face aux injustices sociales
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
                <div className="text-primary font-bold text-2xl mb-2">
                  Tous ensemble
                </div>
                <p className="text-muted-foreground text-sm">
                  Pour construire une société plus juste et équitable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
