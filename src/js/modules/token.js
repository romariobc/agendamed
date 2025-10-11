/**
 * Token Module
 * Handles token generation, QR code creation, and countdown timer
 */

import { state } from '../core/state.js';
import { dom } from '../core/dom.js';
import {
  TOKEN_LENGTH,
  TOKEN_CHARS,
  TOKEN_DURATION,
} from '../config/constants.js';
import { formatCountdown } from '../utils/formatters.js';
import { showToast } from '../components/toast.js';

/**
 * Generate a new check-in token with QR code and countdown
 */
export function generateToken() {
  // Clear previous interval if exists
  if (state.tokenInterval) {
    clearInterval(state.tokenInterval);
  }

  // Generate random alphanumeric token
  let token = '';
  for (let i = 0; i < TOKEN_LENGTH; i++) {
    token += TOKEN_CHARS.charAt(Math.floor(Math.random() * TOKEN_CHARS.length));
  }

  // Update state
  state.currentToken = token;
  state.tokenExpired = false;

  // Update UI
  dom.tokenEl.textContent = token;
  dom.tokenContainer.classList.remove('token-expired');

  // Clear previous QR code
  dom.qrCodeEl.innerHTML = '';

  // Generate new QR code
  new QRCode(dom.qrCodeEl, {
    text: token,
    width: 128,
    height: 128,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Start countdown
  startCountdown();
}

/**
 * Start countdown timer for token expiration
 */
function startCountdown() {
  let totalSeconds = TOKEN_DURATION;

  const updateCountdown = () => {
    // Token expired
    if (totalSeconds <= 0) {
      clearInterval(state.tokenInterval);
      dom.countdownEl.textContent = 'Token Expirado ❌';
      dom.countdownEl.classList.add('text-red-600', 'font-bold');
      dom.tokenContainer.classList.add('token-expired');
      state.tokenExpired = true;
      showToast('⏱️ Token expirado! Gere um novo token.', 'warning');
      return;
    }

    // Update countdown display
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    dom.countdownEl.textContent = `Válido por: ${formatCountdown(totalSeconds)}`;
    dom.countdownEl.classList.remove('text-red-600');

    // Alert when 1 minute remaining
    if (totalSeconds === 60) {
      dom.countdownEl.classList.add('text-red-600', 'font-bold');
    }

    totalSeconds--;
  };

  // Initial update
  updateCountdown();

  // Update every second
  state.tokenInterval = setInterval(updateCountdown, 1000);
}

/**
 * Copy token to clipboard
 */
export function copyToken() {
  // Check if token expired
  if (state.tokenExpired) {
    showToast('⚠️ Token expirado! Gere um novo token.', 'warning');
    return;
  }

  // Copy to clipboard
  navigator.clipboard
    .writeText(dom.tokenEl.textContent)
    .then(() => {
      showToast('📋 Token copiado para a área de transferência!', 'success');
    })
    .catch(() => {
      showToast('❌ Erro ao copiar token', 'error');
    });
}

/**
 * Check if current token is expired
 * @returns {boolean} True if token is expired
 */
export function isTokenExpired() {
  return state.tokenExpired;
}
