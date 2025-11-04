import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { School, Dumbbell, Building2, Heart, Download, ArrowRight } from "lucide-react";

const PacksSection = () => {
  const packs = [
    {
      icon: School,
      name: "BIOS Chaufferie Collège",
      target: "Établissements scolaires",
      description: "Pilotage chauffage + eau chaude sanitaire pour collèges et lycées",
      features: [
        "Régulation température par zone",
        "Programmation horaires scolaires",
        "Alerte maintenance préventive",
        "Suivi consommation gaz/fioul"
      ],
      price: "À partir de 3 500€",
      installation: "2h d'installation"
    },
    {
      icon: Dumbbell,
      name: "BIOS Gymnase Sport",
      target: "Équipements sportifs",
      description: "Solution complète chauffage + ventilation pour gymnases et salles de sport",
      features: [
        "Gestion VMC et renouvellement d'air",
        "Programmation événements sportifs",
        "Contrôle température et humidité",
        "Économies sur période vacances"
      ],
      price: "À partir de 4 200€",
      installation: "3h d'installation"
    },
    {
      icon: Heart,
      name: "BIOS EHPAD Confort",
      target: "Établissements de santé",
      description: "Confort thermique et qualité d'air pour EHPAD et petits hôpitaux",
      features: [
        "Zones de confort personnalisées",
        "Surveillance qualité d'air",
        "Alerte température critique",
        "Rapport mensuel automatique"
      ],
      price: "À partir de 5 800€",
      installation: "4h d'installation"
    },
    {
      icon: Building2,
      name: "BIOS Bâtiment Tertiaire",
      target: "Bureaux et administrations",
      description: "Pack complet pour mairies, petits bureaux et bâtiments administratifs",
      features: [
        "Gestion multi-zones bureaux",
        "Programmation présence/absence",
        "Suivi réglementaire énergétique",
        "Interface mobile gestionnaire"
      ],
      price: "À partir de 4 500€", 
      installation: "3h d'installation"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Packs BIOS prêts à poser
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chaque pack est conçu pour un type de bâtiment spécifique. 
            Tout est inclus : passerelle, capteurs, configuration et formation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {packs.map((pack, index) => (
            <Card key={index} className="border border-border hover:shadow-industrial transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <pack.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{pack.name}</CardTitle>
                    <CardDescription>{pack.target}</CardDescription>
                  </div>
                </div>
                <p className="text-muted-foreground">{pack.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Fonctionnalités incluses :</h4>
                    <ul className="space-y-1">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="font-semibold text-primary">{pack.price}</div>
                      <div className="text-sm text-muted-foreground">{pack.installation}</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Fiche PDF
                      </Button>
                      <Button size="sm" asChild>
                        <Link to="/contact">
                          Devis
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/packs" className="flex items-center">
              Voir tous les packs BIOS
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>

        <div className="relative flex justify-center items-end">
          <img 
            src="images/servo.png" 
            alt="Décoration" 
            className="w-4/5 md:w-3/5 max-w-[600px] filter grayscale opacity-60 object-contain" 
          />
        </div>
      </div>
    </section>
  );
};

export default PacksSection;