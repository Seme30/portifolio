import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './About.css';

interface AboutProps {
  aboutRef: React.RefObject<HTMLElement>;
}

interface CertificateItemProps {
  href: string;
  title: string;
  date: string;
  tag: string;
}

const CertificateItem: React.FC<CertificateItemProps> = ({ href, title, date, tag }) => {
  return (
    <li className="certificate-item">
      <Link href={href} target="_blank" className="certificate-link">
        <div className="certificate-card">
          <div className="card-glow"></div>
          <span className="certificate-title">{title}</span>
          <p className="certificate-date">{date}</p>
          <span className="certificate-tag">{tag}</span>
        </div>
      </Link>
    </li>
  );
};

const About: React.FC<AboutProps> = ({ aboutRef }) => {
  const [activeTab, setActiveTab] = useState('Personal');

  const tabs = ['Personal', 'Qualifications',];

  const tabContent = {
    Personal: (
      <div className="space-y-4">
        <p className="text-sm md:text-base lg:text-lg">
          I am a Native Android developer with expertise in Kotlin, XML/Jetpack Compose, and MVVM architecture. My skills extend to full-stack web development, where I leverage React and Next.js for creating dynamic and responsive web applications.
        </p>
        <p className="text-sm md:text-base lg:text-lg">
          Passionate about continuous learning, I'm particularly drawn to the fast-paced nature of the tech industry, where each day presents an opportunity to explore new technologies and methodologies.
        </p>
      </div>
    ),
    Qualifications: (
      <ul className="certificates-list">
        <CertificateItem 
          href="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/gebeya.jpg?alt=media&token=c03d92d6-cad7-4897-880c-637e9447ea5d"
          title="Mobile Application Engineering"
          date="Gebeya, Mar 20, 2024"
          tag="MOBILE DEVELOPMENT"
        />
        <CertificateItem
          href="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/Cloud%20Cert_1.jpg?alt=media&token=c8748853-27b5-4628-869b-d820c46a9fe5"
          title="Huawei Cloud Services"
          date="Huawei Ethiopia, 2023"
          tag="CLOUD COMPUTING"
        />
        <CertificateItem 
          href="https://www.linkedin.com/learning/certificates/8d1309e8ad00efe55d8eb1b89c79282c931914de06058fb60d07e574d935a7c3"
          title="Agile Software Development: Code Quality"
          date="LinkedIn, Jan 22, 2024"
          tag="AGILE DEVELOPMENT"
        />
        <CertificateItem 
          href="https://www.linkedin.com/learning/certificates/3dde4a33e8c29e3ebb4b3a865ef2c642db339a2c58cd6928ed1636c746af9ac7"
          title="DevOps Foundations: Continuous Delivery/Continuous Integration"
          date="LinkedIn, Jan, 2024"
          tag="DevOps Engineering"
        />
        <CertificateItem 
          href="https://www.linkedin.com/learning/certificates/ab31d70b767a44b33643c264a6a47ff1246e330322d8ec28454a4c245a81b1db"
          title="Kotlin Essentials Training"
          date="LinkedIn, Jan 23 2024"
          tag="KOTLIN DEVELOPMENT"
        />
      </ul>
    ),
  };

  return (
    <section ref={aboutRef} className="about-section">
      <div className="about-container">
        {/* Left Side - Content */}
        <div className="about-content">
          <h2 className="section-title">
            About Me<span className="title-dot">.</span>
          </h2>
          
          {/* Neon Bars Behind Text */}
          <div className="neon-bars">
            <div className="neon-bar"></div>
            <div className="neon-bar"></div>
            <div className="neon-bar"></div>
          </div>

          {/* Tab Selector */}
          <div className="tab-selector">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
                {activeTab === tab && <div className="tab-indicator"></div>}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className="content-card glass-morph">
            <div className="card-border"></div>
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>

        {/* Right Side - Portrait */}
        <div className="about-portrait">
          <div className="portrait-frame-3d">
            <div className="frame-refraction"></div>
            <div className="portrait-wrapper">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/gemini%20image.jpg?alt=media&token=2a7a1c5d-0fe6-49ae-8c52-a06aa95e31e3"
                alt="About Me Illustration"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="portrait-image"
              />
            </div>
            <div className="portrait-glow"></div>
          </div>
          
          <div className="portrait-label">
            <h3 className="label-title">The Caffeine-Coder</h3>
            <div className="label-line"></div>
            <p className="label-text">
              Fueled by coffee and passion for coding, I turn caffeine into code and ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
