export default function ObjectivesContabil() {
  const items = [
    {
      title: "Disparo em massa personalizado",
      desc: "Envie mensagens para toda a carteira ou segmentos específicos como clientes MEI, Simples Nacional e empresas do Lucro Presumido, com texto adaptado para cada perfil.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ),
    },
    {
      title: "Rastreamento de leads por anúncio",
      desc: "Cada lead é vinculado automaticamente ao anúncio de origem. Saiba exatamente quais campanhas geram mais clientes sem precisar perguntar.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      title: "Histórico completo de conversas",
      desc: "Todas as interações ficam registradas por cliente. O contador acessa o histórico antes de qualquer reunião sem precisar perguntar o que já foi conversado.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: "Respostas rápidas configuráveis",
      desc: "Crie um banco de respostas prontas para as dúvidas mais frequentes do escritório: DAS, DCTF, abertura de CNPJ, prazo de IR e muito mais.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      title: "Multi-atendente com filas",
      desc: "Vários colaboradores atendem simultaneamente pelo mesmo número. A IA triou, o humano fecha com visibilidade total de quem está atendendo o quê.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Relatórios de atendimento",
      desc: "Visualize volume de conversas por período, tempo médio de resposta, departamentos mais acionados e leads gerados, tudo em painel simples.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ]

  return (
    <section id="beneficios" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-neutral-50 overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-normal text-neutral-900">
            Tudo que seu escritório{" "}
            <span className="italic gradient-brand">precisa</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            Recursos complementares que otimizam a rotina do escritório e melhoram a experiência do cliente.
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
