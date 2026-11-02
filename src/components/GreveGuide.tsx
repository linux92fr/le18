import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, ClipboardList, ShieldCheck, Info, Mail, Clock, Copy } from "lucide-react";

const GreveGuide = () => {
  const [hierarchieUser, setHierarchieUser] = useState("");
  const [ccEmailsUser, setCcEmailsUser] = useState("");
  const [heuresGreve, setHeuresGreve] = useState("");
  const [messagePersonnalise, setMessagePersonnalise] = useState("");
  const [copied, setCopied] = useState(false);

  const recipient = hierarchieUser.trim().includes("@")
    ? hierarchieUser.trim()
    : hierarchieUser.trim() ? `${hierarchieUser.trim()}@iliad-free.fr` : "";

  const ccList = [
    "cseuesiliad@iliad.fr",
    ...ccEmailsUser.split(",").map((value) => value.trim()).filter(Boolean).map((value) =>
      value.includes("@") ? value : `${value}@iliad-free.fr`
    ),
  ];

  const subject = "Participation à la grève du 5 novembre 2026";
  const body = [
    "Bonjour,",
    "",
    "Je vous informe que je participerai au mouvement de grève du jeudi 5 novembre 2026, dans le cadre des revendications portées par l'appel à la mobilisation.",
    "",
    heuresGreve.trim()
      ? `Ma participation est prévue sur le(s) créneau(x) suivant(s) : ${heuresGreve.trim()}.`
      : "Ma participation est prévue pour la journée.",
    messagePersonnalise.trim() ? `\n${messagePersonnalise.trim()}` : "",
    "",
    "Cordialement.",
  ].filter(Boolean).join("\n");

  const mailto = `mailto:${recipient}?cc=${encodeURIComponent(ccList.join(","))}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copyMessage = async () => {
    await navigator.clipboard.writeText(`À : ${recipient}\nCc : ${ccList.join(", ")}\nObjet : ${subject}\n\n${body}`);
    setCopied(true);
  };

  return (
    <section id="mobilisation" className="scroll-mt-28 bg-white py-20">
      <div className="container mx-auto px-5">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-teal-50 px-4 py-2 text-teal-800 hover:bg-teal-50">JEUDI 5 NOVEMBRE 2026</Badge>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">La mobilisation, concrètement</h2>
            <p className="mt-4 text-lg text-slate-600">Les repères essentiels pour comprendre l'appel et préparer cette journée.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl border-slate-200 shadow-sm">
              <CardHeader><CardTitle className="flex items-center gap-3 text-xl"><CalendarDays className="h-6 w-6 text-red-600" /> Une journée nationale</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-slate-600">
                <p>Une intersyndicale composée de la CFDT, de la CGT, de FO, de l'UNSA et de la FSU appelle les salariés du privé et du public, les jeunes et les retraités à se mobiliser.</p>
                <p>Des manifestations sont annoncées dans de nombreuses villes. Retrouvez les lieux et horaires confirmés sur notre carte des rassemblements.</p>
                <Button asChild variant="outline" className="mt-2 border-teal-700 text-teal-800 hover:bg-teal-50">
                  <a href="#carte-mobilisations">Consulter la carte des mobilisations</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-slate-200 shadow-sm">
              <CardHeader><CardTitle className="flex items-center gap-3 text-xl"><ShieldCheck className="h-6 w-6 text-teal-700" /> Exercer son droit de grève</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-slate-600">
                <p>Dans le secteur privé, la grève est une cessation collective et concertée du travail pour appuyer des revendications professionnelles. Un salarié peut rejoindre un mouvement déjà engagé.</p>
                <p>En règle générale, un salarié du privé n'a pas à prévenir individuellement son employeur à l'avance, sauf situation particulière (notamment certains services publics ou règles spécifiques applicables).</p>
                <p>La participation entraîne en principe une retenue de salaire proportionnelle à la durée de l'arrêt de travail. Une sanction motivée par le seul fait de grève est interdite.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 rounded-2xl border-amber-200 bg-amber-50/70 shadow-none">
            <CardHeader><CardTitle className="flex items-center gap-3 text-lg text-amber-950"><Info className="h-5 w-5" /> Avant de participer</CardTitle></CardHeader>
            <CardContent className="text-sm leading-relaxed text-amber-950/80">
              Vérifiez les consignes applicables à votre activité, notamment si vous exercez une mission relevant d'un service soumis à des règles particulières. Les conditions d'exercice peuvent différer selon le secteur et le statut. Cette page fournit des informations générales et ne remplace pas un conseil juridique adapté à votre situation.
            </CardContent>
          </Card>

          <Card id="generer-notification" className="mt-6 scroll-mt-32 rounded-2xl border-red-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3 text-xl"><Mail className="h-6 w-6 text-red-600" /> Préparer mon message de participation à la grève</CardTitle>
              <p className="text-center text-sm text-slate-600">Un message prérempli à adresser à votre hiérarchie, si vous choisissez de l'en informer.</p>
            </CardHeader>
            <CardContent className="mx-auto max-w-2xl space-y-5">
              <div className="space-y-2">
                <Label htmlFor="hierarchie">Adresse e-mail de votre RH *</Label>
                <Input id="hierarchie" value={hierarchieUser} onChange={(e) => setHierarchieUser(e.target.value)} placeholder="prenom.nom ou adresse complète" />
                <p className="text-xs text-slate-500">Vous pouvez saisir un identifiant Iliad (le domaine @iliad-free.fr sera ajouté) ou une adresse complète.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ccEmails">Autres destinataires en copie (Votre N+1))</Label>
                <Input id="ccEmails" value={ccEmailsUser} onChange={(e) => setCcEmailsUser(e.target.value)} placeholder="Identifiants ou adresses, séparés par des virgules" />
                <p className="text-xs text-slate-500">cseuesiliad@iliad.fr sera automatiquement ajouté en copie.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="heuresGreve" className="flex items-center gap-2"><Clock className="h-4 w-4" /> Horaires de grève (facultatif)</Label>
                <Input id="heuresGreve" value={heuresGreve} onChange={(e) => setHeuresGreve(e.target.value)} placeholder="Ex. : 9h-12h et 14h-17h" />
                <p className="text-xs text-slate-500">Laissez vide si vous souhaitez indiquer une participation pour la journée.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="messagePersonnalise">Message complémentaire (facultatif)</Label>
                <Textarea id="messagePersonnalise" value={messagePersonnalise} onChange={(e) => setMessagePersonnalise(e.target.value)} placeholder="Ajoutez un message si vous le souhaitez…" rows={3} />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button asChild disabled={!recipient} className="w-full bg-red-600 hover:bg-red-700">
                  <a href={recipient ? mailto : undefined}><Mail className="mr-2 h-4 w-4" /> Ouvrir ma messagerie</a>
                </Button>
                <Button type="button" variant="outline" disabled={!recipient} onClick={copyMessage}>
                  <Copy className="mr-2 h-4 w-4" /> {copied ? "Message copié" : "Copier le message"}
                </Button>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
                <p className="font-semibold text-slate-800">À savoir</p>
                <p className="mt-1">Ce formulaire prépare un e-mail dans votre propre messagerie ou copie le texte dans votre presse-papiers. Aucune donnée saisie n'est envoyée ni enregistrée par ce site. Dans le secteur privé, l'information préalable individuelle de l'employeur n'est en principe pas obligatoire : ce message est facultatif. Pensez à vérifier les règles particulières applicables à votre situation.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6 rounded-2xl border-slate-200 shadow-sm">
            <CardHeader><CardTitle className="flex items-center gap-3 text-xl"><ClipboardList className="h-6 w-6 text-red-600" /> Informez-vous et faites connaître vos revendications</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed text-slate-600">
              <p>Échangez avec vos collègues, rapprochez-vous de vos représentants syndicaux et consultez les informations locales actualisées. La participation reste une décision individuelle, exercée dans le cadre collectif de l'appel.</p>
              <p>FO COM UES ILIAD porte également les sujets propres aux salariés du groupe : pouvoir d'achat, réorganisations, emplois, reconnaissance des compétences et conditions de travail.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GreveGuide;
