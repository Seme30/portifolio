import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLElement>;
}

const ProjectItem: React.FC<Project> = ({ title, description, image, link }) => {
  return (
    <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.2 }} >
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image 
            src={image} 
            alt={title} 
            layout="fill" 
            objectFit="cover"
          />
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        />
      </div>
      <motion.div 
        className="p-4 sm:p-6 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{description}</p>
      </motion.div>
    </Link>
  </motion.div>
);
};


const Projects: React.FC<ProjectsProps> = ({ projectsRef }) => {
  const projects: Project[] = [
    {
      title: "SEcom",
      description: "This Android application is built using Kotlin and Jetpack Compose. The app focuses on a clean and intuitive user interface, clean architecture, and efficient UI state handling. Features include product browsing, product details, category filtering, dark mode support, and user authentication using Firebase.",
      link: "https://github.com/Seme30/S-Ecom/releases/download/v1.0.0/S-Ecom.apk",
      image: "https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/logo.png?alt=media&token=2762109c-c9f7-46b3-8e4d-3626c6ae8087"
    },
    { title: 'AI-Powered Budget Planner', description: 'A native Android application designed to help users take control of their finances. It provides a simple and intuitive way to track spending, set budgets, and gain insights into your financial habits using Gemini API.', link: "https://github.com/Seme30/BudgetBuddy", image: "https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/budget-buddy.png?alt=media&token=7bad6597-9fc5-4f74-a9f6-a05c4ce04593" },
    { title: 'AI-Powered Plant Disease Detection', description: 'An Android application built using Flutter and TensorFlow Lite that uses machine learning to detect plant diseases. It provides a simple and intuitive way to take a photo of a plant and get a diagnosis specific to the Tomato plant. The app uses TensorFlow Lite for the machine learning model and Firebase for the backend.', link: 'https://t.me/tomato_detector', image: 'https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/photo_2023-06-25_14-51-59.jpg?alt=media&token=1c60b224-eca0-446d-8d1f-f4f4921aefec' },
    { title: 'Chatbot App', description: 'An Android application built using Kotlin and Gemini API that lets it\'s users chat with Google\'s Gemini model.', link: 'https://github.com/Seme30/Gemini_Chat', image: 'https://play-lh.googleusercontent.com/dT-r_1Z9hUcif7CDSD5zOdOt4KodaGdtkbGszT6WPTqKQ-WxWxOepO6VX-B3YL290ydD=w240-h480-rw' },
   { title: 'Fendisha', description: 'A modern, responsive React website crafted for a cutting-edge digital agency. This dynamic web application showcases the agency\'s services, portfolio, and expertise in a visually compelling manner', link: 'https://fendisha-tech.pages.dev/', image: 'https://fendisha-tech.pages.dev/static/media/Fendisha-light.1c0a10a204183b26efbc.png' }, ];

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
      ref={projectsRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-[#7F52FF]">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            variants={itemVariants}
          >
            <ProjectItem {...project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
