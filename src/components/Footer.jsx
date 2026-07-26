import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { personal, contact, navLinks } from '../data/portfolio.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__brand-mark" aria-hidden="true">
              <span className="footer__brand-bracket">&lt;</span>
              RB
              <span className="footer__brand-bracket">/&gt;</span>
            </span>
            <div>
              <p className="footer__name">{personal.name}</p>
              <p className="footer__role">{personal.role}</p>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn size={17} />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub profile"
            >
              <FaGithub size={17} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="btn-icon"
              aria-label="Send email"
            >
              <HiOutlineMail size={17} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p>Built with React &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}
