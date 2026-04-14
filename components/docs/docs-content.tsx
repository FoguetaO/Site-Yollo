import EndpointBadge from "./endpoint-badge"
import CodeBlock from "./code-block"

export default function DocsContent() {
  return (
    <main className="flex-1 min-w-0 px-6 lg:px-12 py-10 max-w-4xl">

      {/* ── Introdução ── */}
      <section id="introducao" className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
          style={{ backgroundColor: "#6C4FE812", color: "#4F39B0", border: "1px solid #6C4FE830" }}>
          API REST v1
        </div>
        <h1 className="text-3xl font-semibold text-neutral-900 mb-3 text-balance">
          API de Integração
        </h1>
        <p className="text-neutral-500 text-base leading-relaxed mb-8 max-w-2xl">
          API REST para integração com o sistema de CRM, WhatsApp e Agentes de IA. Permite automatizar operações
          de negociações, contatos, mensagens, relatórios e configurações.
        </p>

        {/* Base URL */}
        <div id="base-url" className="mb-8">
          <h2 className="text-lg font-semibold text-neutral-900 mb-3">Base URL</h2>
          <div className="flex items-center gap-3 bg-neutral-950 rounded-xl px-5 py-4 font-mono text-sm text-green-400">
            <span className="text-neutral-500 select-none">$</span>
            https://integracao.agendasistemacrm.com.br/api/v1
          </div>
        </div>

        {/* Autenticação */}
        <div id="autenticacao" className="mb-8">
          <h2 className="text-lg font-semibold text-neutral-900 mb-3">Autenticação</h2>
          <p className="text-neutral-500 text-sm leading-relaxed mb-4">
            Todas as requisições (exceto health check) requerem autenticação via API Key. Utilize um dos métodos abaixo:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-4">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Opção 1</p>
              <code className="text-sm font-mono text-neutral-700">
                Authorization: Bearer &lt;api_key&gt;
              </code>
            </div>
            <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-4">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Opção 2</p>
              <code className="text-sm font-mono text-neutral-700">
                X-API-Key: &lt;api_key&gt;
              </code>
            </div>
          </div>
        </div>

        {/* Rate Limits */}
        <div id="rate-limits" className="mb-8">
          <h2 className="text-lg font-semibold text-neutral-900 mb-3">Rate Limits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="rounded-xl border border-neutral-100 p-4 flex items-start gap-3">
              <span className="mt-0.5 px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-600">GET</span>
              <div>
                <p className="text-sm font-semibold text-neutral-800">Endpoints de leitura</p>
                <p className="text-sm text-neutral-500">60 requisições/min</p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-100 p-4 flex items-start gap-3">
              <span className="mt-0.5 px-2 py-0.5 rounded text-xs font-bold bg-green-50 text-green-600">POST</span>
              <div>
                <p className="text-sm font-semibold text-neutral-800">Endpoints de escrita</p>
                <p className="text-sm text-neutral-500">30 requisições/min</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mb-2">Headers retornados:</p>
          <div className="flex flex-wrap gap-2">
            {["X-RateLimit-Limit", "X-RateLimit-Remaining", "Retry-After"].map((h) => (
              <code key={h} className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-lg font-mono">{h}</code>
            ))}
          </div>
        </div>

        {/* Respostas */}
        <div id="respostas" className="mb-8">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Formato de Respostas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-green-600 mb-2">Sucesso</p>
              <CodeBlock code={`{
  "status": "success",
  "data": { ... },
  "meta": {
    "request_id": "uuid"
  }
}`} />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-500 mb-2">Erro</p>
              <CodeBlock code={`{
  "status": "error",
  "error": {
    "code": "ERROR_CODE",
    "message": "Descrição do erro",
    "details": [ "..." ]
  },
  "meta": {
    "request_id": "uuid"
  }
}`} />
            </div>
          </div>
        </div>

        {/* Códigos de Erro */}
        <div id="erros" className="mb-8">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Códigos de Erro</h2>
          <div className="rounded-xl border border-neutral-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 border-b border-neutral-100">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">HTTP</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Código</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Descrição</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {[
                  { http: "401", code: "UNAUTHORIZED", desc: "API key inválida ou ausente" },
                  { http: "403", code: "FORBIDDEN", desc: "Conta inativa ou permissão insuficiente" },
                  { http: "404", code: "NOT_FOUND", desc: "Recurso não encontrado" },
                  { http: "400", code: "VALIDATION_ERROR", desc: "Dados inválidos na requisição" },
                  { http: "429", code: "RATE_LIMIT_EXCEEDED", desc: "Limite de requisições excedido" },
                  { http: "500", code: "INTERNAL_ERROR", desc: "Erro interno do servidor" },
                ].map((row) => (
                  <tr key={row.code} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-neutral-500">{row.http}</td>
                    <td className="px-4 py-3">
                      <code className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded font-mono">{row.code}</code>
                    </td>
                    <td className="px-4 py-3 text-neutral-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Segurança */}
        <div id="seguranca">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Segurança</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "🔒", title: "Isolamento de tenant", desc: "Um cliente jamais acessa dados de outro" },
              { icon: "⏱", title: "Rate limiting", desc: "Por API key com bloqueio de 60s ao exceder" },
              { icon: "📋", title: "Audit logging", desc: "Toda requisição registrada com request_id" },
              { icon: "🌐", title: "CORS restritivo", desc: "API server-to-server" },
              { icon: "📦", title: "Payload limit", desc: "1MB por requisição" },
              { icon: "🛡", title: "Headers de segurança", desc: "Via Helmet" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-xl border border-neutral-100 p-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                  style={{ backgroundColor: "#6C4FE812" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C4FE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-800">{item.title}</p>
                  <p className="text-sm text-neutral-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Relatórios ── */}
      <section id="relatorios" className="mb-16">
        <SectionHeader
          tag="/relatorio"
          count={15}
          title="Relatórios"
          desc="Relatórios de CRM, ações, follow-ups, notificações e Facebook CAPI com filtros por período."
        />

        <SubSection id="relatorio-crm" title="Relatórios Gerais">
          <EndpointBadge method="GET" path="/relatorio/crm" desc="Relatório geral do CRM" />
          <EndpointBadge method="GET" path="/relatorio/gerais" desc="Relatórios gerais por funil" />
        </SubSection>

        <SubSection id="relatorio-acoes" title="Relatório de Ações">
          <EndpointBadge method="GET" path="/relatorio/acoes" desc="Relatório de ações" />
          <EndpointBadge method="GET" path="/relatorio/acoes/stats" desc="Estatísticas de ações" />
        </SubSection>

        <SubSection id="relatorio-followups" title="Follow-ups">
          <EndpointBadge method="GET" path="/relatorio/followup" desc="Relatório de follow-ups" />
          <EndpointBadge method="GET" path="/relatorio/followup/stats" desc="Estatísticas de follow-ups" />
          <EndpointBadge method="GET" path="/relatorio/followup/historico" desc="Histórico de follow-ups" />
          <EndpointBadge method="GET" path="/relatorio/followup/negociacao/:id" desc="Follow-ups de uma negociação" />
          <EndpointBadge method="POST" path="/relatorio/followup" desc="Criar follow-up" />
          <EndpointBadge method="PUT" path="/relatorio/followup/:id" desc="Atualizar follow-up" />
          <EndpointBadge method="DELETE" path="/relatorio/followup/:id" desc="Excluir follow-up" />
        </SubSection>

        <SubSection id="relatorio-notificacoes" title="Notificações">
          <EndpointBadge method="GET" path="/relatorio/notificacoes" desc="Relatório de notificações" />
          <EndpointBadge method="GET" path="/relatorio/notificacoes/stats" desc="Estatísticas de notificações" />
        </SubSection>

        <SubSection id="relatorio-facebook" title="Facebook CAPI">
          <EndpointBadge method="GET" path="/relatorio/facebook-capi" desc="Relatório Facebook CAPI" />
          <EndpointBadge method="GET" path="/relatorio/facebook-capi/stats" desc="Estatísticas Facebook CAPI" />
        </SubSection>
      </section>

      <Divider />

      {/* ── Chat ── */}
      <section id="chat" className="mb-16">
        <SectionHeader
          tag="/chat"
          count={9}
          title="Chat"
          desc="Inbox de conversas, mensagens, contexto de chat, envio de mensagens de texto e mídia e configurações de conversas."
        />

        <SubSection id="chat-conversas" title="Conversas">
          <EndpointBadge method="GET" path="/chat/list" desc="Listar conversas (Inbox)" />
          <EndpointBadge method="GET" path="/chat/contato/:id_contato" desc="Obter chat por contato" />
          <EndpointBadge method="GET" path="/chat/contato/:id_contato/mensagens" desc="Mensagens de um contato" />
          <EndpointBadge method="GET" path="/chat/mensagens" desc="Buscar mensagens (read-only)" />
          <EndpointBadge method="GET" path="/chat/context/v2" desc="Obter contexto do chat V2" />
          <EndpointBadge method="GET" path="/chat/config/conversas" desc="Obter config de conversas" />
          <EndpointBadge method="PUT" path="/chat/config/conversas" desc="Atualizar config de conversas" />
        </SubSection>

        <SubSection id="chat-envio" title="Envio de Mensagens">
          <EndpointBadge method="POST" path="/whatsapp/mensagem/texto" desc="Enviar mensagem de texto" />
          <div className="mt-2 ml-0">
            <p className="text-sm text-neutral-500 mb-3">
              Envia uma mensagem de texto via WhatsApp. A API detecta automaticamente o tipo da conexão
              <code className="mx-1 text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">v2</code>,
              <code className="mx-1 text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">v1</code> ou
              <code className="mx-1 text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">API-OFICIAL</code>
              a partir do <code className="mx-1 text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">id_whatsapp</code>.
            </p>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mb-4 text-sm text-amber-800">
              Limitação <code className="text-xs bg-amber-100 px-1 rounded font-mono">API-OFICIAL</code>: mensagens fora da janela de 24h
              só podem ser enviadas como template pré-aprovado pela Meta.
            </div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Request Body</p>
            <FieldTable fields={[
              { name: "id_whatsapp", type: "number", required: true, desc: "ID da conexão WhatsApp (v2, v1 ou API-OFICIAL)" },
              { name: "number", type: "string", required: true, desc: "Número do destinatário (ex: 55119999999999)" },
              { name: "text", type: "string", required: true, desc: "Texto da mensagem" },
              { name: "replyId", type: "string", required: false, desc: "ID da mensagem para responder (reply)" },
            ]} />
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-4 mb-3">Exemplo de Request</p>
            <CodeBlock code={`{
  "id_whatsapp": 16279,
  "number": "5511999999999",
  "text": "Olá! Sua proposta foi aprovada."
}`} />
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-4 mb-3">Exemplo de Response</p>
            <CodeBlock code={`{
  "status": "success",
  "data": {
    "messageId": "BAE5F2C3A4B6D8E0",
    "sent": true
  },
  "meta": {
    "request_id": "550e8400-e29b-41d4-a716-446655440000"
  }
}`} />
          </div>
          <EndpointBadge method="POST" path="/whatsapp/mensagem/midia" desc="Enviar mídia via URL" />
        </SubSection>
      </section>

      <Divider />

      {/* ── Agente ── */}
      <section id="agente" className="mb-16">
        <SectionHeader tag="/multi-agente" count={28} title="Agente"
          desc="Gerenciamento de agentes de IA, suas configurações, etapas, FAQ, funcionamento, agendamento, funções e gatilhos." />

        <SubSection id="agente-lista" title="Agentes">
          <EndpointBadge method="GET" path="/multi-agente/agentes" desc="Listar agentes" />
        </SubSection>

        <SubSection id="agente-regras" title="Regras">
          <EndpointBadge method="GET" path="/multi-agente/agentes/:id_agente/regras" desc="Obter regras do agente" />
          <EndpointBadge method="PUT" path="/multi-agente/agentes/:id_agente/regras" desc="Criar/atualizar regras" />
          <EndpointBadge method="DELETE" path="/multi-agente/agentes/:id_agente/regras" desc="Excluir regras" />
        </SubSection>

        <SubSection id="agente-etapas" title="Etapas">
          <EndpointBadge method="GET" path="/multi-agente/agentes/:id_agente/etapas" desc="Obter etapas do agente" />
          <EndpointBadge method="POST" path="/multi-agente/agentes/:id_agente/etapas" desc="Criar etapa" />
          <EndpointBadge method="PUT" path="/multi-agente/etapas/:id" desc="Atualizar etapa" />
          <EndpointBadge method="DELETE" path="/multi-agente/etapas/:id" desc="Excluir etapa" />
        </SubSection>

        <SubSection id="agente-faq" title="FAQ">
          <EndpointBadge method="GET" path="/multi-agente/agentes/:id_agente/faq" desc="Obter FAQ do agente" />
          <EndpointBadge method="POST" path="/multi-agente/agentes/:id_agente/faq" desc="Criar FAQ" />
          <EndpointBadge method="PUT" path="/multi-agente/faq/:id" desc="Atualizar FAQ" />
          <EndpointBadge method="DELETE" path="/multi-agente/faq/:id" desc="Excluir FAQ" />
        </SubSection>

        <SubSection id="agente-funcionamento" title="Funcionamento">
          <EndpointBadge method="GET" path="/multi-agente/agentes/:id_agente/funcionamento" desc="Obter horário de funcionamento" />
          <EndpointBadge method="PUT" path="/multi-agente/agentes/:id_agente/funcionamento" desc="Criar/atualizar funcionamento" />
          <EndpointBadge method="DELETE" path="/multi-agente/agentes/:id_agente/funcionamento" desc="Excluir funcionamento" />
        </SubSection>

        <SubSection id="agente-agendamento" title="Agendamento">
          <EndpointBadge method="GET" path="/multi-agente/agentes/:id_agente/agendamento" desc="Obter configuração de agendamento" />
          <EndpointBadge method="PUT" path="/multi-agente/agentes/:id_agente/agendamento" desc="Criar/atualizar agendamento" />
          <EndpointBadge method="DELETE" path="/multi-agente/agentes/:id_agente/agendamento" desc="Excluir agendamento" />
        </SubSection>

        <SubSection id="agente-funcoes" title="Funções">
          <EndpointBadge method="GET" path="/multi-agente/agentes/:id_agente/funcoes" desc="Obter funções do agente" />
          <EndpointBadge method="POST" path="/multi-agente/agentes/:id_agente/funcoes" desc="Criar função" />
          <EndpointBadge method="PUT" path="/multi-agente/funcoes/:id" desc="Atualizar função" />
          <EndpointBadge method="DELETE" path="/multi-agente/funcoes/:id" desc="Excluir função" />
        </SubSection>

        <SubSection id="agente-gatilhos" title="Gatilhos">
          <EndpointBadge method="GET" path="/multi-agente/agentes/:id_agente/gatilhos" desc="Listar gatilhos do agente" />
          <EndpointBadge method="POST" path="/multi-agente/agentes/:id_agente/gatilhos" desc="Criar gatilho" />
          <EndpointBadge method="PUT" path="/multi-agente/agentes/:id_agente/gatilhos/save" desc="Salvar gatilhos em massa" />
          <EndpointBadge method="PUT" path="/multi-agente/agentes/:id_agente/gatilhos/toggle" desc="Alternar status dos gatilhos" />
          <EndpointBadge method="PUT" path="/multi-agente/gatilhos/:id" desc="Atualizar gatilho" />
          <EndpointBadge method="DELETE" path="/multi-agente/gatilhos/:id" desc="Excluir gatilho" />
        </SubSection>
      </section>

      <Divider />

      {/* ── CRM ── */}
      <section id="crm" className="mb-16">
        <SectionHeader tag="/crm" count={73} title="CRM"
          desc="Operações de CRM incluindo funis, negociações, contatos, tags, ações, automações, conversão e mensagens agendadas." />

        <SubSection id="crm-funil" title="Funil">
          <EndpointBadge method="GET" path="/crm/funil" desc="Obter funil de vendas" />
          <EndpointBadge method="GET" path="/crm/funil/:id" desc="Obter funil por ID" />
          <EndpointBadge method="POST" path="/crm/funil" desc="Criar funil" />
          <EndpointBadge method="PUT" path="/crm/funil/:id" desc="Atualizar funil" />
          <EndpointBadge method="GET" path="/crm/estagios/:id" desc="Obter estágio por ID" />
        </SubSection>

        <SubSection id="crm-negociacoes" title="Negociações">
          <EndpointBadge method="GET" path="/crm/negociacoes" desc="Listar negociações" />
          <EndpointBadge method="GET" path="/crm/negociacoes/orfas" desc="Listar negociações órfãs" />
          <EndpointBadge method="GET" path="/crm/negociacoes/proxima-acao" desc="Negociações com próxima ação" />
          <EndpointBadge method="GET" path="/crm/negociacoes/:id" desc="Obter negociação por ID" />
          <EndpointBadge method="POST" path="/crm/negociacoes" desc="Criar negociação" />
          <EndpointBadge method="PUT" path="/crm/negociacoes/:id" desc="Atualizar negociação" />
          <EndpointBadge method="DELETE" path="/crm/negociacoes/:id" desc="Excluir negociação" />
          <EndpointBadge method="PUT" path="/crm/negociacoes/estagio" desc="Atualizar estágio da negociação" />
          <EndpointBadge method="PUT" path="/crm/negociacoes/funil-estagio" desc="Atualizar funil e estágio" />
          <EndpointBadge method="PUT" path="/crm/negociacoes/score" desc="Atualizar score da negociação" />
          <EndpointBadge method="PUT" path="/crm/negociacoes/proxima-acao" desc="Atualizar próxima ação" />
          <EndpointBadge method="PUT" path="/crm/negociacoes/valores" desc="Atualizar valores da negociação" />
          <EndpointBadge method="PUT" path="/crm/negociacoes/extras" desc="Atualizar campos extras" />
          <EndpointBadge method="PUT" path="/crm/negociacoes/departamento" desc="Atualizar departamento da negociação" />
          <EndpointBadge method="GET" path="/crm/deal-context" desc="Obter contexto completo do deal" />
        </SubSection>

        <SubSection id="crm-contatos" title="Contatos">
          <EndpointBadge method="GET" path="/crm/contatos" desc="Listar contatos" />
          <EndpointBadge method="POST" path="/crm/contatos" desc="Criar contato" />
          <EndpointBadge method="GET" path="/crm/contatos/by-remote-jid" desc="Buscar contato por Remote JID" />
          <EndpointBadge method="GET" path="/crm/contatos/by-usuario/:id_usuario" desc="Contatos por usuário" />
          <EndpointBadge method="GET" path="/crm/contatos/by-departamento/:id_departamento" desc="Contatos por departamento" />
          <EndpointBadge method="GET" path="/crm/contatos/usuarios-com-contatos" desc="Usuários com contatos" />
          <EndpointBadge method="GET" path="/crm/contatos/departamentos-com-contatos" desc="Departamentos com contatos" />
          <EndpointBadge method="GET" path="/crm/contatos/:id" desc="Obter contato por ID" />
          <EndpointBadge method="PUT" path="/crm/contatos/:id" desc="Atualizar contato" />
          <EndpointBadge method="POST" path="/crm/contatos/find-deals" desc="Buscar deals por contato" />
        </SubSection>

        <SubSection id="crm-fontes" title="Fontes e Anúncios">
          <EndpointBadge method="GET" path="/crm/fontes" desc="Listar fontes de lead" />
          <EndpointBadge method="GET" path="/crm/anuncios" desc="Listar anúncios" />
        </SubSection>

        <SubSection id="crm-tags" title="Tags">
          <EndpointBadge method="GET" path="/crm/tags" desc="Listar tags" />
          <EndpointBadge method="GET" path="/crm/tags/by-negociacao" desc="Tags de uma negociação" />
          <EndpointBadge method="POST" path="/crm/tags" desc="Adicionar tag à negociação" />
          <EndpointBadge method="DELETE" path="/crm/tags" desc="Remover tag da negociação" />
        </SubSection>

        <SubSection id="crm-acoes" title="Ações">
          <EndpointBadge method="GET" path="/crm/acoes/modelos" desc="Listar modelos de ação" />
          <EndpointBadge method="GET" path="/crm/acoes/modelos/:id" desc="Obter modelo de ação por ID" />
          <EndpointBadge method="POST" path="/crm/acoes/modelos" desc="Criar modelo de ação" />
          <EndpointBadge method="PUT" path="/crm/acoes/modelos/:id" desc="Atualizar modelo de ação" />
          <EndpointBadge method="DELETE" path="/crm/acoes/modelos/:id" desc="Excluir modelo de ação" />
          <EndpointBadge method="GET" path="/crm/acoes" desc="Listar ações" />
          <EndpointBadge method="GET" path="/crm/acoes/negociacao/:id_negociacao" desc="Ações de uma negociação" />
          <EndpointBadge method="POST" path="/crm/acoes" desc="Criar ação" />
          <EndpointBadge method="PUT" path="/crm/acoes/:id" desc="Atualizar ação" />
        </SubSection>

        <SubSection id="crm-conversao" title="Conversão">
          <EndpointBadge method="GET" path="/crm/conversao/marcadores" desc="Listar marcadores de conversão" />
          <EndpointBadge method="GET" path="/crm/conversao/marcadores/:id" desc="Obter marcador por ID" />
          <EndpointBadge method="POST" path="/crm/conversao/marcadores" desc="Criar marcador de conversão" />
          <EndpointBadge method="PUT" path="/crm/conversao/marcadores/:id" desc="Atualizar marcador" />
          <EndpointBadge method="PUT" path="/crm/conversao/marcadores/:id/toggle" desc="Ativar/desativar marcador" />
          <EndpointBadge method="DELETE" path="/crm/conversao/marcadores/:id" desc="Excluir marcador" />
          <EndpointBadge method="GET" path="/crm/conversao/regras" desc="Listar regras de conversão" />
          <EndpointBadge method="GET" path="/crm/conversao/regras/:id" desc="Obter regra por ID" />
          <EndpointBadge method="POST" path="/crm/conversao/regras" desc="Criar regra de conversão" />
          <EndpointBadge method="PUT" path="/crm/conversao/regras/:id" desc="Atualizar regra de conversão" />
          <EndpointBadge method="PUT" path="/crm/conversao/regras/:id/toggle" desc="Ativar/desativar regra" />
          <EndpointBadge method="DELETE" path="/crm/conversao/regras/:id" desc="Excluir regra de conversão" />
        </SubSection>

        <SubSection id="crm-automacoes" title="Automações">
          <EndpointBadge method="GET" path="/crm/automacoes" desc="Listar automações" />
          <EndpointBadge method="GET" path="/crm/automacoes/:id" desc="Obter automação por ID" />
          <EndpointBadge method="POST" path="/crm/automacoes" desc="Criar automação" />
          <EndpointBadge method="PUT" path="/crm/automacoes/:id" desc="Atualizar automação" />
          <EndpointBadge method="PUT" path="/crm/automacoes/:id/toggle" desc="Ativar/desativar automação" />
          <EndpointBadge method="DELETE" path="/crm/automacoes/:id" desc="Excluir automação" />
        </SubSection>

        <SubSection id="crm-mensagens" title="Mensagens Agendadas">
          <EndpointBadge method="GET" path="/crm/mensagens-agendadas/modelos" desc="Listar modelos de mensagem" />
          <EndpointBadge method="GET" path="/crm/mensagens-agendadas/modelos/:id" desc="Obter modelo por ID" />
          <EndpointBadge method="POST" path="/crm/mensagens-agendadas/modelos" desc="Criar modelo de mensagem" />
          <EndpointBadge method="PUT" path="/crm/mensagens-agendadas/modelos/:id" desc="Atualizar modelo de mensagem" />
          <EndpointBadge method="DELETE" path="/crm/mensagens-agendadas/modelos/:id" desc="Excluir modelo de mensagem" />
          <EndpointBadge method="GET" path="/crm/mensagens-agendadas" desc="Listar mensagens agendadas" />
          <EndpointBadge method="GET" path="/crm/mensagens-agendadas/:id" desc="Obter mensagem agendada por ID" />
          <EndpointBadge method="POST" path="/crm/mensagens-agendadas" desc="Criar mensagem agendada" />
          <EndpointBadge method="PUT" path="/crm/mensagens-agendadas/:id" desc="Atualizar mensagem agendada" />
          <EndpointBadge method="DELETE" path="/crm/mensagens-agendadas/:id" desc="Cancelar mensagem agendada" />
        </SubSection>
      </section>

      <Divider />

      {/* ── Usuários ── */}
      <section id="usuarios" className="mb-16">
        <SectionHeader tag="/usuarios" count={1} title="Usuários"
          desc="Listagem de usuários ativos do cliente autenticado." />
        <EndpointBadge method="GET" path="/usuarios" desc="Listar usuários" />
      </section>

      <Divider />

      {/* ── WhatsApp ── */}
      <section id="whatsapp" className="mb-16">
        <SectionHeader tag="/whatsapp" count={2} title="WhatsApp"
          desc="Gerenciamento de conexões WhatsApp configuradas no sistema." />
        <SubSection id="whatsapp-conexoes" title="Conexões">
          <EndpointBadge method="GET" path="/whatsapp/conexoes" desc="Listar conexões WhatsApp" />
          <EndpointBadge method="GET" path="/whatsapp/conexoes/:id" desc="Obter conexão por ID" />
        </SubSection>
      </section>

      <Divider />

      {/* ── Departamentos ── */}
      <section id="departamentos" className="mb-16">
        <SectionHeader tag="/departamentos" count={9} title="Departamentos"
          desc="CRUD de departamentos e gerenciamento de usuários dentro de cada departamento." />

        <SubSection id="departamentos-crud" title="Departamentos">
          <EndpointBadge method="GET" path="/departamentos" desc="Listar departamentos" />
          <EndpointBadge method="GET" path="/departamentos/:id" desc="Obter departamento por ID" />
          <EndpointBadge method="POST" path="/departamentos" desc="Criar departamento" />
          <EndpointBadge method="PUT" path="/departamentos/:id" desc="Atualizar departamento" />
          <EndpointBadge method="DELETE" path="/departamentos/:id" desc="Excluir departamento" />
        </SubSection>

        <SubSection id="departamentos-usuarios" title="Usuários do Departamento">
          <EndpointBadge method="GET" path="/departamentos/:id/usuarios/disponiveis" desc="Usuários disponíveis" />
          <EndpointBadge method="POST" path="/departamentos/:id/usuarios" desc="Adicionar usuário ao departamento" />
          <EndpointBadge method="PUT" path="/departamentos/:id/usuarios/:id_usuario" desc="Atualizar usuário no departamento" />
          <EndpointBadge method="DELETE" path="/departamentos/:id/usuarios/:id_usuario" desc="Remover usuário do departamento" />
        </SubSection>
      </section>

      <Divider />

      {/* ── Sessões de IA ── */}
      <section id="sessoes" className="mb-16">
        <SectionHeader tag="/sessoes" count={14} title="Sessões de IA"
          desc="Gerenciamento de sessões ativas do agente de IA, exclusões temporárias e permanentes." />

        <SubSection id="sessoes-consulta" title="Consulta">
          <EndpointBadge method="GET" path="/sessoes" desc="Listar sessões ativas" />
          <EndpointBadge method="GET" path="/sessoes/exclusoes" desc="Listar exclusões temporárias" />
          <EndpointBadge method="GET" path="/sessoes/exclusoes-permanentes" desc="Listar exclusões permanentes" />
          <EndpointBadge method="GET" path="/sessoes/all" desc="Obter todos os dados consolidados" />
          <EndpointBadge method="GET" path="/sessoes/by-remote-jid" desc="Buscar sessão por Remote JID" />
          <EndpointBadge method="GET" path="/sessoes/exclusoes/by-remote-jid" desc="Buscar exclusão temporária por JID" />
          <EndpointBadge method="GET" path="/sessoes/exclusoes-permanentes/by-remote-jid" desc="Buscar exclusão permanente por JID" />
        </SubSection>

        <SubSection id="sessoes-gerenciamento" title="Gerenciamento">
          <EndpointBadge method="POST" path="/sessoes/by-contact" desc="Buscar sessão por contato" />
          <EndpointBadge method="DELETE" path="/sessoes/:id" desc="Excluir sessão por ID" />
          <EndpointBadge method="DELETE" path="/sessoes/exclusoes/:id" desc="Excluir exclusão temporária" />
          <EndpointBadge method="DELETE" path="/sessoes/exclusoes-permanentes/:id" desc="Excluir exclusão permanente" />
          <EndpointBadge method="POST" path="/sessoes/delete-by-remote-jid" desc="Excluir por Remote JID" />
          <EndpointBadge method="POST" path="/sessoes/exclusoes-permanentes/import" desc="Importar exclusões permanentes em massa" />
          <EndpointBadge method="POST" path="/sessoes/bulk-delete" desc="Excluir sessões em massa" />
        </SubSection>
      </section>

      <Divider />

      {/* ── Config do Agente ── */}
      <section id="agent-config" className="mb-16">
        <SectionHeader tag="/agent-config" count={9} title="Configurações do Agente"
          desc="Gerenciamento das configurações do agente de IA, chaves de API externas (OpenAI, ElevenLabs) e vozes." />

        <SubSection id="config-geral" title="Configuração Geral">
          <EndpointBadge method="GET" path="/agent-config" desc="Obter configuração do agente" />
          <EndpointBadge method="PUT" path="/agent-config" desc="Salvar configuração do agente" />
          <EndpointBadge method="GET" path="/agent-config/negociacao" desc="Obter config de negociação" />
        </SubSection>

        <SubSection id="config-chaves" title="Chaves de API">
          <EndpointBadge method="DELETE" path="/agent-config/openai-key" desc="Remover chave OpenAI" />
          <EndpointBadge method="DELETE" path="/agent-config/elevenlabs-key" desc="Remover chave ElevenLabs" />
          <EndpointBadge method="POST" path="/agent-config/openai-key/validate" desc="Validar chave OpenAI" />
          <EndpointBadge method="POST" path="/agent-config/elevenlabs-key/validate" desc="Validar chave ElevenLabs" />
        </SubSection>

        <SubSection id="config-vozes" title="Vozes ElevenLabs">
          <EndpointBadge method="GET" path="/agent-config/elevenlabs/voices" desc="Listar vozes ElevenLabs" />
          <EndpointBadge method="POST" path="/agent-config/elevenlabs/voices/:voice_id/preview" desc="Pré-visualizar voz ElevenLabs" />
        </SubSection>
      </section>

    </main>
  )
}

// ── Helpers ──

function Divider() {
  return <hr className="border-neutral-100 mb-16" />
}

function SectionHeader({
  tag, count, title, desc,
}: {
  tag: string; count: number; title: string; desc: string
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <code className="text-sm font-mono font-semibold" style={{ color: "#6C4FE8" }}>{tag}</code>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-neutral-500 bg-neutral-100">
          {count} endpoints
        </span>
      </div>
      <h2 className="text-2xl font-semibold text-neutral-900 mb-2">{title}</h2>
      <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">{desc}</p>
    </div>
  )
}

function SubSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mb-8">
      <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

function FieldTable({ fields }: {
  fields: { name: string; type: string; required: boolean; desc: string }[]
}) {
  return (
    <div className="rounded-xl border border-neutral-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-neutral-50 border-b border-neutral-100">
          <tr>
            <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Nome</th>
            <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Tipo</th>
            <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Obrigatório</th>
            <th className="text-left px-4 py-2.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Descrição</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {fields.map((f) => (
            <tr key={f.name} className="hover:bg-neutral-50/50">
              <td className="px-4 py-3">
                <code className="text-xs font-mono font-semibold" style={{ color: "#6C4FE8" }}>{f.name}</code>
              </td>
              <td className="px-4 py-3">
                <code className="text-xs font-mono text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded">{f.type}</code>
              </td>
              <td className="px-4 py-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${f.required ? "bg-orange-50 text-orange-600" : "bg-neutral-100 text-neutral-400"}`}>
                  {f.required ? "sim" : "não"}
                </span>
              </td>
              <td className="px-4 py-3 text-neutral-600 text-sm">{f.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
