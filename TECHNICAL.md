# TheInterregnum - Documentación Técnica Detallada

## 📋 Tabla de Contenidos

1. [Arquitectura del Proyecto](#arquitectura)
2. [Estructura SASS 7-1](#estructura-sass)
3. [Componentes BEM](#componentes-bem)
4. [Guía de Estilos](#guía-de-estilos)
5. [Responsive Design](#responsive-design)
6. [JavaScript](#javascript)
7. [Mejores Prácticas](#mejores-prácticas)

---

## 🏗️ Arquitectura del Proyecto {#arquitectura}

### Visión General

TheInterregnum utiliza una arquitectura modular basada en 7-1 de SASS, combinada con HTML5 semántico y componentes de Bootstrap 5. El proyecto está diseñado para ser:

- **Mantenible**: Código modular y bien organizado
- **Escalable**: Fácil de agregar nuevas características
- **Accesible**: Cumple con estándares WCAG 2.1 AA
- **Responsivo**: Mobile-first approach
- **Performante**: Optimizado para velocidad

### Estructura de Directorios

```
TheInterregnum/
├── index.html                    # Página HTML principal
├── package.json                  # Configuración del proyecto
├── README.md                     # Documentación general
├── TECHNICAL.md                  # Esta documentación
├── assets/
│   ├── css/
│   │   └── main.css             # CSS compilado (Bootstrap + Custom)
│   ├── scss/                    # Archivos SASS (7-1 pattern)
│   │   ├── main.scss            # SASS principal - importa todos los archivos
│   │   ├── abstracts/           # Variables, funciones, mixins
│   │   ├── base/                # Tipografía, reset
│   │   ├── components/          # Componentes reutilizables (BEM)
│   │   ├── layout/              # Header, footer, contenedores
│   │   ├── pages/               # Estilos de secciones específicas
│   │   ├── themes/              # Variaciones de tema
│   │   └── vendors/             # Customizaciones de librerías externas
│   └── js/
│       └── main.js              # JavaScript personalizado
└── node_modules/               # Dependencias del proyecto
```

---

## 🎨 Estructura SASS 7-1 {#estructura-sass}

### 1. **ABSTRACTS** (`abstracts/`)

Contiene variables, funciones y mixins reutilizables sin compilar CSS.

#### `_variables.scss`

```scss
// Variables de color, tipografía, espaciado, etc.
$primary-color: #1a5490;
$spacing-md: 16px;
$font-family-base: "Segoe UI", sans-serif;
```

#### `_mixins.scss`

```scss
@mixin respond-to($breakpoint) { ... }    // Media queries
@mixin flex-center { ... }                 // Flexbox utilities
@mixin transition($prop, $duration) { ... } // Transiciones
@mixin text-clamp($lines) { ... }         // Truncar texto
```

**Uso**: Reutilizar código CSS común y mantener valores consistentes.

---

### 2. **BASE** (`base/`)

Estilos fundamentales: reset, tipografía y elementos HTML base.

#### `_reset.scss`

- Reset de márgenes y paddings
- Box-sizing border-box
- Estilos base de html y body
- Eliminación de estilos por defecto

#### `_typography.scss`

- Estilos de encabezados (h1-h6)
- Párrafos y enlaces
- Listas ordenadas y desordenadas
- Blockquotes y código

**Uso**: Establece el tono visual base del sitio.

---

### 3. **COMPONENTS** (`components/`)

Componentes reutilizables usando metodología BEM.

#### `_button.scss` - Componente Botón

```scss
.btn                        // Block
  &.btn-primary            // Modifier
  &:hover                  // State
  &__text                  // Element (si fuera necesario)
```

Estilos para:

- Botones primarios y secundarios
- Botones outline
- Estados hover, active, disabled
- Variantes de tamaño (sm, lg)

#### `_article-card.scss` - Componente Tarjeta de Artículo

Estructura BEM completa:

```scss
.article-card              // Block
  &__image-wrapper         // Element
  &__image                 // Element
  &__category              // Element
    &--trade              // Modifier
    &--politics           // Modifier
  &__title                 // Element
  &__excerpt               // Element
  &__meta                  // Element
  &__author                // Element
  &__date                  // Element
  &__btn                   // Element
```

#### `_category-card.scss` - Componente Tarjeta de Categoría

Tarjetas para categorías con iconos y efectos hover.

**Metodología BEM**: Block-Element-Modifier

- **Block**: Componente independiente (`.article-card`)
- **Element**: Parte de un block (`.article-card__title`)
- **Modifier**: Variante de un block/element (`.article-card__category--trade`)

**Beneficios**:

- ✅ Fácil de mantener
- ✅ No hay conflictos de nombres
- ✅ Código predecible
- ✅ Componentes reutilizables

---

### 4. **LAYOUT** (`layout/`)

Estructura general de la página: header, footer, sistemas de grid.

#### `_header.scss`

- Navbar sticky
- Logo y branding
- Menú de navegación
- Responsive hamburger menu

#### `_footer.scss`

- Grid de 4 columnas (responsive)
- Información de empresa
- Links sociales
- Copyright

#### `_utilities.scss`

- Contenedores
- Sistemas de grid y flexbox
- Utilidades de espaciado
- Clases helper

---

### 5. **PAGES** (`pages/`)

Estilos específicos para cada sección principal.

#### `_hero.scss`

- Hero section con gradiente
- Animaciones de fondo (flotan)
- Título y subtítulo
- Botón CTA

#### `_categories.scss`

- Grid de 4 categorías (responsive)
- Layout y espaciado

#### `_articles.scss`

- Grid de 3 columnas (responsive)
- Espaciado y márgenes

#### `_newsletter.scss`

- Sección de suscripción
- Formulario responsivo
- Estilos de inputs

---

### 6. **THEMES** (`themes/`)

Variaciones de tema y modos visuales.

#### `_theme.scss`

- Variables de tema light/dark
- Print styles para impresión
- Accesibilidad (prefers-reduced-motion)
- High contrast mode

```scss
[data-theme='light'] { ... }
[data-theme='dark'] { ... }
@media (prefers-reduced-motion: reduce) { ... }
```

---

### 7. **VENDORS** (`vendors/`)

Customizaciones de librerías externas (Bootstrap).

#### `_bootstrap-override.scss`

- Overrides de colores de Bootstrap
- Estilos personalizados de modales
- Customización de formularios
- Ajustes de navbar y pagination

**Principio**: Customizar, no reinventar. Usar Bootstrap 5 como base.

---

## 🧩 Componentes BEM {#componentes-bem}

### Nomenclatura

```
.block__element--modifier
```

### Ejemplos en el Proyecto

#### 1. Componente Article Card

```html
<article class="article-card">
  <div class="article-card__image-wrapper">
    <img src="..." class="article-card__image" />
    <span class="article-card__category article-card__category--economics">
      Economics
    </span>
  </div>
  <div class="article-card__content">
    <h3 class="article-card__title">Title</h3>
    <p class="article-card__excerpt">Excerpt...</p>
    <div class="article-card__meta">
      <span class="article-card__author">Author</span>
      <span class="article-card__date">Date</span>
    </div>
    <a href="#" class="btn btn-primary article-card__btn">Read More</a>
  </div>
</article>
```

#### 2. Componente Header

```html
<header class="header">
  <nav class="navbar navbar-expand-lg header__navbar">
    <a class="navbar-brand header__brand" href="#home">
      <span class="header__brand-text">TheInterregnum</span>
    </a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto header__menu">
        <li class="nav-item header__menu-item">
          <a class="nav-link header__menu-link" href="#home">Home</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

### Ventajas de BEM

1. **Previsibilidad**: El CSS es predecible
2. **Reutilización**: Componentes reutilizables
3. **Mantenibilidad**: Fácil de actualizar
4. **Escalabilidad**: Funciona para proyectos grandes
5. **Documentación**: El código es autodocumentado

---

## 🎨 Guía de Estilos {#guía-de-estilos}

### Paleta de Colores

| Nombre        | Hex       | Uso                     |
| ------------- | --------- | ----------------------- |
| Primary       | `#1a5490` | Links, botones, acentos |
| Primary Dark  | `#0d3a5c` | Hover states            |
| Primary Light | `#2a7bc9` | Secondary text          |
| Secondary     | `#2d5a3d` | Acentos alternativos    |
| Dark          | `#1a1a1a` | Texto principal         |
| Light         | `#f8f9fa` | Fondos claros           |
| Gray          | `#6c757d` | Texto secundario        |

### Tipografía

- **Base Font**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Heading Font**: Georgia, serif
- **Base Size**: 16px
- **Line Height**: 1.5

### Espaciado (8px base)

- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-xxl`: 48px
- `--spacing-xxxl`: 64px

### Sombras

```scss
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.18);
```

### Border Radius

```scss
--border-radius-sm: 4px;
--border-radius-md: 8px;
--border-radius-lg: 12px;
--border-radius-xl: 16px;
```

---

## 📱 Responsive Design {#responsive-design}

### Breakpoints

```scss
// Mobile First Approach
$breakpoint-xs: 320px; // Mobile pequeños
$breakpoint-sm: 576px; // Móviles grandes
$breakpoint-md: 768px; // Tablets
$breakpoint-lg: 992px; // Desktops pequeños
$breakpoint-xl: 1200px; // Desktops
$breakpoint-xxl: 1400px; // Desktops grandes
```

### Mixin de Media Queries

```scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == "md" {
    @media (min-width: $breakpoint-md) {
      @content;
    }
  }
  // ... más breakpoints
}

// Uso:
.article-card {
  display: block;

  @include respond-to("md") {
    display: grid;
  }
}
```

### Grillas Responsivas

```scss
// Articles Grid
.articles__grid {
  @include grid(3, $spacing-lg); // 3 columnas por defecto

  @include respond-to("lg") {
    grid-template-columns: repeat(2, 1fr); // 2 en tablets
  }

  @include respond-to("md") {
    grid-template-columns: 1fr; // 1 en móviles
  }
}
```

### Mobile Menu

El navbar de Bootstrap se colapsa automáticamente en pantallas pequeñas:

```html
<button
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
>
  <span class="navbar-toggler-icon"></span>
</button>
```

---

## 📜 JavaScript {#javascript}

### Funcionalidades Implementadas

#### 1. **Navegación Activa**

```javascript
function initializeNavigation() {
  // Actualiza clase .active en nav links mientras scrolleas
  // Smooth scroll en links internos
}
```

#### 2. **Formulario de Newsletter**

```javascript
function initializeNewsletterForm() {
  // Valida email
  // Envía datos
  // Muestra notificación de éxito
}
```

#### 3. **Load More Articles**

```javascript
function initializeLoadMoreButton() {
  // Simula carga de más artículos
  // Muestra feedback al usuario
}
```

#### 4. **Notificaciones**

```javascript
function showNotification(message, type = "info") {
  // Crea notificación temporal
  // Se auto-cierra después de 5 segundos
}
```

### Utilidades JavaScript

#### Throttle - Limita ejecución frecuente

```javascript
window.addEventListener(
  "scroll",
  throttle(() => {
    // Se ejecuta máximo cada 100ms
  }, 100),
);
```

#### Debounce - Retrasa ejecución

```javascript
window.addEventListener(
  "resize",
  debounce(() => {
    // Se ejecuta 300ms después de dejar de redimensionar
  }, 300),
);
```

#### isInViewport - Detecta si elemento es visible

```javascript
if (isInViewport(element)) {
  // El elemento está visible en pantalla
}
```

### Integración con Bootstrap

```javascript
// Bootstrap Modal
const modal = new bootstrap.Modal(document.getElementById("newsletterModal"));
modal.show();
modal.hide();

// Collapse
const collapse = new bootstrap.Collapse(element);
```

---

## ✅ Mejores Prácticas {#mejores-prácticas}

### HTML

- ✅ Usar etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- ✅ Atributos alt en imágenes
- ✅ aria-labels para accesibilidad
- ✅ Estructura de headings lógica (h1 > h2 > h3)
- ✅ IDs únicos para elementos interactivos

### CSS/SASS

- ✅ Usar variables para valores reutilizables
- ✅ Usar mixins para código repetido
- ✅ Mantener especificidad baja
- ✅ Evitar !important (salvo en casos excepcionales)
- ✅ Comentarios descriptivos

### JavaScript

- ✅ Event delegation para mejor rendimiento
- ✅ Throttle/debounce para eventos frecuentes
- ✅ Separación de concerns (funciones pequeñas)
- ✅ Manejo de errores
- ✅ Código defensivo

### Rendimiento

- ✅ CSS minificado
- ✅ JavaScript modular
- ✅ Lazy loading de imágenes (cuando sea aplicable)
- ✅ Usar CSS Grid/Flexbox en lugar de floats
- ✅ Prefetch de recursos críticos

### Accesibilidad (WCAG 2.1 AA)

- ✅ Contraste de colores adecuado
- ✅ Focus visible en todos los elementos interactivos
- ✅ Soporte para navegación por teclado
- ✅ ARIA labels donde sea necesario
- ✅ Respeto a `prefers-reduced-motion`

---

## 🔧 Configuración y Compilación

### Instalar Dependencias

```bash
npm install
```

### Compilar SASS

```bash
# One-time compilation
npm run sass

# Watch mode
npm run sass:watch

# Minified production build
npm run sass:minify
```

### Scripts Disponibles

```json
{
  "sass": "sass assets/scss:assets/css",
  "sass:watch": "sass --watch assets/scss:assets/css",
  "sass:minify": "sass --style=compressed assets/scss/main.scss assets/css/main.css",
  "start": "npm run sass:watch",
  "build": "npm run sass:minify",
  "serve": "live-server"
}
```

---

## 📊 Estructura de Importación

El archivo `main.scss` importa en este orden:

1. **Abstracts** - Variables y mixins (sin CSS)
2. **Base** - Reset y tipografía (estilos base)
3. **Components** - Componentes BEM (elementos reutilizables)
4. **Layout** - Header, footer, contenedores
5. **Pages** - Estilos de secciones específicas
6. **Themes** - Variaciones y modos
7. **Vendors** - Customizaciones de Bootstrap

**¿Por qué este orden?**

- Las variables se definen primero para poder ser usadas
- El reset y tipografía base se aplica antes de los componentes
- Los componentes se definen antes de los layouts
- Los layouts se definen antes de las páginas específicas
- Las customizaciones externas van al final

---

## 🐛 Debugging

### Herramientas Recomendadas

- Chrome DevTools (F12)
- SASS debug en terminal: `sass --watch assets/scss:assets/css --verbose`
- Validator W3C para HTML

### Comandos Útiles

```bash
# Ver estructura de carpetas
tree /f /s assets/

# Compilar SASS con debug
sass --watch assets/scss:assets/css --style=expanded

# Minificar para producción
sass --style=compressed assets/scss/main.scss assets/css/main.css
```

---

## 📚 Recursos Adicionales

- [SASS Documentation](https://sass-lang.com/)
- [BEM Methodology](http://getbem.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Última actualización**: Enero 2026
**Versión**: 1.0.0
