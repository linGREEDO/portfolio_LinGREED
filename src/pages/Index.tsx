import React, { useEffect, useState } from 'react';
import MainLayout from "@/layouts/MainLayout";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import EasterEgg from '../components/EasterEgg';
import LoadingScreen from '../components/LoadingScreen';
import { Terminal, AlertTriangle, Wifi, Battery, Shield } from 'lucide-react';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [hackProgress, setHackProgress] = useState(0);
  const [showHUD, setShowHUD] = useState(false);
  const [statusMessages, setStatusMessages] = useState<string[]>([]);

  useEffect(() => {
    // Console Easter Egg
    console.log(`%c
    ╔═══════════════════════════════════════════════╗
    ║                                               ║
    ║   BLACK WALL ACCESS: GRANTED                  ║
    ║                                               ║
    ║   You've discovered the developer console.    ║
    ║   Try the Konami Code: ↑↑↓↓←→←→BA             ║
    ║                                               ║
    ║   More secrets await throughout the site...   ║
    ║                                               ║
    ╚═══════════════════════════════════════════════╝
    `, 'color: #FF1E1E; background: #101420; font-family: monospace; font-size: 12px; padding: 10px;');

    // Only start the other effects after loading completes
    if (!loading) {
      // Simulated "hacking" progress
      const interval = setInterval(() => {
        setHackProgress(prev => {
          const newProgress = prev + Math.random() * 2;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 500);

      // Show HUD after a delay
      setTimeout(() => setShowHUD(true), 2000);

      // Add status messages periodically
      const messageInterval = setInterval(() => {
        if (statusMessages.length < 5) {
          const messages = [
            "SCANNING NEURAL SUBNET...",
            "BYPASSING ICE PROTOCOLS...",
            "EXTRACTING NET CREDENTIALS...",
            "SEARCHING BLACK WALL DATABASE...",
            "NEURAL LINK ESTABLISHED...",
            "DECRYPTING SECURE FILES...",
            "ACCESSING CORPORATE MAINFRAME...",
            "INSTALLING BACKDOOR DAEMON...",
            "ROUTING THROUGH PROXIES...",
            "DEPLOYING BREACH PROTOCOL..."
          ];
          const randomMessage = messages[Math.floor(Math.random() * messages.length)];
          setStatusMessages(prev => [...prev, randomMessage]);
        }
      }, 3000);

      return () => {
        clearInterval(interval);
        clearInterval(messageInterval);
      };
    }
  }, [loading, statusMessages.length]);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <MainLayout>
      <div className={`min-h-screen bg-cyber-black text-white overflow-hidden transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <Projects />

          {/* Section Divider */}
          <div className="section-divider"></div>

          <About />
          <Skills />

          {/* Section Divider */}
          <div className="section-divider"></div>

          <Contact />
        </main>

        <Footer />

        {/* Easter Eggs */}
        <div className="fixed bottom-6 right-6 z-40">
          <EasterEgg type="konami">
            <div className="bg-cyber-red text-cyber-black p-4 rounded-md animate-bounce">
              <h3 className="font-cyber font-bold mb-2">KONAMI CODE ACTIVATED!</h3>
              <p className="text-sm">You found a secret! Keep exploring for more...</p>
            </div>
          </EasterEgg>
        </div>

        <div className="fixed bottom-6 left-6 z-40">
          <EasterEgg type="hover">
            <div className="bg-cyber-darkblue border border-cyber-pink p-3 rounded-md">
              <Terminal className="text-cyber-pink" size={24} />
            </div>
          </EasterEgg>
        </div>

        {/* Cyberpunk HUD Elements */}
        {showHUD && (
          <>
            {/* Top left status indicators */}
            <div className="fixed top-20 left-4 z-30 font-mono text-xs text-cyber-red opacity-70">
              <div className="flex items-center mb-2">
                <Wifi size={14} className="mr-1" />
                <span>NETRUNNER_LINK: ACTIVE</span>
              </div>
              <div className="flex items-center mb-2">
                <Battery size={14} className="mr-1" />
                <span>NEURAL_BATTERY: 87%</span>
              </div>
              <div className="flex items-center">
                <Shield size={14} className="mr-1" />
                <span>FIREWALL: ENGAGED</span>
              </div>
            </div>

            {/* Bottom left scrolling status messages */}
            <div className="fixed bottom-20 left-4 z-30 font-mono text-xs text-cyber-red opacity-70 w-48 h-28 overflow-hidden">
              {statusMessages.map((msg, index) => (
                <div
                  key={index}
                  className="mb-1 flex items-start"
                  style={{
                    animation: `fade-in-out ${1 + Math.random() * 2}s infinite alternate`
                  }}
                >
                  <span className="inline-block mr-1 animate-blink">■</span>
                  <span>{msg}</span>
                </div>
              ))}
            </div>

            {/* Bottom right warning indicator */}
            {hackProgress > 75 && (
              <div className="fixed bottom-20 right-4 z-30 font-mono text-xs text-cyber-red opacity-70 flex items-center">
                <AlertTriangle size={14} className="mr-1 animate-pulse" />
                <span>WARNING: INTRUSION DETECTED</span>
              </div>
            )}
          </>
        )}

        {/* Matrix-like background effect */}
        <div className="fixed inset-0 pointer-events-none bg-cyber-black bg-opacity-5 z-30" style={{
          backgroundImage: `linear-gradient(rgba(255, 30, 30, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 30, 30, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Digital Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none z-30 opacity-5 mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>

        {/* Scanline effect */}
        <div className="scanline"></div>
      </div>
      </MainLayout>
    </>
  );
};

export default Index;
