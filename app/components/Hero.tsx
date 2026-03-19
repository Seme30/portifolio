import React from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import './Hero.css'

interface HeroProps {
  heroRef: React.RefObject<HTMLElement>
}

const Hero: React.FC<HeroProps> = ({ heroRef }) => {
  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-inner">

        {/* ── Left: Terminal Window ── */}
        <div className="hero-terminal">
          <div className="terminal-panel-header">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
            <span style={{ marginLeft: 8 }}>semahegn@matrix — bash</span>
          </div>
          <div className="terminal-body">
            <p className="t-line t-dim">// initializing connection...</p>
            <br />
            <p className="t-line">
              <span className="t-prompt">$</span>
              <span className="t-cmd"> cat whoami.json</span>
            </p>
            <br />
            <p className="t-line"><span className="t-brace">{'{'}</span></p>
            <p className="t-line t-indent">
              <span className="t-key">&quot;name&quot;</span>
              <span className="t-colon">: </span>
              <span className="t-val">&quot;Semahegn Adugna&quot;</span>
              <span className="t-comma">,</span>
            </p>
            <p className="t-line t-indent">
              <span className="t-key">&quot;role&quot;</span>
              <span className="t-colon">: </span>
              <span className="t-val">&quot;Android + Full Stack Developer&quot;</span>
              <span className="t-comma">,</span>
            </p>
            <p className="t-line t-indent">
              <span className="t-key">&quot;stack&quot;</span>
              <span className="t-colon">: </span>
              <span className="t-bracket">[</span>
              <span className="t-val">&quot;Kotlin&quot;</span>
              <span className="t-comma">, </span>
              <span className="t-val">&quot;React&quot;</span>
              <span className="t-comma">, </span>
              <span className="t-val">&quot;Next.js&quot;</span>
              <span className="t-bracket">]</span>
              <span className="t-comma">,</span>
            </p>
            <p className="t-line t-indent">
              <span className="t-key">&quot;status&quot;</span>
              <span className="t-colon">: </span>
              <span className="t-val">&quot;available_for_hire&quot;</span>
            </p>
            <p className="t-line"><span className="t-brace">{'}'}</span></p>
            <br />
            <p className="t-line">
              <span className="t-prompt">$</span>
              <span className="t-cursor" aria-hidden="true"> </span>
            </p>
          </div>

          {/* CTA buttons */}
          <div className="hero-actions">
            <Link
              href="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/semahegn_adugna_cv.pdf?alt=media&token=ee8aef5f-5931-4b15-8573-de1fa823fdf0"
              target="_blank"
              className="matrix-btn primary"
            >
              <span className="btn-prefix">$</span> ./download_cv.sh
            </Link>
            <Link
              href="https://www.linkedin.com/in/semahegn-adugna/"
              target="_blank"
              className="matrix-btn secondary"
            >
              <span className="btn-prefix">$</span> ./contact.sh
            </Link>
          </div>

          {/* Social links */}
          <div className="hero-social">
            <a href="https://github.com/Seme30" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-link">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/semahegn-adugna/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-link">
              <Linkedin size={18} />
            </a>
            <a href="mailto:semahegn.adugna1@gmail.com" aria-label="Email" className="social-icon-link">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* ── Right: Profile ── */}
        <div className="hero-profile">
          <div className="profile-frame">
            <div className="profile-corners">
              <span className="pc tl" />
              <span className="pc tr" />
              <span className="pc bl" />
              <span className="pc br" />
            </div>
            <div className="profile-scan" aria-hidden="true" />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/profile.png?alt=media&token=962d9be2-7ac3-4834-ad5a-2c4cb21ca010"
              alt="Semahegn Adugna"
              fill
              sizes="(max-width: 640px) 240px, 300px"
              className="profile-img"
              priority
            />
          </div>
          <div className="profile-badge">
            <code>{'<SoftwareEngineer />'}</code>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
