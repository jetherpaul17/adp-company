import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, Shield, Clock, ChevronRight } from 'lucide-react';
import { AdpLogo } from './AdpLogo.jsx';

export function Header({ onOpenQuote, activeSection = 'accueil' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil', id: 'accueil' },
    { label: 'Nos services', href: '#services', id: 'services' },
    { label: 'Nos réalisations', href: '#realisations', id: 'realisations' },
    { label: 'À propos', href: '#entreprise', id: 'entreprise' },
    { label: 'Avis clients', href: '#avis', id: 'avis' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 transition-all duration-300">
      {/* Top Micro-Bar (Reassurance & Contact) */}
      <div className="bg-[#121824] text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-[#E32636]" />
              <span>Artisans qualifiés CFC · Sécurité SUVA</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interventions urgentes & devis sous 24-48h</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-slate-400">Genève · Acacias · Vives</span>
            <span className="text-slate-600">|</span>
            <a href="mailto:info@adp-toiture.ch" className="hover:text-white transition-colors">
              info@adp-toiture.ch
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          scrolled ? 'border-slate-200/90 shadow-sm py-2 sm:py-2.5' : 'border-slate-100 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <div className="shrink-0 flex items-center">
              <a
                href="#accueil"
                className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E32636] rounded-md transition-transform hover:opacity-95"
              >
                <AdpLogo size="md" />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[14px] font-semibold text-slate-700">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-[#E32636] font-bold bg-red-50/70'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#E32636] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Zone: Phone + CTA */}
            <div className="hidden sm:flex items-center gap-4 xl:gap-5 shrink-0">
              {/* Phone Button */}
              <a
                href="tel:0787609636"
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg text-[14px] font-bold text-slate-800 hover:text-[#E32636] hover:bg-slate-50 transition-all border border-slate-200/80 group shadow-2xs"
                title="Appeler ADP Toiture SA à Genève"
              >
                <div className="w-7 h-7 rounded-full bg-red-50 text-[#E32636] flex items-center justify-center group-hover:bg-[#E32636] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>078 760 96 36</span>
              </a>

              {/* Primary Action Button */}
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-[#E32636] hover:bg-[#c91e2d] text-white px-5 py-2.5 rounded-lg text-[14px] font-bold transition-all duration-200 shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/30 active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Actions: Phone tap + Menu toggle */}
            <div className="flex items-center sm:hidden gap-2">
              <a
                href="tel:0787609636"
                className="w-10 h-10 rounded-lg bg-red-50 text-[#E32636] flex items-center justify-center active:scale-95 transition-transform"
                aria-label="Appeler 078 760 96 36"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 active:bg-slate-100 focus:outline-none"
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer with smooth backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-black/50 backdrop-blur-xs z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-b-2xl border-b border-slate-200 p-5 shadow-2xl max-h-[85vh] overflow-y-auto">
            {/* Quick emergency status on mobile */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Interventions Genève 7j/7</span>
              </div>
              <span className="font-bold text-[#E32636]">Devis gratuit</span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-[15px] font-semibold transition-colors ${
                      isActive
                        ? 'text-[#E32636] bg-red-50'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
            </nav>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:0787609636"
                className="flex items-center justify-center gap-2.5 py-3 text-[15px] font-bold text-slate-800 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E32636]" />
                <span>Appeler : 078 760 96 36</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#E32636] hover:bg-[#c91e2d] text-white py-3.5 rounded-xl text-[15px] font-bold shadow-md shadow-red-600/30 cursor-pointer"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
