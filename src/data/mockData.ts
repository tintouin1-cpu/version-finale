import { Campaign, Project, DonorMessage, FAQItem } from '../types';

export const MAIN_CAMPAIGN: Campaign = {
  id: 'campagne-principale-2026',
  title: 'Programme d’Actions Humanitaires - ONG AHB',
  subtitle: '5 Forages & 15 Puits Collectifs • Distributions de Vêtements',
  description: 'L’ONG Aide Humanitaire et de Bienfaisance (AHB) met en œuvre un programme humanitaire destiné à soutenir les communautés les plus vulnérables. Ce programme prévoit la réalisation de 5 forages collectifs et de 15 puits collectifs, en fonction des besoins des villages touchés par la pénurie d’eau. Ces infrastructures contribueront à améliorer durablement l’accès à l’eau potable et les conditions de vie des populations bénéficiaires. L\'ONG organise également des distributions de vêtements au profit des enfants, des familles démunies et des personnes en situation de vulnérabilité.',
  targetAmount: 48800,
  currentAmount: 25474.13,
  donorCount: 493,
  daysRemaining: 18,
  category: 'Urgences & Développement',
  imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1600'
};

export const PROJECTS_LIST: Project[] = [
  {
    id: 'proj-eau-forages',
    title: 'Construction de 5 Forages d’Eau Potable',
    shortDescription: 'Apporter de l’eau saine et potable à plus de 3 000 habitants des villages ruraux sans accès au réseau.',
    category: 'Eau & Assainissement',
    targetAmount: 20000,
    currentAmount: 16800,
    donorCount: 215,
    location: 'Région du Nord-Ouest',
    impactMetric: '1 don de 25€ = 1 filtre durable pour une famille de 6 personnes',
    imageUrl: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'proj-sante-maternelle',
    title: 'Clinique Mobile & Santé Maternelle',
    shortDescription: 'Fournir des consultations médicales gratuites, vaccins et soins prénataux aux femmes et enfants isolés.',
    category: 'Santé & Nutrition',
    targetAmount: 15000,
    currentAmount: 11400,
    donorCount: 148,
    location: 'District Sanitaire Régal',
    impactMetric: '1 don de 50€ = Consultation & kits de naissance pour 2 mères',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'proj-cantine-ecoles',
    title: 'Kits Scolaires & Repas pour 500 Écoliers',
    shortDescription: 'Offrir un repas chaud quotidien et fournitures complètes pour éviter le décrochage scolaire des plus démunis.',
    category: 'Éducation',
    targetAmount: 15000,
    currentAmount: 10250,
    donorCount: 129,
    location: 'Écoles Partenaires AHB',
    impactMetric: '1 don de 30€ = 1 mois complet de repas chauds pour un écolier',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_DONORS: DonorMessage[] = [
  {
    id: 'don-1',
    donorName: 'Aminata KONE',
    amount: 100,
    currency: '€',
    date: 'Il y a 10 minutes',
    message: 'Bravo à toute l’équipe de l’ONG AHB pour ce magnifique travail sur le terrain ! De tout cœur avec vous.',
    isAnonymous: false,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'don-2',
    donorName: 'Jean-Pierre DUPONT',
    amount: 50,
    currency: '€',
    date: 'Il y a 35 minutes',
    message: 'Un petit geste pour que les enfants aient accès à de l’eau propre. Merci ONG AHB.',
    isAnonymous: false,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'don-3',
    donorName: 'Donateur Anonyme',
    amount: 250,
    currency: '€',
    date: 'Il y a 2 heures',
    message: 'Pour le projet de santé maternelle. Que Dieu bénisse vos actions.',
    isAnonymous: true,
  },
  {
    id: 'don-4',
    donorName: 'Fatou Bamba',
    amount: 30,
    currency: '€',
    date: 'Il y a 4 heures',
    message: 'Chaque goutte compte. Merci à l’ONG AHB pour leur transparence.',
    isAnonymous: false,
    avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'don-5',
    donorName: 'Marc-Olivier L.',
    amount: 150,
    currency: '€',
    date: 'Hier',
    message: 'Impressionné par l’impact concret de vos forages. Continuez ainsi !',
    isAnonymous: false,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'don',
    question: 'Comment mon don est-il utilisé sur le terrain ?',
    answer: '85% de votre don va directement à la réalisation des projets sur le terrain (achat de matériel de forage, médicaments, denrées scolaires). 10% est alloué au suivi-évaluation et à la gestion, et 5% est réinvesti pour sensibiliser et trouver de nouveaux donateurs.'
  },
  {
    id: 'faq-2',
    category: 'fiscalite',
    question: 'Comment obtenir mon reçu de don ?',
    answer: 'L’ONG AHB émet automatiquement une attestation et reçu de don téléchargeable immédiatement après votre confirmation et envoyé par email. Ce document atteste officiellement de votre soutien aux actions humanitaires.'
  },
  {
    id: 'faq-3',
    category: 'securite',
    question: 'Les paiements sont-ils sécurisés ?',
    answer: 'Absolument. Nos transactions sont chiffrées SSL 256 bits via Stripe, PayPal et nos partenaires Mobile Money agréés (Orange Money, Wave, MTN MoMo). Aucune donnée bancaire n’est conservée sur nos serveurs.'
  },
  {
    id: 'faq-4',
    category: 'don',
    question: 'Puis-je effectuer un don mensuel ou par Mobile Money ?',
    answer: 'Oui ! Vous pouvez choisir le don ponctuel ou le don mensuel sans engagement par carte bancaire. Si vous êtes en Afrique de l’Ouest/Centrale, nous acceptons également les règlements sécurisés par Orange Money, Wave et MoMo.'
  },
  {
    id: 'faq-5',
    category: 'ong',
    question: 'Qui est ONG AHB ?',
    answer: 'L’ONG AHB (Aide Humanitaire et de Bienfaisance) est une organisation non gouvernementale reconnue sous l’Agrément N° 1888/MISP/DC/SGM/DAIC/SACC/SA. Elle est dédiée au développement communautaire, à l’assainissement de l’eau, à la santé globale et à l’éducation inclusive.'
  }
];

export const IMPACT_STEPS = [
  { amount: 15, label: '1 Kit Hygiène & Prévention', desc: 'Offre du savon, du gel hydroalcoolique et un kit d’hygiène à 1 famille.' },
  { amount: 30, label: 'Repas pour 1 écolier / mois', desc: 'Garantit une alimentation équilibrée quotidienne dans nos cantines partenaires.' },
  { amount: 50, label: 'Filtre à Eau Familial Durable', desc: 'Fournit de l’eau potable purifiée à une famille vulnérable pendant des années.' },
  { amount: 100, label: 'Soin Médical Prénatal & Naissance', desc: 'Prend en charge la consultation, le suivi et le kit médical complet pour une maman.' },
  { amount: 250, label: 'Part du forage d’un puits', desc: 'Finance directement la tuyauterie et les pompes solaires pour un puits de village.' }
];
