// shared/js/audio.js

/**
 * Inicializa el reproductor de audio con botón flotante/toggle.
 * @param {string} audioUrl - Ruta del archivo de audio desde el JSON.
 */
export function initAudioPlayer(audioUrl) {
  const audioBtn = document.querySelector('#audio-control-btn');
  const audioIcon = document.querySelector('#audio-icon');
  
  if (!audioUrl || !audioBtn) return;

  // Elemento de audio en memoria
  const audio = new Audio(audioUrl);
  audio.loop = true;
  let isPlaying = false;

  audioBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      audioBtn.classList.remove('playing');
      if (audioIcon) audioIcon.textContent = '🎵'; // Estado pausado
    } else {
      audio.play().then(() => {
        isPlaying = true;
        audioBtn.classList.add('playing');
        if (audioIcon) audioIcon.textContent = '🔊'; // Estado reproduciendo
      }).catch(err => {
        console.warn('Interacción requerida para reproducir audio:', err);
      });
    }
  });
}