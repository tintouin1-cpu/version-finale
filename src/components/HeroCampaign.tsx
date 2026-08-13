import React, { useState } from 'react';
import { Campaign } from '../types';
import { Heart, Target, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { triggerFedaPayPayment } from '../utils/fedapay';

interface HeroCampaignProps {
  campaign: Campaign;
  onOpenDonationModal?: (amount?: number) => void;
}

export const HeroCampaign: React.FC<HeroCampaignProps> = ({ campaign }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmountInput, setCustomAmountInput] = useState<string>('50');

  const percentage = Math.min(100, Math.round((campaign.currentAmount / campaign.targetAmount) * 100));
  const quickAmounts = [15, 30, 50, 100];

  const handleQuickAmountClick = (amt: number) => {
    setSelectedAmount(amt);
    setCustomAmountInput(amt.toString());
  };

  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmountInput(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && parsed > 0) {
      setSelectedAmount(parsed);
    }
  };

  return (
    <section id="la-collecte" className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={campaign.imageUrl}
          alt={campaign.title}
          className="w-full h-full object-cover opacity-25 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: NGO Presentation & Mission */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Campagne Humanitaire 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {campaign.title}
            </h1>

            <p className="text-lg sm:text-xl text-emerald-200/90 font-medium">
              {campaign.subtitle}
            </p>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-emerald-500/30 backdrop-blur-md space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Programme d’Actions Humanitaires</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {campaign.description}
              </p>
            </div>
          </div>

          {/* Right Column: Donation Card & Progress Meter */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden">
              
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                  Collecte Officielle ONG AHB
                </span>
              </div>

              {/* Amount Raised & Target */}
              <div className="space-y-2 mb-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {campaign.currentAmount.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} €
                    </span>
                    <span className="text-xs font-semibold text-slate-500 ml-2">récoltés</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">Objectif</span>
                    <span className="text-sm font-bold text-slate-700">
                      {campaign.targetAmount.toLocaleString('fr-FR')} €
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-4 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000 ease-out shadow-sm"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="flex justify-between items-center text-xs font-semibold text-slate-600 pt-1">
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <Target className="w-3.5 h-3.5" /> {percentage}% atteint
                  </span>
                </div>
              </div>

              {/* Quick Amount Choice */}
              <div className="space-y-3 pt-2 pb-4 border-t border-slate-100">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Choisissez votre montant de don :
                </label>

                <div className="grid grid-cols-4 gap-2">
                  {quickAmounts.map((amt) => {
                    const isSelected = selectedAmount === amt && customAmountInput === amt.toString();
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => handleQuickAmountClick(amt)}
                        className={`py-2.5 px-2 rounded-xl text-sm font-extrabold transition-all border cursor-pointer text-center ${
                          isSelected
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20 scale-[1.02]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                        }`}
                      >
                        {amt} €
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Input Field */}
                <div className="relative pt-1">
                  <label htmlFor="custom-amount-input" className="sr-only">
                    Autre montant
                  </label>
                  <div className="relative">
                    <input
                      id="custom-amount-input"
                      type="number"
                      min="1"
                      step="any"
                      placeholder="Saisir un autre montant libre"
                      value={customAmountInput}
                      onChange={handleCustomInputChange}
                      className="w-full py-3 pl-4 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 font-extrabold text-sm pointer-events-none">
                      €
                    </span>
                  </div>
                </div>
              </div>

              {/* PROMINENT FAIS UN DON BUTTON */}
              <div className="space-y-3 pt-1">
                <button
                  type="button"
                  onClick={() => triggerFedaPayPayment(selectedAmount > 0 ? selectedAmount : 50)}
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-lg rounded-2xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-3 cursor-pointer group transform hover:-translate-y-0.5"
                  id="hero-btn-fait-don"
                >
                  <Heart className="w-6 h-6 fill-white group-hover:scale-110 transition-transform animate-pulse" />
                  <span>
                    FAIRE UN DON DE {selectedAmount > 0 ? selectedAmount : 0} €
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
