import { useState } from 'react'
import logoLuminox from '../assets/logo-luminox.png'
import FolioModal from './FolioModal'

const PHONE_1 = import.meta.env.VITE_PHONE_1 || '526612421242'
const PHONE_2 = import.meta.env.VITE_PHONE_2 || '526611005509'

export default function Footer() {
  const [folioOpen, setFolioOpen] = useState(false)

  return (
    <footer className="border-t border-white/[0.06] bg-[#05060a] pb-24 pt-14 text-white/40 md:pb-10">
      <div className="mx-auto max-w-6xl px-4">

        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img src={logoLuminox} alt="Luminox Glass" className="h-16 w-auto opacity-90" />
              <span className="font-display text-xl font-bold text-white">Luminox Glass</span>
            </div>
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/40">
              Vidriería profesional en Rosarito, B.C. Fabricación a medida e instalación con garantía.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                {
                  label: 'Facebook',
                  href: '#',
                  icon: (
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  ),
                  fill: true,
                },
                {
                  label: 'Instagram',
                  href: '#',
                  icon: (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  ),
                  fill: true,
                },
                {
                  label: 'Google',
                  href: 'https://www.google.com/maps',
                  icon: (
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  ),
                  fill: true,
                },
              ].map(({ label, href, icon, fill }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-400/[0.08] hover:text-emerald-300 hover:shadow-[0_0_16px_-4px_rgba(52,211,153,0.5)]"
                >
                  <svg className="h-3.5 w-3.5" fill={fill ? 'currentColor' : 'none'} viewBox="0 0 24 24" aria-hidden="true">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <div className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:+${PHONE_1}`} className="flex items-center gap-2 transition-colors hover:text-emerald-300">
                  <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {PHONE_1.slice(-10)}
                </a>
              </li>
              <li>
                <a href={`tel:+${PHONE_2}`} className="flex items-center gap-2 transition-colors hover:text-emerald-300">
                  <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {PHONE_2.slice(-10)}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${PHONE_1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-emerald-300"
                >
                  <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                  </svg>
                  WhatsApp directo
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/30">
                <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400/60" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Rosarito, B.C., México
              </li>
            </ul>
          </div>

          {/* Hours column */}
          <div>
            <div className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Horario
            </div>
            <ul className="space-y-2.5 text-sm">
              {[
                { day: 'Lun – Vie', hours: '9:00 – 17:00' },
                { day: 'Sábado', hours: '9:00 – 14:00' },
                { day: 'Domingo', hours: 'Cerrado' },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between">
                  <span className="text-white/50">{day}</span>
                  <span className={hours === 'Cerrado' ? 'text-white/30' : 'font-medium text-white/80'}>{hours}</span>
                </li>
              ))}
            </ul>

            {/* Folio tracker */}
            <button
              onClick={() => setFolioOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3.5 py-1.5 text-[12px] font-semibold text-emerald-300 transition-all hover:border-emerald-400/45 hover:bg-emerald-400/[0.12] hover:shadow-[0_0_16px_-4px_rgba(52,211,153,0.4)]"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              Consultar mi pedido
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-7 text-xs text-white/20 md:flex-row">
          <p>© {new Date().getFullYear()} Luminox Glass. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2.5 opacity-60 transition-opacity duration-300 hover:opacity-100">
            <span className="text-[10px] font-medium tracking-widest text-white/30 uppercase">Hecho por</span>
            <a
              href="https://github.com/agencia-digital-koku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline transition-transform duration-300 hover:scale-105"
              style={{ letterSpacing: '-0.06em' }}
            >
              <span className="text-xl font-black text-white">K</span>
              <span className="text-lg font-black text-amber-500">o</span>
              <span className="text-lg font-black text-slate-400">k</span>
              <span className="text-xl font-black text-white">u</span>
            </a>
          </div>
        </div>
      </div>

      <FolioModal isOpen={folioOpen} onClose={() => setFolioOpen(false)} />
    </footer>
  )
}
