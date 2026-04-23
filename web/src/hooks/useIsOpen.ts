import { useState, useEffect } from 'react'

const HOURS = {
  lunes: { open: 9, close: 17 },
  martes: { open: 9, close: 17 },
  miércoles: { open: 9, close: 17 },
  jueves: { open: 9, close: 17 },
  viernes: { open: 9, close: 17 },
  sábado: { open: 9, close: 14 },
  domingo: null, // Cerrado
}

export function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date()
      const dayIndex = now.getDay() // 0 = Sunday, 1 = Monday, etc.

      // Convert to Spanish day names
      const dayNames = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
      const currentDay = dayNames[dayIndex]
      const dayHours = HOURS[currentDay as keyof typeof HOURS]

      if (!dayHours) {
        setIsOpen(false)
        return
      }

      const currentHour = now.getHours()
      setIsOpen(currentHour >= dayHours.open && currentHour < dayHours.close)
    }

    checkIfOpen()
    const interval = setInterval(checkIfOpen, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  return isOpen
}
