"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface TocItem {
  id: string
  text: string
  level: number
}

function extractToc(content: string): TocItem[] {
  const matches = [...content.matchAll(/^(#{2,3})\s+(.+)$/gm)]
  return matches.map((m) => ({
    level: m[1].length,
    text: m[2].replace(/\*\*/g, "").replace(/`/g, "").trim(),
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
      { rootMargin: "-15% 0px -75% 0px" }
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  if (toc.length < 2) return null

  return (
    <div className="flex flex-col gap-6">
      {/* TOC */}
      <nav
        aria-label="Índice do artigo"
        style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "1.5rem" }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#9ca3af",
            marginBottom: "1rem",
          }}
        >
          Neste artigo
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
          {toc.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id} style={{ paddingLeft: item.level === 3 ? "0.75rem" : "0" }}>
                <a
                  href={`#${item.id}`}
                  style={{
                    display: "block",
                    fontSize: "13px",
                    lineHeight: 1.5,
                    padding: "5px 8px",
                    margin: "0 -8px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    transition: "all 0.15s",
                    color: isActive ? "#6C4FE8" : "#6b7280",
                    fontWeight: isActive ? 600 : 400,
                    backgroundColor: isActive ? "rgba(108,79,232,0.07)" : "transparent",
                  }}
                >
                  {item.text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* CTA Sidebar */}
      <div
        style={{
          borderRadius: "16px",
          padding: "1.5rem",
          background: "linear-gradient(135deg, #6C4FE8 0%, #9879F0 100%)",
          color: "#fff",
        }}
      >
        <p style={{ fontWeight: 700, fontSize: "15px", marginBottom: "6px", lineHeight: 1.4 }}>
          Automatize seu WhatsApp com IA
        </p>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "1rem" }}>
          A Yollo IA atende, qualifica leads e agenda 24h por dia.
        </p>
        <Link
          href="/#contratar"
          style={{
            display: "block",
            textAlign: "center",
            backgroundColor: "#fff",
            color: "#6C4FE8",
            fontWeight: 600,
            fontSize: "13px",
            borderRadius: "999px",
            padding: "9px 16px",
            textDecoration: "none",
            transition: "opacity 0.15s",
          }}
        >
          Agendar demonstração →
        </Link>
      </div>
    </div>
  )
}
