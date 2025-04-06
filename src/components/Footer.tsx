
import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const toggleEasterEgg = () => {
    setShowEasterEgg(!showEasterEgg);
    
    if (!showEasterEgg) {
      console.log('Easter Egg Activated: You found the hidden message!');
    }
  };
  
  return (
    <footer className="py-12 px-4 relative bg-cyber-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center border-b border-cyber-blue/20 pb-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 bg-cyber-blue/80 absolute animate-pulse"></div>
              <div className="w-6 h-6 bg-cyber-yellow/80 absolute animate-pulse ml-1 mt-1"></div>
              <div className="w-6 h-6 bg-cyber-yellow/80 absolute animate-pulse ml-2 mt-2"></div>
              <span className="text-white font-bold relative z-10">L</span>
            </div>
            <span className="text-cyberpunk font-bold text-lg">
              LIN<span className="text-cyber-blue">GREED</span>
            </span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-cyber-darkblue border border-cyber-blue/30 p-2 rounded-md hover:border-cyber-blue/60 hover:bg-cyber-blue/10 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="text-cyber-blue" size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-cyber text-white mb-4">ABOUT</h3>
            <p className="text-gray-400 text-sm">
              A cyberpunk-themed portfolio showcasing digital projects and tech expertise. Built with React and modern web technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-cyber text-white mb-4">QUICK LINKS</h3>
            <div className="space-y-2">
              <a href="#hero" className="block text-gray-400 hover:text-cyber-blue transition-colors">Home</a>
              <a href="#projects" className="block text-gray-400 hover:text-cyber-blue transition-colors">Projects</a>
              <a href="#about" className="block text-gray-400 hover:text-cyber-blue transition-colors">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-cyber-blue transition-colors">Skills</a>
              <a href="#contact" className="block text-gray-400 hover:text-cyber-blue transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-cyber text-white mb-4">LOCATION</h3>
            <p className="text-gray-400 text-sm mb-4">
              Night City, Westbrook District<br />
              Somewhere in cyberspace
            </p>
            
            {/* Easter Egg */}
            <div 
              className="cursor-pointer"
              onClick={toggleEasterEgg}
            >
              <div className="text-[10px] text-gray-500 hover:text-cyber-blue transition-colors">
                {showEasterEgg ? (
                  <span className="text-cyber-blue">EASTER EGG FOUND! Check the console.</span>
                ) : (
                  <span>01001000 01101001 01100100 01100100 01100101 01101110</span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-cyber-blue/20">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CYBERDEV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
