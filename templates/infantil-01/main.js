// templates/infantil-01/main.js
import { loadEventData } from '../../shared/js/data-loader.js';
import { renderEventData, renderActions } from '../../shared/js/render.js';
import { initCountdown } from '../../shared/js/countdown.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const eventJsonPath = '../../events/mia-1/data.json';
    const eventData = await loadEventData(eventJsonPath);
    
    // Renderizado DOM de textos e imágenes
    renderEventData(eventData);

    // Configuración de botones e interacciones
    renderActions(eventData);

    // Inicialización del Contador Regresivo
    if (eventData.countdown?.targetDateISO) {
      initCountdown(eventData.countdown.targetDateISO);
    }

    console.log('✅ Motor y Contador inicializados con éxito');
  } catch (error) {
    console.error('❌ Error al inicializar la invitación:', error);
  }
});