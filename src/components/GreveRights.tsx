import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Clock3, Euro, FileCheck2, HelpCircle, ShieldCheck, Users } from "lucide-react";

const questions = [
  {
    question: "Peut-on faire grève seulement 1 heure ou 2 heures ?",
    answer: "Oui. Dans le secteur privé, la loi ne fixe aucune durée minimale ni maximale à une grève. Elle peut durer une heure, deux heures, une demi-journée, une journée ou davantage. Il faut toutefois une véritable cessation collective et concertée du travail pour appuyer des revendications professionnelles. Pendant le créneau choisi, le salarié cesse effectivement le travail : une simple baisse de cadence ou une présence sans travailler ne constitue pas une grève."
  },
  {
    question: "Faut-il être plusieurs salariés de l'entreprise ?",
    answer: "En principe, la grève dans une entreprise privée est collective et suppose au moins deux salariés. Exception importante : un salarié peut faire grève seul lorsqu'il répond à un appel national à la grève ou lorsqu'il est l'unique salarié de l'entreprise. Le 5 novembre 2026 s'inscrit dans un appel national interprofessionnel."
  },
  {
    question: "Dois-je prévenir mon responsable ou demander une autorisation ?",
    answer: "Dans le secteur privé, il n'existe en principe ni préavis individuel ni obligation de prévenir personnellement l'employeur avant de faire grève. Aucune autorisation hiérarchique n'est à demander. Les revendications professionnelles doivent cependant être connues de l'employeur au moment où la grève commence. Des règles particulières existent notamment dans certains services publics et activités spécifiques."
  },
  {
    question: "Dois-je fournir un justificatif ou un certificat médical ?",
    answer: "Non. Une participation à la grève n'est pas une maladie : aucun arrêt de travail ni certificat médical n'est à fournir. L'employeur peut demander après coup le motif de l'absence afin de déterminer s'il s'agit d'une grève. Il n'existe pas de formulaire légal obligatoire pour déclarer sa participation."
  },
  {
    question: "Puis-je faire grève le matin et reprendre le travail l'après-midi ?",
    answer: "Oui. Il est possible de cesser le travail sur un créneau déterminé puis de reprendre son activité. Il est également possible de participer à plusieurs arrêts distincts. Chaque période de cessation doit correspondre à une participation réelle au mouvement et respecter le cadre collectif et revendicatif de la grève."
  },
  {
    question: "Comment mon salaire sera-t-il impacté ?",
    answer: "Dans le secteur privé, le contrat de travail est suspendu pendant la grève et une retenue sur salaire est opérée en principe proportionnellement à la durée exacte de l'arrêt. À titre illustratif, pour une journée habituelle de 7 heures, 1 heure de grève représente 1/7 de cette journée et 2 heures représentent 2/7. Le calcul réel dépend de l'horaire et des règles de paie applicables : vérifiez votre bulletin et contactez vos représentants en cas d'écart. Les heures non travaillées du fait de la grève n'ont pas à être récupérées."
  },
  {
    question: "La grève peut-elle entraîner une sanction ou un licenciement ?",
    answer: "Non, le fait d'exercer normalement son droit de grève ne peut pas justifier une sanction, une mesure discriminatoire ou un licenciement. Une exception existe en cas de faute lourde personnellement imputable au salarié, distincte de la simple participation à la grève. Les salariés non-grévistes doivent pouvoir continuer à travailler librement."
  },
  {
    question: "Les primes ou avantages peuvent-ils être diminués ?",
    answer: "Une retenue directement liée à la durée de grève est possible. En revanche, une mesure discriminatoire liée à l'exercice du droit de grève est interdite. Pour une prime liée à la présence ou à l'assiduité, l'employeur ne peut pas traiter les jours de grève plus défavorablement que les autres absences auxquelles la règle de calcul assimile la grève. L'examen dépend du texte qui institue la prime et de ses modalités."
  }
];

const GreveRights = () => (
  <section id="droits-greve" className="scroll-mt-28 scroll-mt-8 bg-slate-50 py-20">
    <div className="container mx-auto px-5">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <Badge className="mb-4 bg-red-100 px-4 py-2 text-red-800 hover:bg-red-100">VOS DROITS · SECTEUR PRIVÉ</Badge>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Faire grève : mode d'emploi</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">Durée, démarches, justificatifs, salaire : les réponses aux questions que vous vous posez avant le 5 novembre.</p>
        </div>

        <div className="mb-7 grid gap-4 sm:grid-cols-2">
          <Card className="rounded-2xl border-red-100 shadow-sm">
            <CardContent className="flex gap-4 p-5">
              <div className="rounded-xl bg-red-50 p-3 text-red-700"><Clock3 className="h-6 w-6" /></div>
              <div><p className="font-extrabold text-slate-950">1 h, 2 h ou plus</p><p className="mt-1 text-sm leading-relaxed text-slate-600">Aucune durée minimale ou maximale prévue par la loi dans le secteur privé.</p></div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-teal-100 shadow-sm">
            <CardContent className="flex gap-4 p-5">
              <div className="rounded-xl bg-teal-50 p-3 text-teal-700"><FileCheck2 className="h-6 w-6" /></div>
              <div><p className="font-extrabold text-slate-950">Pas de justificatif médical</p><p className="mt-1 text-sm leading-relaxed text-slate-600">Pas de certificat ni de formulaire légal à fournir pour une grève.</p></div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-slate-200 shadow-sm">
            <CardContent className="flex gap-4 p-5">
              <div className="rounded-xl bg-slate-100 p-3 text-slate-700"><Euro className="h-6 w-6" /></div>
              <div><p className="font-extrabold text-slate-950">Retenue proportionnelle</p><p className="mt-1 text-sm leading-relaxed text-slate-600">La retenue correspond en principe à la durée non travaillée.</p></div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-slate-200 shadow-sm">
            <CardContent className="flex gap-4 p-5">
              <div className="rounded-xl bg-slate-100 p-3 text-slate-700"><ShieldCheck className="h-6 w-6" /></div>
              <div><p className="font-extrabold text-slate-950">Un droit protégé</p><p className="mt-1 text-sm leading-relaxed text-slate-600">Aucune sanction pour la seule participation à une grève licite.</p></div>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden rounded-2xl border-slate-200 shadow-sm">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 border-b border-slate-100 bg-white p-5">
              <HelpCircle className="h-6 w-6 text-red-600" />
              <h3 className="text-xl font-black text-slate-950">Vos questions, nos réponses</h3>
            </div>
            <div className="divide-y divide-slate-100 bg-white px-5">
              {questions.map((item, index) => (
                <details key={item.question} className="group py-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-slate-900 marker:content-none">
                    <span>{item.question}</span>
                    <span className="mt-0.5 shrink-0 text-xl leading-none text-red-600 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <div className="text-sm leading-relaxed text-amber-950">
              <p className="font-extrabold">Un point de vigilance</p>
              <p className="mt-1">Ces repères concernent principalement les salariés du secteur privé. Des règles particulières peuvent s'appliquer selon l'activité, le statut ou les obligations de continuité du service. En cas de doute sur votre situation, contactez un représentant FO avant le mouvement.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
          <div className="flex items-start gap-3">
            <Users className="mt-1 h-6 w-6 shrink-0 text-teal-300" />
            <div>
              <h3 className="text-xl font-black sm:text-2xl">Le 5 novembre, chacun peut participer à son niveau.</h3>
              <p className="mt-2 leading-relaxed text-white/75">Une heure, deux heures, une demi-journée ou la journée : informez-vous, choisissez votre modalité de participation et faites entendre vos revendications.</p>
              <a href="#generer-notification" className="mt-5 inline-flex rounded-lg bg-red-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-red-500">Préparer un message facultatif à mon responsable</a>
            </div>
          </div>
        </div>

        <div className="mt-7 text-center text-xs leading-relaxed text-slate-500">
          <p>Sources officielles : <a className="font-semibold text-teal-800 underline underline-offset-2" href="https://www.service-public.fr/particuliers/vosdroits/F117" target="_blank" rel="noreferrer">Service-Public.fr – Droit de grève dans le secteur privé</a> · <a className="font-semibold text-teal-800 underline underline-offset-2" href="https://travail-emploi.gouv.fr/la-greve" target="_blank" rel="noreferrer">Ministère du Travail – La grève</a> · <a className="font-semibold text-teal-800 underline underline-offset-2" href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006901450" target="_blank" rel="noreferrer">Code du travail, article L. 2511-1</a>.</p>
          <p className="mt-2">Informations générales à vocation pratique, à vérifier au regard de votre situation individuelle et des textes applicables.</p>
        </div>
      </div>
    </div>
  </section>
);

export default GreveRights;
