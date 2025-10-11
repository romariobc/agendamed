# ============================================
# 4. CRIAR .claudecommands ESPECÍFICO
# ============================================

cat > .claudecommands << 'EOF'
# COMANDOS CUSTOMIZADOS - AGENDAMED

# ============================================
# REFATORAÇÃO E ESTRUTURA
# ============================================

refactor-to-modules:
  description: "Refatorar HTML monolítico em projeto modular"
  prompt: |
    Refatore agendamed.html em estrutura profissional:
    
    📁 ESTRUTURA ALVO:
    agendamed/
    ├── src/
    │   ├── index.html (limpo, sem JS inline)
    │   ├── css/
    │   │   ├── main.css
    │   │   └── components.css
    │   ├── js/
    │   │   ├── app.js (entry point)
    │   │   ├── modules/
    │   │   │   ├── calendar.js
    │   │   │   ├── appointments.js
    │   │   │   ├── token.js
    │   │   │   ├── ui.js
    │   │   │   └── storage.js
    │   │   └── utils/
    │   │       ├── validators.js
    │   │       ├── formatters.js
    │   │       └── constants.js
    │   └── assets/
    │       └── images/
    ├── tests/
    ├── docs/
    └── package.json
    
    📋 TAREFAS:
    1. Extrair CSS inline para arquivos separados
    2. Modularizar JavaScript em ES6 modules
    3. Criar imports/exports corretos
    4. Manter funcionalidades 100% iguais
    5. Adicionar comentários JSDoc
    6. Atualizar package.json com scripts

setup-development:
  description: "Configurar ambiente de desenvolvimento"
  prompt: |
    Configure ambiente de desenvolvimento completo:
    
    1. Instalar e configurar Vite
    2. Configurar Hot Module Replacement (HMR)
    3. Configurar Tailwind CSS local
    4. Adicionar ESLint + Prettier
    5. Configurar scripts npm:
       - dev: servidor desenvolvimento
       - build: build produção
       - preview: preview do build
       - lint: verificar código
       - format: formatar código
    
    Gerar arquivo de configuração para cada ferramenta.

add-backend:
  description: "Adicionar backend Express.js completo"
  prompt: |
    Crie backend API REST para AgendaMed:
    
    📁 ESTRUTURA:
    server/
    ├── index.js
    ├── config/
    │   ├── database.js
    │   └── environment.js
    ├── routes/
    │   ├── appointments.js
    │   ├── tokens.js
    │   └── users.js
    ├── controllers/
    ├── models/
    ├── middleware/
    │   ├── auth.js
    │   ├── validation.js
    │   └── errorHandler.js
    └── utils/
    
    🔧 FUNCIONALIDADES:
    - CRUD de agendamentos
    - Geração/validação de tokens
    - Autenticação JWT
    - Rate limiting
    - Logging
    - Error handling
    
    💾 BANCO DE DADOS:
    - SQLite para desenvolvimento
    - Schema com migrations
    - Seeds para dados de teste

# ============================================
# FEATURES ESPECÍFICAS
# ============================================

add-user-auth:
  description: "Implementar sistema de autenticação"
  prompt: |
    Implemente autenticação completa:
    
    FRONTEND:
    - Tela de login (CPF + senha)
    - Tela de registro
    - Recuperação de senha
    - Persistência de sessão
    
    BACKEND:
    - JWT tokens
    - Bcrypt para senhas
    - Refresh tokens
    - Rate limiting (5 tentativas)
    
    SEGURANÇA:
    - Validação de CPF
    - Senha forte (8+ caracteres)
    - HTTPS obrigatório
    - CORS configurado

add-admin-dashboard:
  description: "Criar dashboard administrativo"
  prompt: |
    Crie dashboard para profissionais de saúde:
    
    FUNCIONALIDADES:
    - Lista de agendamentos do dia
    - Validação de tokens (QR Code scanner)
    - Marcar como "medicamento retirado"
    - Estatísticas e relatórios
    - Gerenciar unidades de saúde
    - Ver histórico de paciente
    
    VISUALIZAÇÕES:
    - Gráficos de demanda por horário
    - Medicamentos mais solicitados
    - Taxa de comparecimento
    - Tempo médio de atendimento

add-notifications:
  description: "Sistema de notificações"
  prompt: |
    Implemente notificações push:
    
    TIPOS:
    - Confirmação de agendamento (email/SMS)
    - Lembrete 24h antes
    - Lembrete 1h antes
    - Token gerado
    - Cancelamento
    
    CANAIS:
    - Web Push API (navegador)
    - Email (Nodemailer)
    - SMS (Twilio) - futuro
    - WhatsApp Business API - futuro

make-pwa:
  description: "Transformar em Progressive Web App"
  prompt: |
    Converta AgendaMed em PWA:
    
    1. Criar manifest.json
    2. Implementar Service Worker
    3. Estratégia de cache:
       - Cache-first para assets
       - Network-first para API
       - Offline fallback
    4. Ícones para todas plataformas
    5. Instalável (Add to Home Screen)
    6. Notificações push
    7. Sincronização em background

# ============================================
# QUALIDADE E TESTES
# ============================================

add-comprehensive-tests:
  description: "Criar suite completa de testes"
  prompt: |
    Implemente testes completos:
    
    UNITÁRIOS (Jest):
    - Todos os módulos JS
    - Funções puras
    - Validadores
    - Formatadores
    
    INTEGRAÇÃO (Jest + Supertest):
    - Rotas da API
    - Fluxos completos
    - Autenticação
    
    E2E (Playwright):
    - Jornada do usuário completa
    - Agendamento de ponta a ponta
    - Geração de token
    - Cancelamento
    
    COBERTURA: Mínimo 80%

security-audit:
  description: "Auditoria de segurança completa"
  prompt: |
    Faça auditoria de segurança:
    
    ✅ VERIFICAR:
    - SQL Injection prevenido
    - XSS prevenido
    - CSRF tokens implementados
    - Rate limiting configurado
    - Inputs sanitizados
    - Dados sensíveis criptografados
    - HTTPS forçado
    - Headers de segurança (Helmet.js)
    - Dependências sem vulnerabilidades
    - LGPD compliance
    
    📊 GERAR:
    - Relatório detalhado
    - Checklist de correções
    - Priorização (crítico/alto/médio/baixo)

# ============================================
# DOCUMENTAÇÃO
# ============================================

generate-full-docs:
  description: "Gerar documentação completa"
  prompt: |
    Crie documentação profissional:
    
    1. README.md completo:
       - Descrição do projeto
       - Screenshots
       - Instalação
       - Uso
       - Tecnologias
       - Roadmap
    
    2. docs/API.md:
       - Todos endpoints
       - Request/Response examples
       - Códigos de erro
       - Autenticação
    
    3. docs/ARCHITECTURE.md:
       - Diagrama de arquitetura
       - Fluxo de dados
       - Decisões técnicas
    
    4. docs/CONTRIBUTING.md:
       - Como contribuir
       - Code style
       - Pull request template
    
    5. JSDoc em todo código

# ============================================
# LGPD E COMPLIANCE (PARA LARISSE)
# ============================================

lgpd-compliance-check:
  description: "Verificar compliance LGPD"
  prompt: |
    Análise LGPD para AgendaMed:
    
    📋 DADOS TRATADOS:
    - Nome completo
    - CPF
    - Dados de agendamento
    - Medicamentos (dados de saúde - sensíveis!)
    
    ✅ VERIFICAR:
    1. Base legal para tratamento
    2. Consentimento explícito
    3. Finalidade específica
    4. Minimização de dados
    5. Transparência (política de privacidade)
    6. Direitos do titular implementados:
       - Acesso aos dados
       - Correção
       - Exclusão (direito ao esquecimento)
       - Portabilidade
    7. Segurança e sigilo
    8. Retenção adequada
    9. Encarregado de dados designado
    10. Registro de operações
    
    📊 ENTREGAR:
    - Relatório de compliance
    - Gaps identificados
    - Plano de ação
    - Template de política de privacidade

create-privacy-policy:
  description: "Gerar política de privacidade LGPD"
  prompt: |
    Crie Política de Privacidade em português jurídico:
    
    SEÇÕES:
    1. Definições
    2. Dados coletados
    3. Finalidade do tratamento
    4. Base legal (Art. 7º LGPD)
    5. Compartilhamento (unidades de saúde)
    6. Direitos do titular
    7. Segurança dos dados
    8. Cookies
    9. Retenção de dados
    10. Contato do encarregado
    11. Alterações na política
    12. Foro
    
    Linguagem: Clara mas juridicamente correta
    Formato: Markdown + HTML

# ============================================
# DEPLOY
# ============================================

prepare-production:
  description: "Preparar para deploy em produção"
  prompt: |
    Prepare AgendaMed para produção:
    
    ✅ FRONTEND (Vercel):
    - Build otimizado
    - Minificação
    - Tree shaking
    - Image optimization
    - Gzip/Brotli compression
    - Environment variables
    - Custom domain
    - Analytics
    
    ✅ BACKEND (Railway):
    - PostgreSQL setup
    - Migrations rodadas
    - Environment variables
    - Logging (Winston)
    - Monitoring (Sentry)
    - Backup automático
    - Health check endpoint
    
    ✅ CI/CD:
    - GitHub Actions
    - Testes automáticos
    - Deploy automático
    - Rollback strategy
    
    📋 GERAR:
    - Checklist de deploy
    - Scripts de deployment
    - Documentação de rollback
EOF