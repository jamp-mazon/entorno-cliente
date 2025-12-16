# Mini-Amazon · Proyecto DIW (Tailwind)

En este proyecto vas a construir la **interfaz gráfica** de una tienda online tipo *e-commerce* usando **HTML y Tailwind CSS**.

⚠️ **Importante**  
En esta fase **NO hay JavaScript**.  
El objetivo es **DISEÑO DE INTERFACES WEB**, no programación.

---

## 🎯 Objetivos del proyecto

- Diseñar una interfaz moderna y clara tipo tienda online.
- Practicar **Tailwind CSS** de forma intensiva.
- Trabajar:
  - layout responsive
  - grids y flexbox
  - tarjetas de producto
  - sidebar de filtros
  - carrito visual
- Aprender a **organizar una interfaz real** como las que se usan en proyectos profesionales.

---

## 🧠 Metodología de trabajo

Este proyecto es **semi-guiado**:

- El HTML base está creado.
- Encontrarás comentarios con:
  - `TODO`
  - `PISTA`
  - `CONSEJO`
- **Tú debes decidir qué clases Tailwind usar** para lograr el resultado visual.

No hay una única solución correcta.

---

## 🧱 Estructura general de la página

La página se divide en cuatro bloques principales:

1. **Header**
2. **Filtros (sidebar)**
3. **Listado de productos**
4. **Carrito**

Todos los bloques deben adaptarse correctamente a **móvil, tablet y escritorio**.

---

## 🧩 1. Header

El header debe contener:
- Logo de la tienda
- Buscador
- Botón del carrito con contador

### Pistas
- El header debería mantenerse visible al hacer scroll.
- Usa una disposición en **fila**.
- El buscador debe ocupar más espacio que el logo.
- El botón del carrito debe destacar visualmente, pero sin ser exagerado.

### Consejo DIW
Piensa en cómo funcionan los headers de Amazon, PcComponentes o Zara:
claros, limpios y funcionales.

---

## 🧩 2. Sidebar de filtros

El bloque de filtros incluye:
- Categorías (en forma de botones tipo “chip”)
- Filtro de precio (range)
- Checkbox “solo en stock”

### Pistas
- En **móvil**, este bloque puede ocultarse o colocarse arriba.
- En **pantallas grandes**, debería verse como una columna lateral.
- Los filtros deben parecer una **tarjeta independiente** del contenido.

### Consejo DIW
Los filtros no deben robar protagonismo al catálogo, pero sí ser claros y accesibles.

---

## 🧩 3. Grid de productos

Aquí se muestra el catálogo de productos.

Cada producto debe tener:
- Imagen
- Nombre
- Categoría
- Precio
- Botón “Añadir”

### Pistas para el grid
- Empieza con **1 columna en móvil**.
- Aumenta columnas en pantallas más grandes.
- Usa un espaciado constante entre tarjetas.

### Pistas para la tarjeta
- Todas las tarjetas deberían verse **alineadas**.
- Usa jerarquía visual:
  - nombre → más destacado
  - categoría → secundaria
  - precio → muy visible
- El botón debe tener:
  - hover
  - foco visible
  - aspecto de botón real

### Consejo DIW
Aunque el contenido sea distinto, las tarjetas deben parecer “clones” entre sí.

---

## 🧩 4. Carrito

El carrito es **visual**, no funcional.

Debe mostrar:
- Productos añadidos
- Cantidad
- Precio
- Total

### Pistas
- En móvil puede ir debajo del catálogo.
- En escritorio puede ir como columna lateral.
- El total debe destacar más que el resto del texto.

### Consejo DIW
El usuario debe entender el precio final de un vistazo.

---

## 📱 Responsive (MUY IMPORTANTE)

Tu interfaz debe adaptarse correctamente a:

- 📱 Móvil
- 💻 Escritorio

### Pistas
- Trabaja **mobile-first**.
- Usa breakpoints de Tailwind (`sm`, `md`, `lg`, `xl`) solo cuando sea necesario.
- No repitas clases innecesarias.

---

## 🎨 Estados visuales obligatorios

Asegúrate de que existan:

- Hover en botones
- Focus visible en inputs y botones
- Botones deshabilitados (visual)
- Diferencia clara entre elementos activos e inactivos

---

## ❌ Qué NO se permite

- Añadir JavaScript
- Añadir CSS propio
- Copiar soluciones completas de otros compañeros
- Dejar el diseño “sin terminar”

---

## ✅ Checklist antes de entregar

- [ ] El layout se entiende claramente
- [ ] El grid de productos es responsive
- [ ] Las tarjetas están bien alineadas
- [ ] Los botones tienen estados
- [ ] El carrito se ve claro
- [ ] El diseño es limpio y consistente
- [ ] No hay clases Tailwind innecesarias repetidas

---

## 📦 Entrega

Entrega:
- `index.html`
- (opcional) carpeta `assets/` con imágenes

No se evalúa JavaScript en esta fase.
Se evalúa **DISEÑO DE INTERFACES WEB**.
