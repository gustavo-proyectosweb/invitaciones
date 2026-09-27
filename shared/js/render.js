// shared/js/render.js

// Ruta global de la imagen placeholder de respaldo
const DEFAULT_PLACEHOLDER = '../../assets/decor/mia-avatar-placeholder.jpg';

/**
 * Inyecta los datos parseados del JSON en los elementos del DOM.
 * @param {Object} data - Objeto con la configuración del evento.
 */
export function renderEventData(data) {
  if (!data) return;

  // 1. Meta / Título de la pestaña
  if (data.meta?.title) {
    document.title = data.meta.title;
  }

  // 2. Sección Hero / Portada
  setElementText('#hero-badge', data.hero?.badge);
  setElementText('#hero-name', data.hero?.name);
  setElementText('#hero-subtitle', data.hero?.subtitle);
  setElementImage('#hero-avatar', data.hero?.avatarUrl, `Foto de ${data.hero?.name || 'portada'}`);

  // 3. Galería de Fotos (Banners intermediarios)
  renderGalleryPhotos(data.photos);

  // 4. Sección Cuándo y Dónde
  setElementText('#location-title', data.location?.sectionTitle);
  setElementText('#location-date', data.location?.dateText);
  setElementText('#location-time', data.location?.timeText);
  setElementText('#location-venue', data.location?.venue);
  setElementText('#location-address', data.location?.address);

  // 5. Sección Asistencia (RSVP)
  setElementText('#rsvp-title', data.rsvp?.sectionTitle);
  setElementText('#rsvp-text', data.rsvp?.descriptionText);

  // 6. Sección Contador
  setElementText('#countdown-title', data.countdown?.sectionTitle);

  // 7. Cierre y Footer
  setElementText('#closing-title', data.closing?.title);
  setElementText('#closing-text', data.closing?.message);
  setElementText('#closing-signature', data.closing?.signature);
  setElementText('#footer-credit', data.footer?.creditText);

  // 8. Enlaces de Acción (WhatsApp, Maps, etc.)
  renderActions(data);
}

/**
 * Recorre y asigna las fotos del array 'photos' del JSON.
 * Completa con placeholders si vienen menos de 4 fotos.
 * @param {Array<string>} photosArray 
 */
function renderGalleryPhotos(photosArray = []) {
  const TOTAL_EXPECTED_PHOTOS = 4;

  for (let i = 1; i <= TOTAL_EXPECTED_PHOTOS; i++) {
    const photoUrl = photosArray[i - 1] || DEFAULT_PLACEHOLDER;
    setElementImage(`#gallery-photo-${i}`, photoUrl, `Foto destacada ${i}`);
  }
}

/**
 * Helper para asignar texto de forma segura
 */
function setElementText(selector, text) {
  if (!text) return;
  const el = document.querySelector(selector);
  if (el) {
    el.textContent = text;
  }
}

/**
 * Helper para asignar imágenes de forma segura con manejo de error (fallback)
 */
function setElementImage(selector, src, altText) {
  const img = document.querySelector(selector);
  if (!img) return;

  // Manejo de la ruta asignada o fallback si viene vacía
  img.src = src || DEFAULT_PLACEHOLDER;
  if (altText) img.alt = altText;

  // Evento onerror por si la ruta asignada rompe (404 / archivo inexistente)
  img.onerror = () => {
    img.onerror = null; // Previene bucles infinitos
    img.src = DEFAULT_PLACEHOLDER;
  };
}

/**
 * Vincula los enlaces de acción interactivas (Google Maps, WhatsApp, etc.)
 * @param {Object} data 
 */
export function renderActions(data) {
  // 1. Enlace a Google Maps
  if (data.location?.googleMapsUrl) {
    const mapBtn = document.querySelector('#location-map-link');
    if (mapBtn) {
      mapBtn.href = data.location.googleMapsUrl;
    }
  }

  // 2. Enlace de Confirmación por WhatsApp
  if (data.rsvp?.whatsappNumber) {
    const rsvpBtn = document.querySelector('#rsvp-btn');
    if (rsvpBtn) {
      const phone = data.rsvp.whatsappNumber.replace(/[^0-9]/g, ''); // Limpieza de caracteres no numéricos
      const message = encodeURIComponent(data.rsvp.whatsappPresetMessage || '¡Hola! Confirmo mi asistencia.');
      rsvpBtn.href = `https://wa.me/${phone}?text=${message}`;
    }
  }
}