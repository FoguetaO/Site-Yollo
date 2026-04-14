"use client"

import { useState, useEffect, useRef } from "react"

const segments = [
  { label: "Advocacia", href: "/advocacia", active: true },
  { label: "Agência de Marketing", href: "/agencia-de-marketing", active: false },
  { label: "Contabilidade", href: "/contabilidade", active: false },
  { label: "Imobiliário", href: "/imoveis", active: false },
  { label: "Clínica de Estética", href: "/clinica-de-estetica", active: false },
]

export default function NavbarAdvocacia() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [segmentOpen, setSegmentOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSegmentOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/logo-yollo.png" alt="Yollo IA" className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
          <a href="/" className="hover:text-neutral-900 transition-colors">
            Início
          </a>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setSegmentOpen(!segmentOpen)}
              className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
              aria-expanded={segmentOpen}
            >
              Segmento
              <svg
                className={`w-4 h-4 text-neutral-400 transition-transform ${segmentOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {segmentOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl border border-neutral-100 shadow-lg overflow-hidden py-1">
                {segments.map((seg) => (
                  <a
                    key={seg.label}
                    href={seg.href}
                    onClick={() => setSegmentOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 text-sm hover:bg-neutral-50 transition-colors ${
                      seg.active ? "font-semibold text-neutral-900" : "text-neutral-600"
                    }`}
                  >
                    <span>{seg.label}</span>
                    {seg.active && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "#6C4FE8" }}>
                        Atual
                      </span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#como-funciona" className="hover:text-neutral-900 transition-colors">
            Como funciona
          </a>
          <a href="#beneficios" className="hover:text-neutral-900 transition-colors">
            Benefícios
          </a>
          <a href="#faq" className="hover:text-neutral-900 transition-colors">
            FAQ
          </a>
          <a href="/blog" className="hover:text-neutral-900 transition-colors">
            Blog
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://crm.yolloia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Já sou cliente
          </a>
          <a
            href="#contratar"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: "#6C4FE8" }}
          >
            Agendar demonstração
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-4">
          <a href="/" className="text-sm font-medium text-neutral-700 py-2" onClick={() => setMobileOpen(false)}>
            Início
          </a>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Segmento</p>
            {segments.map((seg) => (
              <a
                key={seg.label}
                href={seg.href}
                className={`block py-2 text-sm font-medium ${seg.active ? "text-violet-600" : "text-neutral-600"}`}
                onClick={() => setMobileOpen(false)}
              >
                {seg.label}
              </a>
            ))}
          </div>
          <a href="#como-funciona" className="text-sm font-medium text-neutral-700 py-2" onClick={() => setMobileOpen(false)}>
            Como funciona
          </a>
          <a href="#beneficios" className="text-sm font-medium text-neutral-700 py-2" onClick={() => setMobileOpen(false)}>
            Benefícios
          </a>
          <a href="#faq" className="text-sm font-medium text-neutral-700 py-2" onClick={() => setMobileOpen(false)}>
            FAQ
          </a>
          <a href="/blog" className="text-sm font-medium text-neutral-700 py-2" onClick={() => setMobileOpen(false)}>
            Blog
          </a>
          <a href="#contratar" className="text-sm font-semibold text-white px-5 py-3 rounded-full text-center" style={{ backgroundColor: "#6C4FE8" }} onClick={() => setMobileOpen(false)}>
            Agendar demonstração
          </a>
        </div>
      )}
    </nav>
  )
}
