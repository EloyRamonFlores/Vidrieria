// Glass types for the recognition strip (replaces brandLogos.tsx)

import type { ReactNode } from 'react'

export interface GlassType {
  name: string
  defaultColor: string // hex color (default state)
  hoverColor: string   // hex color (hover state - more saturated)
  logo: ReactNode
}

export const GLASS_TYPES: GlassType[] = [
  {
    name: 'Vidrio Templado',
    defaultColor: '#0d9488',
    hoverColor: '#0f766e',
    logo: <span className="font-black text-sm tracking-[0.08em] uppercase">Templado</span>,
  },
  {
    name: 'Vidrio Laminado',
    defaultColor: '#14b8a6',
    hoverColor: '#0d9488',
    logo: <span className="font-black text-sm tracking-[0.08em] uppercase">Laminado</span>,
  },
  {
    name: 'Espejo',
    defaultColor: '#2dd4bf',
    hoverColor: '#14b8a6',
    logo: <span className="font-black text-sm tracking-[0.08em] uppercase">Espejo</span>,
  },
  {
    name: 'Vidrio Flotado',
    defaultColor: '#0d9488',
    hoverColor: '#0f766e',
    logo: <span className="font-black text-sm tracking-[0.08em] uppercase">Flotado</span>,
  },
  {
    name: 'Vidrio Grabado',
    defaultColor: '#14b8a6',
    hoverColor: '#0d9488',
    logo: <span className="font-black text-sm tracking-[0.08em] uppercase">Grabado</span>,
  },
  {
    name: 'Vidrio Esmerilado',
    defaultColor: '#2dd4bf',
    hoverColor: '#14b8a6',
    logo: <span className="font-black text-sm tracking-[0.08em] uppercase">Esmerilado</span>,
  },
  {
    name: 'Cristal Claro',
    defaultColor: '#0d9488',
    hoverColor: '#0f766e',
    logo: <span className="font-black text-sm tracking-[0.08em] uppercase">Claro</span>,
  },
  {
    name: 'Vidrio Tintado',
    defaultColor: '#14b8a6',
    hoverColor: '#0d9488',
    logo: <span className="font-black text-sm tracking-[0.08em] uppercase">Tintado</span>,
  },
]
