import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import MyWorkSection from '@/components/MyWorkSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';

type Section = 'home' | 'work' | 'pricing' | 'contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'work':
        return <MyWorkSection />;
      case 'pricing':
        return <PricingSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      {/* Add padding-top to compensate for fixed navbar */}
      <main className="pt-24 transition-all duration-500 ease-in-out">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;
