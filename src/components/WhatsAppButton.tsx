import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919000406007?text=Hi%2C%20I%20am%20interested%20in%20your%20crop%20protection%20products.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-[#fff] rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse-soft"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
      <span className="hidden sm:inline font-semibold text-sm">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
