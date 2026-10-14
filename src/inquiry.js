import emailjs from '@emailjs/browser'
import { BUSINESS, EMAILJS, emailjsReady } from './config'

export function buildMessage(f) {
  const lines = [
    `🌴 *New Tour Inquiry – ${BUSINESS.name}*`,
    '',
    `👤 Name: ${f.name}`,
    `📧 Email: ${f.email}`,
    `📞 Phone: ${f.phone}`,
    `📍 Destination: ${f.destination}`,
  ]
  if (f.date) lines.push(`📅 Travel date: ${f.date}`)
  if (f.travelers) lines.push(`👥 Travellers: ${f.travelers}`)
  if (f.message) lines.push(`📝 Message: ${f.message}`)
  return lines.join('\n')
}

// Plain-text version for SMS / email (no WhatsApp markdown or emojis)
export function buildPlainMessage(f) {
  return buildMessage(f)
    .replace(/\*/g, '')
    .replace(/[\u{1F300}-\u{1FAFF}]\s?/gu, '')
}

export const whatsappUrl = (text, number = BUSINESS.whatsapp) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`

export function smsUrl(text, number = BUSINESS.smsNumber) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  return `sms:${number}${isIOS ? '&' : '?'}body=${encodeURIComponent(text)}`
}

export function mailtoUrl(f) {
  const subject = `Tour Inquiry – ${f.destination} – ${f.name}`
  return `mailto:${BUSINESS.email}?cc=${encodeURIComponent(f.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildPlainMessage(f))}`
}

/**
 * Sends two emails through EmailJS:
 *  1. Inquiry details to the owner
 *  2. Confirmation copy to the customer
 * Returns 'sent' | 'not-configured'. Throws on network/EmailJS error.
 */
export async function sendEmails(f) {
  if (!emailjsReady()) return 'not-configured'

  const params = {
    business_name: BUSINESS.name,
    owner_email: BUSINESS.email,
    owner_phone: BUSINESS.phones.join(' / '),
    customer_name: f.name,
    customer_email: f.email,
    customer_phone: f.phone,
    destination: f.destination,
    travel_date: f.date || 'Not specified',
    travelers: f.travelers || 'Not specified',
    message: f.message || '-',
    reply_to: f.email,
  }
  const opts = { publicKey: EMAILJS.publicKey }

  const jobs = [emailjs.send(EMAILJS.serviceId, EMAILJS.ownerTemplateId, { ...params, to_email: BUSINESS.email }, opts)]
  if (EMAILJS.customerTemplateId) {
    jobs.push(emailjs.send(EMAILJS.serviceId, EMAILJS.customerTemplateId, { ...params, to_email: f.email, reply_to: BUSINESS.email }, opts))
  }
  await Promise.all(jobs)
  return 'sent'
}
