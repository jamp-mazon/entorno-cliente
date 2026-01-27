// =============================================================
// 🎬 CATÁLOGO STUDIO GHIBLI - PRÁCTICA ARRAYS Y ASYNC/AWAIT
// =============================================================
// Práctica para 2º DAW - Entorno Cliente
// API REAL: Studio Ghibli API (sin API Key)
// URL: https://ghibliapi.vercel.app/films
// =============================================================

// ========================================
// VARIABLES GLOBALES
// ========================================

let peliculasCargadas = [];
let peliculasFiltradas = [];

const API_URL = "https://ghibliapi.vercel.app/films";

// ========================================
// FUNCIÓN ASÍNCRONA - CONSUMIR API REAL
// ========================================

// Carga las películas desde la API real de Studio Ghibli
async function cargarPeliculasAPI() {
  // TODO: Implementar función asíncrona con fetch()
  // 1. Hacer petición con fetch() a API_URL
  // 2. Verificar que response.ok sea true (si no, lanzar error)
  // 3. Convertir respuesta a JSON con response.json()
  // 4. Retornar el array de películas
  // 5. Manejar errores con try/catch
  try {
    const respuesta=await fetch(API_URL);
    if (!respuesta.ok) {
      throw new Error("No se ha obtenido respuesta");
    }
    const datos=await respuesta.json();
    return datos
  } catch (error) {
    console.log(`Error en el tryCatch al cargar las pelis(${error})`);
  }
}

// ========================================
// FUNCIONES CON MÉTODOS DE ARRAYS
// ========================================

// Extrae solo los títulos de las películas usando map()
function obtenerTitulos(peliculas) {
  // TODO: Usar map() para extraer la propiedad 'title'
  const titulosPeliculas=peliculas.map(peli=>peli.title);
  return titulosPeliculas;
}

// Filtra películas por director usando filter()
function filtrarPorDirector(peliculas, director) {
  // TODO: Usar filter() para obtener películas del director indicado
  const pelisDirector=peliculas.filter((peli)=>peli.director===director);
  return pelisDirector;
}

// Busca películas por título (búsqueda parcial, no sensible a mayúsculas)
function buscarPorTitulo(peliculas, termino) {
  // TODO: Usar filter() con includes() y toLowerCase()
  termino=termino.trim().toLowerCase();
  const pelisTitulo=peliculas.filter((pelis)=>pelis.title.toLowerCase().includes(termino));
  return pelisTitulo;
}

// Calcula el promedio de puntuaciones RT Score usando reduce()
function calcularPuntuacionPromedio(peliculas) {
  // TODO: Calcular promedio de rt_score
  // 1. Verificar que el array no esté vacío (retornar 0 si lo está)
  // 2. Usar reduce() para sumar todos los rt_score
  // 3. IMPORTANTE: rt_score es string, convertir con parseFloat()
  // 4. Dividir la suma entre la cantidad de películas
  // 5. Retornar el promedio
  const suma=peliculas.reduce((acumulador,pelicula)=>{
    const score1=parseFloat(pelicula.rt_score);
    return acumulador+=score1;
  },0);
  return suma/peliculas.length;

}

// Busca una película específica por su ID usando find()
function buscarPorId(peliculas, id) {
  // TODO: Usar find() para buscar por id
  const pelicula=peliculas.find(pelicula=>pelicula.id===id);
  return pelicula;
}

// Verifica si existe alguna película del director indicado usando some()
function tieneDirector(peliculas, director) {
  // TODO: Usar some() para verificar si existe al menos una película del director
  let existe=peliculas.some(peli=>peli.director===director);
  return existe;
}

// Ordena películas por año (más recientes primero) usando sort()
function ordenarPorAño(peliculas) {
  // TODO: Ordenar por release_date descendente
  // 1. Usar spread operator [...peliculas] para no modificar el original
  // 2. Usar sort() con función comparadora
  // 3. IMPORTANTE: release_date es string, convertir con parseInt()
  // 4. Ordenar de mayor a menor (más reciente primero)
  const pelisAño=[...peliculas].sort((a,b)=>{
    const fecha1=parseInt(a.release_date);
    const fecha2=parseInt(b.release_date);
    return fecha1-fecha2;
  });
  return pelisAño;
}

// Ordena películas por puntuación RT (mayor a menor) usando sort()
function ordenarPorPuntuacion(peliculas) {
  // TODO: Ordenar por rt_score descendente
  // 1. Usar spread operator [...peliculas] para no modificar el original
  // 2. Usar sort() con función comparadora
  // 3. IMPORTANTE: rt_score es string, convertir con parseFloat()
  // 4. Ordenar de mayor a menor
  const pelisPorPuntuacion=[...peliculas].sort((a,b)=>{
    const score1=parseFloat(a.rt_score);
    const score2=parseFloat(b.rt_score);
    return score2-score1;
  });
  return pelisPorPuntuacion;
}

// ========================================
// FUNCIONES DE INTERFAZ Y DOM
// ========================================
const btnCargar=document.getElementById("btnCargar");
const selectDirector=document.getElementById("selectDirector");
const inputBuscar=document.getElementById("inputBuscar");
const btnOrdenarAño=document.getElementById("btnOrdenarAño");
const btnOrdenarPuntuacion=document.getElementById("btnOrdenarPuntuacion");
const btnReset=document.getElementById("btnReset");
// Inicializa la aplicación y configura los event listeners
function inicializarApp() {
  console.log("🎬 Aplicación Studio Ghibli iniciada - SOLUCIÓN");
  console.log("API URL:", API_URL);

  // Configurar event listeners
  btnCargar.addEventListener("click", manejarCargaDatos);
  selectDirector.addEventListener("change", manejarFiltroDirector);
  inputBuscar.addEventListener("input", manejarBusqueda);
  btnOrdenarAño.addEventListener("click", manejarOrdenarAño);
  btnOrdenarPuntuacion.addEventListener("click", manejarOrdenarPuntuacion);
  btnReset.addEventListener("click", manejarReset);
}

// Maneja la carga de películas desde la API real
async function manejarCargaDatos() {
  // TODO: Cargar películas de forma asíncrona
  // 1. Mostrar mensaje "Cargando..." con mostrarEstadoCarga()
  // 2. Llamar a cargarPeliculasAPI() con await
  // 3. Guardar resultado en peliculasCargadas y peliculasFiltradas
  // 4. Llamar a mostrarPeliculas() y actualizarEstadisticas()
  // 5. Mostrar mensaje de éxito
  // 6. Manejar errores con try/catch y mostrar mensaje de error
  mostrarEstadoCarga("Cargando...","cargando");
  try {
    peliculasCargadas=await cargarPeliculasAPI();
    peliculasFiltradas=[...peliculasCargadas];
    mostrarPeliculas(peliculasCargadas);
    actualizarEstadisticas(peliculasCargadas);
    mostrarEstadoCarga("Exito al cargar datos...","exito");
  } catch (error) {
    mostrarEstadoCarga("Error al cargar datos","error");
  }

}

// Maneja el filtro por director
function manejarFiltroDirector() {
  // TODO: Filtrar películas por director seleccionado
  // 1. Obtener valor del select con id 'selectDirector'
  // 2. Si está vacío, mostrar todas las películas
  // 3. Si no, usar filtrarPorDirector()
  // 4. Actualizar peliculasFiltradas
  // 5. Llamar a mostrarPeliculas() y actualizarEstadisticas()
  const director=selectDirector.value;
  if (director==="") {
    mostrarPeliculas(peliculasCargadas);
    actualizarEstadisticas(peliculasCargadas);
    return
  }
  const peliculasFiltradas=filtrarPorDirector(peliculasCargadas,director);
  mostrarPeliculas(peliculasFiltradas);
  actualizarEstadisticas(peliculasFiltradas);
}

// Maneja la búsqueda por título en tiempo real
function manejarBusqueda() {
  // TODO: Buscar películas por título
 const titulo=inputBuscar.value;
 if (titulo==="") {
  mostrarPeliculas(peliculasCargadas);
  actualizarEstadisticas(peliculasCargadas);
  return;
 }
 peliculasFiltradas=buscarPorTitulo(peliculasCargadas,titulo);
 mostrarPeliculas(peliculasFiltradas);
 actualizarEstadisticas(peliculasFiltradas);
}

// Ordena las películas mostradas por año
function manejarOrdenarAño() {
  // TODO: Ordenar peliculasFiltradas por año y mostrar resultado
    peliculasFiltradas=ordenarPorAño(peliculasFiltradas); 
    mostrarPeliculas(peliculasFiltradas);
    actualizarEstadisticas(peliculasFiltradas);
  
  console.log(peliculasFiltradas);

 
}

// Ordena las películas mostradas por puntuación RT
function manejarOrdenarPuntuacion() {
  // TODO: Ordenar peliculasFiltradas por puntuación y mostrar resultado
  peliculasFiltradas=ordenarPorPuntuacion(peliculasFiltradas);
  mostrarPeliculas(peliculasFiltradas);
  actualizarEstadisticas(peliculasFiltradas);
}

// Resetea todos los filtros y ordenamientos
function manejarReset() {
  // TODO: Resetear filtros
  selectDirector.value="";
  inputBuscar.textContent="";
  mostrarPeliculas(peliculasCargadas);
  actualizarEstadisticas(peliculasCargadas);

}

// Renderiza las películas en el DOM usando forEach()
function mostrarPeliculas(peliculas) {
  // TODO: Renderizar películas en el contenedor
  const listaPeliculas=document.getElementById("listaPeliculas");
  listaPeliculas.innerHTML="";
  peliculas.forEach(peli => {
    const div=document.createElement("div");
    div.innerHTML=crearTarjetaPelicula(peli);
    listaPeliculas.appendChild(div);
  });
  const actualizarContador=document.getElementById("contadorPeliculas");
  actualizarContador.textContent=`${peliculas.length} películas`;
}

// Crea el HTML de una tarjeta de película con datos reales de la API
function crearTarjetaPelicula(pelicula) {
  return `
    <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300">
      <img src="${pelicula.image}" alt="${pelicula.title}" class="w-full h-80 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-bold text-white mb-2 line-clamp-1">${pelicula.title}</h3>
        <p class="text-gray-300 text-sm mb-1">🎬 ${pelicula.director}</p>
        <p class="text-gray-300 text-sm mb-1">📅 ${pelicula.release_date}</p>
        <p class="text-gray-300 text-sm mb-2">⏱️ ${pelicula.running_time} min</p>
        <div class="flex justify-between items-center mt-3 mb-3">
          <span class="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
            ⭐ ${pelicula.rt_score}/100
          </span>
        </div>
        <p class="text-gray-400 text-xs line-clamp-3">${pelicula.description}</p>
      </div>
    </div>
  `;
}

// Actualiza el panel de estadísticas
function actualizarEstadisticas(peliculas) {
  // TODO: Actualizar estadísticas en el DOM
  // 1. Actualizar 'statTotal' con peliculas.length
  // 2. Calcular promedio con calcularPuntuacionPromedio()
  // 3. Actualizar 'statPromedio' con el promedio (usar .toFixed(1))
  const statTotal=document.getElementById("statTotal");
  const promedio=calcularPuntuacionPromedio(peliculas);
  const statPromedio=document.getElementById("statPromedio");
  statTotal.textContent=peliculas.length;
  statPromedio.textContent=promedio.toFixed(1);
}

// Muestra mensajes de estado de carga
function mostrarEstadoCarga(mensaje, tipo) {
  // TODO: Mostrar mensajes de estado
    const estadoCarga=document.getElementById("estadoCarga");
  estadoCarga.textContent=mensaje;
  if (tipo==="cargando") {
    estadoCarga.className="bg-yellow-100 text-yellow-800";
  }
  else if(tipo==="exito"){
    estadoCarga.className="bg-green-100 text-green-800";
  }
  else{
    estadoCarga.className="bg-red-100 text-red-800";
  }
}

// ========================================
// INICIAR APLICACIÓN
// ========================================

document.addEventListener("DOMContentLoaded", inicializarApp);
