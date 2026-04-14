"use client"

import { useState } from "react"

export default function LeadFormAdvocacia() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", area: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/crm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, segment: "Advocacia" }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? "Ocorreu um erro. Tente novamente.")
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
              Preencha seus dados e comece a atender seus clientes jurídicos 24h pelo WhatsApp — sem aumentar sua equipe.
            </p>
            <div className="hidden md:flex flex-col gap-4 mt-10">
              {[
                { title: "Configuração em minutos", desc: "Sem fluxos complexos. A IA aprende sobre seu escritório via prompt." },
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
              <div className="flex flex-col items-center justify-center gap-6 p-12 rounded-2xl border text-center" style={{ backgroundColor: "#F5F3FF", borderColor: "#DDD6FE" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#EDE9FE" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#6C4FE8" }}>
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
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="name-advocacia">
                    Nome completo
                  </label>
                  <input
                    id="name-advocacia"
                    type="text"
                    required
                    placeholder="Dr. Carlos Mendes"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="email-advocacia">
                    Gmail
                  </label>
                  <input
                    id="email-advocacia"
                    type="email"
                    required
                    placeholder="carlos@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="phone-advocacia">
                    WhatsApp
                  </label>
                  <input
                    id="phone-advocacia"
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="area-advocacia">
                    Qual é sua área de atuação?
                  </label>
                  <select
                    id="area-advocacia"
                    required
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                  >
                    <option value="">Selecione...</option>
                    <option>Direito Civil</option>
                    <option>Direito Trabalhista</option>
                    <option>Direito Empresarial</option>
                    <option>Direito Previdenciário</option>
                    <option>Direito de Família</option>
                    <option>Multidisciplinar</option>
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
