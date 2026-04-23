import { IMAGES } from '../config/images'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'

const specs = [
  'Vidrio templado 8mm',
  'Estructura de aluminio negro',
  'Medida: 2.0 x 2.5m',
  'Instalacion en 2 dias',
]

export default function FeaturedProject() {
  return (
    <section className="py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="reveal rounded-xl overflow-hidden">
            <img
              src={IMAGES.featured.main.src}
              alt={IMAGES.featured.main.alt}
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>

          {/* Details */}
          <div className="reveal reveal-delay-2">
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-3">
              Proyecto Destacado
            </p>
            <h3 className="text-[1.5rem] md:text-[2rem] font-light text-slate-800 mb-2 leading-[1.3] tracking-[-0.01em]">
              Domo de vidrio templado con ventilacion
            </h3>
            <p className="text-gray-400 text-sm mb-6">Col. Centro, Rosarito</p>

            <ul className="space-y-3 mb-8">
              {specs.map((spec) => (
                <li key={spec} className="flex items-center gap-3 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>

            <blockquote className="border-l-2 border-blue-500 pl-4 mb-8">
              <p className="text-gray-600 text-sm italic leading-relaxed">
                "Quedo mejor de lo que imaginamos. La instalacion fue rapida y el acabado impecable."
              </p>
              <cite className="text-gray-400 text-xs not-italic mt-2 block">— Roberto M.</cite>
            </blockquote>

            <a
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, quiero algo similar al domo de vidrio que tienen en su pagina')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quiero algo similar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
