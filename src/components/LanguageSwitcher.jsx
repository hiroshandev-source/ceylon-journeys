import { useEffect, useState } from 'react'
import Icon from './Icon'

// Languages offered in the selector (Google Translate codes)
const LANGUAGES = [
  ['en', 'English'],
  ['de', 'Deutsch'],
  ['fr', 'Français'],
  ['es', 'Español'],
  ['it', 'Italiano'],
  ['nl', 'Nederlands'],
  ['pt', 'Português'],
  ['ru', 'Русский'],
  ['pl', 'Polski'],
  ['sv', 'Svenska'],
  ['zh-CN', '中文'],
  ['ja', '日本語'],
  ['ko', '한국어'],
  ['hi', 'हिन्दी'],
  ['ar', 'العربية'],
  ['he', 'עברית'],
]

const readLang = () => {
  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/)
  return m ? decodeURIComponent(m[1]) : 'en'
}

function setCookie(value) {
  const host = window.location.hostname
  const domains = ['', host, host.includes('.') ? '.' + host.split('.').slice(-2).join('.') : null].filter((d) => d !== null)
  domains.forEach((d) => {
    const domain = d ? `; domain=${d}` : ''
    document.cookie = value
      ? `googtrans=${value}; path=/${domain}`
      : `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
  })
}

let scriptLoaded = false
function loadGoogleTranslate() {
  if (scriptLoaded) return
  scriptLoaded = true
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      { pageLanguage: 'en', includedLanguages: LANGUAGES.map(([c]) => c).join(','), autoDisplay: false },
      'google_translate_element'
    )
  }
  const s = document.createElement('script')
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  s.async = true
  document.body.appendChild(s)
}

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const current = readLang()
    setLang(current)
    // Only load Google Translate when a non-English language is chosen
    if (current !== 'en') loadGoogleTranslate()
  }, [])

  function change(e) {
    const code = e.target.value
    setLang(code)
    setCookie(code === 'en' ? null : `/en/${code}`)
    window.location.reload()
  }

  return (
    <label className="lang-switch notranslate" translate="no" title="Translate this website">
      <Icon name="globe" size={14} />
      <span className="sr-only">Language</span>
      <select value={lang} onChange={change} aria-label="Select language">
        {LANGUAGES.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
      </select>
      <div id="google_translate_element" hidden />
    </label>
  )
}
