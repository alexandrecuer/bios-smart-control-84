import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Clock, Wrench, Euro } from "lucide-react";

const HeroSection = () => {
  const promises = [
    { icon: CheckCircle, text: "Zéro refonte : s'installe sur l'existant" },
    { icon: Clock, text: "Pose en 2h, prise en main en 10 min" },
    { icon: Wrench, text: "Compatible chauffagistes locaux" },
    { icon: Euro, text: "Investissement 10x inférieur à une GTB" }
  ];
  return (
    <section className="py-8 lg:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl mb-6 font-bold text-foreground">
              La régulation intelligente pour les bâtiments oubliés de la GTB
            </h1>
            <p className="text-xl text-foreground mb-8">
              Packs prêts à poser pour collèges, gymnases, petits hôpitaux, EHPAD… 
              sans complexité, sans surcoût.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-primary hover:bg-secondary/90" 
                asChild
              >
                <Link to="/contact" className="flex items-center">
                  Demander une fiche produit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-background hover:bg-primary-foreground hover:text-primary" 
                asChild
              >
                <Link to="/contact">Être rappelé</Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {promises.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in-right">
            <div className="bg-gradient-hero bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="absolute inset-0 bg-white/20 pointer-events-none" />
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-glow rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Installation rapide</h3>
                    <p className="text-primary-foreground/80">2h de pose maximum</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Prise en main simple</h3>
                    <p className="text-primary-foreground/80">Interface pensée agents techniques</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Euro className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Coût maîtrisé</h3>
                    <p className="text-primary-foreground/80">10x moins cher qu'une GTB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-end">
          <img 
            src="images/burner.png" 
            alt="Décoration" 
            className="w-4/5 md:w-3/5 max-w-[600px] filter grayscale opacity-60 object-contain" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;