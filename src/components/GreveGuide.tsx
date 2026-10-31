import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ClipboardList, ShieldCheck, Info, ExternalLink } from "lucide-react";

const GreveGuide = () => (
  <section id="mobilisation" className="bg-white py-20">
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
              <p>Des manifestations sont annoncées dans de nombreuses villes. Les horaires et lieux de rassemblement sont à vérifier auprès des unions et organisations locales.</p>
              <Button asChild variant="outline" className="mt-2 border-teal-700 text-teal-800 hover:bg-teal-50">
                <a href="https://www.cgt.fr/actualites/france/mobilisation/5-novembre-retrouvez-les-mobilisations-pres-de-chez-vous" target="_blank" rel="noreferrer">Voir la carte des mobilisations <ExternalLink className="ml-2 h-4 w-4" /></a>
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

export default GreveGuide;
