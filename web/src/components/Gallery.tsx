import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../config/images'

interface GalleryProps {
  limit?: number
}

export default function Gallery({ limit }: GalleryProps = {}) {
  const [selected, setSelected] = useState<number | null>(null)
  const allItems = IMAGES.portfolio
  const items = limit ? allItems.slice(0, limit) : allItems

  const close = useCallback(() => setSelected(null), [])
  const prev = useCallback(() => {
    setSelected((i) => (i !== null ? (i - 1 + items.length) % items.length : null))
  }, [items.length])
  const next = useCallback(() => {
    setSelected((i) => (i !== null ? (i + 1) % items.length : null))
  }, [items.length])

  useEffect(function handleKeyboard() {
    if (selected === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [selected, close, prev, next])

  return (
    <>
      <section id="proyectos" className="pt-20 md:pt-24 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4 md:mb-6 reveal">
            <h2 className="text-[1.5rem] md:text-[2rem] font-light text-slate-800 mb-3 leading-[1.3] tracking-[-0.01em]">
              Nuestros Proyectos
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Estos son algunos de los proyectos que mas nos enorgullecen.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {items.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setSelected(i)}
                className={`reveal reveal-delay-${Math.min(i, 4) + 1} block w-full break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105 ${
                    img.span ? 'aspect-[4/5]' : 'aspect-[4/3]'
                  }`}
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent flex flex-col justify-end p-5">
                  <p className="text-white font-medium text-sm">{img.project}</p>
                  <p className="text-white/70 text-xs">{img.spec}</p>
                </div>
                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* "Ver todos" link — only renders when limit is set. Requires Router context from App.tsx (Task 7) */}
          {limit && (
            <div className="mt-10 text-center">
              <Link
                to="/proyectos"
                className="btn-primary"
              >
                Ver todos los proyectos ({allItems.length})
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-label="Vista ampliada del proyecto"
        >
          {/* Content container - 2 columns */}
          <div className="w-full max-w-5xl max-h-[90vh] relative flex gap-6 bg-slate-900 rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Image side */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <img
                src={items[selected].src}
                alt={items[selected].alt}
                className="max-w-full max-h-full object-contain p-6"
                loading="lazy"
              />
            </div>

            {/* Info side */}
            <div className="flex-1 flex flex-col justify-between p-6 overflow-y-auto">
              {/* Header */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{items[selected].project}</h3>
                <p className="text-blue-400 font-semibold mb-4">{items[selected].spec}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {items[selected].description}
                </p>
              </div>

              {/* CTA Section */}
              <div className="border-t border-gray-700 pt-6">
                <p className="text-white font-semibold mb-3">Cotiza con nosotros tus trabajos</p>
                <p className="text-gray-300 text-sm mb-4">
                  Presupuestos sin costo. Orientación profesional para que tu proyecto quede estético y resistente.
                </p>
                <div className="space-y-2">
                  <p className="text-white text-sm">
                    <span className="font-semibold">📲 Cel:</span> +52 661 242 1242
                  </p>
                  <p className="text-white text-sm">
                    <span className="font-semibold">📞 Tel:</span> 661 213 1409
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition z-10"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
