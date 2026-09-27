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