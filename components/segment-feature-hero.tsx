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
    /* Container pai — fundo branco da página */
    <section
      className="w-full bg-white py-16 md:py-24"
      aria-label={`Recursos — ${badge}`}
    >
      {/* Container filho — max-width centralizado com padding lateral */}
      <div className="max-w-[1200px] mx-auto px-6">
        {/*
          Inner card: fundo gradiente, overflow-hidden para conter o blob,
          rounded-3xl para bordas arredondadas, grid de 2 colunas.
          A coluna da imagem não tem overflow: a imagem pode "vazar" levemente
          para cima/baixo mas fica contida horizontalmente no card.
        */}
        <div
          className="relative rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_480px] min-h-[420px] md:min-h-[480px]"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientVia} 55%, ${gradientTo} 100%)`,
          }}
        >
          {/* Blob decorativo de fundo */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full opacity-35 blur-[110px]"
              style={{ backgroundColor: accentColor }}
            />
            <div
              className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full opacity-20 blur-[90px]"
              style={{ backgroundColor: "#ec4899" }}
            />
          </div>

          {/* Coluna esquerda — texto */}
          <div className="relative z-10 flex flex-col justify-center gap-7 px-10 py-12 md:px-14 md:py-14">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs font-semibold border"
              style={{
                backgroundColor: "#ffffff90",
                borderColor: `${accentColor}40`,
                color: accentColor,
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              {badge}
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 leading-tight text-balance">
              {title}
            </h2>

            {/* Description + feature links */}
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed text-pretty max-w-[480px]">
              {description}{" "}
              {features.map((f, i) => (
                <span key={f.label}>
                  {f.href ? (
                    <a
                      href={f.href}
                      className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
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
              className="inline-flex items-center gap-2.5 self-start px-7 py-4 rounded-full text-white font-bold text-sm md:text-base transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#111110",
                boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
              {ctaLabel}
            </a>
          </div>

          {/* Coluna direita — imagem do smartphone fixada à direita do container */}
          <div className="relative hidden md:flex items-end justify-center">
            {/* Sparkles decorativos */}
            <div
              aria-hidden="true"
              className="absolute top-10 right-10 opacity-70"
              style={{ color: "#ffffff" }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
              </svg>
            </div>
            <div
              aria-hidden="true"
              className="absolute top-20 right-28 opacity-40"
              style={{ color: "#ffffff" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
              </svg>
            </div>

            {/*
              A imagem está posicionada para "sair" levemente para cima
              do container (translate-y negativo), como no design de referência.
              overflow-hidden no card-pai garante que não vaze nas laterais.
            */}
            <div className="-translate-y-6 drop-shadow-2xl w-[380px] xl:w-[420px]">
              <Image
                src={phoneImage.src}
                alt={phoneImage.alt}
                width={420}
                height={560}
                className="object-contain w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile: imagem centralizada abaixo do texto */}
          <div className="md:hidden flex justify-center px-6 pb-8 -mt-4">
            <div className="w-[260px] drop-shadow-xl">
              <Image
                src={phoneImage.src}
                alt={phoneImage.alt}
                width={260}
                height={340}
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
