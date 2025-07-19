import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface QuotationSectionProps {
  language: 'en' | 'ar';
}

const QuotationSection = ({ language }: QuotationSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    truckBrand: '',
    partDescription: '',
    quantity: ''
  });

  const content = {
    en: {
      title: "Request a Quote",
      subtitle: "Get competitive pricing for your truck parts needs",
      form: {
        companyName: "Company Name",
        contactPerson: "Contact Person",
        phone: "Phone Number",
        email: "Email Address",
        truckBrand: "Truck Brand",
        partDescription: "Part Description",
        quantity: "Quantity (Optional)",
        submit: "Submit Quote Request",
        placeholder: {
          companyName: "Enter your company name",
          contactPerson: "Enter contact person name",
          phone: "+966 XXX XXX XXX",
          email: "your.email@company.com",
          partDescription: "Describe the parts you need...",
          quantity: "Enter quantity"
        }
      },
      brands: ["Select Brand", "IVECO", "MAN", "ZF"],
      success: "Quote request submitted successfully!",
      error: "Please fill in all required fields."
    },
    ar: {
      title: "طلب عرض سعر",
      subtitle: "احصل على أسعار تنافسية لاحتياجاتك من قطع الشاحنات",
      form: {
        companyName: "اسم الشركة",
        contactPerson: "الشخص المسؤول",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        truckBrand: "ماركة الشاحنة",
        partDescription: "وصف القطعة",
        quantity: "الكمية (اختياري)",
        submit: "إرسال طلب عرض السعر",
        placeholder: {
          companyName: "أدخل اسم شركتك",
          contactPerson: "أدخل اسم الشخص المسؤول",
          phone: "+966 XXX XXX XXX",
          email: "your.email@company.com",
          partDescription: "صف القطع التي تحتاجها...",
          quantity: "أدخل الكمية"
        }
      },
      brands: ["اختر الماركة", "إيفيكو", "MAN", "ZF"],
      success: "تم إرسال طلب عرض السعر بنجاح!",
      error: "يرجى ملء جميع الحقول المطلوبة."
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.companyName || !formData.contactPerson || !formData.phone || 
        !formData.email || !formData.truckBrand || !formData.partDescription) {
      toast({
        title: content[language].error,
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    console.log('Quote request submitted:', formData);
    
    toast({
      title: content[language].success,
    });

    // Reset form
    setFormData({
      companyName: '',
      contactPerson: '',
      phone: '',
      email: '',
      truckBrand: '',
      partDescription: '',
      quantity: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="quotation" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-secondary">
            {content[language].subtitle}
          </p>
        </div>

        <Card className="gradient-card card-shadow">
          <CardHeader>
            <CardTitle className={`text-center ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {content[language].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    {content[language].form.companyName} *
                  </label>
                  <Input
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder={content[language].form.placeholder.companyName}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    {content[language].form.contactPerson} *
                  </label>
                  <Input
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    placeholder={content[language].form.placeholder.contactPerson}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    {content[language].form.phone} *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder={content[language].form.placeholder.phone}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    {content[language].form.email} *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={content[language].form.placeholder.email}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    {content[language].form.truckBrand} *
                  </label>
                  <Select value={formData.truckBrand} onValueChange={(value) => handleInputChange('truckBrand', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={content[language].brands[0]} />
                    </SelectTrigger>
                    <SelectContent>
                      {content[language].brands.slice(1).map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    {content[language].form.quantity}
                  </label>
                  <Input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    placeholder={content[language].form.placeholder.quantity}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  {content[language].form.partDescription} *
                </label>
                <Textarea
                  value={formData.partDescription}
                  onChange={(e) => handleInputChange('partDescription', e.target.value)}
                  placeholder={content[language].form.placeholder.partDescription}
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full transition-bounce hover:scale-105">
                {content[language].form.submit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuotationSection;