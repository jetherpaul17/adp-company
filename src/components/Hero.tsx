import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Award, MapPin } from 'lucide-react';
import heroImage from '../assets/images/hero_roofer_geneva_1791716870572.jpg';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreServices }) => {
  return (
    <section id="accueil" className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[680px] flex flex-col justify-between overflow-hidden">
      {/* Background Photography with fallback container */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <img
          src={heroImage}
          alt="Artisan ferblantier couvreur ADP Toiture travaillant à Genève face au lac Léman"
          className="w-full h-full object-cover object-center scale-[1.01]"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic gradient overlay matching original screenshot with modern smooth ramp */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121824]/90 via-transparent to-black/30" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 w-full my-auto">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Red Kicker Line with modern pill touch */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#E32636]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-[#E32636] uppercase font-sans">
              À GENÈVE ET SES ALENTOURS
            </span>
          </div>

          {/* Bold White Headline with balance */}
          <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.12] mb-5 sm:mb-6 text-balance">
            ADP Toiture SA
            <span className="block text-slate-100">pour vos travaux</span>
            <span className="block text-white">
              de toiture<span className="text-[#E32636]">.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 font-normal leading-relaxed mb-8 max-w-xl">
            Ferblanterie, couverture et étanchéité.
            <br className="hidden sm:inline" />
            {' '}Un savoir-faire au service des particuliers et des professionnels.
          </p>

          {/* CTA Buttons Pair with modern elevation */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 bg-[#E32636] hover:bg-[#c91e2d] text-white px-7 py-3.5 sm:py-4 rounded-xl text-[15px] font-bold transition-all duration-200 shadow-xl shadow-red-600/30 hover:shadow-red-600/40 active:scale-[0.98] cursor-pointer"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center px-6 py-3.5 sm:py-4 rounded-xl text-[15px] font-semibold text-white border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm cursor-pointer"
            >
              <span>Nos services</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Quick Reassurance Strip docked at bottom of Hero */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E32636] shrink-0" />
              <span className="font-medium">Garantie décennale suisse</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-medium">Interventions rapides 7j/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-medium">Artisans certifiés CFC</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E32636] shrink-0" />
              <span className="font-medium">Atelier basé aux Acacias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
