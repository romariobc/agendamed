# 📋 Módulos JavaScript Restantes - AgendaMed

## ✅ Criados (8 arquivos)

1. ✅ `src/js/config/constants.js` - Constantes da aplicação
2. ✅ `src/js/core/state.js` - Gerenciamento de estado global
3. ✅ `src/js/core/dom.js` - Referências DOM centralizadas
4. ✅ `src/js/services/storage.js` - LocalStorage abstraction
5. ✅ `src/js/services/user.js` - Serviço de dados do usuário
6. ✅ `src/js/utils/formatters.js` - Formatação de datas/strings
7. ✅ `src/js/components/toast.js` - Notificações toast
8. ✅ `src/js/modules/modal.js` - Controle de modal

---

## 🔄 Pendentes (7 arquivos principais)

### 1. `src/js/modules/calendar.js` ⏳

**Origem**: linhas 466-539 do `agendamed.html`

**Funções a implementar**:
```javascript
import { state } from '../core/state.js';
import { dom } from '../core/dom.js';
import { formatMonthYear, formatDateBR } from '../utils/formatters.js';
import { openModal } from './modal.js';
import { showToast } from '../components/toast.js';

export function updateCalendar() {
  // Renderizar calendário com dias do mês
  // Marcar hoje, desabilitar datas passadas
  // Adicionar event listeners em dias clicáveis
}

export function goToNextMonth() {
  state.currentDate.setMonth(state.currentDate.getMonth() + 1);
  updateCalendar();
  feather.replace();
}

export function goToPrevMonth() {
  state.currentDate.setMonth(state.currentDate.getMonth() - 1);
  updateCalendar();
  feather.replace();
}
```

**Lógica principal**:
- Calcular primeiro dia do mês e total de dias
- Criar células vazias antes do primeiro dia
- Renderizar dias com classes apropriadas (.today, .disabled, .selected)
- Event listener em cada dia: abrir modal com data selecionada

---

### 2. `src/js/modules/appointments.js` ⏳

**Origem**: linhas 364-400 do `agendamed.html`

**Funções a implementar**:
```javascript
import { state } from '../core/state.js';
import { saveAppointment, clearAppointment } from '../services/storage.js';
import { showToast } from '../components/toast.js';
import { updateNotification } from './notifications.js';
import { updateButtonStates } from '../components/ui-controller.js';
import { closeModal } from './modal.js';
import { formatDateBR } from '../utils/formatters.js';

export function createAppointment(timeSlot, healthUnit) {
  // Validar inputs
  // Criar objeto appointment com date, time, healthUnit, timestamp
  // Salvar em state e localStorage
  // Atualizar UI (notificação, botões)
  // Mostrar toast de sucesso
}

export function cancelAppointment() {
  // Limpar state.appointment
  // Remover de localStorage
  // Atualizar UI
  // Mostrar toast de cancelamento
}

export function hasActiveAppointment() {
  return state.appointment !== null;
}
```

---

### 3. `src/js/modules/token.js` ⏳

**Origem**: linhas 566-626 do `agendamed.html`

**Funções a implementar**:
```javascript
import { state } from '../core/dom.js';
import { dom } from '../core/dom.js';
import { TOKEN_LENGTH, TOKEN_CHARS, TOKEN_DURATION } from '../config/constants.js';
import { formatCountdown } from '../utils/formatters.js';
import { showToast } from '../components/toast.js';

export function generateToken() {
  // Limpar interval anterior
  // Gerar token alfanumérico de 6 caracteres
  // Atualizar DOM com token
  // Gerar QR Code usando QRCode.js
  // Iniciar countdown de 15 minutos
  // Atualizar estado (tokenExpired, currentToken)
}

export function copyToken() {
  // Verificar se token expirou
  // Usar navigator.clipboard.writeText()
  // Mostrar toast de sucesso/erro
}

export function startCountdown() {
  // Countdown de 15min (900 segundos)
  // Atualizar UI a cada segundo
  // Quando chegar a 0: marcar como expirado, adicionar classe .token-expired
  // Alerta quando restar 1 minuto
}
```

---

### 4. `src/js/modules/notifications.js` ⏳

**Origem**: linhas 541-552 do `agendamed.html`

```javascript
import { state } from '../core/state.js';
import { dom } from '../core/dom.js';

export function updateNotification() {
  if (state.appointment) {
    const { date, time, healthUnit } = state.appointment;
    dom.notificationArea.textContent =
      `Agendamento para ${date} às ${time} - ${healthUnit}`;
    dom.notificationArea.classList.remove('hidden');
    dom.notificationIcon.classList.remove('hidden');
  } else {
    dom.notificationArea.classList.add('hidden');
    dom.notificationIcon.classList.add('hidden');
  }
}
```

---

### 5. `src/js/components/ui-controller.js` ⏳

**Origem**: linhas 437-464 do `agendamed.html`

```javascript
import { state } from '../core/state.js';
import { dom } from '../core/dom.js';

export function toggleButton(buttonName) {
  // Array com configurações de botões
  // Se já está ativo: fechar (state.activeButton = null)
  // Senão: abrir selecionado, fechar outros
  // Rotacionar chevron
  // feather.replace() após 100ms
}

export function updateButtonStates() {
  // Desabilitar CANCELAR se não há agendamento
  // Desabilitar TOKEN se não há agendamento
  // Adicionar/remover classes: opacity-50, cursor-not-allowed
}
```

---

### 6. `src/js/utils/events.js` ⏳

**Novo arquivo - centraliza todos event listeners**

```javascript
import { dom } from '../core/dom.js';
import { state } from '../core/state.js';
import { toggleButton } from '../components/ui-controller.js';
import { goToNextMonth, goToPrevMonth } from '../modules/calendar.js';
import { createAppointment, cancelAppointment } from '../modules/appointments.js';
import { generateToken, copyToken } from '../modules/token.js';
import { closeModal } from '../modules/modal.js';
import { showToast } from '../components/toast.js';

export function setupEventListeners() {
  // Botões principais
  dom.scheduleBtn.addEventListener('click', () => toggleButton('schedule'));
  dom.cancelBtn.addEventListener('click', () => toggleButton('cancel'));
  dom.tokenBtn.addEventListener('click', () => {
    toggleButton('token');
    if (state.activeButton === 'token' && !state.currentToken) {
      generateToken();
    }
  });

  // Modal
  dom.backBtn.addEventListener('click', closeModal);
  dom.closeModalBtn.addEventListener('click', closeModal);
  dom.dateModal.addEventListener('click', (e) => {
    if (e.target === dom.dateModal) closeModal();
  });

  // Confirmar agendamento
  dom.confirmAppointmentBtn.addEventListener('click', () => {
    const timeSlot = dom.timeSlotSelect.value;
    const healthUnit = dom.healthUnitSelect.value;
    createAppointment(timeSlot, healthUnit);
  });

  // Cancelar agendamento
  dom.confirmCancelBtn.addEventListener('click', cancelAppointment);
  dom.declineCancelBtn.addEventListener('click', () => toggleButton(null));

  // Calendário
  dom.prevMonthBtn.addEventListener('click', goToPrevMonth);
  dom.nextMonthBtn.addEventListener('click', goToNextMonth);

  // Token
  dom.copyTokenBtn.addEventListener('click', copyToken);
  dom.regenerateTokenBtn.addEventListener('click', generateToken);
}
```

---

### 7. `src/js/main.js` ⏳

**Entry point da aplicação**

```javascript
import feather from 'feather-icons';
import { initState } from './core/state.js';
import { initDOMReferences, dom } from './core/dom.js';
import { updateCalendar } from './modules/calendar.js';
import { updateNotification } from './modules/notifications.js';
import { updateButtonStates } from './components/ui-controller.js';
import { setupEventListeners } from './utils/events.js';
import { displayUserData } from './services/user.js';

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Inicializar ícones
  feather.replace();

  // 2. Inicializar estado e DOM
  initState();
  initDOMReferences();

  // 3. Carregar dados do usuário
  await displayUserData(dom.userNameEl, dom.userCpfEl);

  // 4. Setup event listeners
  setupEventListeners();

  // 5. Inicializar UI
  updateCalendar();
  updateNotification();
  updateButtonStates();

  // 6. Refresh ícones periodicamente
  setInterval(() => feather.replace(), 1000);
});
```

---

## 📝 Próximos Passos

1. **Completar módulos pendentes** (copiar código das linhas referenciadas)
2. **Testar importações** (verificar se todos imports estão corretos)
3. **Commit**: "refactor: modularizar JavaScript em ES6 modules"
4. **Criar HTML limpo** (src/index.html sem inline code)
5. **Configurar Vite** para build

---

## 🎯 Status Atual

**Progresso JavaScript**: 53% (8/15 arquivos)
**Próxima ação**: Completar calendar.js (maior módulo)
