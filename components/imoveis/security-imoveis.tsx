import Image from "next/image"

export default function SecurityImoveis() {
  return (
    <section className="section bg-gradient-to-b from-white to-blue-50/60 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Segurança Oficial</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-center mb-4 text-neutral-900">
            Duas opções de{" "}
            <span className="font-semibold text-green-600">API WhatsApp</span>
          </h2>
          <p className="text-lg text-neutral-600 text-center mb-16 max-w-3xl mx-auto">
            Escolha a opção que melhor se encaixa no seu negócio. Ambas funcionam com a Yollo IA.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
  <div className="mb-6 flex items-center justify-start">
  <Image
  src="/images/meta-verified.svg"
                  alt="Meta Verified"
                  width={200}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">API Oficial do WhatsApp</h3>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                Parceiros verificados da <span className="font-medium">Meta</span>. Máxima estabilidade, sem risco de banimento e criptografia de ponta-a-ponta. Ideal para quem quer a opção mais segura e escalável.
              </p>
              <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Meta Tech Provider verificado</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="mb-6 flex items-center justify-center">
                <Image
                  src="/images/whatsapp-ai-hub.png"
                  alt="WhatsApp AI Startups Hub"
                  width={120}
                  height={120}
                  className="rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">API Não Oficial do WhatsApp</h3>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                Conecta diretamente ao seu número existente, <span className="font-medium">sem precisar migrar para o Business API</span>. Configuração rápida e sem necessidade de aprovação pela Meta.
              </p>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Configuração rápida, sem aprovação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
