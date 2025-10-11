/**
 * AgendaMed - Main Application Entry Point
 *
 * Initializes the application, sets up state, DOM references,
 * event listeners, and renders initial UI state.
 */

import feather from 'feather-icons';
import { initState } from './core/state.js';
import { initDOMReferences, dom } from './core/dom.js';
import { updateCalendar } from './modules/calendar.js';
import { updateNotification } from './modules/notifications.js';
import { updateButtonStates } from './components/ui-controller.js';
import { setupEventListeners } from './utils/events.js';
import { displayUserData } from './services/user.js';

/**
 * Application initialization
 * Runs after DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialize Feather icons
  feather.replace();

  // 2. Initialize application state from localStorage
  initState();

  // 3. Cache all DOM element references
  initDOMReferences();

  // 4. Load and display user data (simulated API call)
  await displayUserData(dom.userNameEl, dom.userCpfEl);

  // 5. Setup all event listeners
  setupEventListeners();

  // 6. Render initial UI state
  updateCalendar();
  updateNotification();
  updateButtonStates();

  // 7. Refresh Feather icons periodically for dynamic content
  setInterval(() => feather.replace(), 1000);
});
