import LocalImage from '../assets/local-luminox.webp'

export default function GoogleMap() {
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.8!2d-117.05043700000001!3d32.402693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94d8d8d8d8d8d%3A0x0!2sLuminox%20Glass%20Company%20-%20Benito%20Ju%C3%A1rez%205003!5e0!3m2!1ses!2smx!4v1712345678901'
  const mapsLink = 'https://www.google.com/maps/place/Luminox+Glass+Company/@32.4025394,-117.0557907,17z/data=!3m1!4b1!4m6!3m5!1s0x80d931a3455dad59:0x29c0d5c0c88d1af2!8m2!3d32.4025395!4d-117.0509198!16s%2Fg%2F11mz0b82sx?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D'

  return (
    <section id="ubicacion" className="py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-3">
            Encuentranos
          </h2>
          <p className="text-gray-500 font-light">
            Visitanos en nuestro taller para una cotizacion gratuita
          </p>
        </div>

        {/* Local Photo + Map Grid */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 mb-8">
          {/* Local Photo */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={LocalImage}
              alt="Local de Luminox Glass"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '250px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion del negocio"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm mb-3 font-light">
            Benito Juárez, Independencia, 22710 Playas de Rosarito, B.C.
          </p>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition"
          >
            Abrir en Google Maps →
          </a>
        </div>
      </div>
    </section>
  )
}
