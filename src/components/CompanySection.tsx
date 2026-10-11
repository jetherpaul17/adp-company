import React from 'react';
import { ArrowRight, Users, Wrench, ShieldCheck, MapPin } from 'lucide-react';
import teamPhoto from '../assets/images/team_roofers_van_1791716941868.jpg';

interface CompanySectionProps {
  onLearnMore: () => void;
}

export const CompanySection: React.FC<CompanySectionProps> = ({ onLearnMore }) => {
  return (
    <section id="entreprise" className="py-20 lg:py-32 bg-[#121824] text-white relative overflow-hidden">
      {/* Subtle modern background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Key Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Red Kicker */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-[#E32636] uppercase font-sans">
                NOTRE ENTREPRISE
              </span>
              <div className="h-[2px] w-10 bg-[#E32636] rounded-full" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15] mb-6 text-balance">
              Une équipe à taille humaine,
              <span className="block text-slate-100">un savoir-faire reconnu.</span>
            </h2>

            {/* Paragraph matching exact original copy */}
            <p className="text-[15px] sm:text-[17px] text-slate-300 leading-relaxed font-normal mb-8">
              Basés aux Acacias, aux Vives, à Genève, nous mettons notre expérience et notre savoir-faire au service de vos projets de toiture. Notre équipe de 7 à 8 collaborateurs intervient pour les particuliers, les entreprises et en collaboration avec les plus grands acteurs du secteur.
            </p>

            {/* Key Stat Cards Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#E32636]">7-8</span>
                <span className="text-[12px] text-slate-400 font-medium leading-tight">Artisans qualifiés CFC</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">100%</span>
                <span className="text-[12px] text-slate-400 font-medium leading-tight">Genève & alentours</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400">SUVA</span>
                <span className="text-[12px] text-slate-400 font-medium leading-tight">Sécurité certifiée</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl text-[14px] font-bold text-white border border-slate-600 hover:border-white hover:bg-white/10 transition-all duration-200 cursor-pointer group shadow-sm"
              >
                <span>En savoir plus sur l’équipe</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: High-fidelity Team & Van Photography */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 group">
              <img
                src={teamPhoto}
                alt="L'équipe des artisans ferblantiers-couvreurs ADP Toiture SA devant le véhicule d'intervention à Genève"
                className="w-full h-auto object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl sm:rounded-3xl pointer-events-none" />

              {/* Floating Badge on Photo */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-white flex items-center gap-2 shadow-lg">
                <MapPin className="w-4 h-4 text-[#E32636]" />
                <span className="font-semibold">Atelier & Flotte aux Acacias, 1208 Genève</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
