import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollReveal } from './hooks/useScrollReveal';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const [showLoading, setShowLoading] = useState(true);
  useScrollReveal();

  return (
    <>
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      <div className={isDark ? 'dark' : ''}>
        <div className={`transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
          <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
          <main>
            <Hero isDark={isDark} />
            <About isDark={isDark} />
            <Skills isDark={isDark} />
            <Projects isDark={isDark} />
            <Services isDark={isDark} />
            <Contact isDark={isDark} />
          </main>
          <Footer isDark={isDark} />
          <ScrollToTop isDark={isDark} />
          <WhatsAppButton isDark={isDark} />
        </div>
      </div>
    </>
  );
}

export default App;
