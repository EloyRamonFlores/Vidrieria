import { IMAGES } from '../config/images'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'

export default function CtaSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <img
        src={IMAGES.cta.background.src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-amber-900/30" />

      <div className="relative max-w-3xl mx-auto px-4 text-center reveal">
        <h2 className="text-[2.25rem] md:text-[3.5rem] font-light text-white mb-4 leading-[1.1] tracking-[-0.02em]">
          ¿Listo para transformar tu espacio?
        </h2>
        <p className="text-white/60 text-lg mb-10">
          +200 hogares y negocios en Rosarito &middot; Garantia incluida
        </p>

        <a
          href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, quiero solicitar una cotizacion gratuita')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa"
        >
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.847L.057 23.854l6.148-1.612A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.599-.505-5.104-1.385l-.366-.218-3.791.994 1.012-3.692-.239-.379A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Solicitar Cotizacion Gratis
        </a>
      </div>
    </section>
  )
}
