"use strict";

/*
  EXAMEN FINAL DEC – EJERCICIO 1 (5 puntos)
  MiniCatálogo Fitness
*/

// =====================================
// Estado
// =====================================
let productos = [];
let textoBusqueda = "";

const LS_FAVORITOS = "dec_favoritos";

// =====================================
// Selectores
// =====================================
const elBuscador = document.getElementById("buscador");
const elLista = document.getElementById("listaProductos");

// =====================================
// Cargar datos
// =====================================
// IMPORTANTE:
// El archivo ./data/productos.json NO contiene un array directamente.
// La estructura es:
// {
//   "productos": [ ... ]
// }
//
// Por tanto, tras convertir la respuesta a JSON,
// debes acceder al array usando: data.productos
async function cargarProductos() {
  /*
    IMPORTANTE (simulación de llamada a API real):

    - Debes comprobar si la respuesta del fetch es correcta (response.ok)
    - Si ocurre algún error, debes lanzar una excepción
      para que el try/catch de main() pueda gestionarlo
    - Piensa esta función como si llamaras a una API externa
  */
  // TODO:
  // - realizar el fetch al archivo ./data/productos.json
  // - comprobar que la respuesta es correcta
  // - convertir la respuesta a JSON
  // - devolver el array de productos (data.productos)
  try {
    const respuesta=await fetch("./data/productos.json");
    if (!respuesta) {
      throw new Error("No se ha obtenido respuesta!");
    }
    const datos= await respuesta.json();
    // console.log(datos.productos); correcto
    return datos.productos;

  } catch (error) {
    console.log(`Fallo en try Catch ${error}`);
  }
}
// =====================================
// LocalStorage
// =====================================
function obtenerFavoritos() {
  // TODO:
  // - devolver el array de favoritos desde LocalStorage
  const favoritos=JSON.parse(localStorage.getItem("favoritos"))||[];

  // console.log("favoritos");
  // console.log(favoritos);
  return favoritos;
}

function guardarFavoritos(favoritosIds) {
  // TODO:
  // - guardar el array de favoritos en localStorage
  // favoritosIds.push("p1");
  localStorage.setItem("favoritos",JSON.stringify(favoritosIds));
  
}

function alternarFavorito(idProducto) {
  // TODO:
  // - añadir o quitar el id del array de favoritos
  // - guardar el resultados



}

// =====================================
// Búsqueda
// =====================================
function aplicarBusqueda(lista) {

  // TODO:
  // - devolver la lista filtrada según el texto de búsqueda
  textoBusqueda=elBuscador.value.trim().toLowerCase();
  lista=lista.filter(prod=>prod.nombre.toLowerCase().includes(textoBusqueda));
  return lista;
}

// =====================================
// UI
// =====================================
function crearTarjetaProducto(producto, favoritosIds) {
  /*
    HTML base proporcionado.

    TODO (OBLIGATORIO):
    - Rellena los datos del producto usando el objeto "producto"
    - Debes mostrar:
      * nombre
      * precio
      * id del producto en el botón
    - Usa el código JavaScript que corresponda
    - NO modificar la estructura ni las clases Tailwind
  */

  // TODO:
  // - comprobar si el producto es favorito
  // - decidir el texto del botón
  let textoBoton="☆";
  // console.log(favoritosIds);
  const existe=favoritosIds.some(id=>id===producto.id);
  if (existe) {
    textoBoton ="☆ Quitar de favoritos";
    // textoBoton = "☆ Añadir a favoritos";
  }
  else{
    // textoBoton ="☆ Quitar de favoritos";
    textoBoton = "☆ Añadir a favoritos";
  }
   // TODO: cambiar si procede
  
  return `
    <article class="rounded-xl border bg-white p-4 shadow-sm">
      <h3 class="text-lg font-semibold text-slate-900">
        ${producto.nombre}
      </h3>

      <p class="mt-2 text-lg font-bold text-slate-800">
        ${producto.precio}
      </p>

      <button
        class="js-fav mt-3 rounded-lg border px-3 py-1 text-sm hover:bg-slate-100"
        data-id="${producto.id}";
      >
        ${textoBoton}
      </button>
    </article>
  `;
}

function pintarLista(listaVisible, favoritosIds) {
  // TODO:
  // - pintar en pantalla los productos recibidos
  // - tener en cuenta el caso en el que no haya resultados (Mostrar un mensaje de no hay resultados)
  elLista.innerHTML="";
  listaVisible.forEach(prod => {
    const html=crearTarjetaProducto(prod,favoritosIds);
    elLista.innerHTML+=html;
  });
}

// =====================================
// Eventos
// =====================================
function configurarEventos() {
  elBuscador.addEventListener("input", function () {
    textoBusqueda = elBuscador.value;
    actualizarVista();
  });

  // Delegación de eventos para el botón de favoritos
  elLista.addEventListener("click", function (event) {
    // TODO:
    // - comprobar que el click se ha hecho sobre un botón
    // - comprobar que ese botón corresponde a favoritos
    // - obtener el id desde el value
    // - alternar favorito
    // - actualizar vista
    if (event.target.tagName!=="BUTTON") {
      return;
    }
    // console.log("pulso en fav");
    const btnFavorito=event.target;
    const id=btnFavorito.getAttribute("data-id");
    console.log(id);
    let favoritos=obtenerFavoritos();
    if (favoritos.lenght===0) {
      favoritos.push(id);
      guardarFavoritos()
    }
    else{
    const existe=favoritos.some((fav)=>fav===id);
    if (existe) {
     favoritos=favoritos.filter(fav=>fav!==id);
     guardarFavoritos(favoritos);
     pintarLista(productos,favoritos);
    }
    else{
     favoritos.push(id);
     guardarFavoritos(favoritos);
     pintarLista(productos,favoritos);
    }
  }  

  });
}

// =====================================
// Flujo principal
// (código proporcionado - NO modificar)
// =====================================
function actualizarVista() {
  const favoritos = obtenerFavoritos();
  const listaVisible = aplicarBusqueda(productos);

  pintarLista(listaVisible, favoritos);
}

// -----------------------------
// Función de arranque
// (código proporcionado - NO modificar)
// -----------------------------
async function main() {
  try {
    productos = await cargarProductos();
    configurarEventos();
    actualizarVista();
  } catch (error) {
    console.log("Error al cargar productos.");
  }
}

main();
