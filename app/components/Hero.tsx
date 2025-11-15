import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

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
    <motion.section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-12 sm:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-[#7F52FF]">Semahegn Adugna</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-6 text-gray-600 dark:text-gray-300">
              Android Developer | Full Stack Web Developer
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Button className="bg-[#7F52FF] hover:bg-[#6B44D8] text-white">
                <Link href="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/New%20Seme%20CV.pdf?alt=media&token=aa77ab5d-61e7-4897-95c6-219547ff2a8b" target="_blank">
                Download CV
              </Link>
              </Button>
              <Button variant="outline">
                <Link href="https://www.linkedin.com/in/semahegn-adugna/" target="_blank">
                Contact Me
              </Link>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#7F52FF] dark:hover:text-[#7F52FF]"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/profile.png?alt=media&token=962d9be2-7ac3-4834-ad5a-2c4cb21ca010"
                alt="Semahegn Adugna"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                className="rounded-full shadow-2xl object-cover"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
                <code className="text-[#7F52FF] font-semibold">{"<Software Engineer/>"}</code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
