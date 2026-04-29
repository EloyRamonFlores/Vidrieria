import { useEffect, useRef, useState } from 'react'

interface Metric {
  target: number
  decimals: number
  prefix: string
  suffix: string
  label: string
  sublabel: string
  icon: React.ReactNode
}

const METRICS: Metric[] = [
  {
    target: 4.9,
    decimals: 1,
    prefix: '',
    suffix: '',
    label: 'Google reviews',
    sublabel: 'La voz de nuestros clientes.',
    icon: (
      <svg className="h-6 w-6 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    target: 15,
    decimals: 0,
    prefix: '',
    suffix: '+',
    label: 'Años de experiencia',
    sublabel: 'Acompañando el crecimiento de Rosarito.',
    icon: (
      <svg className="h-6 w-6 stroke-blue-700" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    target: 200,
    decimals: 0,
    prefix: '+',
    suffix: '',
    label: 'Proyectos instalados',
    sublabel: 'Espacios transformados con precisión.',
    icon: (
      <svg className="h-6 w-6 stroke-blue-700" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    target: 10,
    decimals: 0,
    prefix: '',
    suffix: ' años',
    label: 'Garantía en instalación',
    sublabel: 'Nuestra firma es nuestra promesa.',
    icon: (
      <svg className="h-6 w-6 stroke-blue-700" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

const DURATION = 1600

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function MetricCard({ metric, active }: { metric: Metric; active: boolean }) {
  const [display, setDisplay] = useState(0)
  const [hovered, setHovered] = useState(false)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!active || hasRun.current) return
    hasRun.current = true
    startRef.current = null

    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(elapsed / DURATION, 1)
      const value = easeOutCubic(progress) * metric.target
      setDisplay(parseFloat(value.toFixed(metric.decimals)))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setDisplay(metric.target)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, metric.target, metric.decimals])

  const formatted =
    metric.decimals > 0 ? display.toFixed(metric.decimals) : Math.round(display).toString()

  return (
    <div
      className="relative flex flex-col items-center gap-2 px-8 py-14 text-center transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Subtle blue ambient glow on hover */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-500 ${
          hovered ? 'h-44 w-56 bg-blue-500/[0.10]' : 'h-36 w-48 bg-blue-500/[0.04]'
        }`}
        aria-hidden="true"
      />

      {/* Free-floating icon */}
      <div className="mb-1" aria-hidden="true">
        {metric.icon}
      </div>

      {/* Number */}
      <div
        className="relative font-display text-[2.6rem] font-bold leading-none tracking-tight text-blue-700 transition-all duration-300 md:text-5xl"
        aria-label={`${metric.prefix}${metric.target}${metric.suffix}`}
      >
        {metric.prefix}{formatted}{metric.suffix}
      </div>

      {/* Label */}
      <p className={`text-sm font-medium transition-colors duration-300 ${hovered ? 'text-slate-900' : 'text-slate-700'}`}>
        {metric.label}
      </p>

      {/* Sublabel — the human story */}
      <p className={`max-w-[140px] text-[12px] italic leading-snug transition-colors duration-300 ${hovered ? 'text-slate-600' : 'text-slate-500'}`}>
        {metric.sublabel}
      </p>
    </div>
  )
}

export default function TrustBar() {
  const [active, setActive] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="Indicadores de confianza"
      className="relative overflow-hidden bg-white border-y border-slate-200"
    >
      {/* Portfolio photo at low opacity — subtle texture for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'url(/images/portfolio-barandal.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundAttachment: 'scroll',
          opacity: 0.06,
        }}
      />
      {/* Gradient overlay — fades photo at edges so metrics stay readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50"
        aria-hidden="true"
      />

      {/* Metrics */}
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <div key={m.label} className="relative">
              {/* Subtle separator — gradient fade so it looks natural */}
              {i > 0 && (
                <div
                  className="absolute inset-y-8 left-0 hidden w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent md:block"
                  aria-hidden="true"
                />
              )}
              <MetricCard metric={m} active={active} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
