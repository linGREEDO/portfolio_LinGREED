
import React from 'react';

interface GlitchProps {
  text: string;
  className?: string;
  color?: 'red' | 'pink' | 'yellow' | 'white' | 'crimson' | 'neonred';
}

const Glitch: React.FC<GlitchProps> = ({ text, className = '', color = 'white' }) => {
  const colorClasses = {
    red: 'text-cyber-red',
    crimson: 'text-cyber-crimson',
    pink: 'text-cyber-pink',
    yellow: 'text-cyber-yellow',
    neonred: 'text-cyber-neonred',
    white: 'text-white'
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <span className={`font-cyber uppercase tracking-wider ${colorClasses[color]} animate-text-glitch`}>
        {text}
      </span>
      <span className="absolute top-0 left-0 w-full h-full bg-background opacity-0 z-10 animate-glitch"></span>
    </div>
  );
};

export default Glitch;
