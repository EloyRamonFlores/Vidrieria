import { useState, useCallback } from 'react'
import type { Folio } from '../types/folio'
import { lookupFolio } from '../lib/sheets'

export function useFolioLookup() {
  const [data, setData] = useState<Folio | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searched, setSearched] = useState(false)

  const search = useCallback(async (folioNumber: string) => {
    const trimmed = folioNumber.trim()
    if (!trimmed) {
      setError('Ingresa un número de folio')
      return
    }

    setLoading(true)
    setError(null)
    setData(null)
    setSearched(true)

    try {
      const result = await lookupFolio(trimmed)
      if (result) {
        setData(result)
      } else {
        setError('No encontramos ese folio. Verifica el número o contáctanos por WhatsApp.')
      }
    } catch {
      setError('Error al consultar. Intenta de nuevo o contáctanos por WhatsApp.')
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setSearched(false)
  }, [])

  return { data, loading, error, searched, search, reset }
}
