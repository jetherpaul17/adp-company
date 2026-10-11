import React from 'react';
import { ArrowRight, Home, Waves, Droplet, Box } from 'lucide-react';
import serviceCouverture from '../assets/images/service_couverture_tiles_1791716885156.jpg';
import serviceFerblanterie from '../assets/images/service_ferblanterie_zinc_1791716905213.jpg';
import serviceEtancheite from '../assets/images/service_etancheite_flat_1791716926438.jpg';
import serviceFabrication from '../assets/images/service_fabrication_workshop_1791716980709.jpg';

export const servicesData = [
  {
    id: 'couverture',
    title: 'Couverture',
    description: 'Pose et rénovation de toitures de tous types.',
    image: serviceCouverture,
    tag: 'Tuiles & Ardoises',
    icon: <Home className="w-5 h-5 text-white" />,
    details: {
      summary: 'Spécialistes de la toiture traditionnelle et contemporaine genevoise, nous intervenons sur tous types de couvertures en tuiles, ardoises et bacs acier.',
      points: [
        'Pose neuve et réfection complète de toiture',
        'Remplacement de tuiles cassées et recherche de fuite',
        'Isolation thermique par l’extérieur (Sarking)',
        'Nettoyage, démoussage et traitement hydrofuge préventif'
      ],
      materials: ['Tuiles terre cuite', 'Ardoises naturelles', 'Bardeaux', 'Isolants certifiés Minergie']
    }
  },
  {
    id: 'ferblanterie',
    title: 'Ferblanterie',
    description: 'Travaux sur mesure en zinc, cuivre et aluminium.',
    image: serviceFerblanterie,
    tag: 'Métaux façonnés',
    icon: <Waves className="w-5 h-5 text-white" />,
    details: {
      summary: 'L’art du travail du métal appliqué au bâtiment pour garantir l’étanchéité parfaite des points singuliers et valoriser l’architecture.',
      points: [
        'Façonnage et pose de gouttières, chéneaux et descentes d’eaux pluviales',
        'Habillage de lucarnes, cheminées et corniches',
        'Toitures à joint debout en zinc quartz, cuivre et prélaqué',
        'Solins et raccords étanches sur maçonnerie'
      ],
      materials: ['Zinc naturel & prépatiné', 'Cuivre pur', 'Aluminium thermolaqué', 'Acier inoxydable']
    }
  },
  {
    id: 'etancheite',
    title: 'Étanchéité',
    description: 'Solutions durables pour toitures plates, terrasses et ouvrages.',
    image: serviceEtancheite,
    tag: 'Toits plats & Terrasses',
    icon: <Droplet className="w-5 h-5 text-white" />,
    details: {
      summary: 'Protection maximale contre les infiltrations pour les toitures plates, toits-terrasses circulables ou végétalisés et parkings souterrains.',
      points: [
        'Membranes bitumineuses bicouches haute performance',
        'Étanchéité liquide (résine polyuréthane armée)',
        'Systèmes pour toitures végétalisées extensives et intensives',
        'Dalles sur plots et finitions gravillonnées'
      ],
      materials: ['Bitume SBS/APP élastomère', 'Membranes EPDM & FPO', 'Résines d’étanchéité liquide', 'Isolants PIR/PUR']
    }
  },
  {
    id: 'fabrication',
    title: 'Fabrication sur mesure',
    description: 'Pièces et éléments de ferblanterie réalisés dans notre atelier.',
    image: serviceFabrication,
    tag: 'Atelier Acacias',
    icon: <Box className="w-5 h-5 text-white" />,
    details: {
      summary: 'Grâce à notre atelier équipé aux Acacias, nous plions, découpons et assemblons toutes les pièces métalliques spécifiques au millimètre près.',
      points: [
        'Pliage numérique jusqu’à 4 mètres de longueur',
        'Reconstitution de profils anciens à l’identique pour le patrimoine',
        'Fabrication d’ornements de toiture et girouettes personnalisées',
        'Rapidité d’intervention sans dépendance aux fournisseurs extérieurs'
      ],
      materials: ['Feuilles de cuivre 0.6 à 1mm', 'Zinc titane', 'Aluminium brut et laqué', 'Plomb de protection']
    }
  }
];

export function ServicesSection({ onSelectService, onOpenAllServices }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-[#E32636] uppercase font-sans">
                NOS SERVICES
              </span>
              <div className="h-[2px] w-10 bg-[#E32636] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Notre savoir-faire.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              De l’atelier aux toitures les plus exigeantes, nous couvrons l’ensemble des corps d'état de l’enveloppe du bâtiment à Genève.
            </p>
          </div>

          <button
            onClick={onOpenAllServices}
            className="group inline-flex items-center gap-2 text-[15px] font-bold text-slate-800 hover:text-[#E32636] transition-colors cursor-pointer self-start sm:self-auto py-1"
          >
            <span>Voir tous nos services</span>
            <ArrowRight className="w-4 h-4 text-[#E32636] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {servicesData.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectService(item)}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-red-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating Red Icon Badge */}
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-[#E32636] flex items-center justify-center shadow-lg shadow-red-900/30 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md text-[11px] font-semibold text-white/95">
                  {item.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#E32636] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#E32636] transition-colors">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
