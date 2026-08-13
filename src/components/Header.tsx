import React from 'react';
import { Heart, ShieldCheck, Phone, Mail, Award } from 'lucide-react';
import { triggerFedaPayPayment } from '../utils/fedapay';

interface HeaderProps {
  onOpenDonationModal?: () => void;
  currentAmount: number;
  targetAmount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDonationModal, currentAmount, targetAmount }) => {
  const percentage = Math.round((currentAmount / targetAmount) * 100);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Top Banner - Tax & Emergency Info */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-2 px-4 sm:px-8 flex flex-wrap justify-between items-center gap-2 font-medium">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-800/80 text-emerald-200 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-300" /> Numéro d'enregistrement 1888/MISP/DC/SGM/DAIC/SACC/SA
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-emerald-200/90">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Transparence & Paiement 100% Sécurisé
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <a href="tel:+2290152658798" className="hidden sm:inline-flex items-center gap-1 hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-emerald-400" /> 00229 0152658798
          </a>
          <a href="mailto:ongahb2@gmail.com" className="hidden sm:inline-flex items-center gap-1 hover:text-white transition-colors">
            <Mail className="w-3 h-3 text-emerald-400" /> ongahb2@gmail.com
          </a>

        </div>
      </div>

      {/* Main Header Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Logo & ONG Title */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <img
            src="https://lh3.googleusercontent.com/d/1MAJKbMo4zUx6zBHIPWgwyR2uSD4dzuni"
            alt="ONG AHB Logo"
            className="w-11 h-11 rounded-2xl object-cover shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform bg-white"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl text-slate-900 tracking-tight">ONG AHB</span>
              <span className="text-[10px] uppercase tracking-wider font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                Humanitaire
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Aide Humanitaire et de Bienfaisance</p>
          </div>
        </a>



        {/* Action Button & Quick Mini Meter */}
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex flex-col text-right">
            <span className="text-xs text-slate-500 font-medium">Objectif Collecte</span>
            <span className="text-xs font-bold text-emerald-700">
              {currentAmount.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} € / {targetAmount.toLocaleString('fr-FR')} € ({percentage}%)
            </span>
          </div>

          <button
            onClick={() => onOpenDonationModal ? onOpenDonationModal() : triggerFedaPayPayment(50)}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-2.5 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            id="header-btn-faire-don"
          >
            <Heart className="w-4 h-4 fill-white animate-pulse" />
            <span>Faire un don</span>
          </button>
        </div>
      </div>
    </header>
  );
};
