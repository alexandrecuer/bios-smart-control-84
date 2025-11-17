import { Brain, TrendingDown, Leaf, Zap, ThermometerSun, Cloud } from "lucide-react";
import HlsVideo from "./video";

const DigitalTwinSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Réduction coût opérationnel",
      description: "Facilitation de la maintenance prédictive et optimisation des interventions",
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
      icon: Cloud,
      title: "Analyse continue",
      description: "Optimisation des réglages en temps réel"
    },
    {
      icon: Brain,
      title: "Jumeau numérique intelligent et adaptatif",
      description: [
        "L'ambition d'Open Building Management est de recueillir des données signifiantes sur chaque type de bâtiment, ",
        "en les classant suivant le niveau de performance de l'enveloppe et les puissances énergétiques disponibles. ",
        "\n\nL'objectif est de développer une base de référence pour améliorer sans cesse nos algorithmes."
      ]
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            BIOS est un système d'exploitation totalement modulaire et extensible.
          </h2>
          <div className="text-xl text-muted-foreground max-w-5xl mx-auto">
            Sa conception est prévue pour offrir une interopérabilité maximale avec les équipements du bâtiment.
            <br></br>C'est un véritable système SCADA (système de contrôle et d’acquisition de données en temps réel)
            <br></br>En matière de sécurité, toutes les bonnes pratiques sont respectées : isolation des processus, fonctionnement derrière un parefeu, chiffrement https
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Adaptive Features */}
          <div className="space-y-6">
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground space-y-4">
                <div className="bg-blue-400 dark:bg-blue-200 text-md rounded-xl p-4">
                  Vous souhaitez un monitoring depuis des capteurs filaires ou radio.
                  Pas de problème. Choisissez tout simplement la marque et le type de module.
                </div>
                <div className="flex bg-white dark:bg-gray-100 justify-center p-4">
                  <HlsVideo src="videos/add_pm8tc" />
                </div>
            </div>
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground space-y-4">
                <div className="bg-blue-400/50 dark:bg-blue-200 text-md rounded-xl p-4">
                  Pour piloter votre bâtiment, utilisez notre bibliothèque d'algorithmes, enrichissez votre système avec des plugins prêts à télécharger.
                </div>
                <div className="flex bg-white dark:bg-gray-100 justify-center p-4">
                  <HlsVideo src="videos/docker_download" />
                </div>
                <div className="bg-green-500/20 dark:bg-blue-200 text-md rounded-xl p-4">
                  Développez vos propres routines, par exemple si certains équipements ne sont pas encore reconnus par notre base de code. 
                </div>
            </div>
          </div>

          {/* Digital Twin Visualization */}
          <div className="relative space-y-12">
            {adaptiveFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <div className="whitespace-pre-line text-muted-foreground">{feature.description}</div>
                </div>
              </div>
            ))}
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground space-y-4">
              <div className="bg-blue-400 dark:bg-blue-200 text-md rounded-xl p-4">
                Vous avez constaté qu'une grandeur vous manque et vous voulez interroger une API web ?
                Vous pouvez le faire à tout moment. 
              </div>
              <div className="flex bg-white dark:bg-gray-100 justify-center p-4">
                <HlsVideo src="videos/add_service" />
              </div>
            </div>
          </div>
        </div>

        {/* Cost Optimization Benefits */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Bénéfices majeurs
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

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwinSection;
