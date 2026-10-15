import { useEffect, useState } from 'react'
import Icon from './Icon'
import { heroSlides, destinations, stats } from '../data'

export default function Hero({ onEnquire }) {
  const [i, setI] = useState(0)
  const [dest, setDest] = useState('')
  const n = heroSlides.length

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 6500)
    return () => clearInterval(t)
  }, [i, n])

  const slide = heroSlides[i]

  return (
    <section id="home" className="hero">
      {heroSlides.map((s, idx) => (
        <div key={s.image} className={`hero-bg ${idx === i ? 'active' : ''}`} style={{ backgroundImage: `url(${s.image})` }} />
      ))}
      <div className="hero-overlay" />

      <div className="container hero-content">
        <span key={slide.place} className="eyebrow light"><Icon name="pin" size={14} /> {slide.place}</span>
        <h1 key={slide.title} className="hero-title">{slide.title}</h1>
        <p key={slide.text} className="hero-text">{slide.text}</p>
        <div className="hero-ctas">
          <a href="#tours" className="btn btn-accent">Explore Tours <Icon name="arrow" size={18} /></a>
          <a href="#destinations" className="btn btn-ghost">View Destinations</a>
        </div>

        <form className="quick-search" onSubmit={(e) => { e.preventDefault(); onEnquire(dest) }}>
          <label>
            <span>Where do you want to go?</span>
            <select value={dest} onChange={(e) => setDest(e.target.value)}>
              <option value="">Select a destination</option>
              {destinations.map((d) => <option key={d.id}>{d.name}</option>)}
              <option>Full island tour</option>
            </select>
          </label>
          <button className="btn btn-primary" type="submit">Get a Free Quote <Icon name="arrow" size={18} /></button>
        </form>
      </div>

      <div className="hero-dots">
        <button aria-label="Previous slide" onClick={() => setI((i - 1 + n) % n)}><Icon name="chevL" /></button>
        {heroSlides.map((s, idx) => (
          <button key={s.image} className={`dot ${idx === i ? 'active' : ''}`} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`} />
        ))}
        <button aria-label="Next slide" onClick={() => setI((i + 1) % n)}><Icon name="chevR" /></button>
      </div>

      <div className="stats container">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong className="notranslate" translate="no">{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
