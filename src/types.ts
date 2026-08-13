export interface Campaign {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  donorCount: number;
  daysRemaining: number;
  category: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: 'Eau & Assainissement' | 'Santé & Nutrition' | 'Éducation' | 'Urgences';
  targetAmount: number;
  currentAmount: number;
  donorCount: number;
  location: string;
  impactMetric: string;
  imageUrl: string;
}

export interface DonorMessage {
  id: string;
  donorName: string;
  amount: number;
  currency: string;
  date: string;
  message?: string;
  isAnonymous?: boolean;
  projectId?: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'don' | 'fiscalite' | 'securite' | 'ong';
}

export type PaymentMethod = 'card' | 'orange_money' | 'wave' | 'momo' | 'paypal';

export interface DonationFormData {
  amount: number;
  frequency: 'once' | 'monthly';
  projectId: string; // 'general' or specific project ID
  donorType: 'particulier' | 'entreprise';
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country: string;
  isAnonymous: boolean;
  message?: string;
  taxReceipt: boolean;
  paymentMethod: PaymentMethod;
}
