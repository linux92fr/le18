import { useEffect, useState } from "react";
import { ArrowRight, MessageSquareText, X } from "lucide-react";

const STORAGE_KEY = "focom-bilan-5nov-2026-seen";

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
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch { /* Storage may be unavailable */ }
    setOpen(false);
  };

  const goTo = (id: string) => {
    close();
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div role="dialog" aria-modal="true" aria-labelledby="bilan-popup-title" aria-describedby="bilan-popup-description" className="relative my-auto w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="bg-gradient-to-br from-red-700 to-red-600 px-7 pb-7 pt-9 text-white sm:px-9">
          <button type="button" onClick={close} aria-label="Fermer la fenêtre" className="absolute right-4 top-4 rounded-full bg-white/15 p-2 transition hover:bg-white/30"><X className="h-5 w-5" /></button>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-white/80">FO COM UES ILIAD · Après le 5 novembre</span>
          <h2 id="bilan-popup-title" className="mt-4 pr-5 text-3xl font-black leading-tight sm:text-4xl">La rue s’est mobilisée. Chez ILIAD, tirons les leçons.</h2>
        </div>
        <div className="px-7 pb-8 pt-7 sm:px-9">
          <p id="bilan-popup-description" className="leading-relaxed text-slate-700">La mobilisation a été visible dans la rue, mais la participation chez ILIAD est restée très faible. Nous le regrettons et nous voulons comprendre, sans juger celles et ceux qui n’ont pas participé.</p>
          <div className="mt-5 rounded-2xl border-l-4 border-teal-500 bg-teal-50 p-4">
            <p className="font-black text-slate-950">Notre priorité : vos réalités chez ILIAD.</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">Salaires, réorganisations, emploi, polyvalence, repas, conditions de travail et temps de trajet des itinérants : dites-nous ce qui doit changer en premier.</p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={() => goTo("questionnaire")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-black text-white transition hover:bg-red-700"><MessageSquareText className="h-5 w-5" /> Donner mon avis</button>
            <button type="button" onClick={() => goTo("bilan")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-bold text-slate-800 transition hover:bg-slate-50">Lire le bilan complet <ArrowRight className="h-4 w-4" /></button>
          </div>
          <button type="button" onClick={close} className="mt-5 w-full text-center text-sm font-medium text-slate-500 underline-offset-4 hover:underline">Continuer sans répondre</button>
        </div>
      </div>
    </div>
  );
};

export default BilanPopup;
