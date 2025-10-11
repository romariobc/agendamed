/**
 * Toast Notification Component
 * Displays temporary notification messages
 */

import { dom } from '../core/dom.js';

/**
 * Toast notification types and their configurations
 */
const TOAST_CONFIG = {
  success: { icon: '✅', bgColor: 'bg-green-600' },
  error: { icon: '❌', bgColor: 'bg-red-600' },
  warning: { icon: '⚠️', bgColor: 'bg-yellow-600' },
  info: { icon: 'ℹ️', bgColor: 'bg-gray-800' },
};

/**
 * Show a toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type of toast (success/error/warning/info)
 */
export function showToast(message, type = 'info') {
  const config = TOAST_CONFIG[type] || TOAST_CONFIG.info;

  // Set message and styling
  dom.toast.textContent = message;
  dom.toast.className = `toast fixed bottom-4 left-1/2 ${config.bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-30 text-center`;

  // Show toast
  dom.toast.classList.remove('hidden');

  // Auto-hide after 3 seconds
  setTimeout(() => {
    dom.toast.classList.add('hidden');
  }, 3000);
}
