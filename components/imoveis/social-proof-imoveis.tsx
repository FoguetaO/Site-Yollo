"use client"

import { useEffect, useRef } from "react"

const testimonials = [
  {
    key: "t1",
    name: "Carlos Mendes",
    role: "Diretor, Imobiliária Mendes Prime",
    text: "Antes a gente perdia lead toda noite. Agora a Bella IA qualifica e já agenda a visita enquanto o corretor dorme. Triplicamos os agendamentos.",
    stars: 5,
  },
  {
    key: "t2",
    name: "Ana Rodrigues",
    role: "Corretora autônoma, São Paulo",
    text: "Eu sozinha não conseguia atender todos os leads do ZAP. Com a Bella IA, nenhum lead fica sem resposta. Aumentei minha carteira em 40%.",
    stars: 5,
  },
  {
    key: "t3",
    name: "Roberto Farias",
    role: "Sócio, Farias Imóveis",
    text: "Os leads de portal são caros e a gente perdia muitos por demora no atendimento. A IA responde em segundos e já envia fotos do imóvel.",
    stars: 5,
  },
  {
    key: "t4",
    name: "Juliana Costa",
    role: "Gestora Comercial, Ativa Imóveis",
    text: "O melhor foi a qualificação automática. A IA filtra os curiosos e entrega só leads com perfil real para os corretores. Economizamos horas.",
    stars: 5,
  },
  {
    key: "t5",
    name: "Marcelo Alves",
    role: "Corretor, BH Imóveis",
    text: "Implementamos em uma semana. Agora a IA atende, qualifica e agenda. Eu só apareço para fechar o negócio. Incrível.",
    stars: 5,
  },
  {
    key: "t6",
    name: "Patricia Lima",
    role: "CEO, Lima Imóveis Premium",
    text: "Nossa taxa de no-show em visitas caiu 60% com os lembretes automáticos. A IA confirma presença no dia anterior e o cliente aparece.",
    stars: 5,
  },
]

const allCards = testimonials.map((t) => ({ ...t }))
const loopCards = [
  ...allCards.map((c) => ({ ...c, key: `${c.key}-a` })),
  ...allCards.map((c) => ({ ...c, key: `${c.key}-b` })),
]

const CARD_WIDTH = 320
const GAP = 24

const whatsappConversation = [
  { role: "user", text: "Oi, vi o apartamento de 3 quartos no ZAP. Ainda disponível?" },
  { role: "bot", text: "Olá, Ricardo! Sim, está disponível. É um ótimo imóvel! Qual é o seu orçamento?" },
  { role: "user", text: "Até R$ 600 mil. Tem financiamento?" },
  { role: "bot", text: "Sim! Aceita financiamento pela CAIXA e bancos privados. Quer agendar uma visita esta semana?" },
  { role: "user", text: "Quero! Pode ser quinta de tarde?" },
  { role: "bot", text: "Perfeito! Agendei para quinta-feira às 15h. Vou te enviar o endereço completo e confirmar no dia anterior." },
]

export default function SocialProofImoveis() {
  const trackRef = useRef<HTMLDivElement>(null)
  const animFrameRef = useRef<number>(0)
  const posRef = useRef(0)

  useEffect(() => {
    const totalWidth = allCards.length * (CARD_WIDTH + GAP)
    let lastTime = 0
    const speed = 0.4

    function animate(time: number) {
      if (lastTime) {
        const delta = time - lastTime
        posRef.current += speed * delta * 0.06
        if (posRef.current >= totalWidth) posRef.current -= totalWidth
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`
        }
      }
      lastTime = time
      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [])

  return (
    <section className="pt-12 pb-24 md:pt-20 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-normal text-neutral-900 text-center">
          Imobiliárias que{" "}
          <span className="italic" style={{ color: "#2563EB" }}>
            já usam
          </span>
        </h2>
        <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto text-center">
          Veja o que corretores e gestores estão dizendo após implementar a Bella IA.
        </p>
      </div>

      {/* Scrolling testimonials */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          style={{ width: `${loopCards.length * (CARD_WIDTH + GAP)}px` }}
        >
          {loopCards.map((card) => (
            <div
              key={card.key}
              className="flex-shrink-0 bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm flex flex-col gap-4"
              style={{ width: CARD_WIDTH }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: card.stars }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#2563EB" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed flex-1">{card.text}</p>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{card.name}</p>
                <p className="text-xs text-neutral-500">{card.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* WhatsApp conversation mock */}
      <div className="max-w-[1200px] mx-auto px-6 mt-16 md:mt-24">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">Conversa real</p>
            <h3 className="text-2xl font-normal text-neutral-900 mt-2">
              Veja a IA em{" "}
              <span className="italic" style={{ color: "#2563EB" }}>
                ação
              </span>
            </h3>
          </div>
          <div className="bg-[#E4DDD6] rounded-2xl overflow-hidden border border-[#D4CDB6] shadow-lg">
            <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "#2563EB" }}
              >
                B
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Bella IA — Imobiliária</p>
                <p className="text-white/70 text-xs">online</p>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {whatsappConversation.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-sm text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#DCF8C6] text-neutral-800 rounded-tr-sm"
                        : "bg-white text-neutral-800 rounded-tl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
