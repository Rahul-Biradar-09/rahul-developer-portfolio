import { motion } from 'framer-motion'
import { summary, personal } from '../data/portfolio.js'
import './Summary.css'

export default function Summary() {
  return (
    <section id="summary" aria-label="Professional summary">
      <div className="container">
        <motion.div
          className="glass summary__card"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">./About Me</p>

          <div className="summary__grid">
            <h2 className="section-heading summary__heading">About Me</h2>

            <div className="summary__body">
              <p className="summary__text">{summary}</p>

              <ul className="summary__highlights">
                {personal.aboutHighlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
