# 🚀 Agregar Nuevo Artículo - Guía Rápida

## 📋 Los 4 Pasos Básicos

### PASO 1️⃣: Crear el archivo HTML del artículo

Crea un nuevo archivo `.html` en la **raíz del proyecto**

```
c:\Users\yop\Documents\Modulo 3\TheInterregnum\mi-articulo.html
```

**Opción A - Usar el ejemplo (más fácil):**

- Copia el archivo `articulo-ejemplo.html`
- Renómbralo: `mi-articulo.html`
- Edita el contenido

**Opción B - Crear desde cero:**

- Abre `AGREGAR_ARTICULO.md` (tiene el template completo)

---

### PASO 2️⃣: Personalizar el contenido

En tu archivo `mi-articulo.html`, cambia:

```html
<!-- Meta tags -->
<title>TU TÍTULO | TheInterregnum</title>
<meta name="description" content="Tu descripción aquí" />
<meta name="author" content="Tu Nombre" />
<meta name="date" content="2026-01-25" />

<!-- Hero section -->
<span class="article-page__category article-page__category--economics">
  CATEGORÍA ← Cambia a: economics, geopolitics, trade, finance
</span>
<h1 class="article-page__title">Tu Título Aquí</h1>
<p class="article-page__subtitle">Tu subtítulo aquí...</p>
<span class="article-page__author-name">Por Tu Nombre</span>

<!-- Imagen -->
<img src="TU-IMAGEN-URL" alt="Descripción" />

<!-- Contenido -->
<h2>Título de Sección</h2>
<p>Tu contenido aquí...</p>
```

---

### PASO 3️⃣: Crear la tarjeta en index.html

Abre `index.html` y busca la sección `<!-- Article Card 7 -->`

Ya hay un ejemplo. **Solo cambia:**

```html
<img src="https://via.placeholder.com/400x250/..." alt="TU TÍTULO" />

<span class="article-card__category article-card__category--CATEGORÍA">
  CATEGORÍA
</span>

<h3 class="article-card__title">Tu Título Aquí</h3>

<p class="article-card__excerpt">Tu descripción breve...</p>

<span class="article-card__author">Por Tu Nombre</span>
<span class="article-card__date">Jan 25, 2026</span>

<a href="mi-articulo.html" class="btn btn-sm btn-primary article-card__btn">
  Read More →
</a>
```

---

### PASO 4️⃣: Prueba

1. Abre `index.html` en el navegador
2. Verifica que aparezca tu tarjeta
3. Haz clic en "Read More" para ir a tu artículo
4. Verifica que todo se vea bien

---

## 🎨 Categorías Disponibles

Usa una de estas en `article-card__category--AQUI`:

- `economics` (azul)
- `geopolitics` (verde)
- `trade` (oro)
- `finance` (marrón)

---

## 📝 Estructura HTML Mínima de Artículo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tu Título | TheInterregnum</title>
    <meta name="description" content="Tu descripción" />
    <meta name="author" content="Tu Nombre" />

    <!-- CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/main.css" />
  </head>

  <body>
    <!-- Header igual que en articulo-ejemplo.html -->
    <!-- Hero section -->
    <!-- Contenido -->
    <!-- Footer igual que en articulo-ejemplo.html -->

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <script src="./assets/js/main.js"></script>
  </body>
</html>
```

**Copia y pega de `articulo-ejemplo.html` = más fácil ✅**

---

## 💡 Ejemplo Real

### Paso 1: Crear archivo

```
articulo-economia-global.html
```

### Paso 2: Editar título

```html
<title>Economía Global 2026 | TheInterregnum</title>
```

### Paso 3: Editar hero

```html
<span class="article-page__category article-page__category--economics">
  Economics
</span>
<h1 class="article-page__title">Economía Global 2026: Análisis Completo</h1>
```

### Paso 4: Agregar tarjeta en index.html

```html
<article class="article-card">
  <div class="article-card__image-wrapper">
    <img src="https://via.placeholder.com/400x250" alt="Economía Global" />
    <span class="article-card__category article-card__category--economics">
      Economics
    </span>
  </div>
  <div class="article-card__content">
    <h3 class="article-card__title">Economía Global 2026</h3>
    <p class="article-card__excerpt">Análisis de tendencias económicas...</p>
    <div class="article-card__meta">
      <span class="article-card__author">Por Tu Nombre</span>
      <span class="article-card__date">Jan 25, 2026</span>
    </div>
    <a
      href="articulo-economia-global.html"
      class="btn btn-sm btn-primary article-card__btn"
    >
      Read More →
    </a>
  </div>
</article>
```

---

## ⚡ Consejo Profesional

1. **Copia `articulo-ejemplo.html`** → Rename → Edita
2. **No empieces desde cero**, es más lento
3. **Usa placeholders** si no tienes imágenes: `https://via.placeholder.com/400x250`
4. **Prueba en mobile** (F12 → Toggle device toolbar)

---

## 📚 Referencia Rápida

| Tarea           | Ubicación                         |
| --------------- | --------------------------------- |
| Crear artículo  | `mi-articulo.html` (raíz)         |
| Agregar tarjeta | `index.html` → sección articles   |
| Cambiar estilos | `assets/css/main.css`             |
| Header/Footer   | Copiar de `articulo-ejemplo.html` |

---

## 🆘 Troubleshooting

**P: El link no funciona**

- Verifica que el href coincida exactamente con el nombre del archivo
- Ejemplo: `href="mi-articulo.html"` → archivo debe llamarse `mi-articulo.html`

**P: Los estilos no se ven**

- Asegúrate de incluir:
  ```html
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="./assets/css/main.css" />
  ```

**P: La imagen no se ve**

- Usa URLs completas: `https://via.placeholder.com/400x250`
- O coloca la imagen en una carpeta: `./assets/images/mi-imagen.jpg`

---

## ✅ Verificación Final

Antes de publicar:

- [ ] Tarjeta aparece en index.html
- [ ] Link funciona
- [ ] Artículo se abre correctamente
- [ ] Se ve bien en mobile (F12)
- [ ] No hay errores en consola (F12 → Console)

---

**¡Listo! Con estos 4 pasos tienes un nuevo artículo publicado.** 🎉

Más detalles en: `AGREGAR_ARTICULO.md`
