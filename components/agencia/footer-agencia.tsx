"use client"

export default function FooterAgencia() {
  return (
    <footer
      aria-label="Rodapé — Yollo IA para Agências de Marketing"
      style={{ backgroundColor: "#0a0d14", color: "#9CA3AF", padding: "4rem 1.5rem 2rem" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10 pb-8 border-b border-white/[0.06]">
          <p className="text-xs text-center leading-relaxed max-w-3xl mx-auto" style={{ color: "#6B7280" }}>
            <strong style={{ color: "#9CA3AF" }}>Yollo IA para Agências de Marketing</strong> — Prospecção automática por segmento e cidade, disparo em massa e nurturing de leads via WhatsApp com IA para{" "}
            <a href="/agencia-de-marketing" className="underline underline-offset-2 hover:text-neutral-300 transition-colors">agências de marketing digital</a>.{" "}
            Veja também:{" "}
            <a href="/clinica-de-estetica" className="underline underline-offset-2 hover:text-neutral-300 transition-colors">IA para clínicas de estética</a>,{" "}
            <a href="/imoveis" className="underline underline-offset-2 hover:text-neutral-300 transition-colors">IA para imobiliárias</a>,{" "}
            <a href="/contabilidade" className="underline underline-offset-2 hover:text-neutral-300 transition-colors">IA para contabilidade</a> e{" "}
            <a href="/advocacia" className="underline underline-offset-2 hover:text-neutral-300 transition-colors">IA para advocacia</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/[0.08]">
          <div className="flex flex-col gap-4">
            <a href="/" aria-label="Yollo IA — Página inicial">
              <img
                src="/logo-yollo.png"
                alt="Yollo IA — automação de WhatsApp com IA para agências de marketing"
                className="h-8 w-auto brightness-0 invert"
                width="120"
                height="32"
              />
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#9CA3AF" }}>
              Automatize a prospecção da sua agência com IA. Mapeie empresas por segmento e cidade, dispare em massa pelo WhatsApp e encha o pipeline de reuniões qualificadas.
            </p>
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
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "#ffffff14", color: "#9CA3AF" }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = "#6C4FE8"
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

          <nav aria-label="Outros segmentos Yollo IA">
            <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#E5E7EB" }}>
              Segmentos
            </h2>
            <ul className="flex flex-col gap-2">
              {[
                { label: "IA para Agências de Marketing", href: "/agencia-de-marketing" },
                { label: "IA para Clínicas de Estética", href: "/clinica-de-estetica" },
                { label: "IA para Imobiliárias", href: "/imoveis" },
                { label: "IA para Contabilidade", href: "/contabilidade" },
                { label: "IA para Advocacia", href: "/advocacia" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-neutral-100" style={{ color: "#9CA3AF" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Produto Yollo IA para agências">
            <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#E5E7EB" }}>
              Produto
            </h2>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Como funciona a prospecção", href: "#como-funciona" },
                { label: "Disparo em massa", href: "#funcionalidades" },
                { label: "Nurturing automático", href: "#beneficios" },
                { label: "Planos e preços", href: "#contratar" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-neutral-100" style={{ color: "#9CA3AF" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Empresa Yollo IA">
            <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#E5E7EB" }}>
              Empresa
            </h2>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Sobre a Yollo IA", href: "#" },
                { label: "Agendar demonstração", href: "#contratar" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-neutral-100" style={{ color: "#9CA3AF" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Suporte Yollo IA">
            <h2 className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#E5E7EB" }}>
              Suporte
            </h2>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Perguntas frequentes", href: "#faq" },
                { label: "Política de privacidade", href: "#" },
                { label: "Termos de uso", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-neutral-100" style={{ color: "#9CA3AF" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px]" style={{ color: "#6B7280" }}>
          <span>© {new Date().getFullYear()} Yollo IA. Todos os direitos reservados.</span>
          <span>Parceiro oficial Meta — WhatsApp Business API</span>
        </div>
      </div>
    </footer>
  )
}
