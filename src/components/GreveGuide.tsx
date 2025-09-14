import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, FileText, Scale, UserCheck } from "lucide-react";
import personnageImage from "@/assets/luffy-chibi.png";

const GreveGuide = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    hierarchieUser: "", // Partie avant le @ pour la hiérarchie
    ccEmailsUser: "",   // Partie avant le @ pour les emails en copie
    messagePersonnalise: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateMailLink = () => {
    const sujet = `Préavis de grève - ${formData.prenom} ${formData.nom}`;
    const ccList = `cseuesiliad@iliad.fr${formData.ccEmailsUser ? ',' + formData.ccEmailsUser.split(',').map(email => email.trim() + '@iliad-free.fr').join(',') : ''}`;

    const corpsMessage = `
Objet : Préavis de grève
Bonjour,
Je vous informe de mon intention de participer à la grève prévue le 18 septembre 2025, dans le cadre des revendications portées par FOCOM UES ILIAD.
Conformément aux dispositions légales en vigueur, je vous notifie par avance ma participation à ce mouvement de grève.
${formData.messagePersonnalise ? `\n${formData.messagePersonnalise}\n` : ''}
Je vous prie de trouver ci-joint le tract détaillant les revendications du mouvement.
Cordialement,
${formData.prenom} ${formData.nom}
---
Cette notification de grève est effectuée conformément à l'article L. 2512-2 du Code du travail.
`;

    const mailtoLink = `mailto:${formData.hierarchieUser}@iliad-free.fr?cc=${encodeURIComponent(ccList)}&subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corpsMessage)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-16 bg-surface-gradient" id="comment-faire-greve">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-6 py-2 text-lg font-semibold">
              <Scale className="h-5 w-5 mr-2" />
              Guide Pratique
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Comment faire grève chez <span className="bg-text-gradient bg-clip-text text-transparent">ILIAD</span> ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vos droits et les démarches à suivre pour exercer votre droit de grève dans le secteur privé
            </p>
          </div>

          {/* Droits du salarié */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-48 h-auto mb-4 md:mb-0">
              <img
                src={personnageImage}
                alt="Personnage surprise"
                className="w-full h-auto object-contain"
              />
            </div>
            <Card className="shadow-card flex-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-primary" />
                  Vos droits en tant que salarié du secteur privé
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">✓ Vous avez le droit de :</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Participer à la grève sans autorisation préalable</li>
                      <li>• Ne pas être sanctionné pour fait de grève</li>
                      <li>• Retrouver votre poste à l'issue de la grève</li>
                      <li>• Bénéficier de la protection contre le licenciement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-destructive">⚠️ À savoir :</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• La grève suspend le contrat de travail</li>
                      <li>• Pas de rémunération pendant la grève</li>
                      <li>• Préavis recommandé mais non obligatoire</li>
                      <li>• Respecter les modalités d'exercice du droit de grève</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                Générer votre notification de grève
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="nom">Nom *</Label>
                  <Input
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Champ email hiérarchie */}
              <div>
                <Label htmlFor="hierarchie">Email de votre hiérarchie directe *</Label>
                <div className="flex">
                  <Input
                    id="hierarchie"
                    name="hierarchieUser"
                    value={formData.hierarchieUser}
                    onChange={handleInputChange}
                    placeholder="N+1"
                    required
                    className="rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-2"
                  />
                  <div className="flex items-center px-3 border border-input bg-background rounded-r-md text-sm text-muted-foreground">
                    @iliad-free.fr
                  </div>
                </div>
              </div>

              {/* Champ emails en copie */}
              <div>
                <Label htmlFor="ccEmails">Emails en copie (optionnel, séparés par des virgules)</Label>
                <div className="flex">
                  <Input
                    id="ccEmails"
                    name="ccEmailsUser"
                    value={formData.ccEmailsUser}
                    onChange={handleInputChange}
                    placeholder="votre RH, collègue2"
                    className="rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-2"
                  />
                  <div className="flex items-center px-3 border border-input bg-background rounded-r-md text-sm text-muted-foreground">
                    @iliad-free.fr
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  L'adresse cseuesiliad@iliad.fr sera automatiquement ajoutée en copie.
                </p>
              </div>

              {/* Champ message personnalisé */}
              <div>
                <Label htmlFor="messagePersonnalise">Message personnalisé (optionnel)</Label>
                <Textarea
                  id="messagePersonnalise"
                  name="messagePersonnalise"
                  value={formData.messagePersonnalise}
                  onChange={handleInputChange}
                  placeholder="Ajoutez un message personnel si vous le souhaitez..."
                  rows={3}
                />
              </div>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={generateMailLink}
                  disabled={!formData.prenom || !formData.nom || !formData.hierarchieUser}
                  className="flex-1"
                  size="lg"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Ouvrir dans ma messagerie
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/tract-revendications.pdf" download="Tract_Revendications_FOCOM_18Sept.pdf">
                    <FileText className="h-5 w-5 mr-2" />
                    Télécharger le tract
                  </a>
                </Button>
              </div>

              {/* Note importante */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note importante :</strong> Ce formulaire génère un email pré-formaté dans votre client mail par défaut.
                  N'oubliez pas de joindre le tract des revendications en pièce jointe avant d'envoyer votre email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GreveGuide;
