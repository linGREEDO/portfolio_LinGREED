
import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import CyberButton from "./CyberButton";

interface HackerGameProps {
  onComplete: () => void;
}

const HackerGame = ({ onComplete }: HackerGameProps) => {
  const [gameStage, setGameStage] = useState<number>(0);
  const [password, setPassword] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(3);
  const [hint, setHint] = useState<string>("");
  const [terminal, setTerminal] = useState<string[]>([
    "> SECURITY BREACH DETECTED",
    "> INITIALIZING COUNTERMEASURES...",
    "> ENTER ADMIN OVERRIDE TO CONTINUE..."
  ]);
  
  const correctPasswordFemale = "valeria";
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
    
    if (password.toLowerCase() === correctPasswordFemale || password.toLowerCase() === correctPasswordMale) {
      addToTerminal("> ACCESS GRANTED");
      addToTerminal("> BYPASSING SECURITY PROTOCOLS...");
      setTimeout(() => {
        setGameStage(1);
        addToTerminal("> WELCOME TO THE SYSTEM");
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
        setHint("Hint: fullnames of the main character");
      }
    }
    
    setPassword("");
  };
  
  const handleDecodeClick = () => {
    addToTerminal("> DECODING SECRET MESSAGE...");
    setTimeout(() => {
      addToTerminal("> DECODE COMPLETE");
      setGameStage(2);
    }, 1500);
  };
  
  return (
    <div className="p-4">
      <div className="flex items-center mb-6">
        <Terminal className="h-6 w-6 text-cyber-blue mr-2" />
        <h3 className="text-xl font-display text-cyber-blue">Terminal Access</h3>
      </div>
      
      <div className="cyber-terminal w-full h-[300px] overflow-y-auto mb-6 px-4 py-3 flex flex-col">
        {terminal.map((line, index) => (
          <div key={index} className="font-mono text-sm mb-1">{line}</div>
        ))}
      </div>
      
      {gameStage === 0 && (
        <form onSubmit={handlePasswordSubmit} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-cyber-black border border-cyber-blue/50 px-3 py-2 rounded text-cyber-blue font-mono focus:outline-none focus:border-cyber-blue"
              placeholder="ENTER PASSWORD"
              autoFocus
            />
            <CyberButton type="submit" variant="primary" size="sm">
              Submit
            </CyberButton>
          </div>
          {hint && <p className="text-cyber-yellow mt-2 text-sm font-mono">{hint}</p>}
        </form>
      )}
      
      {gameStage === 1 && (
        <div className="text-center">
          <p className="text-cyber-blue mb-4 font-mono">You've gained access to the system. What would you like to do?</p>
          <div className="flex justify-center gap-4">
            <CyberButton onClick={handleDecodeClick} variant="primary" size="md">
              Decode Secret
            </CyberButton>
            <CyberButton onClick={onComplete} variant="outline" size="md">
              Exit System
            </CyberButton>
          </div>
        </div>
      )}
      
      {gameStage === 2 && (
        <div className="text-center">
          <p className="text-cyber-pink mb-4 font-mono">SECRET MESSAGE DECODED:</p>
          <div className="bg-cyber-black/60 border border-cyber-pink/30 p-4 mb-6 font-mono text-white">
            Thank you for exploring this portfolio easter egg! Your curiosity and problem-solving skills are exactly what makes a great developer.
          </div>
          <CyberButton onClick={onComplete} variant="secondary" size="md">
            Close Terminal
          </CyberButton>
        </div>
      )}
    </div>
  );
};

export default HackerGame;
