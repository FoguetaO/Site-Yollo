"use client"

import { useState } from "react"

export default function LeadFormAdvocacia() {
  const [loading, setLoading] = useState(false)

  return (
    <section id="contratar" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900 mb-4">
            Agende sua demonstração
          </h2>
          <p className="text-lg text-neutral-600">Mostraremos como a Yollo IA pode multiplicar seus cases em 30 minutos.</p>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-100 shadow-lg p-8">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setLoading(true)
              setTimeout(() => setLoading(false), 1000)
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-violet-400 bg-neutral-50"
                required
              />
              <input
                type="email"
                placeholder="seu@email.com"
                className="px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-violet-400 bg-neutral-50"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Nome do escritório"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-violet-400 bg-neutral-50"
              required
            />

            <select
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-violet-400 bg-neutral-50 text-neutral-600"
              required
            >
              <option value="">Qual é sua área de atuação?</option>
              <option value="civil">Direito Civil</option>
              <option value="trabalhista">Direito Trabalhista</option>
              <option value="administrativo">Direito Administrativo</option>
              <option value="empresarial">Direito Empresarial</option>
              <option value="outro">Outra</option>
            </select>

            <textarea
              placeholder="Diga um pouco sobre seus maiores desafios (opcional)"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-violet-400 bg-neutral-50 resize-none"
              rows={3}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#6C4FE8" }}
            >
              {loading ? "Enviando..." : "Agendar demonstração gratuita"}
            </button>
          </form>

          <p className="text-center text-sm text-neutral-500 mt-6">
            Responderemos em até 2 horas úteis. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  )
}
