export default function Security() {
  return (
    <section className="section bg-gradient-to-b from-white to-green-50/60 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
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

          <h2 className="text-4xl md:text-5xl font-medium text-center mb-4 text-neutral-900">
            Parceiros oficiais da{" "}
            <span className="font-semibold text-green-600">Meta</span>
          </h2>
          <p className="text-lg text-neutral-600 text-center mb-16 max-w-3xl mx-auto">
            Sua clínica blindada com os selos de segurança mais importantes do mercado.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp Business API */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="mb-6 h-16 flex items-center">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.92 13.42c-.21.59-1.22 1.15-1.68 1.22-.43.06-.97.09-1.56-.1-.36-.12-.82-.28-1.41-.55-2.46-1.06-4.07-3.52-4.19-3.68-.12-.16-.98-1.3-.98-2.49 0-1.18.62-1.77.84-2.01.21-.24.46-.3.62-.3h.44c.14 0 .33-.05.52.4l.74 1.83c.07.17.12.36.01.56-.1.2-.15.32-.3.49l-.44.5c-.14.15-.29.32-.12.62.17.3.73 1.2 1.58 1.94.54.48 1.13.79 1.54.99.32.16.7.12.95-.13l.33-.38c.22-.27.55-.42.87-.3l2.07.97c.27.13.45.27.45.57v1.02c0 .21-.03.43-.24 1.02z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">WhatsApp</div>
                    <div className="text-xs text-neutral-500">Business API</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">WhatsApp Business API Oficial</h3>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                Usamos apenas a{" "}
                <span className="font-medium">API Oficial do WhatsApp Business</span>. Isso significa máxima
                estabilidade, sem risco de banimento e acesso antecipado às novidades da plataforma.
              </p>
              <a
                href="https://www.whatsapp.com/business/api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
              >
                <span>Saiba mais sobre a API Oficial</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Meta Tech Provider */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="mb-6 h-16 flex items-center">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 6.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S15 10.828 15 10s.672-1.5 1.5-1.5zM7.5 8.5C8.328 8.5 9 9.172 9 10s-.672 1.5-1.5 1.5S6 10.828 6 10s.672-1.5 1.5-1.5zM12 18c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08C16.71 16.72 14.5 18 12 18z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">Meta</div>
                    <div className="text-xs text-neutral-500">Tech Provider</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">Meta Tech Provider</h3>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                Somos verificados como{" "}
                <span className="font-medium">Meta Tech Provider</span>. Isso significa que nossa integração com o
                WhatsApp é oficial e todas as mensagens são protegidas com criptografia de ponta-a-ponta.
              </p>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Criptografia de ponta-a-ponta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
