import { useState } from 'react'
import { useFolioLookup } from '../hooks/useFolioLookup'
import { STATUS_CONFIG } from '../types/folio'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'

export default function FolioTracker() {
  const [input, setInput] = useState('')
  const { data, loading, error, searched, search, reset } = useFolioLookup()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    search(input)
  }

  return (
    <section id="folio" className="py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-3">
            Consulta tu Pedido
          </h2>
          <p className="text-gray-500 font-light">
            Ingresa tu numero de folio para ver el estado de tu pedido
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
          <label htmlFor="folio-input" className="sr-only">Numero de folio</label>
          <input
            id="folio-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="VD-2026-0001"
            disabled={loading}
            className="flex-1 min-w-0 px-4 py-3 border border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-secondary w-full sm:w-auto shrink-0"
          >
            {loading ? '...' : 'Consultar'}
          </button>
        </form>

        {data && (
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-mono text-gray-500">{data.folio}</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${STATUS_CONFIG[data.status].color}`}>
                {STATUS_CONFIG[data.status].emoji} {STATUS_CONFIG[data.status].label}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Descripcion</span>
                <span className="font-medium text-gray-900">{data.descripcion}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tipo de Vidrio</span>
                <span className="font-medium text-gray-900">{data.tipoVidrio}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Recibido</span>
                <span className="font-medium text-gray-900">{data.fechaRecibido}</span>
              </div>
              {data.fechaEstimada && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Estimado</span>
                  <span className="font-medium text-gray-900">{data.fechaEstimada}</span>
                </div>
              )}
              {data.precio > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Precio</span>
                  <span className="font-medium text-blue-600">${data.precio.toLocaleString()} MXN</span>
                </div>
              )}
              {data.notas && (
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Notas: </span>
                  <span className="text-sm text-gray-700">{data.notas}</span>
                </div>
              )}
            </div>

            <button
              onClick={reset}
              className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition"
            >
              Buscar otro folio
            </button>
          </div>
        )}

        {error && searched && (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">{error}</p>
            <a
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent(`Hola, quiero saber el estado de mi folio ${input}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        )}

        {!searched && (
          <p className="text-center text-sm text-gray-400 font-light">
            Prueba con: VD-2026-0001, VD-2026-0002 o VD-2026-0003
          </p>
        )}
      </div>
    </section>
  )
}
