import { IMAGES } from '../config/images'

const glassTypes = [
  { name: 'Templado', image: IMAGES.glassTypes.templado },
  { name: 'Laminado', image: IMAGES.glassTypes.laminado },
  { name: 'Espejo', image: IMAGES.glassTypes.espejo },
  { name: 'Esmerilado', image: IMAGES.glassTypes.esmerilado },
  { name: 'Grabado', image: IMAGES.glassTypes.grabado },
  { name: 'Tintado', image: IMAGES.glassTypes.tintado },
]

export default function GlassTypes() {
  return (
    <section className="py-8 md:py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14 reveal">
          <h2 className="text-[1.5rem] md:text-[2rem] font-light text-slate-800 mb-3 leading-[1.3] tracking-[-0.01em]">
            Materiales que Trabajamos
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Te ayudamos a elegir el vidrio correcto — cada espacio es diferente.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:pb-0 snap-x snap-mandatory">
          {glassTypes.map((type, i) => (
            <div
              key={type.name}
              className={`reveal reveal-delay-${(i % 6) + 1} flex flex-col items-center gap-3 shrink-0 snap-center`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-gray-100 hover:ring-blue-300 transition-all duration-300 hover:scale-105">
                <img
                  src={type.image.src}
                  alt={type.image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-sm text-gray-600 font-medium">{type.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
