import { useEffect, useRef, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])
  // Persistent map of every observed section's last-known intersection ratio.
  // IntersectionObserver callbacks only report elements whose ratio changed
  // since the previous callback, not the full observed set — so the "most
  // visible section" must be recomputed from this accumulated state on every
  // callback, not from the partial `entries` array alone.
  const ratios = useRef(new Map(sectionIds.map((id) => [id, 0])))

  useEffect(() => {
    let observer = null
    let mutationObserver = null

    const handleEntries = (entries) => {
      entries.forEach((entry) => {
        ratios.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
      })

      let bestId = null
      let bestRatio = 0
      ratios.current.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio
          bestId = id
        }
      })

      if (bestId) {
        setActiveId(bestId)
        return
      }

      // Nothing is intersecting the observed band right now (e.g. between
      // sections during a fast scroll) — fall back to whichever known
      // section sits closest to the top of the viewport so the link never
      // freezes on a stale value.
      const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
      if (elements.length === 0) return
      const closest = elements.reduce((closestEl, el) => {
        const rect = el.getBoundingClientRect()
        const closestRect = closestEl.getBoundingClientRect()
        return Math.abs(rect.top) < Math.abs(closestRect.top) ? el : closestEl
      })
      setActiveId(closest.id)
    }

    // Sections rendered behind React.lazy()/Suspense (Experience, Projects,
    // Skills, Contact) don't exist in the DOM yet when this effect first
    // runs on mount, so document.getElementById() would miss them and the
    // observer would permanently watch only the eagerly-rendered sections.
    // Wait until every target id actually resolves to an element before
    // attaching the IntersectionObserver.
    const trySetup = () => {
      const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
      if (elements.length !== sectionIds.length) return false

      ratios.current = new Map(sectionIds.map((id) => [id, 0]))
      observer = new IntersectionObserver(handleEntries, {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      })
      elements.forEach((el) => observer.observe(el))
      return true
    }

    if (!trySetup()) {
      mutationObserver = new MutationObserver(() => {
        if (trySetup() && mutationObserver) {
          mutationObserver.disconnect()
          mutationObserver = null
        }
      })
      mutationObserver.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      observer?.disconnect()
      mutationObserver?.disconnect()
    }
  }, [sectionIds])

  return activeId
}
