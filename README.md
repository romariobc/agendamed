# AgendaMed 💊

Sistema de agendamento de coleta de medicamentos com QR Code para o Sistema Único de Saúde (SUS).

## 📋 Sobre o Projeto

AgendaMed é uma aplicação web moderna que facilita o agendamento de coleta de medicamentos em unidades de saúde. O sistema gera tokens com QR Code para identificação rápida e segura dos agendamentos.

### Principais Funcionalidades

- 📅 **Calendário Interativo**: Seleção visual de datas disponíveis
- ⏰ **Horários Flexíveis**: Escolha entre manhã e tarde
- 🏥 **Múltiplas Unidades**: Suporte para várias UBS (Unidades Básicas de Saúde)
- 🎫 **Token com QR Code**: Geração automática de código de identificação
- ⏱️ **Countdown Timer**: Timer de 15 minutos com expiração automática
- 💾 **Persistência Local**: Dados salvos automaticamente no navegador
- 📱 **Responsivo**: Interface adaptável para desktop e mobile
- 🔔 **Notificações**: Alertas visuais com sistema de toast

## 🚀 Tecnologias

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 5.0
- **Icons**: Feather Icons
- **QR Code**: QRCode.js
- **Code Quality**: ESLint + Prettier

## 📦 Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/agendamed.git

# Entrar no diretório
cd agendamed

# Instalar dependências
npm install
```

## 💻 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Linting
npm run lint

# Formatação de código
npm run format
```

O servidor de desenvolvimento estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
agendamed/
├── src/
│   ├── index.html              # Arquivo HTML principal
│   ├── styles/
│   │   ├── main.css           # CSS principal (imports)
│   │   ├── base.css           # Variáveis e estilos base
│   │   ├── animations.css     # Animações
│   │   └── components/        # Componentes CSS
│   │       ├── buttons.css
│   │       ├── calendar.css
│   │       ├── modal.css
│   │       └── toast.css
│   └── js/
│       ├── main.js            # Entry point
│       ├── config/
│       │   └── constants.js   # Constantes e configurações
│       ├── core/
│       │   ├── state.js       # Gerenciamento de estado
│       │   └── dom.js         # Referências DOM
│       ├── services/
│       │   ├── storage.js     # LocalStorage abstraction
│       │   └── user.js        # Serviço de usuário
│       ├── utils/
│       │   ├── formatters.js  # Formatação de dados
│       │   └── events.js      # Centralização de eventos
│       ├── components/
│       │   ├── toast.js       # Notificações
│       │   └── ui-controller.js
│       └── modules/
│           ├── calendar.js    # Lógica do calendário
│           ├── appointments.js # CRUD de agendamentos
│           ├── token.js       # Geração de tokens
│           ├── notifications.js
│           └── modal.js
├── config/
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── docs/                      # Documentação
├── .claude/                   # Contexto para Claude Code
└── package.json
```

## 🎯 Fluxo de Uso

1. **Cadastro Inicial**: Usuário fornece nome e CPF
2. **Seleção de Data**: Escolha de dia disponível no calendário
3. **Escolha de Horário**: Manhã (8h-12h) ou Tarde (13h-17h)
4. **Seleção de Unidade**: Escolha da UBS mais próxima
5. **Geração de Token**: Sistema gera QR Code único
6. **Countdown**: Timer de 15 minutos para utilização
7. **Apresentação**: Usuário apresenta QR Code na unidade

## 🏥 Unidades de Saúde Disponíveis

- UBS Centro
- UBS Vila Nova
- UBS Jardim das Flores
- UBS Parque Industrial
- UBS São José

## 🔧 Configuração

### Variáveis CSS

```css
:root {
  --primary-color: #DC143C;     /* Crimson */
  --secondary-color: #FFD700;   /* Gold */
  --background-color: #F3F4F6;
  --text-color: #1F2937;
}
```

### Tailwind

Cores personalizadas configuradas em `tailwind.config.js`:
- Primary: Crimson (#DC143C)
- Secondary: Gold (#FFD700)

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com HMR |
| `npm run build` | Gera build otimizada para produção |
| `npm run preview` | Preview da build de produção |
| `npm run lint` | Executa ESLint nos arquivos JavaScript |
| `npm run format` | Formata código com Prettier |

## 🗺️ Roadmap

### Próximas Funcionalidades

- [ ] Backend API (Express.js + PostgreSQL)
- [ ] Autenticação JWT
- [ ] Painel administrativo
- [ ] Histórico de agendamentos
- [ ] Notificações push (PWA)
- [ ] Integração com sistemas SUS
- [ ] Suporte a múltiplos idiomas
- [ ] Exportação de relatórios
- [ ] Dashboard de métricas

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

Desenvolvido com ❤️ para o Sistema Único de Saúde (SUS)

## 📞 Suporte

Para suporte, abra uma issue no GitHub ou entre em contato através do email.

---

**Nota**: Este é um projeto em desenvolvimento ativo. Novas funcionalidades serão adicionadas regularmente.
