import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface ContactProps {
  contactRef: React.RefObject<HTMLElement>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Seme30', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/semahegn-adugna/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:semahegn.adugna1@gmail.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      ref={contactRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-[#7F52FF]">Contact Me</h2>
      <p className="text-base sm:text-lg mb-8 text-gray-700 dark:text-gray-300">
        Feel free to reach out to me through any of the following platforms:
      </p>
      <motion.div 
        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10"
        variants={containerVariants}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <link.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#7F52FF]" />
            </div>
            <span className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 group-hover:text-[#7F52FF] transition-colors duration-300">
              {link.label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
