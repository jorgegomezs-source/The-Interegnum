# CHANGELOG - TheInterregnum

Todos los cambios notables en este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/)
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-01-25

### Agregado

- ✨ Implementación completa de HTML5 semántico
  - Header con navegación sticky
  - Hero section con animaciones
  - Secciones de categorías y artículos
  - Newsletter signup
  - Footer con múltiples columnas
  - Modal para suscripción

- 🎨 Arquitectura SASS 7-1 completa
  - Abstracts (variables, mixins)
  - Base (reset, tipografía)
  - Components (botones, cards BEM)
  - Layout (header, footer, utilities)
  - Pages (hero, categorías, artículos, newsletter)
  - Themes (variaciones, accesibilidad)
  - Vendors (customizaciones Bootstrap)

- 🧩 Componentes BEM Metodología
  - .article-card (con 10 elementos)
  - .category-card (con 4 elementos)
  - .button (con múltiples modificadores)
  - .header (con elementos de navegación)
  - .footer (con grid responsive)
  - .hero (con animaciones)
  - .newsletter (con formulario)

- 📱 Diseño Responsivo Completo
  - 6 breakpoints (xs, sm, md, lg, xl, xxl)
  - Flexbox y CSS Grid
  - Mobile-first approach
  - Media queries para todas las secciones
  - Navbar collapse en móvil

- 🥾 Integración Bootstrap 5
  - Componentes: Cards, Modal, Navbar, Buttons
  - Formularios con validación
  - Alerts y notificaciones
  - Customizaciones completas

- 🛠️ JavaScript Personalizado
  - Navegación suave y activa
  - Validación de formularios
  - Sistema de notificaciones
  - Load more artículos
  - Utilidades (throttle, debounce)

- ♿ Accesibilidad
  - HTML5 semántico
  - ARIA labels
  - Focus visible
  - High contrast support
  - Prefers-reduced-motion

- 📚 Documentación Completa
  - README.md (guía general)
  - TECHNICAL.md (documentación técnica)
  - USAGE.md (guía de uso)
  - CONFIG.md (variables)
  - CHANGELOG.md (esta versión)

### Estructura del Proyecto

```
TheInterregnum/
├── index.html
├── package.json
├── README.md
├── TECHNICAL.md
├── USAGE.md
├── CONFIG.md
├── CHANGELOG.md
├── .editorconfig
├── assets/
│   ├── css/main.css (compilado)
│   ├── scss/
│   │   ├── main.scss
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── themes/
│   │   └── vendors/
│   └── js/main.js
└── node_modules/
```

### Dependencias

- bootstrap: ^5.3.8
- sass: ^1.69.5
- live-server: ^1.2.2

### Colores Principales

- Primary: #1a5490
- Secondary: #2d5a3d
- Dark: #1a1a1a
- Light: #f8f9fa

### Tipografía

- Base: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Heading: Georgia, serif
- Size Base: 16px

### Requisitos Cumplidos

✅ HTML5 semántico y buenas prácticas
✅ Metodología BEM
✅ SASS con estructura 7-1
✅ Layout y modelo de cajas
✅ Interfaz adaptable (responsiva)
✅ Componentes Bootstrap 5
✅ Código limpio, modular y comentado

---

## [Versiones Futuras]

### Planeado para v1.1.0

- [ ] Integración de backend
- [ ] Base de datos de artículos
- [ ] Sistema de búsqueda
- [ ] Categorías dinámicas
- [ ] Dark mode dinámico
- [ ] Sistema de comentarios
- [ ] Autenticación de usuarios

### Planeado para v2.0.0

- [ ] PWA (Progressive Web App)
- [ ] Notificaciones push
- [ ] Caché offline
- [ ] App shell architecture
- [ ] API REST completa
- [ ] Sistema de administración

### En Consideración

- [ ] Sitemap XML
- [ ] RSS Feed
- [ ] Google Analytics
- [ ] Soporte multiidioma
- [ ] Editor visual para artículos
- [ ] Media library

---

## Notas de Desarrollo

### Decisiones Técnicas

1. **SASS 7-1**: Elegido para mejor organización en proyectos grandes
2. **BEM**: Metodología clara y mantenible para CSS
3. **Bootstrap 5**: Componentes robustos y confiables
4. **Vanilla JS**: Sin dependencias innecesarias
5. **Mobile-First**: Mejor experiencia en móviles

### Conocimientos Requisitos

- HTML5 y semántica
- CSS3 y SASS
- Responsive design
- JavaScript básico
- Git y GitHub

### Herramientas Usadas

- Visual Studio Code
- Chrome DevTools
- Sass compiler
- Live Server
- npm package manager

---

**Última actualización**: 25 de Enero de 2026  
**Versión Actual**: 1.0.0  
**Licencia**: MIT
