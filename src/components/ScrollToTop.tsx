import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface Props {
  isDark: boolean;
}

export default function ScrollToTop({ isDark }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className={`fixed right-6 bottom-24 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in ${isDark ? 'bg-slate-800/80 text-cyan-400 hover:bg-slate-700' : 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg'}`} style={{background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(14,165,233,0.2))', backdropFilter: 'blur(10px)', border: '1px solid rgba(34,211,238,0.3)', boxShadow: '0 4px 16px rgba(34,211,238,0.2)'}} aria-label="Scroll to top">
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
