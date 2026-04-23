// Brand logos with official brand colors for the recognition strip.

import type { ReactNode } from 'react'

export interface BrandLogo {
  name: string
  defaultColor: string // hex color (default state)
  hoverColor: string   // hex color (hover state - more saturated)
  logo: ReactNode
}

export const BRAND_LOGOS: BrandLogo[] = [
  {
    name: 'Apple',
    defaultColor: '#555555',
    hoverColor: '#1d1d1f',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
    ),
  },
  {
    name: 'Samsung',
    defaultColor: '#5a7ec7',
    hoverColor: '#1428a0',
    logo: <span className="font-black text-base tracking-[0.15em] uppercase">Samsung</span>,
  },
  {
    name: 'Xiaomi',
    defaultColor: '#ffb81c',
    hoverColor: '#ff6900',
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
        <path d="M232 0H24C10.7 0 0 10.7 0 24v208c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zM80 200H40V96h40v104zm68 0h-40V56h40v144zm68 0h-40V96h40v104z" />
      </svg>
    ),
  },
  {
    name: 'Huawei',
    defaultColor: '#e85555',
    hoverColor: '#cf0a2c',
    logo: <span className="font-black text-base tracking-[0.1em] uppercase">Huawei</span>,
  },
  {
    name: 'Motorola',
    defaultColor: '#8b6bb8',
    hoverColor: '#5c2d91',
    logo: <span className="font-black text-base tracking-[0.12em] uppercase">Motorola</span>,
  },
  {
    name: 'LG',
    defaultColor: '#cc6699',
    hoverColor: '#a50034',
    logo: <span className="font-black text-xl">LG</span>,
  },
  {
    name: 'OnePlus',
    defaultColor: '#ff6655',
    hoverColor: '#f5010c',
    logo: <span className="font-black text-lg tracking-tight">1+</span>,
  },
  {
    name: 'Oppo',
    defaultColor: '#66aa77',
    hoverColor: '#1a6e37',
    logo: <span className="font-black text-base tracking-[0.2em] uppercase">Oppo</span>,
  },
]
