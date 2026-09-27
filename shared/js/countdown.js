// shared/js/countdown.js

/**
 * Inicializa el contador regresivo dinámico.
 * @param {string} targetDateISO - Fecha objetivo en formato ISO (ej. "2026-10-12T16:00:00-03:00").
 */
export function initCountdown(targetDateISO) {
  if (!targetDateISO) return;

  const targetDate = new Date(targetDateISO).getTime();
  
  if (isNaN(targetDate)) {
    console.error('❌ Fecha objetivo no válida:', targetDateISO);
    return;
  }

  const daysEl = document.querySelector('#countdown-days');
  const hoursEl = document.querySelector('#countdown-hours');
  const minutesEl = document.querySelector('#countdown-minutes');
  const secondsEl = document.querySelector('#countdown-seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Caso borde: La fecha objetivo ya pasó
    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      clearInterval(timerInterval);
      return;
    }

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formateo con ceros a la izquierda (01, 02, ..., 09)
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  // Ejecución inmediata + intervalo de 1 segundo
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}