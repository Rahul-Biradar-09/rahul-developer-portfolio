import { motion } from 'framer-motion'
import './ProjectCard.css'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="glass project-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="project-card__header">
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
      </div>

      <p className="project-card__description">{project.description}</p>

      <div className="project-card__block">
        <h4 className="project-card__label">Responsibilities</h4>
        <ul className="project-card__responsibilities">
          {project.responsibilities.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-card__block">
        <h4 className="project-card__label">Tech Stack</h4>
        <ul className="project-card__stack">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
