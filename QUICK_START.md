# 🚀 CÓMO VER EL PROYECTO

## Opción 1: Abrir directamente en navegador (Más Simple)

1. Navega a la carpeta del proyecto:

   ```
   c:\Users\yop\Documents\Modulo 3\TheInterregnum
   ```

2. Haz doble clic en **`index.html`**

3. ¡Listo! La página se abrirá en tu navegador por defecto

---

## Opción 2: Usar Live Server (Recomendado para Desarrollo)

### Requisitos:

- Node.js instalado (si no lo tienes, descárgalo de nodejs.org)
- npm (viene con Node.js)

### Pasos:

1. **Abre la carpeta en terminal/PowerShell:**

   ```powershell
   cd "c:\Users\yop\Documents\Modulo 3\TheInterregnum"
   ```

2. **Instala las dependencias (primera vez):**

   ```powershell
   npm install
   ```

3. **Inicia el servidor:**

   ```powershell
   npm run serve
   ```

4. **Se abrirá automáticamente en tu navegador** (normalmente en `http://localhost:8080`)

---

## Opción 3: Ver con Servidor Local en VS Code

Si tienes VS Code abierto en la carpeta:

1. Click derecho en `index.html`
2. Selecciona "Open with Live Server"

---

## 🔧 Si quieres Compilar SASS

Si haces cambios en los archivos SCSS y quieres ver los cambios en CSS:

```powershell
# Compilar una sola vez
npm run sass:minify

# O ver cambios en tiempo real mientras editas
npm run sass:watch
```

---

## 📱 Cómo Probar en Móvil

### En DevTools de Chrome:

1. Abre el navegador en `http://localhost:8080` (si usas live server)
2. Presiona **F12** para abrir DevTools
3. Click en el icono de dispositivo (esquina superior izquierda)
4. Selecciona un dispositivo móvil

### En tu teléfono real:

1. En tu PC con live server: abre la consola
2. Verás un mensaje con la IP local (ej: `192.168.1.100:8080`)
3. En tu teléfono, ve a esa dirección en el navegador

---

## ✨ Qué Verás

Una página profesional con:

- ✅ Header sticky con navegación responsiva
- ✅ Hero section con gradiente y animaciones
- ✅ 4 tarjetas de categorías
- ✅ Grid de 6 artículos con hover effects
- ✅ Sección de newsletter
- ✅ Footer con 4 columnas
- ✅ Completamente responsivo (prueba redimensionando)
- ✅ Modal de suscripción (click en botón "Subscribe")

---

## 🎨 Personalizar los Estilos

**Para cambiar colores:**

1. Abre `assets/scss/abstracts/_variables.scss`
2. Modifica los valores de color
3. Ejecuta `npm run sass:minify`
4. Recarga el navegador

---

## 📖 Documentación

Para entender mejor el proyecto, lee:

- **README.md** - Guía general
- **TECHNICAL.md** - Documentación técnica completa
- **USAGE.md** - Guía de uso y personalización
- **PROJECT_SUMMARY.html** - Resumen visual del proyecto

---

## ⚠️ Solución de Problemas

### Los estilos no se ven correctamente

- Verifica que `assets/css/main.css` existe
- Limpia el caché del navegador (Ctrl+Shift+R en Windows)
- Abre la consola (F12) y busca errores

### El navegador no abre automáticamente

- Abre manualmente: `http://localhost:8080`
- O copia la URL que muestre la consola de npm

### Modal no funciona

- Asegúrate de que Bootstrap JS está cargado
- Abre DevTools (F12) y revisa la consola de errores

---

## 🎯 Próximos Pasos (Opcional)

Después de ver el proyecto, puedes:

1. **Editar contenido:**
   - Cambiar título, descripción en hero
   - Agregar/editar artículos
   - Modificar información del footer

2. **Cambiar diseño:**
   - Editar colores en `_variables.scss`
   - Modificar tipografía
   - Ajustar espaciado

3. **Agregar funcionalidad:**
   - Integrar base de datos
   - Agregar búsqueda
   - Sistema de comentarios

---

**¡Disfruta explorando TheInterregnum! 🎉**

Para preguntas, revisa los documentos de documentación incluidos en la carpeta.
