import React from 'react';

export const PartnerLogos: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
      {/* 1. Implenia */}
      <div className="flex items-center justify-center p-4 sm:p-5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-100 transition-all hover:scale-102 cursor-default group">
        <div className="flex items-center gap-2">
          <svg width="30" height="30" viewBox="0 0 36 36" fill="none" className="shrink-0">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
              <ellipse
                key={i}
                cx="18"
                cy="8"
                rx="2.2"
                ry="5.5"
                fill={i % 2 === 0 ? '#E87722' : '#F5A623'}
                transform={`rotate(${deg} 180 180)`}
                opacity="0.9"
              />
            ))}
            <circle cx="18" cy="18" r="4.2" fill="#E87722" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-[#E87722] font-sans">
            Implenia
          </span>
        </div>
      </div>

      {/* 2. LOSINGER MARAZZI */}
      <div className="flex items-center justify-center p-4 sm:p-5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-100 transition-all hover:scale-102 cursor-default">
        <div className="bg-[#EB5A28] text-white px-4 py-1.5 rounded-full flex flex-col items-center justify-center shadow-xs">
          <span className="text-[12px] font-black tracking-wider leading-none">
            LOSINGER
          </span>
          <span className="text-[11px] font-black tracking-widest leading-tight mt-0.5">
            MARAZZI
          </span>
        </div>
      </div>

      {/* 3. RACINES CARRÉES Charpente Menuiserie */}
      <div className="flex items-center justify-center p-4 sm:p-5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-100 transition-all hover:scale-102 cursor-default">
        <div className="flex items-center bg-[#D62828] text-white rounded-md overflow-hidden shadow-xs border border-red-700/20">
          <div className="bg-[#B71C1C] px-2.5 py-1.5 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 19L12 4L21 19H3Z" />
              <path d="M12 9V19" />
              <path d="M7 19L12 12L17 19" />
            </svg>
          </div>
          <div className="px-2.5 py-1 flex flex-col">
            <span className="text-[11px] font-extrabold tracking-widest uppercase">
              RACINES CARRÉES
            </span>
            <span className="text-[8px] font-medium tracking-wide text-red-100">
              Charpente Menuiserie
            </span>
          </div>
        </div>
      </div>

      {/* 4. DE GAND PAYSAGE */}
      <div className="flex items-center justify-center p-4 sm:p-5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-100 transition-all hover:scale-102 cursor-default">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border border-[#6B8E23] rounded flex items-center justify-center p-0.5 bg-[#F4F7EE]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#556B2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L15 8H9L12 2Z" />
              <path d="M12 8L16 14H8L12 8Z" />
              <path d="M12 14L18 20H6L12 14Z" />
              <path d="M12 20V22" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-serif font-bold tracking-widest text-[#3B4D1A] uppercase leading-none">
              DE GAND
            </span>
            <span className="text-[11px] font-serif tracking-widest text-[#4F6322] uppercase leading-tight">
              PAYSAGE
            </span>
          </div>
        </div>
      </div>

      {/* 5. M ÉTANCHÉITÉ Sàrl */}
      <div className="flex items-center justify-center p-4 sm:p-5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-100 transition-all hover:scale-102 cursor-default col-span-2 sm:col-span-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-cyan-700/10 border border-cyan-600 flex items-center justify-center text-cyan-800 shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-black tracking-tight text-slate-800 leading-none">
              M ÉTANCHÉITÉ
            </span>
            <span className="text-[9px] font-semibold text-amber-600 tracking-wider">
              Sàrl · Genève
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
