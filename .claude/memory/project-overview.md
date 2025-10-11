# AgendaMed - Sistema de Agendamento de Medicamentos

## Contexto do Desenvolvedor
- **Nome**: Farmacêutico estudando Análise e Desenvolvimento de Sistemas
- **Parceira**: Larisse (Advogada estudando para concurso)
- **Objetivo**: Criar sistema profissional de agendamento

## Estado Atual do Projeto

### **Fase de Refatoração em Andamento** ✅
**Data Início**: 2025-10-11

#### Estrutura Atual
- ✅ **Backup criado**: `agendamed.backup.html` (versão monolítica preservada)
- ✅ **Estrutura de diretórios**: Criada e versionada
- 🔄 **Em andamento**: Extração de CSS e JS para módulos

#### Funcionalidades Implementadas (100% funcionais)
- ✅ Calendário interativo
- ✅ Sistema de agendamento
- ✅ Geração de token com QR Code (15min validade)
- ✅ Validação de agendamento único
- ✅ Sistema de notificações toast
- ✅ LocalStorage para persistência

### Arquitetura Nova (Em Implementação)
```
agendamed/
├── src/
│   ├── styles/components/     # CSS modular
│   ├── js/
│   │   ├── config/           # Constantes
│   │   ├── core/             # Estado + DOM
│   │   ├── services/         # Storage + API
│   │   ├── modules/          # Calendário, tokens, etc
│   │   ├── components/       # UI components
│   │   └── utils/            # Helpers
│   └── lib/                  # Libs locais
├── public/assets/            # Estáticos
├── tests/                    # Testes futuros
├── config/                   # Vite, Tailwind, ESLint
└── docs/                     # Documentação
```

## Próximos Passos (Roadmap Atualizado)

### Fase 1: Refatoração ✅ (Em Andamento)
1. ✅ Criar estrutura de diretórios
2. ✅ Backup do original
3. 🔄 Extrair CSS para módulos
4. 🔄 Modularizar JavaScript (ES6)
5. ⏳ Configurar Vite + Tailwind local
6. ⏳ Configurar ESLint + Prettier

### Fase 2: Backend (Próximo)
1. API REST (Express.js)
2. Banco SQLite → PostgreSQL
3. Autenticação JWT
4. Migrations e seeds

### Fase 3: Features Avançadas
1. PWA (offline-first)
2. Notificações push
3. Dashboard administrativo
4. Scanner QR Code

### Fase 4: Deploy & Compliance
1. LGPD compliance completo
2. Política de privacidade
3. Deploy Vercel + Railway
4. CI/CD GitHub Actions

## Restrições e Requisitos
- Mobile-first (maioria dos usuários em celular)
- Compliance LGPD (dados de saúde)
- Funcionar offline (PWA futuro)
- Baixo custo operacional
- Acessível para idosos

## Stack Tecnológica

### **Atual (Refatoração)**
- **Frontend**: HTML5 + Vanilla JS (ES6 Modules) + Tailwind CSS
- **Build**: Vite 5.x
- **Qualidade**: ESLint + Prettier
- **Versionamento**: Git

### **Futuro**
- **Backend**: Express.js + SQLite → PostgreSQL
- **Deploy**: Vercel (frontend) + Railway (backend)
- **Testes**: Jest + Playwright
- **CI/CD**: GitHub Actions

## Módulos Identificados (Código Original)

| Módulo | Linhas | Arquivo Destino |
|--------|--------|-----------------|
| State Management | 293-301 | `src/js/core/state.js` |
| DOM References | 304-333 | `src/js/core/dom.js` |
| Calendar | 466-539 | `src/js/modules/calendar.js` |
| Appointments | 364-400 | `src/js/modules/appointments.js` |
| Token Generator | 566-626 | `src/js/modules/token.js` |
| UI Controller | 437-464 | `src/js/components/ui-controller.js` |
| Notifications | 541-654 | `src/js/components/toast.js` |
| CSS Animations | 10-79 | `src/styles/animations.css` |

## Commits Importantes
- `bc8eecb` - Commit inicial
- `a17a381` - Estrutura de diretórios criada
- `ef5459c` - Backup do arquivo monolítico

## Notas de Desenvolvimento
- **Backup sempre preservado**: `agendamed.backup.html` não será deletado
- **Funcionalidades 100% mantidas**: Refatoração não quebra features
- **Modularização gradual**: CSS → JS → Config → Testes
- **Documentação contínua**: CLAUDE.md atualizado a cada fase
