import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, Users, Factory, HeartPulse, Scale, ShieldCheck, Wrench, Clock3, ShoppingCart } from "lucide-react";

const revendications = [
  { icon: Wallet, title: "Des salaires qui suivent le coût de la vie", description: "Ouvrir des négociations salariales dans les entreprises et les branches, revaloriser les rémunérations, le SMIC, les pensions et les minima sociaux.", category: "Pouvoir d'achat" },
  { icon: Users, title: "Défendre l'emploi", description: "Agir contre la précarité et les suppressions d'emplois, sécuriser les parcours professionnels et donner des perspectives à chaque salarié.", category: "Emploi" },
  { icon: Factory, title: "Une industrie et des services solides", description: "Investir dans l'activité, les compétences, la formation et les services publics plutôt que sacrifier l'avenir.", category: "Industrie" },
  { icon: HeartPulse, title: "Protéger la Sécurité sociale", description: "Garantir un financement à la hauteur des besoins et préserver la solidarité et l'accès aux soins.", category: "Protection sociale" },
  { icon: Scale, title: "Une fiscalité plus juste", description: "Faire contribuer justement les richesses et conditionner les aides publiques à des engagements sociaux et environnementaux.", category: "Justice sociale" },
  { icon: ShieldCheck, title: "L'égalité professionnelle", description: "Faire progresser l'égalité salariale entre les femmes et les hommes et l'égalité des carrières.", category: "Égalité" },
  { icon: Wrench, title: "Reconnaître nos métiers chez ILIAD", description: "Préserver les spécialités Réseaux, Radio et Fibre, reconnaître les compétences et refuser la polyvalence imposée.", category: "Métiers techniques" },
  { icon: Clock3, title: "Respecter les conditions de travail", description: "Maintenir les astreintes et leurs compensations, fournir les moyens et les formations nécessaires, prévenir les risques et les surcharges.", category: "Conditions de travail" },
];

const Revendications = () => (
  <section id="revendications" className="scroll-mt-28 bg-[#f5f7fa] py-20">
    <div className="container mx-auto px-5">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <Badge className="mb-4 border-red-200 bg-red-50 px-4 py-2 text-red-700 hover:bg-red-50">CE QUE NOUS DÉFENDONS</Badge>
        <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Des revendications nationales, des réalités concrètes</h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">La mobilisation du 5 novembre porte des exigences communes. Dans les entreprises du groupe ILIAD, elles résonnent avec nos préoccupations quotidiennes.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {revendications.map((item) => (
          <Card key={item.title} className="group h-full rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white"><item.icon className="h-6 w-6" /></div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-wider text-teal-700">{item.category}</p>
              <h3 className="text-lg font-extrabold leading-snug text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl border border-red-200 bg-[#101827] p-7 text-white shadow-xl sm:p-10">
        <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/20 text-red-300">
            <ShoppingCart className="h-8 w-8" />
          </div>
          <div>
            <Badge className="mb-3 border-red-300/30 bg-red-500/15 px-3 py-1.5 text-red-100 hover:bg-red-500/15">LE 5 NOVEMBRE 2026 · UN GESTE CITOYEN</Badge>
            <h3 className="text-2xl font-black sm:text-3xl">Et si nous faisions aussi grève de la consommation ?</h3>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-white/80">
              Le temps d'une journée, reportons les achats et les dépenses non indispensables : pas de shopping, pas d'achats de confort, pas de consommation superflue. L'objectif de cet appel citoyen est de rendre visible le poids collectif des consommateurs et de faire entendre que l'activité économique repose aussi sur les choix de la population.
            </p>
            <p className="mt-3 text-sm font-semibold text-teal-200">
              Consommer est un choix. Ne pas consommer peut aussi être un message. Demos Kratos : le pouvoir au peuple.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/55">
              Chacun agit librement, selon ses moyens et ses nécessités : les achats essentiels, les soins et les besoins des personnes à charge restent prioritaires.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 rounded-2xl border-l-4 border-teal-500 bg-white p-6 shadow-sm">
        <p className="font-bold text-slate-900">FO COM UES ILIAD rappelle :</p>
        <p className="mt-2 leading-relaxed text-slate-600">le volontariat doit rester un choix. Les changements de métiers ou de périmètres ne doivent ni effacer les compétences, ni dégrader les rémunérations, ni remettre en cause les astreintes et leurs compensations.</p>
      </div>
    </div>
  </section>
);

export default Revendications;
