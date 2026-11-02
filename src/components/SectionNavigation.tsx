import { Anchor, BookOpen, CalendarDays, Mail, MapPin, Megaphone, Play, Scale } from "lucide-react";

const links = [
  { href: "#accueil", label: "Accueil", icon: Anchor },
  { href: "#revendications", label: "Revendications", icon: Megaphone },
  { href: "#video-mobilisation", label: "Vidéo", icon: Play },
  { href: "#carte-mobilisations", label: "Rassemblements", icon: MapPin },
  { href: "#mobilisation", label: "Participer", icon: CalendarDays },
  { href: "#generer-notification", label: "Préparer mon message", icon: Mail },
  { href: "#droits-greve", label: "Mes droits", icon: Scale },
  { href: "#appel-action", label: "Agir", icon: BookOpen },
];

const SectionNavigation = () => (
  <nav aria-label="Navigation des rubriques" className="sticky top-12 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
    <div className="container mx-auto flex gap-2 overflow-x-auto px-4 py-2.5 [scrollbar-width:thin]">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={href}
          href={href}
          className={href === "#generer-notification"
            ? "inline-flex shrink-0 items-center gap-2 rounded-full border border-red-700 bg-red-600 px-4 py-2 text-xs font-extrabold text-white shadow-md shadow-red-600/20 transition hover:-translate-y-0.5 hover:border-red-800 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:text-sm"
            : "inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 sm:text-sm"}
        >
          <Icon className="h-4 w-4" />{label}
        </a>
      ))}
    </div>
  </nav>
);

export default SectionNavigation;
