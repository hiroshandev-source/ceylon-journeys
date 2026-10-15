import { useEffect, useState } from 'react'
import Icon from './Icon'
import LanguageSwitcher from './LanguageSwitcher'
import { BUSINESS } from '../config'

const links = [
  ['Home', '#home'],
  ['Destinations', '#destinations'],
  ['Tours', '#tours'],
  ['Experiences', '#experiences'],
  ['Travel Guide', '#guide'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href={`tel:${BUSINESS.phones[0]}`}><Icon name="phone" size={14} /> {BUSINESS.phones[0]}</a>
            <a href={`tel:${BUSINESS.phones[1]}`} className="hide-sm"><Icon name="phone" size={14} /> {BUSINESS.phones[1]}</a>
            <a href={`mailto:${BUSINESS.email}`} className="hide-md"><Icon name="mail" size={14} /> {BUSINESS.email}</a>
          </div>
          <div className="topbar-right">
            <span className="hide-md">English-speaking guides</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="brand" aria-label={BUSINESS.name}>
            <img src={scrolled ? '/logo-blue.png' : '/logo-white.png'} alt={`${BUSINESS.name} logo`} />
          </a>

          <nav className={`nav-links ${open ? 'open' : ''}`}>
            <button className="nav-close" onClick={() => setOpen(false)} aria-label="Close menu"><Icon name="x" size={26} /></button>
            <img src="/logo-blue.png" alt="" className="drawer-logo" />
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <a href="#contact" className="btn btn-accent drawer-cta" onClick={() => setOpen(false)}>Plan My Trip</a>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-accent btn-sm hide-sm">Plan My Trip</a>
            <button className="nav-toggle" onClick={() => setOpen(true)} aria-label="Open menu"><Icon name="menu" size={26} /></button>
          </div>
        </div>
        {open && <div className="backdrop" onClick={() => setOpen(false)} />}
      </header>
    </>
  )
}
