"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export interface SegmentHeroProps {
  badge: string
  title: string
  titleHighlight?: string
  description: string
  ctaLabel: string
  ctaHref: string
  /** Detalhes dos recursos linkados inline na descrição */
  features?: { label: string; href: string }[]
  /** Imagem do smartphone / mockup */
  phoneImage: {
    src: string
    alt: string
  }
  /** Cor do gradiente de fundo — padrão: roxo/rosa como na referência */
  gradientFrom?: string
  gradientTo?: string
}

export default function SegmentHero({
  badge,
  title,
  titleHighlight,
  description,
  ctaLabel,
  ctaHref,
  phoneImage,
  gradientFrom = "#F5F3FF",
  gradientTo = "#EDE9FD",
}: SegmentHeroProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 50%, #f9f0ff 100%)`,
      }}
      aria-label={`Seção principal — ${badge}`}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ backgroundColor: "#a855f7" }}
        />
        <div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
          style={{ backgroundColor: "#ec4899" }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div
          className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Left — text */}
          <div className="flex-1 flex flex-col gap-6 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full border text-sm font-medium"
              style={{ backgroundColor: "#ffffff80", borderColor: "#d8b4fe60", color: "#6b21a8" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              {badge}
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight text-balance">
              {title}
              {titleHighlight && (
                <>
                  {" "}
                  <span className="italic" style={{ color: "#6C4FE8" }}>
                    {titleHighlight}
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed text-pretty">
              {description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{ backgroundColor: "#111110", boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
                {ctaLabel}
              </a>
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="flex-1 flex items-center justify-center md:justify-end relative">
            {/* Decorative sparkles */}
            <div aria-hidden="true" className="absolute top-4 right-8 text-purple-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.09 3.26L16.5 6.5l-3.41.91L12 11l-1.09-3.59L7.5 6.5l3.41-.91z"/>
              </svg>
            </div>
            <div aria-hidden="true" className="absolute bottom-10 left-2 text-pink-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.09 3.26L16.5 6.5l-3.41.91L12 11l-1.09-3.59L7.5 6.5l3.41-.91z"/>
              </svg>
            </div>

            <div className="relative w-[280px] md:w-[320px] drop-shadow-2xl">
              <Image
                src={phoneImage.src}
                alt={phoneImage.alt}
                width={320}
                height={620}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
