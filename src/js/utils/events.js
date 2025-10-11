/**
 * Event Listeners Setup
 * Centralizes all event listener bindings
 */

import { dom } from '../core/dom.js';
import { state } from '../core/state.js';
import { toggleButton } from '../components/ui-controller.js';
import { goToNextMonth, goToPrevMonth } from '../modules/calendar.js';
import { createAppointment, cancelAppointment } from '../modules/appointments.js';
import { generateToken, copyToken } from '../modules/token.js';
import { closeModal } from '../modules/modal.js';

/**
 * Setup all event listeners for the application
 * Should be called after DOM is ready and references are initialized
 */
export function setupEventListeners() {
  // Main action buttons
  dom.scheduleBtn.addEventListener('click', () => toggleButton('schedule'));
  dom.cancelBtn.addEventListener('click', () => toggleButton('cancel'));
  dom.tokenBtn.addEventListener('click', () => {
    toggleButton('token');
    // Generate token automatically when opening token section
    if (state.activeButton === 'token' && !state.currentToken) {
      generateToken();
    }
  });

  // Modal controls
  dom.backBtn.addEventListener('click', closeModal);
  dom.closeModalBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside
  dom.dateModal.addEventListener('click', (e) => {
    if (e.target === dom.dateModal) {
      closeModal();
    }
  });

  // Confirm appointment
  dom.confirmAppointmentBtn.addEventListener('click', () => {
    const timeSlot = dom.timeSlotSelect.value;
    const healthUnit = dom.healthUnitSelect.value;
    createAppointment(timeSlot, healthUnit, toggleButton);
  });

  // Cancel appointment confirmation
  dom.confirmCancelBtn.addEventListener('click', () => {
    cancelAppointment(toggleButton);
  });

  // Decline cancellation
  dom.declineCancelBtn.addEventListener('click', () => {
    toggleButton(null);
  });

  // Calendar navigation
  dom.prevMonthBtn.addEventListener('click', goToPrevMonth);
  dom.nextMonthBtn.addEventListener('click', goToNextMonth);

  // Token actions
  dom.copyTokenBtn.addEventListener('click', copyToken);
  dom.regenerateTokenBtn.addEventListener('click', generateToken);
}
