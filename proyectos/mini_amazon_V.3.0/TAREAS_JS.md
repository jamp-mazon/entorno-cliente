# Mini-Amazon · Tareas para el JS (sin pistas)

## 1) Arranque
- Cargar el listado de productos (datos).
- Pintar (renderizar) los productos en el contenedor `#grid-productos`.

## 2) Búsqueda
- Hacer filtro por texto usando el input `#input-busqueda`.
- Mostrar solo los productos que coincidan.
- Si no hay coincidencias, mostrar un mensaje tipo: **“No hay productos”**.

## 3) Filtro por categoría
- Hacer filtro por categoría con los botones:
  - `#btn-categoria-perifericos`
  - `#btn-categoria-componentes`
  - `#btn-categoria-accesorios`
- Permitir activar/desactivar la categoría seleccionada.
- Al cambiar la categoría, actualizar el listado mostrado.

## 4) Filtro por precio máximo
- Hacer filtro por precio usando el range `#rango-precio-maximo`.
- Actualizar el texto `#texto-precio-maximo` para reflejar el valor actual.
- Al mover el range, actualizar los productos mostrados.

## 5) Filtro “Solo en stock”
- Hacer filtro por stock con el checkbox `#check-solo-stock`.
- Al marcar/desmarcar, actualizar los productos mostrados.

## 6) Filtros combinados
- Aplicar **todos** los filtros a la vez (búsqueda + categoría + precio + stock).
- Cada cambio en cualquier filtro debe recalcular el listado visible.
- Si el resultado final queda vacío, mostrar **“No hay productos”**.

## 7) Botón “Limpiar filtros”
- Implementar el botón `#btn-limpiar-filtros`.
- Al pulsarlo:
  - Vaciar el input de búsqueda.
  - Quitar la categoría seleccionada.
  - Poner el precio máximo al valor inicial.
  - Desmarcar “solo stock”.
  - Volver a mostrar todos los productos.

## 8) Carrito: añadir productos
- Al pulsar “Añadir” (botones `.boton-anadir`):
  - Añadir el producto al carrito.
  - Si ya estaba, aumentar la cantidad.
- Actualizar el contador `#contador-carrito`.

## 9) Carrito: listado y total
- Pintar el contenido del carrito dentro de `#lista-carrito`.
- Mostrar nombre, cantidad, precio unitario y subtotal por producto.
- Calcular y mostrar el total en `#total-carrito`.
- Mantener el carrito sincronizado con cada cambio (añadir/cantidad).

## 10) Carrito: abrir/cerrar (si lo vas a hacer en móvil)
- Usar el botón `#boton-carrito` para mostrar/ocultar el carrito (si decides hacerlo tipo panel o modal).

## 11) Finalizar compra
- Implementar el botón `#btn-finalizar-compra`.
- Al pulsarlo:
  - Validar que el carrito no esté vacío.
  - Si está vacío, mostrar un mensaje adecuado.
  - Si no está vacío, realizar la acción final (confirmación, limpiar carrito, etc.).

## 12) Mensajes al usuario
- Crear una forma de mostrar mensajes claros cuando:
  - No hay productos en el resultado.
  - Se intenta finalizar compra con el carrito vacío.
  - (Opcional) Se añade un producto al carrito.

---

**Nota:** Todo lo anterior debe hacerse usando los IDs ya preparados en el HTML y actualizando el DOM en consecuencia.
