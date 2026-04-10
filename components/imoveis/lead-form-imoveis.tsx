"use client"

import { useState } from "react"

export default function LeadFormImoveis() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", segment: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
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
              Preencha seus dados e comece a captar e qualificar leads imobiliários 24h pelo WhatsApp.
            </p>
            <div className="hidden md:flex flex-col gap-4 mt-10">
              {[
                { title: "Configuração em minutos", desc: "Sem fluxos complexos. A IA aprende sobre sua imobiliária sozinha." },
                { title: "Sem fidelidade", desc: "Cancele quando quiser. Sem multa, sem burocracia." },
                { title: "API oficial do WhatsApp", desc: "Sem risco de banimento. Parceiro verificado da Meta." },
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
              <div className="flex flex-col items-center justify-center gap-6 p-12 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#2563EB" }}>
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
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="name-imoveis">
                    Nome completo
                  </label>
                  <input
                    id="name-imoveis"
                    type="text"
                    required
                    placeholder="Carlos Mendes"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="email-imoveis">
                    Email
                  </label>
                  <input
                    id="email-imoveis"
                    type="email"
                    required
                    placeholder="carlos@imobiliaria.com.br"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="phone-imoveis">
                    WhatsApp da imobiliária
                  </label>
                  <input
                    id="phone-imoveis"
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5" htmlFor="segment-imoveis">
                    Qual é o foco da sua imobiliária?
                  </label>
                  <select
                    id="segment-imoveis"
                    required
                    value={form.segment}
                    onChange={(e) => setForm({ ...form, segment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
                  >
                    <option value="">Selecione...</option>
                    <option>Venda residencial</option>
                    <option>Locação residencial</option>
                    <option>Venda e locação comercial</option>
                    <option>Lançamentos e incorporações</option>
                    <option>Alto padrão e luxo</option>
                    <option>Todos os segmentos</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                  style={{ backgroundColor: "#2563EB", boxShadow: "0 8px 24px #2563EB44" }}
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
