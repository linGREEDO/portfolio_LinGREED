import React, { useState } from 'react';
import Glitch from './Glitch';
import { Terminal, Code, Cpu } from 'lucide-react';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="about" className="section py-16 bg-cyber-black relative">

      <div className="container mx-auto">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="border-2 border-cyber-yellow/30 inline-block px-4 py-1 mb-4">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold uppercase tracking-wide">
              <Glitch text="About" color="yellow" />
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">// SYSTEM SCAN COMPLETE // PROFILE DATA AVAILABLE</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/3">
            <div className="sticky top-32 bg-cyber-black/60 p-6 border border-cyber-yellow/20 rounded retro-terminal">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-cyber-yellow/20">
                <h3 className="text-lg font-cyber uppercase text-cyber-yellow flex items-center">
                  <Cpu size={18} className="mr-2" />
                  <span>Profile</span>
                </h3>
                <span className="text-xs font-mono text-gray-500 animate-blink">ONLINE</span>
              </div>

              <div className="flex flex-col space-y-4 text-left text-sm font-mono">
                <div>
                  <span className="text-gray-500">&gt; NAME:</span>
                  <span className="text-cyber-yellow ml-2">DYARI ALI TAHIR</span>
                </div>
                <div>
                  <span className="text-gray-500">&gt; CLASS:</span>
                  <span className="text-cyber-yellowc ml-2">NETRUNNER</span>
                </div>
                <div>
                  <span className="text-gray-500">&gt; SPECIALTY:</span>
                  <span className="text-cyber-yellowc ml-2">FULL-STACK DEVELOPMENT</span>
                </div>
                <div>
                  <span className="text-gray-500">&gt; LOCATION:</span>
                  <span className="text-gray-400 ml-2">NIGHT CITY</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500">&gt; STATUS:</span>
                  <span className="text-green-500 ml-2 flex items-center animate-text-glitch">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>ACTIVE
                  </span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-cyber-yellow/20">
                <div className="cyber-code relative text-xs">
                  <pre>{`function initNetrunner() {
  console.log("Jacking in...");
  return {
    skills: ["TS", "React", "Node"],
    status: "Ready to code"
  };
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-cyber-black/30 p-6 border border-cyber-yellow/10 mb-6">
              <h3 className="text-xl font-cyber mb-4 flex items-center text-cyber-yellow">
                <Terminal size={20} className="mr-2" />
                <span>System Info</span>
              </h3>

              <p className="mb-4 text-gray-300 font-mono">
                Greetings, I'm a <span className="text-cyber-yellow">NetRunner</span> and digital architect specializing in creating immersive web experiences. With expertise in frontend development and cybersecurity, I navigate the digital realm with precision and creativity.
              </p>

              <p className="mb-6 text-gray-300 font-mono">
                My mission is to bridge the gap between functionality and cutting-edge design, crafting digital solutions that push boundaries while maintaining optimal performance and security.
              </p>

              <div className="mb-6 bg-cyber-darkblue/50 p-4 border-l-4 border-cyber-yellow">
                <p className="text-gray-400 italic font-mono text-sm">
                  "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly."e - <span className="text-cyber-yellow">Anonymous Netrunner</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-cyber-black/30 p-4 border border-cyber-yellow/10">
                <h4 className="text-lg font-cyber mb-3 flex items-center">
                  <span className="text-cyber-yellow mr-2">&gt;</span> Experience
                </h4>
                <ul className="space-y-3 font-mono text-sm">
                  <li className="flex">
                    <span className="text-cyber-yellow mr-2">▹</span>
                    <span>5+ years crafting web applications</span>
                  </li>
                  <li className="flex">
                    <span className="text-cyber-yellow mr-2">▹</span>
                    <span>Specialized in React ecosystem</span>
                  </li>
                  <li className="flex">
                    <span className="text-cyber-yellow mr-2">▹</span>
                    <span>Backend systems architecture</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyber-black/30 p-4 border border-cyber-yellow/10">
                <h4 className="text-lg font-cyber mb-3 flex items-center">
                  <span className="text-cyber-yellow mr-2">&gt;</span> Approach
                </h4>
                <ul className="space-y-3 font-mono text-sm">
                  <li className="flex">
                    <span className="text-cyber-yellow mr-2">▹</span>
                    <span>User-centeyellow design methodology</span>
                  </li>
                  <li className="flex">
                    <span className="text-cyber-yellow mr-2">▹</span>
                    <span>Cyberpunk-inspiyellow interfaces</span>
                  </li>
                  <li className="flex">
                    <span className="text-cyber-yellow mr-2">▹</span>
                    <span>Performance-optimized code</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
