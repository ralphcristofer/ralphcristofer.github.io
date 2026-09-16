import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const navigation = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Education', 'education'],
] as const

/** Highlights the nav link for the section currently in view. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}

const sectionIds = [...navigation.map(([, id]) => id), 'contact']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const close = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#home" onClick={close}>
          <span className="brand-mark" aria-hidden="true">RF</span>
          {profile.shortName}
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Primary navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={close} aria-current={active === id ? 'location' : undefined}>
              {label}
            </a>
          ))}
          <a className="button button-small nav-contact" href="#contact" onClick={close}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
