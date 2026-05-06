import { ExternalLink, Github } from 'lucide-react';

interface Props {
  isDark: boolean;
}

const projects = [
  {
    title: 'Electricity Outage Reporter',
    desc: 'Community utility app for reporting and tracking power outages in real-time.',
    tech: ['Flutter', 'Firebase', 'REST API'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    live: '#',
  },
  {
    title: 'SoukSearch System',
    desc: 'Enterprise search platform for local marketplace discovery and categorization.',
    tech: ['Angular', 'Spring Boot', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/3184654/pexels-photo-3184654.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    live: '#',
  },
  {
    title: 'Mshimba Hardware',
    desc: 'Modern responsive Website for Mshimba Hardware Shop with products and contact info.',
    tech: ['React', 'Javascript', 'Tailwind CSS'],
    image: '/mshimba_hardware.png',
    github: 'https://github.com/khamiar/mshimba_hardware',
    live: 'https://khamiar.github.io/mshimba_hardware/',
  },
  {
    title: 'AI Project (Coming Soon)',
    desc: 'Leveraging machine learning for community-focused solutions.',
    tech: ['Python', 'TensorFlow', 'API'],
    image: 'https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    live: '#',
    comingSoon: true,
  },
];

export default function Projects({ isDark }: Props) {
  return (
    <section id="projects" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-cyan-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Featured <span className="gradient-text">Projects</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <div key={project.title} className={`reveal card-hover group rounded-2xl overflow-hidden ${isDark ? 'bg-slate-800/60' : 'bg-white shadow-lg'}`} style={{border: '1px solid rgba(34,211,238,0.1)', transitionDelay: `${i * 80}ms`}}>
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {project.comingSoon && <div className="absolute inset-0 flex items-center justify-center bg-black/60"><span className="text-white font-bold text-lg">Coming Soon</span></div>}
              </div>
              <div className="p-6">
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className={`text-xs px-2.5 py-1 rounded-full font-mono font-medium ${isDark ? 'bg-cyan-400/10 text-cyan-300' : 'bg-cyan-50 text-cyan-600'}`}>{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isDark ? 'bg-slate-700 text-slate-300 hover:text-white hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`} disabled={project.comingSoon}>
                    <Github size={16} /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105" style={{background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)', opacity: project.comingSoon ? 0.5 : 1, pointerEvents: project.comingSoon ? 'none' : 'auto'}}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
