# Motor de Invitaciones Digitales

Motor dinámico e interactivo para invitaciones digitales desarrollado en HTML5, CSS3 y JavaScript Vainilla (ES6+), impulsado por un sistema de datos desacoplado en formato JSON.

---

## 🏗️ Arquitectura del Proyecto

```text
invitaciones/
├── assets/
│   └── decor/             # Assets decorativos globales / placeholders reemplazables
├── events/                # Datos JSON de cada evento en particular (instancias)
├── shared/                # Lógica y estilos comunes reutilizables por todas las plantillas
│   ├── css/               # Hojas de estilo globales / reset / utilidades
│   └── js/                # Scripts del motor base (fetcher, validators, utils)
└── templates/             # Diseños de invitaciones (layouts / vistas)
    └── infantil-01/       # Plantilla base (estilo invitación Mía)

    ---

## 🚀 Cómo Ejecutar en Desarrollo

Dado que el proyecto utiliza `fetch()` para cargar datos dinámicos desde archivos JSON, es necesario ejecutarlo a través de un servidor HTTP local.

### VS Code (Live Server)
1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Hacer clic derecho sobre `templates/infantil-01/index.html`.
3. Seleccionar **Open with Live Server**.

---

## 📋 Schema del Archivo de Datos (`data.json`)

Cada evento dentro de `/events/<nombre-evento>/data.json` debe cumplir con la siguiente estructura de campos:

| Campo | Tipo | Obligatorio | Descripción / Formato |
| :--- | :--- | :--- | :--- |
| `meta.title` | String | Sí | Título para la pestaña del navegador. |
| `hero.badge` | String | Sí | Insignia superior (ej. `"¡Mis 3 añitos!"`). |
| `hero.name` | String | Sí | Nombre principal del agasajado/a. |
| `hero.subtitle` | String | Sí | Texto corto o fecha legible bajo el nombre. |
| `hero.avatarUrl` | String | Sí | URL/Path relativo de la foto de portada. |
| `hero.audioUrl` | String | No | URL/Path del archivo de música (`.mp3`). |
| `photos` | Array | Sí | Lista de rutas de fotos portrait (mínimo 4). |
| `location.dateText` | String | Sí | Fecha legible del evento. |
| `location.timeText` | String | Sí | Horario formateado. |
| `location.venue` | String | Sí | Nombre del lugar/salón. |
| `location.address` | String | Sí | Dirección física. |
| `location.googleMapsUrl` | String | Sí | Enlace completo a Google Maps. |
| `rsvp.whatsappNumber` | String | Sí | Número telefónico con código de país (sin `+` ni guiones). |
| `rsvp.whatsappPresetMessage`| String | Sí | Mensaje predeterminado codificado para WhatsApp. |
| `countdown.targetDateISO` | String | Sí | Fecha objetivo en formato estándar **ISO 8601** (`YYYY-MM-DDTHH:mm:ss`). |
| `closing.signature` | String | Sí | Texto o nombre de la firma final. |