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
  agregarListener();
}

// 2️⃣ Buscar películas en la API
async function buscarPeliculas(titulo) {
  titulo=titulo.trim().toLowerCase();
  const url=`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`;
  try {
    const respuesta= await fetch(url);
    if (!respuesta.ok) {
      throw new Error("No se ha obtenido respuesta");
    }
    const datos=await respuesta.json();
    mostrarResultados(datos.Search);
  } catch (error) {
    mostrarError(`Error al obtener respuesta....(${error})`);
  }
}

// 3️⃣ Mostrar resultados de búsqueda
function mostrarResultados(peliculas) {
  limpiarResultados();
  peliculas.forEach(peli => {
    const div=document.createElement("div");
    div.className="bg-gray-50 rounded-lg p-4 flex gap-4";
    resultadosDiv.appendChild(div);

    const poster=document.createElement("img");
    poster.className="w-20 h-28 object-cover rounded";  
    poster.src=peli.Poster;
    div.appendChild(poster);

    const h3=document.createElement("h3");
    h3.className="font-bold";
    h3.textContent=peli.Title;
    div.appendChild(h3);

    const pAnio=document.createElement("p");
    pAnio.textContent=`Año:${peli.Year}`;
    pAnio.className="text-sm text-gray-600";
    div.appendChild(pAnio);

    const pID=document.createElement("p");
    pID.className="text-sm text-gray-600";
    pID.textContent=`ID:${peli.imdbID}`;
    div.appendChild(pID);

    const btnFavorito=document.createElement("button");
    btnFavorito.textContent="Favoritos";
    btnFavorito.className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded";
    btnFavorito.setAttribute("data-op","favoritos");
    btnFavorito.setAttribute("data-pelicula",JSON.stringify(peli));
    div.appendChild(btnFavorito);  
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
  // Si no hay nada guardado en localStorage, devuelve null; en ese caso deja el array vacío.
  peliculasFavoritas =JSON.parse(localStorage.getItem("favoritos"))||[];
}

// 6️⃣ Guardar favoritos en LocalStorage
function guardarFavoritos() {
  localStorage.setItem("favoritos",JSON.stringify(peliculasFavoritas));//Guardo en localStorage mi array actual de peliculasFavoritas.
}

// 7️⃣ Agregar película a favoritos
function agregarAFavoritos(pelicula) {
  let existe=peliculasFavoritas.some((peli)=>peli.imdbID===pelicula.imdbID);
  if (!existe) {
    peliculasFavoritas.push(pelicula);
  }
}

// 8️⃣ Eliminar película de favoritos
function eliminarDeFavoritos(imdbID) {
  let existe=peliculasFavoritas.some((peli)=>peli.imdbID===imdbID);
  if (existe) {
    peliculasFavoritas=peliculasFavoritas.filter((peli)=>peli.imdbID!==imdbID);
  }
}

// 9️⃣ Mostrar lista de favoritos
function mostrarFavoritos() {
    favoritosDiv.innerHTML="";
    console.log(peliculasFavoritas);
    if (peliculasFavoritas===null|| peliculasFavoritas.length===0) {
      return;
    }
    console.log(peliculasFavoritas);

    peliculasFavoritas.forEach(peli => {
    const div=document.createElement("div");
    div.className="bg-gray-50 rounded-lg p-4 flex gap-4";
    favoritosDiv.appendChild(div);

    const poster=document.createElement("img");
    poster.className="w-20 h-28 object-cover rounded";  
    poster.src=peli.Poster;
    div.appendChild(poster);

    const h3=document.createElement("h3");
    h3.className="font-bold";
    h3.textContent=peli.Title;
    div.appendChild(h3);

    const pAnio=document.createElement("p");
    pAnio.textContent=`Año:${peli.Year}`;
    pAnio.className="text-sm text-gray-600";
    div.appendChild(pAnio);

    // const pID=document.createElement("p");
    // pID.className="text-sm text-gray-600";
    // pID.textContent=`ID:${peli.imdbID}`;
    // div.appendChild(pID);

    const btnEliminar=document.createElement("button");
    btnEliminar.textContent="Eliminar Fav";
    btnEliminar.className="mt-2 bg-red-500 text-white px-3 py-1 rounded";
    btnEliminar.setAttribute("data-op","favoritos");
    btnEliminar.setAttribute("data-pelicula",JSON.stringify(peli));
    div.appendChild(btnEliminar);  
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
// const inputPelicula = document.getElementById('inputPelicula');
// const btnBuscar = document.getElementById('btnBuscar');
// const resultadosDiv = document.getElementById('resultados');
// const favoritosDiv = document.getElementById('favoritos');
function agregarListener(){
  inputPelicula.addEventListener("keydown",function (event) {
    const titulo=inputPelicula.value
    if (event.key==="Enter") {
      buscarPeliculas(titulo);
    }
  });

  btnBuscar.addEventListener("click",function () {
    const titulo=inputPelicula.value;
    buscarPeliculas(titulo);
  });

  resultadosDiv.addEventListener("click",function (event) {
    if (event.target.tagName!=="BUTTON") {
      return;
    }
    const btnFavorito=event.target;
    const pelicula=JSON.parse(btnFavorito.getAttribute("data-pelicula"));
    agregarAFavoritos(pelicula);
    guardarFavoritos()
    cargarFavoritos()
    mostrarFavoritos()
  })
  favoritosDiv.addEventListener("click",function (event) {
    if (event.target.tagName!=="BUTTON") {
      return
    }
    const btnEliminar=event.target;
    const pelicula=JSON.parse(btnEliminar.getAttribute("data-pelicula"));
    eliminarDeFavoritos(pelicula.imdbID);
    guardarFavoritos();
    cargarFavoritos();
    mostrarFavoritos();
  });
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
