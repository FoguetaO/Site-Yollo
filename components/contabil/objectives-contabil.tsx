export default function ObjectivesContabil() {
  const items = [
    {
      title: "Atendimento 24/7 sem hora extra",
      desc: "Clientes recebem respostas imediatas fora do horário comercial, sem custo adicional de pessoal.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Zero prazo perdido",
      desc: "A IA envia lembretes automáticos de DAS, DCTF, SPED, IRPJ e outras obrigações antes do vencimento.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Coleta de documentos automática",
      desc: "Solicita extratos, notas e comprovantes direto no WhatsApp do cliente. Sem e-mail, sem ligação.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      ),
    },
    {
      title: "Triagem e qualificação de novos clientes",
      desc: "Filtra leads interessados em abrir empresa, regularizar MEI ou trocar de escritório — qualificados antes da reunião.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Reduza a sobrecarga da equipe",
      desc: "Perguntas repetitivas sobre CNPJ, MEI, Simples Nacional e alíquotas são respondidas pela IA, liberando o contador para o estratégico.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: "Integra com seu sistema contábil",
      desc: "Compatível com os principais sistemas do mercado. A IA acessa as informações dos clientes e responde com precisão.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ]

  return (
    <section id="beneficios" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-neutral-50 overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900">
            Tudo que seu escritório{" "}
            <span className="italic gradient-brand">precisa</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            A Yollo IA cuida do atendimento operacional para você focar no que realmente gera valor para seus clientes.
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
