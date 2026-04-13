"use client"

import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"

interface BlogContentProps {
  content: string
}

/* Gera IDs de âncora idênticos ao que o BlogToc gera */
function slugify(text: string) {
  return String(text)
    .toLowerCase()
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

/* CTA inline — aparece no meio do conteúdo (estilo blog-cta-inline do Assis.co) */
function CtaInline() {
  return (
    <aside className="not-prose my-8 rounded-2xl border p-6 md:p-8" style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)", borderColor: "#ddd6fe" }}>
      <p className="font-bold text-gray-900 text-lg mb-1 leading-snug">
        Quer ver isso funcionando no seu WhatsApp?
      </p>
      <p className="text-gray-600 text-sm mb-5 leading-relaxed">
        A Yollo IA atende, qualifica leads e agenda automaticamente — sem precisar de um humano 24h.
      </p>
      <Link
        href="/#contratar"
        className="inline-flex items-center gap-1.5 font-semibold text-sm rounded-full px-5 py-2.5 text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#6C4FE8", textDecoration: "none" }}
      >
        Começar agora <span aria-hidden="true">→</span>
      </Link>
    </aside>
  )
}

/* CTA banner — versão horizontal (estilo blog-cta-banner do Assis.co) */
function CtaBanner() {
  return (
    <aside className="not-prose my-10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5" style={{ backgroundColor: "#1f2937" }}>
      <div>
        <p className="font-bold text-white text-base mb-1 leading-snug">
          Seu WhatsApp pode trabalhar enquanto você dorme
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
          IA que atende, qualifica e agenda — 24h por dia, 7 dias por semana.
        </p>
      </div>
      <Link
        href="/#contratar"
        className="flex-shrink-0 inline-flex items-center gap-1.5 font-semibold text-sm rounded-full px-5 py-2.5 text-white transition-opacity hover:opacity-90 whitespace-nowrap"
        style={{ backgroundColor: "#6C4FE8", textDecoration: "none" }}
      >
        Começar agora <span aria-hidden="true">→</span>
      </Link>
    </aside>
  )
}

export default function BlogContent({ content }: BlogContentProps) {
  /* Injeta CTAs automaticamente a cada ~3 h2 */
  let h2Count = 0
  let inlineCtaInserted = false
  let bannerCtaInserted = false

  const components: Components = {
    h2: ({ children }) => {
      h2Count++
      const id = slugify(String(children))

      const showInlineCta = h2Count === 3 && !inlineCtaInserted
      const showBannerCta = h2Count === 6 && !bannerCtaInserted
      if (showInlineCta) inlineCtaInserted = true
      if (showBannerCta) bannerCtaInserted = true

      return (
        <>
          {showInlineCta && <CtaInline />}
          {showBannerCta && <CtaBanner />}
          <h2
            id={id}
            className="scroll-mt-24"
            style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginTop: "3rem", marginBottom: "1.25rem", lineHeight: 1.3 }}
          >
            {children}
          </h2>
        </>
      )
    },

    h3: ({ children }) => (
      <h3
        id={slugify(String(children))}
        className="scroll-mt-24"
        style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111827", marginTop: "2rem", marginBottom: "1rem", lineHeight: 1.4 }}
      >
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginTop: "1.5rem", marginBottom: "0.75rem" }}>
        {children}
      </h4>
    ),

    p: ({ children }) => (
      <p style={{ color: "#374151", lineHeight: 1.85, marginBottom: "1.5rem", fontSize: "17px" }}>
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul style={{ marginBottom: "1.5rem", paddingLeft: 0, listStyle: "none" }}>
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol style={{ marginBottom: "1.5rem", paddingLeft: 0, listStyle: "none", counterReset: "li-counter" }}>
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li style={{ display: "flex", gap: "0.75rem", marginBottom: "0.5rem", lineHeight: 1.75, color: "#374151", fontSize: "17px" }}>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            marginTop: "0.6rem",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "rgba(108, 79, 232, 0.5)",
            display: "inline-block",
          }}
        />
        <span>{children}</span>
      </li>
    ),

    strong: ({ children }) => (
      <strong style={{ fontWeight: 600, color: "#111827" }}>{children}</strong>
    ),

    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #6C4FE8",
          paddingLeft: "1.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          marginTop: "2rem",
          marginBottom: "2rem",
          backgroundColor: "rgba(108,79,232,0.04)",
          borderRadius: "0 12px 12px 0",
          fontStyle: "italic",
          color: "#374151",
          fontSize: "17px",
          lineHeight: 1.7,
        }}
      >
        {children}
      </blockquote>
    ),

    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#")
      const cls = { color: "#6C4FE8", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }
      if (isInternal) {
        return <Link href={href || "#"} style={cls}>{children}</Link>
      }
      return <a href={href} target="_blank" rel="noopener noreferrer" style={cls}>{children}</a>
    },

    table: ({ children }) => (
      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: "16px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead style={{ backgroundColor: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>{children}</thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr style={{ borderBottom: "1px solid #f3f4f6" }}>{children}</tr>
    ),
    th: ({ children }) => (
      <th style={{ padding: "12px 20px", fontSize: "12px", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td style={{ padding: "12px 20px", fontSize: "14px", color: "#374151", lineHeight: 1.6 }}>
        {children}
      </td>
    ),

    code: ({ children, className }) => {
      const isInline = !className
      if (isInline) {
        return (
          <code style={{ padding: "2px 6px", backgroundColor: "#f3f4f6", color: "#6C4FE8", fontSize: "14px", borderRadius: "4px", fontFamily: "ui-monospace, monospace" }}>
            {children}
          </code>
        )
      }
      return (
        <code style={{ display: "block", backgroundColor: "#111827", color: "#f9fafb", padding: "1.25rem", borderRadius: "16px", overflowX: "auto", margin: "1.5rem 0", fontSize: "14px", fontFamily: "ui-monospace, monospace", lineHeight: 1.7 }}>
          {children}
        </code>
      )
    },

    pre: ({ children }) => <>{children}</>,

    hr: () => (
      <hr style={{ margin: "3rem 0", border: 0, height: "1px", background: "linear-gradient(to right, transparent, #e5e7eb, transparent)" }} />
    ),
  }

  return (
    <div style={{ fontFamily: "inherit" }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
