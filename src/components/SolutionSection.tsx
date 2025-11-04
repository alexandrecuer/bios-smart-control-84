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
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">BIOS en action</h3>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Chaufferie Collège</span>
                    <span className="text-sm bg-green-500/20 px-2 py-1 rounded">● Actif</span>
                  </div>
                  <div className="text-2xl font-bold">19.5°C</div>
                  <div className="text-sm opacity-80">Température cible: 20°C</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Consommation gaz</span>
                    <span className="text-sm text-green-400">-15%</span>
                  </div>
                  <div className="text-2xl font-bold">245 kWh</div>
                  <div className="text-sm opacity-80">vs semaine dernière</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Alerte maintenance</span>
                    <span className="text-sm bg-orange-500/20 px-2 py-1 rounded">! Préventif</span>
                  </div>
                  <div className="text-sm">Filtre à changer dans 15 jours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-end">
          <img 
            src="/images/v3v.png" 
            alt="Décoration" 
            className="w-4/5 md:w-3/5 max-w-[600px] filter grayscale opacity-60 object-contain" 
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;