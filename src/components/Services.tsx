import { Code2, Smartphone, Server, Palette } from 'lucide-react';

interface Props {
  isDark: boolean;
}

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Building responsive, modern web applications with React, Angular, and TypeScript.',
    color: '#0ea5e9',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Creating beautiful cross-platform mobile apps with Flutter for iOS and Android.',
    color: '#22d3ee',
  },
  {
    icon: Server,
    title: 'Backend APIs',
    desc: 'Scalable REST APIs and microservices using Spring Boot and modern database solutions.',
    color: '#06b6d4',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Creating intuitive user interfaces with modern design principles and accessibility.',
    color: '#0284c7',
  },
];

export default function Services({ isDark }: Props) {
  return (
    <section id="services" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-cyan-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">What I Offer</p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>My <span className="gradient-text">Services</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className={`reveal card-hover group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 ${isDark ? 'bg-slate-900/60 hover:bg-slate-800/80' : 'bg-white hover:bg-slate-50 shadow-lg hover:shadow-xl'}`} style={{border: '1px solid rgba(34,211,238,0.1)', transitionDelay: `${i * 100}ms`}}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{background: `radial-gradient(circle, ${service.color}, transparent)`}} />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110" style={{background: `${service.color}25`}}>
                  <Icon size={24} style={{color: service.color}} />
                </div>
                <div className="relative z-10">
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                  <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{service.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500" style={{background: `linear-gradient(90deg, ${service.color}, transparent)`}} />
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16 reveal">
          <a href="#contact" className="inline-flex items-center px-8 py-3.5 rounded-xl text-base font-semibold text-white glow-btn transition-all duration-300 hover:scale-105" style={{background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)', boxShadow: '0 4px 24px rgba(34,211,238,0.4)'}}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
