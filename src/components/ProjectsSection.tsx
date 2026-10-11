import React, { useState } from 'react';
import { ArrowRight, MapPin, Eye } from 'lucide-react';
import photoRenovation from '../assets/images/realisation_renovation_toiture_1791717016007.jpg';
import photoCopper from '../assets/images/realisation_copper_cladding_1791717002925.jpg';
import photoEtancheite from '../assets/images/service_etancheite_flat_1791716926438.jpg';
import photoEntretien from '../assets/images/service_couverture_tiles_1791716885156.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
  type: 'couverture' | 'ferblanterie' | 'etancheite' | 'entretien';
  year: string;
  details: {
    client: string;
    description: string;
    scope: string[];
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: 'entretien',
    title: 'Entretien de toiture',
    location: 'Genève',
    image: photoEntretien,
    category: 'Entretien & Nettoyage',
    type: 'entretien',
    year: '2024',
    details: {
      client: 'Propriété privée, Champel',
      description: 'Démoussage préventif en profondeur, révision des fixations de faîtage et nettoyage complet des chéneaux et descentes d’eaux pluviales.',
      scope: ['Contrôle d’étanchéité des noues', 'Remplacement de 45 tuiles fissurées', 'Traitement hydrofuge respirant', 'Rapport photographique complet']
    }
  },
  {
    id: 'etancheite-terrasse',
    title: 'Étanchéité de terrasse',
    location: 'Genève',
    image: photoEtancheite,
    category: 'Étanchéité bitumineuse',
    type: 'etancheite',
    year: '2024',
    details: {
      client: 'Immeuble résidentiel, Eaux-Vives',
      description: 'Réfection intégrale de l’étanchéité sur terrasse accessible de 180 m² avec isolation thermique renforcée et pose de dalles céramiques sur plots réglables.',
      scope: ['Dépose de l’ancien complexe', 'Pare-vapeur bitumineux soudé', 'Isolation PIR 140 mm', 'Complexe bicouche anti-racine']
    }
  },
  {
    id: 'renovation-couverture',
    title: 'Rénovation de couverture',
    location: 'Genève',
    image: photoRenovation,
    category: 'Couverture & Rénovation',
    type: 'couverture',
    year: '2023',
    details: {
      client: 'Maison de maître, Cologny',
      description: 'Rénovation complète d’une toiture à forte pente de style traditionnel genevois avec ardoises d’Angers et finitions de faîtage sur mesure.',
      scope: ['Sous-toiture respirante HPV', 'Pose clouée au crochet inox', 'Ventilation basse et haute de toiture', 'Garantie décennale suisse']
    }
  },
  {
    id: 'habillage-cuivre',
    title: 'Habillage en cuivre',
    location: 'Genève',
    image: photoCopper,
    category: 'Ferblanterie d’art',
    type: 'ferblanterie',
    year: '2023',
    details: {
      client: 'Régie immobilière, Florissant',
      description: 'Habillage intégral de lucarnes jacobines et cheminées d’époque en cuivre naturel 0.8 mm façonné à la main dans notre atelier des Acacias.',
      scope: ['Façonnage à joint debout sur mesure', 'Soudure à l’étain traditionnelle', 'Profils de goutte d’eau protégés', 'Patine protectrice naturelle']
    }
  }
];

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenAllProjects: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenAllProjects,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.type === activeFilter || (activeFilter === 'couverture' && p.type === 'entretien'));

  return (
    <section id="realisations" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-[#E32636] uppercase font-sans">
                NOS RÉALISATIONS
              </span>
              <div className="h-[2px] w-10 bg-[#E32636] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight">
              Des projets variés à Genève.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Découvrez nos réalisations récentes chez des particuliers et des régies immobilières du canton de Genève.
            </p>
          </div>

          <button
            onClick={onOpenAllProjects}
            className="group inline-flex items-center gap-2 text-[15px] font-bold text-slate-800 hover:text-[#E32636] transition-colors cursor-pointer self-start sm:self-auto py-1"
          >
            <span>Voir toutes nos réalisations</span>
            <ArrowRight className="w-4 h-4 text-[#E32636] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Modern Interactive Filter Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'Tous les projets' },
            { id: 'couverture', label: 'Couverture' },
            { id: 'ferblanterie', label: 'Ferblanterie' },
            { id: 'etancheite', label: 'Étanchéité' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 Projects Grid with modern cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo with zoom and hover overlay */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 px-3.5 py-2 bg-white/95 rounded-xl shadow-lg text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#E32636]" />
                    <span>Voir le chantier</span>
                  </div>
                </div>

                {/* Pill badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title & Location Pin */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-1.5 group-hover:text-[#E32636] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[13px] text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#E32636] shrink-0 fill-[#E32636]/15" />
                    <span>{project.location} · {project.year}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate max-w-[180px]">{project.details.client}</span>
                  <span className="text-[#E32636] font-bold">Détails →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
