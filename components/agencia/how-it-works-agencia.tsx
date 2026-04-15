export default function HowItWorksAgencia() {
  return (
    <section id="como-funciona" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hidden md:block opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-normal text-neutral-900">
            Como a{" "}
            <span className="italic gradient-brand">Yollo IA</span>{" "}
            prospecta para você
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            Da busca de empresas ao agendamento da reunião  -  tudo automático, sem o time precisar intervir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Prospecção por segmento e cidade</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Você define o nicho (restaurantes, clínicas, academias...) e a cidade. A IA mapeia automaticamente
                as empresas do segmento com número de WhatsApp disponível.
              </p>
            </div>
            <div className="mt-auto bg-white rounded-xl border border-neutral-100 overflow-hidden shadow-sm min-h-[200px]">
              <div className="h-6 bg-neutral-100 border-b border-neutral-200 flex items-center px-3 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                <div className="w-2 h-2 rounded-full bg-green-400/50" />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-semibold text-neutral-500 mb-3 uppercase tracking-wider">Prospecção ativa</div>
                <div className="flex flex-col gap-2 mb-3">
                  <div className="flex items-center gap-2 bg-violet-50 rounded-lg px-3 py-2 border border-violet-100">
                    <span className="text-[10px] font-bold text-violet-700 w-16 flex-shrink-0">Segmento</span>
                    <span className="text-[10px] text-neutral-700">Clínicas de Estética</span>
                  </div>
                  <div className="flex items-center gap-2 bg-violet-50 rounded-lg px-3 py-2 border border-violet-100">
                    <span className="text-[10px] font-bold text-violet-700 w-16 flex-shrink-0">Cidade</span>
                    <span className="text-[10px] text-neutral-700">São Paulo  -  SP</span>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg px-3 py-2 border border-green-100">
                  <p className="text-[10px] font-semibold text-green-700">247 empresas encontradas</p>
                  <p className="text-[9px] text-green-600 mt-0.5">com WhatsApp disponivel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Disparo em massa personalizado</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                A IA dispara mensagens personalizadas para centenas de prospects ao mesmo tempo, adaptando
                a abordagem ao segmento e ao contexto da empresa.
              </p>
            </div>
            <div className="mt-auto bg-[#E4DDD6] rounded-xl p-3 min-h-[200px] border border-[#D4CDB6]">
              <div className="flex flex-col gap-2">
                <div
                  className="self-end rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm text-white max-w-[90%]"
                  style={{ backgroundColor: "#6C4FE8" }}
                >
                  Oi, Dra. Ana! Vi que sua clínica de estética não tem um sistema de agendamento automático via WhatsApp. Posso mostrar como outras clínicas em SP triplicaram os agendamentos?
                </div>
                <div className="self-end text-xs text-neutral-400 pr-1">10:14 ✓✓</div>
                <div className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm text-sm text-neutral-800 max-w-[85%]">
                  Oi! Sim, tenho interesse. Como funciona?
                </div>
                <div className="self-start text-xs text-neutral-400 pl-1">10:17</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Nurturing e agendamento de reunião</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                A IA responde dúvidas, faz follow-up automático nos que não responderam e agenda a reunião
                diretamente na agenda do time comercial.
              </p>
            </div>
            <div className="mt-auto bg-white rounded-xl border border-neutral-100 overflow-hidden shadow-sm min-h-[200px]">
              <div className="h-6 bg-neutral-100 border-b border-neutral-200 flex items-center px-3 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                <div className="w-2 h-2 rounded-full bg-green-400/50" />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-semibold text-neutral-500 mb-3 uppercase tracking-wider">Reuniões desta semana</div>
                <div className="flex flex-col gap-2">
                  {[
                    { time: "Ter 14:00", name: "Clínica Bella Pele  -  Prospecção" },
                    { time: "Qua 10:00", name: "Studio Corpo & Arte  -  Demo" },
                    { time: "Qui 15:30", name: "Espaço Renova  -  Proposta" },
                    { time: "Sex 09:00", name: "Clínica Estética Zen  -  Follow" },
                  ].map((slot) => (
                    <div key={slot.time} className="flex items-center gap-2 text-[10px]">
                      <span className="text-neutral-400 w-16 flex-shrink-0">{slot.time}</span>
                      <div
                        className="flex-1 rounded px-2 py-1 text-white font-medium"
                        style={{ backgroundColor: "#6C4FE8CC" }}
                      >
                        {slot.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
