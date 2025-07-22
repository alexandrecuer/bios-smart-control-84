import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DigitalTwinSection from "@/components/DigitalTwinSection";
import ComparisonSection from "@/components/ComparisonSection";
import PacksSection from "@/components/PacksSection";
import TestimonialSection from "@/components/TestimonialSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DigitalTwinSection />
        <ComparisonSection />
        <PacksSection />
        <TestimonialSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
