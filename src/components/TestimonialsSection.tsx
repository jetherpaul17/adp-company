import React from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Travail soigné et équipe professionnelle. Notre toit est comme neuf !',
    author: 'M. Dupont',
    role: 'Particulier, Genève',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Des conseils clairs et un résultat impeccable. Je recommande sans hésiter.',
    author: 'Mme Martin',
    role: 'Particulière, Genève',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Intervention rapide et efficace. Une équipe sérieuse et à l’écoute.',
    author: 'M. Rossi',
    role: 'Régie immobilière, Genève',
    rating: 5,
  },
];

interface TestimonialsSectionProps {
  onOpenAllReviews: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenAllReviews }) => {
  return (
    <section id="avis" className="py-20 lg:py-28 bg-[#121824] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-[#E32636] uppercase font-sans">
                ILS NOUS FONT CONFIANCE
              </span>
              <div className="h-[2px] w-10 bg-[#E32636] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight">
              Des clients satisfaits.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              La satisfaction de nos clients particuliers et professionnels est notre plus belle carte de visite à Genève.
            </p>
          </div>

          <button
            onClick={onOpenAllReviews}
            className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-xl text-[14px] font-bold text-slate-200 border border-slate-700 hover:border-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer self-start sm:self-auto shadow-sm"
          >
            <span>Voir tous les avis (5.0/5)</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between overflow-hidden hover:-translate-y-1 transition-transform duration-300 border border-slate-100"
            >
              <div>
                {/* 5 Red Stars + Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#E32636]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#E32636] stroke-none"
                      />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Vérifié</span>
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-[15px] sm:text-[16px] text-slate-700 font-medium leading-relaxed mb-6 italic">
                  « {item.quote} »
                </p>
              </div>

              {/* Author & Role + subtle quote mark */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-800 text-sm">
                    {item.author.replace('M. ', '').replace('Mme ', '').substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-slate-900 leading-tight">
                      {item.author}
                    </h3>
                    <p className="text-[12px] text-slate-500 font-normal">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Decorative quote glyph in bottom right */}
                <span className="text-4xl font-serif text-slate-200 select-none leading-none -mb-2 font-bold">
                  ””
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
