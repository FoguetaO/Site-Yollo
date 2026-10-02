"use client"

import { useState, type FormEvent } from "react"

const FORM_ID = "af58b99e9bf576eba3"
const FORM_URL = `https://mail.sistemacrmcomia.com.br/api/v1/email-mkt/f/${FORM_ID}?embed=1`

type Status = "idle" | "loading" | "success" | "error"

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ""
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const inputClass =
  "w-full h-12 rounded-xl border border-gray-200 bg-gray-50/60 px-4 text-[15px] text-gray-900 placeholder:text-gray-400 transition-colors focus:outline-none focus:border-[#6C4FE8] focus:bg-white focus:ring-4 focus:ring-[#6C4FE8]/10"

export default function CrmEmbedForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [phone, setPhone] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)))

    const query = window.location.search.replace(/^\?/, "")

    try {
      const response = await fetch(FORM_URL + (query ? `&${query}` : ""), {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      })
      const data = await response.json().catch(() => null)
      if (!response.ok || data?.status !== "success") {
        throw new Error(data?.message || data?.data?.mensagem || "Não foi possível enviar.")
      }
      setStatus("success")
      if (data?.data?.redirect_url) window.location.href = data.data.redirect_url
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Não foi possível enviar.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-12" role="status">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6C4FE8]/10 text-[#6C4FE8]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-gray-900">Recebemos seus dados!</h3>
        <p className="mt-2 text-gray-500 max-w-xs">Nossa equipe vai entrar em contato com você pelo WhatsApp em breve.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="lead-nome" className="text-sm font-medium text-gray-700">Nome</label>
        <input id="lead-nome" name="nome" type="text" required autoComplete="name" placeholder="Digite seu nome" className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lead-email" className="text-sm font-medium text-gray-700">E-mail</label>
        <input id="lead-email" name="email" type="email" required autoComplete="email" placeholder="seu@email.com" className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lead-telefone" className="text-sm font-medium text-gray-700">WhatsApp</label>
        <input
          id="lead-telefone"
          name="telefone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="numeric"
          placeholder="(00) 00000-0000"
          minLength={14}
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lead-segmento" className="text-sm font-medium text-gray-700">Qual é o seu segmento?</label>
        <input id="lead-segmento" name="campo_4" type="text" required placeholder="Ex.: clínica, imobiliária, escritório..." className={inputClass} />
      </div>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage} Tente novamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#6C4FE8] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#5A3FD6] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6C4FE8]/30 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
              <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Quero começar agora
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">Seus dados estão seguros. Não enviamos spam.</p>
    </form>
  )
}
