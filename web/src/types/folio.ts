export type FolioStatus =
  | 'recibido'
  | 'en_corte'
  | 'en_templado'
  | 'listo'
  | 'instalado'

export interface Folio {
  folio: string
  cliente: string
  telefono: string
  descripcion: string  // e.g., "Espejo 1.20 x 0.80m"
  tipoVidrio: string   // e.g., "Vidrio templado 6mm"
  status: FolioStatus
  fechaRecibido: string
  fechaEstimada: string
  notas: string
  precio: number
}

export const STATUS_CONFIG: Record<FolioStatus, { label: string; color: string; emoji: string }> = {
  recibido:    { label: 'Pedido Recibido',  color: 'bg-gray-100 text-gray-800',    emoji: '📥' },
  en_corte:    { label: 'En Corte',         color: 'bg-yellow-100 text-yellow-800', emoji: '🔪' },
  en_templado: { label: 'En Templado',      color: 'bg-blue-100 text-blue-800',     emoji: '🔥' },
  listo:       { label: 'Listo',            color: 'bg-green-100 text-green-800',  emoji: '✅' },
  instalado:   { label: 'Instalado',        color: 'bg-gray-200 text-gray-600',    emoji: '🏠' },
}
