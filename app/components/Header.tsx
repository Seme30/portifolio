import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from "./ui/button";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  heroRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  experienceRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  heroRef,
  aboutRef,
  skillsRef,
  projectsRef,
  experienceRef,
  contactRef,
  isDarkMode,
  toggleTheme
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (ref: React.RefObject<HTMLElement>) => {
    scrollToSection(ref);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 z-10 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div 
            onClick={() => handleNavClick(heroRef)}
            className="cursor-pointer"
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/s-logo.png?alt=media&token=74ed0e58-9e86-4b87-8248-977db588c503"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleNavClick(aboutRef)} className="text-sm hover:text-[#7F52FF]">About</button>
            <button onClick={() => handleNavClick(skillsRef)} className="text-sm hover:text-[#7F52FF]">Skills</button>
            <button onClick={() => handleNavClick(projectsRef)} className="text-sm hover:text-[#7F52FF]">Projects</button>
            <button onClick={() => handleNavClick(experienceRef)} className="text-sm hover:text-[#7F52FF]">Experience</button>
            <button onClick={() => handleNavClick(contactRef)} className="text-sm hover:text-[#7F52FF]">Contact</button>
          </div>

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-1 rounded-full mr-4"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick(aboutRef)} className="text-sm hover:text-[#7F52FF]">About</button>
              <button onClick={() => handleNavClick(skillsRef)} className="text-sm hover:text-[#7F52FF]">Skills</button>
              <button onClick={() => handleNavClick(projectsRef)} className="text-sm hover:text-[#7F52FF]">Projects</button>
              <button onClick={() => handleNavClick(experienceRef)} className="text-sm hover:text-[#7F52FF]">Experience</button>
              <button onClick={() => handleNavClick(contactRef)} className="text-sm hover:text-[#7F52FF]">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
