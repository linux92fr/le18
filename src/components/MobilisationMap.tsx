import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarDays, MapPin, Search } from "lucide-react";
import { supabase } from "@/lib/supabase";

declare global {
  interface Window {
    L?: any;
  }
}

type MobilisationEvent = {
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
};

const dateLabel = (value: string) =>
  new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeStyle: "short" }).format(new Date(value));

const MobilisationMap = () => {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markersLayer = useRef<any>(null);
  const [events, setEvents] = useState<MobilisationEvent[]>([]);
  const [department, setDepartment] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!supabase) {
        setError("La carte sera disponible après configuration de la connexion Supabase.");
        setLoading(false);
        return;
      }
      const { data, error: queryError } = await (supabase as any)
        .from("mobilisation_events")
        .select("id,title,city,department_code,address,starts_at,ends_at,description,latitude,longitude")
        .eq("status", "published")
        .order("starts_at", { ascending: true });
      if (!active) return;
      if (queryError) setError("Impossible de charger les rassemblements pour le moment.");
      else setEvents(data || []);
      setLoading(false);
    };
    load();
    return () => { active = false; };
  }, []);

  const departments = useMemo(
    () => [...new Set(events.map((event) => event.department_code))].sort(),
    [events],
  );
  const filteredEvents = useMemo(() => events.filter((event) => {
    const matchesDepartment = department === "all" || event.department_code === department;
    const needle = search.trim().toLocaleLowerCase("fr");
    const matchesSearch = !needle || [event.city, event.title, event.address || "", event.department_code]
      .some((value) => value.toLocaleLowerCase("fr").includes(needle));
    return matchesDepartment && matchesSearch;
  }), [events, department, search]);

  useEffect(() => {
    if (!mapElement.current || !window.L || mapInstance.current) return;
    const L = window.L;
    const map = L.map(mapElement.current, { scrollWheelZoom: false }).setView([46.6, 2.4], 5.7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);
    mapInstance.current = map;
    markersLayer.current = L.featureGroup().addTo(map);
    return () => {
      map.remove();
      mapInstance.current = null;
      markersLayer.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    const layer = markersLayer.current;
    const L = window.L;
    if (!map || !layer || !L) return;
    layer.clearLayers();
    filteredEvents.forEach((event) => {
      const marker = L.marker([event.latitude, event.longitude]);
      const popup = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = event.title;
      const city = document.createElement("p");
      city.textContent = event.city + " (" + event.department_code + ")";
      const date = document.createElement("p");
      date.textContent = dateLabel(event.starts_at);
      const address = document.createElement("p");
      address.textContent = event.address || "";
      popup.append(title, city, date, address);
      marker.bindPopup(popup).addTo(layer);
    });
    if (filteredEvents.length > 0) {
      map.fitBounds(layer.getBounds().pad(0.18), { maxZoom: 11 });
    } else {
      map.setView([46.6, 2.4], 5.7);
    }
  }, [filteredEvents]);

  return (
    <section id="carte-mobilisations" className="scroll-mt-28 bg-slate-50 py-20">
      <div className="container mx-auto px-5">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-700">
              <MapPin className="h-4 w-4" /> SUR LE TERRAIN
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Les rassemblements près de chez vous</h2>
            <p className="mt-3 text-slate-600">Retrouvez les lieux et horaires des mobilisations publiées.</p>
          </div>

          <div className="mb-5 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_220px]">
            <label className="relative block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher une ville, un lieu…" className="h-11 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100" />
            </label>
            <select value={department} onChange={(e) => setDepartment(e.target.value)} className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-red-500">
              <option value="all">Tous les départements</option>
              {departments.map((code) => <option key={code} value={code}>{code}</option>)}
            </select>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div ref={mapElement} className="h-[420px] w-full" aria-label="Carte interactive des rassemblements" />
              {!window.L && <div className="p-3 text-center text-xs text-slate-500">Chargement de la carte…</div>}
            </div>
            <div className="max-h-[460px] space-y-3 overflow-y-auto pr-1">
              {loading && <div className="rounded-xl bg-white p-6 text-sm text-slate-500">Chargement des rassemblements…</div>}
              {!loading && error && <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">{error}</div>}
              {!loading && !error && filteredEvents.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
                  <MapPin className="mx-auto h-7 w-7 text-slate-400" />
                  <p className="mt-2 font-semibold text-slate-800">Aucun rassemblement publié</p>
                  <p className="mt-1 text-sm text-slate-500">Les informations apparaîtront ici dès leur publication.</p>
                </div>
              )}
              {filteredEvents.map((event) => (
                <article key={event.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-slate-900">{event.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{event.city} · {event.department_code}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700">{event.department_code}</span>
                  </div>
                  <p className="mt-3 flex items-center gap-2 text-sm text-slate-600"><CalendarDays className="h-4 w-4 text-red-600" />{dateLabel(event.starts_at)}</p>
                  {event.address && <p className="mt-1 text-sm text-slate-500">{event.address}</p>}
                  {event.description && <p className="mt-2 text-sm leading-relaxed text-slate-600">{event.description}</p>}
                  <a className="mt-3 inline-flex text-sm font-semibold text-red-700 hover:underline" target="_blank" rel="noreferrer" href={`https://www.openstreetmap.org/?mlat=${event.latitude}&mlon=${event.longitude}#map=16/${event.latitude}/${event.longitude}`}>Voir l’itinéraire sur OpenStreetMap ↗</a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilisationMap;
