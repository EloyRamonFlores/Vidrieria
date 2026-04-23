import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import GoogleMap from '../components/GoogleMap'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ChatWidget from '../components/ChatWidget'

export default function HomePage() {
  useEffect(function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-slate-800 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
      >
        Saltar al contenido principal
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <Gallery limit={6} />
        <GoogleMap />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </>
  )
}
