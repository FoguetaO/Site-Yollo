"use client"

import { useState, useEffect } from "react"
import WhatsAppIcon from "@/components/icons/whatsapp-icon"

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
        <WhatsAppIcon size={30} color="white" />
      </a>
    </div>
  )
}
