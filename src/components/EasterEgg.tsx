
import React, { useEffect, useState } from 'react';

interface EasterEggProps {
  type: 'konami' | 'hover' | 'click';
  children: React.ReactNode;
}

const EasterEgg: React.FC<EasterEggProps> = ({ type, children }) => {
  const [triggered, setTriggered] = useState(false);
  
  useEffect(() => {
    if (type === 'konami') {
      const konamiCode = [
        'ArrowUp', 'ArrowUp', 
        'ArrowDown', 'ArrowDown', 
        'ArrowLeft', 'ArrowRight', 
        'ArrowLeft', 'ArrowRight', 
        'b', 'a'
      ];
      let konamiIndex = 0;
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === konamiCode[konamiIndex]) {
          konamiIndex++;
          
          if (konamiIndex === konamiCode.length) {
            setTriggered(true);
            konamiIndex = 0;
            console.log('Konami Code Activated!');
          }
        } else {
          konamiIndex = 0;
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [type]);
  
  if (type === 'hover') {
    return (
      <div 
        className="easter-egg hover:opacity-100"
        onMouseEnter={() => {
          setTriggered(true);
          console.log('Easter Egg Found: Hover secret!');
        }}
      >
        {children}
      </div>
    );
  }
  
  if (type === 'click') {
    return (
      <div 
        className={`cursor-pointer transition-all duration-300 ${triggered ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => {
          setTriggered(!triggered);
          console.log('Easter Egg Found: Click secret!');
        }}
      >
        {children}
      </div>
    );
  }
  
  return (
    <div className={triggered ? 'block' : 'hidden'}>
      {children}
    </div>
  );
};

export default EasterEgg;
