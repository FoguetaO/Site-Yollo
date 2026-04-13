"use client"

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
  backgroundImage?: string
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
  backgroundImage = "/ultimasecao.png",
}: SegmentFeatureHeroProps) {
  return (
    /* Container pai — largura total, sem background próprio */
    <section
      className="w-full py-0"
      aria-label={`Recursos — ${badge}`}
    >
      {/* Container filho — max-width centralizado com padding lateral */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">

        {/*
          Card interno: a imagem ultimasecao.png é o background via CSS background-image.
          Layout em duas colunas — texto à esquerda, espaço vazio à direita
          (a imagem já contém o smartphone posicionado à direita).
          rounded-3xl e overflow-hidden garantem que a imagem respeita as bordas.
        */}
        <div
          className="relative rounded-3xl overflow-hidden min-h-[420px] md:min-h-[500px] grid grid-cols-1 md:grid-cols-2"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay sutil apenas sobre a metade esquerda para legibilidade do texto */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.38) 55%, rgba(255,255,255,0) 100%)",
            }}
          />

          {/* Coluna esquerda — texto sobre o overlay */}
          <div className="relative z-10 flex flex-col justify-center gap-6 px-10 py-14 md:px-14 md:py-16">

            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm"
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
            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight text-balance text-neutral-900">
              {title}
            </h2>

            {/* Descrição + feature links */}
            <p className="text-base md:text-lg leading-relaxed text-pretty max-w-[420px] text-neutral-700">
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

          {/* Coluna direita — vazia: o smartphone já está na imagem de background */}
          <div className="hidden md:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
