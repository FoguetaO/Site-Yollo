export default function Objectives() {
  return (
    <section
      id="beneficios"
      className="pt-12 pb-24 md:pt-20 md:pb-32 relative overflow-hidden"
      style={{ backgroundColor: "#F5F3FF" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900">
            A Yollo IA se adapta ao
            <span className="md:hidden">
              <br />
            </span>{" "}
            <span className="text-4xl md:text-5xl italic gradient-brand">
              seu objetivo.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-xl">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: "#6C4FE818" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#6C4FE8" }}
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualificação + agendamento</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Qualifica a cliente e agenda o procedimento diretamente no WhatsApp — sem intervenção humana.
            </p>
            <div className="mt-auto pt-5 border-t border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Recomendado para</p>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Clínicas de estética, spas, centros de beleza
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-xl">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: "#6C4FE818" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#6C4FE8" }}
              >
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Gestão de retornos</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Envia lembretes automáticos, confirma presença e reagenda no-shows sem você precisar ligar.
            </p>
            <div className="mt-auto pt-5 border-t border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Recomendado para</p>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Dermatologistas, biomédicos estetas, esteticistas
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-xl relative">
            <span
              className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
              style={{ backgroundColor: "#6C4FE8" }}
            >
              Em breve
            </span>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-gray-100">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Venda de pacotes</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Apresenta pacotes de tratamento, oferece upgrades e finaliza a venda diretamente no chat.
            </p>
            <div className="mt-auto pt-5 border-t border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Recomendado para</p>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Clínicas com pacotes mensais, programas de fidelidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
