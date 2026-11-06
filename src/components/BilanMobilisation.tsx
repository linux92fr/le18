import { AlertTriangle, Flag, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const BilanMobilisation = () => (
  <section id="bilan" className="scroll-mt-24 bg-white py-20">
    <div className="container mx-auto px-5">
      <div className="mx-auto max-w-4xl text-center">
        <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700">NOTRE REGARD SUR LE 5 NOVEMBRE</span>
        <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Un rendez-vous réussi dans la rue, manqué chez ILIAD.</h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">La mobilisation dans les manifestations a montré que la colère sociale et les attentes restent fortes. Dans notre entreprise, la faible participation est un signal que FO doit regarder en face, sans chercher d’excuses et surtout sans culpabiliser les salariés.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <Card className="rounded-2xl border-slate-200 shadow-sm"><CardContent className="p-6"><Flag className="h-8 w-8 text-red-600"/><h3 className="mt-4 text-xl font-black">La rue au rendez-vous</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">Une mobilisation visible et déterminée. Merci à celles et ceux qui se sont déplacés et ont fait entendre leurs exigences.</p></CardContent></Card>
        <Card className="rounded-2xl border-amber-200 bg-amber-50/60 shadow-sm"><CardContent className="p-6"><AlertTriangle className="h-8 w-8 text-amber-700"/><h3 className="mt-4 text-xl font-black">Une participation faible chez ILIAD</h3><p className="mt-2 text-sm leading-relaxed text-slate-700">C’est une déception pour FO. Nous devons comprendre les raisons : contraintes financières, manque de confiance, sentiment que les revendications ne parlent pas assez du quotidien ?</p></CardContent></Card>
        <Card className="rounded-2xl border-teal-200 bg-teal-50/50 shadow-sm"><CardContent className="p-6"><Handshake className="h-8 w-8 text-teal-700"/><h3 className="mt-4 text-xl font-black">En tirer les leçons</h3><p className="mt-2 text-sm leading-relaxed text-slate-700">Nous voulons reconstruire avec vous une démarche qui parte du terrain, de vos difficultés et de vos priorités réelles dans chaque entité.</p></CardContent></Card>
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-500">Ne pas avoir fait grève ne signifie pas être indifférent. Notre responsabilité est d’écouter, de comprendre les obstacles et de proposer des actions qui vous ressemblent.</p>
    </div>
  </section>
);
export default BilanMobilisation;
