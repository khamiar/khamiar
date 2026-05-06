import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, } from 'lucide-react';
import whiteLogo from '../assets/logowhite2.png';
import blackLogo from '../assets/logobg.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

interface Props {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const logo = isDark ? whiteLogo : blackLogo;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? isDark ? 'bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-slate-800' : 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => handleNavClick('#home')} className="flex items-center gap-2 group"><img
              src={ logo }
              alt="Khamiar"
              className = "w-20 h-auto object-container transition-all duration-500 ease-in-out"
            />
          </button>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <button key={link.label} onClick={() => handleNavClick(link.href)} className={`nav-link text-sm font-medium transition-colors duration-200 ${activeSection === link.href.replace('#', '') ? 'text-cyan-400 active' : isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-500'}`}>
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onToggleTheme} className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${isDark ? 'bg-slate-800 text-cyan-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`} aria-label="Toggle theme">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="hidden md:inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold text-white glow-btn transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)', boxShadow: '0 4px 16px rgba(34,211,238,0.3)' }}>
              Hire Me
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden p-2 rounded-xl transition-all duration-200 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`px-4 py-4 space-y-1 border-t ${isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'}`}>
          {navLinks.map(link => (
            <button key={link.label} onClick={() => handleNavClick(link.href)} className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === link.href.replace('#', '') ? 'bg-cyan-400/10 text-cyan-400' : isDark ? 'text-slate-300 hover:bg-slate-800 hover:text-cyan-400' : 'text-slate-600 hover:bg-slate-100 hover:text-cyan-500'}`}>
              {link.label}
            </button>
          ))}
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold text-white mt-2" style={{ background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)' }}>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
