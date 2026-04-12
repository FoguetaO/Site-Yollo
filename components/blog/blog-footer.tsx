"use client"

import Link from "next/link"
import { blogCategories } from "@/lib/blog-data"

export default function BlogFooter() {
  return (
    <footer style={{ backgroundColor: "#111110", color: "#9CA3AF", padding: "3.5rem 1.5rem 2rem" }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center">
              <img src="/logo-yollo.png" alt="Yollo IA" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#9CA3AF" }}>
              Assistente IA para WhatsApp que responde clientes em segundos, agenda automaticamente e
              organiza seu negócio 24 horas por dia.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-1">
              {[
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l.04-8.49a8.27 8.27 0 0 0 4.83 1.54V4.88a4.85 4.85 0 0 1-1.1-.19z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "#ffffff14", color: "#9CA3AF" }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Blog Categories */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-widest" style={{ color: "#E5E7EB" }}>
              Categorias
            </h4>
            <ul className="flex flex-col gap-2">
              {blogCategories.slice(0, 4).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/blog/categoria/${category.slug}`}
                    className="text-sm transition-colors hover:text-neutral-100"
                    style={{ color: "#9CA3AF" }}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segmentos */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-widest" style={{ color: "#E5E7EB" }}>
              Segmentos
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Clínicas de Estética", href: "/" },
                { label: "Imobiliário", href: "/imoveis" },
                { label: "Contabilidade", href: "/contabil" },
                { label: "Advocacia", href: "/advocacia" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-neutral-100"
                    style={{ color: "#9CA3AF" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-widest" style={{ color: "#E5E7EB" }}>
              Empresa
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Sobre nós", href: "#" },
                { label: "Blog", href: "/blog" },
                { label: "Contato", href: "/#contratar" },
                { label: "FAQ", href: "/#faq" },
                { label: "Privacidade", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-neutral-100"
                    style={{ color: "#9CA3AF" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center text-[13px]" style={{ color: "#6B7280" }}>
          © {new Date().getFullYear()} Yollo IA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
