import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  heroRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  experienceRef: React.RefObject<HTMLElement>;
  blogRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  heroRef,
  aboutRef,
  skillsRef,
  projectsRef,
  experienceRef,
  blogRef,
  contactRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

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
    <header className="quantum-header">
      <nav className="quantum-nav">
        <div className="nav-content">
          <div 
            onClick={() => handleNavClick(heroRef)}
            className="quantum-logo"
          >
            {!logoError ? (
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/s-logo.png?alt=media&token=74ed0e58-9e86-4b87-8248-977db588c503"
                alt="logo"
                width={50}
                height={50}
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="logo-fallback">
                <span>S</span>
              </div>
            )}
            <div className="logo-glow"></div>
          </div>
          
          <div className="nav-links">
            <button onClick={() => handleNavClick(aboutRef)} className="nav-link">About</button>
            <button onClick={() => handleNavClick(skillsRef)} className="nav-link">Skills</button>
            <button onClick={() => handleNavClick(projectsRef)} className="nav-link">Projects</button>
            <button onClick={() => handleNavClick(experienceRef)} className="nav-link">Experience</button>
            <button onClick={() => handleNavClick(blogRef)} className="nav-link">Blog</button>
            <button onClick={() => handleNavClick(contactRef)} className="nav-link">Contact</button>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => handleNavClick(aboutRef)} className="mobile-nav-link">About</button>
            <button onClick={() => handleNavClick(skillsRef)} className="mobile-nav-link">Skills</button>
            <button onClick={() => handleNavClick(projectsRef)} className="mobile-nav-link">Projects</button>
            <button onClick={() => handleNavClick(experienceRef)} className="mobile-nav-link">Experience</button>
            <button onClick={() => handleNavClick(blogRef)} className="mobile-nav-link">Blog</button>
            <button onClick={() => handleNavClick(contactRef)} className="mobile-nav-link">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
