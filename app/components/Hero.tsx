import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import './Hero.css';

interface HeroProps {
  heroRef: React.RefObject<HTMLElement>;
}

const Hero: React.FC<HeroProps> = ({ heroRef }) => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Seme30', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/semahegn-adugna/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:semahegn.adugna1@gmail.com', label: 'Email' },
  ];

  return (
    <section ref={heroRef} className="hero-section">
      {/* Quantum Ring */}
      <div className="quantum-ring-container">
        <div className="quantum-ring">
          <div className="ring-inner"></div>
          <div className="ring-outer"></div>
          <div className="ring-glow"></div>
        </div>
      </div>

      {/* Particle Field */}
      <div className="particle-field">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="quantum-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-text">
            <div className="title-container">
              <h1 className="hero-title">
                Hi, I'm <span className="name-highlight">Semahegn Adugna</span>
              </h1>
              <div className="title-glow"></div>
            </div>

            <p className="hero-subtitle">
              <span className="subtitle-line">Android Developer</span>
              <span className="subtitle-divider">|</span>
              <span className="subtitle-line">Full Stack Web Developer</span>
            </p>

            <div className="hero-actions">
              <Link
                href="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/New%20Seme%20CV.pdf?alt=media&token=aa77ab5d-61e7-4897-95c6-219547ff2a8b"
                target="_blank"
                className="quantum-button primary"
              >
                <span>Download CV</span>
                <div className="button-glow"></div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/semahegn-adugna/"
                target="_blank"
                className="quantum-button secondary"
              >
                <span>Contact Me</span>
                <div className="button-glow"></div>
              </Link>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  <link.icon className="social-icon" />
                  <div className="social-glow"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="hero-image-container">
            <div className="profile-frame">
              <div className="frame-border"></div>
              <div className="frame-corners">
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
              </div>
              <div className="profile-image-wrapper">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/profile.png?alt=media&token=962d9be2-7ac3-4834-ad5a-2c4cb21ca010"
                  alt="Semahegn Adugna"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  className="profile-image"
                  priority
                />
              </div>
              <div className="profile-glow"></div>
            </div>
            <div className="code-badge">
              <code>{"<Software Engineer/>"}</code>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Waves */}
      <div className="energy-waves">
        <div className="energy-wave"></div>
        <div className="energy-wave"></div>
        <div className="energy-wave"></div>
      </div>
    </section>
  );
};

export default Hero;
