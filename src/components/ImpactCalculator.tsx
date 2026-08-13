import React, { useState } from 'react';
import { IMPACT_STEPS } from '../data/mockData';
import { Calculator, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface ImpactCalculatorProps {
  onOpenDonationModal: (amount?: number) => void;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({ onOpenDonationModal }) => {
  const [amount, setAmount] = useState<number>(60);

  // Determine closest impact milestone
  const matchingImpact = IMPACT_STEPS.slice().reverse().find((step) => amount >= step.amount) || IMPACT_STEPS[0];

  return (
    <section id="impact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-emerald-800/40">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold px-3 py-1 rounded-full">
                <Calculator className="w-3.5 h-3.5 text-amber-300" />
                <span>Impact de votre Don - ONG AHB</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Quel est l'impact concret de votre don ?
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                En donnant à l’<strong>ONG AHB</strong>, vous agissez directement pour l'accès universel à l'eau potable, les soins médicaux et l'éducation des enfants vulnérables.
              </p>

              <div className="pt-2 space-y-2 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Attestation de don délivrée automatiquement par l’ONG AHB.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>100% de transparence sur la réalisation des projets.</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              
              {/* Slider for donation amount */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Montant de votre don :
                  </label>
                  <span className="text-2xl font-black text-emerald-700">{amount} €</span>
                </div>

                <input
                  type="range"
                  min="15"
                  max="500"
                  step="5"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />

                <div className="flex justify-between text-[11px] text-slate-400 font-bold">
                  <span>15 €</span>
                  <span>100 €</span>
                  <span>250 €</span>
                  <span>500 €</span>
                </div>
              </div>

              {/* Tangible Impact Box */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-xs text-emerald-950 space-y-2">
                <span className="font-extrabold uppercase text-[10px] tracking-wider text-emerald-800 block">
                  Impact Concret sur le Terrain :
                </span>
                <p className="text-base font-bold text-emerald-900">
                  👉 {matchingImpact.label}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {matchingImpact.desc}
                </p>
              </div>

              {/* Direct Donate Button */}
              <button
                type="button"
                onClick={() => onOpenDonationModal(amount)}
                className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-base rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="calculator-btn-fait-don"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>FAIRE CE DON DE {amount} €</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
