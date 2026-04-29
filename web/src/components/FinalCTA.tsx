const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'
const TEL = PHONE.slice(-10)

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-slate-50 py-24 md:py-36">

      {/* Radial glow that emanates from the CTA button area */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 60%, rgba(29,78,216,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center">

        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.2em] text-blue-700 uppercase">
          <span className="h-px w-5 bg-blue-700" />
          Cotización
          <span className="h-px w-5 bg-blue-700" />
        </div>

        <h2 className="mb-4 font-display text-4xl font-light leading-tight text-slate-900 md:text-6xl">
          Agenda tu cotización hoy.
          <br />
          <span className="text-blue-700">
            Sin compromiso.
          </span>
        </h2>

        {/* "Online now" indicator */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-[13px] font-medium text-green-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-70" />
            <span className="relative h-2 w-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,1)]" />
          </span>
          En línea ahora — listos para cotizar
        </div>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
          Cotización exprés: recibe tu presupuesto en menos de 60 minutos.
          <br className="hidden sm:block" />
          Presupuesto gratis, visita incluida.
        </p>

        {/* Buttons */}
        <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

          {/* WhatsApp — primary with intense glow + subtle pulse ring */}
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, quiero una cotización sin compromiso')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-8 py-4 text-[15px] font-bold text-white ring-1 ring-emerald-400/60 shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/40"
          >
            {/* Outer pulse ring */}
            <span className="pointer-events-none absolute -inset-2 animate-ping rounded-full bg-emerald-500/15" />
            <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
            </svg>
            Enviar WhatsApp
          </a>

          {/* Phone — outlined button */}
          <a
            href={`tel:+52${TEL}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-300 bg-white px-8 py-4 text-[15px] font-semibold text-slate-700 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {TEL}
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-[13px] text-slate-600">
          {['Respuesta en menos de 1 hora', 'Sin letras chiquitas', 'Cotización sin compromiso'].map((badge) => (
            <span key={badge} className="flex items-center gap-2">
              <svg className="h-3.5 w-3.5 shrink-0 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
