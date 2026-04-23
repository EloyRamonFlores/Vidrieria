import { IMAGES } from '../config/images'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <img
        src={IMAGES.hero.main.src}
        alt={IMAGES.hero.main.alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="sync"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-slate-900/10" />

      {/* Content — positioned bottom-left */}
      <div className="relative w-full max-w-6xl mx-auto px-4 pb-16 md:pb-24 pt-32 anim-fade-up">
        <h1 className="text-[2.25rem] md:text-[3.5rem] font-light text-white mb-4 leading-[1.1] tracking-[-0.02em] max-w-2xl">
          Transformamos espacios
          <span className="text-gradient block mt-1 font-normal">con vidrio</span>
        </h1>

        <p className="hidden md:block text-white/70 text-lg md:text-xl mb-3 max-w-lg leading-relaxed">
          Canceles, espejos, vitrinas y mas — fabricados a tu medida en Rosarito.
        </p>
        <p className="hidden md:flex text-white/40 text-sm mb-8 items-center gap-2">
          <span className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
          Taller familiar &middot; Cotizacion gratuita &middot; Garantia incluida
        </p>
        {/* Spacer on mobile to preserve CTA position */}
        <div className="md:hidden mb-8" />

        <a href="#proyectos" className="btn-primary">
          Ver Nuestros Proyectos
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
