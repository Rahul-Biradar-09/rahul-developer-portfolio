import { HiSun, HiMoon } from 'react-icons/hi'
import './ThemeToggle.css'

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
    </button>
  )
}
