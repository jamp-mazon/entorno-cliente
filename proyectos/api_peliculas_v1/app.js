// =============================================================
// 🐙 PROYECTO: BUSCADOR DE USUARIOS DE GITHUB
// =============================================================
//
// OBJETIVO:
// - Buscar usuarios usando la API de GitHub
// - Mostrar resultados en pantalla
// - Guardar usuarios seguidos en LocalStorage
// - Recuperar los seguidos al recargar la página
// - Usar DESTRUCTURING para extraer datos de la API
//
// API BASE: https://api.github.com
// =============================================================


// =============================================================
// 🔧 CONFIGURACIÓN Y VARIABLES GLOBALES
// =============================================================

// URL base de la API de GitHub
const API_URL = 'https://api.github.com';

// Referencias al DOM
const inputUsuario = document.getElementById('inputUsuario');
const btnBuscar = document.getElementById('btnBuscar');
const resultadosDiv = document.getElementById('resultados');
const seguidosDiv = document.getElementById('seguidos');

// Array donde se guardarán los usuarios seguidos
// 👉 Este array debe cargarse desde LocalStorage
let usuariosSeguidos = [];


// =============================================================
// 🚀 FUNCIONES PRINCIPALES
// =============================================================

// 1️⃣ Inicializar la aplicación
function init() {
  // - Cargar los usuarios seguidos desde LocalStorage
  // - Mostrar los usuarios seguidos en pantalla
}


// 2️⃣ Buscar usuarios en GitHub
async function buscarUsuarios(nombre) {
  // - Validar que el nombre no esté vacío
  // - Llamar a la API: /search/users?q=nombre
  // - Convertir la respuesta a JSON
  // - USAR DESTRUCTURING para obtener "items" del resultado
  // - Llamar a mostrarResultados(items)
}


// 3️⃣ Mostrar resultados de búsqueda
function mostrarResultados(usuarios) {
  // - Limpiar resultados anteriores
  // - Recorrer el array de usuarios
  // - USAR DESTRUCTURING para extraer:
  //   login, avatar_url, html_url
  // - Crear una tarjeta por usuario
  // - Añadir un botón para "Seguir"
}


// 4️⃣ Obtener detalles completos de un usuario
async function obtenerDetalleUsuario(username) {
  // - Llamar a la API: /users/username
  // - Convertir respuesta a JSON
  // - USAR DESTRUCTURING para extraer campos como:
  //   login, avatar_url, followers, public_repos, html_url
  // - Devolver un objeto solo con esos campos
}


// =============================================================
// ⭐ FUNCIONES DE LOCALSTORAGE
// =============================================================

// 5️⃣ Cargar usuarios seguidos desde LocalStorage
function cargarSeguidos() {
  // - Obtener el item "seguidos" de LocalStorage
  // - Convertirlo a array con JSON.parse
  // - Si no existe, usar un array vacío
}


// 6️⃣ Guardar usuarios seguidos en LocalStorage
function guardarSeguidos() {
  // - Guardar el array usuariosSeguidos en LocalStorage
  // - Usar JSON.stringify
}


// 7️⃣ Agregar usuario a seguidos
async function agregarASeguidos(username) {
  // - Comprobar si el usuario ya está en seguidos
  // - Si no existe:
  //   - Obtener detalles completos del usuario
  //   - Añadirlo al array usuariosSeguidos
  //   - Guardar en LocalStorage
  //   - Volver a mostrar la lista
}


// 8️⃣ Eliminar usuario de seguidos
function eliminarDeSeguidos(username) {
  // - Filtrar el array para eliminar el usuario
  // - Guardar cambios en LocalStorage
  // - Actualizar la vista
}


// 9️⃣ Mostrar usuarios seguidos
function mostrarSeguidos() {
  // - Limpiar el contenedor de seguidos
  // - Recorrer el array usuariosSeguidos
  // - USAR DESTRUCTURING para extraer los datos
  // - Crear una tarjeta con botón "Eliminar"
}


// =============================================================
// 🎯 EVENT LISTENERS
// =============================================================

// Click en botón buscar
btnBuscar.addEventListener('click', () => {
  // - Obtener el valor del input
  // - Llamar a buscarUsuarios()
});


// Click en resultados (delegación de eventos)
resultadosDiv.addEventListener('click', () => {
  // - Comprobar si se ha hecho click en un botón
  // - Obtener el username desde data-attribute
  // - Llamar a agregarASeguidos()
});


// Click en seguidos (delegación de eventos)
seguidosDiv.addEventListener('click', () => {
  // - Comprobar si se ha hecho click en un botón
  // - Obtener el username
  // - Llamar a eliminarDeSeguidos()
});


// =============================================================
// ✅ INICIAR APLICACIÓN
// =============================================================

// Llamar a init() cuando cargue la página
init();