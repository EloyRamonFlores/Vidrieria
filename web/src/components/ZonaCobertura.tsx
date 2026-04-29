import { useState } from 'react'

const ZONES = [
  'Rosarito Centro',
  'Playas de Rosarito',
  'Primo Tapia',
  'Puerto Nuevo',
  'Popotla',
  'Calafia',
  'Real del Mar',
  'Las Gaviotas',
  'Tijuana',
  'Playas de Tijuana',
  'La Misión',
  'Constitución',
]

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13442.123!2d-117.0437!3d32.3617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDIxJzQyLjEiTiAxMTfCsDAyJzE0LjkiVw!5e0!3m2!1ses-419!2smx!4v1700000000000'

export default function ZonaCobertura() {
  const [pulsing, setPulsing] = useState(false)

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-2">

        {/* ── LEFT: Text ─────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-14 md:py-20 lg:px-16 xl:px-20">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-blue-700 uppercase">
            <span className="h-px w-5 bg-blue-700" />
            Zona de servicio
          </div>

          <h2 className="mb-4 font-display text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
            Servicio en Rosarito{' '}
            <span className="text-blue-700">
              y alrededores.
            </span>
          </h2>

          <p className="mb-6 max-w-sm leading-relaxed text-slate-600">
            Trabajamos en toda la zona costa de Baja California.
          </p>

          {/* Visita gratuita badge */}
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[13px] font-semibold text-blue-700 shadow-sm shadow-blue-700/20">
            <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Visita gratuita dentro de la zona
          </div>

          {/* Zone list */}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {ZONES.map((zone) => (
              <li key={zone}>
                <button
                  className="flex w-full items-center gap-2.5 text-left text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-blue-700"
                  onMouseEnter={() => setPulsing(true)}
                  onMouseLeave={() => setPulsing(false)}
                >
                  {/* Glowing dot */}
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inset-0 rounded-full bg-blue-700 shadow-[0_0_6px_rgba(29,78,216,0.9)]" />
                    <span className="absolute inset-0 animate-ping rounded-full bg-blue-700 opacity-50" />
                  </span>
                  {zone}
                </button>
              </li>
            ))}
          </ul>

          <p className="mt-7 text-[11.5px] text-slate-500">
            ¿Fuera de esta zona? Consúltanos — cubrimos proyectos grandes en toda la región.
          </p>
        </div>

        {/* ── RIGHT: Light map ──────────────────────────────── */}
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-0 border-l border-slate-200">

          {/* Iframe — no dark filter, shows natural Google Maps light theme */}
          <iframe
            src={MAP_SRC}
            className="absolute inset-0 h-full w-full"
            style={{
              border: 0,
              pointerEvents: 'auto',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zona de cobertura Luminox Glass en Rosarito, B.C."
          />

          {/* Custom marker overlay — positioned at map center */}
          <div
            className="pointer-events-none absolute"
            style={{ top: '46%', left: '54%', transform: 'translate(-50%, -50%)' }}
            aria-hidden="true"
          >
            {/* Outer pulse ring — faster when a zone is hovered */}
            <span
              className={`absolute -inset-6 rounded-full bg-blue-700/15 ${
                pulsing ? 'animate-ping' : 'animate-[ping_2.5s_ease-in-out_infinite]'
              }`}
            />
            {/* Mid ring */}
            <span className="absolute -inset-3 rounded-full bg-blue-700/10 blur-sm" />
            {/* Core dot */}
            <span
              className={`relative block h-4 w-4 rounded-full bg-blue-700 transition-all duration-200 ${
                pulsing
                  ? 'scale-125 shadow-[0_0_28px_6px_rgba(29,78,216,1),0_0_56px_12px_rgba(29,78,216,0.45)]'
                  : 'scale-100 shadow-[0_0_18px_4px_rgba(29,78,216,0.9),0_0_36px_8px_rgba(29,78,216,0.35)]'
              }`}
            />
          </div>

          {/* Left edge vignette — blends map into section bg */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-white to-transparent lg:block" />

          {/* Bottom vignette */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>

      </div>
    </section>
  )
}
