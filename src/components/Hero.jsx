import { motion } from 'framer-motion'
import {
  HiOutlineDownload,
  HiOutlineMail,
  HiOutlineViewGrid,
  HiOutlineChartBar,
  HiOutlineOfficeBuilding,
  HiOutlineCloudUpload,
  HiOutlineCode,
  HiOutlineUserGroup,
  HiChevronDown,
} from 'react-icons/hi'
import { personal, heroTechStack, heroIntro, heroHighlights } from '../data/portfolio.js'
import './Hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

const highlightIcons = {
  'Enterprise Applications': HiOutlineOfficeBuilding,
  'Admin Panels': HiOutlineViewGrid,
  'ERP Systems': HiOutlineChartBar,
  'REST APIs': HiOutlineCode,
  'Production Deployments': HiOutlineCloudUpload,
}

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="container hero__container">
        <motion.div
          className="glass hero__card"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="eyebrow hero__eyebrow"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            available for new opportunities
          </motion.p>

          <motion.h1
            className="hero__name"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            Hi, I'm <span className="text-gradient">{personal.name}</span>
          </motion.h1>

          <motion.p
            className="hero__role"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            <span>{personal.role}</span>
            <span className="hero__divider" aria-hidden="true">·</span>
            <span>{personal.experienceBadge}</span>
          </motion.p>

          <motion.p
            className="hero__intro"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            {heroIntro}
          </motion.p>

          <motion.ul
            className="hero__stack"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            aria-label="Core tech stack"
          >
            {heroTechStack.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </motion.ul>

          <motion.ul
            className="hero__highlights"
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
            aria-label="Professional highlights"
          >
            {heroHighlights.map((item) => {
              const Icon = highlightIcons[item] ?? HiOutlineCode
              return (
                <li key={item} className="hero__highlight">
                  <Icon size={16} />
                  <span>{item}</span>
                </li>
              )
            })}
          </motion.ul>

          <motion.div
            className="hero__actions"
            initial="hidden"
            animate="visible"
            custom={6}
            variants={fadeUp}
          >
            <a href="/resume.pdf" className="btn btn-primary" download>
              <HiOutlineDownload size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              <HiOutlineMail size={18} />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#summary"
          className="hero__scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Scroll to explore my work"
        >
          <span className="hero__scroll-label">Scroll to explore my work</span>
          <span className="hero__scroll-icon" aria-hidden="true">
            <HiChevronDown size={20} />
          </span>
        </motion.a>
      </div>
    </section>
  )
}
