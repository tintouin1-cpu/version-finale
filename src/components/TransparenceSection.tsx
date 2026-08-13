import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Award, PieChart, Lock } from 'lucide-react';

export const TransparenceSection: React.FC = () => {
  return (
    <section id="transparence" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Confiance & Transparence Financiére</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Où va chaque Euro donné à l'ONG AHB ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Parce que votre confiance est fondamentale, l'ONG AHB garantit un contrôle rigoureux et indépendant de l'utilisation de vos dons.
          </p>
        </div>

        {/* 3 Columns Allocation breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Allocation Bar & Stats */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-emerald-600" />
              <span>Répartition des ressources de la collecte</span>
            </h3>

            {/* Stacked Percentage Bar */}
            <div className="space-y-2">
              <div className="h-6 w-full rounded-full overflow-hidden flex shadow-inner border border-slate-200">
                <div className="bg-emerald-600 h-full w-[85%] flex items-center justify-center text-[11px] font-black text-white" title="85% Missions sur le terrain">
                  85% Terrain
                </div>
                <div className="bg-amber-500 h-full w-[10%] flex items-center justify-center text-[10px] font-black text-white" title="10% Frais de gestion">
                  10%
                </div>
                <div className="bg-sky-500 h-full w-[5%] flex items-center justify-center text-[9px] font-black text-white" title="5% Recherche de fonds">
                  5%
                </div>
              </div>
            </div>

            {/* Detailed Legend */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-1">
                <span className="text-2xl font-black text-emerald-700 block">85%</span>
                <span className="text-xs font-bold text-slate-900 block">Missions Terrain</span>
                <p className="text-[11px] text-slate-500">Achats de matériel de forage, soins médicaux, fournitures scolaires.</p>
              </div>

              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100 space-y-1">
                <span className="text-2xl font-black text-amber-700 block">10%</span>
                <span className="text-xs font-bold text-slate-900 block">Gestion & Suivi</span>
                <p className="text-[11px] text-slate-500">Contrôle qualité, équipes administratives et audits réguliers sur place.</p>
              </div>

              <div className="p-3 bg-sky-50 rounded-2xl border border-sky-100 space-y-1">
                <span className="text-2xl font-black text-sky-700 block">5%</span>
                <span className="text-xs font-bold text-slate-900 block">Recherche de Fonds</span>
                <p className="text-[11px] text-slate-500">Sensibilisation et campagnes de collecte d'urgence.</p>
              </div>
            </div>
          </div>

          {/* Certifications & Commitments Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Comptes Certifiés & Audités</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Les comptes annuels de l'ONG AHB sont contrôlés par un Commissaire aux Comptes indépendant.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Agrément Officiel & Transparence</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Agrément N° 1888/MISP/DC/SGM/DAIC/SACC/SA. Conformité stricte aux exigences de gouvernance et de rigueur déontologique des dons.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Paiements 100% Sécurisés</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Infrastructures bancaires et Mobile Money hautement sécurisées pour protéger vos coordonnées.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
