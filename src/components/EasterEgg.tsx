
import React, { useEffect, useState } from 'react';

interface EasterEggProps {
  type: 'konami' | 'hover' | 'click';
  children: React.ReactNode;
}

const EasterEgg: React.FC<EasterEggProps> = ({ type }) => {
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
            console.log('Konami Code Activated!, click 3 times on the bottom right corner!');
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

  if (type === 'click') {
    return (
      <div
        className={`cursor-pointer transition-all duration-300 ${triggered ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => {
          setTriggered(!triggered);
          console.log('Easter Egg Found: Click secret!');
        }}
      >
      </div>
    );
  }

  return (
    <div className={triggered ? 'block' : 'hidden'}>
    </div>
  );
};

export default EasterEgg;
