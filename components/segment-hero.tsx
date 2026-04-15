"use client"

import Image from "next/image"
import { useEffect } from "react"
import ShinyButton from "@/components/shiny-button"

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
  /** Cor do gradiente de fundo  -  padrão: roxo/rosa como na referência */
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
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".hero-segment-eb").forEach((el) => el.classList.add("eb"))
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 50%, #f9f0ff 100%)`,
      }}
      aria-label={`Seção principal  -  ${badge}`}
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
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

          {/* Phone mockup  -  order-1 on mobile (top), order-2 on desktop (right) */}
          <div
            className="w-full flex items-center justify-center order-1 md:order-2 md:flex-1 relative scroll-eb hero-segment-eb"
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Decorative sparkles */}
            <div aria-hidden="true" className="absolute top-4 right-8 text-purple-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.09 3.26L16.5 6.5l-3.41.91L12 11l-1.09-3.59L7.5 6.5l3.41-.91z" />
              </svg>
            </div>
            <div aria-hidden="true" className="absolute bottom-10 left-2 text-pink-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.09 3.26L16.5 6.5l-3.41.91L12 11l-1.09-3.59L7.5 6.5l3.41-.91z" />
              </svg>
            </div>

            <div className="relative w-[220px] sm:w-[260px] md:w-[320px] drop-shadow-2xl">
              <Image
                src={phoneImage.src}
                alt={phoneImage.alt}
                width={320}
                height={620}
                className="object-contain w-full h-auto"
                priority
                sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 320px"
              />
            </div>
          </div>

          {/* Text  -  order-2 on mobile (bottom), order-1 on desktop (left) */}
          <div className="flex-1 flex flex-col gap-6 order-2 md:order-1 max-w-xl w-full scroll-eb hero-segment-eb text-center md:text-left items-center md:items-start">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 self-center md:self-start px-4 py-2 rounded-full border text-sm font-medium"
              style={{ backgroundColor: "#ffffff80", borderColor: "#d8b4fe60", color: "#6b21a8" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              {badge}
            </div>

            {/* Heading */}
            <h1
              className="font-bold text-neutral-900 leading-tight text-balance"
              style={{ fontSize: "clamp(32px, 5vw, 51px)" }}
            >
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
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center md:justify-start">
              <ShinyButton href={ctaHref} label={ctaLabel} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
