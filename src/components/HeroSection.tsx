import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ivecoTruck from '@/assets/iveco-truck.jpg';
import manTruck from '@/assets/man-truck.jpg';
import zfComponents from '@/assets/zf-components.jpg';

interface HeroSectionProps {
  language: 'en' | 'ar';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [ivecoTruck, manTruck, zfComponents];

  const content = {
    en: {
      title: "Premium Truck Parts for IVECO, MAN & ZF",
      subtitle: "Your trusted partner for quality commercial vehicle components",
      cta: "Get Quote"
    },
    ar: {
      title: "قطع غيار الشاحنات المتميزة لإيفيكو ومان وZF",
      subtitle: "شريكك الموثوق لمكونات المركبات التجارية عالية الجودة",
      cta: "احصل على عرض سعر"
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToQuote = () => {
    document.getElementById('quotation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center gradient-hero pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              {content[language].title}
            </h1>
            <p className="text-xl text-secondary max-w-2xl">
              {content[language].subtitle}
            </p>
            <Button 
              onClick={scrollToQuote}
              size="lg"
              className="text-lg px-8 py-6 transition-bounce hover:scale-105"
            >
              {content[language].cta}
            </Button>
          </div>

          {/* Slideshow */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-shadow">
              <img
                src={slides[currentSlide]}
                alt="Truck parts slideshow"
                className="w-full h-full object-cover transition-smooth"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-smooth"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-smooth"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    currentSlide === index 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;