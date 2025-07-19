import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

interface LocationSectionProps {
  language: 'en' | 'ar';
}

const LocationSection = ({ language }: LocationSectionProps) => {
  const content = {
    en: {
      title: "Our Location",
      subtitle: "Visit us or get in touch for all your truck parts needs",
      address: "Riyadh, Saudi Arabia",
      phone: "+966 50 410 6845",
      email: "info@alreem-parts.com",
      directions: "Get Directions"
    },
    ar: {
      title: "موقعنا",
      subtitle: "قم بزيارتنا أو تواصل معنا لجميع احتياجاتك من قطع الشاحنات",
      address: "الرياض، المملكة العربية السعودية",
      phone: "+966 50 410 6845",
      email: "info@alreem-parts.com",
      directions: "احصل على الاتجاهات"
    }
  };

  return (
    <section id="location" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-secondary">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden card-shadow">
              <div className="aspect-[4/3] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.2074!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="gradient-card card-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      {language === 'en' ? 'Address' : 'العنوان'}
                    </h3>
                    <p className="text-secondary">
                      {content[language].address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card card-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      {language === 'en' ? 'Phone' : 'الهاتف'}
                    </h3>
                    <a 
                      href={`tel:${content[language].phone}`}
                      className="text-secondary hover:text-accent transition-smooth"
                    >
                      {content[language].phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card card-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                    </h3>
                    <a 
                      href={`mailto:${content[language].email}`}
                      className="text-secondary hover:text-accent transition-smooth"
                    >
                      {content[language].email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;