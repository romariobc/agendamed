/**
 * Notifications Module
 * Handles header notification display for active appointments
 */

import { state } from '../core/state.js';
import { dom } from '../core/dom.js';

/**
 * Update notification area based on appointment status
 */
export function updateNotification() {
  if (state.appointment) {
    const { date, time, healthUnit } = state.appointment;

    // Show notification with appointment details
    dom.notificationArea.textContent = `Agendamento para ${date} às ${time} - ${healthUnit}`;
    dom.notificationArea.classList.remove('hidden');
    dom.notificationIcon.classList.remove('hidden');
  } else {
    // Hide notification
    dom.notificationArea.textContent = '';
    dom.notificationArea.classList.add('hidden');
    dom.notificationIcon.classList.add('hidden');
  }
}

/**
 * Hide notification area
 */
export function hideNotification() {
  dom.notificationArea.classList.add('hidden');
  dom.notificationIcon.classList.add('hidden');
}
