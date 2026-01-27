// =============================================================
// 🎬 PROYECTO: BUSCADOR DE PELÍCULAS CON FAVORITOS
// =============================================================
//
// INSTRUCCIONES:
// 1. Implementa las funciones vacías que se encuentran abajo
// 2. Usa la API de OMDb (http://www.omdbapi.com/)
// 3. Usa LocalStorage para guardar las películas favoritas
// 4. El usuario debe poder: 
// 5. Los favoritos deben persistir al recargar la página
//
// API KEY:  Necesitas obtener una gratis en http://www.omdbapi.com/apikey.aspx
// URL base: http://www.omdbapi.com/? apikey=TU_API_KEY&s=
// =============================================================

// 🔑 CONFIGURACIÓN DE LA API
const API_KEY = 'TU_API_KEY_AQUI'; // Reemplazar con tu API key
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// 📦 REFERENCIAS DEL DOM
const inputPelicula = document.getElementById('inputPelicula');
const btnBuscar = document.getElementById('btnBuscar');
const resultadosDiv = document.getElementById('resultados');
const favoritosDiv = document.getElementById('favoritos');

// 💾 ARRAY PARA ALMACENAR FAVORITOS (cargado desde LocalStorage)
let peliculasFavoritas = [];

// =============================================================
// 🚀 FUNCIONES PRINCIPALES
// =============================================================

// 1️⃣ Inicializar la aplicación
function init() {
  
}

// 2️⃣ Buscar películas en la API
async function buscarPeliculas(titulo) {
}

// 3️⃣ Mostrar resultados de búsqueda
function mostrarResultados(peliculas) {
}

// 4️⃣ Obtener detalles completos de una película
async function obtenerDetalles(imdbID) {
    // NOTA: Esto es opcional, pero mejora la info que guardas
}

// =============================================================
// ⭐ FUNCIONES DE FAVORITOS (LocalStorage)
// =============================================================

// 5️⃣ Cargar favoritos desde LocalStorage
function cargarFavoritos() {
}

// 6️⃣ Guardar favoritos en LocalStorage
function guardarFavoritos() {
}

// 7️⃣ Agregar película a favoritos
function agregarAFavoritos(pelicula) {
}

// 8️⃣ Eliminar película de favoritos
function eliminarDeFavoritos(imdbID) {
}

// 9️⃣ Mostrar lista de favoritos
function mostrarFavoritos() {
}

// =============================================================
// 🎨 FUNCIONES AUXILIARES
// =============================================================

// 🔟 Mostrar mensaje de error
function mostrarError(mensaje) {
 // Mostrar error en el div de resultados
}

// 1️⃣1️⃣ Limpiar resultados
function limpiarResultados() {
 // Vaciar el contenido de resultadosDiv
}

// =============================================================
// 🎯 EVENT LISTENERS
// =============================================================

 // Agregar listeners

// =============================================================
// 📚 RECURSOS Y TIPS
// =============================================================

/*
ESTRUCTURA DE RESPUESTA DE LA API (búsqueda):
{
  "Search": [
    {
      "Title":  "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://..."
    }
  ],
  "Response": "True"
}

ESTRUCTURA DE DATOS PARA LocalStorage:
[
  {
    "Title":  "The Matrix",
    "Year": "1999",
    "imdbID": "tt0133093",
    "Poster": "https://...",
    "Plot": "..." // Si obtienes detalles completos
  }
]

MÉTODOS DE LocalStorage:
- localStorage.setItem('clave', valor)
- localStorage.getItem('clave')
- localStorage.removeItem('clave')
- localStorage.clear()

⚠️ IMPORTANTE: LocalStorage solo guarda strings, usa JSON.stringify() y JSON.parse()

EJEMPLO DE TARJETA CON TAILWIND:
<div class="bg-gray-50 rounded-lg p-4 flex gap-4">
  <img src="${poster}" class="w-20 h-28 object-cover rounded">
  <div class="flex-1">
    <h3 class="font-bold">${title}</h3>
    <p class="text-sm text-gray-600">${year}</p>
    <button class="mt-2 bg-red-500 text-white px-3 py-1 rounded">
      ❌ Eliminar
    </button>
  </div>
</div>
*/

// =============================================================
// ✅ INICIAR APP
// =============================================================

 // Descomentar cuando implementes init()
// init();