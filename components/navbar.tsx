"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-neutral-900">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: "#C8956C" }}
          >
            B
          </span>
          <span>Bella IA</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
          <a href="#como-funciona" className="hover:text-neutral-900 transition-colors">
            Como funciona
          </a>
          <a href="#beneficios" className="hover:text-neutral-900 transition-colors">
            Benefícios
          </a>
          <a href="#faq" className="hover:text-neutral-900 transition-colors">
            FAQ
          </a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contratar"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: "#C8956C" }}
          >
            Agendar demonstração
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span
            className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-4">
          <a href="#como-funciona" className="text-sm font-medium text-neutral-700 py-2" onClick={() => setMobileOpen(false)}>
            Como funciona
          </a>
          <a href="#beneficios" className="text-sm font-medium text-neutral-700 py-2" onClick={() => setMobileOpen(false)}>
            Benefícios
          </a>
          <a href="#faq" className="text-sm font-medium text-neutral-700 py-2" onClick={() => setMobileOpen(false)}>
            FAQ
          </a>
          <a
            href="#contratar"
            className="text-sm font-semibold text-white px-5 py-3 rounded-full text-center transition-all"
            style={{ backgroundColor: "#C8956C" }}
            onClick={() => setMobileOpen(false)}
          >
            Agendar demonstração
          </a>
        </div>
      )}
    </nav>
  )
}
