# 📑 ÍNDICE DE ARCHIVOS - TheInterregnum

## 🎯 Inicio Rápido

Comienza aquí si quieres:

- **Ver el proyecto**: Lee [QUICK_START.md](QUICK_START.md) ⭐
- **Información general**: Lee [README.md](README.md)
- **Resumen visual**: Abre [PROJECT_SUMMARY.html](PROJECT_SUMMARY.html)

---

## 📚 Documentación

### Para Usuarios Finales

- **[QUICK_START.md](QUICK_START.md)** - Cómo ver y ejecutar el proyecto (3 opciones)
- **[README.md](README.md)** - Descripción general, características, requisitos

### Para Desarrolladores

- **[TECHNICAL.md](TECHNICAL.md)** - Arquitectura, componentes, guía técnica completa
- **[USAGE.md](USAGE.md)** - Cómo editar, personalizar, agregar contenido
- **[NUEVO_ARTICULO_RAPIDO.md](NUEVO_ARTICULO_RAPIDO.md)** - 4 pasos rápidos para agregar artículos ⭐ NUEVO
- **[AGREGAR_ARTICULO.md](AGREGAR_ARTICULO.md)** - Guía completa y detallada para agregar artículos

### Para Administración

- **[CONFIG.md](CONFIG.md)** - Variables de configuración
- **[CHANGELOG.md](CHANGELOG.md)** - Historial de versiones
- **[CHECKLIST.txt](CHECKLIST.txt)** - Verificación de requisitos cumplidos

---

## 📁 Estructura del Proyecto

### Archivos Raíz

```
index.html                  ← Página principal (550+ líneas)
package.json               ← Configuración npm y scripts
.editorconfig             ← Configuración de editor
.gitignore                ← Archivo para git
```

### Carpeta Assets

```
assets/
├── css/
│   └── main.css           ← CSS compilado (Bootstrap + Custom)
├── scss/                  ← Archivos SASS fuente (7-1)
│   ├── abstracts/         ← Variables y mixins
│   ├── base/              ← Reset y tipografía
│   ├── components/        ← Componentes BEM (3 archivos)
│   ├── layout/            ← Header, footer, utilidades
│   ├── pages/             ← Estilos de secciones (4 archivos)
│   ├── themes/            ← Temas y accesibilidad
│   ├── vendors/           ← Customizaciones Bootstrap
│   └── main.scss          ← Archivo principal SASS
└── js/
    └── main.js            ← JavaScript personalizado
```

---

## 🗂️ Archivos por Categoría

### HTML & Markup

- **index.html** (550+ líneas)
  - Header con navegación
  - Hero section
  - Categorías
  - Artículos
  - Newsletter
  - Footer
  - Modal

### Estilos SASS (15+ archivos)

**Abstracts/**

- `_variables.scss` - 45+ variables
- `_mixins.scss` - 10+ mixins

**Base/**

- `_reset.scss` - Reset y estilos base
- `_typography.scss` - Tipografía completa

**Components/** (BEM)

- `_button.scss` - Componente botón
- `_article-card.scss` - Tarjeta de artículo
- `_category-card.scss` - Tarjeta de categoría

**Layout/**

- `_header.scss` - Navegación sticky
- `_footer.scss` - Pie de página
- `_utilities.scss` - Clases helper

**Pages/**

- `_hero.scss` - Sección hero
- `_categories.scss` - Grid de categorías
- `_articles.scss` - Grid de artículos
- `_newsletter.scss` - Newsletter

**Themes/**

- `_theme.scss` - Dark mode, print, accesibilidad

**Vendors/**

- `_bootstrap-override.scss` - Customizaciones

### JavaScript

- **main.js** (200+ líneas)
  - Navegación
  - Formularios
  - Notificaciones
  - Utilidades

### Configuración

- **package.json** - Scripts npm
- **.editorconfig** - Configuración de editor
- **.gitignore** - Archivos ignorados

### Documentación

- **README.md** - Guía general
- **TECHNICAL.md** - Documentación técnica
- **USAGE.md** - Guía de uso
- **CONFIG.md** - Variables
- **CHANGELOG.md** - Historial
- **QUICK_START.md** - Inicio rápido
- **CHECKLIST.txt** - Verificación
- **PROJECT_SUMMARY.html** - Resumen visual

---

## 📊 Estadísticas

| Elemento             | Cantidad      |
| -------------------- | ------------- |
| Archivos HTML        | 1             |
| Archivos SCSS        | 15+           |
| Archivos JavaScript  | 1             |
| Líneas de HTML       | 550+          |
| Líneas de SCSS       | 1000+         |
| Líneas de JavaScript | 200+          |
| Variables SASS       | 45+           |
| Mixins SASS          | 10+           |
| Componentes BEM      | 8+            |
| Media Queries        | 6 breakpoints |
| Documentos           | 8             |

---

## 🎯 Guía de Navegación

### "Quiero ver el proyecto funcionar"

→ Abre [QUICK_START.md](QUICK_START.md)

### "Quiero entender la arquitectura"

→ Lee [TECHNICAL.md](TECHNICAL.md)

### "Quiero editar/personalizar el proyecto"

→ Consulta [USAGE.md](USAGE.md)

### "Quiero una descripción general"

→ Lee [README.md](README.md)

### "Quiero ver un resumen visual"

→ Abre [PROJECT_SUMMARY.html](PROJECT_SUMMARY.html)

### "Quiero saber qué requisitos se cumplieron"

→ Lee [CHECKLIST.txt](CHECKLIST.txt)

### "Quiero cambiar valores/colores"

→ Mira [CONFIG.md](CONFIG.md)

### "Quiero saber qué versión es"

→ Lee [CHANGELOG.md](CHANGELOG.md)

---

## 🚀 Acciones Rápidas

### Para Desarrolladores

```bash
# Instalar dependencias
npm install

# Compilar SASS (cambios en tiempo real)
npm run sass:watch

# Iniciar servidor local
npm run serve

# Compilar para producción
npm run build
```

### Para Visualización

1. Doble clic en **index.html**
2. O abre desde navegador
3. O usa `npm run serve`

---

## ✅ Requisitos Cumplidos

- ✅ HTML5 semántico
- ✅ Metodología BEM
- ✅ SASS 7-1
- ✅ Layout y cajas
- ✅ Responsive
- ✅ Bootstrap 5
- ✅ Código limpio

---

## 📞 Necesitas Ayuda?

1. **Para comenzar**: [QUICK_START.md](QUICK_START.md)
2. **Para entender**: [TECHNICAL.md](TECHNICAL.md)
3. **Para editar**: [USAGE.md](USAGE.md)
4. **Para preguntas técnicas**: [TECHNICAL.md](TECHNICAL.md) - Sección de debugging

---

## 📌 Archivos Importantes

**Más importantes:**

- `index.html` - La página
- `assets/css/main.css` - Los estilos
- `assets/js/main.js` - La interactividad

**Para editar:**

- `assets/scss/abstracts/_variables.scss` - Cambiar colores/estilos
- `index.html` - Cambiar contenido

**Para aprender:**

- `TECHNICAL.md` - Documentación completa
- `README.md` - Información general

---

**Proyecto: TheInterregnum**  
**Versión: 1.0.0**  
**Estado: ✅ Completado**  
**Fecha: 25 de Enero de 2026**

---

🎉 **¡El proyecto está listo para usar!**

Comienza por [QUICK_START.md](QUICK_START.md) →
