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
}: SegmentFeatureHeroProps) {
  return (
    <section
      className="w-full relative overflow-hidden"
      aria-label={`Recursos — ${badge}`}
    >
      {/* Imagem de background cobrindo toda a seção */}
      <Image
        src={phoneImage.src}
        alt=""
        fill
        className="object-cover"
        style={{ objectPosition: "60% center" }}
        loading="lazy"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* Coluna esquerda — texto */}
        <div className="flex flex-col gap-6 py-16 md:py-20 md:w-[45%] shrink-0">

          {/* Badge */}
          <span
            className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-xs font-medium border"
            style={{
              borderColor: `${accentColor}40`,
              color: accentColor,
              backgroundColor: `${accentColor}0d`,
            }}
          >
            <svg
              width="11"
              height="11"
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
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance text-neutral-900">
            {title}
          </h2>

          {/* Descrição + feature links */}
          <p className="text-base leading-relaxed text-pretty text-neutral-600 max-w-[400px]">
            {description}{" "}
            {features.map((f, i) => (
              <span key={f.label}>
                {f.href ? (
                  <a
                    href={f.href}
                    className="font-medium underline underline-offset-2 transition-opacity hover:opacity-70"
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
            className="inline-flex items-center gap-2 self-start px-6 py-3.5 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-px"
            style={{
              backgroundColor: "#111110",
            }}
          >
            <svg
              width="15"
              height="15"
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

      </div>
    </section>
  )
}
