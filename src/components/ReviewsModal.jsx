import React, { useState } from 'react';
import { X, Star, Plus, Check } from 'lucide-react';
import { testimonialsData } from './TestimonialsSection.jsx';

const additionalReviews = [
  ...testimonialsData,
  {
    id: '4',
    quote: 'Changement complet de nos chéneaux en zinc et réparation de notre faîtage à Cologny. Chantier propre et délais tenus.',
    author: 'Famille de Saussure',
    role: 'Propriétaire villa, Cologny',
    rating: 5,
  },
  {
    id: '5',
    quote: 'Nous confions l’entretien annuel de 12 immeubles à ADP Toiture. Une réactivité exemplaire lors des tempêtes de bise.',
    author: 'M. Berthoud',
    role: 'Gestionnaire technique, Régie de la Rive',
    rating: 5,
  },
  {
    id: '6',
    quote: 'Étanchéité résine sur notre balcon-terrasse impeccable. Aucun problème d’infiltration depuis leur intervention.',
    author: 'Mme Favre',
    role: 'Copropriétaire, Plainpalais',
    rating: 5,
  },
];

export function ReviewsModal({ isOpen, onClose }) {
  const [reviews, setReviews] = useState(additionalReviews);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [reviewAdded, setReviewAdded] = useState(false);

  if (!isOpen) return null;

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newAuthor || !newQuote) return;
    const added = {
      id: Date.now().toString(),
      quote: newQuote,
      author: newAuthor,
      role: newRole || 'Client vérifié, Genève',
      rating: newRating,
    };
    setReviews([added, ...reviews]);
    setShowAddForm(false);
    setReviewAdded(true);
    setNewAuthor('');
    setNewQuote('');
    setNewRole('');
    setTimeout(() => setReviewAdded(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        role="dialog"
      >
        {/* Header */}
        <div className="bg-[#121824] px-6 py-5 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-widest text-[#E32636] uppercase">
                AVIS CERTIFIÉS GOOGLE & CLIENTS
              </span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-extrabold tracking-tight mt-0.5">
              Retours d'expérience à Genève (5.0 / 5)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between shrink-0">
          <span className="text-xs font-semibold text-slate-600">
            {reviews.length} avis vérifiés de particuliers et régies
          </span>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E32636] hover:text-[#c91e2d] cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Déposer un témoignage</span>
          </button>
        </div>

        {/* Success alert */}
        {reviewAdded && (
          <div className="mx-6 mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Merci ! Votre avis a été publié avec succès.</span>
          </div>
        )}

        {/* Add review form */}
        {showAddForm && (
          <form onSubmit={handleAddReview} className="m-6 p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 shrink-0">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Votre avis sur ADP Toiture SA
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Votre nom (ex: M. Favre)"
                required
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                className="px-3 py-2 text-xs border border-slate-300 rounded bg-white"
              />
              <input
                type="text"
                placeholder="Votre statut (ex: Particulier, Genève)"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="px-3 py-2 text-xs border border-slate-300 rounded bg-white"
              />
            </div>
            <textarea
              rows={2}
              placeholder="Votre appréciation des travaux réalisés..."
              required
              value={newQuote}
              onChange={(e) => setNewQuote(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded bg-white resize-none"
            />
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1">
                <span className="text-xs text-slate-500 mr-2">Note :</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    className="p-0.5 text-[#E32636]"
                  >
                    <Star
                      className={`w-4 h-4 ${
                        star <= newRating ? 'fill-[#E32636]' : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#E32636] text-white text-xs font-semibold rounded hover:bg-[#c91e2d]"
                >
                  Publier
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Scrollable list */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="p-5 rounded-xl border border-slate-100 bg-white shadow-xs hover:border-slate-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1 text-[#E32636]">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E32636] stroke-none" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400">Genève</span>
              </div>
              <p className="text-sm text-slate-700 italic mb-3">« {r.quote} »</p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-50">
                <span className="font-bold text-slate-900">{r.author}</span>
                <span className="text-slate-500">{r.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
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
}
