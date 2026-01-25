# TheInterregnum - Guía de Uso y Mantenimiento

## 🚀 Inicio Rápido

### 1. Instalación

```bash
# Clonar o descargar el proyecto
cd TheInterregnum

# Instalar dependencias
npm install
```

### 2. Desarrollo

```bash
# Iniciar watch de SASS y servidor local
npm start

# O en terminales separadas:
npm run sass:watch
npm run serve
```

### 3. Compilación para Producción

```bash
npm run build
```

---

## 📁 Estructura de Carpetas Explicada

### `/assets/css/`

**Contenido**: Archivo CSS compilado

- **main.css**: CSS compilado de los archivos SASS + Bootstrap 5
- Es el archivo que se enlaza en el HTML
- Se genera automáticamente al compilar SASS

### `/assets/scss/`

**Contenido**: Archivos fuente SASS

```
scss/
├── main.scss                 # ← Importa TODO
│
├── abstracts/
│   ├── _variables.scss       # Colores, tipografía, espaciado
│   ├── _mixins.scss          # Funciones reutilizables
│   └── _index.scss           # Importa variables y mixins
│
├── base/
│   ├── _reset.scss           # Reset CSS
│   ├── _typography.scss      # Estilos de texto
│   └── _index.scss
│
├── components/
│   ├── _button.scss          # Componente botón (BEM)
│   ├── _article-card.scss    # Tarjeta de artículo (BEM)
│   ├── _category-card.scss   # Tarjeta de categoría (BEM)
│   └── _index.scss
│
├── layout/
│   ├── _header.scss          # Barra de navegación
│   ├── _footer.scss          # Pie de página
│   ├── _utilities.scss       # Clases helper
│   └── _index.scss
│
├── pages/
│   ├── _hero.scss            # Sección héroe
│   ├── _categories.scss      # Sección de categorías
│   ├── _articles.scss        # Sección de artículos
│   ├── _newsletter.scss      # Sección newsletter
│   └── _index.scss
│
├── themes/
│   ├── _theme.scss           # Temas de color, accesibilidad
│   └── _index.scss
│
└── vendors/
    ├── _bootstrap-override.scss  # Customizaciones de Bootstrap
    └── _index.scss
```

### `/assets/js/`

- **main.js**: JavaScript personalizado para interactividad
  - Navegación suave
  - Validación de formularios
  - Notificaciones
  - Load more artículos

---

## 🛠️ Cómo Editar Estilos

### Agregar un Nuevo Color

1. **Editar `assets/scss/abstracts/_variables.scss`:**

```scss
// Agregar la variable
$accent-color: #ff6b6b;
```

2. **Usarlo en cualquier archivo:**

```scss
.my-element {
  background-color: $accent-color;
}
```

### Crear un Nuevo Componente BEM

1. **Crear archivo en `assets/scss/components/_my-component.scss`:**

```scss
// Estructura BEM: Block Element Modifier
.my-component {
  padding: $spacing-md;
  background: white;
  border-radius: $border-radius-lg;
  transition: all 0.3s;

  // Element
  &__header {
    font-weight: bold;
    color: $primary-color;
  }

  &__content {
    padding: $spacing-md;
  }

  // Modifier
  &--featured {
    box-shadow: $shadow-lg;
    border: 2px solid $primary-color;
  }

  &--large {
    padding: $spacing-lg;
  }

  // Hover state
  &:hover {
    box-shadow: $shadow-xl;
  }
}
```

2. **Importar en `assets/scss/components/_index.scss`:**

```scss
@import "my-component";
```

3. **Usar en HTML:**

```html
<div class="my-component my-component--featured">
  <div class="my-component__header">Title</div>
  <div class="my-component__content">Content</div>
</div>
```

### Agregar Media Query

**Opción 1: Usando el mixin (recomendado)**

```scss
.article-card {
  font-size: 16px;

  @include respond-to("md") {
    font-size: 14px;
  }

  @include respond-to("sm") {
    font-size: 12px;
  }
}
```

**Opción 2: Media query manual**

```scss
@media (max-width: 768px) {
  .article-card {
    grid-template-columns: 1fr;
  }
}
```

---

## 🎨 Cambiar Colores de la Página

### Opción 1: Editar Variables SASS

**Archivo**: `assets/scss/abstracts/_variables.scss`

```scss
// Cambiar colores principales
$primary-color: #1a5490; // Nuevo color principal
$secondary-color: #2d5a3d; // Nuevo color secundario
$dark-color: #1a1a1a; // Nuevo color oscuro
```

Luego compilar SASS:

```bash
npm run sass:minify
```

### Opción 2: Editar CSS Directamente

**Archivo**: `assets/css/main.css`

Buscar `:root` y cambiar los valores CSS:

```css
:root {
  --primary-color: #1a5490;
  --secondary-color: #2d5a3d;
  /* ... más variables */
}
```

---

## 📝 Agregar Nuevo Artículo

1. **En `index.html`, copiar una tarjeta de artículo:**

```html
<article class="article-card">
  <div class="article-card__image-wrapper">
    <img
      src="https://via.placeholder.com/400x250"
      alt="Descripción"
      class="article-card__image"
    />
    <span class="article-card__category article-card__category--economics">
      Economics
    </span>
  </div>
  <div class="article-card__content">
    <h3 class="article-card__title">Título del Artículo</h3>
    <p class="article-card__excerpt">Descripción corta del artículo...</p>
    <div class="article-card__meta">
      <span class="article-card__author">Por Autor</span>
      <span class="article-card__date">Jan 18, 2026</span>
    </div>
    <a href="#" class="btn btn-sm btn-primary article-card__btn">
      Read More →
    </a>
  </div>
</article>
```

2. **Personalizar:**
   - `src`: URL de imagen
   - `alt`: Descripción de imagen
   - Categoría: politics, economics, trade, finance
   - Título, descripción, autor, fecha
   - Link: href

---

## 🎯 Personalizar el Sitio

### 1. Cambiar Nombre/Título

**Archivo**: `index.html`

```html
<title>TheInterregnum | Global Politics & Economics</title>
<meta name="description" content="Nuevo descripción" />

<a class="navbar-brand" href="#home">
  <span class="header__brand-text">Nuevo Nombre</span>
</a>
```

### 2. Cambiar Contenido del Hero

**Archivo**: `index.html` → `<section class="hero">`

```html
<h1 class="hero__title">Nuevo Título Principal</h1>
<p class="hero__subtitle">Nueva descripción...</p>
```

### 3. Cambiar Categorías

**Archivo**: `index.html` → `<section class="categories">`

Editar o agregar nuevas tarjetas de categoría.

### 4. Cambiar Footer

**Archivo**: `index.html` → `<footer class="footer">`

Editar información, links sociales, copyright, etc.

---

## 🔍 Debugging y Troubleshooting

### Problema: Los estilos no se actualizan

**Solución**:

1. Compilar SASS: `npm run sass:minify`
2. Limpiar caché del navegador (Ctrl+Shift+R)
3. Verificar que el archivo CSS está actualizado

### Problema: Mobile responsive no funciona

**Verificar**:

1. Meta viewport en `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

2. Media queries en CSS/SASS
3. Usar DevTools (F12) → Toggle device toolbar

### Problema: JavaScript no funciona

**Verificar**:

1. Bootstrap JS cargado: `<script src="...bootstrap.bundle.min.js"></script>`
2. main.js cargado: `<script src="./assets/js/main.js"></script>`
3. Abrir consola (F12) y buscar errores

### Problema: Navbar no responde en móvil

**Verificar**:

1. Bootstrap CSS y JS incluidos
2. Atributo `data-bs-toggle="collapse"` en botón
3. ID `id="navbarNav"` coincide en collapse

---

## 📱 Testing Responsivo

### Breakpoints para Probar

- **Mobile S**: 320px
- **Mobile M**: 375px
- **Mobile L**: 425px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Desktop L**: 1440px

### Chrome DevTools

1. Abrir DevTools: F12
2. Click icono de dispositivo (esquina arriba izquierda)
3. Seleccionar dispositivo o dimensiones personalizadas

---

## 🚀 Deployment

### Antes de Publicar

```bash
# Compilar SASS con minificación
npm run build

# Verificar que main.css está actualizado
# Verificar que todos los links funcionan
# Probar en múltiples navegadores y dispositivos
```

### Opciones de Hosting

1. **GitHub Pages** (gratuito)
2. **Netlify** (gratuito con dominio propio)
3. **Vercel** (gratuito)
4. **Servidor propio** (VPS, shared hosting)

### Checklist Pre-Publicación

- ✅ SASS compilado
- ✅ HTML validado
- ✅ CSS validado
- ✅ Imágenes optimizadas
- ✅ Links funcionales
- ✅ Mobile responsivo
- ✅ Lighthouse > 90
- ✅ Accesibilidad (WCAG AA)
- ✅ SEO básico (meta tags)

---

## 📚 Referencia Rápida de Clases

### Componentes

- `.btn btn-primary` - Botón primario
- `.btn btn-secondary` - Botón secundario
- `.btn btn-outline-primary` - Botón outline
- `.article-card` - Tarjeta de artículo
- `.category-card` - Tarjeta de categoría

### Utilidades Spacing

- `.mt-3` - Margin top
- `.mb-3` - Margin bottom
- `.p-3` - Padding

### Utilidades Texto

- `.text-center` - Centrar texto
- `.text-muted` - Texto gris
- `.text-primary` - Texto primario

### Componentes Bootstrap

- `.navbar` - Barra de navegación
- `.modal` - Modal
- `.form-control` - Input
- `.form-label` - Etiqueta
- `.alert` - Alerta
- `.card` - Tarjeta

---

## 🔗 Enlaces Útiles

- **Documentación Técnica**: TECHNICAL.md
- **README General**: README.md
- **Bootstrap Docs**: https://getbootstrap.com/
- **SASS Guide**: https://sass-lang.com/guide
- **BEM Methodology**: http://getbem.com/
- **W3C Validator**: https://validator.w3.org/

---

## 🎓 Aprendizaje

### Conceptos Principales

1. **HTML5 Semántico**: Usar etiquetas correctas
2. **CSS BEM**: Nomenclatura y reutilización
3. **SASS 7-1**: Organización de código
4. **Responsive Design**: Mobile first
5. **Bootstrap 5**: Componentes y utilidades
6. **Accesibilidad**: WCAG guidelines

### Próximos Pasos

- [ ] Agregar base de datos de artículos
- [ ] Implementar sistema de comentarios
- [ ] Agregar búsqueda
- [ ] Dark mode dinámico
- [ ] Notificaciones push (PWA)
- [ ] Sitemap y RSS feed
- [ ] Analytics

---

## 💬 Contacto y Soporte

Para preguntas o sugerencias sobre TheInterregnum:

- Crear un issue en GitHub
- Contactar al equipo de desarrollo
- Revisar la documentación técnica

---

**Última actualización**: Enero 2026  
**Versión**: 1.0.0  
**Licencia**: MIT
