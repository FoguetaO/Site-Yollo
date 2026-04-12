"use client"

export default function ObjectivesAdvocacia() {
  const objectives = [
    {
      icon: "⚡",
      title: "Atendimento 24/7",
      description: "Seus clientes recebem resposta imediata, mesmo fora do expediente",
    },
    {
      icon: "🎯",
      title: "Qualificação automática",
      description: "A IA classifica cada caso e coleta as informações que você precisa",
    },
    {
      icon: "📅",
      title: "Agendamento inteligente",
      description: "Consultas são agendadas automaticamente na sua agenda",
    },
    {
      icon: "💼",
      title: "Mais clientes, menos staff",
      description: "Aumente receita sem contratar mais atendentes",
    },
  ]

  return (
    <section id="beneficios" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900">
            Benefícios para seu escritório
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {objectives.map((obj, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-neutral-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{obj.icon}</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{obj.title}</h3>
              <p className="text-neutral-600">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
