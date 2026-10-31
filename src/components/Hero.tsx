import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowDown, Megaphone, Wallet, BriefcaseBusiness, HeartHandshake, Mail, ShoppingCart } from "lucide-react";
import focomLogo from "@/assets/logo_OP_FOCOM.png";

const posterPath = "/Grève_généraleFO_ensemble_le5novembre2026.png";

const Hero = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 bg-[#101827] text-white shadow-lg">
        <div className="container mx-auto flex min-h-12 items-center justify-center gap-3 px-4 text-center text-sm font-semibold">
          <Megaphone className="h-4 w-4 shrink-0 text-red-400" />
          <span>JEUDI 5 NOVEMBRE 2026 · JOURNÉE NATIONALE DE GRÈVE ET DE MANIFESTATIONS</span>
        </div>
      </div>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#111827] pb-16 pt-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(220,38,38,0.35),transparent_48%),radial-gradient(ellipse_at_10%_90%,rgba(20,184,166,0.18),transparent_45%)]" />
        <div className="absolute -right-24 top-32 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-10 top-48 h-52 w-52 rounded-full border border-white/10" />

        <div className="container relative z-10 mx-auto px-5">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4">
              <img src={focomLogo} alt="Logo FO COM" className="h-16 w-16 rounded-xl bg-white object-contain p-1" />
              <div>
                <p className="text-xl font-black tracking-wide">FO COM</p>
                <p className="text-sm font-semibold tracking-[0.18em] text-white/65">UES ILIAD</p>
              </div>
              <span className="ml-auto hidden rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-200 sm:inline-flex">Mobilisation interprofessionnelle</span>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-500/15 px-4 py-2 text-sm font-bold text-red-100">
                  <CalendarDays className="h-4 w-4" /> JEUDI 5 NOVEMBRE 2026
                </div>
                <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                  GRÈVE
                  <span className="block text-red-400">GÉNÉRALE</span>
                  <span className="block">LE 05/11/2026</span>
                  <span className="block text-teal-300">ENSEMBLE !</span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                  Salariés du public et du privé : le 5 novembre, faisons front ensemble. Pour les salaires, les services publics, l'emploi et des conditions de travail dignes. Même combat, mêmes droits, même avenir.
                </p>
                <div className="mt-7 rounded-2xl border border-amber-300/40 bg-amber-300/10 p-5 shadow-lg shadow-amber-950/20 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-amber-300 p-3 text-slate-950">
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">Un geste citoyen · Le 5 novembre</p>
                      <h2 className="mt-1 text-xl font-black leading-tight text-white sm:text-2xl">Faisons aussi grève de la consommation !</h2>
                      <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                        Une journée sans achats non essentiels : reportons le shopping et les dépenses superflues. Montrons le poids de nos choix et rappelons que le pouvoir appartient aussi au peuple.
                      </p>
                      <p className="mt-3 text-sm font-black tracking-wide text-amber-200">DEMOS KRATOS · LE POUVOIR AU PEUPLE</p>
                      <p className="mt-2 text-xs leading-relaxed text-white/55">Les besoins essentiels, les soins et les achats indispensables restent prioritaires.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-9 flex flex-col gap-3">
                  <Button size="lg" className="h-auto min-h-16 w-full justify-center whitespace-normal rounded-xl bg-teal-500 px-6 py-4 text-base font-black text-slate-950 shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-400 sm:w-fit sm:text-lg" onClick={() => document.getElementById("generer-notification")?.scrollIntoView({ behavior: "smooth", block: "center" })}>
                    <Mail className="mr-3 h-5 w-5 shrink-0" />
                    Préparer mon message de participation à la grève
                    <ArrowDown className="ml-3 h-5 w-5 shrink-0" />
                  </Button>
                  <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="h-14 bg-red-600 px-7 text-base font-extrabold hover:bg-red-500" onClick={() => document.getElementById("mobilisation")?.scrollIntoView({ behavior: "smooth" })}>
                    Comprendre la mobilisation <ArrowDown className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 border-white/30 bg-white/5 px-7 text-base text-white hover:bg-white/10 hover:text-white" onClick={() => setShowDetails(!showDetails)}>
                    Pourquoi se mobiliser ?
                  </Button>
                  </div>
                </div>
                {showDetails && (
                  <div className="mt-5 max-w-2xl rounded-2xl border border-teal-300/25 bg-teal-300/10 p-5 text-sm leading-relaxed text-white/85">
                    L'appel à la grève générale du 5 novembre concerne les salariés du public et du privé. FO COM UES ILIAD met aussi en lumière les réalités vécues dans le groupe : pouvoir d'achat, transformations successives, reconnaissance des métiers et conditions de travail.
                  </div>
                )}
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-3 shadow-2xl backdrop-blur">
                  <a href={posterPath} target="_blank" rel="noreferrer" aria-label="Voir le tract officiel du 5 novembre 2026">
                    <img src={posterPath} alt="Tract FO COM UES ILIAD : grève générale le 5 novembre 2026" className="w-full rounded-2xl" />
                  </a>
                  <a href={posterPath} download className="mt-3 block rounded-xl bg-red-600 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-red-500">Télécharger le tract officiel</a>
                  <div className="hidden">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-200">Une date · Une voix collective</p>
                  <div className="my-7 border-y border-white/15 py-7 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-white/55">Jeudi</p>
                    <p className="text-8xl font-black leading-none text-white">05</p>
                    <p className="mt-2 text-3xl font-black uppercase tracking-wider text-red-400">NOVEMBRE</p>
                    <p className="mt-2 text-lg font-semibold text-white/75">2026</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Wallet className="h-5 w-5 text-red-300" /><span className="text-sm font-semibold">Du pouvoir d'achat pour vivre dignement</span></div>
                    <div className="flex items-center gap-3"><BriefcaseBusiness className="h-5 w-5 text-teal-300" /><span className="text-sm font-semibold">Des emplois et des métiers reconnus</span></div>
                    <div className="flex items-center gap-3"><HeartHandshake className="h-5 w-5 text-red-300" /><span className="text-sm font-semibold">Du respect et de meilleures conditions de travail</span></div>
                  </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 rounded-full bg-red-600/40 blur-3xl" />
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm font-semibold text-white/55">
              <span>CFDT</span><span>CGT</span><span className="text-white">FO</span><span>UNSA</span><span>FSU</span>
              <span className="ml-auto text-teal-200">Public · Privé · Jeunes · Retraités</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
