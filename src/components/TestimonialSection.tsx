import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            BIOS déjà en test
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premiers retours de nos sites pilotes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-card rounded-xl p-8 shadow-card-industrial border border-border">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <p className="text-foreground mb-6 italic">
              "Installation en 2h30 sur notre chaufferie gaz. L'interface est vraiment pensée pour nous, 
              les agents techniques. Fini les appels d'urgence pour des pannes qu'on peut maintenant anticiper."
            </p>
            <div className="border-t border-border pt-4">
              <div className="font-semibold text-foreground">Jean-Marc Dubois</div>
              <div className="text-sm text-muted-foreground">Agent technique</div>
              <div className="text-sm text-muted-foreground">Collège Jean Moulin, Caen</div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-card rounded-xl p-8 shadow-card-industrial border border-border">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <p className="text-foreground mb-6 italic">
              "15% d'économies dès le premier mois sur notre gymnase. Le système s'est adapté automatiquement 
              aux créneaux d'utilisation. Installation par notre chauffagiste habituel."
            </p>
            <div className="border-t border-border pt-4">
              <div className="font-semibold text-foreground">Marie Lecomte</div>
              <div className="text-sm text-muted-foreground">Responsable patrimoine</div>
              <div className="text-sm text-muted-foreground">Mairie de Lisieux</div>
            </div>
          </div>
        </div>

        {/* Prototype Status */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-primary/10 rounded-lg px-6 py-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold text-foreground">
              6 sites pilotes en cours • Commercialisation Q2 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;