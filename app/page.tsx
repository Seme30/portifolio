"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'


export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        
      <Header
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
        heroRef={heroRef}
        isDarkMode={isDarkMode}
          toggleTheme={toggleTheme} 
        />

        <main className="container mx-auto px-6 pt-24">
          
          <Hero heroRef={heroRef} />
          <About aboutRef={aboutRef} />
          <Skills skillsRef={skillsRef} />
          <Projects projectsRef={projectsRef} />
          <Experience experienceRef={experienceRef} />
          <Contact contactRef={contactRef} />
        </main>

        <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center">
          <p>&copy; 2024 Semahegn Adugna. All rights reserved.</p>
        </footer>

        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Button
            className="bg-[#7F52FF] hover:bg-[#6B44D8] text-white rounded-full p-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ChevronDown className="h-6 w-6 transform rotate-180" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}