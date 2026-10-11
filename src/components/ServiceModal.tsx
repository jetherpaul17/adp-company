import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from './ServicesSection.tsx';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuoteForService: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestQuoteForService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Header photo */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-5 left-6 right-6">
            <span className="text-[12px] font-bold text-red-400 tracking-wider uppercase">
              EXPERTISE ADP TOITURE SA
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            {service.details.summary}
          </p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Prestations incluses
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.details.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-[#E32636] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Matériaux et standards suisses
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.details.materials.map((mat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-medium"
                >
                  {mat}
                </span>
              ))}
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
                onRequestQuoteForService(service.id);
              }}
              className="inline-flex items-center gap-2 bg-[#E32636] hover:bg-[#c91e2d] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer shadow-sm"
            >
              <span>Demander un devis pour {service.title.toLowerCase()}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
