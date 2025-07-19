import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandsSection from '@/components/BrandsSection';
import QuotationSection from '@/components/QuotationSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <BrandsSection language={language} />
      <QuotationSection language={language} />
      <LocationSection language={language} />
      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
