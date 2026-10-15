import { useEffect, useState } from 'react'
import Icon from './Icon'
import { BUSINESS } from '../config'
import { destinations, tours } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/logo-white.png" alt={`${BUSINESS.name} logo`} />
          <p>Private, tailor-made Sri Lanka tours with English-speaking chauffeur guides. {BUSINESS.tagline}.</p>
          <div className="socials">
            {Object.entries(BUSINESS.social).map(([k, href]) => (
              <a key={k} href={href} aria-label={k} target="_blank" rel="noreferrer"><Icon name={k} size={18} /></a>
            ))}
          </div>
        </div>

        <div>
          <h4>Top Destinations</h4>
          <ul>
            {destinations.slice(0, 6).map((d) => <li key={d.id}><a href="#destinations">{d.name}</a></li>)}
          </ul>
        </div>

        <div>
          <h4>Our Tours</h4>
          <ul>
            {tours.map((t) => <li key={t.id}><a href="#tours">{t.title}</a></li>)}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li><Icon name="pin" size={18} /> <span>{BUSINESS.address}</span></li>
            {BUSINESS.phones.map((p) => <li key={p}><Icon name="phone" size={18} /> <a href={`tel:${p}`}>{p}</a></li>)}
            <li><Icon name="mail" size={18} /> <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
            <li><Icon name="whatsapp" size={18} /> <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© {year} {BUSINESS.name}. All rights reserved.</span>
          <span className="credit">Created by Hiroshan Madusanka{' '}
            <a href="https://www.hiroshan.online" target="_blank" rel="noreferrer"><b>www.hiroshan.online</b></a>
          </span>
        
        </div>
      </div>
    </footer>
  )
}

export function FloatingButtons() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <>
      <a className="float-wa" href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hello ${BUSINESS.name}! I would like to plan a tour in Sri Lanka.`)}`}
        target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" size={30} />
        <span className="float-label">Chat with us</span>
      </a>
      <button className={`to-top ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        <Icon name="up" size={22} />
      </button>
    </>
  )
}
