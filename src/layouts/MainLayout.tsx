
import { ReactNode, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg2";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for animation effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cyber-grid bg-cyber-darkblue">

      <main className={`flex-grow ${isLoaded ? 'animate-page-in' : 'opacity-0'}`}>
        {children}
      </main>


      <EasterEgg />
    </div>
  );
};

export default MainLayout;
