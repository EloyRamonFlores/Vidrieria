import { useState, useEffect } from 'react'
import { useFolioLookup } from '../hooks/useFolioLookup'
import { STATUS_CONFIG } from '../types/folio'

interface FolioModalProps {
  isOpen: boolean
  onClose: () => void
}

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '526612421242'

export default function FolioModal({ isOpen, onClose }: FolioModalProps) {
  const [input, setInput] = useState('')
  const { data, loading, error, searched, search, reset } = useFolioLookup()

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    search(input)
  }

  const handleClose = () => {
    reset()
    setInput('')
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking directly on the backdrop, not its children
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-light text-slate-800">
              Consulta tu Pedido
            </h2>
            <p className="text-sm text-gray-500 font-light mt-1">
              Ingresa tu número de folio
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition p-1 rounded-lg hover:bg-gray-50"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
            <label htmlFor="folio-input" className="sr-only">Numero de folio</label>
            <input
              id="folio-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="VD-2026-0001"
              disabled={loading}
              autoFocus
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-secondary w-full"
            >
              {loading ? 'Buscando...' : 'Consultar'}
            </button>
          </form>

          {/* Results */}
          {data && (
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-gray-600">{data.folio}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${STATUS_CONFIG[data.status].color}`}>
                  {STATUS_CONFIG[data.status].emoji} {STATUS_CONFIG[data.status].label}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Descripción</span>
                  <span className="font-medium text-gray-900">{data.descripcion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tipo de Vidrio</span>
                  <span className="font-medium text-gray-900">{data.tipoVidrio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recibido</span>
                  <span className="font-medium text-gray-900">{data.fechaRecibido}</span>
                </div>
                {data.fechaEstimada && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimado</span>
                    <span className="font-medium text-gray-900">{data.fechaEstimada}</span>
                  </div>
                )}
                {data.precio > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Precio</span>
                    <span className="font-medium text-blue-600">${data.precio.toLocaleString()} MXN</span>
                  </div>
                )}
                {data.notas && (
                  <div className="pt-3 border-t border-blue-100">
                    <span className="text-sm text-gray-600">Notas: </span>
                    <span className="text-sm text-gray-700">{data.notas}</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  reset()
                  setInput('')
                }}
                className="mt-4 text-sm text-gray-500 hover:text-blue-600 transition font-medium"
              >
                Buscar otro folio
              </button>
            </div>
          )}

          {/* Error state */}
          {error && searched && (
            <div className="text-center py-6 mb-6">
              <p className="text-gray-600 mb-4">{error}</p>
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent(`Hola, quiero saber el estado de mi folio ${input}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.411-2.391-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-5.02 5.97-5.02 9.869 0 3.859 1.921 7.599 5.281 9.468.52.278 1.163.646 2.025 1.028L7.93 23.313l3.59-1.316c.55.213 1.05.371 1.456.423 3.51.608 6.799-1.588 8.383-4.651.793-1.58 1.201-3.393 1.201-5.242 0-9.171-7.356-16.611-16.4-16.611z" />
                </svg>
                Preguntar por WhatsApp
              </a>
            </div>
          )}

          {/* Hint text */}
          {!searched && (
            <p className="text-center text-sm text-gray-400 font-light">
              Prueba con: VD-2026-0001, VD-2026-0002 o VD-2026-0003
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
