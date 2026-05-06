import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import whiteLogo from '../assets/logowhite2.png'

interface Props {
  isDark: boolean;
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/khamiar', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer({ isDark }: Props) {
  const currentYear = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <footer className={`relative ${isDark ? 'bg-slate-950' : 'bg-slate-900'} text-white overflow-hidden`}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div className="reveal-left">
            <div className="flex items-center gap-2 mb-4">
              <button onClick={() => handleNavClick('#home')} className="flex items-center gap-2 group">
                <img
                  src={whiteLogo}
                  alt="Khamiar"
                  className="w-20 h-auto object-contain rounded-md"
                // style={{background: 'white'}}
                />
              </button>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Full Stack Developer building scalable solutions with passion. Based in Zanzibar, Tanzania.</p>
          </div>
          <div className="reveal">
            <p className="font-semibold mb-4">Quick Links</p>
            <div className="space-y-2" style={{display: 'flex', flexDirection: 'column'}}>
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">{link}</a>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <p className="font-semibold mb-4">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-lg bg-slate-800/60 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p className="flex items-center gap-1">Built with <Heart size={14} className="text-red-400 animate-pulse" /> by Khamiar | {currentYear}</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 transition-colors text-cyan-400" aria-label="Scroll to top">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
