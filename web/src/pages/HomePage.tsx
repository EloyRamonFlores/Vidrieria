import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ScrollVideoHero from '../components/ScrollVideoHero'
import TrustBar from '../components/TrustBar'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Benefits from '../components/Benefits'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import ZonaCobertura from '../components/ZonaCobertura'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import StickyMobileBar from '../components/StickyMobileBar'
import ChatWidget from '../components/ChatWidget'

export default function HomePage() {
  useEffect(function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-slate-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
      >
        Saltar al contenido principal
      </a>

      <Navbar />
      <main id="main-content">
        <ScrollVideoHero />
        <TrustBar />
        <Services />
        <Benefits />
        <Gallery />
        <Process />
        <Testimonials />
        <ZonaCobertura />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileBar />
      <ChatWidget />
    </>
  )
}
