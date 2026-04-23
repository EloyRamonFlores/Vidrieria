import { useState, useEffect, useRef, useCallback } from 'react'

const CHAT_URL = import.meta.env.VITE_N8N_CHAT_URL

interface Message {
  role: 'user' | 'bot'
  text: string
}

const INITIAL_MESSAGE: Message = {
  role: 'bot',
  text: 'Hola! Soy Eva, tu asistente virtual.\nPreguntame sobre tipos de vidrio, cotizaciones o el estado de tu pedido.',
}

const SESSION_KEY = 'chat_session_id'
const MESSAGES_KEY = 'chat_messages'

function getSessionId(): string {
  const stored = sessionStorage.getItem(SESSION_KEY)
  if (stored) return stored
  const id = `web-${Date.now()}-${Math.random().toString(36).slice(2)}`
  sessionStorage.setItem(SESSION_KEY, id)
  return id
}

function getSavedMessages(): Message[] {
  try {
    const stored = sessionStorage.getItem(MESSAGES_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as Message[]
      if (parsed.length > 0) return parsed
    }
  } catch { /* ignore */ }
  return [INITIAL_MESSAGE]
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(getSavedMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [unread, setUnread] = useState(true)
  const sessionId = useRef(getSessionId())
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(function persistMessages() {
    sessionStorage.setItem(MESSAGES_KEY, JSON.stringify(messages))
  }, [messages])

  useEffect(function scrollToBottom() {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(function focusOnOpen() {
    if (open) {
      setUnread(false)
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [open])

  useEffect(function trapFocus() {
    if (!open) return
    const dialog = dialogRef.current
    if (!dialog) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); return }
      if (e.key !== 'Tab') return
      const focusable = dialog.querySelectorAll<HTMLElement>('button, input, [tabindex]:not([tabindex="-1"])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus() }
    }
    dialog.addEventListener('keydown', handleKeyDown)
    return () => dialog.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const sendMessage = useCallback(async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text }])
    setLoading(true)
    try {
      const res = await fetch(`${CHAT_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sendMessage', sessionId: sessionId.current, chatInput: text }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'bot', text: data.output || 'Sin respuesta. Intenta de nuevo.' }])
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', text: 'Error de conexion. Intenta de nuevo.' }])
    } finally {
      setLoading(false)
    }
  }, [input, loading])

  if (!CHAT_URL) return null

  return (
    <>
      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-label="Chat con Eva, asistente virtual"
          className="anim-chat-in fixed bottom-24 left-4 right-4 sm:right-auto sm:w-[380px] max-h-[520px] flex flex-col bg-white rounded-2xl shadow-2xl shadow-black/15 z-50 overflow-hidden border border-gray-200/60"
        >
          <div className="bg-slate-800 px-4 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600/30 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-medium text-sm">Eva</div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" aria-hidden="true" />
                  En linea
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition"
              aria-label="Cerrar chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/80 min-h-0" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white rounded-2xl rounded-br-md'
                    : 'bg-white text-gray-700 rounded-2xl rounded-bl-md shadow-sm border border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100 flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="px-3 py-3 bg-white border-t border-gray-100 flex gap-2 shrink-0">
            <label htmlFor="chat-input" className="sr-only">Escribe tu mensaje</label>
            <input
              id="chat-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Escribe tu mensaje..."
              disabled={loading}
              className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white disabled:opacity-50 transition-all"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Enviar"
              className="w-11 h-11 bg-blue-600 hover:bg-blue-700 disabled:opacity-30 text-white rounded-full flex items-center justify-center transition-all shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar chat' : 'Hablar con Eva'}
        className={`fixed bottom-4 left-4 z-50 transition-all duration-300 ${
          open
            ? 'w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full shadow-lg'
            : 'w-14 h-14 bg-slate-800 hover:bg-slate-700 rounded-full shadow-xl hover:scale-110'
        } text-white flex items-center justify-center cursor-pointer active:scale-95`}
      >
        {!open && unread && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white" aria-hidden="true" />
        )}
        {open ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        )}
      </button>
    </>
  )
}
