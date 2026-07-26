import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Summary from './components/Summary.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import AuroraBackdrop from './components/AuroraBackdrop.jsx'
import { useTheme } from './hooks/useTheme.js'

const Experience = lazy(() => import('./components/Experience.jsx'))
const Projects = lazy(() => import('./components/Projects.jsx'))
const Skills = lazy(() => import('./components/Skills.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />
}

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app-shell">
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <AuroraBackdrop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Summary />
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
