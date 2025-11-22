import { AlertTriangle, TrendingDown, HelpCircle } from "lucide-react";
import { tAuto } from "../i18n/i18n";

const ProblemSection = () => {

  const problems = [
    {
      icon: TrendingDown,
      title: tAuto('problem_section.management.title'),
      description: tAuto('problem_section.management.description'),
      color: "bg-red-500/20"
    },
    {
      icon: AlertTriangle,
      title: tAuto('problem_section.data.title'),
      description: tAuto('problem_section.data.description'),
      color: "bg-yellow-500/20"
    },
    {
      icon: HelpCircle,
      title: tAuto("problem_section.support.title"),
      description: tAuto("problem_section.support.description"),
      color: "bg-green-500/20"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {tAuto('problem_section.lost_buildings')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {tAuto('problem_section.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`bg-card ${problem.color} rounded-xl p-8 shadow-card-industrial border border-border hover:shadow-industrial transition-shadow duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
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
            <div className="text-sm text-muted-foreground">{tAuto("problem_section.no_BMS")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">+30%</div>
            <div className="text-sm text-muted-foreground">{tAuto("problem_section.waste")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">{tAuto("problem_section.identify")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">{tAuto("problem_section.consumption_data")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;