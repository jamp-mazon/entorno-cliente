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
  btnBuscar.addEventListener("click",function () {
    const titulo=inputPelicula.value.trim().toLowerCase();
    buscarPeliculas(titulo);
  });
  resultadosDiv.addEventListener("click",function (e) {
    if (e.target.tagName!=="BUTTON") {
      return;
    }
    const botonFav=e.target;
    const peliculaJSON=botonFav.getAttribute("data-pelicula");
    const pelicula=JSON.parse(peliculaJSON);
    console.log("PElicula boton");
    console.log(pelicula);
    agregarAFavoritos(pelicula);
  })
  inputPelicula.addEventListener("keydown",function (e) {
  if (e.key==="Enter") {
    buscarPeliculas(inputPelicula.value.trim().toLowerCase());
  }
})

}

// 2️⃣ Buscar películas en la API
async function buscarPeliculas(titulo) {
    // TODO: 
    // - Validar que el input no esté vacío
    // - Hacer fetch a la API (búsqueda:  &s=titulo)
    // - Manejar la respuesta
    // - Llamar a mostrarResultados()
    // - Manejar errores
    if (titulo==="") {
      console.log("El input de pelicula esta vacio");
      mostrarError("El campo no puede estar vacio");
      return;
    }
    const url= `http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`;

    try {
      const respuesta= await fetch(url);
      if (!respuesta.ok) {
        throw new Error("No se encontro ninguna pelicula con ese titulo");
      }
      let peliculas= await respuesta.json();
      console.log(peliculas.Search);
      mostrarResultados(peliculas.Search);
    } catch (error) {
      console.log(error)
      mostrarError(`No se ha encontrado la pelicula`);
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
    resultadosDiv.innerHTML="";
    for (let i = 1; i < peliculas.length; i++) {
      const pelicula = peliculas[i];
      const article=document.createElement("article");
      resultadosDiv.appendChild(article);

      const titulo=document.createElement("h3");
      titulo.textContent=pelicula.Title;
      titulo.className="text-2xl font-bold";
      article.appendChild(titulo);

      // const pID=document.createElement("p");
      // pID.textContent=pelicula.imdbID;
      // article.appendChild(pID)

      const pAnio=document.createElement("p");
      pAnio.textContent=pelicula.Year;
      article.appendChild(pAnio);

      const caratula=document.createElement("img");
      caratula.src=pelicula.Poster;
      article.appendChild(caratula);



      const btnFavorito=document.createElement("button");
      btnFavorito.textContent="Agregar a Favoritos";
      btnFavorito.className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-semibold transition";
      btnFavorito.setAttribute("data-op","favorito");
      // Guardamos la película serializada porque los data-* solo admiten strings
      btnFavorito.setAttribute("data-pelicula", JSON.stringify(pelicula));
      console.log("Meto pelicula");
      console.log(pelicula);
      btnFavorito.setAttribute("data-index",i);
      article.appendChild(btnFavorito);

    }
}

// 4️⃣ Obtener detalles completos de una película
async function obtenerDetalles(imdbID) {
    // TODO:
    // - Hacer fetch con &i=imdbID para obtener detalles completos
    // - Retornar los datos
    // NOTA: Esto es opcional, pero mejora la info que guardas
    if (imdbID==="") {
      mostrarError("El imdb no puede estar vacio para mostrar los detalles");
      return;
    }
    const url=`http://www.omdbapi.com/?apikey=${API_KEY}?i=${imdbID}`;

    try {
      const respuesta=await fetch(url);
      if (!respuesta.ok) {
        throw new Error("No se obtuvo respuesta al obtener detalles");
      }
      const detalles= await respuesta.json();
      return detalles;
    } catch (error) {
      console.log(error);
      mostrarError("No se han encontrado detalles descritos");
    }
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
    const favoritos = JSON.parse(localStorage.getItem("favoritos"));
    peliculasFavoritas = favoritos ?? [];
}

// 6️⃣ Guardar favoritos en LocalStorage
function guardarFavoritos() {
    // TODO:
    // - Convertir peliculasFavoritas a JSON (JSON.stringify)
    // - Guardar en localStorage. setItem('favoritos', json)
    const jsonPelis=JSON.stringify(peliculasFavoritas);
    localStorage.setItem("favoritos",jsonPelis);
}

// 7️⃣ Agregar película a favoritos
function agregarAFavoritos(pelicula) {
    // TODO:
    // - Verificar que no esté ya en favoritos (usar find o some)
    // - Agregar al array peliculasFavoritas
    // - Guardar en LocalStorage
    // - Actualizar la UI
    // - Mostrar feedback visual (opcional)
    const encontrado=peliculasFavoritas.find((peli)=>peli.Title===pelicula.Title);
    if (encontrado) {
      return;
    }
    peliculasFavoritas.push(pelicula);
    guardarFavoritos();
    cargarFavoritos();
    mostrarFavoritos();
}

// 8️⃣ Eliminar película de favoritos
// function eliminarDeFavoritos(imdbID) {
//     // TODO:
//     // - Filtrar el array para remover la película (filter)
//     // - Guardar cambios en LocalStorage
//     // - Actualizar la UI
//     const detalles=obtenerDetalles(imdbID);

//     peliculasFavoritas=peliculasFavoritas.filter((pelicula)=>!pelicula.includes(detalles.Search[0].name));
//     guardarFavoritos();
//     cargarFavoritos();
//     mostrarFavoritos();
// }

// 9️⃣ Mostrar lista de favoritos
function mostrarFavoritos() {
    // TODO:
    // - Limpiar el div de favoritos
    // - Si no hay favoritos, mostrar mensaje
    // - Iterar sobre peliculasFavoritas
    // - Crear mini-cards con:  póster, título, botón eliminar
    favoritosDiv.innerHTML="";
    if (peliculasFavoritas.length===0 ||peliculasFavoritas===null) {
      const pError=document.createElement("p");
      pError.textContent="No hay favoritos";
      favoritosDiv.appendChild(pError);
      return;
    }
    for (let i = 0; i < peliculasFavoritas.length; i++) {
      console.log(peliculasFavoritas);
      const pelicula = peliculasFavoritas[i];
      const article=document.createElement("article");
      favoritosDiv.appendChild(article);

      const titulo=document.createElement("h3");
      titulo.textContent=pelicula.Title;
      titulo.className="text-2xl font-bold";
      article.appendChild(titulo);

      // const pID=document.createElement("p");
      // pID.textContent=pelicula.imdbID;
      // article.appendChild(pID)

      const pAnio=document.createElement("p");
      pAnio.textContent=pelicula.Year;
      article.appendChild(pAnio);

      const caratula=document.createElement("img");
      caratula.src=pelicula.Poster;
      article.appendChild(caratula);      
    }

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
