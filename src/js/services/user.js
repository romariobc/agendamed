/**
 * User Service
 * Handles user data loading and management
 */

/**
 * Load user data
 * Currently simulated with setTimeout, will be replaced with API call
 * @returns {Promise<Object>} User data object
 */
export function loadUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'João da Silva',
        cpf: '123.456.789-09',
      });
    }, 500);
  });
}

/**
 * Display user data in the UI
 * @param {HTMLElement} nameEl - Element to display user name
 * @param {HTMLElement} cpfEl - Element to display user CPF
 */
export async function displayUserData(nameEl, cpfEl) {
  const userData = await loadUserData();
  nameEl.textContent = userData.name;
  cpfEl.textContent = userData.cpf;
}
