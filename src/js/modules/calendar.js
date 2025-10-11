/**
 * Calendar Module
 * Handles calendar rendering and date selection
 */

import { state } from '../core/state.js';
import { dom } from '../core/dom.js';
import { formatMonthYear, formatDateBR } from '../utils/formatters.js';
import { openModal } from './modal.js';
import { showToast } from '../components/toast.js';

/**
 * Update calendar display with current month
 */
export function updateCalendar() {
  const year = state.currentDate.getFullYear();
  const month = state.currentDate.getMonth();

  // Update month/year header
  dom.currentMonthEl.textContent = formatMonthYear(state.currentDate);

  // Calculate calendar grid
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Clear existing calendar
  dom.calendarDaysEl.innerHTML = '';

  // Add empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.className = 'h-10';
    dom.calendarDaysEl.appendChild(emptyCell);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    date.setHours(0, 0, 0, 0);

    const dayCell = document.createElement('div');
    dayCell.className =
      'calendar-day text-center py-2 rounded-full cursor-pointer';

    // Mark today
    if (date.getTime() === today.getTime()) {
      dayCell.classList.add('today');
    }

    // Disable past dates
    if (date < today) {
      dayCell.classList.add('disabled');
    }

    dayCell.textContent = day;

    // Add click handler for enabled dates
    if (!dayCell.classList.contains('disabled')) {
      dayCell.addEventListener('click', function () {
        handleDateClick(date, dayCell);
      });
    }

    dom.calendarDaysEl.appendChild(dayCell);
  }
}

/**
 * Handle date cell click
 * @param {Date} date - Selected date
 * @param {HTMLElement} dayCell - Clicked day cell element
 */
function handleDateClick(date, dayCell) {
  // Check if appointment already exists
  if (state.appointment) {
    showToast(
      '⚠️ Você já possui um agendamento ativo. Cancele-o primeiro.',
      'warning'
    );
    return;
  }

  // Remove previous selection
  document.querySelectorAll('.calendar-day').forEach((d) => {
    d.classList.remove('selected');
  });

  // Mark as selected
  dayCell.classList.add('selected');
  state.selectedDate = date;

  // Update modal with selected date
  dom.selectedDateEl.textContent = formatDateBR(date);

  // Reset form fields
  dom.timeSlotSelect.value = '';
  dom.healthUnitSelect.value = '';

  // Open modal
  openModal();

  // Refresh Feather icons
  setTimeout(() => feather.replace(), 50);
}

/**
 * Navigate to next month
 */
export function goToNextMonth() {
  state.currentDate.setMonth(state.currentDate.getMonth() + 1);
  updateCalendar();
  feather.replace();
}

/**
 * Navigate to previous month
 */
export function goToPrevMonth() {
  state.currentDate.setMonth(state.currentDate.getMonth() - 1);
  updateCalendar();
  feather.replace();
}
