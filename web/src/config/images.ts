// Image registry — custom photos from client (in /public/images/)
// To update: replace the file in public/images/ keeping the same filename.

function unsplash(id: string, w: number): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`
}

export const IMAGES = {
  hero: {
    main: { src: '/images/hero-vidrio.jpg', alt: 'Taller de vidrio artesanal' },
  },
  portfolio: [
    { src: '/images/portfolio-cancel-bano.webp',      alt: 'Cancel de baño en vidrio templado',          project: 'Cancel de Baño',        spec: 'Vidrio templado 10mm',  span: true, description: 'Cancel de baño en vidrio templado de alta calidad. Fabricado con vidrio templado de 10mm para máxima seguridad y durabilidad. Marco de aluminio anodizado. Instalación profesional incluida.' },
    { src: '/images/portfolio-espejo-sala.webp',       alt: 'Espejo decorativo a medida en sala',          project: 'Espejo Biselado',        spec: 'Espejo 6mm biselado', description: 'Espejo biselado a medida con acabado elegante. Vidrio de 6mm con borde biselado de 45°. Marco decorativo opcional. Perfecto para cualquier estilo de decoración.' },
    { src: '/images/portfolio-vitrina.webp',           alt: 'Vitrina comercial en vidrio claro',           project: 'Vitrina Comercial',      spec: 'Vidrio claro 8mm', description: 'Vitrina comercial con vidrio claro de 8mm. Estructura de aluminio resistente. Diseño moderno para mostrador de tienda. Cristales removibles para fácil limpieza.' },
    { src: '/images/portfolio-barandal.webp',          alt: 'Barandal de vidrio templado en balcon',       project: 'Barandal Residencial',   spec: 'Vidrio templado 12mm',  span: true, description: 'Barandal de vidrio templado de 12mm para balcón residencial. Cumple con normativas de seguridad. Marco de aluminio anodizado color plata. Instalación profesional en fachada.' },
    { src: '/images/portfolio-division-oficina.webp',  alt: 'Cancelería de aluminio con vidrio claro en fachada', project: 'Cancelería Comercial',   spec: 'Aluminio + vidrio claro 6mm', description: 'Cancelería comercial con aluminio y vidrio claro de 6mm. Estructura modular y resistente. Perfecto para oficinas y espacios comerciales. Excelente aislamiento térmico.' },
    { src: '/images/portfolio-mesa-vidrio.webp',       alt: 'Mesa de vidrio templado para comedor',        project: 'Mesa de Comedor',        spec: 'Vidrio templado 15mm', description: 'Mesa de comedor con vidrio templado de 15mm. Base de estructura metálica resistente. Vidrio templado garantiza seguridad y durabilidad. Fácil de limpiar y mantener.' },
    { src: '/images/portfolio-ventanas.webp',          alt: 'Ventanas de vidrio instaladas en fachada',    project: 'Ventanas Residenciales', spec: 'Vidrio doble 6+6mm', description: 'Ventanas residenciales con vidrio doble de 6+6mm. Excelente aislamiento térmico y acústico. Marco de aluminio con sello de silicona. Instalación profesional incluida.' },
    { src: '/images/portfolio-vitral.webp',            alt: 'Vitral decorativo artesanal',                 project: 'Vitral Artistico',       spec: 'Vidrio grabado 8mm', description: 'Vitral artístico con vidrio grabado de 8mm. Diseño personalizado según especificaciones. Técnica de grabado decorativo de alta calidad. Marco de aluminio incluido.' },
    { src: '/images/portfolio-barandal-2.webp',       alt: 'Barandal de vidrio templado en escalera',     project: 'Barandal Escalera',      spec: 'Vidrio templado 12mm', description: 'Barandal de escalera con vidrio templado de 12mm. Cumple normativas de seguridad. Instalación segura en estructura de metal. Marco anodizado color natural.' },
    { src: '/images/portfolio-cancel-2.webp',         alt: 'Cancelería de aluminio blanco en fachada',    project: 'Cancelería Exterior',    spec: 'Aluminio blanco + vidrio claro', description: 'Cancelería exterior con aluminio blanco y vidrio claro. Resistente a intemperie. Acabado premium con sello de silicona. Estructura modular y versátil.' },
    { src: '/images/portfolio-domo-2.webp',           alt: 'Domo de vidrio templado en techo',            project: 'Domo Residencial II',    spec: 'Vidrio templado 10mm', span: true, description: 'Domo de techo con vidrio templado de 10mm. Estructura de aluminio anodizado. Excelente iluminación natural. Instalación profesional a prueba de filtraciones.' },
    { src: '/images/portfolio-puerta-comercial.webp', alt: 'Puerta comercial de vidrio con fijos',        project: 'Puerta Comercial',       spec: 'Vidrio claro 8mm', description: 'Puerta comercial con vidrio claro de 8mm y fijos laterales. Marco de aluminio resistente. Mecanismo de cierre automático. Perfecto para acceso principal.' },
    { src: '/images/portfolio-puerta-negra.webp',     alt: 'Puerta de aluminio negro con vidrio claro',   project: 'Puerta de Aluminio',     spec: 'Aluminio negro + vidrio 6mm', description: 'Puerta con aluminio negro y vidrio claro de 6mm. Acabado moderno y elegante. Marco anodizado en color negro. Excelente relación calidad-precio.' },
    { src: '/images/portfolio-cancel-bano-2.webp',    alt: 'Cancel de baño en vidrio templado',           project: 'Cancel de Baño II',      spec: 'Vidrio templado 8mm', description: 'Cancel de baño con vidrio templado de 8mm. Diseño moderno y funcional. Marco de aluminio anodizado. Garantía de 5 años en estructura.' },
    { src: '/images/portfolio-ventana-2.webp',        alt: 'Ventana California con vidrio claro',         project: 'Ventana California II',  spec: 'Vidrio simple 6mm', description: 'Ventana California con vidrio simple de 6mm. Estructura de aluminio estándar. Excelente para ventilación. Mantenimiento mínimo requerido.' },
    { src: '/images/portfolio-ventana-3.webp',        alt: 'Ventana residencial de vidrio claro',         project: 'Ventana Residencial',    spec: 'Vidrio doble 6+6mm', description: 'Ventana residencial con vidrio doble de 6+6mm. Máximo aislamiento térmico y acústico. Marco de aluminio con burletes. Instalación en fachada.' },
  ],
  services: {
    canceles:   { src: '/images/service-canceles.webp',   alt: 'Cancel de baño de vidrio templado moderno' },
    espejos:    { src: '/images/service-espejos.webp',    alt: 'Espejo a medida elegante' },
    ventanas:   { src: '/images/service-ventanas.webp',   alt: 'Ventanas de vidrio instaladas' },
    vitrinas:   { src: '/images/service-vitrinas.webp',   alt: 'Vitrina comercial de vidrio' },
    barandales: { src: '/images/service-barandales.webp', alt: 'Barandal de vidrio templado' },
    decorativo: { src: '/images/service-decorativo.webp', alt: 'Vidrio decorativo esmerilado' },
  },
  glassTypes: {
    templado:   { src: '/images/glass-templado.webp',   alt: 'Vidrio templado transparente' },
    laminado:   { src: '/images/glass-laminado.webp',   alt: 'Vidrio laminado de seguridad' },
    espejo:     { src: '/images/glass-espejo.webp',     alt: 'Espejo biselado' },
    esmerilado: { src: '/images/glass-esmerilado.webp', alt: 'Vidrio esmerilado opaco' },
    grabado:    { src: '/images/glass-grabado.webp',    alt: 'Vidrio grabado con patron' },
    tintado:    { src: '/images/glass-tintado.webp',    alt: 'Vidrio tintado bronce' },
  },
  process: {
    step1: { src: '/images/process-medicion.webp',    alt: 'Medicion profesional en sitio' },
    step2: { src: '/images/process-corte.webp',       alt: 'Corte de vidrio con precision en taller' },
    step3: { src: '/images/process-instalacion.webp', alt: 'Instalacion profesional de vidrio' },
  },
  featured: {
    main: { src: '/images/featured-project.webp', alt: 'Domo de vidrio templado con ventilacion — proyecto destacado' },
  },
  testimonials: {
    roberto: { src: unsplash('photo-1507003211169-0a1dd7228f2d', 200), alt: 'Roberto M.' },
    laura:   { src: unsplash('photo-1494790108377-be9c29b29330', 200), alt: 'Laura S.' },
    fernando:{ src: unsplash('photo-1472099645785-5658abf4ff4e', 200), alt: 'Ing. Fernando D.' },
  },
  cta: {
    background: { src: '/images/cta-bg.webp', alt: 'Taller de vidrieria atmosferico' },
  },
}
