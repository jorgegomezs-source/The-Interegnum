# 📖 Guía Paso a Paso: Agregar tu Primer Artículo

## Tu Primer Artículo - Tutorial Completo

En este tutorial, crearemos juntos un artículo sobre **"El Futuro del Comercio Digital"**.

---

## 🎯 Antes de Empezar

Asegúrate de tener:

- ✅ VS Code (o editor de texto) abierto
- ✅ El proyecto TheInterregnum abierto
- ✅ Un navegador web (Chrome, Firefox, etc.)

**Tiempo estimado**: 10-15 minutos para el primer artículo

---

## PARTE 1: CREAR EL ARCHIVO

### Paso 1.1 - Abrir el explorador de archivos

1. En VS Code, haz clic en el icono de **Explorador** (arriba a la izquierda)
2. Verás la carpeta `TheInterregnum`
3. **Haz clic derecho** en la carpeta raíz
4. Selecciona **"New File"** o **"Nuevo Archivo"**

### Paso 1.2 - Nombrar el archivo

Escribe el nombre: `articulo-comercio-digital.html`

**Importante**:

- El nombre debe tener extensión `.html`
- Use guiones `-` en lugar de espacios
- Minúsculas preferentemente

**Resultado**:

```
articulo-comercio-digital.html
```

### Paso 1.3 - Copiar el template

Ahora tienes dos opciones:

**OPCIÓN A - La más fácil (recomendada):**

1. Abre el archivo `articulo-ejemplo.html`
2. Selecciona TODO el contenido (Ctrl+A)
3. Cópialo (Ctrl+C)
4. Abre tu nuevo archivo `articulo-comercio-digital.html`
5. Pégalo (Ctrl+V)

**OPCIÓN B - Crear desde cero:**

- Copia el código del archivo `AGREGAR_ARTICULO.md` bajo la sección "1.2 Copiar el template base"

---

## PARTE 2: PERSONALIZAR EL CONTENIDO

### Paso 2.1 - Actualizar meta tags

En la sección `<head>`, encontrarás:

```html
<title>
  Global Economic Trends 2026: A Comprehensive Analysis | TheInterregnum
</title>
```

**Cámbialo a:**

```html
<title>El Futuro del Comercio Digital | TheInterregnum</title>
```

### Paso 2.2 - Actualizar descripción

Busca:

```html
<meta name="description" content="Exploring the major economic trends..." />
```

**Cámbialo a:**

```html
<meta
  name="description"
  content="Análisis del impacto de la digitalización en el comercio global y oportunidades para empresas..."
/>
```

### Paso 2.3 - Actualizar autor

Busca:

```html
<meta name="author" content="Robert Maxwell" />
```

**Cámbialo a:**

```html
<meta name="author" content="Tu Nombre Aquí" />
```

### Paso 2.4 - Actualizar título del hero

Busca (aproximadamente línea 120):

```html
<h1 class="article-page__title">
  Global Economic Trends 2026: A Comprehensive Analysis
</h1>
```

**Cámbialo a:**

```html
<h1 class="article-page__title">
  El Futuro del Comercio Digital: Oportunidades y Desafíos
</h1>
```

### Paso 2.5 - Actualizar subtítulo

Busca:

```html
<p class="article-page__subtitle">Understanding the major economic shifts...</p>
```

**Cámbialo a:**

```html
<p class="article-page__subtitle">
  La transformación digital está revolucionando cómo las empresas comercian a
  nivel mundial. Descubre las tendencias clave y oportunidades de 2026.
</p>
```

### Paso 2.6 - Actualizar autor en el hero

Busca:

```html
<span class="article-page__author-name">By Robert Maxwell</span>
```

**Cámbialo a:**

```html
<span class="article-page__author-name">Por Tu Nombre</span>
```

### Paso 2.7 - Cambiar categoría

Busca:

```html
<span class="article-page__category article-page__category--economics">
  Economics
</span>
```

**Cámbialo a:**

```html
<span class="article-page__category article-page__category--trade">
  Trade
</span>
```

**Nota**: Las categorías disponibles son:

- `economics` (Azul)
- `geopolitics` (Verde)
- `trade` (Oro) ← Usamos esta
- `finance` (Marrón)

### Paso 2.8 - Cambiar imagen

Busca (aproximadamente línea 170):

```html
<img
  src="https://via.placeholder.com/800x400"
  alt="Global Economic Trends 2026"
  class="article-page__featured-image"
/>
```

**Cámbialo a:**

```html
<img
  src="https://via.placeholder.com/800x400?text=Digital+Commerce"
  alt="Comercio Digital 2026"
  class="article-page__featured-image"
/>
```

### Paso 2.9 - Escribir el contenido

Busca el primer `<h2>` que dice "Introduction" (aproximadamente línea 200):

```html
<h2>Introduction</h2>
<p>The global economy stands at a critical juncture...</p>
```

**Reemplázalo con tu contenido:**

```html
<h2>Introducción</h2>
<p>
  El comercio digital ha experimentado un crecimiento exponencial en los últimos
  años, transformando fundamentalmente cómo las empresas intercambian bienes y
  servicios.
</p>
<p>
  En 2026, esta tendencia se acelera aún más, con nuevas tecnologías,
  regulaciones y modelos de negocio redefiniendo el panorama del comercio
  internacional.
</p>

<h2>El Auge del E-Commerce Transfronterizo</h2>
<p>
  El comercio electrónico transfronterizo es uno de los segmentos de más rápido
  crecimiento en la economía digital mundial. Las pequeñas y medianas empresas
  ahora pueden acceder a mercados globales con mayor facilidad que nunca antes.
</p>

<h3>Plataformas Digitales Globales</h3>
<p>
  Plataformas como Amazon Global, Alibaba, y Shopify han democratizado el acceso
  al comercio internacional. Las barreras de entrada se han reducido
  significativamente.
</p>

<blockquote class="article-page__quote">
  "El futuro del comercio no es nacional ni internacional, es completamente
  digital y sin fronteras. Las empresas que dominen esta transformación
  liderarán sus industrias."
</blockquote>

<h2>Tecnologías Transformadoras</h2>
<p>Varias tecnologías están impulsando esta transformación:</p>

<ul>
  <li>
    <strong>Inteligencia Artificial:</strong> Personalización de compras y
    predicción de demanda
  </li>
  <li><strong>Blockchain:</strong> Transparencia en la cadena de suministro</li>
  <li><strong>IoT:</strong> Rastreo en tiempo real de envíos</li>
  <li><strong>Pago Digital:</strong> Múltiples opciones de pago seguro</li>
</ul>

<div class="article-page__highlight">
  <strong>Oportunidad Clave:</strong> Las empresas que inviertan en
  infraestructura digital y logística integrada tendrán ventajas competitivas
  significativas.
</div>

<h2>Desafíos y Regulaciones</h2>
<p>
  A pesar de las oportunidades, hay desafíos importantes como impuestos
  digitales, protección de datos, y competencia entre plataformas.
</p>

<h2>Conclusión</h2>
<p>
  El comercio digital continuará siendo la fuerza disruptiva más importante en
  el comercio global. Las empresas que se adapten con agilidad prosperarán.
</p>
```

### Paso 2.10 - Actualizar tags finales

Busca (aproximadamente línea 350):

```html
<div class="article-page__tags">
  <span class="article-page__tag">economics</span>
  <span class="article-page__tag">global-finance</span>
  ...
</div>
```

**Cámbialo a:**

```html
<div class="article-page__tags">
  <span class="article-page__tag">comercio-digital</span>
  <span class="article-page__tag">e-commerce</span>
  <span class="article-page__tag">transformacion-digital</span>
  <span class="article-page__tag">trade</span>
</div>
```

### Paso 2.11 - Guardar el archivo

Presiona **Ctrl+S** para guardar

✅ **Tu archivo de artículo está listo**

---

## PARTE 3: AGREGAR LA TARJETA EN INDEX.HTML

### Paso 3.1 - Abrir index.html

1. Haz clic en `index.html` en el explorador
2. Presiona Ctrl+F para buscar
3. Escribe: `Article Card 7`
4. Presiona Enter

Deberías ver el comentario `<!-- Article Card 7 - EJEMPLO -->`

### Paso 3.2 - Personalizar la tarjeta

Encontrarás algo así:

```html
<!-- Article Card 7 - EJEMPLO -->
<article class="article-card">
  <div class="article-card__image-wrapper">
    <img
      src="https://via.placeholder.com/400x250/1a5490/ffffff?text=Economic+Trends"
      alt="Global Economic Trends 2026"
      class="article-card__image"
    />
    <span class="article-card__category article-card__category--economics">
      Economics
    </span>
  </div>
  <div class="article-card__content">
    <h3 class="article-card__title">
      Global Economic Trends 2026: A Comprehensive Analysis
    </h3>
    <p class="article-card__excerpt">
      Understanding the major economic shifts that will define global markets,
      trade patterns, and emerging opportunities in 2026...
    </p>
    <div class="article-card__meta">
      <span class="article-card__author">By Robert Maxwell</span>
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

**Cámbialo a:**

```html
<!-- Article Card 7 - COMERCIO DIGITAL -->
<article class="article-card">
  <div class="article-card__image-wrapper">
    <img
      src="https://via.placeholder.com/400x250?text=Comercio+Digital"
      alt="El Futuro del Comercio Digital"
      class="article-card__image"
    />
    <span class="article-card__category article-card__category--trade">
      Trade
    </span>
  </div>
  <div class="article-card__content">
    <h3 class="article-card__title">
      El Futuro del Comercio Digital: Oportunidades y Desafíos
    </h3>
    <p class="article-card__excerpt">
      La transformación digital está revolucionando cómo las empresas comercian
      a nivel mundial. Descubre las tendencias clave y oportunidades de 2026...
    </p>
    <div class="article-card__meta">
      <span class="article-card__author">Por Tu Nombre</span>
      <span class="article-card__date">Jan 25, 2026</span>
    </div>
    <a
      href="articulo-comercio-digital.html"
      class="btn btn-sm btn-primary article-card__btn"
    >
      Read More →
    </a>
  </div>
</article>
```

**Cambios clave:**

- ✏️ `src` → Nueva imagen
- ✏️ `alt` → Nueva descripción
- ✏️ `category--trade` → Categoría correcta (cambié de economics a trade)
- ✏️ `title` → Nuevo título
- ✏️ `excerpt` → Nueva descripción
- ✏️ `author` → Tu nombre
- ✏️ `href="articulo-comercio-digital.html"` → MISMO NOMBRE QUE EL ARCHIVO CREADO

### Paso 3.3 - Guardar index.html

Presiona **Ctrl+S**

✅ **La tarjeta está agregada**

---

## PARTE 4: PRUEBA FINAL

### Paso 4.1 - Abrir en navegador

1. **Opción A (más simple):**
   - En el explorador, haz clic derecho en `index.html`
   - Selecciona "Open with" → Tu navegador

2. **Opción B (con servidor local):**
   ```bash
   npm run serve
   ```

### Paso 4.2 - Verificar la tarjeta

1. Abre el navegador en `index.html`
2. Desplázate a la sección "Latest Articles"
3. **Deberías ver tu nueva tarjeta** con el título "El Futuro del Comercio Digital"
4. La tarjeta debe aparecer en la última fila

### Paso 4.3 - Verificar el link

1. **Haz clic en tu tarjeta** o en "Read More →"
2. El navegador debe cargar tu artículo `articulo-comercio-digital.html`
3. Verifica que:
   - ✅ El título aparece correctamente
   - ✅ El contenido se ve bien
   - ✅ La imagen se carga
   - ✅ El navbar funciona
   - ✅ El footer aparece

### Paso 4.4 - Prueba en mobile

1. Presiona **F12** para abrir DevTools
2. Haz clic en el icono de **dispositivo** (esquina superior izquierda)
3. Selecciona un dispositivo móvil (iPhone 12, etc.)
4. Verifica que:
   - ✅ El layout se adapta
   - ✅ El navbar es responsive
   - ✅ El contenido es legible
   - ✅ No hay overflow horizontal

### Paso 4.5 - Verificar consola

En DevTools:

1. Haz clic en la pestaña **Console**
2. Verifica que **NO HAY ERRORES** (no debe haber textos rojos)

---

## 🎉 ¡FELICIDADES!

Has completado exitosamente tu primer artículo:

✅ Archivo creado: `articulo-comercio-digital.html`
✅ Contenido personalizado
✅ Tarjeta agregada en index.html
✅ Link funciona correctamente
✅ Se ve bien en todos los dispositivos

---

## 📋 Próximas Acciones

### Para el siguiente artículo:

Ahora que ya hiciste uno, los siguientes son más rápidos. Solo repite:

1. **Paso 1:** Copia `articulo-ejemplo.html` → Renombra
2. **Paso 2:** Edita contenido (copia tu estructura anterior)
3. **Paso 3:** Agrega tarjeta en index.html
4. **Paso 4:** Prueba

**Tiempo:** 5-10 minutos por artículo adicional

### Ideas para próximos artículos:

- [ ] Análisis de mercados emergentes
- [ ] Impacto de la inteligencia artificial en finanzas
- [ ] Tendencias geopolíticas 2026
- [ ] Regulación de criptomonedas
- [ ] Sostenibilidad en los negocios

---

## 🆘 Troubleshooting

### P: ¿El artículo no aparece?

**R:** Verifica que:

- El archivo se llama exactamente `articulo-comercio-digital.html`
- El `href` en la tarjeta apunta a ese archivo
- Recargaste la página (Ctrl+R)

### P: ¿Los estilos no se ven correctamente?

**R:** Asegúrate de que las líneas en el `<head>` están presentes:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
<link rel="stylesheet" href="./assets/css/main.css" />
```

### P: ¿La imagen no carga?

**R:** Usa una URL completa:

```html
<img src="https://via.placeholder.com/800x400?text=Tu+Texto" />
```

### P: ¿El link no funciona?

**R:** El href DEBE coincidir exactamente:

- Archivo: `articulo-comercio-digital.html`
- href: `articulo-comercio-digital.html`

---

## 📚 Referencia Rápida

| Elemento           | Ubicación                   | Cambio                              |
| ------------------ | --------------------------- | ----------------------------------- |
| Título página      | `<title>`                   | Cambiar a tu título                 |
| Descripción        | `<meta name="description">` | Cambiar a tu descripción            |
| Autor              | `<meta name="author">`      | Cambiar a tu nombre                 |
| Categoría          | `article-page__category--X` | economics/geopolitics/trade/finance |
| Contenido          | Entre `<h2>`                | Escribir tu artículo                |
| Tarjeta index.html | Buscar "Article Card 7"     | Personalizar                        |

---

## 🎓 Aprendizaje

**Conceptos que aprendiste:**

- Crear archivos HTML
- Personalizar meta tags para SEO
- Estructura de un artículo
- Cómo vincular páginas
- Categorización de contenido
- Responsive design

**Próximo paso:** Leer [TECHNICAL.md](TECHNICAL.md) para entender la arquitectura completa

---

**Última actualización:** Enero 2026  
**Duración:** ~15 minutos para el primer artículo  
**Dificultad:** ⭐ Principiante
