export default function HowItWorksContabil() {
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
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-900">
            Como a{" "}
            <span className="italic gradient-brand">Yollo IA</span>{" "}
            funciona
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            Do primeiro contato ao envio de documentos — tudo automático, sem o contador precisar intervir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Responde dúvidas fiscais</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                A IA atende clientes instantaneamente, responde perguntas sobre Simples Nacional, MEI, CNPJ,
                prazos de declaração e obrigações acessórias — a qualquer hora.
              </p>
            </div>
            {/* Visual: WhatsApp mock */}
            <div className="mt-auto bg-[#E4DDD6] rounded-xl p-3 min-h-[200px] relative overflow-hidden border border-[#D4CDB6]">
              <div className="flex flex-col gap-2">
                <div className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm text-sm text-neutral-800 max-w-[85%]">
                  Qual o prazo para enviar o Simples Nacional deste mês?
                </div>
                <div className="self-end text-xs text-neutral-400 pr-1">17:42</div>
                <div
                  className="self-end rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm text-sm text-white max-w-[90%]"
                  style={{ backgroundColor: "#6C4FE8" }}
                >
                  O vencimento do DAS do Simples Nacional é todo dia 20. Este mês é dia 20, uma segunda-feira. Precisa de ajuda para emitir a guia?
                </div>
                <div className="self-end text-xs text-neutral-400 pr-1">17:42 ✓✓</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Recolhe e organiza documentos</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Solicita extratos, notas fiscais e comprovantes diretamente pelo WhatsApp, organiza por cliente
                e notifica a equipe quando tudo estiver completo.
              </p>
            </div>
            {/* Visual: Document checklist mock */}
            <div className="mt-auto bg-gradient-to-br from-neutral-50 to-white rounded-xl overflow-hidden border border-neutral-100 shadow-inner min-h-[200px] p-4">
              <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                Documentos solicitados — Fernanda S.
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Extrato bancário — Fev", status: "Recebido", done: true },
                  { name: "Notas fiscais de entrada", status: "Recebido", done: true },
                  { name: "Folha de pagamento", status: "Aguardando", done: false },
                  { name: "Pro-labore do sócio", status: "Aguardando", done: false },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-neutral-100 shadow-sm">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? "bg-green-100" : "bg-neutral-100"}`}
                    >
                      {item.done ? (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-neutral-800 truncate">{item.name}</div>
                    </div>
                    <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${item.done ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Agenda reuniões automaticamente</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Verifica a disponibilidade do contador, confirma o horário da reunião e envia lembretes
                automáticos — sem nenhuma intervenção da equipe.
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
                <div className="text-[10px] font-semibold text-neutral-500 mb-3 uppercase tracking-wider">Reuniões de hoje</div>
                <div className="flex flex-col gap-2">
                  {[
                    { time: "09:00", name: "Revisão IR — Fernanda S." },
                    { time: "10:30", name: "Abertura CNPJ — Rafael M." },
                    { time: "14:00", name: "Consultoria MEI — Ana C." },
                    { time: "16:00", name: "Planej. tributário — Carlos P." },
                  ].map((slot) => (
                    <div key={slot.time} className="flex items-center gap-2 text-[10px]">
                      <span className="text-neutral-400 w-10 flex-shrink-0">{slot.time}</span>
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
