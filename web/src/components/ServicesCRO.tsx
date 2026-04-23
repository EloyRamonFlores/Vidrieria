import { useState } from 'react'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'

const SERVICES_HOGAR = [
  { name: 'Ventanas de Aluminio y PVC', desc: 'Aislamiento térmico y acústico para tu hogar.' },
  { name: 'Puertas Corredizas y Abatibles', desc: 'Diseño funcional con acabados premium.' },
  { name: 'Barandales de Vidrio Templado', desc: 'Seguridad y elegancia en escaleras y balcones.' },
  { name: 'Canceles de Baño', desc: 'Vidrio templado con instalación en 48hrs.' },
  { name: 'Espejos a Medida', desc: 'Corte, biselado e instalación incluida.' },
  { name: 'Mosquiteros', desc: 'Protección contra insectos sin perder la vista.' },
]

const SERVICES_NEGOCIO = [
  { name: 'Fachadas Comerciales', desc: 'Impacto visual que atrae clientes.' },
  { name: 'Frentes Residenciales', desc: 'Diseño arquitectónico de primer nivel.' },
  { name: 'Vitrinas', desc: 'Exhibición profesional para tu negocio.' },
  { name: 'Repisas de Vidrio', desc: 'Elegancia funcional para espacios comerciales.' },
  { name: 'Vidriería en General', desc: 'Soluciones a medida para cualquier proyecto.' },
  { name: 'Reparaciones', desc: 'Servicio rápido de reparación y reemplazo.' },
]

export default function ServicesCRO() {
  const [tab, setTab] = useState<'hogar' | 'negocio'>('hogar')
  const services = tab === 'hogar' ? SERVICES_HOGAR : SERVICES_NEGOCIO

  return (
    <section id="servicios" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">
            <span className="w-5 h-0.5 bg-blue-600" />
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">¿Qué necesitas para tu espacio?</h2>
          <p className="text-slate-600 max-w-md mx-auto">Fabricamos e instalamos a tu medida. Cada proyecto incluye cotización sin costo.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 reveal">
          {[
            { id: 'hogar', label: '🏠 Para tu Hogar' },
            { id: 'negocio', label: '🏢 Para tu Negocio' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as 'hogar' | 'negocio')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                tab === t.id
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((svc, i) => (
            <div
              key={svc.name}
              className={`reveal reveal-delay-${Math.min(i, 5) + 1} group p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition">{svc.name}</h3>
              <p className="text-slate-600 text-sm mb-4">{svc.desc}</p>
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, me interesa: ' + svc.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition group-hover:translate-x-0.5"
              >
                Cotizar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="reveal bg-blue-50 border border-blue-200 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-xl font-semibold text-slate-900 mb-6">¿No estás seguro qué necesitas? Te asesoramos gratis.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              Escribir por WhatsApp
            </a>
            <a
              href={`tel:+52${import.meta.env.VITE_WHATSAPP_PHONE?.slice(-10) || '6612421242'}`}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-900 text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-slate-900 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar al taller
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
