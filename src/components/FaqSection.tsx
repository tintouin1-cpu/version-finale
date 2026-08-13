import React, { useState } from 'react';
import { FAQItem } from '../types';
import { HelpCircle, ChevronDown, ShieldCheck, Heart } from 'lucide-react';

interface FaqSectionProps {
  faqs?: FAQItem[];
  onOpenDonationModal?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs = [], onOpenDonationModal }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Tout ce que vous devez savoir avant de donner
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Informations pratiques sur la sécurité de vos paiements, l'utilisation de vos dons et le suivi des projets à l’ONG AHB.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout Box */}
        <div className="mt-12 bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-extrabold">Une question spécifique ou besoin d'assistance ?</h3>
          <p className="text-emerald-200 text-xs sm:text-sm max-w-lg mx-auto">
            Notre équipe dédiée aux donateurs de l’ONG AHB est à votre entière disposition pour répondre à toutes vos interrogations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <a
              href="mailto:ongahb2@gmail.com"
              className="px-5 py-2.5 bg-white text-emerald-900 font-bold text-xs rounded-xl hover:bg-emerald-50 transition-colors"
            >
              Contactez-nous par Email
            </a>
            <button
              onClick={onOpenDonationModal}
              className="px-5 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl hover:bg-emerald-500 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Faire un don maintenant</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
