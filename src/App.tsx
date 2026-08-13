import React, { useState } from 'react';
import { MAIN_CAMPAIGN } from './data/mockData';
import { Campaign } from './types';
import { Header } from './components/Header';
import { HeroCampaign } from './components/HeroCampaign';
import { Footer } from './components/Footer';
import { QuickDonationModal } from './components/QuickDonationModal';

export default function App() {
  const [campaign] = useState<Campaign>(MAIN_CAMPAIGN);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col selection:bg-emerald-500 selection:text-white">
      
      {/* Sticky Header */}
      <Header
        onOpenDonationModal={handleOpenModal}
        currentAmount={campaign.currentAmount}
        targetAmount={campaign.targetAmount}
      />

      {/* Main Container */}
      <main className="flex-1">
        <HeroCampaign campaign={campaign} />
      </main>

      {/* Footer */}
      <Footer onOpenDonationModal={handleOpenModal} />

      {/* Quick Donation Modal for Header & Footer clicks */}
      <QuickDonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialAmount={50}
      />

    </div>
  );
}
