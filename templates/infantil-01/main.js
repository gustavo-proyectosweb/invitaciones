// templates/infantil-01/main.js
import { loadEventData } from '../../shared/js/data-loader.js';
import { renderEventData } from '../../shared/js/render.js';
import { initCountdown } from '../../shared/js/countdown.js';
import { initAudioPlayer } from '../../shared/js/audio.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const eventJsonPath = '../../events/mia-1/data.json';
    const eventData = await loadEventData(eventJsonPath);
    
    // Renderizado general (Textos, Fotos y Enlaces RSVP/Maps)
    renderEventData(eventData);

    // Inicialización del Contador Regresivo
    if (eventData.countdown?.targetDateISO) {
      initCountdown(eventData.countdown.targetDateISO);
    }

    // Inicialización del Reproductor de Audio
    if (eventData.hero?.audioUrl) {
      initAudioPlayer(eventData.hero.audioUrl);
    }

    console.log('✅ Motor dinámico cargado completamente');
  } catch (error) {
    console.error('❌ Error al inicializar la invitación:', error);
  }
});