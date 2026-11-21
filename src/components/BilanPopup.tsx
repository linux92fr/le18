import { useEffect, useState } from "react";
import { ArrowRight, BarChart3, Download, X } from "lucide-react";
import { BILAN_PDF_PATH } from "@/data/bilanMobilisation";

const STORAGE_KEY = "focom-bilan-5nov-2026-results-seen";

const BilanPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) !== "1") setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Le popup reste fermé pour la page en cours si le stockage est indisponible.
    }
    setOpen(false);
  };

  const goToReport = () => {
    close();
    requestAnimationFrame(() => document.getElementById("bilan")?.scrollIntoView({ behavior: "smooth" }));
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bilan-popup-title"
        aria-describedby="bilan-popup-description"
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="relative overflow-hidden bg-[#101827] px-7 pb-8 pt-9 text-white sm:px-9">
          <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full border-[36px] border-white/5" />
          <button
            type="button"
            onClick={close}
            aria-label="Fermer la fenêtre"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
              Consultation terminée · 5 novembre 2026
            </span>
            <h2 id="bilan-popup-title" className="mt-4 max-w-xl pr-8 text-3xl font-black leading-tight sm:text-4xl">
              Ce que 49 salariés d’ILIAD nous ont dit.
            </h2>
            <p id="bilan-popup-description" className="mt-4 max-w-xl leading-relaxed text-white/70">
              Le questionnaire est fermé. Les réponses sont désormais synthétisées dans un bilan
              public, avec les freins identifiés, vos priorités et nos engagements.
            </p>
          </div>
        </div>

        <div className="px-7 pb-8 pt-7 sm:px-9">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-red-50 p-4 text-center">
              <p className="text-3xl font-black text-red-700">49</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-red-700/70">réponses reçues</p>
            </div>
            <div className="rounded-2xl bg-teal-50 p-4 text-center">
              <p className="text-3xl font-black text-teal-700">80 %</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-teal-700/70">terrain Réseau</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4 text-center">
              <p className="text-3xl font-black text-slate-950">42</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">citations pouvoir d’achat</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border-l-4 border-teal-500 bg-teal-50 p-4">
            <div className="flex items-start gap-3">
              <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
              <p className="text-sm font-semibold leading-relaxed text-slate-800">
                Défaut d’information et perte de salaire représentent 49 % des freins à la
                mobilisation. Le pouvoir d’achat est la première priorité exprimée.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={goToReport}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-black text-white transition hover:bg-red-700"
            >
              Consulter le bilan <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={BILAN_PDF_PATH}
              download
              onClick={close}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
            >
              <Download className="h-4 w-4" /> Télécharger le PDF
            </a>
          </div>
          <button
            type="button"
            onClick={close}
            className="mt-5 w-full text-center text-sm font-medium text-slate-500 underline-offset-4 hover:underline"
          >
            Fermer et continuer
          </button>
        </div>
      </div>
    </div>
  );
};

export default BilanPopup;
