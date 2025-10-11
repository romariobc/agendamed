/**
 * LocalStorage Service
 * Handles all localStorage operations for the application
 */

import { STORAGE_KEYS } from '../config/constants.js';

/**
 * Save appointment data to localStorage
 * @param {Object} appointment - Appointment object to save
 */
export function saveAppointment(appointment) {
  try {
    localStorage.setItem(STORAGE_KEYS.APPOINTMENT, JSON.stringify(appointment));
  } catch (error) {
    console.error('Error saving appointment to localStorage:', error);
  }
}

/**
 * Load appointment data from localStorage
 * @returns {Object|null} Appointment object or null if not found
 */
export function loadAppointment() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.APPOINTMENT);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading appointment from localStorage:', error);
    return null;
  }
}

/**
 * Clear appointment data from localStorage
 */
export function clearAppointment() {
  try {
    localStorage.removeItem(STORAGE_KEYS.APPOINTMENT);
  } catch (error) {
    console.error('Error clearing appointment from localStorage:', error);
  }
}

/**
 * Check if there's an active appointment in storage
 * @returns {boolean} True if appointment exists
 */
export function hasAppointment() {
  return loadAppointment() !== null;
}
