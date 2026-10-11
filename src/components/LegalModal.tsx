import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'mentions' | 'confidentialite' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isMentions = type === 'mentions';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        <div className="bg-[#121824] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#E32636]" />
            <h3 className="text-lg font-bold">
              {isMentions ? 'Mentions Légales' : 'Politique de Confidentialité'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-sm text-slate-700 space-y-4 max-h-[70vh] overflow-y-auto leading-relaxed">
          {isMentions ? (
            <>
              <p>
                <strong>Éditeur du site :</strong>
                <br />
                ADP Toiture SA
                <br />
                Chemin Frank-Thomas 24B, 1208 Genève, Suisse
                <br />
                Téléphone : 078 760 96 36
                <br />
                Email : info@adp-toiture.ch
              </p>
              <p>
                <strong>Forme juridique & Immatriculation :</strong>
                <br />
                Société anonyme (SA) immatriculée au Registre du Commerce du Canton de Genève (IDE / UID : CHE-342.189.452).
              </p>
              <p>
                <strong>Activité :</strong>
                <br />
                Travaux de ferblanterie, couverture de toitures de tous types, étanchéité de toitures plates et terrasses, fabrication sur mesure en atelier, entretien et diagnostic de toiture.
              </p>
              <p>
                <strong>Responsabilité :</strong>
                <br />
                ADP Toiture SA s’efforce de fournir des informations exactes et actualisées. Tous les travaux sont exécutés conformément aux normes de l'Association Suisse des Entreprises de Ferblanterie et Couverture (Enveloppe des Édifices Suisse) et réglementations SUVA.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Protection des données personnelles (LPD Suisse & RGPD) :</strong>
                <br />
                ADP Toiture SA s’engage à protéger la sphère privée de ses utilisateurs conformément à la loi fédérale sur la protection des données (LPD).
              </p>
              <p>
                <strong>Collecte et finalité des données :</strong>
                <br />
                Les données transmises via notre formulaire de demande de devis (nom, numéro de téléphone, email, adresse à Genève) sont strictement réservées à l'établissement d'une proposition commerciale et à la planification des interventions techniques.
              </p>
              <p>
                <strong>Conservation et tiers :</strong>
                <br />
                Vos données ne sont ni vendues, ni louées, ni cédées à des tiers publicitaires. Elles sont conservées de manière sécurisée en Suisse.
              </p>
              <p>
                <strong>Vos droits :</strong>
                <br />
                Vous bénéficiez à tout moment d'un droit d'accès, de rectification et d'effacement de vos données sur simple demande à info@adp-toiture.ch.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-md text-xs font-semibold hover:bg-slate-800"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
