/**
 * Formatting Utilities
 * Functions for formatting dates, strings, and other data
 */

/**
 * Format date in Brazilian Portuguese format
 * @param {Date} date - Date object to format
 * @returns {string} Formatted date string
 */
export function formatDateBR(date) {
  return date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format month and year for calendar header
 * @param {Date} date - Date object
 * @returns {string} Formatted month/year string
 */
export function formatMonthYear(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Format CPF (Brazilian ID)
 * @param {string} cpf - CPF string (11 digits)
 * @returns {string} Formatted CPF (000.000.000-00)
 */
export function formatCPF(cpf) {
  const cleaned = cpf.replace(/\D/g, '');
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Format countdown time (mm:ss)
 * @param {number} seconds - Total seconds
 * @returns {string} Formatted time string
 */
export function formatCountdown(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
}
