import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import Link from 'next/link';
import './Experience.css';

interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
  link: string;
}

interface ExperienceProps {
  experienceRef: React.RefObject<HTMLElement>;
}

const Experience: React.FC<ExperienceProps> = ({ experienceRef }) => {
  const jobs: Job[] = [
    { 
      role: 'Remote Full-stack Developer', 
      company: 'The Bible House', 
      period: 'Feb 2025 - Present', 
      description: 'Contributing to key initiatives including web-to-SMS communication platforms, Ruby-based online store, self-hosted AI integration, advanced data scraping, multi-language web applications, and machine learning models for data preprocessing and feature extraction.',
      link: 'https://bible.house/'
    },
    { 
      role: 'Android Developer', 
      company: 'E-Hive: Developers on Demand', 
      period: 'Jan 2024 - Present', 
      description: 'Development and maintenance of Clex Key mobile application on Google Play Store, implementing features and ensuring optimal performance.',
      link: 'https://www.ehive.it.com/'
    },
    { 
      role: 'Mobile App Engineer Intern', 
      company: 'Safaricom Telecommunications Ethiopia', 
      period: 'Apr 2024 - Jun 2024', 
      link: 'https://safaricom.et/',
      description: 'Participated in E-KYC project development, a mobile application enabling users to verify their identity through their mobile phones.' 
    },
    { 
      role: 'Remote Front-End Developer', 
      company: 'The Bible House', 
      period: 'Jul 2023 - Nov 2023', 
      description: 'Developed and maintained web applications using modern frontend technologies including React, Next.js, and Tailwind CSS.',
      link: 'https://bible.house/'
    },
  ];

  return (
    <section ref={experienceRef} className="experience-section">
      <h2 className="section-title">
        Work Experience<span className="title-dot">.</span>
      </h2>
      
      {/* Quantum Entanglement Graph */}
      <div className="quantum-timeline">
        {jobs.map((job, index) => (
          <div key={index} className="experience-node">
            {/* Connecting Beam */}
            {index < jobs.length - 1 && <div className="quantum-beam"></div>}
            
            {/* Node Pulse */}
            <div className="node-pulse">
              <div className="pulse-ring"></div>
              <div className="pulse-core"></div>
            </div>
            
            {/* Experience Card */}
            <div className="experience-card glass-morph">
              <div className="card-glow-border"></div>
              <div className="card-content">
                <div className="card-header">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <p className="job-company">
                      <Briefcase className="icon" />
                      {job.company}
                    </p>
                  </div>
                  <p className="job-period">
                    <Calendar className="icon" />
                    {job.period}
                  </p>
                </div>
                <p className="job-description">{job.description}</p>
                <Link href={job.link} target="_blank" className="learn-more-link">
                  Learn More
                  <div className="link-arrow">→</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
