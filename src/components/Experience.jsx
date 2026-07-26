import { motion } from 'framer-motion'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { experience } from '../data/portfolio.js'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" aria-label="Work experience">
      <div className="container">
        <div className="section-head">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            ./experience
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Work Experience
          </motion.h2>
        </div>

        <div className="experience__list">
          {experience.map((role, index) => (
            <motion.article
              key={role.title + role.company}
              className="glass experience__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="experience__icon" aria-hidden="true">
                <HiOutlineBriefcase size={22} />
              </div>

              <div className="experience__content">
                <div className="experience__meta">
                  <h3 className="experience__title">{role.title}</h3>
                  <span className="experience__duration">{role.duration}</span>
                </div>
                <p className="experience__company">{role.company}</p>

                <ul className="experience__responsibilities">
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
