import { motion } from 'framer-motion'
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineCog,
  HiOutlineLightBulb,
} from 'react-icons/hi'
import { skills } from '../data/portfolio.js'
import './Skills.css'

const icons = {
  Frontend: HiOutlineCode,
  Backend: HiOutlineServer,
  Database: HiOutlineDatabase,
  Tools: HiOutlineCog,
  Concepts: HiOutlineLightBulb,
}

export default function Skills() {
  return (
    <section id="skills" aria-label="Technical skills">
      <div className="container">
        <div className="section-head">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            ./skills
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Technical Skills
          </motion.h2>
        </div>

        <div className="skills__grid">
          {skills.map((group, index) => {
            const Icon = icons[group.category] ?? HiOutlineCode
            return (
              <motion.div
                key={group.category}
                className="glass skills__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                <div className="skills__card-header">
                  <span className="skills__icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <h3 className="skills__category">{group.category}</h3>
                </div>
                <ul className="skills__items">
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
