import { useEffect, useState } from 'react'
import Icon from './Icon'
import { BUSINESS } from '../config'
import { destinations, tours } from '../data'
import { buildMessage, buildPlainMessage, whatsappUrl, smsUrl, mailtoUrl, sendEmails } from '../inquiry'

const empty = { name: '', email: '', phone: '', destination: '', date: '', travelers: '2', message: '' }

function validate(f) {
  const e = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your full name'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Please enter a valid email address'
  if ((f.phone.match(/\d/g) || []).length < 9) e.phone = 'Please enter a valid phone number with country code'
  if (!f.destination) e.destination = 'Please choose a destination or tour'
  return e
}

export default function Inquiry({ prefill }) {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done
  const [emailState, setEmailState] = useState(null) // sent | not-configured | failed
  const [submitted, setSubmitted] = useState(null)

  useEffect(() => {
    if (prefill?.value) setForm((f) => ({ ...f, destination: prefill.value }))
  }, [prefill])

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) return

    const data = { ...form, name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim() }
    setSubmitted(data)

    // 1) WhatsApp – opened immediately (inside the click) so browsers don't block the new tab
    window.open(whatsappUrl(buildMessage(data)), '_blank', 'noopener')

    // 2) Emails to owner + customer via EmailJS
    setStatus('sending')
    try {
      setEmailState(await sendEmails(data))
    } catch (err) {
      console.error('EmailJS error', err)
      setEmailState('failed')
    }
    setStatus('done')
  }

  function close() {
    setStatus('idle')
    setEmailState(null)
    setForm(empty)
  }

  const allOptions = [...destinations.map((d) => d.name), 'Full island tour', ...tours.map((t) => t.title)]
  const destOptions = [...new Set([...(form.destination && !allOptions.includes(form.destination) ? [form.destination] : []), ...allOptions])]

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Contact Us</span>
          <h2>Plan Your Dream Holiday</h2>
          <p>Send us your details and our travel experts will contact you with a personalised itinerary and free quote – usually within a few hours.</p>

          <div className="info-cards">
            <a className="info-card" href={`tel:${BUSINESS.phones[0]}`}>
              <span className="info-icon"><Icon name="phone" /></span>
              <span><small>Call / WhatsApp</small>{BUSINESS.phones[0]}<br />{BUSINESS.phones[1]}</span>
            </a>
            <a className="info-card" href={`mailto:${BUSINESS.email}`}>
              <span className="info-icon"><Icon name="mail" /></span>
              <span><small>Email</small>{BUSINESS.email}</span>
            </a>
            <div className="info-card">
              <span className="info-icon"><Icon name="pin" /></span>
              <span><small>Office</small>{BUSINESS.address}</span>
            </div>
          </div>

          <div className="map-wrap">
            <iframe title="Ceylon Journeys location" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&z=15&output=embed`} />
          </div>
        </div>

        <form className="inquiry-form reveal" onSubmit={onSubmit} noValidate>
          <h3>Get a Free Quote</h3>
          <p className="form-sub">Fields marked * are required</p>

          <div className="field">
            <label htmlFor="f-name">Full Name *</label>
            <input id="f-name" value={form.name} onChange={set('name')} placeholder="John Smith" autoComplete="name" />
            {errors.name && <span className="err">{errors.name}</span>}
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="f-email">Email Address *</label>
              <input id="f-email" type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" autoComplete="email" />
              {errors.email && <span className="err">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="f-phone">Phone / WhatsApp *</label>
              <input id="f-phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+44 7700 900123" autoComplete="tel" />
              {errors.phone && <span className="err">{errors.phone}</span>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="f-dest">Destination / Tour *</label>
            <select id="f-dest" value={form.destination} onChange={set('destination')}>
              <option value="">Select a destination or tour</option>
              {destOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            {errors.destination && <span className="err">{errors.destination}</span>}
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="f-date">Arrival Date</label>
              <input id="f-date" type="date" value={form.date} onChange={set('date')} min={new Date().toISOString().slice(0, 10)} />
            </div>
            <div className="field">
              <label htmlFor="f-trav">Travellers</label>
              <select id="f-trav" value={form.travelers} onChange={set('travelers')}>
                {['1', '2', '3', '4', '5', '6', '7–10', '10+'].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="f-msg">Message</label>
            <textarea id="f-msg" rows={3} value={form.message} onChange={set('message')} placeholder="Tell us about your travel plans, hotel preferences, budget…" />
          </div>

          <button className="btn btn-accent btn-block" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : <>Send Inquiry <Icon name="arrow" size={18} /></>}
          </button>
          <p className="form-note"><Icon name="whatsapp" size={16} /> Your inquiry is emailed to us and to you, and opens in WhatsApp so you can send it to us instantly.</p>
        </form>
      </div>

      {status === 'done' && submitted && (
        <div className="modal" role="dialog" aria-modal="true" onClick={close}>
          <div className="modal-box success" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={close} aria-label="Close"><Icon name="x" /></button>
            <span className="success-icon"><Icon name="check" size={36} stroke={3} /></span>
            <h3>Thank you, {submitted.name.split(' ')[0]}!</h3>
            <p>Your inquiry for <strong>{submitted.destination}</strong> is on its way. We will contact you very soon.</p>

            <ul className="status-list">
              <li className="ok"><Icon name="whatsapp" size={18} /> <span>WhatsApp opened – please tap <strong>Send</strong> to deliver your message to us.</span></li>
              {emailState === 'sent' && <li className="ok"><Icon name="mail" size={18} /> <span>Email sent to {BUSINESS.name} and a copy to {submitted.email}.</span></li>}
              {emailState !== 'sent' && <li className="warn"><Icon name="mail" size={18} /> <span>Tap <strong>Send by Email</strong> to email your inquiry to us (with a copy to you).</span></li>}
            </ul>

            <div className="success-actions">
              <a className="btn btn-whatsapp" href={whatsappUrl(buildMessage(submitted))} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} /> Send via WhatsApp</a>
              <a className="btn btn-primary" href={smsUrl(buildPlainMessage(submitted))}><Icon name="sms" size={18} /> Send as SMS</a>
              {emailState !== 'sent' && <a className="btn btn-outline" href={mailtoUrl(submitted)}><Icon name="mail" size={18} /> Send by Email</a>}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
