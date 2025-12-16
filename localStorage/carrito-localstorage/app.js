// EJERCICIO: Carrito de la compra con LocalStorage (versión alumno)
// ------------------------------------------------------------
// OBJETIVO REAL:
// - Mostrar una lista de productos
// - Permitir añadir productos al carrito
// - Permitir aumentar/disminuir cantidades y eliminar
// - Persistir el carrito en localStorage para que NO se pierda al recargar
//
// REGLAS:
// - No modifiques index.html
// - Usa let/const
// - localStorage solo guarda STRINGS -> usa JSON.stringify / JSON.parse
//
// CLAVE de localStorage a usar:
const CLAVE_CARRITO = "carrito";

// 1) Datos de productos (ya preparados)
const productos = [
  { id: "p1", nombre: "Ratón inalámbrico", precio: 14.99 },
  { id: "p2", nombre: "Teclado", precio: 19.99 },
  { id: "p3", nombre: "USB 64GB", precio: 9.5 },
  { id: "p4", nombre: "Auriculares", precio: 24.0 }
];

// 2) Estado: carrito (array de items)
// Estructura recomendada de cada item:
// { id: "p1", nombre: "...", precio: 14.99, cantidad: 1 }

// TODO: Carga el carrito desde localStorage con un valor por defecto []
let carrito = [];


// 3) Referencias al DOM (ya existen en index.html)
// TODO: Obtén estos elementos con getElementById:
const contenedorProductos = null; // "productos"
const carritoLista = null;        // "carritoLista"
const totalEl = null;             // "total"
const contadorEl = null;          // "contador"
const carritoVacioEl = null;      // "carritoVacio"
const vaciarBtn = null;           // "vaciarBtn"


// 4) Persistencia
// TODO: Implementa guardarCarrito() -> setItem(CLAVE_CARRITO, JSON.stringify(carrito))
const guardarCarrito = () => {
  // ...
};


// 5) Render productos
// - Debe crear un bloque por producto con botón "Añadir"
// - El botón llamará a una función: agregarAlCarrito(idProducto)
const renderProductos = () => {
  // TODO: Limpia contenedorProductos.innerHTML
  // TODO: Recorre productos y crea el HTML mínimo (nombre, precio, botón)
  // PISTA: usa document.createElement y appendChild (o innerHTML si lo prefieres, pero sin liarte)
};


// 6) Lógica: agregar al carrito
// Comportamiento esperado:
// - Si el producto NO está en el carrito -> se añade con cantidad 1
// - Si YA está -> aumenta cantidad en 1
const agregarAlCarrito = (idProducto) => {
  // TODO: Busca el producto en productos por id
  // TODO: Comprueba si ya existe en carrito
  // TODO: Actualiza carrito (recomendado: spread/map o una modificación controlada)
  // TODO: guardarCarrito(); renderCarrito();
};


// 7) Render carrito
// - Debe mostrar cada item: nombre, "-", cantidad, "+", precio subtotal, botón "Eliminar"
// - Debe actualizar el total y el contador
const renderCarrito = () => {
  // TODO: carritoLista.innerHTML = "";
  // TODO: Mostrar/ocultar el mensaje "El carrito está vacío"
  // TODO: Recorrer carrito y crear cada <li> con sus botones
  // TODO: Calcular total (puedes usar reduce)
  // TODO: Actualizar totalEl y contadorEl
};


// 8) Cambiar cantidades y eliminar
const aumentarCantidad = (idProducto) => {
  // TODO: Sube cantidad del item
  // TODO: guardarCarrito(); renderCarrito();
};

const disminuirCantidad = (idProducto) => {
  // TODO: Baja cantidad del item
  // REGLA: si la cantidad llega a 0, elimina el item del carrito
  // TODO: guardarCarrito(); renderCarrito();
};

const eliminarItem = (idProducto) => {
  // TODO: Elimina el item usando filter
  // TODO: guardarCarrito(); renderCarrito();
};


// 9) Vaciar carrito
// - Deja carrito en []
// - Guarda y repinta
const vaciarCarrito = () => {
  // TODO
};


// 10) Arranque de la app (equivalente a "al cargar la página")
// - Renderiza productos
// - Renderiza carrito con lo que haya guardado
renderProductos();
renderCarrito();

// TODO: Conecta el botón "Vaciar carrito" al evento click y llama a vaciarCarrito()
