import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'

export default function ScrollVideoHero() {
  const sectionRef   = useRef<HTMLDivElement>(null)
  const videoRef     = useRef<HTMLVideoElement>(null)
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const bitmaps      = useRef<ImageBitmap[]>([])
  const [ready, setReady] = useState(false)
  const [pct,   setPct]   = useState(0)

  useEffect(() => {
    const video     = videoRef.current
    const canvas    = canvasRef.current
    const container = containerRef.current
    const section   = sectionRef.current
    if (!video || !canvas || !container || !section) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const syncSize = () => {
      canvas.width  = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    const ro = new ResizeObserver(syncSize)
    ro.observe(container)

    const extract = () => {
      syncSize()
      const w = container.offsetWidth  || 380
      const h = container.offsetHeight || 675

      // Canvas offscreen para capturar frames
      const off    = document.createElement('canvas')
      off.width    = w
      off.height   = h
      const offCtx = off.getContext('2d')!

      const captured: ImageData[] = []
      let   frameIdx = 0

      const drawScaled = () => {
        offCtx.clearRect(0, 0, w, h)
        const scale = Math.min(w / video.videoWidth, h / video.videoHeight)
        const dx    = (w - video.videoWidth  * scale) / 2
        const dy    = (h - video.videoHeight * scale) / 2
        offCtx.drawImage(video, dx, dy, video.videoWidth * scale, video.videoHeight * scale)
      }

      // Captura primer frame inmediatamente para mostrar algo
      drawScaled()
      ctx.clearRect(0, 0, w, h)
      ctx.putImageData(offCtx.getImageData(0, 0, w, h), 0, 0)

      // requestVideoFrameCallback captura frames a medida que el video avanza
      // (mucho más rápido que seek manual)
      const captureFrame = () => {
        frameIdx++
        // Captura cada frame (el video corre a 4x, así que son ~48fps efectivos)
        drawScaled()
        captured.push(offCtx.getImageData(0, 0, w, h))
        setPct(Math.round((video.currentTime / video.duration) * 100))

        if (video.currentTime < video.duration - 0.05) {
          video.requestVideoFrameCallback(captureFrame)
        } else {
          // Video terminó — convertir ImageData → ImageBitmap (GPU)
          video.pause()
          Promise.all(
            captured.map(id => {
              offCtx.putImageData(id, 0, 0)
              return createImageBitmap(off)
            })
          ).then(bmps => {
            bitmaps.current = bmps
            setReady(true)

            // Mostrar primer frame
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(bmps[0], 0, 0, canvas.width, canvas.height)

            ScrollTrigger.create({
              trigger: section,
              start:   'top top',
              end:     'bottom bottom',
              onUpdate: (self) => {
                const idx = Math.round(self.progress * (bmps.length - 1))
                const bm  = bmps[idx]
                if (!bm) return
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(bm, 0, 0, canvas.width, canvas.height)
              },
            })
          })
        }
      }

      // Reproducir a 4x → extracción en ~2s para video de 8s
      video.playbackRate = 4.0
      video.requestVideoFrameCallback(captureFrame)
      video.play()
    }

    if (video.readyState >= 1) extract()
    else video.addEventListener('loadedmetadata', extract, { once: true })

    return () => {
      ro.disconnect()
      video.removeEventListener('loadedmetadata', extract)
      ScrollTrigger.getAll().forEach(t => t.kill())
      bitmaps.current.forEach(bm => bm.close())
      bitmaps.current = []
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[130vh]"
      aria-label="Luminox Glass — vidrio templado de alta gama"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Background oscuro premium */}
        <div className="absolute inset-0 bg-[#05060a]" />

        {/* Ambient glow — verde esmeralda derecha */}
        <div
          className="pointer-events-none absolute -right-[10%] top-1/2 h-[120%] w-[55%] -translate-y-1/2 blur-3xl"
          style={{ background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, transparent 60%)' }}
        />
        {/* Ambient glow — índigo izquierda */}
        <div
          className="pointer-events-none absolute -left-[10%] -top-[20%] h-[60%] w-[50%] blur-3xl"
          style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
        />
        {/* Ambient glow amber — fondo edificio */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-[45%] h-[40%] blur-3xl"
          style={{ background: 'radial-gradient(ellipse at 30% 100%, rgba(251,191,36,0.12) 0%, transparent 70%)' }}
        />

        {/* Grid sutil oscuro */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),' +
              'linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Hidden video */}
        <video
          ref={videoRef}
          src="/hero-video.webm"
          className="hidden"
          preload="auto"
          crossOrigin="anonymous"
          muted
          playsInline
        />

        {/* Grid: edificio | contenido */}
        <div className="relative h-full w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[42%_58%] items-center px-6 lg:px-12 pt-20 lg:pt-24 pb-12 gap-6 lg:gap-8">

          {/* ── EDIFICIO ── */}
          <div className="relative h-full flex items-end justify-center order-2 lg:order-1">
            <div
              className="relative"
              style={{
                width: 'clamp(220px, 32vw, 380px)',
                aspectRatio: '9 / 16',
                maxHeight: '78vh',
              }}
            >
              <div
                ref={containerRef}
                className="relative w-full h-full"
                style={{
                  transformOrigin: 'bottom center',
                  transform: 'perspective(1400px) rotateY(3deg) rotateX(1deg)',
                }}
              >
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    filter:
                      'drop-shadow(0px 28px 40px rgba(15,23,42,0.20)) ' +
                      'drop-shadow(0px 8px 16px rgba(15,23,42,0.10))',
                  }}
                />

                {/* Loader minimalista */}
                {!ready && (
                  <div className="absolute inset-0 flex flex-col items-end justify-end pb-4 pr-4 gap-1.5">
                    <div className="w-16 bg-slate-200/60 rounded-full h-0.5 overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all duration-100"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="text-[9px] text-slate-400/70 font-medium tabular-nums">{pct}%</p>
                  </div>
                )}
              </div>

              {/* Sombra de piso */}
              <div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                  bottom: '-10px',
                  width: '70%',
                  height: '24px',
                  background: 'radial-gradient(ellipse, rgba(15,23,42,0.18) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                }}
              />
            </div>
          </div>

          {/* ── CONTENIDO ── */}
          <div className="flex flex-col justify-center max-w-xl order-1 lg:order-2">

            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-[11px] font-bold tracking-widest text-amber-300 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-pulse rounded-full bg-amber-400" />
                <span className="relative h-2 w-2 rounded-full bg-amber-400" />
              </span>
              Ingeniería en Vidrio Templado
            </div>

            <h1
              className="mb-4 font-light leading-[1.05] tracking-tight text-white"
              style={{ fontSize: 'clamp(2rem,3.6vw,3.2rem)' }}
            >
              Luminox Glass:
              <span className="block text-amber-300 mt-1">
                Transparencia que Construye Confianza
              </span>
            </h1>

            <div className="w-10 h-[3px] rounded-full bg-amber-400 mb-5" />

            <p className="mb-2 text-white/70 leading-relaxed" style={{ fontSize: 'clamp(0.95rem,1.4vw,1.125rem)' }}>
              Ingeniería en cristal templado y frentes comerciales en Rosarito.
            </p>
            <p className="mb-8 text-sm text-white/40">
              Desplaza para explorar nuestro portafolio
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hola Luminox, quiero una cotización sin compromiso')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-teal-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-600/25"
              >
                <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                </svg>
                Cotizar Ahora
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById('servicios') ?? document.getElementById('proyectos')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                  else window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-amber-400/40 hover:bg-white/10 hover:text-white"
              >
                <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
                Ver Proyectos
              </button>
            </div>

            <div className="mt-10 flex gap-8 border-t border-white/10 pt-6">
              {[
                { n: '8+',   label: 'Años de experiencia' },
                { n: '200+', label: 'Proyectos completados' },
                { n: '98%',  label: 'Clientes satisfechos' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <p className="text-2xl font-light text-white tracking-tight">{n}</p>
                  <p className="text-[11px] text-white/40 mt-0.5 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 z-10">
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase">Desplaza</span>
          <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
