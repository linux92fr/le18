import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Users, Utensils, Network, Clock3, BriefcaseBusiness, ShieldCheck, Wrench } from "lucide-react";
const priorities = [
 {icon:Wallet,title:"Pouvoir d’achat et rémunérations",description:"Des augmentations réelles. L’enveloppe NAO doit améliorer les salaires, pas être absorbée par le simple rattrapage des minima conventionnels."},
 {icon:BriefcaseBusiness,title:"Stop aux réorganisations subies",description:"Des projets expliqués, discutés et anticipés. Pas de transformations imposées qui déstabilisent les équipes et dégradent le travail."},
 {icon:Users,title:"Défendre l’emploi",description:"Mettre fin aux suppressions de postes et aux départs qui suivent les réorganisations. Donner de la visibilité sur les effectifs et les activités."},
 {icon:Wrench,title:"Reconnaissance des métiers",description:"Reconnaître les compétences, les qualifications et les spécialités. Refuser la polyvalence imposée lorsqu’elle efface les métiers et transfère les contraintes sur les salariés."},
 {icon:Network,title:"Maintenance Réseaux : préserver les compétences",description:"Des moyens, des formations et des parcours professionnels cohérents. La polyvalence ne doit pas devenir une obligation sans reconnaissance ni contrepartie."},
 {icon:Utensils,title:"Pouvoir déjeuner dignement",description:"Revaloriser les titres-restaurant et les indemnités repas pour tenir compte du coût réel des repas et des contraintes de terrain."},
 {icon:Clock3,title:"Temps de trajet des itinérants",description:"Reconnaître le temps de déplacement professionnel selon les contraintes réelles et garantir une compensation claire, équitable et vérifiable."},
 {icon:ShieldCheck,title:"Conditions de travail et respect",description:"Prévenir les risques, écouter les équipes, donner les moyens de faire un travail de qualité et associer réellement les salariés aux changements."},
];
const Revendications = () => (
 <section id="revendications" className="scroll-mt-24 bg-[#f5f7fa] py-20">
  <div className="container mx-auto px-5">
   <div className="mx-auto mb-12 max-w-3xl text-center">
    <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700">LES PRIORITÉS CHEZ ILIAD</span>
    <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Des revendications qui partent de votre quotidien.</h2>
    <p className="mt-4 text-lg leading-relaxed text-slate-600">Le national ne doit pas faire disparaître l’entreprise. Notre priorité est de porter les difficultés concrètes des salariés de toutes les entités de l’UES ILIAD.</p>
   </div>
   <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {priorities.map(({icon:Icon,title,description})=><Card key={title} className="h-full rounded-2xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><CardContent className="p-6"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600"><Icon className="h-6 w-6"/></div><h3 className="mt-5 text-lg font-black leading-snug text-slate-900">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p></CardContent></Card>)}
   </div>
   <div className="mt-10 rounded-2xl border-l-4 border-teal-500 bg-white p-6 shadow-sm"><p className="font-black text-slate-900">Notre méthode doit changer.</p><p className="mt-2 leading-relaxed text-slate-600">Partir des situations vécues, documenter les problèmes, construire les revendications avec les salariés et rendre compte des démarches engagées. Les revendications nationales gardent leur place, mais elles ne doivent plus reléguer les réalités d’ILIAD au second plan.</p></div>
  </div>
 </section>
);
export default Revendications;
