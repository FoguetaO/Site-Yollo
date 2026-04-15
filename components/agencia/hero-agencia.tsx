"use client"

import { useEffect } from "react"
import ShinyButton from "@/components/shiny-button"

export default function HeroAgencia() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".hero-agencia-eb").forEach((el) => el.classList.add("eb"))
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      aria-label="Yollo IA para Agências de Marketing — prospecção automática e disparo em massa via WhatsApp"
      style={{
        background: "linear-gradient(to bottom, #FDF2F8, #F5E6FA, #EDE9FE)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ backgroundColor: "#6C4FE8" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none hidden md:block opacity-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(108,79,232,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(108,79,232,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 md:py-32 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="mb-6 md:mb-10 scroll-eb hero-agencia-eb">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
              style={{
                backgroundColor: "#6C4FE818",
                borderColor: "#6C4FE840",
                color: "#4F39B0",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#6C4FE8" }} />
              Assistente IA para Agências de Marketing
            </div>
          </div>

          <h1
            className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-semibold text-neutral-900 leading-tight tracking-tight mb-6 text-balance scroll-eb hero-agencia-eb"
            style={{ transitionDelay: "0.07s" }}
          >
            Prospecte clientes por segmento e cidade,{" "}
            <span className="inline-block gradient-brand">
              automaticamente
            </span>{" "}
            pelo WhatsApp
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-3xl leading-relaxed mb-10 text-pretty scroll-eb hero-agencia-eb"
            style={{ transitionDelay: "0.14s" }}
          >
            A Yollo IA prospecta empresas por nicho e localidade, dispara mensagens em massa e nutre leads automaticamente. Sua agência foca em fechar contratos — a IA cuida da prospecção.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mb-10 scroll-eb hero-agencia-eb"
            style={{ transitionDelay: "0.21s" }}
          >
            <ShinyButton
              href="#contratar"
              label="Quero agendar minha demonstração →"
              className="w-full sm:w-auto text-sm sm:text-base"
            />
            <a
              href="#como-funciona"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-neutral-700 bg-white/80 border border-neutral-200 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full w-full sm:w-auto hover:bg-white transition-all leading-normal"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#6C4FE8" }}>
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Ver como funciona
            </a>

          </div>

          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm text-neutral-600 scroll-eb hero-agencia-eb"
            style={{ transitionDelay: "0.28s" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              <span className="font-medium">Prospecção por segmento e cidade</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              <span className="font-medium">Disparo em massa pelo WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              <span className="font-medium">Configuração em minutos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-transparent via-white/40 to-white z-30 pointer-events-none" />
    </section>
  )
}
