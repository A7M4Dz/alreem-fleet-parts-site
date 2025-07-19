import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "+966504106845";
  const message = encodeURIComponent("Hello, I'm interested in your truck parts services.");

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-whatsapp hover:bg-whatsapp/90 text-white p-4 rounded-full floating-shadow transition-bounce hover:scale-110 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-smooth">
        <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm whitespace-nowrap">
          WhatsApp
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;