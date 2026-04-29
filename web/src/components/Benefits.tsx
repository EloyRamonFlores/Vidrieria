const BENEFITS = [
  {
    title: 'Respuesta en 24 hrs',
    desc: 'Cotizamos el mismo día.',
    emphasis: 'Sin esperas, sin vueltas.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: 'Garantía por escrito',
    desc: 'Cada proyecto con garantía firmada.',
    emphasis: 'Tu inversión protegida.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: 'Instalación profesional',
    desc: 'Equipo propio.',
    // This is the line clients in Rosarito need to see — sets us apart from informal services
    emphasis: 'Medición exacta e instalación limpia.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    ),
  },
  {
    title: 'Presupuesto sin costo',
    desc: 'Visitamos tu espacio.',
    emphasis: 'Te damos un precio justo y por escrito.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Ambient glow — subtle radial light that makes the glass cards feel lit */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.06),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="reveal mb-16 text-center">
          <div className="mb-5 inline-flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.2em] text-blue-700 uppercase">
            <span className="h-px w-5 bg-blue-700" />
            ¿Por qué elegirnos?
            <span className="h-px w-5 bg-blue-700" />
          </div>
          <h2 className="font-display text-4xl font-light tracking-tight text-slate-900 md:text-5xl lg:text-[3.5rem]">
            No solo vendemos vidrio.
            <span className="block text-blue-700">
              Entregamos tranquilidad.
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="anim-fade-up group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md hover:shadow-blue-700/20"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Corner glow on hover */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/0 blur-2xl transition-all duration-500 group-hover:bg-blue-500/8" />

              {/* Icon — blue with soft shadow */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 shadow-sm transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-md group-hover:shadow-blue-700/20">
                <svg
                  className="h-5 w-5 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {b.icon}
                </svg>
              </div>

              {/* Text */}
              <h3 className="mb-2 font-display text-[15px] font-bold text-slate-900">{b.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-slate-600">
                {b.desc}{' '}
                <span className="font-semibold text-slate-900">{b.emphasis}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Divider stat strip */}
        <div className="reveal mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:grid-cols-4">
          {[
            { n: '+200', label: 'proyectos instalados' },
            { n: '15+',  label: 'años en Rosarito' },
            { n: '48h',  label: 'entrega express' },
            { n: '100%', label: 'equipo propio' },
          ].map(stat => (
            <div key={stat.label} className="flex flex-col items-center gap-1 bg-white px-4 py-6 text-center">
              <span className="font-display text-3xl font-bold text-blue-700">{stat.n}</span>
              <span className="text-[11px] font-medium tracking-wide text-slate-600 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
