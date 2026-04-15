export default function HowItWorks() {
  return (
    <section id="como-funciona" className="pt-12 pb-24 md:pt-20 md:pb-32 relative bg-white overflow-hidden">
      {/* Background grid */}
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
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-normal text-neutral-900">
            Como a{" "}
            <span className="italic gradient-brand">
              Yollo IA
            </span>{" "}
            funciona
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            Da primeira mensagem ao agendamento confirmado. Tudo automático, sem você precisar intervir.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Responde em segundos</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                A IA atende seus clientes instantaneamente, apresenta tratamentos e tira dúvidas a qualquer hora do
                dia ou da noite.
              </p>
            </div>
            {/* Visual: WhatsApp mock */}
            <div className="mt-auto bg-[#E4DDD6] rounded-xl p-3 min-h-[200px] relative overflow-hidden border border-[#D4CDB6]">
              <div className="flex flex-col gap-2">
                <div className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm text-sm text-neutral-800 max-w-[85%]">
                  Oi, vocês fazem limpeza de pele? Qual o valor?
                </div>
                <div className="self-end text-xs text-neutral-400 pr-1">08:02</div>
                <div
                  className="self-end rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm text-white max-w-[90%]"
                  style={{ backgroundColor: "#6C4FE8" }}
                >
                  Olá! Sim, fazemos! Nossa limpeza de pele profunda custa R$ 180. Posso te mostrar o que está incluso?
                </div>
                <div className="self-end text-xs text-neutral-400 pr-1">08:02 ✓✓</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Qualifica e filtra clientes</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Identifica quem tem real intenção de agendar, separa curiosos de clientes prontos e organiza tudo para
                você.
              </p>
            </div>
            {/* Visual: CRM mock */}
            <div className="mt-auto bg-gradient-to-br from-neutral-50 to-white rounded-xl overflow-hidden border border-neutral-100 shadow-inner min-h-[200px] p-4">
              <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                Fila de atendimento
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { initials: "AC", name: "Ana Carla", status: "Agendar Limpeza", badge: "Qualificada", badgeColor: "bg-green-100 text-green-700" },
                  { initials: "JP", name: "João P.", status: "Apenas curiosidade", badge: "Descartado", badgeColor: "bg-neutral-100 text-neutral-500" },
                  { initials: "MF", name: "Maria F.", status: "Botox Alta prioridade", badge: "Qualificada", badgeColor: "bg-green-100 text-green-700" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-neutral-100 shadow-sm">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                      style={{ backgroundColor: "#6C4FE8" }}
                    >
                      {item.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-neutral-800 truncate">{item.name}</div>
                      <div className="text-[9px] text-neutral-400 truncate">{item.status}</div>
                    </div>
                    <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Agenda automaticamente</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Preenche sua agenda com os horários disponíveis e envia confirmação para o cliente sem você fazer
                nada.
              </p>
            </div>
            {/* Visual: Calendar mock */}
            <div className="mt-auto bg-white rounded-xl border border-neutral-100 overflow-hidden shadow-sm min-h-[200px]">
              <div className="h-6 bg-neutral-100 border-b border-neutral-200 flex items-center px-3 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                <div className="w-2 h-2 rounded-full bg-green-400/50" />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-semibold text-neutral-500 mb-3 uppercase tracking-wider">Agenda de hoje</div>
                <div className="flex flex-col gap-2">
                  {[
                    { time: "09:00", name: "Limpeza de Pele com Ana C.", color: "#6C4FE8" },
                    { time: "10:30", name: "Micropigmentação com Lucia M.", color: "#6C4FE8" },
                    { time: "14:00", name: "Botox com Fernanda S.", color: "#6C4FE8" },
                    { time: "16:00", name: "Peeling com Carla R.", color: "#6C4FE8" },
                  ].map((slot) => (
                    <div key={slot.time} className="flex items-center gap-2 text-[10px]">
                      <span className="text-neutral-400 w-10 flex-shrink-0">{slot.time}</span>
                      <div
                        className="flex-1 rounded px-2 py-1 text-white font-medium"
                        style={{ backgroundColor: slot.color + "CC" }}
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
