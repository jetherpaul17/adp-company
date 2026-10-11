import React from 'react';
import { X, MapPin, Calendar, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from './ProjectsSection.tsx';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Full Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/85 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-md flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E32636]" />
              {project.location}
            </span>
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-slate-200 text-xs font-medium rounded-md flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Réalisé en {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#E32636] tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {project.title}
              </h3>
            </div>
            <div className="text-sm text-slate-500 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-slate-400" />
              <span>{project.details.client}</span>
            </div>
          </div>

          <p className="text-[15px] text-slate-700 leading-relaxed font-normal">
            {project.details.description}
          </p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Travaux effectués par notre équipe
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.details.scope.map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{s}</span>
                </div>
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
                onRequestQuote();
              }}
              className="inline-flex items-center gap-2 bg-[#E32636] hover:bg-[#c91e2d] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              <span>Demander un devis similaire</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
