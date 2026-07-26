import { motion } from 'framer-motion'
import { projects } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" aria-label="Professional projects">
      <div className="container">
        <div className="section-head">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            ./projects
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Professional Projects
          </motion.h2>
          <p className="section-subtext">
            Built and maintained enterprise applications across ERP, Healthcare, and Education domains.          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
