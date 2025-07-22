import { AlertTriangle, TrendingDown, HelpCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Pas de pilotage",
      description: "Chauffage à fond l'hiver, climatisation en permanence l'été. Gaspillage énergétique constant."
    },
    {
      icon: AlertTriangle,
      title: "Pas de données",
      description: "Impossible de savoir ce qui consomme, quand et pourquoi. Aucune visibilité sur les performances."
    },
    {
      icon: HelpCircle,
      title: "Pas de support",
      description: "En cas de panne, c'est l'urgence. Aucun diagnostic préventif, maintenance uniquement curative."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Les bâtiments oubliés de la GTB
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collèges, gymnases, petits hôpitaux, EHPAD... Ces bâtiments représentent 80% du parc immobilier public 
            mais restent sans pilotage énergétique faute de solutions adaptées.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card-industrial border border-border hover:shadow-industrial transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                  <problem.icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">80%</div>
            <div className="text-sm text-muted-foreground">des bâtiments publics sans GTB</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">+30%</div>
            <div className="text-sm text-muted-foreground">de surconsommation énergétique</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">2h</div>
            <div className="text-sm text-muted-foreground">pour identifier une panne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">données de consommation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;