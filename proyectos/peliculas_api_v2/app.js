// =============================================================
// 🎬 PROYECTO: BUSCADOR DE PELÍCULAS CON FAVORITOS
// =============================================================
//
// INSTRUCCIONES:
// 1. Implementa las funciones vacías que se encuentran abajo
// 2. Usa la API de OMDb (http://www.omdbapi.com/)
// 3. Usa LocalStorage para guardar las películas favoritas
// 4. El usuario debe poder: 
//    - Buscar películas por nombre
//    - Ver detalles:  título, año, póster, sinopsis, rating
//    - Agregar películas a favoritos (guardar en LocalStorage)
//    - Ver lista de favoritos
//    - Eliminar de favoritos
// 5. Los favoritos deben persistir al recargar la página
//
// API KEY:  Necesitas obtener una gratis en http://www.omdbapi.com/apikey.aspx
// URL base: http://www.omdbapi.com/? apikey=TU_API_KEY&s=
// =============================================================

// 🔑 CONFIGURACIÓN DE LA API
const API_KEY = '1ac9e078'; // TODO: Reemplazar con tu API key
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
    // TODO: 
    // - Cargar favoritos desde LocalStorage
    // - Mostrar favoritos en la UI
    // - Agregar event listeners
    cargarFavoritos();
    mostrarFavoritos();
    agregarListeners();
}

// 2️⃣ Buscar películas en la API
async function buscarPeliculas(titulo) {
    // TODO: 
    // - Validar que el input no esté vacío
    // - Hacer fetch a la API (búsqueda:  &s=titulo)
    // - Manejar la respuesta
    // - Llamar a mostrarResultados()
    // - Manejar errores
    titulo=titulo.trim().toLowerCase();
    if (titulo==="") {
      return;
    }
    const url=`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`;
    try {
      const respuesta=await fetch(url);
      if (!respuesta.ok) {
        mostrarError("No se obtuvieron resultados...");
        throw new Error("No se han encontrado resultados");        
      }
      const resultados= await respuesta.json();
      console.log(resultados.Search);
      mostrarResultados(resultados.Search);

    } catch (error) {
      console.log("Error en try Catch de peliculas:"+error);
    }


}

// 3️⃣ Mostrar resultados de búsqueda
function mostrarResultados(peliculas) {
    // TODO:
    // - Limpiar resultados anteriores
    // - Iterar sobre el array de películas
    // - Crear una tarjeta (card) para cada película
    // - Agregar botón "Agregar a Favoritos"
    // - Verificar si ya está en favoritos (deshabilitar botón)
    limpiarResultados();
    peliculas.forEach(pelicula => {
        const article=document.createElement("article");
        resultadosDiv.appendChild(article);

        const titulo=document.createElement("h3");
        titulo.textContent=pelicula.Title;
        article.appendChild(titulo);

        const id=document.createElement("p");
        id.textContent=pelicula.imdbID;

        const year=document.createElement("p");
        year.textContent=pelicula.Year;
        article.appendChild(year);

        const poster=document.createElement("img");
        poster.src=pelicula.Poster;
        poster.className="w-80 h-80 object-cover rounded";
        article.appendChild(poster);

        const btnFavorito=document.createElement("button");
        btnFavorito.textContent="Añadir Favoritos";
        btnFavorito.setAttribute("data-op","favorito");
        btnFavorito.setAttribute("data-pelicula",JSON.stringify(pelicula));
        btnFavorito.className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded";
        article.appendChild(btnFavorito);


    });
}

// 4️⃣ Obtener detalles completos de una película
async function obtenerDetalles(imdbID) {
    // TODO:
    // - Hacer fetch con &i=imdbID para obtener detalles completos
    // - Retornar los datos
    // NOTA: Esto es opcional, pero mejora la info que guardas
}

// =============================================================
// ⭐ FUNCIONES DE FAVORITOS (LocalStorage)
// =============================================================

// 5️⃣ Cargar favoritos desde LocalStorage
function cargarFavoritos() {
    // TODO:
    // - Obtener datos de localStorage. getItem('favoritos')
    // - Parsear JSON (usar JSON.parse)
    // - Si no existe, devolver array vacío []
    // - Asignar a peliculasFavoritas
    let favoritos=localStorage.getItem("favoritos");
    if (favoritos) {
      peliculasFavoritas=JSON.parse(favoritos);
    }
    else{
      peliculasFavoritas=[];
    }

}

// 6️⃣ Guardar favoritos en LocalStorage
function guardarFavoritos() {
    // TODO:
    // - Convertir peliculasFavoritas a JSON (JSON.stringify)
    // - Guardar en localStorage. setItem('favoritos', json)
    const peliculasJSON=JSON.stringify(peliculasFavoritas);
    localStorage.setItem("favoritos",peliculasJSON);
}

// 7️⃣ Agregar película a favoritos
function agregarAFavoritos(pelicula) {
    // TODO:
    // - Verificar que no esté ya en favoritos (usar find o some)
    // - Agregar al array peliculasFavoritas
    // - Guardar en LocalStorage
    // - Actualizar la UI
    // - Mostrar feedback visual (opcional)
    let encontrada=peliculasFavoritas.some(peli=>peli.imdbID===pelicula.imdbID);
    console.log(encontrada);
    if (encontrada) {
      return;
    }
    else{
      peliculasFavoritas.push(pelicula);
      console.log(peliculasFavoritas);
      guardarFavoritos();
      cargarFavoritos();
      mostrarFavoritos();
    }
}

// 8️⃣ Eliminar película de favoritos
function eliminarDeFavoritos(imdbID) {
    // TODO:
    // - Filtrar el array para remover la película (filter)
    // - Guardar cambios en LocalStorage
    // - Actualizar la UI
    peliculasFavoritas=peliculasFavoritas.filter(pelicula=>pelicula.imdbID!==imdbID);
    guardarFavoritos();
    cargarFavoritos();
    mostrarFavoritos();
}

// 9️⃣ Mostrar lista de favoritos
function mostrarFavoritos() {
    // TODO:
    // - Limpiar el div de favoritos
    // - Si no hay favoritos, mostrar mensaje
    // - Iterar sobre peliculasFavoritas
    // - Crear mini-cards con:  póster, título, botón eliminar
    favoritosDiv.innerHTML="";
    if (peliculasFavoritas===0) {
      let pError=document.createElement("p");
      pError.textContent="No hay favoritos";
      favoritosDiv.appendChild(pError);
    }
    peliculasFavoritas.forEach(pelicula => {

        const article=document.createElement("article");
        favoritosDiv.appendChild(article);

        const titulo=document.createElement("h6");
        titulo.textContent=pelicula.Title;
        article.appendChild(titulo);

        const id=document.createElement("p");
        id.textContent=pelicula.imdbID;

        const year=document.createElement("p");
        year.textContent=`Año ${pelicula.Year}`;
        article.appendChild(year);

        const poster=document.createElement("img");
        poster.src=pelicula.Poster;
        poster.className="w25 h-25 object-cover rounded mb-5";
        article.appendChild(poster);

        const btnEliminar=document.createElement("button");
        btnEliminar.textContent="Eliminar Favoritos";
        btnEliminar.setAttribute("data-op","eliminar");
        btnEliminar.setAttribute("data-id",pelicula.imdbID);
        btnEliminar.className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition";
        article.appendChild(btnEliminar);        
    });
}

// =============================================================
// 🎨 FUNCIONES AUXILIARES
// =============================================================

// 🔟 Mostrar mensaje de error
function mostrarError(mensaje) {
    // TODO: Mostrar error en el div de resultados
    resultadosDiv.innerHTML="";
    const pError=document.createElement("p");
    pError.textContent=mensaje;
    pError.className="text-red-500";
    resultadosDiv.appendChild(pError);
}

// 1️⃣1️⃣ Limpiar resultados
function limpiarResultados() {
    // TODO: Vaciar el contenido de resultadosDiv
    resultadosDiv.innerHTML="";
}

// =============================================================
// 🎯 EVENT LISTENERS
// =============================================================

// TODO: Agregar listeners
// - Click en botón buscar
// - Enter en input
// - Llamar a init() cuando cargue la página

// =============================================================
// 📚 RECURSOS Y TIPS
// =============================================================
function agregarListeners(){

  btnBuscar.addEventListener("click",function () {
    buscarPeliculas(inputPelicula.value);
    
  });
  inputPelicula.addEventListener("keydown",function (e) {
    if (e.key==="Enter") {
      buscarPeliculas(inputPelicula.value);
    }
  });
  resultadosDiv.addEventListener("click",function (e) {
    if (e.target.tagName!=="BUTTON") {
      return;
    }
    console.log("pulsando fav");
    const fav=e.target;
    const peliJSON=fav.getAttribute("data-pelicula");
    // console.log(peliJSON);
    const pelicula=JSON.parse(peliJSON);
    // console.log(pelicula);
    agregarAFavoritos(pelicula);
    guardarFavoritos();
    cargarFavoritos();
    mostrarFavoritos();
  });
  favoritosDiv.addEventListener("click",function (e) {
    if (e.target.tagName!=="BUTTON") {
      return;
    }
    console.log("pulsando del");

    const eliminar=e.target;
    const imdbID=eliminar.getAttribute("data-id");
    eliminarDeFavoritos(imdbID);
    guardarFavoritos();
    cargarFavoritos();
    mostrarFavoritos();
  });  
}
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

// TODO: Descomentar cuando implementes init()
init();