"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import WhatsAppIcon from "@/components/icons/whatsapp-icon"

const FORM_ID = "f7d2717bd582e8e1e5"
const FORM_BASE_URL = `https://mail.sistemacrmcomia.com.br/api/v1/email-mkt/f/${FORM_ID}?embed=1`
const WHATSAPP_URL =
  "https://wa.me/5535998231577?text=Ol%C3%A1%2C%20eu%20vim%20do%20site%2C%20quero%20falar%20com%20um%20especialista"

type FormMessage = { type?: string; form?: string; fb?: string; gtag?: string }

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [formSrc, setFormSrc] = useState<string | null>(null)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const data = (event.data || {}) as FormMessage
      if (data.type !== "form_submitted" || data.form !== FORM_ID) return
      if (data.fb && window.fbq) window.fbq("track", data.fb)
      if (data.gtag && window.gtag) window.gtag("event", "conversion", { send_to: data.gtag })

      const tab = window.open(WHATSAPP_URL, "_blank")
      if (tab) tab.opener = null
      else setShowFallback(true)
    }
    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  function openPopup() {
    if (!formSrc) {
      const query = window.location.search.replace(/^\?/, "")
      setFormSrc(FORM_BASE_URL + (query ? `&${query}` : ""))
    }
    setOpen(true)
  }

  return (
    <>
      <aside
        role="dialog"
        aria-modal="false"
        aria-labelledby="wa-popup-title"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-4 bottom-4 z-[999] max-h-[calc(100dvh-32px)] overflow-y-auto rounded-xl border border-neutral-200 bg-white text-neutral-800 shadow-[0_24px_70px_rgb(15_23_42/0.24)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:left-auto sm:right-6 sm:bottom-6 sm:w-[360px] ${
          open ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-10 opacity-0"
        }`}
      >
        <header className="flex items-center gap-2.5 p-3 min-h-[78px]" style={{ backgroundColor: "#173e32" }}>
          <div
            className="flex shrink-0 items-center justify-center w-9 h-9 rounded-full border-2 border-white"
            style={{ backgroundColor: "#25d366" }}
            aria-hidden="true"
          >
            <WhatsAppIcon size={18} color="white" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <strong id="wa-popup-title" className="text-base leading-tight text-white">
              Fale conosco no WhatsApp
            </strong>
            <span className="text-xs leading-relaxed" style={{ color: "#e1eee8" }}>
              Preencha seus dados para receber orientação pelo WhatsApp
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar formulário"
            className="flex shrink-0 items-center justify-center w-8 h-8 rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        <div className="h-[300px] overflow-hidden" style={{ backgroundColor: "#f4f1ed" }}>
          {formSrc && (
            <iframe
              src={formSrc}
              title="Formulário para falar conosco no WhatsApp"
              loading="lazy"
              className="block w-full h-[300px] border-0"
              style={{ backgroundColor: "#f4f1ed" }}
            />
          )}
        </div>

        <footer className="flex min-h-11 items-center justify-center gap-1.5 border-t border-neutral-200 bg-white px-4 py-2.5 text-[13px] text-neutral-500">
          {showFallback && (
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 rounded-lg px-3 py-2 text-xs font-bold text-white"
              style={{ backgroundColor: "#25d366" }}
            >
              Abrir WhatsApp
            </a>
          )}
          <span>Powered by</span>
          <strong className="text-[17px] font-extrabold" style={{ color: "#8b5cf6" }}>
            Yollo I.A
          </strong>
        </footer>
      </aside>

      <div
        className={`fixed bottom-5 right-5 z-[990] flex items-center gap-2.5 transition-all duration-500 ${
          visible && !open ? "opacity-100 scale-100 translate-y-0" : "pointer-events-none opacity-0 scale-50 translate-y-5"
        }`}
      >
        <button
          type="button"
          onClick={openPopup}
          aria-label="Fale conosco no WhatsApp"
          aria-haspopup="dialog"
          aria-expanded={open}
          className="flex items-center justify-center w-14 h-14 rounded-full border-none text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{ backgroundColor: "#25d366", boxShadow: "0 4px 12px #25d36666" }}
        >
          <WhatsAppIcon size={30} color="white" />
        </button>
      </div>
    </>
  )
}
