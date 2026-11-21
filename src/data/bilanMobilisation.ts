export const BILAN_PDF_PATH = "/bilan-mobilisation-5-novembre-2026.pdf";

export const bilanStats = [
  { value: "49", label: "réponses reçues" },
  { value: "5", label: "entités représentées" },
  { value: "166", label: "priorités exprimées" },
  { value: "24", label: "commentaires libres" },
] as const;

export const entities = [
  {
    label: "Free Réseau / Maintenance Réseaux",
    count: 39,
    percent: 79.6,
    note: "Les 39 réponses du terrain Réseau représentent 80 % de la consultation.",
  },
  { label: "Non renseigné", count: 3 },
  { label: "Je préfère ne pas préciser", count: 2 },
  { label: "Fonctions support / autres", count: 2 },
  { label: "Free Mobile (2) - Relation client / Boutiques (1)", count: 3 },
] as const;

export const barriers = [
  { label: "Je n’ai pas été suffisamment informé(e)", count: 14, color: "#dc2626" },
  { label: "La perte de salaire était trop difficile", count: 10, color: "#0f766e" },
  { label: "Revendications nationales peu adaptées à ILIAD", count: 8, color: "#0284c7" },
  { label: "Doute sur l’efficacité de la mobilisation", count: 6, color: "#7c3aed" },
  { label: "Contraintes personnelles ou professionnelles", count: 4, color: "#d97706" },
  { label: "Manque de confiance syndicale (3) - Autre (3) - Mobilisé (1)", count: 7, color: "#334155" },
] as const;

export const priorities = [
  { label: "Pouvoir d’achat et salaires", count: 42, color: "#dc2626" },
  { label: "Reconnaissance des métiers / polyvalence", count: 24, color: "#0f766e" },
  { label: "Repas, titres-restaurant et indemnités", count: 24, color: "#0284c7" },
  { label: "Temps de trajet des itinérants", count: 21, color: "#7c3aed" },
  { label: "Conditions de travail / management", count: 18, color: "#d97706" },
  { label: "Réorganisations (16) - Emploi (15) - Autre (6)", count: 37, color: "#334155" },
] as const;

export const actions = [
  { label: "Revendications propres à mon entité et métier", count: 13, color: "#dc2626" },
  { label: "Débrayages ou grèves sur des revendications précises", count: 12, color: "#0f766e" },
  { label: "Pétitions ou interpellations collectives", count: 8, color: "#0284c7" },
  { label: "Réunions d’échange sur le terrain", count: 5, color: "#7c3aed" },
  { label: "Informations régulières et concrètes sur les négociations", count: 5, color: "#d97706" },
  { label: "Actions ciblées par établissement (4) - Autre (2)", count: 6, color: "#334155" },
] as const;

export const testimonies = [
  {
    topic: "Pouvoir d’achat & inflation",
    quote:
      "Les augmentations sont plus basses que l’inflation depuis plusieurs années. Nous perdons du pouvoir d’achat chaque année.",
    source: "Free Réseau / Maintenance Réseaux",
  },
  {
    topic: "Gel des carrières & polyvalence",
    quote:
      "Poste de SDT n’est plus disponible, évolution gelée ainsi que le gain de salaire, impossible d’avoir un entretien concret hors NAO dérisoires.",
    source: "Free Réseau / Maintenance Réseaux",
  },
  {
    topic: "Pérennité & sous-traitance",
    quote:
      "Tout semble mis en place afin que la sous-traitance récupère toute notre activité une fois que nous aurons fini de servir de bêta-testeur.",
    source: "Free Réseau / Maintenance Réseaux",
  },
  {
    topic: "Itinérants & véhicule de service",
    quote:
      "L’imposition de donner une heure de trajet le matin et une heure le soir avec le véhicule de service : une pression monstrueuse.",
    source: "Free Réseau / Maintenance Réseaux",
  },
] as const;

export const engagements = [
  {
    number: "1",
    title: "Informer",
    text: "Créer des canaux directs et accessibles, y compris pour les salariés itinérants.",
  },
  {
    number: "2",
    title: "Cibler",
    text: "Porter des revendications propres à chaque métier, entité et réalité de terrain.",
  },
  {
    number: "3",
    title: "Consulter",
    text: "Organiser des AG de terrain et de nouvelles consultations avant chaque action.",
  },
  {
    number: "4",
    title: "Unir",
    text: "Renforcer la cohésion des élus et l’unité syndicale face à la direction.",
  },
] as const;
