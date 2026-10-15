import { useEffect, useState } from 'react'
import Icon from './Icon'
import { BUSINESS } from '../config'
import { destinations, regions, tours, experiences, whyUs, steps, gallery, tips } from '../data'

function SectionHead({ eyebrow, title, text, light }) {
  return (
    <div className={`section-head reveal ${light ? 'light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Modal({ onClose, children, wide }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])
  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className={`modal-box ${wide ? 'wide' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
        {children}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <img src="/images/little-adams.jpg" alt="View from Little Adam's Peak, Ella" className="about-img-1" loading="lazy" />
          <img src="/images/stilt.jpg" alt="Stilt fishermen near Galle" className="about-img-2" loading="lazy" />
          <div className="about-badge">
            <img src="/logo-white.png" alt="" />
          </div>
        </div>
        <div className="about-text reveal">
          <span className="eyebrow">Welcome to {BUSINESS.name}</span>
          <h2>Discover the Pearl of the Indian Ocean</h2>
          <p>
            Sri Lanka packs an incredible variety into one small island – ancient cities and sacred temples,
            misty tea-covered mountains, wild national parks and more than 1,300 km of golden coastline.
          </p>
          <p>
            At <strong>{BUSINESS.name}</strong>, we are a local travel company based in Panadura. We design
            private, tailor-made tours with comfortable vehicles and friendly chauffeur guides who speak
            <strong> English</strong>, so you can relax and simply enjoy the journey.
          </p>
          <ul className="check-list">
            <li><Icon name="check" size={18} /> Private tours designed around you</li>
            <li><Icon name="check" size={18} /> Airport pick-up &amp; drop-off</li>
            <li><Icon name="check" size={18} /> Hand-picked hotels for every budget</li>
            <li><Icon name="check" size={18} /> Day tours, round tours &amp; transfers</li>
          </ul>
          <div className="about-ctas">
            <a href="#contact" className="btn btn-primary">Start Planning <Icon name="arrow" size={18} /></a>
            <a href={`tel:${BUSINESS.phones[0]}`} className="call-link">
              <span className="call-icon"><Icon name="phone" size={18} /></span>
              <span><small>Call us anytime</small>{BUSINESS.phones[0]}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Destinations({ onEnquire }) {
  const [region, setRegion] = useState('All')
  const [active, setActive] = useState(null)
  const list = region === 'All' ? destinations : destinations.filter((d) => d.region === region)

  return (
    <section id="destinations" className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="Popular Places" title="Beautiful Destinations in Sri Lanka"
          text="From the Cultural Triangle to the sunny southern beaches – explore the island’s most loved locations." />

        <div className="filters reveal" role="tablist">
          {regions.map((r) => (
            <button key={r} className={r === region ? 'active' : ''} onClick={() => setRegion(r)} role="tab" aria-selected={r === region}>{r}</button>
          ))}
        </div>

        <div className="dest-grid">
          {list.map((d) => (
            <article key={d.id} className="dest-card" onClick={() => setActive(d)} tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(d)}>
              <img src={d.image} alt={d.name} loading="lazy" />
              <div className="dest-info">
                <span className="chip">{d.region}</span>
                <h3>{d.name}</h3>
                <p>{d.short}</p>
                <span className="more">Discover <Icon name="arrow" size={16} /></span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <Modal onClose={() => setActive(null)} wide>
          <div className="dest-modal">
            <img src={active.image} alt={active.name} />
            <div className="dest-modal-body">
              <span className="chip">{active.region}</span>
              <h3>{active.name}</h3>
              <p>{active.description}</p>
              <h4>Highlights</h4>
              <ul className="check-list two">
                {active.highlights.map((h) => <li key={h}><Icon name="check" size={16} /> {h}</li>)}
              </ul>
              <p className="best"><Icon name="sun" size={18} /> Best time to visit: <strong>{active.best}</strong></p>
              <button className="btn btn-accent" onClick={() => { onEnquire(active.name); setActive(null) }}>
                Enquire about {active.name} <Icon name="arrow" size={18} />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

export function Tours({ onEnquire }) {
  return (
    <section id="tours" className="section">
      <div className="container">
        <SectionHead eyebrow="Tour Packages" title="Handcrafted Sri Lanka Tours"
          text="Choose a ready-made journey or let us customise any tour to match your dates, interests and budget." />
        <div className="tour-grid">
          {tours.map((t) => (
            <article key={t.id} className="tour-card reveal">
              <div className="tour-media">
                <img src={t.image} alt={t.title} loading="lazy" />
                <span className="tour-tag">{t.tag}</span>
                <span className="tour-days"><Icon name="calendar" size={14} /> {t.days} Days / {t.days - 1} Nights</span>
              </div>
              <div className="tour-body">
                <h3>{t.title}</h3>
                <p className="route"><Icon name="route" size={16} /> {t.route.join(' → ')}</p>
                <ul className="check-list small">
                  {t.includes.map((x) => <li key={x}><Icon name="check" size={15} /> {x}</li>)}
                </ul>
                <div className="tour-foot">
                  <span className="price">Price on request</span>
                  <button className="btn btn-primary btn-sm" onClick={() => onEnquire(t.title)}>Book Now</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experiences() {
  return (
    <section id="experiences" className="section experiences" style={{ backgroundImage: 'url(/images/tea-picking.jpg)' }}>
      <div className="exp-overlay" />
      <div className="container rel">
        <SectionHead light eyebrow="Things To Do" title="Unforgettable Experiences"
          text="Adventure, culture, nature and relaxation – Sri Lanka has something for every traveller." />
        <div className="exp-grid">
          {experiences.map((e) => (
            <div key={e.title} className="exp-card reveal">
              <span className="exp-icon"><Icon name={e.icon} size={28} /></span>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyUs() {
  return (
    <section id="why" className="section">
      <div className="container why-grid">
        <div className="why-intro reveal">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Your Trusted Travel Partner in Sri Lanka</h2>
          <p>We are locals who love sharing our island. Every journey is personal, safe and full of authentic experiences.</p>
          <img src="/images/kandy-view.jpg" alt="Kandy city and lake" loading="lazy" />
        </div>
        <div className="why-cards">
          {whyUs.map((w) => (
            <div key={w.title} className="why-card reveal">
              <span className="why-icon"><Icon name={w.icon} size={26} /></span>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container steps reveal">
        {steps.map((s) => (
          <div key={s.n} className="step">
            <span className="step-n">{s.n}</span>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Guide() {
  return (
    <section id="guide" className="section section-alt">
      <div className="container">
        <SectionHead eyebrow="Travel Guide" title="Helpful Tips for Your Trip"
          text="Read our travel guidance before you arrive in Sri Lanka." />
        <div className="tips-grid">
          {tips.map((t) => (
            <div key={t.title} className="tip-card reveal">
              <span className="tip-icon"><Icon name={t.icon} size={24} /></span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  const [idx, setIdx] = useState(null)
  const n = gallery.length
  return (
    <section id="gallery" className="section">
      <div className="container">
        <SectionHead eyebrow="Gallery" title="Moments from Paradise" text="A glimpse of the beauty waiting for you in Sri Lanka." />
        <div className="gallery-grid">
          {gallery.map((g, i) => (
            <button key={g.image} className={`g-item g-${i}`} onClick={() => setIdx(i)} aria-label={`Open ${g.caption}`}>
              <img src={g.image} alt={g.caption} loading="lazy" />
              <span className="g-cap"><Icon name="zoom" size={18} /> {g.caption}</span>
            </button>
          ))}
        </div>
      </div>
      {idx !== null && (
        <Modal onClose={() => setIdx(null)} wide>
          <figure className="lightbox">
            <img src={gallery[idx].image} alt={gallery[idx].caption} />
            <figcaption>{gallery[idx].caption}</figcaption>
            <button className="lb-nav prev" onClick={() => setIdx((idx - 1 + n) % n)} aria-label="Previous"><Icon name="chevL" size={28} /></button>
            <button className="lb-nav next" onClick={() => setIdx((idx + 1) % n)} aria-label="Next"><Icon name="chevR" size={28} /></button>
          </figure>
        </Modal>
      )}
    </section>
  )
}

export function CtaBanner() {
  return (
    <section className="cta-banner" style={{ backgroundImage: 'url(/images/train.jpg)' }}>
      <div className="cta-overlay" />
      <div className="container cta-inner reveal">
        <div>
          <h2>Ready for Your Sri Lankan Adventure?</h2>
          <p>Talk to our travel experts today – we reply within minutes on WhatsApp.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-whatsapp" href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={20} /> Chat on WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${BUSINESS.phones[0]}`}><Icon name="phone" size={18} /> Call Now</a>
        </div>
      </div>
    </section>
  )
}
