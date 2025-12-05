import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="tel:+919010221616"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#FFB61E] hover:bg-[#ff9d00] text-[#2B6430] font-bold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
      aria-label="Book on call"
    >
      <Phone className="w-6 h-6" />
      <span>Book Now</span>
    </a>
  );
}
