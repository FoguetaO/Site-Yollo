"use client"

import { useEffect, useRef } from "react"

const FORM_ID = "af58b99e9bf576eba3"
const FORM_URL = `https://mail.sistemacrmcomia.com.br/api/v1/email-mkt/f/${FORM_ID}?embed=1`

type TrackingWindow = Window & {
  fbq?: (...args: unknown[]) => void
  gtag?: (...args: unknown[]) => void
}

export default function CrmEmbedForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const query = window.location.search.replace(/^\?/, "")
    if (iframeRef.current) {
      iframeRef.current.src = FORM_URL + (query ? `&${query}` : "")
    }

    const handleMessage = (event: MessageEvent) => {
      const data = event.data || {}
      if (data.type !== "form_submitted" || data.form !== FORM_ID) return
      const w = window as TrackingWindow
      if (data.fb && w.fbq) w.fbq("track", data.fb)
      if (data.gtag && w.gtag) w.gtag("event", "conversion", { send_to: data.gtag })
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      id={`form-${FORM_ID}`}
      title="Formulário de contato"
      loading="lazy"
      className="w-full border-0"
      style={{ minHeight: 520 }}
    />
  )
}
