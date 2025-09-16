import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Shield,
  HandHeart,
  Building2,
  Scale,
  Heart
} from "lucide-react";

const revendications = [
  {
    icon: TrendingUp,
    title: "Augmentation des salaires",
    description: "Pour l'augmentation des salaires, des pensions, des minima sociaux",
    category: "Économique"
  },
  {
    icon: Shield,
    title: "Défense des services publics",
    description: "Pour la défense et le renforcement des services publics",
    category: "Services"
  },
  {
    icon: HandHeart,
    title: "Contre l'austérité",
    description: "Contre l'austérité pour les salariés et les services publics",
    category: "Social"
  },
  {
    icon: Building2,
    title: "Conditionnalité des aides",
    description: "Pour la conditionnalité des aides publiques aux entreprises",
    category: "Entreprises"
  },
  {
    icon: Scale,
    title: "Justice fiscale",
    description: "Pour une répartition équitable des charges fiscales",
    category: "Fiscal"
  },
  {
    icon: Heart,
    title: "Justice sociale",
    description: "Pour une société plus juste et équitable pour tous",
    category: "Société"
  }
];

const Revendications = () => {
  return (
    <section className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            NOS REVENDICATIONS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pour une société plus juste
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quel que soit l'interlocuteur, nous continuerons de refuser tout projet de budget
            injuste et inacceptable ne répondant en aucun cas aux urgences sociales et salariales.
          </p>
        </div>

        {/* Revendications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revendications.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1 border-0 shadow-card bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Revendications;
