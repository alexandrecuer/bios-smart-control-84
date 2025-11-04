import { Users, MapPin, Wrench } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: MapPin,
      title: "Terrain",
      description: "Nous connaissons les contraintes des bâtiments publics pour y avoir travaillé"
    },
    {
      icon: Wrench,
      title: "Pragmatique", 
      description: "Des solutions qui marchent avec l'existant, sans révolution"
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Support par des techniciens qui parlent votre langage"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              BIOS est né de la frustration d'agents techniques et de responsables patrimoine face 
              aux solutions GTB inadaptées aux petits bâtiments publics.
            </p>
            <p className="text-muted-foreground mb-8">
              Notre équipe combine 15 ans d'expérience en maintenance de bâtiments publics et 
              l'expertise technique en systèmes embarqués. Nous savons ce qui marche sur le terrain 
              et ce qui ne marche pas en théorie.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team/Company Info */}
          <div className="bg-background rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">L'équipe BIOS</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Notre mission</h4>
                <p className="text-muted-foreground text-sm">
                  Démocratiser le pilotage énergétique des bâtiments publics en proposant 
                  des solutions simples, fiables et abordables.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Notre approche</h4>
                <p className="text-muted-foreground text-sm">
                  Pas de révolution technique, mais une évolution pragmatique. 
                  Nous utilisons des technologies éprouvées et les adaptons aux contraintes réelles.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Notre engagement</h4>
                <p className="text-muted-foreground text-sm">
                  Support technique en français, formations sur site, 
                  et partenariat avec vos installateurs locaux habituels.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-xs text-muted-foreground">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-xs text-muted-foreground">Sites pilotes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Made in France</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-end">
          <img 
            src="images/pump.png" 
            alt="Décoration" 
            className="w-4/5 md:w-3/5 max-w-[600px] filter grayscale opacity-60 object-contain" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;