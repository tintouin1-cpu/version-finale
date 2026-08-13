import React from 'react';
import { Project } from '../types';
import { Droplets, HeartPulse, GraduationCap, MapPin, Users, Heart, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenDonationModal: (amount?: number, projectId?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onOpenDonationModal }) => {
  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Eau & Assainissement':
        return <Droplets className="w-5 h-5 text-sky-500" />;
      case 'Santé & Nutrition':
        return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'Éducation':
        return <GraduationCap className="w-5 h-5 text-amber-500" />;
      default:
        return <Heart className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="nos-projets" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full">
            <Heart className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>Actions Ciblées sur le Terrain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Les Projets Financés par vos Dons
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Vous pouvez choisir d'affecter directement votre don à un projet prioritaire de l'ONG AHB ou de soutenir notre fonds d'urgence général.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => {
            const percentage = Math.min(100, Math.round((proj.currentAmount / proj.targetAmount) * 100));

            return (
              <div
                key={proj.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image & Category Tag */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 text-xs font-bold text-slate-800 shadow-sm">
                    {getCategoryIcon(proj.category)}
                    <span>{proj.category}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center text-xs font-medium text-white/90 gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{proj.location}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                  </div>

                  {/* Impact Metric Callout */}
                  <div className="bg-emerald-50 border border-emerald-200/60 rounded-xl p-3 text-xs text-emerald-950 font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{proj.impactMetric}</span>
                  </div>

                  {/* Progress Bar & Amount */}
                  <div className="space-y-2 pt-1 border-t border-slate-100">
                    <div className="flex justify-between items-baseline text-xs">
                      <span className="font-extrabold text-slate-900 text-sm">
                        {proj.currentAmount.toLocaleString('fr-FR')} € <span className="text-slate-400 font-normal text-xs">sur {proj.targetAmount.toLocaleString('fr-FR')} €</span>
                      </span>
                      <span className="font-extrabold text-emerald-700">{percentage}%</span>
                    </div>

                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200/50">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-slate-400" /> {proj.donorCount} donateurs
                      </span>
                      <span>Action directe ONG AHB</span>
                    </div>
                  </div>

                  {/* Donate Button for this project */}
                  <button
                    type="button"
                    onClick={() => onOpenDonationModal(50, proj.id)}
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:translate-y-0"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Soutenir ce Projet</span>
                    <ArrowRight className="w-4 h-4 text-white/80" />
                  </button>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
