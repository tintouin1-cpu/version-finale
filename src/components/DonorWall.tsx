import React, { useState } from 'react';
import { DonorMessage } from '../types';
import { MessageSquare, Heart, Sparkles, User, Filter, Search } from 'lucide-react';

interface DonorWallProps {
  donors: DonorMessage[];
  onOpenDonationModal: () => void;
}

export const DonorWall: React.FC<DonorWallProps> = ({ donors, onOpenDonationModal }) => {
  const [search, setSearch] = useState('');

  const filteredDonors = donors.filter(
    (d) =>
      d.donorName.toLowerCase().includes(search.toLowerCase()) ||
      (d.message && d.message.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section id="temoignages" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Mur des Donateurs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Leur Solidarité en Action
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Retrouvez les messages d'encouragement et les témoignages de ceux qui soutiennent la cause de l'ONG AHB.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Rechercher un donateur..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            <button
              onClick={onOpenDonationModal}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Laisser un mot</span>
            </button>
          </div>
        </div>

        {/* Donors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.map((donor) => (
            <div
              key={donor.id}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {donor.avatarUrl && !donor.isAnonymous ? (
                      <img
                        src={donor.avatarUrl}
                        alt={donor.donorName}
                        className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/20"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                        <User className="w-5 h-5 text-emerald-700" />
                      </div>
                    )}

                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        {donor.isAnonymous ? 'Donateur Anonyme' : donor.donorName}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-medium">{donor.date}</span>
                    </div>
                  </div>

                  <span className="bg-emerald-100 text-emerald-800 font-black text-xs px-2.5 py-1 rounded-full border border-emerald-200/60 shrink-0">
                    +{donor.amount} {donor.currency}
                  </span>
                </div>

                {donor.message && (
                  <p className="text-xs text-slate-600 leading-relaxed italic bg-white p-3 rounded-xl border border-slate-100">
                    « {donor.message} »
                  </p>
                )}
              </div>

              <div className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold pt-1 border-t border-slate-200/60">
                <Sparkles className="w-3 h-3 text-emerald-500" />
                <span>Don validé pour l'ONG AHB</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
