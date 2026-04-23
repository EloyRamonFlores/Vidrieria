import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import GlassTypes from '../components/GlassTypes'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ChatWidget from '../components/ChatWidget'

export default function ProyectosPage() {
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
      <Navbar />
      <main>
        <Gallery />
        <Services />
        <Process />
        <Testimonials />
        <GlassTypes />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </>
  )
}
