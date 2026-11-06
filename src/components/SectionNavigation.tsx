import { Anchor, ClipboardList, Clock3, Megaphone, Play, Scale } from "lucide-react";

const links = [
  { href: "#accueil", label: "Accueil", icon: Anchor },
  { href: "#bilan", label: "Le bilan", icon: Scale },
  { href: "#video-mobilisation", label: "En images", icon: Play },
  { href: "#revendications", label: "Nos priorités", icon: Megaphone },
  { href: "#questionnaire", label: "Votre parole", icon: ClipboardList },
  { href: "#temps-trajet", label: "Temps de trajet", icon: Clock3 },
];

const SectionNavigation = () => (
  <nav aria-label="Navigation des rubriques" className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
    <div className="container mx-auto flex gap-2 overflow-x-auto px-4 py-2.5 [scrollbar-width:thin]">
      {links.map(({ href, label, icon: Icon }) => (
        <a key={href} href={href} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 sm:text-sm">
          <Icon className="h-4 w-4" />{label}
        </a>
      ))}
    </div>
  </nav>
);
export default SectionNavigation;
