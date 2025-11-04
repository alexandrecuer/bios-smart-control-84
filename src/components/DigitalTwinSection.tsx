import { Brain, TrendingDown, Leaf, Zap, ThermometerSun, Cloud } from "lucide-react";

const DigitalTwinSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Réduction coût opérationnel",
      description: "Maintenance prédictive et optimisation des interventions",
      metric: "-25%",
      unit: "soit 3 200€/an",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Réduction coût énergétique", 
      description: "Pilotage intelligent selon l'occupation et la météo",
      metric: "-30%",
      unit: "soit 8 500€/an",
      color: "text-yellow-500"
    },
    {
      icon: Leaf,
      title: "Réduction carbone",
      description: "Diminution des émissions par optimisation continue",
      metric: "-35%",
      unit: "soit 12 t CO₂/an",
      color: "text-green-500"
    }
  ];

  const adaptiveFeatures = [
    {
      icon: ThermometerSun,
      title: "Adaptation météo",
      description: "Anticipation des besoins selon les prévisions"
    },
    {
      icon: Brain,
      title: "Apprentissage usage",
      description: "Modélisation des habitudes d'occupation"
    },
    {
      icon: Cloud,
      title: "Analyse continue",
      description: "Algorithmes d'optimisation en temps réel"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Jumeau numérique intelligent et adaptatif
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BIOS crée un modèle digital de votre bâtiment qui apprend en continu 
            de l'environnement d'usage et des conditions extérieures pour proposer 
            des optimisations automatiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Adaptive Features */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Adaptation intelligente
            </h3>
            <div className="space-y-6">
              {adaptiveFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Twin Visualization */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                IA en apprentissage
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Prédiction consommation</span>
                    <span className="text-sm bg-green-500/20 px-2 py-1 rounded">● Actif</span>
                  </div>
                  <div className="text-lg font-bold">Demain: 320 kWh</div>
                  <div className="text-xs opacity-80">vs 450 kWh prévu initialement</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Maintenance prédictive</span>
                    <span className="text-sm bg-orange-500/20 px-2 py-1 rounded">! Recommandation</span>
                  </div>
                  <div className="text-sm">Nettoyage filtres CTA dans 8 jours</div>
                  <div className="text-xs opacity-80">Économie estimée: 45€/mois</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Optimisation horaires</span>
                    <span className="text-sm text-blue-400">💡 Suggestion</span>
                  </div>
                  <div className="text-sm">Démarrage retardé de 30min demain</div>
                  <div className="text-xs opacity-80">Motif: occupation faible prévue</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Optimization Benefits */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Axes d'amélioration proposés automatiquement
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-${benefit.color.split('-')[1]}-500/10 to-${benefit.color.split('-')[1]}-500/20`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${benefit.color}`}>
                      {benefit.metric}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {benefit.unit}
                    </div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Optimisation continue active
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwinSection;