# ============================================
# 3. DOCUMENTAR CONTEXTO INICIAL
# ============================================

# Criar arquivo de visão geral do projeto
cat > .claude/memory/project-overview.md << 'EOF'
# AgendaMed - Sistema de Agendamento de Medicamentos

## Contexto do Desenvolvedor
- **Nome**: Farmacêutico estudando Análise e Desenvolvimento de Sistemas
- **Parceira**: Larisse (Advogada estudando para concurso)
- **Objetivo**: Criar sistema profissional de agendamento

## Estado Atual do Projeto
- Arquivo único: agendamed.html (HTML monolítico)
- ~600 linhas de código (HTML + CSS + JS)
- Funcionalidades implementadas:
  ✅ Calendário interativo
  ✅ Sistema de agendamento
  ✅ Geração de token com QR Code
  ✅ Validação de agendamento único
  ✅ Sistema de notificações toast
  ✅ LocalStorage para persistência

## Próximos Passos
1. Modularizar código (separar HTML, CSS, JS)
2. Criar estrutura de projeto profissional
3. Adicionar backend com API REST
4. Implementar autenticação
5. Deploy em produção

## Restrições e Requisitos
- Mobile-first (maioria dos usuários em celular)
- Compliance LGPD (dados de saúde)
- Funcionar offline (PWA futuro)
- Baixo custo operacional
- Acessível para idosos

## Stack Tecnológica
- **Atual**: HTML + Vanilla JS + Tailwind CDN
- **Futuro**: 
  - Frontend: Módulos ES6 + Vite
  - Backend: Express.js + SQLite → PostgreSQL
  - Deploy: Vercel (frontend) + Railway (backend)
EOF

# Criar arquivo de decisões técnicas
cat > .claude/memory/technical-decisions.md << 'EOF'
# Decisões Técnicas - AgendaMed

## Por que começar com HTML monolítico?

**Data**: 2025-10-11
**Decisão**: Prototipar em arquivo único

**Razões**:
1. Validação rápida de conceito
2. Zero configuração de build
3. Fácil compartilhar e testar
4. DeepSeek gerou bem assim

**Próximo Passo**: Refatorar para projeto modular

---

## Por que Vanilla JS?

**Razões**:
1. Aprendizado dos fundamentos (importante para ADS)
2. Performance superior
3. Zero dependências inicialmente
4. Migração fácil para React depois se necessário

---

## Por que Tailwind CSS?

**Razões**:
1. Desenvolvimento rápido
2. Design responsivo fácil
3. Customização via classes
4. Usado via CDN (sem build inicial)

**Futuro**: Migrar para Tailwind compilado para produção
EOF

# Criar arquivo de conhecimento do domínio (farmácia)
cat > .claude/memory/domain-knowledge.md << 'EOF'
# Conhecimento do Domínio - Farmácia e Saúde Pública

## Contexto do Sistema de Saúde Brasileiro
- SUS (Sistema Único de Saúde)
- Farmácia Popular
- UBS (Unidades Básicas de Saúde)
- Programa de medicamentos gratuitos

## Fluxo Atual de Coleta (Problema)
1. Paciente vai à UBS sem agendamento
2. Pega senha e espera na fila (1-3 horas)
3. Apresenta receita e documentos
4. Recebe medicamentos
5. Assina comprovante de retirada

**Problemas**:
- Longas filas
- Desperdício de tempo do paciente
- Desorganização no atendimento
- Risco de falta de medicamento (sem previsão de demanda)

## Fluxo Proposto (Solução AgendaMed)
1. Paciente acessa sistema online
2. Agenda data/hora/local de coleta
3. Recebe confirmação
4. No dia, gera token de check-in
5. Apresenta token + documentos na UBS
6. Coleta sem fila (agendamento priorizado)

**Benefícios**:
- Redução de 70% no tempo de espera
- Melhor distribuição de demanda
- Planejamento de estoque
- Satisfação do usuário

## Tipos de Medicamentos
- Antibióticos (receita especial)
- Hipertensão (uso contínuo)
- Diabetes (insulina, etc)
- Anticoncepcional
- Vitaminas e suplementos

## Compliance e Regulamentação
- Lei 13.709/2018 (LGPD) - dados de saúde são sensíveis
- Anvisa - rastreabilidade de medicamentos
- CFM - prescrição médica obrigatória
- Receita médica válida por 30-120 dias (dependendo)

## Validações Necessárias
- CPF válido
- Receita médica dentro da validade
- Medicamento disponível na unidade
- Paciente cadastrado no sistema (SUS)
EOF