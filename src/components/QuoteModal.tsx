import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Clock, FileText, Phone, Copy, Check } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'couverture',
}) => {
  const [step, setStep] = useState<number>(1);
  const [serviceType, setServiceType] = useState<string>(defaultService);
  const [buildingType, setBuildingType] = useState<string>('maison');
  const [timing, setTiming] = useState<string>('normal');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    commune: 'Genève',
    description: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [quoteRef, setQuoteRef] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'DEV-GE-' + Math.floor(10000 + Math.random() * 90000);
    setQuoteRef(randomRef);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setCopied(false);
    onClose();
  };

  const copyReference = () => {
    navigator.clipboard.writeText(quoteRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#121824] px-5 sm:px-8 py-5 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#E32636] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-[#E32636] uppercase font-sans">
                DEVIS GRATUIT SANS ENGAGEMENT
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
              Demande d'offre toiture à Genève
            </h3>
          </div>
          <button
            onClick={resetForm}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar (when not submitted) */}
        {!submitted && (
          <div className="bg-slate-100 h-1.5 w-full">
            <div
              className="bg-[#E32636] h-full transition-all duration-300 ease-out"
              style={{ width: step === 1 ? '50%' : '100%' }}
            />
          </div>
        )}

        {/* Modal Content */}
        {submitted ? (
          <div className="p-6 sm:p-10 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-emerald-100">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Demande transmise avec succès !
            </h4>

            {/* Reference Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-100 px-3.5 py-1.5 rounded-lg border border-slate-200 mb-5">
              <span className="text-xs text-slate-500 font-medium">Référence :</span>
              <span className="font-mono font-bold text-slate-900 text-sm">{quoteRef}</span>
              <button
                onClick={copyReference}
                className="text-slate-500 hover:text-slate-900 ml-1 p-1"
                title="Copier la référence"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
              Notre métreur qualifié ADP Toiture SA va étudier votre demande et vous recontacter sous <strong>24 à 48 heures ouvrées</strong> pour convenir d’une visite technique gratuite sur place à Genève.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-700 mb-8 max-w-lg mx-auto">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Phone className="w-4 h-4 text-[#E32636]" />
                <span>Urgence immédiate :</span>
              </div>
              <a href="tel:0787609636" className="text-[#E32636] font-bold hover:underline">
                078 760 96 36
              </a>
            </div>

            <button
              onClick={resetForm}
              className="px-8 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 max-h-[75vh] overflow-y-auto">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      1. Type de travaux envisagé
                    </label>
                    <span className="text-xs font-semibold text-slate-400">Étape 1/2</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'couverture', label: 'Couverture (tuiles / ardoises)' },
                      { id: 'ferblanterie', label: 'Ferblanterie (zinc, cuivre)' },
                      { id: 'etancheite', label: 'Étanchéité (toit plat / terrasse)' },
                      { id: 'fabrication', label: 'Fabrication atelier sur mesure' },
                      { id: 'entretien', label: 'Entretien & Démoussage' },
                      { id: 'reparation', label: 'Urgence fuite / Infiltration' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setServiceType(item.id)}
                        className={`p-3 text-left rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                          serviceType === item.id
                            ? 'border-[#E32636] bg-red-50 text-[#E32636] font-bold ring-1 ring-[#E32636]'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    2. Type de bien immobilier
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'maison', label: 'Villa / Maison' },
                      { id: 'immeuble', label: 'Immeuble' },
                      { id: 'commercial', label: 'Régie / Pro' },
                    ].map((b) => (
                      <button
                        type="button"
                        key={b.id}
                        onClick={() => setBuildingType(b.id)}
                        className={`p-2.5 text-center rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                          buildingType === b.id
                            ? 'border-[#E32636] bg-red-50 text-[#E32636] font-bold ring-1 ring-[#E32636]'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    3. Échéance d'intervention
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'urgent', label: 'Urgence (< 7j)' },
                      { id: 'normal', label: 'Dans le mois' },
                      { id: 'projet', label: 'Projet futur' },
                    ].map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setTiming(t.id)}
                        className={`p-2.5 text-center rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                          timing === t.id
                            ? 'border-[#E32636] bg-red-50 text-[#E32636] font-bold ring-1 ring-[#E32636]'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 bg-[#E32636] hover:bg-[#c91e2d] text-white px-7 py-3 rounded-xl text-sm font-bold transition-all shadow-md shadow-red-600/20 cursor-pointer"
                  >
                    <span>Continuer vers vos coordonnées</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Vos coordonnées de contact
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Étape 2/2</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E32636] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Téléphone suisse *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="078 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E32636] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean.dupont@exemple.ch"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E32636] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Commune (Genève & environs)
                    </label>
                    <input
                      type="text"
                      placeholder="ex: Genève, Cologny, Carouge..."
                      value={formData.commune}
                      onChange={(e) => setFormData({ ...formData, commune: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E32636] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Adresse ou détails du toit
                  </label>
                  <input
                    type="text"
                    placeholder="ex: Chemin de la Gradelle 12"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E32636] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Précisions sur vos travaux (facultatif)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Décrivez brièvement le projet, la surface ou le type d'intervention souhaitée..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E32636] focus:border-transparent resize-none"
                  />
                </div>

                {/* Guarantees Badges */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Garantie décennale & SUVA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span>Réponse sous 24-48h</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span>Devis 100% gratuit</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer order-2 sm:order-1"
                  >
                    ← Modifier la prestation
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E32636] hover:bg-[#c91e2d] text-white px-8 py-3.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-red-600/20 cursor-pointer order-1 sm:order-2"
                  >
                    <span>Envoyer ma demande de devis</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
