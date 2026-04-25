import { useState, useRef, useEffect } from 'react'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'
type Category = 'hogar' | 'negocio'

interface Service {
  name: string
  desc: string
  img: string
  beforeImg?: string
  tag?: string
}

const UNSPLASH = (id: string, w = 700) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&q=80&fit=crop`

const SERVICES: Record<Category, Service[]> = {
  hogar: [
    {
      name: 'Ventanas de aluminio y PVC',
      desc: 'Aislamiento térmico y acústico certificado.',
      img: UNSPLASH('photo-1560440021-33f9b867899d', 900),
      beforeImg: UNSPLASH('photo-1513694203232-719a280e022f', 900),
      tag: 'Antes / Después',
    },
    {
      name: 'Puertas corredizas y abatibles',
      desc: 'Diseño funcional, acabados de primer nivel.',
      img: UNSPLASH('photo-1600596542815-ffad4c1539a9'),
    },
    {
      name: 'Barandales de vidrio templado',
      desc: 'Seguridad y elegancia en balcones y escaleras.',
      img: UNSPLASH('photo-1564013799919-ab600027ffc6'),
    },
    {
      name: 'Canceles de baño',
      desc: 'Vidrio templado con instalación en 48 hrs.',
      img: UNSPLASH('photo-1552321554-5fefe8c9ef14'),
    },
    {
      name: 'Espejos a medida',
      desc: 'Corte, biselado e instalación incluida.',
      img: UNSPLASH('photo-1616594039964-ae9021a400a0'),
    },
    {
      name: 'Mosquiteros',
      desc: 'Protección sin sacrificar la vista al exterior.',
      img: UNSPLASH('photo-1524758631624-e2822e304c36'),
    },
  ],
  negocio: [
    {
      name: 'Fachadas comerciales',
      desc: 'Impacto visual que atrae y convierte clientes.',
      img: UNSPLASH('photo-1486325212027-8081e485255e'),
    },
    {
      name: 'Frentes residenciales',
      desc: 'Diseño arquitectónico de alto nivel.',
      img: UNSPLASH('photo-1512917774080-9991f1c4c750'),
    },
    {
      name: 'Vitrinas comerciales',
      desc: 'Exhibición profesional para tu negocio.',
      img: UNSPLASH('photo-1441986300917-64674bd600d8'),
    },
    {
      name: 'Repisas de vidrio',
      desc: 'Elegancia funcional para espacios premium.',
      img: UNSPLASH('photo-1567225557594-88d73e55f2cb'),
    },
    {
      name: 'Vidriería arquitectónica',
      desc: 'Soluciones a medida para cualquier escala.',
      img: UNSPLASH('photo-1504307651254-35680f356dfd'),
    },
    {
      name: 'Reparaciones express',
      desc: 'Servicio rápido de reparación y reemplazo.',
      img: UNSPLASH('photo-1621905251189-08b45249a9c2'),
    },
  ],
}

// ─── Before / After slider ────────────────────────────────────────────────────
function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(75)
  const dragging = useRef(false)

  // Hint animation on mount: slide from 75→50 to signal interactivity
  useEffect(() => {
    const t = setTimeout(() => setPos(50), 900)
    return () => clearTimeout(t)
  }, [])

  const calc = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos(Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100)))
  }

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    calc(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => { if (dragging.current) calc(e.clientX) }
  const onPointerUp = () => { dragging.current = false }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos(p => Math.max(5, p - 5))
    if (e.key === 'ArrowRight') setPos(p => Math.min(95, p + 5))
  }

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Comparar antes y después"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={5}
      aria-valuemax={95}
      tabIndex={0}
      className="relative h-full w-full select-none cursor-ew-resize focus:outline-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onKeyDown={onKeyDown}
    >
      {/* Before — full width base */}
      <img
        src={before}
        alt="Antes de la instalación"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* After — clipped reveal from the left */}
      <div
        className="absolute inset-0 overflow-hidden transition-[clip-path] duration-700 ease-out"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={after}
          alt="Después de la instalación"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute inset-y-0 left-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white shadow-xl">
          <svg className="h-4 w-4 text-slate-800" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4" />
          </svg>
        </div>
      </div>

      {/* Corner labels */}
      <span className="absolute left-3 top-3 z-10 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
        Antes
      </span>
      <span className="absolute right-3 top-3 z-10 rounded-full bg-emerald-400 px-2.5 py-1 text-[11px] font-semibold text-emerald-950">
        Después
      </span>

      {/* Hint text at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent pb-4 pt-10 text-center">
        <p className="text-[11px] font-medium tracking-widest text-white/60 uppercase">
          Arrastra para comparar
        </p>
      </div>
    </div>
  )
}

// ─── Service card ─────────────────────────────────────────────────────────────
function ServiceCard({ svc, delay }: { svc: Service; delay: number }) {
  const waLink = `https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, me interesa: ' + svc.name)}`

  return (
    <div
      className="anim-fade-up group relative overflow-hidden rounded-2xl bg-neutral-900"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Full-bleed image or before/after slider */}
      <div className="relative h-64 w-full overflow-hidden sm:h-72">
        {svc.beforeImg ? (
          <BeforeAfterSlider before={svc.beforeImg} after={svc.img} />
        ) : (
          <img
            src={svc.img}
            alt={svc.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            loading="lazy"
          />
        )}

        {/* Gradient — always visible */}
        {!svc.beforeImg && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        )}

        {/* Optional floating tag */}
        {svc.tag && !svc.beforeImg && (
          <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-md">
            {svc.tag}
          </span>
        )}
      </div>

      {/* Content — below the image (dark panel) */}
      <div className="flex flex-col gap-3 p-5">
        <div>
          <h3 className="font-display font-semibold text-white">{svc.name}</h3>
          <p className="mt-1 text-[13.5px] leading-relaxed text-white/55">{svc.desc}</p>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[13px] font-semibold text-white backdrop-blur-md transition-all hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300"
        >
          Cotizar
          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function Services() {
  const [tab, setTab] = useState<Category>('hogar')

  return (
    <section id="servicios" className="bg-[#08090e] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="reveal mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.2em] text-emerald-400 uppercase">
            <span className="h-px w-5 bg-emerald-400" />
            Servicios
            <span className="h-px w-5 bg-emerald-400" />
          </div>
          <h2 className="mb-4 font-display text-4xl font-light tracking-tight text-white md:text-5xl">
            ¿Qué necesitas para tu espacio?
          </h2>
          <p className="mx-auto max-w-md text-[15px] leading-relaxed text-white/55">
            Fabricamos e instalamos a tu medida. Cada proyecto incluye cotización sin costo.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal mb-10 flex justify-center gap-2" role="tablist">
          {([
            { id: 'hogar' as const, label: 'Para tu Hogar' },
            { id: 'negocio' as const, label: 'Para tu Negocio' },
          ]).map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all ${
                tab === t.id
                  ? 'bg-white text-slate-950 shadow-md'
                  : 'border border-white/15 bg-white/[0.05] text-white/70 hover:border-white/30 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards grid — key=tab forces remount so CSS animations retrigger on tab switch */}
        <div key={tab} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES[tab].map((svc, i) => (
            <ServiceCard key={svc.name} svc={svc} delay={i * 60} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-md md:p-12">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-emerald-300 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            Asesoría gratuita
          </div>
          <h3 className="mt-4 text-2xl font-light text-white md:text-3xl">
            ¿No estás seguro qué necesitas?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/55">
            Te orientamos sin compromiso. Una llamada o mensaje es suficiente.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-emerald-400 px-6 py-3.5 text-[14px] font-semibold text-emerald-950 ring-1 ring-emerald-300/50 shadow-[0_0_30px_-8px_rgba(52,211,153,0.9)] transition-all hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              Escribir por WhatsApp
            </a>
            <a
              href={`tel:+52${PHONE.slice(-10)}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-[14px] font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              Llamar al taller
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
