# 🔄 Plano de Refatoração - AgendaMed

## 📋 Status Geral

**Fase Atual**: Fase 1 - Preparação ✅ **COMPLETA**
**Próxima Fase**: Fase 2 - Extração de CSS
**Progresso Total**: 20% (2/10 etapas)

---

## ✅ Fase 1: Preparação (COMPLETA)

### Etapa 1: Estrutura de Diretórios ✅
```bash
✅ src/styles/components/
✅ src/js/{config,core,services,modules,components,utils}/
✅ src/lib/
✅ public/assets/images/
✅ tests/{unit,integration,e2e}/
✅ config/
✅ docs/
```

### Etapa 2: Backup e Versionamento ✅
```bash
✅ agendamed.backup.html criado
✅ .gitignore configurado
✅ Commits realizados:
   - a17a381: Estrutura de diretórios
   - ef5459c: Backup versionado
```

---

## 🔄 Fase 2: Extração (PRÓXIMA)

### Etapa 3: Extrair CSS
**Origem**: agendamed.html (linhas 10-79)
**Destino**: src/styles/

#### Arquivos a criar:
1. **src/styles/base.css**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   :root {
     --color-primary: #DC143C;
     --color-secondary: #FFD700;
   }
   ```

2. **src/styles/components/calendar.css**
   - `.calendar-day` e variações
   - Estados: hover, selected, disabled, today

3. **src/styles/components/modal.css**
   - `.modal-overlay`
   - `.modal-content`
   - Animações de modal

4. **src/styles/components/toast.css**
   - `.toast`
   - Animações slideIn/fadeOut

5. **src/styles/components/buttons.css**
   - `.expandable-content`
   - Estados de botões

6. **src/styles/animations.css**
   - Todos @keyframes
   - Animações CSS

7. **src/styles/main.css**
   ```css
   @import './base.css';
   @import './components/calendar.css';
   @import './components/modal.css';
   @import './components/toast.css';
   @import './components/buttons.css';
   @import './animations.css';
   ```

### Etapa 4: Extrair JavaScript
**Origem**: agendamed.html (linhas 287-659)
**Destino**: src/js/

#### Arquivos a criar (15 módulos):

**1. config/constants.js**
```javascript
export const HEALTH_UNITS = [
  'UBS Central',
  'Posto de Saúde Norte',
  'Hospital Municipal Sul',
  'Farmácia Popular Oeste',
  'Centro de Saúde Leste'
];

export const TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00',
  '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30', '17:00'
];

export const TOKEN_DURATION = 15 * 60; // 15 minutos em segundos
export const TOKEN_LENGTH = 6;
```

**2. core/state.js** (linhas 293-301)
```javascript
export const state = {
  currentDate: new Date(),
  selectedDate: null,
  appointment: null,
  activeButton: null,
  tokenInterval: null,
  tokenExpired: false,
  currentToken: null
};

export function initState() {
  const saved = localStorage.getItem('appointment');
  state.appointment = saved ? JSON.parse(saved) : null;
}
```

**3. core/dom.js** (linhas 304-333)
```javascript
export const dom = {};

export function initDOMReferences() {
  dom.scheduleBtn = document.getElementById('schedule-btn');
  dom.cancelBtn = document.getElementById('cancel-btn');
  // ... todas as referências
}
```

**4. services/storage.js**
```javascript
export function saveAppointment(appointment) {
  localStorage.setItem('appointment', JSON.stringify(appointment));
}

export function loadAppointment() {
  const data = localStorage.getItem('appointment');
  return data ? JSON.parse(data) : null;
}

export function clearAppointment() {
  localStorage.removeItem('appointment');
}
```

**5. services/user.js** (linhas 336-339)
```javascript
export function loadUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'João da Silva',
        cpf: '123.456.789-09'
      });
    }, 500);
  });
}
```

**6. modules/calendar.js** (linhas 466-539)
```javascript
import { state } from '../core/state.js';
import { dom } from '../core/dom.js';

export function updateCalendar() { /* ... */ }
export function goToNextMonth() { /* ... */ }
export function goToPrevMonth() { /* ... */ }
```

**7. modules/appointments.js** (linhas 364-400)
```javascript
import { state } from '../core/state.js';
import { saveAppointment, clearAppointment } from '../services/storage.js';
import { showToast } from '../components/toast.js';

export function createAppointment(data) { /* ... */ }
export function cancelAppointment() { /* ... */ }
export function hasActiveAppointment() { /* ... */ }
```

**8. modules/token.js** (linhas 566-626)
```javascript
import { TOKEN_DURATION, TOKEN_LENGTH } from '../config/constants.js';
import { state } from '../core/state.js';
import { showToast } from '../components/toast.js';

export function generateToken() { /* ... */ }
export function copyToken() { /* ... */ }
export function isTokenExpired() { /* ... */ }
```

**9. modules/notifications.js** (linhas 541-552)
```javascript
import { state } from '../core/state.js';
import { dom } from '../core/dom.js';

export function updateNotification() { /* ... */ }
export function hideNotification() { /* ... */ }
```

**10. modules/modal.js** (linhas 357-362, 628-630)
```javascript
import { dom } from '../core/dom.js';

export function openModal() { /* ... */ }
export function closeModal() { /* ... */ }
```

**11. components/ui-controller.js** (linhas 437-464)
```javascript
import { dom } from '../core/dom.js';
import { state } from '../core/state.js';

export function toggleButton(buttonName) { /* ... */ }
export function updateButtonStates() { /* ... */ }
```

**12. components/toast.js** (linhas 632-654)
```javascript
export function showToast(message, type = 'info') { /* ... */ }
```

**13. utils/formatters.js**
```javascript
export function formatDateBR(date) {
  return date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatCPF(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
```

**14. utils/validators.js**
```javascript
export function isValidDate(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
}

export function isValidCPF(cpf) {
  // Implementar validação de CPF
  return cpf.length === 11;
}
```

**15. main.js** (Entry Point)
```javascript
import feather from './lib/feather.min.js';
import { initState } from './core/state.js';
import { initDOMReferences } from './core/dom.js';
import { updateCalendar } from './modules/calendar.js';
import { updateNotification } from './modules/notifications.js';
import { updateButtonStates } from './components/ui-controller.js';
import { setupEventListeners } from './utils/events.js';

document.addEventListener('DOMContentLoaded', async () => {
  feather.replace();
  initState();
  initDOMReferences();
  setupEventListeners();
  updateCalendar();
  updateNotification();
  updateButtonStates();
});
```

### Etapa 5: Criar HTML Limpo
**Arquivo**: src/index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AgendaMed - Agendamento de Coleta de Medicamentos</title>
    <link rel="stylesheet" href="/styles/main.css">
</head>
<body class="bg-gray-50 min-h-screen">
    <!-- Copiar HTML das linhas 82-285 sem <script> e <style> -->

    <script type="module" src="/js/main.js"></script>
</body>
</html>
```

---

## ⚙️ Fase 3: Configuração

### Etapa 6: Configurar Vite
```bash
npm install -D vite
```

**config/vite.config.js**
```javascript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@js': resolve(__dirname, '../src/js'),
      '@styles': resolve(__dirname, '../src/styles')
    }
  }
});
```

### Etapa 7: Configurar Tailwind
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

**config/tailwind.config.js**
```javascript
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#DC143C',
        secondary: '#FFD700'
      }
    }
  }
};
```

**postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
```

### Etapa 8: Configurar Linters
```bash
npm install -D eslint prettier
```

**.eslintrc.json**
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn"
  }
}
```

**.prettierrc**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## 📦 Fase 4: Bibliotecas Locais

### Etapa 9: Substituir CDNs
1. Baixar Feather Icons para `src/lib/feather.min.js`
2. QRCode.js já instalado via npm
3. Remover CDN scripts do HTML

---

## ✅ Fase 5: Validação

### Etapa 10: Testes Completos
- [ ] Todas funcionalidades testadas
- [ ] ESLint passa
- [ ] Build funciona (`npm run build`)
- [ ] Preview funciona (`npm run preview`)

---

## 📊 Cronograma

| Fase | Etapas | Tempo Estimado | Status |
|------|--------|----------------|--------|
| Fase 1 | 1-2 | 30min | ✅ Completo |
| Fase 2 | 3-5 | 90min | ⏳ Próximo |
| Fase 3 | 6-8 | 45min | 🔜 Aguardando |
| Fase 4 | 9 | 15min | 🔜 Aguardando |
| Fase 5 | 10 | 30min | 🔜 Aguardando |

**Total estimado**: 3-4 horas

---

## 🎯 Resultado Final Esperado

### Estrutura Completa
```
agendamed/
├── src/
│   ├── index.html (limpo)
│   ├── styles/ (7 arquivos CSS)
│   ├── js/ (15+ módulos ES6)
│   └── lib/ (feather.js, qrcode.js)
├── public/
├── config/ (vite, tailwind, postcss)
├── tests/
├── docs/
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── package.json (completo)
└── agendamed.backup.html (preservado)
```

### package.json Final
```json
{
  "name": "agendamed",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .js",
    "format": "prettier --write \"src/**/*.{js,css,html}\""
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0"
  },
  "dependencies": {
    "qrcodejs": "^1.0.0"
  }
}
```
