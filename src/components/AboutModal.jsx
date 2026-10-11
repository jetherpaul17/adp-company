import React from 'react';
import { X, Users, Award, Wrench, Shield, ArrowRight } from 'lucide-react';
import teamPhoto from '../assets/images/team_roofers_van_1791716941868.jpg';

export function AboutModal({ isOpen, onClose, onOpenQuote }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        <div className="relative aspect-[16/9] w-full bg-slate-900">
          <img
            src={teamPhoto}
            alt="Équipe ADP Toiture SA"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/85 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-5 left-6 right-6">
            <span className="text-[12px] font-bold text-[#E32636] uppercase tracking-wider">
              NOTRE HISTOIRE & ENGAGEMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Une équipe d'artisans passionnés à Genève
            </h3>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            Fondée sur la passion des métiers de la toiture, <strong>ADP Toiture SA</strong> réunit des ferblantiers et couvreurs diplômés bénéficiant de nombreuses années de pratique sur les chantiers les plus exigeants de la région genevoise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <Users className="w-5 h-5 text-[#E32636] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Équipe qualifiée CFC</h4>
                <p className="text-xs text-slate-600 mt-1">7 à 8 spécialistes permanents avec apprentis formés aux normes suisses de la construction.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <Wrench className="w-5 h-5 text-[#E32636] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Atelier de façonnage aux Acacias</h4>
                <p className="text-xs text-slate-600 mt-1">Parc machine moderne pour la découpe et le pliage de tôles de haute précision en local.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#E32636] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Sécurité SUVA certifiée</h4>
                <p className="text-xs text-slate-600 mt-1">Protocoles rigoureux de sécurisation des toitures avec lignes de vie et échafaudages conformes.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <Award className="w-5 h-5 text-[#E32636] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Garantie & Réactivité</h4>
                <p className="text-xs text-slate-600 mt-1">Intervention rapide en cas d'intempéries à Genève et sur la rive gauche / rive droite.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="inline-flex items-center gap-2 bg-[#E32636] hover:bg-[#c91e2d] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
