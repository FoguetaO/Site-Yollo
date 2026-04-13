"use client"

import Image from "next/image"

export interface SegmentFeatureHeroProps {
  badge: string
  title: string
  description: string
  features: { label: string; href?: string }[]
  ctaLabel: string
  ctaHref: string
  phoneImage: {
    src: string
    alt: string
  }
  accentColor?: string
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
}

export default function SegmentFeatureHero({
  badge,
  title,
  description,
  features,
  ctaLabel,
  ctaHref,
  phoneImage,
  accentColor = "#6C4FE8",
  gradientFrom = "#fdf4ff",
  gradientVia = "#fce7f3",
  gradientTo = "#f5f3ff",
}: SegmentFeatureHeroProps) {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientVia} 50%, ${gradientTo} 100%)`,
      }}
      aria-label={`Recursos — ${badge}`}
    >
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-30 blur-[120px]"
          style={{ backgroundColor: accentColor }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ backgroundColor: "#ec4899" }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">

          {/* Left — text content */}
          <div className="flex-1 flex flex-col gap-7 max-w-[560px]">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs font-semibold border"
              style={{
                backgroundColor: "#ffffff80",
                borderColor: `${accentColor}40`,
                color: accentColor,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              {badge}
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight text-balance">
              {title}
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed text-pretty">
              {description}{" "}
              {features.map((f, i) => (
                <span key={f.label}>
                  {f.href ? (
                    <a
                      href={f.href}
                      className="font-semibold underline underline-offset-2 transition-colors hover:opacity-80"
                      style={{ color: accentColor }}
                    >
                      {f.label}
                    </a>
                  ) : (
                    <strong style={{ color: accentColor }}>{f.label}</strong>
                  )}
                  {i < features.length - 1 ? "; " : "."}
                </span>
              ))}
            </p>

            {/* CTA */}
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2.5 self-start px-7 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-xl"
              style={{
                backgroundColor: "#111110",
                boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
              {ctaLabel}
            </a>
          </div>

          {/* Right — phone mockup */}
          <div className="flex-1 flex items-center justify-center md:justify-end relative">
            {/* Sparkle decorations */}
            <div aria-hidden="true" className="absolute top-6 right-10 opacity-60" style={{ color: accentColor }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
              </svg>
            </div>
            <div aria-hidden="true" className="absolute bottom-12 left-0 opacity-40" style={{ color: "#ec4899" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
              </svg>
            </div>
            <div aria-hidden="true" className="absolute top-1/2 left-4 opacity-30" style={{ color: accentColor }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
              </svg>
            </div>

            <div
              className="relative w-[270px] md:w-[310px] drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 24px 48px rgba(108,79,232,0.25))" }}
            >
              <Image
                src={phoneImage.src}
                alt={phoneImage.alt}
                width={310}
                height={640}
                className="object-contain w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
