const featured = {
  name: 'Ing. Fernando D.',
  initials: 'FD',
  location: 'Zona Río',
  service: 'Vitrinas comerciales',
  text: 'Trabajo profesional, medidas perfectas. Las vitrinas quedaron impecables.',
  stars: 5,
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-8 md:py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">

        {/* Rating band */}
        <div className="reveal flex items-center justify-center gap-3 bg-amber-50 border border-amber-100 rounded-2xl py-4 px-6 mb-10 md:mb-12">
          <Stars count={5} />
          <span className="text-slate-700 font-medium text-sm md:text-base">
            4.9 en Google
          </span>
          <span className="text-gray-300 select-none">·</span>
          <span className="text-gray-500 text-sm md:text-base">+200 trabajos en Rosarito</span>
        </div>

        {/* Featured testimonial */}
        <div className="reveal reveal-delay-1 max-w-lg mx-auto bg-white rounded-xl p-6 border border-gray-100 card-lift">
          <Stars count={featured.stars} />
          <blockquote className="text-gray-600 text-sm leading-relaxed my-3">
            &ldquo;{featured.text}&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
              {featured.initials}
            </div>
            <div>
              <div className="text-sm font-medium text-slate-800">{featured.name}</div>
              <div className="text-xs text-gray-400">{featured.service} &middot; {featured.location}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
