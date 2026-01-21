// =============================================================
// 🌍 PROYECTO: BUSCADOR DE PAÍSES CON API REST
// =============================================================
//
// INSTRUCCIONES:
// 1. Implementa las funciones vacías que se encuentran abajo
// 2. Usa la API de REST Countries (https://restcountries.com/)
// 3. Agrega todas las clases de Tailwind al HTML para que sea responsive
// 4. El usuario debe poder buscar por nombre de país y ver:
//    - Nombre del país
//    - Capital
//    - Población
//    - Idiomas
//    - Bandera
//    - Región
// 5. Maneja errores cuando el país no existe
// 6. Haz que el formulario sea funcional (Enter o Click en botón)
//
// URL base de la API: https://restcountries.com/v3.1/name/
// =============================================================

// 1. Obtén referencias del DOM
const inputPais = document.getElementById("inputPais");
const btnBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

// 2. Función para hacer la búsqueda (llamar a la API)
async function buscarPais() {
  // TODO: Implementar la búsqueda
  // - Obtener el valor del input
  // - Validar que no esté vacío
  // - Llamar a la API
  // - Mostrar los resultados
  // - Manejar errores
  const pais=inputPais.value.trim().toLowerCase();
  if (pais==="") {
    mostrarError("El texto no puede estar vacio");
    return;
  }
  try {
  const  url= `https://restcountries.com/v3.1/name/${pais}`;
  
  const respuesta= await fetch(url);
  // console.log(respuesta);
  if (!respuesta.ok) {
    console.log("No se encontro ningun pais");
    throw new Error("No se ha encontrado ninguna respuesta con ese pais");
  }
  const datos= await respuesta.json();
  // console.log(datos);
  const nuevos_datos=datos[0];
  // console.log(nuevos_datos);
  mostrarPais(nuevos_datos);

  } catch (error) {
      mostrarError("No se ha encontrado ningun pais...");
  }
}

// 3. Función para mostrar los datos del país
function mostrarPais(data) {
  // console.log(data);
  // TODO: Mostrar la información del país en el HTML
  // - Puedes destructurar los datos que necesites
  // - Crea un HTML con la información
  // - Usa métodos de array si la API devuelve un array
  resultado.innerHTML="";
  const {name,capital,flags,population,area,region,languages}=data;

  const nombre=name.common||name.official;
  // console.log(nombre);
  const capitalActual=capital[0];
  // console.log(capitalActual);
  const poblacion=population.toLocaleString("es-Es");
  // console.log(poblacion);
  const areaActual=area.toLocaleString("es-ES");
  // console.log(areaActual);
  const regionActual=region;
  // console.log(regionActual);
  const lenguaje=Object.values(languages || {}).join(", ");
  // console.log(lenguaje);
  const htmlResultado = `
   <div class="bg-gray-100 rounded-xl p-6 border-l-4 border-indigo-500 animate-fadeIn">
      
      <div class="text-center mb-4">
        ${
          flags?.svg
            ? `<img src="${flags.svg}" alt="Bandera de ${nombre}" class="w-40 h-auto mx-auto">`
            : `<span class="text-6xl">🏴</span>`
        }
      </div>

      <h2 class="text-2xl font-bold text-center mb-4">${nombre}</h2>

      <ul class="space-y-2 text-gray-700">
        <li><strong>🏛 Capital:</strong> ${capitalActual}</li>
        <li><strong>👥 Población:</strong> ${poblacion}</li>
        <li><strong>📐 Área:</strong> ${areaActual} km²</li>
        <li><strong>🗣 Idiomas:</strong> ${lenguaje}</li>
        <li><strong>🗣 Region:</strong> ${regionActual}</li>
      </ul>
    </div>
  `;
  resultado.innerHTML = htmlResultado;
}

// 4. Función para manejar errores
function mostrarError(mensaje) {
  // TODO: Mostrar un mensaje de error en el div #resultado
  resultado.innerHTML="";
  resultado.textContent=mensaje;
}

// 5. Agregar event listeners
// TODO:
// - Botón "Buscar" (click)
// - Input de país (Enter)
// - Opcionalmente: limpiar resultados anteriores
btnBuscar.addEventListener("click",buscarPais);
inputPais.addEventListener("keydown",function (e) {
  if (e.key==="Enter") {
    buscarPais();
  }  
})
// 6. RECURSOS ÚTILES:
// - Fetch API: fetch(url)
// - JSON: response.json()
// - Template literals para HTML: `<div>${variable}</div>`
// - Array methods: find(), map(), etc.
// - Destructuring: const { name, capital } = data
