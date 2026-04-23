import type { Folio, FolioStatus } from '../types/folio'

const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY
const SHEETS_ID = import.meta.env.VITE_SHEETS_ID

export async function lookupFolio(folioNumber: string): Promise<Folio | null> {
  if (!API_KEY || !SHEETS_ID) {
    // Demo mode: return mock data
    return getMockFolio(folioNumber)
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_ID}/values/Folios!A:J?key=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) return null

  const data = await res.json()
  const rows: string[][] = data.values || []

  // Skip header row, find matching folio
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i]
    if (row[0]?.toUpperCase() === folioNumber.toUpperCase()) {
      return {
        folio: row[0],
        cliente: row[1] || '',
        telefono: row[2] || '',
        descripcion: row[3] || '',
        tipoVidrio: row[4] || '',
        status: (row[5] || 'recibido') as FolioStatus,
        fechaRecibido: row[6] || '',
        fechaEstimada: row[7] || '',
        notas: row[8] || '',
        precio: Number(row[9]) || 0,
      }
    }
  }
  return null
}

// Mock data for demo (when no Google Sheets configured)
function getMockFolio(folioNumber: string): Folio | null {
  const mockData: Record<string, Folio> = {
    'VD-2026-0001': {
      folio: 'VD-2026-0001',
      cliente: 'Laura García',
      telefono: '5216634875412',
      descripcion: 'Espejo biselado 1.50 x 0.80m',
      tipoVidrio: 'Espejo 4mm biselado',
      status: 'en_corte',
      fechaRecibido: '2026-03-01',
      fechaEstimada: '2026-03-03',
      notas: 'Cortando y biselando, listo en 2 días',
      precio: 1800,
    },
    'VD-2026-0002': {
      folio: 'VD-2026-0002',
      cliente: 'Pedro Ramírez',
      telefono: '5216639876543',
      descripcion: 'Cancel de baño corredizo',
      tipoVidrio: 'Vidrio templado 9mm',
      status: 'listo',
      fechaRecibido: '2026-02-25',
      fechaEstimada: '2026-03-01',
      notas: 'Listo para instalar. Envío incluido.',
      precio: 5200,
    },
    'VD-2026-0003': {
      folio: 'VD-2026-0003',
      cliente: 'Sofía Navarro',
      telefono: '5216635551234',
      descripcion: '4 vidrios para ventana',
      tipoVidrio: 'Vidrio claro 6mm',
      status: 'recibido',
      fechaRecibido: '2026-03-02',
      fechaEstimada: '2026-03-05',
      notas: 'En espera de confirmación de medidas exactas',
      precio: 2400,
    },
  }
  return mockData[folioNumber.toUpperCase()] || null
}
