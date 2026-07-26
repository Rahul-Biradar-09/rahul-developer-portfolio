import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks, personal } from '../data/portfolio.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import ThemeToggle from './ThemeToggle.jsx'
import './Navbar.css'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [manualId, setManualId] = useState(null)
  const manualTimeout = useRef(null)
  const observedId = useActiveSection(sectionIds)
  const activeId = manualId ?? observedId

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => () => window.clearTimeout(manualTimeout.current), [])

  const handleLinkClick = (id) => {
    setIsOpen(false)
    setManualId(id)
    window.clearTimeout(manualTimeout.current)
    manualTimeout.current = window.setTimeout(() => setManualId(null), 900)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => handleLinkClick('home')}>
          <span className="navbar__brand-mark" aria-hidden="true">
            <span className="navbar__brand-bracket">&lt;</span>
            RB
            <span className="navbar__brand-bracket">&gt;</span>
          </span>
          <span className="navbar__brand-name">{personal.name}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="navbar__underline"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            type="button"
            className="navbar__hamburger"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="navbar__mobile"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`navbar__mobile-link ${activeId === link.id ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
