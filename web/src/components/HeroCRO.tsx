import { IMAGES } from '../config/images'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'

export default function HeroCRO() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-20 md:pt-0">
      {/* BG Image */}
      <img
        src={IMAGES.hero.main.src}
        alt={IMAGES.hero.main.alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 pb-16 md:pb-24">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-4 py-2 mb-6 anim-fade-up">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white text-xs font-semibold">4.9 en Google</span>
          <span className="text-white/30">·</span>
          <span className="text-white/50 text-xs">+200 proyectos instalados</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight tracking-tight max-w-2xl anim-fade-up">
          Tu espacio merece vidrio
          <span className="text-blue-400 font-normal block mt-2">de primer nivel</span>
        </h1>

        <p className="hidden md:block text-white/60 text-lg md:text-xl mb-6 max-w-lg leading-relaxed anim-fade-up">
          Ventanas, fachadas, canceles y más — fabricación a medida con instalación profesional en Rosarito.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8 anim-fade-up">
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, quiero solicitar una cotización gratuita')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
            </svg>
            Cotizar Gratis
          </a>
          <a
            href={`tel:+52${import.meta.env.VITE_WHATSAPP_PHONE?.slice(-10) || '6612421242'}`}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llamar Ahora
          </a>
        </div>

        {/* Quick trust badges */}
        <div className="flex flex-wrap gap-6 text-white/50 text-sm anim-fade-in">
          {['✓ Presupuesto gratis', '✓ Garantía por escrito', '✓ 15+ años exp.'].map(badge => (
            <span key={badge} className="flex items-center gap-2">
              {badge}
            </span>
          ))}
        </div>
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
