import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import AboutSection from "./components/AboutSection";
import PacksSection from "./components/PacksSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import DigitalTwinSection from "./components/DigitalTwinSection";
import ComparisonSection from "./components/ComparisonSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/problem" element={<ProblemSection />} />
            <Route path="/solution" element={<SolutionSection />} />
            <Route path="/fonctionnement" element={<DigitalTwinSection />} />
            <Route path="/comparaison" element={<ComparisonSection />} />
            <Route path="/packs" element={<PacksSection />} />
            <Route path="/about" element={<AboutSection />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
