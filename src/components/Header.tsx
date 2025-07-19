import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  language: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    en: ['Home', 'Brands', 'Quote', 'Location', 'Contact'],
    ar: ['الرئيسية', 'العلامات التجارية', 'عرض سعر', 'الموقع', 'اتصل بنا']
  };

  const scrollToSection = (index: number) => {
    const sections = ['hero', 'brands', 'quotation', 'location', 'footer'];
    const element = document.getElementById(sections[index]);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">ALREEM</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onLanguageChange('en')}
                className="h-8 px-3 text-xs"
              >
                EN
              </Button>
              <Button
                variant={language === 'ar' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onLanguageChange('ar')}
                className="h-8 px-3 text-xs"
              >
                عربي
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems[language].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(index)}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;