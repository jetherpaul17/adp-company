import React from 'react';
import { PartnerLogos } from './PartnerLogos.jsx';

export function TrustSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker header with line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-[#E32636] uppercase font-sans shrink-0">
            ILS NOUS FONT CONFIANCE
          </span>
          <div className="h-[1.5px] w-full bg-slate-200" />
        </div>

        {/* Real Logos Grid */}
        <PartnerLogos />
      </div>
    </section>
  );
}
