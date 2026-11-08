import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, KeyRound, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

type Step = "request" | "verify" | "password";

const AdminPasswordRecovery = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("request");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [pageError, setPageError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    // Ne jamais assimiler une session déjà ouverte à une session de récupération.
    // Les erreurs de callback sont affichées explicitement au lieu de laisser
    // l'utilisateur croire que son mot de passe peut être modifié.
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const errorCode = hash.get("error_code");
    const errorDescription = hash.get("error_description");
    if (errorCode || errorDescription) {
      setPageError(
        errorCode === "otp_expired"
          ? "Ce lien ou code de récupération a expiré ou a déjà été utilisé. Demandez un nouvel e-mail."
          : errorDescription
            ? errorDescription
            : "La vérification du lien de récupération a échoué. Demandez un nouvel e-mail."
      );
      // Retire les paramètres d'erreur de l'URL (ils ne contiennent pas de secret utile).
      window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
  }, []);

  const requestReset = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    setBusy(true);
    setPageError("");
    const redirectTo = `${window.location.origin}/admin/reinitialiser`;
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo });
    setBusy(false);
    if (error) {
      setPageError("Envoi impossible : " + error.message);
      return;
    }
    setStep("verify");
    toast.success("Si cette adresse correspond à un compte autorisé, un code de récupération va être envoyé.");
  };

  const verifyCode = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    const cleanToken = token.replace(/\s/g, "");
    if (!/^\d{6,8}$/.test(cleanToken)) {
      setPageError("Saisissez le code numérique reçu par e-mail.");
      return;
    }
    setBusy(true);
    setPageError("");
    const { error } = await supabase.auth.verifyOtp({
      email: email.trim(),
      token: cleanToken,
      type: "recovery",
    });
    setBusy(false);
    if (error) {
      setPageError(
        /expired|invalid|otp/i.test(error.message)
          ? "Code invalide ou expiré. Vérifiez le dernier e-mail reçu ou demandez un nouveau code."
          : "Vérification impossible : " + error.message
      );
      return;
    }
    setStep("password");
    toast.success("Code vérifié. Vous pouvez choisir un nouveau mot de passe.");
  };

  const updatePassword = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    if (password.length < 8) {
      setPageError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    if (password !== confirmation) {
      setPageError("Les deux mots de passe ne correspondent pas.");
      return;
    }
    setBusy(true);
    setPageError("");
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) {
      setPageError("Modification impossible : " + error.message);
      return;
    }
    await supabase.auth.signOut();
    toast.success("Mot de passe modifié. Vous pouvez maintenant vous connecter.");
    navigate("/admin", { replace: true });
  };

  const title = step === "password" ? "Nouveau mot de passe" : step === "verify" ? "Vérifier votre code" : "Réinitialiser le mot de passe";
  const description = step === "password"
    ? "Choisissez un nouveau mot de passe pour votre compte administrateur."
    : step === "verify"
      ? "Saisissez le code reçu par e-mail. Utilisez le code du dernier message reçu."
      : "Saisissez l’adresse e-mail associée à votre compte administrateur.";

  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-5 py-10">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-red-600">
            {step === "password" ? <KeyRound /> : step === "verify" ? <ShieldCheck /> : <Mail />}
          </div>
          <h1 className="mt-4 text-2xl font-black text-slate-950">{title}</h1>
          <p className="mt-2 text-sm text-slate-500">{description}</p>
        </div>

        {!isSupabaseConfigured && <p className="mb-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">La connexion Supabase n’est pas configurée.</p>}
        {pageError && <div role="alert" className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">{pageError}</div>}

        {step === "request" && (
          <form onSubmit={requestReset} className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Adresse e-mail
              <input required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100" />
            </label>
            <button disabled={busy || !isSupabaseConfigured} className="h-11 w-full rounded-lg bg-red-600 font-bold text-white hover:bg-red-700 disabled:opacity-50">
              {busy ? "Envoi…" : "Envoyer le code de récupération"}
            </button>
          </form>
        )}

        {step === "verify" && (
          <form onSubmit={verifyCode} className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Code reçu par e-mail
              <input required inputMode="numeric" autoComplete="one-time-code" maxLength={8} value={token} onChange={(e) => setToken(e.target.value.replace(/[^0-9]/g, ""))} placeholder="Code de vérification" className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 text-center text-lg tracking-[0.3em] outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100" />
            </label>
            <button disabled={busy || !isSupabaseConfigured} className="h-11 w-full rounded-lg bg-red-600 font-bold text-white hover:bg-red-700 disabled:opacity-50">
              {busy ? "Vérification…" : "Vérifier le code"}
            </button>
            <button type="button" onClick={() => { setStep("request"); setToken(""); setPageError(""); }} className="w-full text-sm font-semibold text-slate-600 hover:text-red-700">
              Demander un nouveau code
            </button>
          </form>
        )}

        {step === "password" && (
          <form onSubmit={updatePassword} className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Nouveau mot de passe
              <input required minLength={8} type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Confirmer le mot de passe
              <input required minLength={8} type="password" autoComplete="new-password" value={confirmation} onChange={(e) => setConfirmation(e.target.value)} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100" />
            </label>
            <button disabled={busy || !isSupabaseConfigured} className="h-11 w-full rounded-lg bg-red-600 font-bold text-white hover:bg-red-700 disabled:opacity-50">
              {busy ? "Enregistrement…" : "Enregistrer le nouveau mot de passe"}
            </button>
          </form>
        )}

        <div className="mt-5 text-center">
          <Link to="/admin" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-red-700">
            <ArrowLeft className="h-4 w-4" /> Retour à la connexion
          </Link>
        </div>
        <p className="mt-5 flex items-center justify-center gap-1 text-xs text-slate-400">
          <ShieldCheck className="h-3.5 w-3.5" /> Réinitialisation sécurisée par Supabase Auth
        </p>
      </section>
    </main>
  );
};

export default AdminPasswordRecovery;
