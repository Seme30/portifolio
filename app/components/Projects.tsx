import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Projects.css';

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
  const [imageError, setImageError] = useState(false);
  const firstLetter = title.charAt(0).toUpperCase();

  return (
    <div className="project-card-3d">
      <Link href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="project-image-container">
          <div className="holographic-overlay"></div>
          {!imageError ? (
            <Image 
              src={image} 
              alt={title} 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="project-image"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="project-fallback">
              <span>{firstLetter}</span>
            </div>
          )}
          <div className="image-scan"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-glow"></div>
        </div>
        <div className="card-edges">
          <div className="edge top-left"></div>
          <div className="edge top-right"></div>
          <div className="edge bottom-left"></div>
          <div className="edge bottom-right"></div>
        </div>
      </Link>
    </div>
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

  return (
    <section ref={projectsRef} className="projects-section">
      <h2 className="section-title">
        Projects<span className="title-dot">.</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
