"use client"

import { useEffect, useRef, useState } from "react"

const FIELDS = [
  { label: "Nome do negócio", placeholder: "Ex: Clínica Bella Pele", key: "nome" },
  { label: "Segmento", placeholder: "Ex: Estética, Saúde, Varejo...", key: "segmento" },
  { label: "Serviços oferecidos", placeholder: "Ex: Limpeza de pele, botox, peeling", key: "servicos" },
  { label: "Tom de atendimento", placeholder: "Ex: Acolhedor e profissional", key: "tom" },
]

const DEMO_VALUES: Record<string, string> = {
  nome: "Clínica Bella Pele",
  segmento: "Estética e Dermatologia",
  servicos: "Limpeza de pele, botox, preenchimento, peeling",
  tom: "Acolhedor, profissional e empático",
}

function buildPrompt(values: Record<string, string>) {
  return `Você é a assistente virtual da ${values.nome || "[nome]"}, especializada em ${values.segmento || "[segmento]"}. Seus serviços incluem: ${values.servicos || "[serviços]"}. Seu tom de atendimento é ${values.tom || "[tom]"}. Responda sempre de forma clara, tire dúvidas sobre procedimentos, valores e agendamentos. Nunca invente informações que não foram fornecidas.`
}

export default function ConfigureIA() {
  const [fields, setFields] = useState<Record<string, string>>({ nome: "", segmento: "", servicos: "", tom: "" })
  const [generating, setGenerating] = useState(false)
  const [promptVisible, setPromptVisible] = useState(false)
  const [typedPrompt, setTypedPrompt] = useState("")
  const [demoStep, setDemoStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const demoIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const typeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef1 = useRef<ReturnType<typeof setTimeout> | null>(null)
  const timeoutRef2 = useRef<ReturnType<typeof setTimeout> | null>(null)

  function typePrompt(text: string) {
    if (typeIntervalRef.current) clearInterval(typeIntervalRef.current)
    let i = 0
    setTypedPrompt("")
    typeIntervalRef.current = setInterval(() => {
      i++
      setTypedPrompt(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(typeIntervalRef.current!)
        typeIntervalRef.current = null
      }
    }, 18)
  }

  function handleGenerate() {
    if (generating || promptVisible) return
    setGenerating(true)
    timeoutRef1.current = setTimeout(() => {
      setGenerating(false)
      setPromptVisible(true)
      typePrompt(buildPrompt(fields))
    }, 1800)
  }

  useEffect(() => {
    let cancelled = false

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.disconnect()

          const keys = FIELDS.map((f) => f.key)
          let step = 0

          demoIntervalRef.current = setInterval(() => {
            if (cancelled) {
              clearInterval(demoIntervalRef.current!)
              demoIntervalRef.current = null
              return
            }
            if (step < keys.length) {
              const key = keys[step]
              setFields((prev) => ({ ...prev, [key]: DEMO_VALUES[key] }))
              setDemoStep(step + 1)
              step++
            } else {
              clearInterval(demoIntervalRef.current!)
              demoIntervalRef.current = null
              timeoutRef1.current = setTimeout(() => {
                if (cancelled) return
                setGenerating(true)
                timeoutRef2.current = setTimeout(() => {
                  if (cancelled) return
                  setGenerating(false)
                  setPromptVisible(true)
                  typePrompt(buildPrompt(DEMO_VALUES))
                }, 1800)
              }, 600)
            }
          }, 900)
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      cancelled = true
      observer.disconnect()
      if (demoIntervalRef.current) clearInterval(demoIntervalRef.current)
      if (timeoutRef1.current) clearTimeout(timeoutRef1.current)
      if (timeoutRef2.current) clearTimeout(timeoutRef2.current)
      if (typeIntervalRef.current) clearInterval(typeIntervalRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="configure-sua-ia"
      className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hidden md:block absolute -top-[30%] -left-[15%] w-[80%] h-[80%] rounded-full blur-[180px] opacity-30"
          style={{ background: "radial-gradient(circle, #6C4FE833, transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <div className="mb-4">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                style={{ backgroundColor: "#6C4FE812", borderColor: "#6C4FE830", color: "#4F39B0" }}
              >
                Configuração simples
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-normal text-neutral-900 mb-6">
              Configure sua IA{" "}
              <span className="italic gradient-brand">por prompt</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8">
              Sem fluxos complexos, sem planilhas. Você preenche as informações da sua clínica e nosso gerador cria
              automaticamente o prompt que instrui a IA sobre como atender seus clientes.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "Define o tom de voz da sua clínica",
                "Conhece todos os seus tratamentos e preços",
                "Integra com sua agenda online",
                "Pronto para atender em minutos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#6C4FE8" }}
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4" />
                  </svg>
                  <span className="text-sm text-neutral-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Security badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100 w-fit">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600 flex-shrink-0"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-sm font-medium text-neutral-700">Conexão Segura — API Oficial WhatsApp</span>
            </div>
          </div>

          {/* Right: prompt generator */}
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 flex flex-col overflow-hidden">
            {/* Header */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ background: "linear-gradient(to right, #6C4FE8, #9879F0)" }}
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Gerador de Prompt</div>
                <div className="text-white/70 text-xs">Preencha e a IA cria seu prompt</div>
              </div>
            </div>

            {/* Form fields */}
            <div className="p-6 flex flex-col gap-3">
              {FIELDS.map((field, i) => (
                <div key={field.key}>
                  <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wide">
                    {field.label}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value={fields[field.key]}
                      placeholder={field.placeholder}
                      className="w-full text-sm text-neutral-800 bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 outline-none placeholder:text-neutral-400 transition-all"
                    />
                    {demoStep === i + 1 && fields[field.key] && !promptVisible && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 w-px h-4 bg-violet-500 animate-pulse" />
                    )}
                  </div>
                </div>
              ))}

              {/* Generate button */}
              {!promptVisible && (
                <button
                  onClick={handleGenerate}
                  disabled={generating}
                  className="mt-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#6C4FE8", boxShadow: "0 4px 14px #6C4FE855" }}
                >
                  {generating ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.25" />
                        <path d="M21 12a9 9 0 00-9-9" />
                      </svg>
                      Gerando seu prompt...
                    </>
                  ) : (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                      Gerar Prompt com IA
                    </>
                  )}
                </button>
              )}

              {/* Generated prompt */}
              {promptVisible && (
                <div className="mt-2 rounded-xl border border-violet-200 bg-violet-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                    <span className="text-xs font-bold text-violet-700 uppercase tracking-widest">
                      Prompt gerado pela IA
                    </span>
                  </div>
                  <p className="text-xs text-violet-900 leading-relaxed font-mono">
                    {typedPrompt}
                    {typedPrompt.length < buildPrompt(DEMO_VALUES).length && (
                      <span className="inline-block w-px h-3 bg-violet-500 animate-pulse ml-0.5 align-middle" />
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#contratar"
            className="text-white text-lg font-semibold px-8 py-4 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            style={{ backgroundColor: "#6C4FE8", boxShadow: "0 8px 24px #6C4FE844" }}
          >
            Contratar agora →
          </a>
        </div>
      </div>
    </section>
  )
}
