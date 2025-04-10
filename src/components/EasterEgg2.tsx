
import { useState, useEffect } from "react";
import HackerGame from "./HackerGame";

const EasterEgg = () => {
  const [activeEgg, setActiveEgg] = useState<string | null>(null);
  const [eggPosition, setEggPosition] = useState({ x: 0, y: 0 });
  const [konami, setKonami] = useState(false);

  useEffect(() => {
    // Listen for secret kombinations
    const handleEasterEgg = (e: CustomEvent) => {
      setActiveEgg(e.detail);

      if (e.detail === 'konami') {
        setKonami(true);
      }
    };

    document.addEventListener('easterEggTriggered', handleEasterEgg as EventListener);

    // Secret click pattern (triple click in bottom right corner)
    let clickCounter = 0;
    let lastClickTime = 0;
    const cornerSize = 50;

    const handleClick = (e: MouseEvent) => {
      const now = Date.now();
      const isCorner =
        window.innerWidth - e.clientX < cornerSize &&
        window.innerHeight - e.clientY < cornerSize;

      if (isCorner) {
        if (now - lastClickTime < 500) {
          clickCounter++;

          if (clickCounter >= 3) {
            setEggPosition({ x: e.clientX, y: e.clientY });
            setActiveEgg('hacker');
            clickCounter = 0;
          }
        } else {
          clickCounter = 1;
        }

        lastClickTime = now;
      } else {
        clickCounter = 0;
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('easterEggTriggered', handleEasterEgg as EventListener);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const closeEasterEgg = () => {
    setActiveEgg(null);
    setKonami(false);
  };

  if (!activeEgg) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        onClick={closeEasterEgg}
      ></div>

      {/* Content */}
      <div
        className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl max-h-[80vh] cyber-box p-6 overflow-auto"
      >
        <button
          className="absolute top-2 right-2 text-white hover:text-cyber-pink transition-colors"
          onClick={closeEasterEgg}
        >
          ✕
        </button>

        {activeEgg === 'hacker' && <HackerGame onComplete={closeEasterEgg} />}

        {konami && (
          <div className="text-center py-8">
            <h3 className="text-2xl font-display text-cyber-green cyber-text-shadow mb-4">KONAMI CODE ACTIVATED!</h3>
            <p className="text-white mb-6">You've discovered a secret! Here's a surprise:</p>
            <div className="cyber-terminal w-full max-w-lg mx-auto p-4 mb-6">
              <pre className="font-mono text-sm">
                {`
> ACCESSING DEVELOPER CREDENTIALS...
> PASSWORD: ************
> ACCESS GRANTED

> LOADING SPECIAL SKILLS...

  [✓] Problem solving: MAXED
  [✓] Coffee consumption: LEGENDARY
  [✓] Bug squashing: EXPERT
  [✓] Deadline wizard: UNLOCKED
  [✓] Stack overflow copying: MASTER

> CHEAT CODE UNLOCKED: HIRE THIS DEVELOPER!
                `}
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EasterEgg;
