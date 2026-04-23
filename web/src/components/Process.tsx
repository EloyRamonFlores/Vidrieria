const steps = [
  {
    number: '01',
    shortTitle: 'Medimos',
  },
  {
    number: '02',
    shortTitle: 'Fabricamos',
  },
  {
    number: '03',
    shortTitle: 'Instalamos',
  },
]

export default function Process() {
  return (
    <section className="py-8 md:py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-14 reveal">
          <h2 className="text-[1.5rem] md:text-[2rem] font-light text-slate-800 leading-[1.3] tracking-[-0.01em]">
            Como Trabajamos
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center`}>
              <span className="text-4xl md:text-5xl font-thin text-blue-300 block mb-1">{step.number}</span>
              <h3 className="text-sm md:text-lg font-medium text-slate-800 leading-tight">{step.shortTitle}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
