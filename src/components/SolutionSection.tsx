import { CheckCircle, Cpu, Wifi, Smartphone } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "Simple",
      description: "Passerelle plug & play qui se connecte sur l'existant sans modification"
    },
    {
      icon: CheckCircle,
      title: "Modulaire", 
      description: "Packs prêts à poser adaptés à chaque type de bâtiment"
    },
    {
      icon: Wifi,
      title: "Compatible",
      description: "Fonctionne avec les capteurs et équipements standard du marché"
    },
    {
      icon: Smartphone,
      title: "Installable en local",
      description: "Votre chauffagiste local peut l'installer et l'entretenir"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              La solution BIOS : GTB légère pensée pour vous
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Enfin une solution de pilotage énergétique qui s'adapte à vos contraintes : 
              budget limité, équipes techniques non spécialisées, bâtiments existants.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
              <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                <div className="flex bg-gray-300 dark:bg-transparent justify-center p-4"><img src="images/sud_d3histo.svg" /></div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative space-y-6">
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">BIOS en action</h3>
              <div className="space-y-4">
                <div className="bg-green-500/80 rounded-lg p-4 border border-white/20">
                  <div className="text-sm opacity-80">
                      Il est 13h, dimanche 16/11/2025  - retour des occupants prévu dans 18 heures
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">circuit sud</span>
                    <span className="text-sm bg-green-500/20 px-2 py-1 rounded">● pilot IA actif</span>
                  </div>
                  <div className="text-sm opacity-80">✅ Consigne de confort : 20°C
                  </div>
                  <div className="text-sm opacity-80">✅ Température intérieure : 18.70 °C (age 169s)</div>
                  <div className="text-sm opacity-80">✅ Température extérieure : 14.93 °C (age 39s)</div>
                  <div className="text-sm opacity-80">💡 Situation actuelle - chauffage : 0</div>
                  <div className="text-sm opacity-80">💡 Décision de l'IA - chauffage : 0</div>
                  <div className="text-sm opacity-80 bg-red-500/20 font-bold">
                    Le système de chauffage est peu puissant: 
                    il faudra plusieurs heures pour atteindre la consigne même si l'écart peut sembler faible.
                  </div>
                  <div className="text-sm opacity-80">
                    🎯 L'IA ne prévoit pas de relancer le chauffage avant 20h ce soir.
                  </div>
                  <div className="text-sm opacity-80">
                    🎯 Vu les prévisions météo, il est fort possible que la relance ait lieu plus tard dans la nuit.
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">circuit nord</span>
                    <span className="text-sm bg-green-500/20 px-2 py-1 rounded">● pilot memory actif</span>
                  </div>
                  <div className="text-sm opacity-80">✅ Consigne de confort : 21°C
                  </div>
                  <div className="text-sm opacity-80">✅ température intérieure : 17.00 °C (age 93s)</div>
                  <div className="text-sm opacity-80">✅ Température extérieure : 14.93 °C (age 39s)</div>
                  <div className="text-sm opacity-80">✅ la moyenne des prévisions de température extérieure d'içi le retour des occupants est de 10°C</div>
                  <div className="text-sm opacity-80">💡 Décision de la mémoire - chauffage : 0</div>
                  <div className="text-sm opacity-80">
                    🎯 Vu la puissance du chauffage, relancer le chauffage une demi-heure avant le retour des occupants devrait suffire
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
              <div className="flex bg-gray-300 dark:bg-gray-100 justify-center p-4">
                <img src="images/sud_d3select_details.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;