import LogoLuminox from '../assets/logo-luminox.png'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'
const BUSINESS_NAME = import.meta.env.VITE_BUSINESS_NAME || 'Vidrieria del Centro'
const MAPS_URL = 'https://www.google.com/maps/place/Luminox+Glass+Company/@32.4025394,-117.0557907,17z/data=!3m1!4b1!4m6!3m5!1s0x80d931a3455dad59:0x29c0d5c0c88d1af2!8m2!3d32.4025395!4d-117.0509198!16s%2Fg%2F11mz0b82sx?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Mobile layout — compact */}
        <div className="flex flex-col items-center gap-4 md:hidden">
          {/* Business name */}
          <div className="flex items-center gap-2 text-white text-lg font-light">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
            {BUSINESS_NAME}
          </div>

          {/* Phone */}
          <a href={`tel:+52${PHONE.replace('52', '')}`} className="flex items-center gap-2 text-sm hover:text-white transition">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            661 130 1220
          </a>

          {/* Google Maps button */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Abrir en Google Maps
          </a>
        </div>

        {/* Desktop layout — full grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white text-lg font-light mb-3">
              <img src={LogoLuminox} alt="Luminox Logo" className="h-8 w-auto" />
              {BUSINESS_NAME}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Taller familiar de vidrieria en Rosarito. Corte a medida, instalacion profesional y garantia en cada proyecto.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/luminoxglasscompany"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-medium mb-3">Horarios</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span className="text-white">9 a.m. – 5 p.m.</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">9 a.m. – 2 p.m.</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-red-400">Cerrado</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>Benito Juárez, Independencia, 22710 Playas de Rosarito, B.C.</li>
              <li>
                <a href={`tel:+52${PHONE.replace('52', '')}`} className="hover:text-white transition flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  661 130 1220
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Ver en Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] font-medium tracking-widest uppercase text-gray-500">Hecho por</span>
            <a
              href="https://github.com/agencia-digital-koku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline hover:scale-105 transition-transform duration-300"
              style={{ letterSpacing: '-0.06em' }}
            >
              <span className="text-xl font-black text-white">K</span>
              <span className="text-lg font-black text-amber-500">o</span>
              <span className="text-lg font-black text-slate-400">k</span>
              <span className="text-xl font-black text-white">u</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
