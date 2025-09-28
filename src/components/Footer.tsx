import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Users } from "lucide-react";
import focomLogo from "@/assets/logo_OP_FOCOM.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <img src={focomLogo} alt="Logo FOCOM" className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold">FOCOM</h3>
                <p className="text-2xl font-bold">UES ILIAD 2025</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              Organisation syndicale engagée pour la défense des droits des travailleurs 
              et la justice sociale au sein du groupe Iliad.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Groupe Iliad</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@focomues-iliad.fr</span>
              </div>              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Liens utiles</h4>
            <div className="space-y-3">
              <a href="#revendications" className="block text-primary-foreground/90 hover:text-white transition-colors text-sm">
                Nos revendications
              </a>
              <a href="#mobilisation" className="block text-primary-foreground/90 hover:text-white transition-colors text-sm">
                Mobilisation 18 septembre
              </a>
            </div>
          </div>

        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 FOCOM UES ILIAD. Tous droits réservés.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="/mentions-legales" className="text-primary-foreground/80 hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="/politique-confidentialite" className="text-primary-foreground/80 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>

        {/* Mobilization Reminder */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="font-semibold">Rendez-vous le 02 octobre !</span>
            <span className="text-primary-foreground/80">Tous concernés, tous mobilisés</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
