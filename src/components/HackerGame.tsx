
import { useState, useEffect } from "react";
import { Terminal, ShieldAlert, Key, Zap, Code, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HackerGameProps {
  onComplete: () => void;
}

const HackerGame = ({ onComplete }: HackerGameProps) => {
  const [gameStage, setGameStage] = useState<number>(0);
  const [password, setPassword] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(3);
  const [hint, setHint] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [terminal, setTerminal] = useState<string[]>([
    "> SECURITY BREACH DETECTED",
    "> INITIALIZING COUNTERMEASURES...",
    "> ENTER ADMIN OVERRIDE TO CONTINUE..."
  ]);

  const correctPasswordFemale = "valerie";
  const correctPasswordMale = "vincent";

  // Add text to terminal with typing effect
  const addToTerminal = (text: string) => {
    setTerminal((prev) => [...prev, ""]);

    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setTerminal((prev) => {
          const newTerminal = [...prev];
          newTerminal[newTerminal.length - 1] = text.substring(0, i + 1);
          return newTerminal;
        });
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 30);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    addToTerminal(`> VERIFYING PASSWORD: ${password.replace(/./g, '*')}`);

    setTimeout(() => {
      if (password.toLowerCase() === correctPasswordFemale || password.toLowerCase() === correctPasswordMale) {
        addToTerminal("> ACCESS GRANTED");
        addToTerminal("> BYPASSING SECURITY PROTOCOLS...");

        setTimeout(() => {
          setGameStage(1);
          addToTerminal("> WELCOME TO THE SYSTEM");
          setLoading(false);
        }, 1500);
      } else {
        setAttempts((prev) => prev - 1);
        addToTerminal(`> INCORRECT PASSWORD. ${attempts - 1} ATTEMPTS REMAINING.`);

        if (attempts <= 1) {
          addToTerminal("> SECURITY LOCKDOWN INITIATED");
          addToTerminal("> SYSTEM RESET IN PROGRESS...");
          setTimeout(() => {
            onComplete();
          }, 2000);
        } else if (attempts === 2) {
          setHint("Hint: an easter egg tied to the mission : Automatic Love.");
        }
        setLoading(false);
      }
      setPassword("");
    }, 800);
  };

  const handleDecodeClick = () => {
    setLoading(true);
    addToTerminal("> DECODING SECRET MESSAGE...");

    // Add some hacking style progress messages
    setTimeout(() => addToTerminal("> BYPASSING ENCRYPTION..."), 400);
    setTimeout(() => addToTerminal("> BREAKING FIREWALL LAYERS..."), 800);
    setTimeout(() => addToTerminal("> EXTRACTING HIDDEN DATA..."), 1200);

    setTimeout(() => {
      addToTerminal("> DECODE COMPLETE");
      setGameStage(2);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-4 bg-cyber-black/80 border border-cyber-blue/30 rounded-md backdrop-blur-md">
      <div className="flex items-center mb-4 border-b border-cyber-blue/20 pb-2">
        <div className="relative">
          <Terminal className="h-6 w-6 text-cyber-blue mr-2" />
          <div className="absolute -inset-1 bg-cyber-blue/20 rounded-full animate-pulse -z-10"></div>
        </div>
        <h3 className="text-xl font-cyber text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink">NEURAL TERMINAL v2.0</h3>
      </div>

      {/* Terminal with scanline effect */}
      <div className="relative w-full h-[300px] mb-6 bg-cyber-darkblue/90 border border-cyber-blue/30 rounded overflow-hidden">
        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none opacity-10 z-10">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-blue animate-scanline"></div>
        </div>

        {/* Terminal content */}
        <div className="w-full h-full overflow-y-auto px-4 py-3 font-tech">
          {terminal.map((line, index) => (
            <div
              key={index}
              className={cn(
                "text-sm mb-2 flex",
                index === terminal.length - 1 && "animate-fade-in-up"
              )}
            >
              <span className={cn(
                index % 2 === 0 ? "text-cyber-blue" : "text-cyber-green",
                terminal.length - 1 === index && "after:content-['_'] after:animate-blink"
              )}>
                {line}
              </span>
            </div>
          ))}
        </div>
      </div>

      {loading && (
        <div className="flex justify-center mb-4">
          <Loader className="animate-spin text-cyber-blue h-6 w-6" />
        </div>
      )}

      {gameStage === 0 && !loading && (
        <form onSubmit={handlePasswordSubmit} className="mb-4">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-blue/70 h-4 w-4" />
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-cyber-darkblue border border-cyber-blue/50 pl-10 pr-3 py-2 rounded text-cyber-blue font-tech w-full focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/50"
                placeholder="ENTER PASSWORD"
                autoFocus
                disabled={loading}
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cyber-blue/5 via-cyber-blue/40 to-cyber-blue/5 w-full"></div>
            </div>
            <Button
              type="submit"
              disabled={loading}
              variant="outline"
              className="bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 font-tech font-bold tracking-wider"
            >
              <ShieldAlert className="h-4 w-4 mr-2" />
              AUTHENTICATE
            </Button>
          </div>
          {hint && (
            <div className="mt-3 p-2 border border-cyber-yellow/30 bg-cyber-yellow/10 rounded">
              <p className="text-cyber-yellow text-sm font-tech animate-text-glitch">
                {hint}
              </p>
            </div>
          )}
        </form>
      )}

      {gameStage === 1 && !loading && (
        <div className="text-center border border-cyber-blue/30 bg-cyber-darkblue/50 p-4 rounded-md">
          <p className="text-cyber-blue mb-4 font-tech">You've gained access to the system. What would you like to do?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={handleDecodeClick}
              variant="outline"
              className="bg-transparent border border-cyber-pink text-cyber-pink hover:bg-cyber-pink/10 font-tech font-bold tracking-wider"
              disabled={loading}
            >
              <Code className="h-4 w-4 mr-2" />
              DECODE SECRET
            </Button>
            <Button
              onClick={onComplete}
              variant="outline"
              className="bg-transparent border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow/10 font-tech font-bold tracking-wider"
              disabled={loading}
            >
              <Zap className="h-4 w-4 mr-2" />
              EXIT SYSTEM
            </Button>
          </div>
        </div>
      )}

      {gameStage === 2 && !loading && (
        <div className="text-center">
          <p className="text-cyber-pink mb-4 font-tech font-bold tracking-wider animate-text-glitch">SECRET MESSAGE DECODED:</p>
          <div className="relative bg-cyber-darkblue/80 border border-cyber-pink/30 p-4 mb-6 rounded-md overflow-hidden">
            {/* Animated border effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyber-pink/10 via-cyber-pink to-cyber-pink/10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyber-pink/10 via-cyber-pink to-cyber-pink/10"></div>
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyber-pink/10 via-cyber-pink to-cyber-pink/10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyber-pink/10 via-cyber-pink to-cyber-pink/10"></div>
            </div>

            <p className="font-tech text-white leading-relaxed">
              {'>'} LOADING SPECIAL SKILLS...

                [✓] Problem solving: MAXED
                [✓] Coffee consumption: LEGENDARY
                [✓] Bug squashing: EXPERT
                [✓] Deadline wizard: UNLOCKED
                [✓] Stack overflow copying: MASTER
            </p>
          </div>
          <Button
            onClick={onComplete}
            variant="outline"
            className="bg-transparent border border-cyber-green text-cyber-green hover:bg-cyber-green/10 font-tech font-bold tracking-wider"
          >
            <Zap className="h-4 w-4 mr-2" />
            CLOSE TERMINAL
          </Button>
        </div>
      )}
    </div>
  );
};

export default HackerGame;
