import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileDown, RefreshCw, ShieldCheck, MessageSquareText } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

type Feedback = {
  id: string;
  entity: string | null;
  barrier: string | null;
  priorities: string[] | null;
  preferred_action: string | null;
  expected_change: string | null;
  comment: string | null;
  created_at: string;
};

const countBy = (values: (string | null | undefined)[]) => {
  const counts = new Map<string, number>();
  values.forEach((value) => {
    const key = value?.trim() || "Non renseigné";
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
};

const csvCell = (value: unknown) => '"' + String(value ?? "").replace(/"/g, '""') + '"';

const AdminQuestionnaire = () => {
  const [checking, setChecking] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [rows, setRows] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const load = async () => {
    if (!supabase) { setErrorMessage("Connexion Supabase indisponible."); setLoading(false); return; }
    setLoading(true);
    const { data, error } = await (supabase as any).from("mobilisation_feedback")
      .select("id,entity,barrier,priorities,preferred_action,expected_change,comment,created_at")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) { setErrorMessage("Impossible de charger les réponses. Vérifiez que la migration est appliquée et que vos droits administrateur sont actifs."); return; }
    setErrorMessage("");
    setRows((data || []) as Feedback[]);
  };

  useEffect(() => {
    let active = true;
    const init = async () => {
      if (!supabase) { if (active) { setChecking(false); setErrorMessage("Connexion Supabase indisponible."); } return; }
      const { data } = await (supabase as any).auth.getSession();
      if (!active) return;
      if (!data?.session) { setAllowed(false); setChecking(false); return; }
      const { data: isAdmin, error } = await (supabase as any).rpc("is_mobilisation_admin");
      if (!active) return;
      if (error || isAdmin !== true) { setAllowed(false); setChecking(false); return; }
      setAllowed(true);
      setChecking(false);
      await load();
    };
    init();
    return () => { active = false; };
  }, []);

  const entities = useMemo(() => countBy(rows.map((r) => r.entity)), [rows]);
  const barriers = useMemo(() => countBy(rows.map((r) => r.barrier)), [rows]);
  const actions = useMemo(() => countBy(rows.map((r) => r.preferred_action)), [rows]);
  const priorities = useMemo(() => countBy(rows.flatMap((r) => r.priorities || [])), [rows]);
  const maxCount = (items: [string, number][]) => Math.max(1, ...items.map((x) => x[1]));

  const exportPdf = () => { window.print(); };

  const exportCsv = () => {
    const header = ["Date", "Entité", "Frein à la mobilisation", "Priorités", "Action souhaitée", "Changement attendu de FO", "Commentaire"];
    const lines = rows.map((r) => [new Date(r.created_at).toLocaleString("fr-FR"), r.entity, r.barrier, (r.priorities || []).join(" | "), r.preferred_action, r.expected_change, r.comment]);
    const csv = "\uFEFF" + [header, ...lines].map((line) => line.map(csvCell).join(";")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a"); a.href = url; a.download = "bilan-questionnaire-mobilisation-iliad.csv"; a.click(); URL.revokeObjectURL(url);
  };

  const chartColors = ["#b91c1c", "#0f766e", "#2563eb", "#9333ea", "#d97706", "#475569", "#db2777", "#0891b2"];
  const ChartPanel = ({ title, items }: { title: string; items: [string, number][] }) => {
    // Réserver une ligne par réponse et éviter que les libellés longs se chevauchent.
    const chartHeight = Math.max(240, items.length * 48 + 48);
    const labelWidth = 190;

    return (
    <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm print:break-inside-avoid">
      <h2 className="mb-4 text-lg font-black text-slate-900">{title}</h2>
      {items.length === 0 ? <p className="text-sm text-slate-500">Aucune réponse pour le moment.</p> : <>
        <div className="w-full min-w-0" style={{ height: chartHeight }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={items.map(([label, count]) => ({ label, count }))}
              layout="vertical"
              margin={{ top: 8, right: 18, left: 8, bottom: 8 }}
              barCategoryGap="24%"
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" allowDecimals={false} />
              <YAxis
                type="category"
                dataKey="label"
                width={labelWidth}
                interval={0}
                tick={{ fontSize: 10, width: labelWidth - 12 }}
                tickFormatter={(value: string) => value.length > 42 ? `${value.slice(0, 39)}…` : value}
              />
              <Tooltip formatter={(value) => [value, "Réponses"]} />
              <Bar dataKey="count" barSize={24} radius={[0, 5, 5, 0]}>{items.map((_, index) => <Cell key={index} fill={chartColors[index % chartColors.length]} />)}</Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 space-y-2 border-t pt-3">
          {items.map(([label, count]) => <div key={label} className="flex justify-between gap-3 text-xs"><span className="text-slate-600">{label}</span><strong className="tabular-nums text-slate-900">{count}</strong></div>)}
        </div>
      </>}
    </section>
    );
  };

  if (checking) return <main className="grid min-h-screen place-items-center text-slate-500">Vérification des autorisations…</main>;
  if (!allowed) return <main className="grid min-h-screen place-items-center bg-slate-50 px-5"><div className="max-w-md rounded-2xl border bg-white p-8 text-center shadow-sm"><ShieldCheck className="mx-auto h-10 w-10 text-red-600"/><h1 className="mt-4 text-xl font-black">Accès réservé</h1><p className="mt-2 text-sm text-slate-600">Cette page est réservée aux administrateurs autorisés du site. Connectez-vous avec un compte administrateur.</p><Link to="/admin" className="mt-5 inline-flex rounded-lg bg-red-600 px-4 py-2.5 font-bold text-white">Accéder à l’administration</Link></div></main>;

  return <main className="min-h-screen bg-slate-50 print:bg-white">
    <header className="border-b bg-white print:hidden"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4">
      <Link to="/admin" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-red-700"><ArrowLeft className="h-4 w-4"/> Administration</Link>
      <div className="flex items-center gap-2 text-sm font-black text-slate-900"><MessageSquareText className="h-5 w-5 text-red-600"/> Bilan du questionnaire</div>
      <div className="flex flex-wrap gap-2"><button onClick={load} disabled={loading} className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold disabled:opacity-50"><RefreshCw className={"h-4 w-4 "+(loading?"animate-spin":"")}/> Actualiser</button><button onClick={exportCsv} disabled={!rows.length} className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-bold text-white disabled:opacity-50"><Download className="h-4 w-4"/> Export CSV</button><button onClick={exportPdf} disabled={!rows.length} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-bold text-white disabled:opacity-50 print:hidden"><FileDown className="h-4 w-4"/> Export PDF</button></div>
    </div></header>
    <div className="mx-auto max-w-7xl space-y-6 px-5 py-8 print:max-w-none print:px-0 print:py-2">
      <div><h1 className="text-3xl font-black text-slate-950">Écoute des salariés ILIAD</h1><p className="mt-1 text-slate-600">Résultats des réponses au questionnaire post-mobilisation du 5 novembre 2026.</p></div>
      {errorMessage && <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{errorMessage}</div>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-slate-950 p-5 text-white"><p className="text-sm text-white/65">Réponses reçues</p><p className="mt-2 text-4xl font-black tabular-nums">{rows.length}</p></div>
        <div className="rounded-2xl border bg-white p-5"><p className="text-sm text-slate-500">Entités représentées</p><p className="mt-2 text-4xl font-black tabular-nums text-slate-950">{entities.filter(([k])=>k!=="Non renseigné").length}</p></div>
        <div className="rounded-2xl border bg-white p-5"><p className="text-sm text-slate-500">Priorités exprimées</p><p className="mt-2 text-4xl font-black tabular-nums text-slate-950">{rows.reduce((n,r)=>n+(r.priorities?.length||0),0)}</p></div>
        <div className="rounded-2xl border bg-white p-5"><p className="text-sm text-slate-500">Commentaires libres</p><p className="mt-2 text-4xl font-black tabular-nums text-slate-950">{rows.filter(r=>r.comment?.trim()||r.expected_change?.trim()).length}</p></div>
      </div>
      <section className="space-y-3">
        <div><h2 className="text-2xl font-black text-slate-950">Analyse des réponses</h2><p className="text-sm text-slate-500">Les graphiques comptabilisent les sélections. Une personne pouvant choisir plusieurs priorités, le total des choix peut dépasser le nombre de répondants.</p></div>
        <div className="grid gap-5 lg:grid-cols-2">
          <ChartPanel title="Réponses par entité" items={entities}/>
          <ChartPanel title="Freins à la mobilisation" items={barriers}/>
          <ChartPanel title="Priorités chez ILIAD" items={priorities}/>
          <ChartPanel title="Actions souhaitées" items={actions}/>
        </div>
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4"><h2 className="text-lg font-black text-slate-900">Retours écrits détaillés</h2><p className="text-sm text-slate-500">Les réponses sont affichées aux seuls administrateurs autorisés.</p></div>
        {rows.filter(r=>r.expected_change?.trim()||r.comment?.trim()).length===0 ? <p className="text-sm text-slate-500">Aucun commentaire libre pour le moment.</p> : <div className="space-y-3">
          {rows.filter(r=>r.expected_change?.trim()||r.comment?.trim()).map(r=><article key={r.id} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs text-slate-500">{new Date(r.created_at).toLocaleString("fr-FR")} · {r.entity || "Entité non précisée"}</p>
            {r.expected_change?.trim()&&<><h3 className="mt-3 text-xs font-black uppercase tracking-wide text-slate-500">Ce que FO devrait changer</h3><p className="mt-1 whitespace-pre-wrap text-sm text-slate-800">{r.expected_change}</p></>}
            {r.comment?.trim()&&<><h3 className="mt-3 text-xs font-black uppercase tracking-wide text-slate-500">Autre proposition / situation</h3><p className="mt-1 whitespace-pre-wrap text-sm text-slate-800">{r.comment}</p></>}
          </article>)}
        </div>}
      </section>
      <p className="text-xs leading-relaxed text-slate-500">Données destinées à l’analyse collective FO. Ne diffusez pas les commentaires contenant éventuellement des éléments identifiants. L’export CSV contient les réponses individuelles : conservez-le dans un espace sécurisé.</p>
    </div>
  </main>;
};

export default AdminQuestionnaire;
