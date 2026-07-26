import { motion } from 'framer-motion'
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineDownload,
} from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { contact } from '../data/portfolio.js'
import './Contact.css'

const cards = [
  {
    key: 'phone',
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phone}`,
    icon: HiOutlinePhone,
  },
  {
    key: 'email',
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: HiOutlineMail,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: 'rahulbiradar',
    href: contact.linkedin,
    icon: FaLinkedinIn,
    external: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    value: 'Rahul-Biradar-09',
    href: contact.github,
    icon: FaGithub,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact">
      <div className="container">
        <motion.div
          className="glass contact__card-wrap"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-head contact__head">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>
              ./contact
            </p>
            <h2 className="section-heading">Let's Connect</h2>
            <p className="section-subtext contact__subtext">
             I'm currently open to full-time opportunities and freelance collaborations. Whether you have a project in mind, a job opportunity, or simply want to connect, feel free to reach out. I'd be happy to hear from you.
            </p>
          </div>

          <div className="contact__grid">
            {cards.map(({ key, label, value, href, icon: Icon, external }, index) => (
              <motion.a
                key={key}
                href={href}
                className="contact__link"
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
              >
                <span className="contact__icon" aria-hidden="true">
                  <Icon size={19} />
                </span>
                <span className="contact__text">
                  <span className="contact__label">{label}</span>
                  <span className="contact__value">{value}</span>
                </span>
              </motion.a>
            ))}
          </div>

          <div className="contact__cta">
            <a href="/Rahul_Biradar_Full_Stack_Developer.pdf" className="btn btn-primary" download>
              <HiOutlineDownload size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
