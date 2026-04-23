export default function BenefitsCRO() {
  const benefits = [
    { icon: '⚡', title: 'Respuesta en 24 hrs', desc: 'Cotizamos el mismo día. Sin esperas, sin vueltas.' },
    { icon: '🛡️', title: 'Garantía por escrito', desc: 'Cada proyecto con garantía firmada. Tu inversión protegida.' },
    { icon: '📐', title: 'Instalación profesional', desc: 'Equipo propio. Medición exacta e instalación limpia.' },
    { icon: '💰', title: 'Presupuesto sin costo', desc: 'Visitamos tu espacio y te damos un precio justo.' },
  ]

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">
            <span className="w-5 h-0.5 bg-blue-600" />
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900">
            No solo vendemos vidrio.
            <br />
            <span className="text-blue-600">Entregamos tranquilidad.</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`reveal reveal-delay-${i + 1} p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:border-blue-300 hover:bg-blue-50 transition-all`}
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
