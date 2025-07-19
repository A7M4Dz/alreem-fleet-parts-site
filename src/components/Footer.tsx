import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      company: "ALREEM",
      description: "Your trusted partner for premium truck parts and commercial vehicle components.",
      contact: "Contact Information",
      phone: "+966 50 410 6845",
      email: "info@alreem-parts.com",
      address: "Riyadh, Saudi Arabia",
      brands: "Our Brands",
      brandList: ["IVECO Parts", "MAN Components", "ZF Systems"],
      copyright: "© 2024 ALREEM. All rights reserved."
    },
    ar: {
      company: "الريم",
      description: "شريكك الموثوق لقطع الشاحنات المتميزة ومكونات المركبات التجارية.",
      contact: "معلومات الاتصال",
      phone: "+966 50 410 6845", 
      email: "info@alreem-parts.com",
      address: "الرياض، المملكة العربية السعودية",
      brands: "علاماتنا التجارية",
      brandList: ["قطع إيفيكو", "مكونات MAN", "أنظمة ZF"],
      copyright: "© 2024 الريم. جميع الحقوق محفوظة."
    }
  };

  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{content[language].company}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              {content[language].description}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{content[language].contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a 
                  href={`tel:${content[language].phone}`}
                  className="hover:text-accent transition-smooth"
                >
                  {content[language].phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a 
                  href={`mailto:${content[language].email}`}
                  className="hover:text-accent transition-smooth"
                >
                  {content[language].email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span>{content[language].address}</span>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{content[language].brands}</h4>
            <ul className="space-y-2">
              {content[language].brandList.map((brand, index) => (
                <li key={index} className="text-primary-foreground/80 hover:text-accent transition-smooth cursor-pointer">
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            {content[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;