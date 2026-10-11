import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { ServicesSection, servicesData } from './components/ServicesSection.jsx';
import { CompanySection } from './components/CompanySection.jsx';
import { ProjectsSection, projectsData } from './components/ProjectsSection.jsx';
import { TestimonialsSection } from './components/TestimonialsSection.jsx';
import { TrustSection } from './components/TrustSection.jsx';
import { Footer } from './components/Footer.jsx';
import { QuoteModal } from './components/QuoteModal.jsx';
import { ServiceModal } from './components/ServiceModal.jsx';
import { ProjectModal } from './components/ProjectModal.jsx';
import { AboutModal } from './components/AboutModal.jsx';
import { ReviewsModal } from './components/ReviewsModal.jsx';
import { LegalModal } from './components/LegalModal.jsx';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState('couverture');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);
  const [activeSection, setActiveSection] = useState('accueil');

  // Any modal open
  const isAnyModalOpen =
    isQuoteOpen ||
    Boolean(selectedService) ||
    Boolean(selectedProject) ||
    isAboutOpen ||
    isReviewsOpen ||
    Boolean(legalModalType);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'services', 'entreprise', 'realisations', 'avis', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuote = (defaultService = 'couverture') => {
    setSelectedQuoteService(defaultService);
    setIsQuoteOpen(true);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('realisations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#E32636] selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Header
        onOpenQuote={() => handleOpenQuote()}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onExploreServices={scrollToServices}
        />

        {/* 3. NOS SERVICES Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenAllServices={() => setSelectedService(servicesData[0])}
        />

        {/* 4. NOTRE ENTREPRISE Section */}
        <CompanySection
          onLearnMore={() => setIsAboutOpen(true)}
        />

        {/* 5. NOS RÉALISATIONS Section with filters */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenAllProjects={scrollToProjects}
        />

        {/* 6. ILS NOUS FONT CONFIANCE - Testimonials Section */}
        <TestimonialsSection
          onOpenAllReviews={() => setIsReviewsOpen(true)}
        />

        {/* 7. ILS NOUS FONT CONFIANCE - Partner Logos Section */}
        <TrustSection />
      </main>

      {/* 8. Modern Footer */}
      <Footer
        onOpenQuote={() => handleOpenQuote()}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating Bottom Action Bar on Mobile */}
      {!isAnyModalOpen && (
        <div className="fixed bottom-0 inset-x-0 sm:hidden z-30 p-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:0787609636"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#E32636]" />
              <span>078 760 96 36</span>
            </a>
            <button
              onClick={() => handleOpenQuote()}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#E32636] text-white text-xs font-bold shadow-md shadow-red-600/30"
            >
              <span>Devis gratuit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Modals & Dialogs */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedQuoteService}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuoteForService={(serviceId) => {
          setSelectedService(null);
          handleOpenQuote(serviceId);
        }}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={() => {
          setSelectedProject(null);
          handleOpenQuote();
        }}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenQuote={() => {
          setIsAboutOpen(false);
          handleOpenQuote();
        }}
      />

      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
