"use client"

import { useState } from "react"

function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits.replace(/^(\d{0,2})/, "($1")
  if (digits.length <= 6) return digits.replace(/^(\d{2})(\d{0,4})/, "($1) $2")
  if (digits.length <= 10) return digits.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
  return digits.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "")
  // Celular brasileiro: 11 dígitos (com DDD) e o 3º dígito deve ser 9
  if (digits.length === 11 && digits[2] === "9") return true
  // Fixo: 10 dígitos (com DDD)
  if (digits.length === 10) return true
  return false
}

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", procedures: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [phoneError, setPhoneError] = useState<string | null>(null)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = applyPhoneMask(e.target.value)
    setForm({ ...form, phone: masked })
    if (phoneError && isValidPhone(masked)) setPhoneError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isValidPhone(form.phone)) {
      setPhoneError("Digite um número de WhatsApp válido com DDD. Ex: (11) 98765-4321")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? "Ocorreu um erro. Tente novamente.")
        setLoading(false)
        return
      }

      setSubmitted(true)
    } catch {
      setError("Erro de conexão. Verifique sua internet e tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contratar" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24 md:items-start">
          {/* Left: headline + value props */}
          <div className="md:flex-1 md:sticky md:top-24 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight text-center md:text-left">
              Comece agora
            </h2>
            <p className="text-base md:text-lg text-gray-500 mt-3 text-center md:text-left">
              Preencha seus dados e leve mais clientes para sua clínica pelo WhatsApp.
            </p>

            {/* Value props — desktop only */}
            <div className="hidden md:flex flex-col gap-4 mt-10">
              {[
                { title: "Configuração em minutos", desc: "Sem fluxos complexos. A IA aprende sobre sua clínica via prompt." },
                { title: "Planos flexíveis", desc: "Mensal, Trimestral ou Semestral. Cancele quando quiser, sem multa." },
                { title: "API Oficial e Não Oficial do WhatsApp", desc: "Escolha a melhor opção para o seu negócio." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5 text-green-500"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="w-full md:w-[480px] lg:w-[520px] flex-shrink-0">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-6 p-12 bg-green-50 rounded-2xl border border-green-100 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Solicitação enviada!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Nossa equipe entrará em contato em breve para agendar sua demonstração gratuita.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-white md:bg-gray-50/50 md:border md:border-gray-100 md:rounded-2xl md:p-8 md:shadow-sm"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="name">
                    Nome completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Maria Silva"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                    style={{ "--tw-ring-color": "#C8956C66" } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="email">
                    Seu melhor e-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="maria@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="phone">
                    WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={form.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => {
                      if (form.phone && !isValidPhone(form.phone)) {
                        setPhoneError("Digite um número de WhatsApp válido com DDD. Ex: (11) 98765-4321")
                      }
                    }}
                    maxLength={15}
                    inputMode="numeric"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition ${phoneError ? "border-red-400 focus:ring-red-200" : "border-gray-200"}`}
                  />
                  {phoneError && (
                    <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      {phoneError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="procedures">
                    Quais procedimentos sua clínica oferece?
                  </label>
                  <select
                    id="procedures"
                    required
                    value={form.procedures}
                    onChange={(e) => setForm({ ...form, procedures: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                  >
                    <option value="">Selecione...</option>
                    <option>Limpeza de pele e tratamentos faciais</option>
                    <option>Botox e preenchimento</option>
                    <option>Depilação a laser</option>
                    <option>Micropigmentação</option>
                    <option>Estética corporal</option>
                    <option>Vários procedimentos</option>
                  </select>
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-center">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                  style={{ backgroundColor: "#6C4FE8", boxShadow: "0 8px 24px #6C4FE844" }}
                >
                  {loading ? "Enviando..." : "Quero agendar minha demonstração gratuita →"}
                </button>

                <p className="text-xs text-center text-gray-400">
                  Sem spam. Sua demonstração é gratuita e sem compromisso.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
