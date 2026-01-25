# 📝 Guía: Agregar Nuevo Artículo

## 🎯 Resumen Rápido

Para agregar un artículo necesitas:

1. **Crear una nueva página HTML** para el artículo (con contenido)
2. **Agregar la tarjeta** en el index.html que apunte a esa página

---

## 📋 PASO 1: Crear la Página del Artículo

### 1.1 Crear nuevo archivo HTML

Crea un archivo llamado **`articulo-ejemplo.html`** en la carpeta raíz del proyecto.

**Ubicación**: `c:\Users\yop\Documents\Modulo 3\TheInterregnum\articulo-ejemplo.html`

### 1.2 Copiar el template base

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título del Artículo | TheInterregnum</title>
    <meta
      name="description"
      content="Descripción breve del artículo para SEO"
    />
    <meta name="author" content="Nombre del Autor" />
    <meta name="date" content="2026-01-25" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- Main CSS -->
    <link rel="stylesheet" href="./assets/css/main.css" />
  </head>

  <body>
    <!-- HEADER/NAVBAR (igual que en index.html) -->
    <header class="header">
      <nav class="navbar navbar-expand-lg header__navbar">
        <div class="container">
          <a class="navbar-brand header__brand" href="index.html">
            <span class="header__brand-text">TheInterregnum</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link header__menu-link" href="index.html#home"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link header__menu-link"
                  href="index.html#categories"
                  >Categories</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link header__menu-link" href="index.html#articles"
                  >Articles</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link header__menu-link"
                  href="#newsletter"
                  data-bs-toggle="modal"
                  data-bs-target="#newsletterModal"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- CONTENIDO DEL ARTÍCULO -->
    <main class="article-page">
      <!-- Hero pequeño del artículo -->
      <section class="article-page__hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="article-page__meta">
                <span
                  class="article-page__category article-page__category--economics"
                >
                  Economics
                </span>
                <span class="article-page__date">January 25, 2026</span>
              </div>
              <h1 class="article-page__title">Título Completo del Artículo</h1>
              <p class="article-page__subtitle">
                Subtítulo o descripción breve que engancha al lector...
              </p>
              <div class="article-page__author-info">
                <span class="article-page__author-name">Por Juan Pérez</span>
                <span class="article-page__reading-time">Lectura: 5 min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Imagen destacada (opcional) -->
      <section class="article-page__image-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Imagen del artículo"
                class="article-page__featured-image"
              />
              <p class="article-page__image-caption">
                Descripción de la imagen (opcional)
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contenido del artículo -->
      <section class="article-page__content">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <article class="article-page__body">
                <h2>Introducción</h2>
                <p>
                  Este es el párrafo introductorio del artículo. Aquí estableces
                  el contexto y explicas por qué el lector debería importarle
                  este tema. Puedes hacer que sea atractivo y relevante.
                </p>

                <h2>Sección Principal 1</h2>
                <p>
                  Aquí va el contenido principal del artículo. Puedes escribir
                  múltiples párrafos con información detallada sobre el tema.
                </p>
                <p>
                  Este es otro párrafo que continúa desarrollando la idea.
                  Puedes usar tantos párrafos como necesites para explicar
                  completamente el tema.
                </p>

                <blockquote class="article-page__quote">
                  "Una cita importante o destacada del artículo que resuma un
                  concepto clave."
                </blockquote>

                <h2>Sección Principal 2</h2>
                <p>
                  Continúa con más contenido y análisis. Estructura el artículo
                  con subtítulos para que sea fácil de leer.
                </p>

                <ul>
                  <li>Punto importante 1</li>
                  <li>Punto importante 2</li>
                  <li>Punto importante 3</li>
                </ul>

                <h2>Conclusión</h2>
                <p>
                  Concluye el artículo resumiendo los puntos principales y dando
                  una perspectiva final sobre el tema.
                </p>

                <div class="article-page__tags">
                  <span class="article-page__tag">tag-1</span>
                  <span class="article-page__tag">tag-2</span>
                  <span class="article-page__tag">tag-3</span>
                </div>
              </article>

              <!-- Call to action -->
              <div class="article-page__cta">
                <p>¿Quieres recibir actualizaciones sobre temas similares?</p>
                <button
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#newsletterModal"
                >
                  Suscribirse al Newsletter
                </button>
              </div>

              <!-- Navegación a otros artículos -->
              <nav class="article-page__navigation">
                <a href="index.html#articles" class="btn btn-outline-primary">
                  ← Volver a Artículos
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER (igual que en index.html) -->
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__column">
            <h5>TheInterregnum</h5>
            <p>Global politics and economics analysis</p>
          </div>
          <div class="footer__column">
            <h5>Navigation</h5>
            <ul>
              <li><a class="footer__link" href="index.html">Home</a></li>
              <li>
                <a class="footer__link" href="index.html#categories"
                  >Categories</a
                >
              </li>
              <li>
                <a class="footer__link" href="index.html#articles">Articles</a>
              </li>
            </ul>
          </div>
          <div class="footer__column">
            <h5>Categories</h5>
            <ul>
              <li><a class="footer__link" href="#">Geopolitics</a></li>
              <li><a class="footer__link" href="#">Economics</a></li>
              <li><a class="footer__link" href="#">Trade</a></li>
            </ul>
          </div>
          <div class="footer__column">
            <h5>Follow</h5>
            <ul>
              <li><a class="footer__link" href="#">Twitter</a></li>
              <li><a class="footer__link" href="#">LinkedIn</a></li>
              <li><a class="footer__link" href="#">RSS</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <p>
            &copy; 2026 TheInterregnum. All rights reserved. |
            <a class="footer__link" href="#">Privacy Policy</a> |
            <a class="footer__link" href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>

    <!-- Newsletter Modal -->
    <div
      class="modal fade"
      id="newsletterModal"
      tabindex="-1"
      aria-labelledby="newsletterModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newsletterModalLabel">
              Subscribe to Newsletter
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form id="newsletterForm" class="newsletter__form">
              <div class="mb-3">
                <label for="emailInput" class="form-label">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailInput"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Main JS -->
    <script src="./assets/js/main.js"></script>
  </body>
</html>
```

---

## 📌 PASO 2: Agregar Estilos CSS para la Página del Artículo

Necesitas agregar CSS para la página del artículo. **Opción A** (más simple) o **Opción B** (más profesional).

### Opción A: Agregar CSS directamente en el HTML

En el `<head>` del archivo del artículo, antes de `</head>`, agrega:

```html
<style>
  .article-page__hero {
    background: linear-gradient(135deg, #1a5490 0%, #2d5a3d 100%);
    color: white;
    padding: 60px 20px;
    margin-bottom: 40px;
  }

  .article-page__meta {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    font-size: 14px;
  }

  .article-page__category {
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .article-page__title {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .article-page__subtitle {
    font-size: 20px;
    opacity: 0.95;
    margin-bottom: 30px;
  }

  .article-page__author-info {
    display: flex;
    gap: 20px;
    font-size: 14px;
  }

  .article-page__image-section {
    padding: 40px 20px;
    background: #f8f9fa;
  }

  .article-page__featured-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .article-page__image-caption {
    text-align: center;
    color: #666;
    font-size: 14px;
    margin-top: 15px;
  }

  .article-page__content {
    padding: 60px 20px;
  }

  .article-page__body {
    line-height: 1.8;
    color: #333;
  }

  .article-page__body h2 {
    font-size: 28px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 20px;
    color: #1a5490;
  }

  .article-page__body p {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .article-page__body ul {
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .article-page__body li {
    margin-bottom: 10px;
  }

  .article-page__quote {
    border-left: 4px solid #1a5490;
    padding-left: 20px;
    margin: 30px 0;
    font-size: 18px;
    font-style: italic;
    color: #555;
  }

  .article-page__tags {
    display: flex;
    gap: 10px;
    margin-top: 30px;
    flex-wrap: wrap;
  }

  .article-page__tag {
    background: #e9ecef;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 12px;
    color: #666;
  }

  .article-page__cta {
    background: #f0f4f8;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    margin-top: 50px;
  }

  .article-page__navigation {
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    .article-page__title {
      font-size: 32px;
    }

    .article-page__body h2 {
      font-size: 22px;
    }
  }
</style>
```

### Opción B: Crear archivo SCSS (más profesional)

1. Crea el archivo: `assets/scss/pages/_article-detail.scss`

2. Agrega el contenido SCSS:

```scss
.article-page {
  &__hero {
    background: linear-gradient(
      135deg,
      $primary-color 0%,
      $secondary-color 100%
    );
    color: white;
    padding: 60px 20px;
    margin-bottom: 40px;

    @include respond-to("sm") {
      padding: 40px 20px;
    }
  }

  &__meta {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    font-size: 14px;
  }

  &__category {
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;

    &--economics {
      background: rgba(26, 84, 144, 0.8);
    }

    &--geopolitics {
      background: rgba(45, 90, 61, 0.8);
    }

    &--trade {
      background: rgba(194, 160, 64, 0.8);
    }

    &--finance {
      background: rgba(92, 61, 61, 0.8);
    }
  }

  &__title {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.2;

    @include respond-to("sm") {
      font-size: 32px;
    }
  }

  &__subtitle {
    font-size: 20px;
    opacity: 0.95;
    margin-bottom: 30px;
  }

  &__author-info {
    display: flex;
    gap: 20px;
    font-size: 14px;
  }

  &__image-section {
    padding: 40px 20px;
    background: #f8f9fa;
  }

  &__featured-image {
    width: 100%;
    height: auto;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-lg;
  }

  &__image-caption {
    text-align: center;
    color: #666;
    font-size: 14px;
    margin-top: 15px;
  }

  &__content {
    padding: 60px 20px;

    @include respond-to("sm") {
      padding: 40px 20px;
    }
  }

  &__body {
    line-height: 1.8;
    color: $dark-color;

    h2 {
      font-size: 28px;
      font-weight: bold;
      margin-top: 40px;
      margin-bottom: 20px;
      color: $primary-color;

      @include respond-to("sm") {
        font-size: 22px;
      }
    }

    p {
      font-size: 16px;
      margin-bottom: 15px;
    }

    ul {
      margin-left: 20px;
      margin-bottom: 20px;

      li {
        margin-bottom: 10px;
      }
    }
  }

  &__quote {
    border-left: 4px solid $primary-color;
    padding-left: 20px;
    margin: 30px 0;
    font-size: 18px;
    font-style: italic;
    color: #555;
  }

  &__tags {
    display: flex;
    gap: 10px;
    margin-top: 30px;
    flex-wrap: wrap;
  }

  &__tag {
    background: #e9ecef;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 12px;
    color: #666;
  }

  &__cta {
    background: #f0f4f8;
    padding: 30px;
    border-radius: $border-radius-lg;
    text-align: center;
    margin-top: 50px;
  }

  &__navigation {
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid #ddd;
  }
}
```

3. Importa en `assets/scss/pages/_index.scss`:

```scss
@import "article-detail";
```

---

## 🔗 PASO 3: Agregar la Tarjeta en index.html

Abre **`index.html`** y encuentra la sección de artículos (busca `id="articles"`).

En esa sección, agrega una **nueva tarjeta de artículo**:

```html
<article class="article-card">
  <div class="article-card__image-wrapper">
    <img
      src="https://via.placeholder.com/400x250"
      alt="Título del Artículo"
      class="article-card__image"
    />
    <span class="article-card__category article-card__category--economics">
      Economics
    </span>
  </div>
  <div class="article-card__content">
    <h3 class="article-card__title">Título Completo del Artículo</h3>
    <p class="article-card__excerpt">
      Descripción breve del artículo que aparece en la tarjeta...
    </p>
    <div class="article-card__meta">
      <span class="article-card__author">Por Juan Pérez</span>
      <span class="article-card__date">Jan 25, 2026</span>
    </div>
    <a
      href="articulo-ejemplo.html"
      class="btn btn-sm btn-primary article-card__btn"
    >
      Read More →
    </a>
  </div>
</article>
```

**Cambios importantes:**

- `href="articulo-ejemplo.html"` ← Apunta a tu nueva página
- `article-card__category--economics` ← Categoría (economics, geopolitics, trade, finance)
- Todos los textos deben ser personalizados

---

## ✏️ PASO 4: Personalizar el Contenido

### En la tarjeta (index.html):

- ✏️ `src` → URL de imagen
- ✏️ Título
- ✏️ Descripción
- ✏️ Autor y fecha
- ✏️ Categoría

### En la página del artículo (articulo-ejemplo.html):

- ✏️ `<title>` → Título de la página
- ✏️ `<meta name="description">` → Para SEO
- ✏️ `<meta name="author">` → Tu nombre
- ✏️ Categoría en el hero
- ✏️ Título y subtítulo
- ✏️ Autor y tiempo de lectura
- ✏️ Imagen destacada
- ✏️ Todo el contenido del artículo
- ✏️ Tags al final

---

## 🖼️ Categorías Disponibles

Usa las clases de categoría correctas:

```html
<!-- Economics -->
<span class="article-card__category article-card__category--economics">
  Economics
</span>

<!-- Geopolitics -->
<span class="article-card__category article-card__category--geopolitics">
  Geopolitics
</span>

<!-- Trade -->
<span class="article-card__category article-card__category--trade">
  Trade
</span>

<!-- Finance -->
<span class="article-card__category article-card__category--finance">
  Finance
</span>
```

---

## 🎨 Personalizar la Imagen

### Opción 1: Placeholder (temporal)

```html
<img src="https://via.placeholder.com/400x250" alt="..." />
```

### Opción 2: Imagen local

```html
<img src="./assets/images/mi-articulo.jpg" alt="..." />
```

### Opción 3: URL externa

```html
<img src="https://ejemplo.com/imagen.jpg" alt="..." />
```

---

## 📋 Checklist Final

Para cada nuevo artículo:

- [ ] Crear nueva página HTML (ej: `articulo-titulo.html`)
- [ ] Copiar el template base
- [ ] Editar meta tags (title, description, author, date)
- [ ] Cambiar hero (categoría, título, subtítulo, autor, imagen)
- [ ] Escribir contenido con h2, párrafos, listas, citas
- [ ] Agregar tags al final
- [ ] Agregar tarjeta en index.html
- [ ] Asegurarse que el href apunta al archivo correcto
- [ ] Probar que los links funcionen
- [ ] Probar en mobile

---

## 📂 Estructura de carpetas después de agregar artículos

```
TheInterregnum/
├── index.html                 ← Página principal
├── articulo-ejemplo.html      ← Primer artículo
├── articulo-economia.html     ← Segundo artículo
├── articulo-geopolitica.html  ← Tercer artículo
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── scss/
│   │   └── ...
│   └── js/
│       └── main.js
└── ...
```

---

## 💡 Ejemplo Completo

### index.html (tarjeta):

```html
<article class="article-card">
  <div class="article-card__image-wrapper">
    <img
      src="https://via.placeholder.com/400x250"
      alt="El Futuro del Comercio Global"
      class="article-card__image"
    />
    <span class="article-card__category article-card__category--trade">
      Trade
    </span>
  </div>
  <div class="article-card__content">
    <h3 class="article-card__title">El Futuro del Comercio Global Post-2025</h3>
    <p class="article-card__excerpt">
      Análisis profundo de las tendencias comerciales emergentes y su impacto en
      la economía global...
    </p>
    <div class="article-card__meta">
      <span class="article-card__author">Por María González</span>
      <span class="article-card__date">Jan 25, 2026</span>
    </div>
    <a
      href="articulo-comercio-global.html"
      class="btn btn-sm btn-primary article-card__btn"
    >
      Read More →
    </a>
  </div>
</article>
```

### articulo-comercio-global.html (página):

El archivo HTML completo con contenido sobre comercio global...

---

## 🚀 Próximos Pasos

1. ✅ Crear página HTML del artículo
2. ✅ Agregar tarjeta en index.html
3. ✅ Escribir contenido
4. ✅ Probar en navegador
5. ✅ Repetir para cada nuevo artículo

**¡Listo! Ahora puedes empezar a agregar contenido a tu blog.**

---

**Última actualización**: Enero 2026  
**Versión**: 1.0.0
