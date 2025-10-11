/**
 * Modal Module
 * Handles modal open/close operations
 */

import { dom } from '../core/dom.js';

/**
 * Open the date selection modal
 */
export function openModal() {
  dom.dateModal.classList.remove('hidden');
}

/**
 * Close the date selection modal
 */
export function closeModal() {
  dom.dateModal.classList.add('hidden');
}
