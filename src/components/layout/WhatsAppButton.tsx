import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number
const WHATSAPP_MESSAGE = "Hello! I'm interested in your travel services.";

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-elevated hover:scale-110 hover:shadow-xl transition-all duration-300 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};
