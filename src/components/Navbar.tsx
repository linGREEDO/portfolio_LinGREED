import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-cyber-black/90 backdrop-blur-lg border-b border-cyber-yellow/20'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#hero"
          className="flex items-center gap-2 group"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="w-6 h-6 bg-cyber-red/80 absolute animate-pulse"></div>
            <div className="w-6 h-6 bg-cyber-yellow/80 absolute animate-pulse ml-1 mt-1"></div>
            <div className="w-6 h-6 bg-cyber-yellow/80 absolute animate-pulse ml-2 mt-2"></div>
            <span className="text-white font-bold relative z-10">L</span>
          </div>
          <span className="text-cyberpunk font-bold text-lg relative">
            Lin
            <span className="text-cyber-yellow">GREED</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber-red group-hover:w-full transition-all duration-300"></span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-cyberpunk text-sm font-medium transition-colors duration-300 relative group ${
                activeSection === link.href.substring(1) // Match section ID
                  ? 'text-cyber-yellow'
                  : 'text-gray-300 hover:text-cyber-red'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] ${
                  activeSection === link.href.substring(1)
                    ? 'w-full bg-cyber-yellow'
                    : 'w-0 bg-cyber-red group-hover:w-full transition-all duration-300'
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-cyber-darkblue/95 backdrop-blur-lg border-b border-cyber-red/20 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`flex items-center text-cyberpunk py-2 transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-cyber-yellow'
                  : 'text-gray-300 hover:text-cyber-red'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <ChevronRight size={16} className="text-cyber-yellow mr-2" />
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] ${
                  activeSection === link.href.substring(1)
                    ? 'w-full bg-cyber-yellow'
                    : 'w-0 bg-cyber-yellow group-hover:w-full transition-all duration-300'
                }`}
              ></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
