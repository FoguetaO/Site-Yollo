"use client"

import { useEffect, useState } from "react"

const promptOutput = "Você é uma assistente virtual da Clínica Estética Bella Pele. Responda sempre de forma simpática e profissional. Ofereça procedimentos como limpeza de pele, botox e peeling. Agende horários disponíveis e qualifique cada cliente com cuidado."

export default function HowItConnects() {
  const [analyzing, setAnalyzing] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [charIndex, setCharIndex] = useState(0)

  // Typewriter effect — runs once, stops when done
  useEffect(() => {
    if (!generated) return
    if (charIndex < promptOutput.length) {
      const t = setTimeout(() => {
        setDisplayedText((prev) => prev + promptOutput[charIndex])
        setCharIndex((i) => i + 1)
      }, 18)
      return () => clearTimeout(t)
    }
    // Done typing — just stop, no reset
  }, [generated, charIndex])

  // Auto-trigger once on mount
  useEffect(() => {
    const t = setTimeout(() => {
      setAnalyzing(true)
      setTimeout(() => setGenerated(true), 900)
    }, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Comece em{" "}
            <span className="gradient-brand italic">3 passos simples</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Do zero ao seu assistente funcionando no WhatsApp em menos de 10 minutos.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 — QR Code */}
          <div className="bg-[#F8F8FA] rounded-3xl p-8 flex flex-col">
            <div className="mb-2">
              <span className="text-xs font-bold text-[#6C4FE8] uppercase tracking-widest">Passo 01</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-2xl font-bold text-neutral-900 mb-3 leading-snug">
              Conecte seu WhatsApp de forma segura
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-8">
              Conecte via API Oficial ou API Não Oficial do WhatsApp — você escolhe a melhor opção para o seu negócio.
            </p>

            {/* QR visual */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <div className="relative" style={{ width: 140, height: 140 }}>
                <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top-left corner block */}
                  <rect x="10" y="10" width="46" height="46" rx="6" stroke="#1A1A1A" strokeWidth="6" fill="none" />
                  <rect x="22" y="22" width="22" height="22" rx="3" fill="#1A1A1A" />
                  {/* Top-right corner block */}
                  <rect x="84" y="10" width="46" height="46" rx="6" stroke="#1A1A1A" strokeWidth="6" fill="none" />
                  <rect x="96" y="22" width="22" height="22" rx="3" fill="#1A1A1A" />
                  {/* Bottom-left corner block */}
                  <rect x="10" y="84" width="46" height="46" rx="6" stroke="#1A1A1A" strokeWidth="6" fill="none" />
                  <rect x="22" y="96" width="22" height="22" rx="3" fill="#1A1A1A" />
                  {/* Data dots */}
                  <rect x="68" y="68" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="84" y="68" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="100" y="68" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="116" y="68" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="68" y="84" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="100" y="84" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="68" y="100" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="84" y="100" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="116" y="100" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="68" y="116" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="100" y="116" width="8" height="8" rx="2" fill="#1A1A1A" />
                  <rect x="116" y="116" width="8" height="8" rx="2" fill="#1A1A1A" />
                  {/* Phone icon center */}
                  <circle cx="70" cy="70" r="12" fill="#22C55E" />
                  <text x="70" y="75" textAnchor="middle" fontSize="13" fill="white">&#128222;</text>
                </svg>
                {/* Animated scan line — sits on top of SVG */}
                <div
                  className="absolute left-2 right-2 h-0.5 rounded-full"
                  style={{
                    background: "linear-gradient(to right, transparent, #22C55E, transparent)",
                    animation: "qr-scan 2s ease-in-out infinite",
                    top: 10,
                    boxShadow: "0 0 6px #22C55E88",
                  }}
                />
                <style>{`
                  @keyframes qr-scan {
                    0%   { top: 10px; opacity: 0.4; }
                    50%  { opacity: 1; }
                    100% { top: 128px; opacity: 0.4; }
                  }
                `}</style>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-50">
                <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Conexão Segura</span>
              </div>
            </div>
          </div>

          {/* Card 2 — Gerador de Prompt */}
          <div className="bg-[#F8F8FA] rounded-3xl p-8 flex flex-col">
            <div className="mb-2">
              <span className="text-xs font-bold text-[#6C4FE8] uppercase tracking-widest">Passo 02</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-2xl font-bold text-neutral-900 mb-3 leading-snug">
              Gere o prompt da sua IA em segundos
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Nosso gerador interno cria o prompt ideal para a sua clinica automaticamente — sem precisar saber nada de tecnologia.
            </p>

            {/* Prompt generator visual */}
            <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 flex flex-col">
              {/* Header */}
              <div
                className="px-4 py-3 flex items-center gap-2"
                style={{ background: "linear-gradient(to right, #6C4FE8, #9879F0)" }}
              >
                <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-white text-xs font-semibold">Gerador de Prompt</span>
              </div>

              <div className="p-3 flex flex-col gap-2" style={{ minHeight: 200 }}>
                {/* Input fields */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2 flex items-center gap-2">
                  <span className="text-[10px] text-neutral-400 font-medium shrink-0">Negócio</span>
                  <span className="text-xs text-neutral-700 font-medium">Clínica Estética Bella Pele</span>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2 flex items-center gap-2">
                  <span className="text-[10px] text-neutral-400 font-medium shrink-0">Serviços</span>
                  <span className="text-xs text-neutral-700">Limpeza, Botox, Peeling</span>
                </div>

                {/* Generate button */}
                <button
                  className="w-full mt-1 py-2 rounded-xl text-white text-xs font-bold transition-opacity"
                  style={{ background: "linear-gradient(to right, #6C4FE8, #9879F0)", opacity: analyzing ? 0.7 : 1 }}
                >
                  {analyzing && !generated ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Gerando...
                    </span>
                  ) : "Gerar Prompt"}
                </button>

                {/* Output */}
                {generated && (
                  <div className="bg-[#F5F3FF] border border-[#6C4FE830] rounded-xl p-2.5 text-[10px] leading-relaxed text-neutral-600 animate-in fade-in duration-300">
                    {displayedText}
                    {charIndex < promptOutput.length && (
                      <span className="inline-block w-1 h-3 ml-0.5 bg-[#6C4FE8] animate-pulse rounded-sm" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card 3 — IA atende */}
          <div className="bg-[#F8F8FA] rounded-3xl p-8 flex flex-col">
            <div className="mb-2">
              <span className="text-xs font-bold text-[#6C4FE8] uppercase tracking-widest">Passo 03</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-2xl font-bold text-neutral-900 mb-3 leading-snug">
              A IA atende por você, 24 horas
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Seu assistente responde clientes, tira dúvidas, qualifica e agenda — tudo automaticamente, sem você precisar estar online.
            </p>

            {/* WhatsApp chat mock */}
            <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 flex flex-col">
              <div className="px-4 py-3 flex items-center gap-2 bg-[#075E54]">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-none">Yollo IA</p>
                  <p className="text-green-300 text-[10px] mt-0.5">online agora</p>
                </div>
              </div>
              <div
                className="flex-1 p-3 flex flex-col gap-2"
                style={{ minHeight: 180, background: "#ECE5DD" }}
              >
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] px-3 py-2 rounded-2xl rounded-tr-sm text-xs text-neutral-800 max-w-[85%] shadow-sm">
                    Oi! Vocês têm horário amanhã de manhã?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white px-3 py-2 rounded-2xl rounded-tl-sm text-xs text-neutral-800 max-w-[85%] shadow-sm">
                    Olá! Temos sim. Qual procedimento você gostaria? 😊
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] px-3 py-2 rounded-2xl rounded-tr-sm text-xs text-neutral-800 max-w-[85%] shadow-sm">
                    Limpeza de pele
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white px-3 py-2 rounded-2xl rounded-tl-sm text-xs text-neutral-800 max-w-[85%] shadow-sm">
                    Perfeito! Agendado para amanhã às 9h. Enviarei a confirmação! ✅
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
