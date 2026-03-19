import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void
  heroRef:       React.RefObject<HTMLElement>
  aboutRef:      React.RefObject<HTMLElement>
  skillsRef:     React.RefObject<HTMLElement>
  projectsRef:   React.RefObject<HTMLElement>
  experienceRef: React.RefObject<HTMLElement>
  blogRef:       React.RefObject<HTMLElement>
  contactRef:    React.RefObject<HTMLElement>
}

const NAV_ITEMS = [
  { label: 'about',      key: 'aboutRef'      },
  { label: 'skills',     key: 'skillsRef'     },
  { label: 'projects',   key: 'projectsRef'   },
  { label: 'experience', key: 'experienceRef' },
  { label: 'blog',       key: 'blogRef'       },
  { label: 'contact',    key: 'contactRef'    },
] as const

type NavKey = typeof NAV_ITEMS[number]['key']

const Header: React.FC<HeaderProps> = ({ scrollToSection, heroRef, ...refs }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const refMap: Record<NavKey, React.RefObject<HTMLElement>> = refs as unknown as Record<NavKey, React.RefObject<HTMLElement>>

  useEffect(() => {
    const onScroll  = () => setScrolled(window.scrollY > 20)
    const onResize  = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  const handleNav = (ref: React.RefObject<HTMLElement>) => {
    scrollToSection(ref)
    setMenuOpen(false)
  }

  return (
    <header className={`matrix-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="matrix-nav">
        <button
          className="nav-logo"
          onClick={() => scrollToSection(heroRef)}
          aria-label="Go to top"
        >
          <span className="logo-bracket">[</span>
          <span className="logo-name">semahegn@dev</span>
          <span className="logo-bracket">]</span>
          <span className="logo-prompt">:~$</span>
        </button>

        <div className="nav-links">
          {NAV_ITEMS.map(({ label, key }) => (
            <button
              key={key}
              onClick={() => handleNav(refMap[key])}
              className="nav-link"
            >
              <span className="nav-dot">./</span>{label}
            </button>
          ))}
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map(({ label, key }) => (
            <button
              key={key}
              onClick={() => handleNav(refMap[key])}
              className="mobile-nav-link"
            >
              <span className="prompt-symbol">$</span> ./{label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
