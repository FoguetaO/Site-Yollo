"use client"

import { useEffect } from "react"
import ShinyButton from "@/components/shiny-button"

export default function Hero() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".hero-eb").forEach((el) => el.classList.add("eb"))
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      aria-label="Yollo IA — plataforma de automação de WhatsApp com Inteligência Artificial"
      style={{
        background: "linear-gradient(to bottom, #FDF2F8, #F5E6FA, #EDE9FE)",
      }}
    >
      {/* Background decoration — reduced blur for mobile perf */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[80px]"
          style={{ backgroundColor: "#6C4FE8" }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 md:py-32 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Eyebrow tag */}
          <div className="mb-6 md:mb-10 scroll-eb hero-eb">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
              style={{
                backgroundColor: "#6C4FE818",
                borderColor: "#6C4FE840",
                color: "#4F39B0",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#6C4FE8" }}
              />
              Plataforma de Atendimento com Inteligência Artificial
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-semibold text-neutral-900 leading-tight tracking-tight mb-6 text-balance scroll-eb hero-eb" style={{ transitionDelay: "0.07s" }}>
            Automatize seu atendimento{" "}
            <span className="gradient-brand">no WhatsApp</span>
            <br className="hidden md:block" /> e venda mais com{" "}
            <span className="gradient-brand">Inteligência Artificial</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed mb-10 text-pretty scroll-eb hero-eb" style={{ transitionDelay: "0.14s" }}>
            A Yollo IA é a plataforma completa de automação de WhatsApp com IA: atende clientes, agenda, faz follow-up, dispara campanhas e organiza seu CRM — 24 horas por dia, 7 dias por semana.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mb-10 scroll-eb hero-eb" style={{ transitionDelay: "0.21s" }}>
            <ShinyButton
              href="#contratar"
              label="Agendar demonstração gratuita →"
              className="w-full sm:w-auto text-lg"
            />
            <a
              href="#funcionalidades"
              className="flex items-center justify-center gap-2 text-lg font-medium text-neutral-700 bg-white/80 border border-neutral-200 px-8 py-4 rounded-full w-full sm:w-auto hover:bg-white transition-all leading-normal"
            >
              Ver todas as funcionalidades
            </a>

          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm text-neutral-600 scroll-eb hero-eb" style={{ transitionDelay: "0.28s" }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              <span className="font-medium">Parceiro oficial Meta — API WhatsApp Business</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              <span className="font-medium">Sem programador — configure em minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              <span className="font-medium">Clínicas, imobiliárias, contadores e advogados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-transparent via-white/40 to-white z-30 pointer-events-none" />
    </section>
  )
}
