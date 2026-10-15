// ─────────────────────────────────────────────────────────────
//  Ceylon Journeys – business settings
//  Edit this file to change contact details or email settings.
// ─────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'Ceylon Journeys',
  tagline: 'Your Trusted Travel Partner',
  // Owner contact numbers (international format, no spaces)
  phones: ['+94713480470', '+94783480470'],
  // WhatsApp number that receives inquiries (digits only, with country code)
  whatsapp: '94783480470',
  // Number that receives the SMS copy of each inquiry
  smsNumber: '+94783480470',
  // ⚠️ Change to the owner's real email address
  email: 'sanjukasithila993@gmail.com',
  address: 'No 299, Pinkotuwa Junction, Alubomulla, Panadura, Sri Lanka',
  mapQuery: 'Pinkotuwa Junction, Alubomulla, Panadura, Sri Lanka',
  social: {
    facebook: 'https://www.facebook.com/share/1BuQVAD2Z4/?mibextid=wwXIfr',
    instagram: '#',
    tiktok: 'https://www.tiktok.com/@ceylon.jouneys?_r=1&_t=ZS-9AY52SfmhKW',
    youtube: '#',
  },
}

// ─────────────────────────────────────────────────────────────
//  EmailJS (https://www.emailjs.com) – sends emails from the
//  browser without a backend. Values come from the .env file
//  (see .env.example). If they are missing, the form falls back
//  to opening the visitor's email app.
// ─────────────────────────────────────────────────────────────
export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  ownerTemplateId: import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID || '',       // emails the OWNER
  customerTemplateId: import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID || '', // emails the CUSTOMER (confirmation)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

export const emailjsReady = () =>
  Boolean(EMAILJS.serviceId && EMAILJS.ownerTemplateId && EMAILJS.publicKey)
