// shared/js/data-loader.js

/**
 * Carga y parsea el archivo de configuración JSON del evento.
 * @param {string} jsonPath - Ruta relativa hacia el archivo data.json.
 * @returns {Promise<Object>} Promesa que resuelve con el objeto de datos del evento.
 */
export async function loadEventData(jsonPath = '../../events/mia-1/data.json') {
  try {
    const response = await fetch(jsonPath);
    if (!response.ok) {
      throw new Error(`Error HTTP al cargar los datos: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar event-config:', error);
    throw error;
  }
}