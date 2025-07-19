import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BrandsSectionProps {
  language: 'en' | 'ar';
}

const BrandsSection = ({ language }: BrandsSectionProps) => {
  const content = {
    en: {
      title: "Our Brands",
      subtitle: "Premium parts for leading commercial vehicle manufacturers",
      brands: [
        {
          name: "IVECO Parts",
          description: "Genuine and aftermarket parts for IVECO trucks",
          icon: "🚛"
        },
        {
          name: "MAN Components", 
          description: "Quality MAN truck parts and accessories",
          icon: "🚚"
        },
        {
          name: "ZF Systems",
          description: "ZF transmission and driveline components", 
          icon: "⚙️"
        }
      ]
    },
    ar: {
      title: "علاماتنا التجارية",
      subtitle: "قطع متميزة لكبرى الشركات المصنعة للمركبات التجارية",
      brands: [
        {
          name: "قطع إيفيكو",
          description: "قطع أصلية وبديلة لشاحنات إيفيكو",
          icon: "🚛"
        },
        {
          name: "مكونات MAN",
          description: "قطع وإكسسوارات شاحنات MAN عالية الجودة", 
          icon: "🚚"
        },
        {
          name: "أنظمة ZF",
          description: "مكونات ناقل الحركة ونظام القيادة ZF",
          icon: "⚙️"
        }
      ]
    }
  };

  return (
    <section id="brands" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].brands.map((brand, index) => (
            <Card 
              key={index} 
              className="gradient-card card-shadow hover:card-hover transition-smooth group cursor-pointer"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-bounce">
                  {brand.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  {brand.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-secondary">
                  {brand.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;