import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarDays, Megaphone } from "lucide-react";
const posterPath = "/Grève_générale_FO_ensemble_le5novembre2026.png";

const CallToAction = () => (
  <section className="relative overflow-hidden bg-[#101827] py-20 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(20,184,166,0.16),transparent_48%),radial-gradient(ellipse_at_90%_20%,rgba(220,38,38,0.25),transparent_45%)]" />
    <div className="container relative z-10 mx-auto px-5">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur sm:p-12 lg:grid-cols-[1fr_260px]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-teal-200"><CalendarDays className="h-4 w-4" /> Jeudi 5 novembre 2026</div>
          <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Salariés du public et du privé : même combat, mêmes droits, même avenir.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">Augmentez les salaires, pas l'âge de la retraite. Travailler plus pour gagner moins : ça suffit ! Défendons nos services publics et nos droits.</p>
          <Button asChild size="lg" className="mt-8 h-14 bg-red-600 px-7 font-extrabold hover:bg-red-500">
            <a href="https://greve.focomues-iliad.fr" target="_blank" rel="noreferrer">Toutes les infos sur la grève <ArrowUpRight className="ml-2 h-5 w-5" /></a>
          </Button>
        </div>
        <a href={posterPath} download className="mx-auto block w-full max-w-[260px] overflow-hidden rounded-2xl border border-white/15 shadow-2xl transition hover:-translate-y-1">
          <img src={posterPath} alt="Tract officiel FO COM UES ILIAD – Grève générale du 5 novembre 2026" className="w-full" />
          <span className="block bg-red-600 px-4 py-3 text-center text-sm font-extrabold text-white">Télécharger le tract</span>
        </a>
      </div>
    </div>
  </section>
);

export default CallToAction;
