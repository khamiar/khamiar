import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

interface Props {
  isDark: boolean;
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'khamiarmshimba4@gmail.com', href: 'mailto:khamiarmshimba4@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+255 652 105 404', href: 'tel:+255652105404' },
  { icon: MapPin, label: 'Location', value: 'Zanzibar, Tanzania', href: '#' },
];

export default function Contact({ isDark }: Props) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-cyan-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Let's <span className="gradient-text">Connect</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map(({icon: Icon, label, value, href}, i) => (
            <a key={label} href={href} className={`reveal card-hover p-6 rounded-2xl text-center transition-all duration-300 ${isDark ? 'bg-slate-800/60 hover:bg-slate-800' : 'bg-slate-50 hover:bg-slate-100'}`} style={{border: '1px solid rgba(34,211,238,0.1)', transitionDelay: `${i * 80}ms`}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{background: 'rgba(34,211,238,0.15)'}}>
                <Icon size={20} className="text-cyan-400" />
              </div>
              <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{label}</p>
              <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
            </a>
          ))}
        </div>
        <div className="max-w-2xl mx-auto reveal">
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`} style={{border: '1px solid rgba(34,211,238,0.15)'}}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Message sent!</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className={`w-full px-4 py-3 rounded-xl transition-all duration-200 border ${isDark ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500'} focus:outline-none focus:ring-2 focus:ring-cyan-400/20`} placeholder="Your name" />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className={`w-full px-4 py-3 rounded-xl transition-all duration-200 border ${isDark ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500'} focus:outline-none focus:ring-2 focus:ring-cyan-400/20`} placeholder="your@email.com" />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Message</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required rows={5} className={`w-full px-4 py-3 rounded-xl transition-all duration-200 border resize-none ${isDark ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500'} focus:outline-none focus:ring-2 focus:ring-cyan-400/20`} placeholder="Tell me about your project..." />
                </div>
                <button type="submit" className="w-full glow-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-105" style={{background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)', boxShadow: '0 4px 24px rgba(34,211,238,0.4)'}}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
