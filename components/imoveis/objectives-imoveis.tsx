export default function ObjectivesImoveis() {
  return (
    <section
      id="beneficios"
      className="pt-12 pb-24 md:pt-20 md:pb-32 relative overflow-hidden"
      style={{ backgroundColor: "#F0F4FF" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900">
            A Bella IA se adapta ao
            <span className="md:hidden"><br /></span>{" "}
            <span className="text-4xl md:text-5xl italic" style={{ color: "#2563EB" }}>
              seu objetivo.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-xl">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: "#2563EB18" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#2563EB" }}>
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Captação + qualificação de leads</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Captura e qualifica leads de portais como ZAP, Viva Real e OLX diretamente no WhatsApp — sem corretor
              precisar intervir na triagem.
            </p>
            <div className="mt-auto pt-5 border-t border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Recomendado para</p>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Imobiliárias com alto volume de leads de portais
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-xl">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: "#2563EB18" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#2563EB" }}>
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Agendamento de visitas</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Agenda visitas automaticamente, confirma presença e envia lembretes — reduzindo no-shows e
              maximizando o tempo do corretor em campo.
            </p>
            <div className="mt-auto pt-5 border-t border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Recomendado para</p>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Corretores autônomos e imobiliárias boutique
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-xl relative">
            <span
              className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
              style={{ backgroundColor: "#2563EB" }}
            >
              Em breve
            </span>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-gray-100">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nutrição de carteira</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Mantém contato ativo com leads que ainda não decidiram, envia novos imóveis compatíveis e retoma
              negociações paradas automaticamente.
            </p>
            <div className="mt-auto pt-5 border-t border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Recomendado para</p>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Imobiliárias com grande carteira de leads frios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
