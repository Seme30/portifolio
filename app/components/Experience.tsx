import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import Link from 'next/link';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={experienceRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-16 sm:py-20 md:py-24 lg:py-32 lg:px-8 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-[#7F52FF]">Work Experience</h2>
      <div className="space-y-12">
        {jobs.map((job, index) => (
          <motion.div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            variants={itemVariants}
          >
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">{job.role}</h3>
                  <p className="text-[#7F52FF] text-lg font-semibold flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    {job.company}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {job.period}
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
              <motion.button 
                className="text-[#7F52FF] font-medium hover:underline focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={job.link} target="_blank">Learn More</Link>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
