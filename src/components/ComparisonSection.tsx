import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Installation",
      traditional: "6-12 mois, bureau d'études",
      bios: "2h, chauffagiste local",
      biosAdvantage: true
    },
    {
      feature: "Coût initial", 
      traditional: "50 000€ - 200 000€",
      bios: "3 000€ - 15 000€",
      biosAdvantage: true
    },
    {
      feature: "Formation utilisateur",
      traditional: "2-3 jours formation spécialisée",
      bios: "10 min prise en main",
      biosAdvantage: true
    },
    {
      feature: "Maintenance",
      traditional: "Contrat spécialisé obligatoire",
      bios: "Maintenance locale possible",
      biosAdvantage: true
    },
    {
      feature: "Évolutivité",
      traditional: "Refonte complète nécessaire",
      bios: "Ajout de capteurs progressif",
      biosAdvantage: true
    },
    {
      feature: "Dépendance",
      traditional: "Intégrateur propriétaire",
      bios: "Matériel standard ouvert",
      biosAdvantage: true
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            BIOS vs GTB traditionnelle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pourquoi choisir BIOS plutôt qu'une GTB classique pour votre bâtiment ?
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-xl shadow-card-industrial border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-4 font-semibold text-center">Critère</div>
              <div className="p-4 font-semibold text-center border-l border-border">
                GTB Traditionnelle
              </div>
              <div className="p-4 font-semibold text-center border-l border-border bg-primary/5">
                BIOS
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}
              >
                <div className="p-4 font-medium">
                  {item.feature}
                </div>
                <div className="p-4 border-l border-border text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <X className="w-4 h-4 text-destructive flex-shrink-0" />
                    <span className="text-sm">{item.traditional}</span>
                  </div>
                </div>
                <div className="p-4 border-l border-border bg-primary/5 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.bios}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 bg-primary/10 rounded-lg px-6 py-4">
              <Check className="w-6 h-6 text-green-600" />
              <span className="text-lg font-semibold text-foreground">
                BIOS : la GTB qui s'adapte à vos contraintes, pas l'inverse
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;