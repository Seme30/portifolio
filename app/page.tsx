"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Blog from './components/Blog'
import ContactForm from './components/ContactForm'
import './quantum.css'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const blogRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="quantum-realm">
      {/* Deep Space Background with Parallax Starfields */}
      <div className="quantum-background">
        <div className="starfield starfield-1"></div>
        <div className="starfield starfield-2"></div>
        <div className="starfield starfield-3"></div>
        <div className="quantum-fog"></div>
      </div>

      <Header
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        blogRef={blogRef}
        contactRef={contactRef}
        heroRef={heroRef}
      />

      <main className="quantum-perspective">
        <Hero heroRef={heroRef} />
        <About aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        <Experience experienceRef={experienceRef} />
        <Blog blogRef={blogRef} />
        <ContactForm contactRef={contactRef} />
      </main>

      <footer className="quantum-footer">
        <div className="footer-content">
          <div className="footer-line"></div>
          <p>&copy; 2025 Semahegn Adugna. All rights reserved.</p>
          <p className="footer-subtitle">Crafted in the Quantum Realm</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}