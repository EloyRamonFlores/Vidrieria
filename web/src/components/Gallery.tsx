import { useState, useEffect, useCallback } from 'react'
import { IMAGES } from '../config/images'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'

type FilterId = 'todos' | 'banos' | 'ventaneria' | 'fachadas' | 'especiales'

interface PortfolioItem {
  src: string
  alt: string
  project: string
  spec: string
  description?: string
  category: Exclude<FilterId, 'todos'>
  location: string
  featured?: boolean
}

// ─── Enrich portfolio data ─────────────────────────────────────────────────────
const LOCATIONS = [
  'Real del Mar', 'Centro, Rosarito', 'Playas de Rosarito', 'Primo Tapia',
  'Puerto Nuevo', 'Lomas de Rosarito', 'Rosarito Centro', 'Villa del Mar',
  'Las Gaviotas', 'Calafia', 'Constitución', 'Residencial Haciendas',
  'Playa Encantada', 'Nueva Esperanza', 'El Descanso', 'Playas de Tijuana',
]

const CAT_MAP: Record<string, Exclude<FilterId, 'todos'>> = {
  'Cancel de Baño':       'banos',
  'Cancel de Baño II':    'banos',
  'Espejo Biselado':      'banos',
  'Ventanas Residenciales':'ventaneria',
  'Ventana California II':'ventaneria',
  'Ventana Residencial':  'ventaneria',
  'Vitrina Comercial':    'fachadas',
  'Barandal Residencial': 'fachadas',
  'Cancelería Comercial': 'fachadas',
  'Barandal Escalera':    'fachadas',
  'Cancelería Exterior':  'fachadas',
  'Puerta Comercial':     'fachadas',
  'Puerta de Aluminio':   'fachadas',
  'Mesa de Comedor':      'especiales',
  'Vitral Artistico':     'especiales',
  'Domo Residencial II':  'especiales',
}

const PORTFOLIO: PortfolioItem[] = IMAGES.portfolio.map((item, i) => ({
  ...item,
  category: CAT_MAP[item.project] ?? 'fachadas',
  location: LOCATIONS[i % LOCATIONS.length],
  // The installer photo with the team hoodie is the proof-of-existence shot
  featured: item.project === 'Ventanas Residenciales',
}))

// ─── Filters ──────────────────────────────────────────────────────────────────
const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'todos',      label: 'Todos' },
  { id: 'banos',      label: 'Baños' },
  { id: 'ventaneria', label: 'Ventanería' },
  { id: 'fachadas',   label: 'Fachadas' },
  { id: 'especiales', label: 'Proyectos Especiales' },
]

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: PortfolioItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const item = items[index]

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Proyecto: ${item.project}`}
    >
      {/* Close */}
      <button
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        disabled={index === 0}
        aria-label="Anterior"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        disabled={index === items.length - 1}
        aria-label="Siguiente"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image */}
      <div className="relative max-h-[85vh] max-w-3xl w-full" onClick={e => e.stopPropagation()}>
        <img
          src={item.src}
          alt={item.alt}
          className="h-auto max-h-[75vh] w-full rounded-2xl object-contain"
        />
        <div className="mt-4 flex items-start justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-white">{item.project}</p>
            <p className="mt-1 text-sm text-white/60">{item.spec} · {item.location}</p>
          </div>
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, me interesó el proyecto: ' + item.project + '. ¿Puedo cotizar algo similar?')}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-emerald-600"
          >
            Cotizar similar
          </a>
        </div>
        {/* Counter */}
        <p className="mt-3 text-center text-[11px] tracking-widest text-white/30 uppercase">
          {index + 1} / {items.length}
        </p>
      </div>
    </div>
  )
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function GalleryCard({
  item,
  isFeatured,
  onClick,
}: {
  item: PortfolioItem
  isFeatured: boolean
  onClick: () => void
}) {
  return (
    <button
      className={`anim-fade-up group relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
        isFeatured ? 'ring-1 ring-blue-700/30' : ''
      }`}
      onClick={onClick}
      aria-label={`Ver proyecto: ${item.project}`}
    >
      {/* Image */}
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
      />

      {/* Base gradient — always visible (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-amber-100 uppercase backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
          Nuestro Equipo
        </div>
      )}

      {/* Hover overlay — extra darkening */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

      {/* Expand icon */}
      <div className="absolute right-3 top-3 z-10 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </div>

      {/* Info overlay — slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-display text-sm font-semibold leading-tight text-white">
          {item.project}
        </p>
        <p className="mt-0.5 text-[12px] text-white/65">{item.location}</p>
      </div>

      {/* Static bottom label (always visible, smaller) */}
      <div className="absolute inset-x-0 bottom-0 p-3 group-hover:opacity-0 transition-opacity duration-200">
        <p className="text-[11px] font-medium text-white/50">{item.project}</p>
      </div>
    </button>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function Gallery() {
  const [filter, setFilter] = useState<FilterId>('todos')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const displayed = filter === 'todos'
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.category === filter)

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevLightbox = useCallback(() => setLightbox(i => (i !== null && i > 0 ? i - 1 : i)), [])
  const nextLightbox = useCallback(() => setLightbox(i => (i !== null && i < displayed.length - 1 ? i + 1 : i)), [displayed.length])

  return (
    <section id="proyectos" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="reveal mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.2em] text-blue-700 uppercase">
            <span className="h-px w-5 bg-blue-700" />
            Portfolio
            <span className="h-px w-5 bg-blue-700" />
          </div>
          <h2 className="mb-4 font-display text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
            Proyectos reales en Rosarito
          </h2>
          <p className="mx-auto max-w-md text-[15px] leading-relaxed text-slate-600">
            Cada instalación documentada. Trabajo local, equipo propio, garantía incluida.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal mb-8 flex flex-wrap justify-center gap-2" role="tablist">
          {FILTERS.map(f => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                filter === f.id
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'border border-slate-300 bg-slate-100 text-slate-700 hover:border-slate-400 hover:text-slate-900'
              }`}
            >
              {f.label}
              {f.id !== 'todos' && (
                <span className={`ml-1.5 text-[11px] ${filter === f.id ? 'text-white/70' : 'text-slate-600'}`}>
                  {PORTFOLIO.filter(p => p.category === f.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid — key=filter forces remount so CSS animations retrigger on filter switch */}
        <div
          key={filter}
          className="grid grid-cols-2 gap-3 lg:grid-cols-3"
          style={{ gridAutoRows: '260px' }}
        >
          {displayed.map((item, idx) => {
            const isFeatured = item.featured && filter === 'todos'
            return (
              <div
                key={item.src}
                className={isFeatured ? 'col-span-2 row-span-2 lg:col-span-2 lg:row-span-2' : 'col-span-1 row-span-1'}
              >
                <GalleryCard
                  item={item}
                  isFeatured={!!item.featured}
                  onClick={() => setLightbox(idx)}
                />
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <p className="mb-4 text-sm text-slate-600">
            {displayed.length} proyecto{displayed.length !== 1 ? 's' : ''} mostrados
          </p>
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, vi su portafolio y me gustaría cotizar un proyecto similar. ¿Podemos hablar?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-emerald-500 px-7 py-4 text-[15px] font-semibold text-white ring-1 ring-emerald-400/60 shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/40"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
            </svg>
            ¿Viste algo que te gustó? Cotízalo ahora
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          items={displayed}
          index={lightbox}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}
    </section>
  )
}
