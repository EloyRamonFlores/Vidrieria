# Changelog — Luminox Glass Landing Page

## [Unreleased]

### Hero — Video Scrubbing (2026-05-01)
**Problema:** `video.currentTime` directo al hacer scroll producía saltos visibles porque el browser decodifica desde el keyframe más cercano, no desde el frame exacto.

**Solución implementada:** Pre-extracción de frames con `requestVideoFrameCallback` + reproducción a 4x velocidad.
- El video corre a 4x → 8 segundos de contenido extraído en ~2 segundos reales
- `requestVideoFrameCallback` captura cada frame **después de que el browser lo renderizó** (no al pedirlo), garantizando 0 frames perdidos
- Frames guardados como `ImageData` (sync) durante reproducción, convertidos a `ImageBitmap` (GPU-ready) al terminar
- En scroll: `ctx.drawImage(bitmaps[idx])` — sin seek, sin decodificación, instántaneo
- Loader minimalista: barra ámbar pequeña en esquina inferior del edificio

**Alternativas descartadas:**
- `currentTime` + lerp — sigue choppy por decodificación de keyframes
- Seek manual frame a frame — lento (~5s de carga) y mismo problema
- `video.playbackRate` + lerp — impredecible en distintos browsers

---

### Hero — Diseño "Sticker" (2026-05-01)
Rediseño del hero de fullscreen a layout asimétrico:
- Edificio (con fondo removido vía rembg) anclado al "suelo" izquierdo
- Contenido (headline + CTAs + stats) en columna derecha
- `perspective(1400px) rotateY(3deg)` para sensación 3D sutil
- `drop-shadow` sigue el contorno real del edificio (no rectángulo)
- Grid arquitectónico + glow ambiente como fondo

### Video — Remoción de fondo (2026-05-01)
- Fondo del video removido con `rembg[cpu]` (IA, modelo U2Net)
- 192 frames procesados frame a frame
- Output: `hero-video.webm` (VP9 + alpha channel, 0.8 MB)
- Herramienta: `imageio` + `imageio-ffmpeg` para codificación WebM con transparencia

---

## [1.0.0] — 2026-04-29

### Landing page inicial
- 15 componentes React + Tailwind
- Paleta teal/esmeralda + amber
- SEO optimizado (LocalBusiness schema)
- Deploy en Vercel
