import React from "react";

const Logo = () => {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      <div className="w-6 h-6 bg-cyber-red/80 absolute animate-pulse"></div>
      <div className="w-6 h-6 bg-cyber-yellow/80 absolute animate-pulse ml-1 mt-1"></div>
      <div className="w-6 h-6 bg-cyber-yellow/80 absolute animate-pulse ml-2 mt-2"></div>
      <span className="text-white font-bold relative z-10">L</span>
    </div>
  );
};

export default Logo;
