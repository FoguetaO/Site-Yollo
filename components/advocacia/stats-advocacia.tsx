"use client"

export default function StatsAdvocacia() {
  const stats = [
    {
      value: "87%",
      label: "De clientes respondem na primeira mensagem",
      description: "Quando recebem resposta imediata da IA",
    },
    {
      value: "3x",
      label: "Mais cases qualificados",
      description: "Enquanto você dorme, a IA está agendando",
    },
    {
      value: "24h",
      label: "Atendimento contínuo",
      description: "Sem precisar contratar mais pessoas",
    },
  ]

  return (
    <section className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#6C4FE8" }}>
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{stat.label}</h3>
              <p className="text-neutral-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
