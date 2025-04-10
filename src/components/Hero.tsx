
import React, { useEffect, useState } from 'react';
import Glitch from './Glitch';
import { ChevronDown, Scan, Terminal} from 'lucide-react';
import CyberButton from './CyberButton';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'FULL-STACK / DEVELOPER';
  const [matrixChars, setMatrixChars] = useState<{ char: string; x: number; y: number; opacity: number; speed: number }[]>([]);
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    setLoaded(true);

    // Matrix-style character animation setup
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const newMatrixChars = Array.from({ length: 100 }, () => ({
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 1 + 0.5
    }));
    setMatrixChars(newMatrixChars);

    // Typewriter effect
    let i = 0;
    const typeEffect = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeEffect);
      }
    }, 100);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 3000);

    return () => {
      clearInterval(typeEffect);
      clearInterval(glitchInterval);
    };
  }, []);

  const parallaxEffect = (e: React.MouseEvent) => {
    const elements = document.querySelectorAll('.parallax');
    elements.forEach(elem => {
      const speed = Number(elem.getAttribute('data-speed'));
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      (elem as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pb-16 pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      onMouseMove={parallaxEffect}
    >
      {/* Digital Wall Background */}
      <div className="absolute inset-0 bg-cyber-black">
        {/* Hexagonal Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%23ff1e1e' fill-opacity='0.15'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '28px 49px'
        }}></div>

        {/* yellow Data Stream Lines */}
        <div className="absolute inset-0 data-stream"></div>

        {/* Black Wall Interface Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyber-yellow shadow-glow-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 10px 2px rgba(255, 30, 30, 0.7)',
                animation: `neural-pulse ${2 + Math.random() * 3}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloyellowBlur" />
              <feMerge>
                <feMergeNode in="coloyellowBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#glow)">
            {Array.from({ length: 15 }).map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;
              return (
                <line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="#ff1e1e"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
              );
            })}
          </g>
        </svg>
      </div>

      {/* Matrix-like characters animation */}
      {matrixChars.map((char, index) => (
        <div
          key={index}
          className="absolute text-cyber-yellow font-mono text-opacity-30"
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            opacity: char.opacity,
            fontSize: `${Math.random() * 16 + 8}px`,
            animation: `fade-in-out ${char.speed}s infinite alternate`
          }}
        >
          {char.char}
        </div>
      ))}

      {/* Horizontal scan line effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="w-full h-[2px] bg-cyber-yellow/20 animate-scanline"></div>
      </div>

      {/* Random pixelated interference effect */}
      <div className={`absolute inset-0 z-5 transition-opacity duration-200 ${glitchEffect ? 'opacity-30' : 'opacity-0'}`} style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23ff1e1e'/%3E%3C/svg%3E")`,
      }}></div>



      {/* Hero Content with NetRunner style */}
      <div className="container mx-auto text-center z-10 relative">
        <div className="mb-8">
          <div
            className={`inline-block py-1 px-3 bg-cyber-yellow/10 border border-cyber-yellow/30 rounded-sm mb-4 transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <span className="text-cyber-yellow text-xs font-mono">// BLACK WALL ACCESS GRANTED</span>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
              <div className="border-[1px] border-cyber-yellow/50 bg-cyber-black/90 p-4 sm:p-6 relative retro-terminal">
                {/* Terminal decoration corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-yellow"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-yellow"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-yellow"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-yellow"></div>

                {/* Title with scan line effect */}
                <div className="relative">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-cyber font-bold tracking-tight">
                    <Glitch text="Dyari" color="yellow" className="mr-3" />
                    <Glitch text="Ali" color="neonred" className="mr-3" />
                    <Glitch text="Taher" color="red" />
                  </h1>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-yellow/5 to-transparent animate-scanline pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-cyber-yellow/20 pt-4">
            <p className={`text-xl md:text-2xl font-tech mb-8 text-gray-400 transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
              <span className="terminal-text">{typedText}</span>
            </p>
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
            <CyberButton href="#projects" variant="primary" size="lg">
              <Scan className="mr-2 h-4 w-4" />
              View Projects
            </CyberButton>

            <CyberButton href="#contact" variant="outline" size="lg" color='red'>
              <Terminal className="mr-2 h-4 w-4" />
              Connect
            </CyberButton>
        </div>
      </div>

      {/* "Connecting..." text with blinking effect */}
      <div className="absolute bottom-20 w-full text-center font-tech text-cyber-yellow text-sm opacity-70">
        <span className="animate-blink inline-block mr-2">■</span>
        <span>CONNECTED TO BLACK WALL</span>
      </div>
    </section>
  );
};

export default Hero;
