export default function ObjectivesAgencia() {
  const items = [
    {
      title: "Prospecção por segmento e cidade",
      desc: "Defina o nicho e a cidade — a IA mapeia automaticamente empresas com WhatsApp disponível para contato.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      title: "Disparo em massa via WhatsApp",
      desc: "Envie centenas de mensagens personalizadas simultaneamente, adaptadas ao segmento de cada prospect.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ),
    },
    {
      title: "Nurturing automático de leads",
      desc: "A IA faz follow-up nos prospects que não responderam, responde dúvidas e mantém o interesse aquecido.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: "Agendamento automático de reuniões",
      desc: "Prospects interessados têm a reunião agendada diretamente na agenda do time comercial — sem intervenção humana.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      title: "Atendimento e qualificação 24/7",
      desc: "Enquanto o time dorme, a IA continua respondendo prospects, qualificando leads e movendo oportunidades no funil.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Funciona para qualquer nicho",
      desc: "Estética, gastronomia, saúde, varejo, educação — configure a IA para qualquer segmento que sua agência atende.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="beneficios" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-neutral-50 overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-normal text-neutral-900">
            Tudo que sua agência{" "}
            <span className="italic gradient-brand">precisa</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            A Yollo IA cuida de toda a prospecção para sua agência focar no que gera mais valor: estratégia e resultados para os clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "#6C4FE812", color: "#6C4FE8" }}
              >
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
