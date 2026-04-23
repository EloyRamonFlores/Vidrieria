export default function AboutSnippet() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center reveal">
          {/* Stats side */}
          <div className="md:col-span-2 flex md:flex-col gap-6 md:gap-8">
            <div>
              <span className="text-4xl font-light text-blue-600">+15</span>
              <p className="text-sm text-gray-500 mt-1">años de experiencia</p>
            </div>
            <div>
              <span className="text-4xl font-light text-blue-600">+200</span>
              <p className="text-sm text-gray-500 mt-1">hogares en Rosarito</p>
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-3 reveal reveal-delay-2">
            <h2 className="text-2xl md:text-3xl font-light text-slate-800 mb-4">
              Un taller familiar, no una fabrica
            </h2>
            <p className="text-gray-500 leading-relaxed mb-3">
              Somos un taller de vidrieria en Rosarito con mas de 15 años de experiencia. Aqui no hay produccion en serie — cada proyecto lo medimos, cortamos e instalamos nosotros mismos. Nos importa que el resultado quede bien porque es nuestro nombre el que esta en juego.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Si necesitas algo para tu casa o negocio, platica con nosotros. La cotizacion es gratis y sin compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
