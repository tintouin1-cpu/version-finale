import React from 'react';
import { Heart, ShieldCheck, Mail, Phone, MapPin, Award, Globe } from 'lucide-react';
import { triggerFedaPayPayment } from '../utils/fedapay';

interface FooterProps {
  onOpenDonationModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonationModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4 lg:col-span-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/d/1MAJKbMo4zUx6zBHIPWgwyR2uSD4dzuni"
                alt="ONG AHB Logo"
                className="w-9 h-9 rounded-xl object-cover bg-white"
                referrerPolicy="no-referrer"
              />
              <span className="font-extrabold text-lg text-white tracking-tight">ONG AHB</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              L’ONG AHB (Aide Humanitaire et de Bienfaisance) est une organisation humanitaire officiellement reconnue, issue de l’initiative OAHB et fondée pour répondre aux besoins essentiels des populations les plus vulnérables. Guidée par les valeurs de solidarité, de compassion, de dignité humaine et de bienfaisance, AHB œuvre principalement au Bénin, notamment dans les communautés rurales et défavorisées, à travers des actions concrètes et durables dans les domaines de l’accès à l’eau potable, de l’aide alimentaire, de l’éducation, du soutien aux orphelins et aux familles démunies, ainsi que du développement communautaire. Notre engagement est d’apporter une assistance humanitaire efficace, transparente et durable, tout en redonnant espoir, autonomie et dignité aux bénéficiaires. À travers chacune de nos actions, nous aspirons à bâtir un avenir meilleur pour les communautés que nous accompagnons, tout en plaçant la foi, la solidarité et la bienfaisance au cœur de notre mission.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Numéro d'enregistrement 1888/MISP/DC/SGM/DAIC/SACC/SA</span>
            </div>
          </div>

          {/* Col 2: Contact Details */}
          <div className="space-y-3 lg:col-span-3 md:col-span-1">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Siège & Contact</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Siège social : Bénin / Parakou Rose-Croix</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>00229 0152658798</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>ongahb2@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>ongahb.org</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Donate Callout */}
          <div className="space-y-3 bg-slate-900 p-5 rounded-2xl border border-slate-800 lg:col-span-3 md:col-span-1 flex flex-col justify-between">
            <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Soutenir l'ONG AHB</span>
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Chaque don soutient directement nos actions humanitaires d'urgence et de développement sur le terrain.
            </p>
            <button
              onClick={() => onOpenDonationModal ? onOpenDonationModal() : triggerFedaPayPayment(50)}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Faire un Don Sécurisé</span>
            </button>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} ONG AHB (Aide Humanitaire et de Bienfaisance). Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Mentions Légales</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Politique de Confidentialité</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
