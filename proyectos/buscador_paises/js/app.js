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
  let pais=inputPais.value.trim();
  if (pais==="") {
    mostrarError("El pais no puede estar vacio");
    return;
  }
  try {
    const response= await fetch(`https://restcountries.com/v3.1/name/${pais}`);
    const datos= await response.json();
    const data=datos[0];
    mostrarPais(data);
  } catch (error) {
    resultado.textContent=`No se ha encotrado el pais:${pais}`;
    console.log("Error:"+error);
  }

}

// 3. Función para mostrar los datos del país
function mostrarPais(data) {
  // TODO: Mostrar la información del país en el HTML
  // - Puedes destructurar los datos que necesites
  // - Crea un HTML con la información
  // - Usa métodos de array si la API devuelve un array
   const {name,capital,population,area,languages,flags,region}=data;
  const nombre=name.common||name.official;
  // console.log(nombre);
  const capi=capital[0];
  // console.log(capi);
  const poblacion=population.toLocaleString("es-ES");
  const rea=area.toLocaleString("es-ES");
  const lenguajes=languages ? Object.values(languages).join(","):"No disponible";
  const regione=region;
 const html = `
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
        <li><strong>🏛 Capital:</strong> ${capi}</li>
        <li><strong>👥 Población:</strong> ${poblacion}</li>
        <li><strong>📐 Área:</strong> ${rea} km²</li>
        <li><strong>🗣 Idiomas:</strong> ${lenguajes}</li>
        <li><strong>🗣 Region:</strong> ${regione}</li>
      </ul>

    </div>
  `;

  document.getElementById("resultado").innerHTML = html;

}

// 4. Función para manejar errores
function mostrarError(mensaje) {
  // TODO: Mostrar un mensaje de error en el div #resultado
}

// 5. Agregar event listeners
// TODO:
// - Botón "Buscar" (click)
// - Input de país (Enter)
// - Opcionalmente: limpiar resultados anteriores
btnBuscar.addEventListener("click",buscarPais);
inputPais.addEventListener("keypress",function (e) {
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
