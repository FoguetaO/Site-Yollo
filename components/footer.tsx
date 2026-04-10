export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111110", color: "#9CA3AF", padding: "3.5rem 1.5rem 2rem" }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="inline-flex items-center gap-2">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "#C8956C" }}
              >
                B
              </span>
              <span className="text-white font-bold text-lg">Bella IA</span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#9CA3AF" }}>
              Assistente IA para WhatsApp especializada em clínicas de estética. Agenda, qualifica e atende suas
              clientes 24 horas por dia.
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
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "#ffffff14", color: "#9CA3AF" }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = "#C8956C"
                    ;(e.currentTarget as HTMLElement).style.color = "#fff"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff14"
                    ;(e.currentTarget as HTMLElement).style.color = "#9CA3AF"
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Produto */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-widest" style={{ color: "#E5E7EB" }}>
              Produto
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Benefícios", href: "#beneficios" },
                { label: "Configuração", href: "#configure-sua-ia" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-neutral-100"
                    style={{ color: "#9CA3AF" }}
                  >
                    {link.label}
                  </a>
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
                { label: "Blog", href: "#" },
                { label: "Contato", href: "#contratar" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-neutral-100"
                    style={{ color: "#9CA3AF" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-widest" style={{ color: "#E5E7EB" }}>
              Suporte
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "FAQ", href: "#faq" },
                { label: "Privacidade", href: "#" },
                { label: "Termos de uso", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-neutral-100"
                    style={{ color: "#9CA3AF" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center text-[13px]" style={{ color: "#6B7280" }}>
          © {new Date().getFullYear()} Bella IA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
