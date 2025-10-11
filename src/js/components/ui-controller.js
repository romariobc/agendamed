/**
 * UI Controller Component
 * Handles expandable button sections and button state management
 */

import { state } from '../core/state.js';
import { dom } from '../core/dom.js';

/**
 * Toggle expandable button section
 * @param {string|null} buttonName - Name of button to toggle ('schedule', 'cancel', 'token', or null to close all)
 */
export function toggleButton(buttonName) {
  const buttons = [
    {
      name: 'schedule',
      content: dom.scheduleContent,
      btn: dom.scheduleBtn,
      chevron: dom.scheduleChevron,
    },
    {
      name: 'cancel',
      content: dom.cancelContent,
      btn: dom.cancelBtn,
      chevron: dom.cancelChevron,
    },
    {
      name: 'token',
      content: dom.tokenContent,
      btn: dom.tokenBtn,
      chevron: dom.tokenChevron,
    },
  ];

  // If clicking already active button, close it
  if (state.activeButton === buttonName) {
    state.activeButton = null;
    buttons.forEach((b) => {
      b.content.classList.remove('expanded');
      b.chevron.style.transform = '';
    });
  } else {
    // Open selected button, close others
    state.activeButton = buttonName;
    buttons.forEach((b) => {
      if (b.name === buttonName) {
        b.content.classList.add('expanded');
        b.chevron.style.transform = 'rotate(180deg)';
      } else {
        b.content.classList.remove('expanded');
        b.chevron.style.transform = '';
      }
    });
  }

  // Refresh Feather icons after transition
  setTimeout(() => feather.replace(), 100);
}

/**
 * Update button states based on appointment availability
 * Disables CANCELAR and TOKEN buttons when no appointment exists
 */
export function updateButtonStates() {
  const hasAppointment = state.appointment !== null;

  // Cancel button state
  dom.cancelBtn.disabled = !hasAppointment;
  dom.cancelBtn.classList.toggle('opacity-50', !hasAppointment);
  dom.cancelBtn.classList.toggle('cursor-not-allowed', !hasAppointment);

  // Token button state
  dom.tokenBtn.disabled = !hasAppointment;
  dom.tokenBtn.classList.toggle('opacity-50', !hasAppointment);
  dom.tokenBtn.classList.toggle('cursor-not-allowed', !hasAppointment);
}
