import type { Metadata } from "next"
import DocsSidebar from "@/components/docs/docs-sidebar"
import DocsContent from "@/components/docs/docs-content"

export const metadata: Metadata = {
  title: "Documentação da API | Yollo IA",
  description:
    "API REST para integração com o sistema de CRM, WhatsApp e Agentes de IA. Permite automatizar operações de negociações, contatos, mensagens, relatórios e configurações.",
}

export default function DocsAPIPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/95 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-yollo.png" alt="Yollo IA" className="h-7 w-auto" />
            </a>
            <span className="text-neutral-300 text-lg font-light">/</span>
            <span className="text-sm font-medium text-neutral-500">Documentação da API</span>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "#6C4FE812", color: "#4F39B0", border: "1px solid #6C4FE830" }}
            >
              v1
            </span>
            <a
              href="/"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Voltar ao site
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-screen-xl mx-auto w-full">
        <DocsSidebar />
        <DocsContent />
      </div>
    </div>
  )
}
