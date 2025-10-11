/**
 * Appointments Module
 * Handles appointment creation, cancellation and management
 */

import { state } from '../core/state.js';
import { dom } from '../core/dom.js';
import { saveAppointment, clearAppointment } from '../services/storage.js';
import { showToast } from '../components/toast.js';
import { updateNotification } from './notifications.js';
import { updateButtonStates } from '../components/ui-controller.js';
import { closeModal } from './modal.js';
import { formatDateBR } from '../utils/formatters.js';

/**
 * Create a new appointment
 * @param {string} timeSlot - Selected time slot
 * @param {string} healthUnit - Selected health unit
 * @param {Function} toggleButton - Button toggle function from UI controller
 */
export function createAppointment(timeSlot, healthUnit, toggleButton) {
  // Validate inputs
  if (!timeSlot || !healthUnit) {
    showToast(
      '⚠️ Por favor, selecione o horário e a unidade de saúde',
      'warning'
    );
    return;
  }

  // Create appointment object
  state.appointment = {
    date: formatDateBR(state.selectedDate),
    time: timeSlot,
    healthUnit: healthUnit,
    timestamp: new Date().getTime(),
  };

  // Save to localStorage
  saveAppointment(state.appointment);

  // Update UI
  closeModal();
  toggleButton(null);
  updateNotification();
  updateButtonStates();

  // Show success message
  showToast('✅ Agendamento confirmado com sucesso!', 'success');
}

/**
 * Cancel existing appointment
 * @param {Function} toggleButton - Button toggle function from UI controller
 */
export function cancelAppointment(toggleButton) {
  // Clear state
  state.appointment = null;

  // Clear from localStorage
  clearAppointment();

  // Update UI
  toggleButton(null);
  updateNotification();
  updateButtonStates();

  // Show cancellation message
  showToast('🗑️ Agendamento cancelado', 'info');
}

/**
 * Check if there's an active appointment
 * @returns {boolean} True if appointment exists
 */
export function hasActiveAppointment() {
  return state.appointment !== null;
}
