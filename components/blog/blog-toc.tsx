"use client"

import { useEffect, useState } from "react"

interface TocItem {
  id: string
  text: string
  level: number
}

function extractToc(content: string): TocItem[] {
  const matches = [...content.matchAll(/^(#{2,3})\s+(.+)$/gm)]
  return matches.map((m) => ({
    level: m[1].length,
    text: m[2].replace(/\*\*/g, "").replace(/`/g, ""),
    id: m[2]
      .toLowerCase()
      .replace(/\*\*/g, "")
      .replace(/`/g, "")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-"),
  }))
}

export default function BlogToc({ content }: { content: string }) {
  const toc = extractToc(content)
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const headings = document.querySelectorAll("article h2, article h3")
    if (!headings.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  if (toc.length < 2) return null

  return (
    <nav aria-label="Índice do artigo" className="sticky top-28">
      <div className="bg-white border border-neutral-200 rounded-2xl p-6">
        <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">
          Neste artigo
        </p>
        <ul className="space-y-1">
          {toc.map((item) => (
            <li key={item.id} style={{ paddingLeft: item.level === 3 ? "0.75rem" : "0" }}>
              <a
                href={`#${item.id}`}
                className={`block text-sm leading-snug py-1 transition-colors rounded px-2 -mx-2 ${
                  active === item.id
                    ? "text-[#6C4FE8] font-semibold bg-[#6C4FE8]/6"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar CTA */}
      <div
        className="mt-6 rounded-2xl p-6 text-white"
        style={{ background: "linear-gradient(135deg, #6C4FE8, #9879F0)" }}
      >
        <p className="font-bold text-base mb-2 leading-snug">
          Automatize seu WhatsApp com IA
        </p>
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          A Yollo IA atende, qualifica leads e agenda 24h por dia.
        </p>
        <a
          href="/#contratar"
          className="block text-center bg-white font-semibold text-sm rounded-full px-4 py-2.5 transition-opacity hover:opacity-90"
          style={{ color: "#6C4FE8" }}
        >
          Agendar demonstração →
        </a>
      </div>
    </nav>
  )
}
