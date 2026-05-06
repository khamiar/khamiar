import { useEffect, useRef, useState } from 'react';

interface Props {
  isDark: boolean;
}

const skills = [
  { name: 'Java', level: 50 },
  { name: 'Spring Boot', level: 65 },
  { name: 'Angular', level: 85 },
  { name: 'React', level: 55},
  { name: 'Flutter', level: 65 },
  { name: 'JavaScript', level: 75 },
  { name: 'MySQL', level: 90 },
  { name: 'PostgreSQL', level: 30 },
  { name: 'GitHub', level: 90 },
];

export default function Skills({ isDark }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-cyan-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">What I Know</p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Technical <span className="gradient-text">Skills</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <div key={skill.name} className={`reveal p-5 rounded-2xl card-hover ${isDark ? 'bg-slate-800/60' : 'bg-white shadow-sm'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between mb-3">
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{skill.name}</p>
                {/* <span className="text-cyan-400 font-mono font-bold text-sm">{skill.level}%</span> */}
              </div>

              <div className={`h-2 rounded-full ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>

                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out relative"
                  style={{
                    width: animate ? `${skill.level}%` : '0%',
                    background: 'linear-gradient(90deg, #22d3ee, #0ea5e9)',
                    boxShadow: '0 0 12px rgba(34,211,238,0.5)'
                  }}
                >

                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center transition-opacity duration-500"
                    style={{ opacity: animate ? 1 : 0 }}
                  >

                    <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_4px_rgba(34,211,238,0.8)]" />

                    <div className={`absolute -top-7 text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap ${isDark ? 'bg-slate-800 text-cyan-400' : 'bg-white text-cyan-500'}`}>
                      {skill.level}%

                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${isDark ? 'bg-slate-800' : 'bg-white'}`} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
