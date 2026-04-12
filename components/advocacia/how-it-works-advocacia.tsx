"use client"

export default function HowItWorksAdvocacia() {
  const steps = [
    {
      number: 1,
      title: "Cliente entra em contato",
      description: "Qualquer cliente, em qualquer hora, manda mensagem via WhatsApp com sua dúvida jurídica ou consultoria.",
    },
    {
      number: 2,
      title: "Yollo IA qualifica",
      description: "A IA entende o tipo de caso, coleta informações básicas e, se necessário, agenda uma consulta com o advogado.",
    },
    {
      number: 3,
      title: "Advogado recebe pronto",
      description: "O advogado recebe um resumo do caso já organizado, sabia quem é o cliente e do que se trata o assunto.",
    },
  ]

  return (
    <section id="como-funciona" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900 mb-4">
            Como funciona na prática
          </h2>
          <p className="text-lg text-neutral-600">O fluxo é simples e intuitivo — configurado em minutos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg"
                  style={{ backgroundColor: "#6C4FE8" }}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[calc(40%-2rem)] h-0.5 bg-gradient-to-r from-neutral-300 to-neutral-200" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-neutral-50 rounded-2xl border border-neutral-100 p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">Tudo automatizado, nada de código</h3>
          <p className="text-neutral-600 leading-relaxed">
            Configure a IA respondendo algumas perguntas sobre sua área de atuação (direito civil, trabalhista, etc), os tipos de casos que atende e como você quer que ela responda. A Yollo IA aprende e começa a atender seus clientes imediatamente.
          </p>
        </div>
      </div>
    </section>
  )
}
