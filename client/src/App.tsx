import { useState, lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ConsultationModal from "@/components/consultation-modal";
import CookieBanner from "@/components/cookie-banner";
import { ScrollToTop as ScrollToTopButton } from "@/components/scroll-to-top";
import { FloatingCTA } from "@/components/floating-cta";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { PageTransition } from "@/components/page-transition";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";

// HOLDING PAGE CONTROL - Set to true to show holding page, false to show full site
const SHOW_HOLDING_PAGE = false;

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const AboutTeam = lazy(() => import("@/pages/about-team"));
const AboutMethodology = lazy(() => import("@/pages/about-methodology"));
const Services = lazy(() => import("@/pages/services"));
const AmpStore = lazy(() => import("@/pages/amp-store"));
const Coaching = lazy(() => import("@/pages/coaching"));
const Teams = lazy(() => import("@/pages/teams"));
const Transformation = lazy(() => import("@/pages/transformation"));
const HowWeWork = lazy(() => import("@/pages/how-we-work"));
const AiGovernance = lazy(() => import("@/pages/ai-governance"));
const AiImplementation = lazy(() => import("@/pages/ai-implementation"));
const StructuredDelivery = lazy(() => import("@/pages/structured-delivery"));
const Capability = lazy(() => import("@/pages/capability"));
const Careers = lazy(() => import("@/pages/careers"));
const CaseStudies = lazy(() => import("@/pages/case-studies"));
const Insights = lazy(() => import("@/pages/insights"));
const ArticleDetail = lazy(() => import("@/pages/article-detail"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Accessibility = lazy(() => import("@/pages/accessibility"));
const ModernSlavery = lazy(() => import("@/pages/modern-slavery"));
const Press = lazy(() => import("@/pages/press"));
const OurWork = lazy(() => import("@/pages/our-work"));
const OrgDesign = lazy(() => import("@/pages/org-design"));
const Contact = lazy(() => import("@/pages/contact"));
const SEOOptimizer = lazy(() => import("@/pages/seo-optimizer"));
const SectorInfrastructure = lazy(() => import("@/pages/sectors/infrastructure"));
const SectorFinancialServices = lazy(() => import("@/pages/sectors/financial-services"));
const SectorEnergyUtilities = lazy(() => import("@/pages/sectors/energy-utilities"));
const SectorPublicSector = lazy(() => import("@/pages/sectors/public-sector"));
const SectorTechnology = lazy(() => import("@/pages/sectors/technology"));
const ForCIOs = lazy(() => import("@/pages/for-cios"));
const ForDeliveryDirectors = lazy(() => import("@/pages/for-delivery-directors"));
const ForDigitalLeads = lazy(() => import("@/pages/for-digital-leads"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Holding Page Component
function HoldingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
            We're making some
            <br />
            <span className="text-primary">
              improvements
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Amplified Limited website is temporarily under maintenance.
            <br />
            We'll be back shortly with exciting updates.
          </p>
        </div>
        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            For urgent inquiries, please contact us at{" "}
            <a href="mailto:hello@amplified.co.uk" className="text-primary hover:underline">
              hello@amplified.co.uk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Scroll to top component
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState<string>("");

  const openConsultation = (serviceType?: string) => {
    setSelectedServiceType(serviceType || "");
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
    setSelectedServiceType("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg">
        Skip to main content
      </a>
      <ScrollProgress />
      <ScrollToTop />
      <Navigation onOpenConsultation={openConsultation} />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
          <PageTransition>
            <Switch>
              <Route path="/" component={() => <Home onOpenConsultation={openConsultation} />} />
              <Route path="/about" component={() => <About onOpenConsultation={openConsultation} />} />
              <Route path="/about/team" component={() => <AboutTeam onOpenConsultation={openConsultation} />} />
              <Route path="/about/methodology" component={() => <AboutMethodology onOpenConsultation={openConsultation} />} />
              <Route path="/services" component={() => <Services onOpenConsultation={openConsultation} />} />
              <Route path="/amp-store" component={() => <AmpStore onOpenConsultation={openConsultation} />} />
              <Route path="/coaching" component={() => <Coaching onOpenConsultation={openConsultation} />} />
              <Route path="/teams" component={() => <Teams onOpenConsultation={openConsultation} />} />
              <Route path="/transformation" component={() => <Transformation onOpenConsultation={openConsultation} />} />
              <Route path="/how-we-work" component={() => <HowWeWork onOpenConsultation={openConsultation} />} />
              <Route path="/ai-governance" component={() => <AiGovernance onOpenConsultation={openConsultation} />} />
              <Route path="/ai-implementation" component={() => <AiImplementation onOpenConsultation={openConsultation} />} />
              <Route path="/structured-delivery" component={() => <StructuredDelivery onOpenConsultation={openConsultation} />} />
              <Route path="/capability" component={() => <Capability onOpenConsultation={openConsultation} />} />
              <Route path="/org-design" component={() => <OrgDesign onOpenConsultation={openConsultation} />} />
              <Route path="/careers" component={() => <Careers onOpenConsultation={openConsultation} />} />
              <Route path="/case-studies" component={() => <CaseStudies onOpenConsultation={openConsultation} />} />
              <Route path="/our-work" component={() => <OurWork onOpenConsultation={openConsultation} />} />
              <Route path="/insights" component={() => <Insights onOpenConsultation={openConsultation} />} />
              <Route path="/insights/:slug" component={() => <ArticleDetail onOpenConsultation={openConsultation} />} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/terms" component={Terms} />
              <Route path="/accessibility" component={Accessibility} />
              <Route path="/modern-slavery" component={ModernSlavery} />
              <Route path="/press" component={Press} />
              <Route path="/contact" component={() => <Contact onOpenConsultation={openConsultation} />} />
              <Route path="/sectors/infrastructure" component={() => <SectorInfrastructure onOpenConsultation={openConsultation} />} />
              <Route path="/sectors/financial-services" component={() => <SectorFinancialServices onOpenConsultation={openConsultation} />} />
              <Route path="/sectors/energy-utilities" component={() => <SectorEnergyUtilities onOpenConsultation={openConsultation} />} />
              <Route path="/sectors/public-sector" component={() => <SectorPublicSector onOpenConsultation={openConsultation} />} />
              <Route path="/sectors/technology" component={() => <SectorTechnology onOpenConsultation={openConsultation} />} />
              <Route path="/for-cios" component={() => <ForCIOs onOpenConsultation={openConsultation} />} />
              <Route path="/for-delivery-directors" component={() => <ForDeliveryDirectors onOpenConsultation={openConsultation} />} />
              <Route path="/for-digital-leads" component={() => <ForDigitalLeads onOpenConsultation={openConsultation} />} />
              <Route path="/seo-optimizer" component={SEOOptimizer} />
              <Route component={NotFound} />
            </Switch>
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={closeConsultation}
        serviceType={selectedServiceType}
      />
      <CookieBanner />
      <ScrollToTopButton />
      <FloatingCTA onOpenConsultation={() => openConsultation()} />
      <CursorSpotlight />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          {SHOW_HOLDING_PAGE ? <HoldingPage /> : <Router />}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
