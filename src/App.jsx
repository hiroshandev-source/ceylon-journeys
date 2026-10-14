import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { About, Destinations, Tours, Experiences, WhyUs, Guide, Gallery, CtaBanner } from './components/Sections'
import Inquiry from './components/Inquiry'
import Footer, { FloatingButtons } from './components/Footer'

export default function App() {
  // { value } object so picking the same destination twice still re-applies it
  const [prefill, setPrefill] = useState(null)

  const enquire = (value) => {
    if (value) setPrefill({ value })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Fade-in on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.12 }
    )
    const observe = () => document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el))
    observe()
    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero onEnquire={enquire} />
        <About />
        <Destinations onEnquire={enquire} />
        <Tours onEnquire={enquire} />
        <Experiences />
        <WhyUs />
        <Guide />
        <Gallery />
        <CtaBanner />
        <Inquiry prefill={prefill} />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
