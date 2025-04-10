
import React, { useEffect, useState } from 'react';
import { Lock, ShieldAlert, Terminal } from 'lucide-react';

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING NEURAL LINK...');
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const texts = [
      'INITIALIZING NEURAL LINK...',
      'SCANNING PROXIES...',
      'ESTABLISHING CONNECTION...',
      'BYPASSING ICE PROTOCOLS...',
      'ACCESSING BLACK WALL...',
      'DECRYPTING SECURE DATA...',
      'DISABLING SECURITY MEASURES...',
      'NEURAL LINK ESTABLISHED.'
    ];

    // Increment progress and update status text - faster interval (120ms instead of 200ms)
    const interval = setInterval(() => {
      setProgress(prev => {
        // Faster progress increment (8 instead of 5)
        const newProgress = prev + Math.random() * 8;

        // Update status text based on progress
        const textIndex = Math.floor((newProgress / 100) * (texts.length - 1));
        setStatusText(texts[Math.min(textIndex, texts.length - 1)]);

        // More frequent glitch effect (0.7 instead of 0.8)
        if (Math.random() > 0.7) {
          setGlitchActive(true);
          setTimeout(() => setGlitchActive(false), 100); // Shorter glitch (100ms instead of 150ms)
        }

        // Complete loading
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete(), 300); // Faster transition to main content (300ms instead of 500ms)
          return 100;
        }
        return newProgress;
      });
    }, 120); // Faster interval

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-cyber-black flex flex-col items-center justify-center transition-opacity duration-300 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="circuit-overlay"></div>
        <div className="data-stream"></div>
      </div>

      {/* Scanline effect */}
      <div className="scanline"></div>

      {/* Matrix-like characters */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-cyber-yellow/30 font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 16 + 8}px`,
            animation: `fade-in-out ${Math.random() * 1.5 + 0.5}s infinite alternate` // Faster animation
          }}
        >
          {String.fromCharCode(Math.floor(Math.random() * 65) + 12345)}
        </div>
      ))}

      {/* Main content */}
      <div className={`relative z-10 w-80 sm:w-96 ${glitchActive ? 'animate-glitch' : ''}`}>
        {/* Corporate logo */}
        <div className="mb-8 flex justify-center">
          <div className="border-2 border-cyber-yellow p-4 rounded-full shadow-glow-md">
            <Terminal size={48} className="text-cyber-yellow" />
          </div>
        </div>

        {/* Progress container */}
        <div className="bg-cyber-darkblue border border-cyber-yellow/50 p-5 rounded-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <ShieldAlert size={14} className="mr-2 text-cyber-yellow" />
              <span className="text-cyber-yellow font-mono text-sm">SECURED CONNECTION</span>
            </div>
            <div className="flex items-center">
              <Lock size={14} className="mr-2 text-cyber-yellow animate-pulse" />
              <span className="text-cyber-yellow font-mono text-sm">{Math.floor(progress)}%</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-cyber-black border border-cyber-yellow/30 rounded-sm overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-cyber-red via-cyber-yellow to-cyber-red transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Status text */}
          <div className="flex">
            <span className="text-cyber-yellow font-mono text-xs animate-blink mr-2">■</span>
            <p className="text-cyber-yellow font-mono text-xs terminal-text">
              {statusText}
            </p>
          </div>

          {/* Warning text */}
          <div className="mt-4 pt-2 border-t border-cyber-yellow/30 text-center text-xs font-mono">
            <p className="text-cyber-red/90">
              UNAUTHORIZED ACCESS WILL BE TRACED AND PROSECUTED
            </p>
          </div>
        </div>
      </div>

      {/* Corporate attribution */}
      <div className="absolute bottom-4 text-cyber-yellow/50 font-tech text-xs">
        ARASAKA CORPORATION • NEURAL SECURITY DIVISION
      </div>
    </div>
  );
};

export default LoadingScreen;
