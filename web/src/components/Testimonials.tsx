import { useState } from 'react'

interface Testimonial {
  name: string
  location: string
  text: string
  initials: string
  service: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Laura Méndez',
    location: 'Playas de Rosarito',
    text: 'Reemplazaron toda la cancelería de mi casa en 2 días. Excelente acabado, precio justo. Muy recomendados.',
    initials: 'LM',
    service: 'Ventanas residenciales',
  },
  {
    name: 'Roberto Chávez',
    location: 'Centro, Rosarito',
    text: 'Instalaron un cancel de baño de vidrio templado. Rapidísimos y la calidad se nota. Valió cada peso.',
    initials: 'RC',
    service: 'Cancel de baño',
  },
  {
    name: 'Ing. Fernando Díaz',
    location: 'Primo Tapia',
    text: 'Trabajaron la fachada completa de mi oficina. Profesionalismo de principio a fin. Cumplieron tiempos exactos.',
    initials: 'FD',
    service: 'Fachada comercial',
  },
  {
    name: 'María Gutiérrez',
    location: 'Constitución',
    text: 'Barandal de vidrio templado en la terraza. Quedó perfecto. El equipo muy atento y limpio al trabajar.',
    initials: 'MG',
    service: 'Barandal templado',
  },
  {
    name: 'Carlos Ramírez',
    location: 'Real del Mar',
    text: 'Espejos a medida para todo el baño. Llegaron el día prometido y la instalación fue impecable.',
    initials: 'CR',
    service: 'Espejos a medida',
  },
]

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const current = TESTIMONIALS[index]

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.06),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4">

        {/* Header */}
        <div className="reveal mb-12 text-center">
          <div className="mb-5 inline-flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.2em] text-blue-700 uppercase">
            <span className="h-px w-5 bg-blue-700" />
            Testimonios
            <span className="h-px w-5 bg-blue-700" />
          </div>
          <h2 className="font-display text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
            Lo que dicen{' '}
            <span className="text-blue-700">
              nuestros clientes.
            </span>
          </h2>
        </div>

        {/* Floating glass card */}
        <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/10 md:p-12">

          {/* Large decorative quote marks */}
          <div
            className="pointer-events-none absolute right-6 top-6 font-display text-[7rem] font-bold leading-none text-blue-500/10 select-none md:right-10 md:top-8"
            aria-hidden="true"
          >
            "
          </div>

          {/* Stars */}
          <div className="mb-6 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mb-8 text-[1.15rem] font-light leading-relaxed text-slate-900 md:text-xl">
            "{current.text}"
          </blockquote>

          {/* Footer row */}
          <div className="flex flex-wrap items-center justify-between gap-4">

            {/* Avatar + name */}
            <div className="flex items-center gap-4">
              {/* Glassmorphism initials avatar */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 shadow-sm">
                <span className="font-display text-sm font-bold text-blue-700">{current.initials}</span>
              </div>

              <div>
                <div className="font-semibold text-slate-900">{current.name}</div>
                <div className="mt-0.5 flex flex-wrap items-center gap-2">
                  {/* Location badge */}
                  <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {current.location}
                  </span>
                  <span className="text-[11px] text-slate-500">{current.service}</span>
                </div>
              </div>
            </div>

            {/* Nav controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIndex((index - 1 + total) % total)}
                aria-label="Anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="min-w-[3rem] text-center text-xs font-medium text-slate-600">
                {index + 1} / {total}
              </span>
              <button
                onClick={() => setIndex((index + 1) % total)}
                aria-label="Siguiente"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Google Reviews link */}
        <div className="reveal mt-8 flex items-center justify-center gap-2">
          <GoogleIcon />
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-700"
          >
            Ver todas las reseñas en Google →
          </a>
        </div>

      </div>
    </section>
  )
}
