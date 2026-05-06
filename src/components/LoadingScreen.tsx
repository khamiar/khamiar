import { useEffect, useState } from 'react';
import whiteLogo from '../assets/logowhite2.png'

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
      <div className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl" style={{background: 'radial-gradient(circle, #22d3ee, transparent)', top: '10%', left: '10%'}} />
      <div className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl" style={{background: 'radial-gradient(circle, #0ea5e9, transparent)', bottom: '10%', right: '10%'}} />
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 animate-pulse-slow">
            {/* <span className="text-3xl font-black text-white font-mono">K</span> */}
            <img
                  src={whiteLogo}
                  alt="Khamiar"
                  className="w-20 h-auto object-contain rounded-md"
                />
          </div>
          <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase">Initializing...</p>
        </div>
        <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto mb-4">
          <div className="h-full rounded-full transition-all duration-100" style={{width: `${progress}%`, background: 'linear-gradient(90deg, #22d3ee, #0ea5e9)', boxShadow: '0 0 12px rgba(34,211,238,0.7)'}} />
        </div>
        <p className="text-slate-500 font-mono text-xs">{progress}%</p>
        <div className="flex gap-2 justify-center mt-6">
          {[0, 1, 2].map(i => (<div key={i} className="w-2 h-2 rounded-full bg-cyan-400" style={{animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`}} />))}
        </div>
      </div>
    </div>
  );
}
