import { useEffect, useRef, useState } from 'react'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'
const WA_MSG = encodeURIComponent('Hola Luminox, quiero cotizar mi proyecto en vidrio templado.')

export default function ScrollVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  // Default to a tall-ish aspect (typical screen recording). Updates once metadata loads.
  const [videoAspect, setVideoAspect] = useState<number>(9 / 16)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateAspect = () => {
      if (video.videoWidth && video.videoHeight) {
        setVideoAspect(video.videoWidth / video.videoHeight)
      }
    }
    if (video.readyState >= 1) updateAspect()
    else video.addEventListener('loadedmetadata', updateAspect, { once: true })

    // Some browsers (mobile Safari) need a user gesture, but autoplay+muted+playsInline usually works.
    const tryPlay = () => {
      const p = video.play()
      if (p && typeof p.catch === 'function') {
        p.catch(() => { /* will retry on visibility / interaction */ })
      }
    }
    tryPlay()

    return () => {
      video.removeEventListener('loadedmetadata', updateAspect)
    }
  }, [])

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-[#05060a] min-h-[100svh] flex items-stretch"
      aria-label="Luminox Glass — vidrio templado de alta gama"
    >
      {/* Ambient backdrop — soft radial gradients (brand: blue + gold) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        <div className="absolute -right-[10%] top-1/2 h-[120%] w-[55%] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.12),rgba(251,191,36,0)_60%)] blur-3xl" />
        <div className="absolute -left-[10%] -top-[20%] h-[60%] w-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.20),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_50%)]" />
      </div>

      {/* ============ MOBILE: full-bleed video behind everything ============ */}
      <div className="absolute inset-0 z-0 md:hidden">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/85 via-black/10 to-black/90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/85 via-black/25 to-transparent" />
      </div>

      {/* ============ DESKTOP: video panel anchored right, shaped to video's real aspect ============ */}
      <div
        className="
          pointer-events-none absolute right-6 top-1/2 z-0 hidden -translate-y-1/2
          md:block lg:right-10
        "
        style={{
          height: 'min(80vh, 720px)',
          aspectRatio: videoAspect,
          maxWidth: 'min(45vw, 640px)',
        }}
        aria-hidden="true"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_50px_140px_-30px_rgba(0,0,0,0.85),0_0_60px_-12px_rgba(29,78,216,0.22)] ring-1 ring-inset ring-white/5">
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
          {/* Cinematic inner gradients */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-black/30 via-transparent to-black/10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
          {/* Subtle grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />
          {/* Floating chip */}
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] text-white/85 uppercase backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
            Proyecto Luminox
          </div>
        </div>
      </div>

      {/* ============ TEXT CONTENT ============ */}
      <div
        className="
          relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end
          px-6 pb-24 pt-32
          md:px-10 md:pb-28 md:pt-32
        "
      >
        <div className="md:max-w-[52%] lg:max-w-[50%] md:pr-6">
          <div
            className="anim-fade-up mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-amber-400/30 bg-amber-400/[0.10] px-3.5 py-1.5 text-[10.5px] font-semibold tracking-[0.22em] text-amber-300 uppercase backdrop-blur-md md:text-[11px]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,1)]" />
            Ingeniería en Vidrio Templado
          </div>

          <h1 className="anim-fade-up-1 font-display text-[clamp(2.25rem,4.6vw,4.25rem)] font-normal md:font-light leading-[1.02] tracking-[-0.035em] text-white">
            Transformamos
            <span className="block">tu visión</span>
            <span className="block">
              en realidad<span className="text-amber-400">.</span>
            </span>
          </h1>

          <p className="anim-fade-up-2 mt-5 max-w-md text-[13.5px] leading-relaxed text-white/50 md:mt-7 md:text-[16.5px] md:text-white/65">
            Frentes comerciales y residenciales de alta gama en{' '}
            <span className="font-medium text-white">Rosarito y alrededores</span>.
            Diseño, fabricación e instalación con estándar arquitectónico.
          </p>

          <div className="anim-fade-up-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
            <a
              href={`https://wa.me/${PHONE}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3.5 text-[14px] font-semibold text-white ring-1 ring-emerald-400/60 shadow-[0_0_40px_-10px_rgba(34,197,94,0.85)] transition-all hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_60px_-6px_rgba(34,197,94,1)]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              Cotizar gratis por WhatsApp
            </a>

            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-[14px] font-medium text-white backdrop-blur-md transition-all hover:border-white/35 hover:bg-white/[0.08]"
            >
              Ver Proyectos
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="anim-fade-up-4 mt-12 hidden items-center gap-x-7 gap-y-2 text-[11px] font-medium tracking-[0.06em] text-white/40 md:flex">
            {['Diseño arquitectónico', 'Fabricación a medida', 'Garantía por escrito'].map((label) => (
              <span key={label} className="flex items-center gap-2">
                <span className="h-px w-5 bg-white/20" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[10px] tracking-[0.3em] text-white/40 uppercase md:flex"
        aria-hidden="true"
      >
        Scroll
        <span className="block h-6 w-px animate-pulse bg-gradient-to-b from-white/50 to-transparent" />
      </div>

      {/* Bottom fade — smooth transition from dark hero to white sections below */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 bg-gradient-to-b from-transparent to-white"
        aria-hidden="true"
      />
    </section>
  )
}
