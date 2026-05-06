import { MapPin, GraduationCap, Code2, ShieldCheck, Users } from 'lucide-react';

interface Props {
  isDark: boolean;
}

const highlights = [
  { icon: MapPin, label: 'Location', value: 'Zanzibar, Tanzania' },
  { icon: GraduationCap, label: 'Education', value: 'BSc in IT & Application Management (Ongoing)' },
  // { icon: Code2, label: 'Experience', value: '3+ Years' },
  { icon: Code2, label: 'Projects', value: '5+ Completed' },
  { icon: ShieldCheck, label: 'Learning', value: 'Cybersecurity (Online)' },
  { icon: Users, label: 'Leadership', value: 'Youth Council Member' },
];

export default function About({ isDark }: Props) {
  return (
    <section id="about" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-cyan-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>About <span className="gradient-text">Me</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <h3 className={`text-2xl sm:text-3xl font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Building technology with <span className="gradient-text">passion</span></h3>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>I'm a passionate Full Stack Developer from Zanzibar specializing in Flutter, Angular, and Spring Boot. I bridge academic knowledge with real-world engineering to create impactful solutions.</p>
              <p>My mission is to work on international remote projects while writing clean code and making technology accessible to every community.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map(({icon: Icon, label, value}) => (
                <div key={label} className={`flex items-center gap-3 p-3 rounded-xl ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
                  <Icon size={16} className="text-cyan-400" />
                  <div>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</p>
                    <p className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <img src="src/assets/sut1.png" alt="Developer working" className="w-full h-100 object-cover rounded-2xl" style={{boxShadow: '0 0 60px rgba(34,211,238,0.15)'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
