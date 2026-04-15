"use client"

import { useEffect, useRef } from "react"

const comments = [
  {
    initials: "AC",
    username: "@ana.clinica.bella",
    time: "há 2 dias",
    text: "A IA da Bella está sendo incrível! Minha agenda encheu na semana seguinte que ativei. Não perco mais cliente por falta de resposta.",
    likes: 24,
  },
  {
    initials: "FM",
    username: "@fer.estetica",
    time: "há 5 dias",
    text: "Senti uma diferença enorme. Antes eu perdia clientes que mandavam mensagem à noite. Agora todos são atendidos na hora.",
    likes: 18,
  },
  {
    initials: "LC",
    username: "@lu.corpoebeleza",
    time: "há 1 semana",
    text: "De todos os sistemas que testei, este é o mais prático e natural. As clientes não percebem que é uma IA.",
    likes: 31,
  },
  {
    initials: "KS",
    username: "@kclinics_",
    time: "há 1 dia",
    text: "Minha recepcionista ficou aliviada. A IA faz todo o pré-atendimento e só manda para ela as clientes já prontas para agendar.",
    likes: 12,
  },
  {
    initials: "RS",
    username: "@renata.spa",
    time: "há 3 dias",
    text: "Configurei em menos de 30 minutos e já estava funcionando. Simplesmente fantástico!",
    likes: 9,
  },
  {
    initials: "MB",
    username: "@michbella.clinic",
    time: "há 6 dias",
    text: "Taxa de conversão melhorou muito. A IA qualifica os leads e entrega para mim só quem quer mesmo agendar.",
    likes: 15,
  },
]



function CommentCard({ initials, username, time, text, likes }: (typeof comments)[0]) {
  return (
    <div className="min-w-[300px] max-w-[300px] bg-[#0F0F0F] rounded-2xl p-4 shadow-lg border border-neutral-800 select-none flex-shrink-0">
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
            style={{ background: "linear-gradient(135deg, #6C4FE8, #9879F0)" }}
          >
            {initials}
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white truncate">{username}</span>
              <span className="text-xs text-neutral-400 flex-shrink-0">{time}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-neutral-100 leading-relaxed pl-[52px]">{text}</p>
        <div className="flex items-center gap-2 pl-[52px]">
          <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <span className="text-xs font-medium">{likes}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

const allCards = comments.map((c, i) => ({ type: "comment" as const, data: c, key: `c${i}` }))

const loopCards = [
  ...allCards.map((c) => ({ ...c, key: `${c.key}-a` })),
  ...allCards.map((c) => ({ ...c, key: `${c.key}-b` })),
]

export default function SocialProof() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    let raf: number
    const step = () => {
      pos += 0.4
      const halfWidth = track.scrollWidth / 2
      if (pos >= halfWidth) pos = 0
      track.style.transform = `translateX(-${pos}px)`
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-normal text-neutral-900">
          Clínicas que já{" "}
          <span className="italic gradient-brand">
            transformaram
          </span>{" "}
          o atendimento
        </h2>
        <p className="text-base text-neutral-500 mt-4 max-w-xl mx-auto">
          Veja o que donos de clínicas estão dizendo sobre a Yollo IA
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-4 w-max">
            {loopCards.map((card) => (
              <CommentCard key={card.key} {...(card.data as (typeof comments)[0])} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
