import { useEffect, useState } from 'react'
import logoLuminox from '../assets/logo-luminox.png'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'

const NAV_ITEMS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(function trackScroll() {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(function lockBodyScroll() {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'pt-2 md:pt-3' : 'pt-4 md:pt-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo — left */}
        <a
          href="#top"
          className={`flex items-center gap-2.5 rounded-full border backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? 'border-slate-200 bg-white/90 py-2 pl-2 pr-4 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)]'
              : 'border-transparent bg-transparent py-2 pl-2 pr-4'
          }`}
          aria-label="Luminox Glass, ir al inicio"
        >
          <img src={logoLuminox} alt="" className="h-7 w-auto md:h-8" />
          <span
            className={`font-display text-[13px] font-semibold tracking-tight md:text-sm transition-colors duration-500 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            Luminox
            <span className={scrolled ? 'text-slate-500' : 'text-white/55'}> Glass</span>
          </span>
        </a>

        {/* Center pill — nav links */}
        <nav
          className={`hidden items-center gap-1 rounded-full border backdrop-blur-xl transition-all duration-500 md:flex ${
            scrolled
              ? 'border-slate-200 bg-white/90 px-2 py-1.5 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)]'
              : 'border-white/10 bg-white/[0.05] px-2 py-1.5'
          }`}
          aria-label="Principal"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all ${
                scrolled
                  ? 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
                  : 'text-white/75 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA — right (always blue, brand identity) */}
        <a
          href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hola Luminox, quiero una cotización gratuita')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-blue-700 px-4 py-2.5 text-[13px] font-semibold text-white ring-1 ring-blue-600/40 shadow-lg shadow-blue-700/25 transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/35 md:inline-flex"
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
          </svg>
          Cotizar
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-colors md:hidden ${
            scrolled
              ? 'border-slate-200 bg-white/90 text-slate-900 hover:bg-white'
              : 'border-white/10 bg-black/40 text-white hover:bg-black/60'
          }`}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-4 mt-3 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-2xl shadow-xl shadow-slate-900/10 md:hidden">
          <nav className="flex flex-col gap-1 p-4" aria-label="Móvil">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hola Luminox, quiero una cotización gratuita')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800"
            >
              Cotizar gratis por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
