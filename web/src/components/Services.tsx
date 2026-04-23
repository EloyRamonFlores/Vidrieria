import { IMAGES } from '../config/images'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'

const services = [
  {
    image: IMAGES.services.canceles,
    name: 'Canceles de Baño',
    description: 'Vidrio templado con instalacion profesional',
  },
  {
    image: IMAGES.services.espejos,
    name: 'Espejos a Medida',
    description: 'Corte, biselado e instalacion incluida',
  },
  {
    image: IMAGES.services.ventanas,
    name: 'Ventanas',
    description: 'Vidrio claro, tintado o templado',
  },
  {
    image: IMAGES.services.vitrinas,
    name: 'Vitrinas Comerciales',
    description: 'Vidrio de seguridad para exhibicion',
  },
  {
    image: IMAGES.services.barandales,
    name: 'Barandales',
    description: 'Vidrio templado con herrajes de acero',
  },
  {
    image: IMAGES.services.decorativo,
    name: 'Vidrio Decorativo',
    description: 'Esmerilado, grabado y disenos personalizados',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-8 md:py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 reveal">
          <h2 className="text-[1.5rem] md:text-[2rem] font-light text-slate-800 mb-3 leading-[1.3] tracking-[-0.01em]">
            ¿Que necesitas para tu espacio?
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Fabricamos e instalamos a tu medida. Elige tu proyecto y cotiza sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, i) => (
            <a
              key={service.name}
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent(`Hola, me interesa cotizar: ${service.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${(i % 3) + 1} group relative rounded-xl overflow-hidden aspect-[4/3]`}
            >
              <img
                src={service.image.src}
                alt={service.image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-all group-hover:from-black/80" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                <h3 className="text-white text-sm md:text-lg font-medium leading-tight mb-2">{service.name}</h3>
                <span className="inline-flex items-center gap-1 text-[11px] md:text-xs font-medium text-blue-300">
                  Cotizar
                  <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
