// templates/infantil-01/main.js
import { loadEventData } from '../../shared/js/data-loader.js';
import { renderEventData } from '../../shared/js/render.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Definimos la ruta del archivo JSON (fácilmente parametrizable)
    const eventJsonPath = '../../events/mia-1/data.json';
    
    // Carga de datos
    const eventData = await loadEventData(eventJsonPath);
    
    // Renderizado DOM
    renderEventData(eventData);

    console.log('✅ Motor: Datos renderizados correctamente desde JSON');
  } catch (error) {
    console.error('❌ Error al inicializar la invitación:', error);
  }
});