# Hugo Lozano Gallardo - Portfolio Personal

Repositorio del portfolio profesional de Hugo Lozano Gallardo. Una aplicación web moderna, rápida y estética diseñada para mostrar mi trayectoria como desarrollador, mis proyectos personales y mi pasión por la tecnología.

## 🚀 Características Principales

- **Experiencia Fluida**: Transiciones suaves y consolidadas en toda la aplicación, incluyendo cambios de color, interacciones con botones y navegación.
- **Doble Tema Inteligente (Modo claro y oscuro)**: Sistema de cambio de tema con persistencia en `localStorage`, detección automática de preferencias del sistema.
- **Arquitectura Angular**: Desarrollado con **Angular** (Componentes Standalone y Signals) para una reactividad eficiente y un código limpio.
- **Formulario de Contacto Avanzado**: Integración completa de **Reactive Forms** con validaciones personalizadas, estados de carga y estilos dinámicos que se adaptan al tema visual.
- **Gestión de Proyectos**: Despliegue dinámico de proyectos mediante servicios dedicados y componentes reutilizables.

## 🛠️ Tecnologías y Herramientas

- **Core**: [Angular](https://angular.dev/) (v17+), TypeScript.
- **UI/UX**: [Bootstrap 5](https://getbootstrap.com/), CSS3 Custom Properties (Variables), Animaciones personalizadas.
- **Lógica**: Reactive Forms, Signals, Services (Singleton Pattern).
- **Desarrollo**: Angular CLI, VS Code.

## 🎨 Estética y Diseño

El proyecto utiliza una paleta de colores basada en tonos púrpura y violeta, seleccionada para transmitir creatividad y profesionalismo. Se ha puesto especial énfasis en:
- **Consolidación de estilos**: Una única "plantilla general" global que asegura que todos los botones, tarjetas y campos de texto se vean y se sientan iguales.
- **Modo Oscuro Corregido**: Estilos específicos para componentes complejos como desplegables y sombras, asegurando que no haya "roces" visuales.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/  # Home, Proyectos, Contacto, Nav, Footer
│   ├── services/    # ThemeService, ProjectService
│   ├── models/      # Interfaces (Project model)
│   ├── pipes/       # ToolListPipe para filtrado/formato
│   └── app.routes.ts # Sistema de rutas SPA
├── assets/          # Imágenes y recursos locales
└── styles.css       # Plantilla de estilos globales y temas
```

## 💻 Instalación y Desarrollo

1. **Clonar repositorio:**
   ```bash
   git clone https://github.com/22wito/portfolio.git
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Servidor local:**
   ```bash
   ng serve
   ```
   Accede a `http://localhost:4200/`.

## 👨‍💻 Sobre mí

Desarrollador enfocado en buscar soluciones reales mediante la **Inteligencia Artificial** y la **Automatización**. Mi objetivo es crear herramientas que faciliten la vida cotidiana, aplicando un equilibrio perfecto entre rendimiento técnico y utilidad práctica.

---
© 2026 - Hugo Lozano Gallardo
