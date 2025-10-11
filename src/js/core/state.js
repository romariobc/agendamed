/**
 * Global Application State
 * Manages the centralized state for the application
 */

import { loadAppointment } from '../services/storage.js';

/**
 * Application state object
 * @type {Object}
 */
export const state = {
  /** Current date being displayed in calendar */
  currentDate: new Date(),

  /** Date selected by user for appointment */
  selectedDate: null,

  /** Current active appointment data */
  appointment: null,

  /** Currently active/expanded button section */
  activeButton: null,

  /** Interval ID for token countdown */
  tokenInterval: null,

  /** Flag indicating if current token has expired */
  tokenExpired: false,

  /** Current generated token string */
  currentToken: null,
};

/**
 * Initialize application state
 * Loads saved appointment from localStorage
 */
export function initState() {
  state.appointment = loadAppointment();
}

/**
 * Reset state to initial values
 * Used for testing or complete state reset
 */
export function resetState() {
  state.currentDate = new Date();
  state.selectedDate = null;
  state.appointment = null;
  state.activeButton = null;

  if (state.tokenInterval) {
    clearInterval(state.tokenInterval);
  }

  state.tokenInterval = null;
  state.tokenExpired = false;
  state.currentToken = null;
}
