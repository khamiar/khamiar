import { MessageCircle } from 'lucide-react';

interface Props {
  isDark: boolean;
}

export default function WhatsAppButton({ isDark }: Props) {
  return (
    <a href="https://wa.me/255652105404" target="_blank" rel="noopener noreferrer" className={`fixed right-6 bottom-6 z-40 w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg animate-wiggle group`} style={{background: 'linear-gradient(135deg, #25d366, #128c7e)', boxShadow: '0 8px 24px rgba(37,211,102,0.4)'}} aria-label="Chat on WhatsApp">
      <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
    </a>
  );
}
