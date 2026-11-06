import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, LogOut, MapPin, Pencil, Plus, Save, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

type EventRow = {
  id: string;
  title: string;
  city: string;
  department_code: string;
  address: string | null;
  starts_at: string;
  ends_at: string | null;
  description: string | null;
  latitude: number;
  longitude: number;
  status: "draft" | "published";
};

type EventForm = Omit<EventRow, "id" | "status"> & { id?: string; status: "draft" | "published" };
const emptyForm: EventForm = {
  title: "", city: "", department_code: "", address: "", starts_at: "2026-11-05T10:00",
  ends_at: "", description: "", latitude: 48.8566, longitude: 2.3522, status: "draft",
};

const toLocalInput = (value: string) => {
  const date = new Date(value);
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60000).toISOString().slice(0, 16);
};

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [checking, setChecking] = useState(true);
  const [events, setEvents] = useState<EventRow[]>([]);
  const [form, setForm] = useState<EventForm>(emptyForm);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loadEvents = async () => {
    if (!supabase) return;
    const { data, error } = await (supabase as any).from("mobilisation_events")
      .select("*").order("starts_at", { ascending: true });
    if (error) toast.error("Chargement impossible : " + error.message);
    else setEvents(data || []);
  };

  useEffect(() => {
    let alive = true;
    const init = async () => {
      if (!supabase) { setChecking(false); return; }
      const { data } = await (supabase as any).auth.getSession();
      if (alive) {
        setSession(data?.session || null);
        setChecking(false);
      }
    };
    init();
    if (!supabase) return () => { alive = false; };
    const { data } = (supabase as any).auth.onAuthStateChange((_event: string, next: any) => setSession(next));
    return () => { alive = false; data?.subscription?.unsubscribe(); };
  }, []);

  useEffect(() => { if (session) loadEvents(); }, [session]);

  const login = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    const { error } = await (supabase as any).auth.signInWithPassword({ email, password });
    if (error) toast.error("Connexion refusée : " + error.message);
    else { setPassword(""); toast.success("Connexion réussie"); }
  };

  const logout = async () => {
    if (!supabase) return;
    await (supabase as any).auth.signOut();
    setEvents([]);
  };

  const editEvent = (event: EventRow) => {
    setForm({
      ...event,
      starts_at: toLocalInput(event.starts_at),
      ends_at: event.ends_at ? toLocalInput(event.ends_at) : "",
    });
    setEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => { setForm(emptyForm); setEditing(false); };

  const saveEvent = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    setSaving(true);
    const payload = {
      title: form.title.trim(), city: form.city.trim(), department_code: form.department_code.trim().toUpperCase(),
      address: form.address?.trim() || null, starts_at: new Date(form.starts_at).toISOString(),
      ends_at: form.ends_at ? new Date(form.ends_at).toISOString() : null,
      description: form.description?.trim() || null, latitude: Number(form.latitude), longitude: Number(form.longitude),
      status: form.status,
    };
    const query = form.id
      ? (supabase as any).from("mobilisation_events").update(payload).eq("id", form.id)
      : (supabase as any).from("mobilisation_events").insert({ ...payload, created_by: session?.user?.id });
    const { error } = await query;
    setSaving(false);
    if (error) { toast.error("Enregistrement impossible : " + error.message); return; }
    toast.success(form.id ? "Rassemblement modifié" : "Rassemblement créé");
    resetForm();
    loadEvents();
  };

  const deleteEvent = async (id: string) => {
    if (!supabase || !window.confirm("Supprimer définitivement ce rassemblement ?")) return;
    const { error } = await (supabase as any).from("mobilisation_events").delete().eq("id", id);
    if (error) toast.error("Suppression impossible : " + error.message);
    else { toast.success("Rassemblement supprimé"); loadEvents(); }
  };

  const togglePublish = async (event: EventRow) => {
    if (!supabase) return;
    const status = event.status === "published" ? "draft" : "published";
    const { error } = await (supabase as any).from("mobilisation_events").update({ status }).eq("id", event.id);
    if (error) toast.error("Modification impossible : " + error.message);
    else { toast.success(status === "published" ? "Rassemblement publié" : "Publication retirée"); loadEvents(); }
  };

  if (checking) return <div className="grid min-h-screen place-items-center text-slate-500">Vérification de la session…</div>;

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-red-700"><ArrowLeft className="h-4 w-4" /> Retour au site</Link>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900"><MapPin className="h-5 w-5 text-red-600" /> Administration des rassemblements</div>
          {session ? <div className="flex items-center gap-4"><Link to="/admin/questionnaire" className="text-sm font-semibold text-red-700 hover:underline">Bilan questionnaire</Link><button onClick={logout} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-red-700"><LogOut className="h-4 w-4" /> Déconnexion</button></div> : <span />}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10">
        {!isSupabaseConfigured && <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">La connexion Supabase n’est pas configurée. Ajoutez les variables d’environnement VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans l’hébergement, puis relancez le déploiement.</div>}
        {!session ? (
          <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-6 text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-red-600"><MapPin /></div><h1 className="mt-4 text-2xl font-black text-slate-950">Espace administrateur</h1><p className="mt-2 text-sm text-slate-500">Connectez-vous avec le compte autorisé dans Supabase.</p></div>
            <form onSubmit={login} className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">Adresse e-mail<input required type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100" /></label>
              <label className="block text-sm font-medium text-slate-700">Mot de passe<input required type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100" /></label>
              <button disabled={!isSupabaseConfigured} className="h-11 w-full rounded-lg bg-red-600 font-bold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50">Se connecter</button>
            </form>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between"><div><h1 className="text-xl font-black text-slate-950">{editing ? "Modifier le rassemblement" : "Ajouter un rassemblement"}</h1><p className="mt-1 text-sm text-slate-500">Les coordonnées sont obligatoires pour le positionnement sur la carte.</p></div><CalendarDays className="h-6 w-6 text-red-600" /></div>
              <form onSubmit={saveEvent} className="space-y-4">
                <label className="block text-sm font-medium">Intitulé<input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="mt-1 h-10 w-full rounded-lg border px-3" placeholder="Rassemblement / manifestation" /></label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm font-medium">Ville<input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="mt-1 h-10 w-full rounded-lg border px-3" /></label>
                  <label className="block text-sm font-medium">Département<input required value={form.department_code} onChange={(e) => setForm({ ...form, department_code: e.target.value })} className="mt-1 h-10 w-full rounded-lg border px-3" placeholder="Ex. 75, 59, 92" /></label>
                </div>
                <label className="block text-sm font-medium">Adresse / lieu<input value={form.address || ""} onChange={(e) => setForm({ ...form, address: e.target.value })} className="mt-1 h-10 w-full rounded-lg border px-3" placeholder="Place, rue, point de rendez-vous…" /></label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm font-medium">Date et heure de début<input required type="datetime-local" value={form.starts_at} onChange={(e) => setForm({ ...form, starts_at: e.target.value })} className="mt-1 h-10 w-full rounded-lg border px-3" /></label>
                  <label className="block text-sm font-medium">Fin (facultatif)<input type="datetime-local" value={form.ends_at || ""} onChange={(e) => setForm({ ...form, ends_at: e.target.value })} className="mt-1 h-10 w-full rounded-lg border px-3" /></label>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm font-medium">Latitude<input required type="number" step="any" min="-90" max="90" value={form.latitude} onChange={(e) => setForm({ ...form, latitude: Number(e.target.value) })} className="mt-1 h-10 w-full rounded-lg border px-3" /></label>
                  <label className="block text-sm font-medium">Longitude<input required type="number" step="any" min="-180" max="180" value={form.longitude} onChange={(e) => setForm({ ...form, longitude: Number(e.target.value) })} className="mt-1 h-10 w-full rounded-lg border px-3" /></label>
                </div>
                <label className="block text-sm font-medium">Informations complémentaires<textarea rows={3} value={form.description || ""} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2" /></label>
                <label className="block text-sm font-medium">Visibilité<select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as "draft" | "published" })} className="mt-1 h-10 w-full rounded-lg border bg-white px-3"><option value="draft">Brouillon (non visible)</option><option value="published">Publié (visible par tous)</option></select></label>
                <div className="flex flex-wrap gap-3"><button disabled={saving} className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 font-bold text-white hover:bg-red-700 disabled:opacity-50"><Save className="h-4 w-4" />{saving ? "Enregistrement…" : "Enregistrer"}</button>{editing && <button type="button" onClick={resetForm} className="h-11 rounded-lg border px-4 font-semibold">Annuler</button>}</div>
              </form>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between"><div><h2 className="text-xl font-black text-slate-950">Rassemblements</h2><p className="text-sm text-slate-500">{events.length} entrée(s)</p></div><button onClick={resetForm} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold hover:bg-slate-50"><Plus className="h-4 w-4" /> Nouveau</button></div>
              <div className="space-y-3">
                {events.map((event) => (
                  <article key={event.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-3"><div><h3 className="font-bold text-slate-900">{event.title}</h3><p className="mt-1 text-sm text-slate-600">{event.city} · {event.department_code}</p><p className="mt-1 text-xs text-slate-500">{new Date(event.starts_at).toLocaleString("fr-FR")}</p></div><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${event.status === "published" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{event.status === "published" ? "Publié" : "Brouillon"}</span></div>
                    <div className="mt-4 flex flex-wrap gap-2"><button onClick={() => editEvent(event)} className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-xs font-semibold hover:bg-slate-50"><Pencil className="h-3.5 w-3.5" /> Modifier</button><button onClick={() => togglePublish(event)} className="rounded-lg border px-3 py-2 text-xs font-semibold hover:bg-slate-50">{event.status === "published" ? "Dépublier" : "Publier"}</button><button onClick={() => deleteEvent(event.id)} className="inline-flex items-center gap-1 rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-50"><Trash2 className="h-3.5 w-3.5" /> Supprimer</button></div>
                  </article>
                ))}
                {events.length === 0 && <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">Aucun rassemblement pour le moment.</div>}
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
};

export default Admin;
