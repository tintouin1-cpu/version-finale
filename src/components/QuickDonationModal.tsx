import React, { useState, useEffect } from 'react';
import { Heart, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { triggerFedaPayPayment } from '../utils/fedapay';

interface QuickDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
}

export const QuickDonationModal: React.FC<QuickDonationModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 50,
}) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(initialAmount);
  const [customAmountInput, setCustomAmountInput] = useState<string>(initialAmount.toString());

  useEffect(() => {
    if (isOpen) {
      setSelectedAmount(initialAmount);
      setCustomAmountInput(initialAmount.toString());
    }
  }, [isOpen, initialAmount]);

  if (!isOpen) return null;

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
    } else {
      setSelectedAmount(0);
    }
  };

  const handlePay = () => {
    const finalAmt = selectedAmount > 0 ? selectedAmount : 50;
    triggerFedaPayPayment(finalAmt);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 mb-1">
            <Heart className="w-6 h-6 fill-emerald-600" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Faire un don à l'ONG AHB
          </h3>
          <p className="text-xs text-slate-500 font-medium max-w-xs mx-auto">
            Sélectionnez un montant ou saisissez la somme de votre choix.
          </p>
        </div>

        {/* Quick Amount Buttons */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Montant du don
          </label>
          <div className="grid grid-cols-4 gap-2">
            {quickAmounts.map((amt) => {
              const isSelected = selectedAmount === amt && customAmountInput === amt.toString();
              return (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handleQuickAmountClick(amt)}
                  className={`py-3 px-2 rounded-xl text-sm font-extrabold transition-all border cursor-pointer text-center ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20 scale-[1.02]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {amt} €
                </button>
              );
            })}
          </div>

          {/* Custom Input */}
          <div className="relative pt-1">
            <label htmlFor="modal-custom-amount" className="sr-only">
              Saisir un autre montant libre
            </label>
            <div className="relative">
              <input
                id="modal-custom-amount"
                type="number"
                min="1"
                step="any"
                placeholder="Saisir un autre montant libre"
                value={customAmountInput}
                onChange={handleCustomInputChange}
                className="w-full py-3.5 pl-4 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 font-extrabold text-sm pointer-events-none">
                €
              </span>
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <div className="space-y-3 pt-2">
          <button
            type="button"
            onClick={handlePay}
            className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-3 cursor-pointer group transform hover:-translate-y-0.5"
          >
            <span>
              FAIRE UN DON DE {selectedAmount > 0 ? selectedAmount : 0} €
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-2 text-slate-400 text-[11px] font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Paiement 100% sécurisé (Mobile Money & Carte)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
