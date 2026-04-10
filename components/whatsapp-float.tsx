"use client"

import { useState, useEffect } from "react"

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`fixed bottom-5 right-5 z-[990] flex items-center gap-2.5 transition-all duration-500 ${
        visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-5"
      }`}
    >
      <div className="bg-white text-neutral-900 px-3.5 py-2 rounded-lg text-sm font-medium shadow-md whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none group-hover:opacity-100 hidden md:block">
        Fale com a Yollo IA
      </div>
      <a
        href="#contratar"
        aria-label="Agendar demonstração via WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full border-none text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25d366", boxShadow: "0 4px 12px #25d36666" }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.92 13.42c-.21.59-1.22 1.15-1.68 1.22-.43.06-.97.09-1.56-.1-.36-.12-.82-.28-1.41-.55-2.46-1.06-4.07-3.52-4.19-3.68-.12-.16-.98-1.3-.98-2.49 0-1.18.62-1.77.84-2.01.21-.24.46-.3.62-.3h.44c.14 0 .33-.05.52.4l.74 1.83c.07.17.12.36.01.56-.1.2-.15.32-.3.49l-.44.5c-.14.15-.29.32-.12.62.17.3.73 1.2 1.58 1.94.54.48 1.13.79 1.54.99.32.16.7.12.95-.13l.33-.38c.22-.27.55-.42.87-.3l2.07.97c.27.13.45.27.45.57v1.02c0 .21-.03.43-.24 1.02z" />
        </svg>
      </a>
    </div>
  )
}
