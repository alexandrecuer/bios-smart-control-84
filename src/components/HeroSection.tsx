import { ArrowRight, CheckCircle, Zap, Clock, Wrench, Euro } from "lucide-react";

const HeroSection = () => {
  const promises = [
    { icon: CheckCircle, text: "Zéro refonte : s'installe sur l'existant. Un PC portable de seconde main peut faire l'affaire." },
    { icon: Zap, text: "Si vous n'avez rien ou qu'il faut compléter votre dispositif, nous apportons nos propres modules." },
    { icon: Clock, text: "Pose en 2h, prise en main en 10 min" },
    { icon: Wrench, text: "Compatible chauffagistes locaux, interface pensée agents techniques" },
    { icon: Euro, text: "Coût maîtrisé : investissement 10x inférieur à une GTB" }
  ];
  return (
    <section className="py-6 lg:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_2fr] items-center">
          {/* Content */}
          <div className="animate-fade-in gap-0 sm-gap-12">
            <h1 className="text-4xl lg:text-6xl mb-6 font-bold text-foreground">
              La régulation intelligente pour les bâtiments oubliés de la GTB
            </h1>
            <p className="text-xl text-foreground mb-8">
              Packs prêts à poser pour collèges, gymnases, usines, petits hôpitaux, EHPAD… 
              sans complexité, sans surcoût.
            </p>
          </div>
          {/* Visual Element */}
          <div className="relative animate-slide-in-right ">
            <div className="grid lg:grid-cols-2 gap-12 sm-gap-0">
              <div>
                <img src="images/bios_2023_transp.png" />
              </div>
              <div className="grid gap-y-4 sm:gap-y-0">
                {promises.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground">{feature.text}</p>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;