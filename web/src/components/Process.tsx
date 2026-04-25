const STEPS = [
  {
    num: '01',
    title: 'Cotización',
    time: '24 hrs',
    desc: 'Escríbenos por WhatsApp o llámanos. Te damos un precio justo el mismo día.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    num: '02',
    title: 'Fabricación',
    time: '5–7 días',
    desc: 'Producimos en nuestro taller propio con materiales certificados.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    ),
  },
  {
    num: '03',
    title: 'Instalación',
    time: '1–2 días',
    desc: 'Nuestro equipo instala con precisión. Limpieza incluida.',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 8l2 2 3-3" />
      </>
    ),
  },
]

export default function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-[#08090e] py-20 md:py-28">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.07),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="reveal mb-20 text-center">
          <div className="mb-5 inline-flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.2em] text-emerald-400 uppercase">
            <span className="h-px w-5 bg-emerald-400" />
            Cómo trabajamos
            <span className="h-px w-5 bg-emerald-400" />
          </div>
          <h2 className="font-display text-4xl font-light tracking-tight text-white md:text-5xl">
            Tres pasos y tu proyecto{' '}
            <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              listo.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">

          {/* Connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-10 hidden h-px md:block"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.08) 0%, rgba(52,211,153,0.5) 50%, rgba(52,211,153,0.15) 100%)',
            }}
          />

          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="anim-fade-up relative flex flex-col items-center text-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Glass circle */}
              <div className="relative z-10 mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] shadow-[0_0_30px_-8px_rgba(52,211,153,0.45)] backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_45px_-4px_rgba(52,211,153,0.7)]">
                {/* Number label */}
                <span className="font-display text-2xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                  {s.num}
                </span>
                {/* Subtle inner ring */}
                <div className="pointer-events-none absolute inset-2 rounded-full border border-emerald-400/10" />
              </div>

              {/* Glass card */}
              <div className="w-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm">
                {/* Icon + time badge */}
                <div className="mb-4 flex items-center justify-center gap-3">
                  <svg
                    className="h-4 w-4 shrink-0 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-emerald-300">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {s.time}
                  </span>
                </div>

                <h3 className="mb-2 font-display text-[17px] font-semibold text-white">{s.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-white/60">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
