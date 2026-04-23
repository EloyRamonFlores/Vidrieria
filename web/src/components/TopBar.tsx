export default function TopBar() {
  const PHONE_1 = import.meta.env.VITE_PHONE_1 || '526612421242'
  const PHONE_2 = import.meta.env.VITE_PHONE_2 || '526611005509'

  return (
    <div className="hidden md:block bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Rosarito, B.C. · Lun–Sáb 9am–5pm
          </span>
          <a href={`tel:+${PHONE_1}`} className="text-white font-semibold hover:text-blue-400 transition flex items-center gap-1">
            📞 {PHONE_1.slice(-10)}
          </a>
          <a href={`tel:+${PHONE_2}`} className="text-slate-400 hover:text-slate-200 transition flex items-center gap-1">
            📞 {PHONE_2.slice(-10)}
          </a>
        </div>
        <a href={`https://wa.me/${PHONE_1}`} target="_blank" className="text-green-400 font-semibold hover:text-green-300 transition flex items-center gap-1">
          💬 Escríbenos por WhatsApp
        </a>
      </div>
    </div>
  )
}
