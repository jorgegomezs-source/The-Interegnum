# TheInterregnum - Global Politics & Economics Magazine

## 📰 Descripción del Proyecto

TheInterregnum es una página web moderna y responsiva para la publicación de artículos sobre política global y economía internacional. Implementa las mejores prácticas de desarrollo web con HTML5 semántico, CSS modular con SASS, y componentes de Bootstrap 5.

## ✨ Características Principales

### 📱 Diseño Responsivo

- Interfaz adaptable a todos los dispositivos (móvil, tablet, escritorio)
- Media queries implementadas para diferentes breakpoints
- Flexbox y CSS Grid para layouts flexibles

### 🎨 Arquitectura SASS 7-1

```
scss/
├── abstracts/      # Variables y Mixins
├── base/           # Reset y Tipografía
├── components/     # Componentes BEM (Cards, Botones)
├── layout/         # Header, Footer, Grid
├── pages/          # Estilos de secciones (Hero, Articles)
├── themes/         # Variaciones de tema
└── vendors/        # Customizaciones de Bootstrap
```

### 🔧 Metodología BEM

Todos los componentes siguen la metodología BEM (Block, Element, Modifier):

- `.article-card` (Block)
- `.article-card__image` (Element)
- `.article-card--featured` (Modifier)

### 🥾 Componentes Bootstrap 5

- **Cards** - Para mostrar artículos
- **Modal** - Para suscripción a newsletter
- **Navbar** - Navegación responsiva
- **Botones** - Con estilos personalizados
- **Forms** - Inputs y validación

### ♿ Accesibilidad

- HTML5 semántico con etiquetas apropiadas
- ARIA labels y roles
- Focus states visibles
- Alto contraste en textos
- Soporte para lectores de pantalla

### 🚀 Rendimiento

- CSS minificado
- Imágenes optimizadas
- Smooth scrolling nativo
- Transiciones eficientes

## 📋 Requisitos Cumplidos

✅ **Implementación semántica de HTML5**

- Estructura semántica con `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Meta tags apropiadas
- Atributos ARIA

✅ **Metodología BEM**

- Aplicado en todos los componentes
- Nomenclatura consistente
- Reutilización de código

✅ **SASS con estructura 7-1**

- 7 carpetas siguiendo el patrón
- Variables, mixins, funciones
- Código modular y mantenible

✅ **Layout y modelo de cajas**

- Flexbox para componentes
- CSS Grid para layouts
- Box model bien manejado

✅ **Interfaz adaptable (Responsive)**

- Media queries para 6 breakpoints (xs, sm, md, lg, xl, xxl)
- Mobile-first approach
- Flexbox y Grid responsivos

✅ **Componentes Bootstrap 5**

- Cards, Modal, Navbar, Buttons, Forms
- Personalizaciones en vendors/\_bootstrap-override.scss

✅ **Código limpio y modular**

- Comentarios descriptivos
- Código bien organizado
- Separación de responsabilidades

## 📂 Estructura del Proyecto

```
TheInterregnum/
├── index.html                 # Página principal
├── package.json              # Dependencias del proyecto
├── assets/
│   ├── css/
│   │   └── main.css         # CSS compilado
│   ├── scss/
│   │   ├── main.scss        # SASS principal
│   │   ├── abstracts/
│   │   │   ├── _variables.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _index.scss
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   └── _index.scss
│   │   ├── components/
│   │   │   ├── _button.scss
│   │   │   ├── _article-card.scss
│   │   │   ├── _category-card.scss
│   │   │   └── _index.scss
│   │   ├── layout/
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _utilities.scss
│   │   │   └── _index.scss
│   │   ├── pages/
│   │   │   ├── _hero.scss
│   │   │   ├── _categories.scss
│   │   │   ├── _articles.scss
│   │   │   ├── _newsletter.scss
│   │   │   └── _index.scss
│   │   ├── themes/
│   │   │   ├── _theme.scss
│   │   │   └── _index.scss
│   │   └── vendors/
│   │       ├── _bootstrap-override.scss
│   │       └── _index.scss
│   └── js/
│       └── main.js          # JavaScript personalizado
└── README.md                # Este archivo
```

## 🚀 Cómo Ejecutar

### Requisitos

- Node.js y npm instalados
- Navegador web moderno

### Instalación

1. **Instalar dependencias:**

```bash
npm install
```

2. **Compilar SASS (opcional):**

```bash
# Si deseas compilar SASS a CSS, necesitas sass o node-sass
npm install -g sass
sass assets/scss/main.scss assets/css/main.css
# O en modo watch:
sass --watch assets/scss:assets/css
```

3. **Abrir en navegador:**

```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Usar un servidor local
npx live-server
```

## 🎨 Paleta de Colores

| Nombre       | Código    | Uso                         |
| ------------ | --------- | --------------------------- |
| Primary      | `#1a5490` | Links, botones principales  |
| Primary Dark | `#0d3a5c` | Hover states                |
| Secondary    | `#2d5a3d` | Acentos, categoría política |
| Light        | `#f8f9fa` | Fondos claros               |
| Dark         | `#1a1a1a` | Texto principal             |
| Trade        | `#c2a040` | Categoría de comercio       |
| Finance      | `#5c3d3d` | Categoría de finanzas       |

## 📝 Variables SASS Principales

```scss
// Tipografía
$font-family-base: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
$font-family-heading: "Georgia", serif;
$font-size-base: 16px;

// Spacing
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;

// Breakpoints
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
```

## 🔄 Media Queries Implementadas

- **XS** (320px+): Móviles pequeños
- **SM** (576px+): Móviles grandes
- **MD** (768px+): Tablets
- **LG** (992px+): Desktops pequeños
- **XL** (1200px+): Desktops
- **XXL** (1400px+): Desktops grandes

## 📚 Secciones de la Página

### 1. **Header/Navegación**

- Logo "TheInterregnum"
- Menú responsivo con hamburguesa en móvil
- Links de navegación suave

### 2. **Hero Section**

- Título principal con gradiente
- Subtítulo descriptivo
- Botón CTA para suscripción
- Animaciones de fondo

### 3. **Categorías**

- 4 tarjetas de categorías
- Iconos y hover effects
- Grid responsivo (4/3/2/1 columnas)

### 4. **Artículos Destacados**

- Grid de 6 artículos
- Imágenes con overlay de categoría
- Meta información (autor, fecha)
- Cards con hover effect

### 5. **Newsletter**

- Formulario de suscripción
- Validación de email
- Diseño responsivo
- Modal complementario

### 6. **Footer**

- 4 columnas con información
- Links sociales
- Copyright y créditos
- Responsive en móvil

## 🛠️ Mixins SASS Disponibles

```scss
@include respond-to("md") // Media queries
  @include flex-center // Centar con flexbox
  @include flex-between // Space-between
  @include grid(3, $spacing-lg) // CSS Grid
  @include hover-lift // Efecto de elevación
  @include transition(all) // Transiciones
  @include focus-outline // Estilos de focus
  @include text-truncate // Truncar texto
  @include text-clamp(2); // Limitar líneas
```

## 📱 Ejemplos de Componentes

### Botón Primario

```html
<button class="btn btn-primary">Click Me</button>
```

### Tarjeta de Artículo

```html
<article class="article-card">
  <div class="article-card__image-wrapper">
    <img src="..." class="article-card__image" />
    <span class="article-card__category article-card__category--trade"
      >Trade</span
    >
  </div>
  <div class="article-card__content">
    <h3 class="article-card__title">...</h3>
    <p class="article-card__excerpt">...</p>
  </div>
</article>
```

## 🎯 Mejoras Futuras

- [ ] Dark mode toggle funcional
- [ ] Sistema de comentarios
- [ ] Busqueda de artículos
- [ ] Filtros por categoría
- [ ] Sistema de paginación
- [ ] Integración con CMS
- [ ] Soporte para múltiples idiomas
- [ ] Progressive Web App (PWA)
- [ ] Sistema de notificaciones push

## ✅ Testing y Validación

- ✓ Validación HTML5 (W3C)
- ✓ Compatibilidad CSS (Autoprefixer)
- ✓ Responsive Design (Mobile First)
- ✓ Accessibilidad (WCAG 2.1 AA)
- ✓ Performance (Lighthouse)

## 📄 Licencia

Este proyecto es de código abierto. Puedes usarlo libremente para propósitos educativos y comerciales.

## 👨‍💻 Desarrollo

Desarrollado con:

- HTML5
- SASS/CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- BEM Methodology

## 📞 Contacto

Para más información sobre TheInterregnum o solicitar cambios, contáctanos a través del formulario en la página de contacto.

---

**TheInterregnum** - Entendiendo la política global y la economía internacional. 🌍📊
