/**
 * DOM References
 * Centralized DOM element references to avoid repeated querySelector calls
 */

/**
 * Cached DOM element references
 * @type {Object}
 */
export const dom = {
  // Action buttons
  scheduleBtn: null,
  cancelBtn: null,
  tokenBtn: null,

  // Expandable content sections
  scheduleContent: null,
  cancelContent: null,
  tokenContent: null,

  // Chevron icons for buttons
  scheduleChevron: null,
  cancelChevron: null,
  tokenChevron: null,

  // Modal elements
  dateModal: null,
  closeModalBtn: null,
  backBtn: null,
  confirmAppointmentBtn: null,
  selectedDateEl: null,
  timeSlotSelect: null,
  healthUnitSelect: null,

  // Cancel confirmation
  confirmCancelBtn: null,
  declineCancelBtn: null,

  // Calendar elements
  currentMonthEl: null,
  prevMonthBtn: null,
  nextMonthBtn: null,
  calendarDaysEl: null,

  // Notification elements
  notificationArea: null,
  notificationIcon: null,
  toast: null,

  // Token elements
  tokenEl: null,
  copyTokenBtn: null,
  regenerateTokenBtn: null,
  countdownEl: null,
  qrCodeEl: null,
  tokenContainer: null,

  // User info
  userNameEl: null,
  userCpfEl: null,
};

/**
 * Initialize all DOM references
 * Should be called after DOMContentLoaded
 */
export function initDOMReferences() {
  // Action buttons
  dom.scheduleBtn = document.getElementById('schedule-btn');
  dom.cancelBtn = document.getElementById('cancel-btn');
  dom.tokenBtn = document.getElementById('token-btn');

  // Expandable content
  dom.scheduleContent = document.getElementById('schedule-content');
  dom.cancelContent = document.getElementById('cancel-content');
  dom.tokenContent = document.getElementById('token-content');

  // Chevrons
  dom.scheduleChevron = document.getElementById('schedule-chevron');
  dom.cancelChevron = document.getElementById('cancel-chevron');
  dom.tokenChevron = document.getElementById('token-chevron');

  // Modal
  dom.dateModal = document.getElementById('date-modal');
  dom.closeModalBtn = document.getElementById('close-modal');
  dom.backBtn = document.getElementById('back-btn');
  dom.confirmAppointmentBtn = document.getElementById('confirm-appointment');
  dom.selectedDateEl = document.getElementById('selected-date');
  dom.timeSlotSelect = document.getElementById('time-slot');
  dom.healthUnitSelect = document.getElementById('health-unit');

  // Cancel confirmation
  dom.confirmCancelBtn = document.getElementById('confirm-cancel');
  dom.declineCancelBtn = document.getElementById('decline-cancel');

  // Calendar
  dom.currentMonthEl = document.getElementById('current-month');
  dom.prevMonthBtn = document.getElementById('prev-month');
  dom.nextMonthBtn = document.getElementById('next-month');
  dom.calendarDaysEl = document.getElementById('calendar-days');

  // Notifications
  dom.notificationArea = document.getElementById('alert-message');
  dom.notificationIcon = document.getElementById('notification-icon');
  dom.toast = document.getElementById('toast');

  // Token
  dom.tokenEl = document.getElementById('token');
  dom.copyTokenBtn = document.getElementById('copy-token');
  dom.regenerateTokenBtn = document.getElementById('regenerate-token');
  dom.countdownEl = document.getElementById('countdown');
  dom.qrCodeEl = document.getElementById('qr-code');
  dom.tokenContainer = document.getElementById('token-container');

  // User info
  dom.userNameEl = document.getElementById('user-name');
  dom.userCpfEl = document.getElementById('user-cpf');
}
