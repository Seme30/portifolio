"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Blog from './components/Blog'
import ContactForm from './components/ContactForm'
import './quantum.css'

const MatrixRain = dynamic(() => import('./components/MatrixRain'), { ssr: false })

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const heroRef       = useRef<HTMLElement>(null)
  const aboutRef      = useRef<HTMLElement>(null)
  const skillsRef     = useRef<HTMLElement>(null)
  const projectsRef   = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const blogRef       = useRef<HTMLElement>(null)
  const contactRef    = useRef<HTMLElement>(null)

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  const scrollToSection = (ref: React.RefObject<HTMLElement>) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="matrix-realm">
      <MatrixRain />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header
          scrollToSection={scrollToSection}
          heroRef={heroRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          experienceRef={experienceRef}
          blogRef={blogRef}
          contactRef={contactRef}
        />

        <main>
          <Hero       heroRef={heroRef} />
          <About      aboutRef={aboutRef} />
          <Skills     skillsRef={skillsRef} />
          <Projects   projectsRef={projectsRef} />
          <Experience experienceRef={experienceRef} />
          <Blog       blogRef={blogRef} />
          <ContactForm contactRef={contactRef} />
        </main>

        <footer className="matrix-footer">
          <div className="footer-content">
            <div className="footer-line" />
            <p>// semahegn.com — built in the terminal</p>
            <p>&copy; 2025 Semahegn Adugna. MIT Licensed.</p>
            <nav className="footer-links">
              <a href="https://fideldoc.semahegn.com" target="_blank" rel="noopener noreferrer">FidelDoc</a>
              <a href="https://github.com/Seme30" target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>
          </div>
        </footer>

        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
