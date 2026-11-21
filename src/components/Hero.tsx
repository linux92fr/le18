import { ArrowDown, BarChart3, HeartHandshake } from "lucide-react";
import focomLogo from "@/assets/logo_OP_FOCOM.png";
const Hero = () => (
  <section id="accueil" className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#111827] py-20 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(220,38,38,0.34),transparent_48%),radial-gradient(ellipse_at_8%_90%,rgba(20,184,166,0.2),transparent_45%)]" />
    <div className="container relative z-10 mx-auto px-5">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-center gap-4">
          <img src={focomLogo} alt="Logo FO COM" className="h-16 w-16 rounded-xl bg-white object-contain p-1" />
          <div><p className="text-xl font-black tracking-wide">FO COM</p><p className="text-sm font-semibold tracking-[0.18em] text-white/65">UES ILIAD</p></div>
          <span className="ml-auto hidden rounded-full border border-teal-300/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-200 sm:inline-flex">Bilan public · 49 réponses</span>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-500/15 px-4 py-2 text-sm font-bold text-red-100">CONSULTATION CLOSE · RÉSULTATS PUBLIÉS</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              VOTRE PAROLE<br /><span className="text-red-400">A ÉTÉ ENTENDUE.</span><br />VOS PRIORITÉS<br /><span className="text-teal-300">SONT MAINTENANT</span><br />CLAIREMENT ÉTABLIES.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              49 salariés ont répondu à la consultation post-mobilisation. 80 % viennent du terrain Réseau, le défaut d’information et la perte de salaire représentent 49 % des freins, et le pouvoir d’achat arrive en tête des priorités.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#bilan" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-teal-400 px-6 py-4 font-black text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-300"><BarChart3 className="mr-2 h-5 w-5" /> Découvrir les résultats</a>
              <a href="#engagements" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10">Nos 4 engagements <ArrowDown className="ml-2 h-5 w-5" /></a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 shadow-2xl backdrop-blur sm:p-9">
            <HeartHandshake className="h-10 w-10 text-teal-300" />
            <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-red-300">Ce que nous avons entendu</p>
            <h2 className="mt-3 text-3xl font-black leading-tight">Le terrain Réseau a massivement pris la parole.</h2>
            <p className="mt-5 leading-relaxed text-white/70">Salaires, reconnaissance des métiers, repas, temps de trajet et conditions de travail : les priorités sont documentées. Elles guident désormais nos prochaines interventions.</p>
            <div className="mt-7 border-t border-white/15 pt-5 text-sm font-bold text-teal-200">Informer · Cibler · Consulter · Unir</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
