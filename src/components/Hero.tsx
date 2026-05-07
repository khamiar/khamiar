import { Download, MessageSquare, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';

interface Props {
  isDark: boolean;
}

const roles = ['Full Stack Developer', 'Flutter Developer', 'Angular Developer', 'Spring Boot Expert'];

export default function Hero({ isDark }: Props) {
  const typedText = useTypingEffect(roles, 80, 40, 2200);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={`relative min-h-screen flex items-center overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="absolute rounded-full blur-3xl opacity-20 animate-float" style={{width: '600px', height: '600px', background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', top: '-100px', left: '-100px', animationDelay: '0s'}} />
        <div className="absolute rounded-full blur-3xl opacity-15 animate-float" style={{width: '500px', height: '500px', background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', bottom: '-50px', right: '-50px', animationDelay: '2s'}} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className={`text-xs font-mono font-medium ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>Available for opportunities</span>
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Hi, I'm <span className="gradient-text block sm:inline">Khamiar</span>
            </h1>
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-6 h-10">
              <span className="text-lg sm:text-xl font-mono font-semibold text-cyan-400">{typedText}</span>
              <span className="cursor-blink text-cyan-400 text-xl font-mono">|</span>
            </div>
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Passionate developer from <span className="text-cyan-400 font-semibold">Zanzibar, Tanzania,</span> building scalable solutions with Flutter, Angular, and Spring Boot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button onClick={() => handleScroll('contact')} className="glow-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)', boxShadow: '0 4px 24px rgba(34,211,238,0.4)'}}>
                <MessageSquare size={18} /> Hire Me
              </button>
              <a href="/CV.pdf" 
                download = 'Khamiar_Mshimba_Seif_CV.pdf'
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 border-2 ${isDark ? 'border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400' : 'border-cyan-500/40 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-500'}`}>
                <Download size={18} /> Download CV
              </a>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[{icon: Github, href: 'https://github.com/khamiar', label: 'GitHub'}, {icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn'}, {icon: Twitter, href: 'https://twitter.com', label: 'Twitter'}].map(({icon: Icon, href, label}) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDark ? 'bg-slate-800/60 text-slate-400 hover:text-cyan-400 hover:bg-slate-700' : 'bg-white text-slate-500 hover:text-cyan-500 hover:bg-slate-50 shadow-sm'}`}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full opacity-30 animate-spin-slow" style={{background: 'conic-gradient(from 0deg, #22d3ee, #0ea5e9, transparent, transparent)', margin: '-12px'}} />
              <div className={`relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl flex items-center justify-center animate-float overflow-hidden ${isDark ? 'bg-slate-800/60' : 'bg-white/80'}`} style={{backdropFilter: 'blur(20px)', border: '1px solid rgba(34,211,238,0.25)', boxShadow: '0 0 60px rgba(34,211,238,0.15), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
                <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #22d3ee 0%, #0ea5e9 50%, #0284c7 100%)', boxShadow: '0 0 40px rgba(34,211,238,0.5)'}}>
                    {/* <span className="text-5xl font-black text-white font-mono">KS</span> */}
                    <img src="/sut1.png" alt="Developer working" className="w-full h-100 object-cover rounded-full" style={{boxShadow: '0 0 60px rgba(34,211,238,0.15)'}} />

                  </div>
                  <p className={`text-center font-bold text-lg ${isDark ? 'text-white' : 'text-slate-800'}`}>Khamiar</p>
                  <p className="text-cyan-400 text-sm font-mono text-center">Full Stack Developer</p>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => handleScroll('about')} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors duration-200 animate-bounce-slow">
        <span className="text-xs font-mono">scroll down</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
