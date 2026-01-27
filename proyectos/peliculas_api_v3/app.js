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
const API_KEY = '1ac9e078'; // Reemplazar con tu API key
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
  cargarFavoritos();
  mostrarFavoritos();
  agregarListeners();
}

// 2️⃣ Buscar películas en la API
async function buscarPeliculas(titulo) {
  const url=`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`;

  try {
    const respuesta=await fetch(url);
    if (!respuesta.ok) {
      throw new Error("No se obtuvo resultado de la busqueda");
      
    }
    const datos= await respuesta.json();
    console.log(datos);
    mostrarResultados(datos.Search);
  } catch (error) {
    mostrarError("No se obtuvo respuesta en tu consulta...");
  }
}

// 3️⃣ Mostrar resultados de búsqueda
function mostrarResultados(peliculas) {
    //   "Title":  "The Matrix",
    // "Year": "1999",
    // "imdbID": "tt0133093",
    // "Poster": "https://...",
  limpiarResultados();
  peliculas.forEach(pelis => {
    const article=document.createElement("article");
    resultadosDiv.appendChild(article);

    const titulo=document.createElement("h3");
    titulo.textContent=pelis.Title;
    article.appendChild(titulo);

    const year=document.createElement("p");
    year.textContent=`Año:${pelis.Year}`;
    article.appendChild(year);

    const id=document.createElement("p");
    id.textContent=`ID:${pelis.imdbID}`;
    article.appendChild(id);

    const poster=document.createElement("img");
    poster.src=pelis.Poster;
    article.appendChild(poster);

    const btnFavorito=document.createElement("button");
    btnFavorito.textContent="Añadir Favoritos";
    btnFavorito.setAttribute("data-op","favoritos");
    btnFavorito.setAttribute("data-pelicula",JSON.stringify(pelis));
    article.appendChild(btnFavorito);
  });
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
  const pelisJSON=JSON.stringify(peliculasFavoritas);
  localStorage.setItem("favoritos",pelisJSON);

}

// 7️⃣ Agregar película a favoritos
function agregarAFavoritos(pelicula) {
  let existe=peliculasFavoritas.some((peli)=>peli.imdbID===pelicula.imdbID);
  if (existe) {
    return;
  }
  else{
    peliculasFavoritas.push(pelicula);
  }
}

// 8️⃣ Eliminar película de favoritos
function eliminarDeFavoritos(imdbID) {
  let existe=peliculasFavoritas.some((peli)=>peli.imdbID===imdbID);
  if (existe) {
    peliculasFavoritas=peliculasFavoritas.filter((peli)=>peli.imdbID!==imdbID)
  }
}

// 9️⃣ Mostrar lista de favoritos
function mostrarFavoritos() {
  favoritosDiv.innerHTML="";
  peliculasFavoritas.forEach(pelis => {
    const article=document.createElement("article");
    favoritosDiv.appendChild(article);

    const titulo=document.createElement("h6");
    titulo.textContent=pelis.Title;
    article.appendChild(titulo);

    const year=document.createElement("p");
    year.textContent=`Año:${pelis.Year}`;
    article.appendChild(year);

    const id=document.createElement("p");
    id.textContent=`ID:${pelis.imdbID}`;
    article.appendChild(id);

    const poster=document.createElement("img");
    poster.src=pelis.Poster;
    article.appendChild(poster);

    const btnEliminar=document.createElement("button");
    btnEliminar.textContent="Eliminar Favoritos";
    btnEliminar.setAttribute("data-op","eliminar");
    btnEliminar.setAttribute("data-pelicula",JSON.stringify(pelis));
    article.appendChild(btnEliminar);
  });
}

// =============================================================
// 🎨 FUNCIONES AUXILIARES
// =============================================================

// 🔟 Mostrar mensaje de error
function mostrarError(mensaje) {
  limpiarResultados();
  const pError=document.createElement("p");
  pError.textContent=mensaje;
  resultadosDiv.appendChild(pError);
 // Mostrar error en el div de resultados
}

// 1️⃣1️⃣ Limpiar resultados
function limpiarResultados() {
  resultadosDiv.innerHTML="";
 // Vaciar el contenido de resultadosDiv
}

// =============================================================
// 🎯 EVENT LISTENERS
// =============================================================

 // Agregar listeners
 // 📦 REFERENCIAS DEL DOM
// const inputPelicula = document.getElementById('inputPelicula');
// const btnBuscar = document.getElementById('btnBuscar');
// const resultadosDiv = document.getElementById('resultados');
// const favoritosDiv = document.getElementById('favoritos');
function agregarListeners() {
  btnBuscar.addEventListener("click",function () {
    console.log("pulso en buscar")
    const titulo=inputPelicula.value.trim().toLowerCase();
    buscarPeliculas(titulo);
  });
  inputPelicula.addEventListener("keydown",function (event) {
    if (event.key==="Enter") {
      const titulo=inputPelicula.value.trim().toLowerCase();
      buscarPeliculas(titulo);
    }
  });
  resultadosDiv.addEventListener("click",function (event) {
    if (event.target.tagName!=="BUTTON") {
      return;
    }
    const botonFav=event.target;
    const peliJSON=botonFav.getAttribute("data-pelicula");
    const pelicula=JSON.parse(peliJSON);
    agregarAFavoritos(pelicula);
    guardarFavoritos();
    cargarFavoritos();
    mostrarFavoritos();
  });
  favoritosDiv.addEventListener("click",function (event) {
    if (event.target.tagName!=="BUTTON") {
      return;
    }
    const botonDel=event.target;
    const peliJSON=botonDel.getAttribute("data-pelicula");
    const pelicula=JSON.parse(peliJSON);
    eliminarDeFavoritos(pelicula.imdbID);
    guardarFavoritos();
    cargarFavoritos();
    mostrarFavoritos();
  })
}



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
init();