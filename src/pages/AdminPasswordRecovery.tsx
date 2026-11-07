import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, KeyRound, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const AdminPasswordRecovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [recoveryReady, setRecoveryReady] = useState(false);
  const [checking, setChecking] = useState(true);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!supabase) { setChecking(false); return; }
    const auth = (supabase as any).auth;
    let alive = true;
    auth.getSession().then(({ data }: any) => {
      if (alive && data?.session) setRecoveryReady(true);
      if (alive) setChecking(false);
    });
    const { data } = auth.onAuthStateChange((event: string, session: any) => {
      if (event === "PASSWORD_RECOVERY" && session) setRecoveryReady(true);
    });
    return () => { alive = false; data?.subscription?.unsubscribe(); };
  }, []);

  const requestReset = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    setBusy(true);
    const redirectTo = `${window.location.origin}/admin/reinitialiser`;
    const { error } = await (supabase as any).auth.resetPasswordForEmail(email.trim(), { redirectTo });
    setBusy(false);
    if (error) toast.error("Envoi impossible : " + error.message);
    else toast.success("Si cette adresse correspond à un compte autorisé, un e-mail de réinitialisation va être envoyé.");
  };

  const updatePassword = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    if (password.length < 8) { toast.error("Le mot de passe doit contenir au moins 8 caractères."); return; }
    if (password !== confirmation) { toast.error("Les deux mots de passe ne correspondent pas."); return; }
    setBusy(true);
    const { error } = await (supabase as any).auth.updateUser({ password });
    setBusy(false);
    if (error) { toast.error("Modification impossible : " + error.message); return; }
    await (supabase as any).auth.signOut();
    toast.success("Mot de passe modifié. Vous pouvez maintenant vous connecter.");
    navigate("/admin", { replace: true });
  };

  if (checking) return <div className="grid min-h-screen place-items-center text-slate-500">Vérification du lien sécurisé…</div>;

  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-5 py-10">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-red-600">{recoveryReady ? <KeyRound /> : <Mail />}</div>
          <h1 className="mt-4 text-2xl font-black text-slate-950">{recoveryReady ? "Nouveau mot de passe" : "Réinitialiser le mot de passe"}</h1>
          <p className="mt-2 text-sm text-slate-500">{recoveryReady ? "Choisissez un nouveau mot de passe pour votre compte administrateur." : "Saisissez l’adresse e-mail associée à votre compte administrateur."}</p>
        </div>
        {!isSupabaseConfigured && <p className="mb-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">La connexion Supabase n’est pas configurée.</p>}
        {recoveryReady ? (
          <form onSubmit={updatePassword} className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">Nouveau mot de passe<input required minLength={8} type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100" /></label>
            <label className="block text-sm font-medium text-slate-700">Confirmer le mot de passe<input required minLength={8} type="password" autoComplete="new-password" value={confirmation} onChange={(e) => setConfirmation(e.target.value)} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100" /></label>
            <button disabled={busy || !isSupabaseConfigured} className="h-11 w-full rounded-lg bg-red-600 font-bold text-white hover:bg-red-700 disabled:opacity-50">{busy ? "Enregistrement…" : "Enregistrer le nouveau mot de passe"}</button>
          </form>
        ) : (
          <form onSubmit={requestReset} className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">Adresse e-mail<input required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100" /></label>
            <button disabled={busy || !isSupabaseConfigured} className="h-11 w-full rounded-lg bg-red-600 font-bold text-white hover:bg-red-700 disabled:opacity-50">{busy ? "Envoi…" : "Envoyer le lien de réinitialisation"}</button>
          </form>
        )}
        <div className="mt-5 text-center"><Link to="/admin" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-red-700"><ArrowLeft className="h-4 w-4" /> Retour à la connexion</Link></div>
        <p className="mt-5 flex items-center justify-center gap-1 text-xs text-slate-400"><ShieldCheck className="h-3.5 w-3.5" /> Réinitialisation sécurisée par Supabase Auth</p>
      </section>
    </main>
  );
};

export default AdminPasswordRecovery;
