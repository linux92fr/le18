import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Download,
  Quote,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BILAN_PDF_PATH,
  actions,
  barriers,
  bilanStats,
  engagements,
  entities,
  priorities,
  testimonies,
} from "@/data/bilanMobilisation";

type ResultItem = {
  label: string;
  count: number;
  color?: string;
};

const BarBreakdown = ({ items }: { items: readonly ResultItem[] }) => {
  const maximum = Math.max(1, ...items.map((item) => item.count));

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item.label}>
          <div className="mb-1.5 flex items-start justify-between gap-4 text-sm">
            <span className="font-semibold leading-snug text-slate-700">{item.label}</span>
            <strong className="shrink-0 tabular-nums text-slate-950">{item.count}</strong>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
            <div
              className="h-full rounded-full"
              style={{
                width: `${(item.count / maximum) * 100}%`,
                backgroundColor:
                  item.color ||
                  ["#dc2626", "#0f766e", "#0284c7", "#7c3aed", "#d97706", "#334155"][index % 6],
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const BilanMobilisation = () => (
  <section id="bilan" className="scroll-mt-24 bg-slate-50 py-20">
    <div className="container mx-auto px-5">
      <div className="mx-auto max-w-5xl text-center">
        <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700">
          CONSULTATION POST-MOBILISATION · 5 NOVEMBRE 2026
        </span>
        <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          La rue a répondu. Pas chez ILIAD : votre parole compte.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
          FO COM UES ILIAD a recueilli 49 réponses après la mobilisation du 5 novembre. Le bilan
          met au jour les freins à la participation, les priorités des salariés et les formes
          d’action qu’ils attendent.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-500">
          Ces résultats reflètent les personnes ayant répondu et constituent un éclairage de
          terrain, non un sondage représentatif de l’ensemble des salariés.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {bilanStats.map((stat, index) => (
          <Card key={stat.label} className={`rounded-2xl border-0 shadow-sm ${index === 0 ? "bg-slate-950 text-white" : "bg-white"}`}>
            <CardContent className="p-6">
              <p className={`text-4xl font-black tabular-nums ${index === 0 ? "text-white" : "text-slate-950"}`}>{stat.value}</p>
              <p className={`mt-2 text-sm font-semibold ${index === 0 ? "text-white/65" : "text-slate-500"}`}>{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Users className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="text-xl font-black text-slate-950">Participation par entité</h3>
                <p className="text-sm text-slate-500">Une consultation fortement portée par le terrain Réseau.</p>
              </div>
            </div>
            <BarBreakdown items={entities} />
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <div className="rounded-3xl bg-[#0c1a2c] p-8 text-white shadow-sm">
            <BarChart3 className="h-8 w-8 text-teal-300" />
            <p className="mt-6 text-5xl font-black text-red-400">80 %</p>
            <h3 className="mt-3 text-2xl font-black">des réponses viennent du terrain Réseau</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              39 salariés de Free Réseau / Maintenance Réseaux ont répondu, avec une moyenne de
              3,4 priorités exprimées par salarié.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-amber-800">À retenir</p>
            <p className="mt-3 text-lg font-bold leading-snug text-slate-950">
              86 % placent les salaires et le pouvoir d’achat en priorité n°1.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-red-700">Non-participation</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">Pourquoi les salariés ne se sont pas mobilisés</h3>
            <div className="mt-6">
              <BarBreakdown items={barriers} />
            </div>
            <div className="mt-6 rounded-2xl border-l-4 border-red-500 bg-red-50 p-4">
              <p className="font-bold leading-snug text-slate-950">
                Défaut d’information et perte de salaire représentent 49 % des freins cités.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">Priorités internes</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">Les 166 priorités exprimées</h3>
            <div className="mt-6">
              <BarBreakdown items={priorities} />
            </div>
            <div className="mt-6 rounded-2xl border-l-4 border-teal-500 bg-teal-50 p-4">
              <p className="font-bold leading-snug text-slate-950">
                Le pouvoir d’achat arrive en tête avec 42 citations, devant la reconnaissance des
                métiers et les repas.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 rounded-3xl border-slate-200 shadow-sm">
        <CardContent className="p-6 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-700">Modes d’action</p>
          <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-2xl font-black text-slate-950">Ce que les salariés attendent de FO</h3>
              <p className="mt-2 text-sm text-slate-500">Des actions précises, ancrées dans les métiers et les établissements.</p>
            </div>
            <p className="max-w-sm text-sm font-bold leading-relaxed text-slate-700">
              « Cibler nos métiers et agir sur des demandes précises. »
            </p>
          </div>
          <div className="mt-7">
            <BarBreakdown items={actions} />
          </div>
        </CardContent>
      </Card>

      <div className="mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700">PAROLE DES SALARIÉS</span>
          <h3 className="mt-5 text-3xl font-black text-slate-950 sm:text-4xl">Des difficultés concrètes, sans filtre</h3>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {testimonies.map((testimony) => (
            <Card key={testimony.topic} className="rounded-2xl border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <Quote className="h-7 w-7 text-red-600" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-teal-700">{testimony.topic}</p>
                <blockquote className="mt-3 text-lg font-semibold leading-relaxed text-slate-800">
                  « {testimony.quote} »
                </blockquote>
                <p className="mt-4 text-xs font-semibold text-slate-500">{testimony.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div id="engagements" className="mt-16 scroll-mt-24 rounded-[2rem] bg-[#0b1220] p-7 text-white sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">Feuille de route FO COM UES ILIAD</p>
          <h3 className="mt-4 text-3xl font-black sm:text-4xl">Nos 4 engagements immédiats</h3>
          <p className="mt-4 text-white/70">
            Le questionnaire est désormais fermé. Les résultats deviennent notre mandat d’action
            pour les prochains échanges avec la direction et dans les équipes.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {engagements.map((engagement) => (
            <div key={engagement.number} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-600 text-sm font-black">{engagement.number}</span>
                <h4 className="text-xl font-black">{engagement.title}</h4>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/65">{engagement.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-8 w-8 shrink-0 text-teal-600" />
          <div>
            <p className="font-black text-slate-950">Le questionnaire est clos</p>
            <p className="mt-1 text-sm text-slate-500">Les réponses reçues restent disponibles aux administrateurs autorisés pour l’analyse et les exports.</p>
          </div>
        </div>
        <a href={BILAN_PDF_PATH} download className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-black text-white transition hover:bg-red-700">
          <Download className="h-5 w-5" /> Bilan complet en PDF
        </a>
      </div>

      <div className="mt-8 flex justify-center">
        <a href="#revendications" className="inline-flex items-center gap-2 text-sm font-black text-red-700 hover:text-red-800">
          Voir nos priorités revendicatives <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default BilanMobilisation;
