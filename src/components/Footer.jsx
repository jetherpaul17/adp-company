import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ExternalLink, Clock } from 'lucide-react';
import { AdpLogo } from './AdpLogo.jsx';

export function Footer({ onOpenQuote, onOpenLegal }) {
  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Nos services', href: '#services' },
    { label: 'Nos réalisations', href: '#realisations' },
    { label: 'À propos', href: '#entreprise' },
    { label: 'Avis clients', href: '#avis' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="bg-[#EEF1F4] text-slate-800 pt-16 sm:pt-20 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start mb-14 sm:mb-16">
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#accueil" className="inline-block focus:outline-none mb-4">
              <AdpLogo size="md" />
            </a>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-4">
              Entreprise générale de ferblanterie, couverture et étanchéité. Un savoir-faire artisanal de référence au service des particuliers, architectes et régies immobilières du canton de Genève.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white/70 px-3 py-2 rounded-lg border border-slate-200/80 w-fit">
              <Clock className="w-3.5 h-3.5 text-[#E32636]" />
              <span>Atelier ouvert : Lun-Ven 07h00 - 18h30</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2.5 text-[15px] font-semibold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#E32636] transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact details & CTA button */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col md:items-end text-left md:text-right gap-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Coordonnées Genève
            </h4>

            {/* Phone */}
            <a
              href="tel:0787609636"
              className="inline-flex items-center gap-2.5 text-[16px] font-bold text-slate-900 hover:text-[#E32636] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E32636] shrink-0" />
              <span>078 760 96 36</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@adp-toiture.ch"
              className="inline-flex items-center gap-2.5 text-[15px] font-medium text-slate-700 hover:text-[#E32636] transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-500 shrink-0" />
              <span>info@adp-toiture.ch</span>
            </a>

            {/* Address with Google Maps link */}
            <a
              href="https://maps.google.com/?q=Chem.+Frank-Thomas+24B,+1208+Genève"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-slate-500 shrink-0 group-hover:text-[#E32636]" />
              <span>Chem. Frank-Thomas 24B, 1208 Genève</span>
              <ExternalLink className="w-3 h-3 text-slate-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Red Button */}
            <div className="mt-3">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-[#E32636] hover:bg-[#c91e2d] text-white px-6 py-3 rounded-xl text-[14px] font-bold transition-all duration-200 shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/30 active:scale-[0.98] cursor-pointer"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-300/80 flex flex-col sm:flex-row items-center justify-between text-[13px] text-slate-500 gap-4">
          <p>© 2024 ADP Toiture SA. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('mentions')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Mentions légales
            </button>
            <span className="text-slate-300">·</span>
            <button
              onClick={() => onOpenLegal('confidentialite')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
