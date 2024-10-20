import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    <motion.li
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={href} target="_blank">
        <motion.div 
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ y: -5 }}
        >
          <motion.span 
            className="font-medium block mb-1"
            whileHover={{ color: "#7F52FF" }}
          >
            {title}
          </motion.span>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2">{date}</p>
          <span className="inline-block bg-[#7F52FF] text-white text-xs px-2 py-1 rounded-full">{tag}</span>
        </motion.div>
      </Link>
    </motion.li>
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
      <motion.ul 
        className="space-y-2"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
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
      </motion.ul>
    ),
  };

  return (
    <motion.section
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 lg:py-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-[#7F52FF]">About Me.</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-8">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-[#7F52FF] text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-center ">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-6 overflow-hidden rounded-full shadow-xl">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/gemini%20image.jpg?alt=media&token=2f7679c5-ad19-4852-b568-10871dce6e98"
              alt="About Me Illustration"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#7F52FF] text-center">
            The Caffeine-Coder
          </h2>
          <div className="w-16 h-1 bg-[#7F52FF] rounded-full mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center max-w-md">
            Fueled by coffee and passion for coding, I turn caffeine into code and ideas into reality.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
