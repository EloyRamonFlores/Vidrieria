import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FolioModal from './FolioModal'
import LogoLuminox from '../assets/logo-luminox.png'
import { useIsOpen } from '../hooks/useIsOpen'

const BUSINESS_NAME = import.meta.env.VITE_BUSINESS_NAME || 'Vidrieria del Centro'

type NavLink =
  | { type: 'route'; to: string; label: string }
  | { type: 'link'; to: string; label: string }
  | { type: 'button'; label: string }

const NAV_LINKS: NavLink[] = [
  { type: 'route', to: '/proyectos', label: 'Proyectos' },
  { type: 'link', to: '/#servicios', label: 'Servicios' },
  { type: 'button', label: 'Consultar Pedido' },
  { type: 'link', to: '/#ubicacion', label: 'Contacto' },
]

export default function Navbar() {
  const location = useLocation()
  const isProyectosPage = location.pathname === '/proyectos'
  const [scrolled, setScrolled] = useState(isProyectosPage)
  const [menuOpen, setMenuOpen] = useState(false)
  const [folioOpen, setFolioOpen] = useState(false)
  const isOpen = useIsOpen()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(function handleScroll() {
    const onScroll = () => setScrolled(isProyectosPage || window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isProyectosPage])

  useEffect(function closeOnOutsideClick() {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  useEffect(function closeOnEscape() {
    if (!menuOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav
      ref={menuRef}
      aria-label="Navegacion principal"
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-colors duration-300">
          {/* Luminox logo */}
          <img src={LogoLuminox} alt="Luminox Glass Company" className="h-16 w-auto" />
          <span className={`text-lg font-bold tracking-wide ${scrolled ? 'text-amber-400' : 'text-white'} transition-colors hidden sm:inline`}>
            {BUSINESS_NAME}
          </span>
        </Link>

        {/* Desktop: Hours badge + links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {/* Hours badge */}
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                isOpen
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-red-50 text-red-600'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isOpen ? 'bg-blue-600' : 'bg-red-400'
                }`}
              />
              {isOpen ? 'Abierto ahora' : 'Cerrado'}
            </span>
            <span className={`font-semibold text-xs ${scrolled ? 'text-blue-600' : 'text-white'}`}>Lun–Sáb 9–5</span>
          </div>

          {/* Nav links */}
          {NAV_LINKS.map((link) =>
            link.type === 'button' ? (
              <button
                key={link.label}
                onClick={() => setFolioOpen(true)}
                className={`nav-link-underline transition-colors duration-300 ${
                  scrolled ? 'text-blue-600 hover:text-blue-700 font-medium' : 'text-white hover:text-white font-medium'
                }`}
              >
                {link.label}
              </button>
            ) : link.type === 'route' ? (
              <Link
                key={link.to as string}
                to={link.to as string}
                className={`nav-link-underline transition-colors duration-300 ${
                  scrolled ? 'text-blue-600 hover:text-blue-700 font-medium' : 'text-white hover:text-white font-medium'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.to}
                href={link.to}
                className={`nav-link-underline transition-colors duration-300 ${
                  scrolled ? 'text-blue-600 hover:text-blue-700 font-medium' : 'text-white hover:text-white font-medium'
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg transition-colors"
          >
            <svg className={`w-6 h-6 ${scrolled || menuOpen ? 'text-slate-800' : 'text-white'} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) =>
              link.type === 'button' ? (
                <button
                  key={link.label}
                  onClick={() => {
                    setFolioOpen(true)
                    handleLinkClick()
                  }}
                  className="block w-full px-4 py-3 text-gray-600 hover:text-slate-800 transition-colors rounded-lg hover:bg-gray-50 text-left"
                >
                  {link.label}
                </button>
              ) : link.type === 'route' ? (
                <Link
                  key={link.to as string}
                  to={link.to as string}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-gray-600 hover:text-slate-800 transition-colors rounded-lg hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-gray-600 hover:text-slate-800 transition-colors rounded-lg hover:bg-gray-50"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      )}

      {/* FolioModal */}
      <FolioModal isOpen={folioOpen} onClose={() => setFolioOpen(false)} />
    </nav>
  )
}
