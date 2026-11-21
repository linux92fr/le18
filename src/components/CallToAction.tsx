import { ArrowRight, Download } from "lucide-react";
import { BILAN_PDF_PATH } from "@/data/bilanMobilisation";

const CallToAction = () => (
  <section id="appel-action" className="relative overflow-hidden bg-[#101827] py-20 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(20,184,166,0.16),transparent_48%),radial-gradient(ellipse_at_90%_20%,rgba(220,38,38,0.25),transparent_45%)]" />
    <div className="container relative z-10 mx-auto px-5">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-center backdrop-blur sm:p-12">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-200">La suite se construit avec vous</p>
        <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          Les priorités sont claires. Passons maintenant aux actes.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
          Les 49 réponses recueillies deviennent notre feuille de route : mieux informer,
          revendiquer au plus près des métiers, consulter avant d’agir et renforcer l’unité
          syndicale.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#engagements" className="inline-flex items-center justify-center rounded-xl bg-red-600 px-7 py-4 font-black text-white transition hover:bg-red-500">
            Voir nos engagements <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href={BILAN_PDF_PATH} download className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10">
            <Download className="mr-2 h-5 w-5" /> Télécharger le bilan
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
