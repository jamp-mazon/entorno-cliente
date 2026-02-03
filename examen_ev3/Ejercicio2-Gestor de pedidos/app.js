"use strict";

/*
  EXAMEN FINAL DEC – EJERCICIO 2 (5 puntos)
  Gestor de pedidos (métodos de array)
*/

// =====================================
// Estado
// =====================================
let productos = [];
let pedidos = [];

let textoBusqueda = "";
const soloGrandes = false;

// =====================================
// Selectores
// =====================================
const elBuscador = document.getElementById("buscador");
const elSoloGrandes = document.getElementById("soloGrandes");
const elLista = document.getElementById("listaPedidos");

const elKpiPedidos = document.getElementById("kpiPedidos");
const elKpiTotal = document.getElementById("kpiTotal");
const elKpiMedia = document.getElementById("kpiMedia");
const elKpiMax = document.getElementById("kpiMax");

// =====================================
// Cargar datos
// =====================================

// IMPORTANTE:
// El archivo ./data/pedidos.json tiene esta estructura:
// { "productos": [...], "pedidos": [...] }
//
// Por tanto, tras convertir la respuesta a JSON,
// debes acceder a data.productos y data.pedidos.
async function cargarDatos() {
  /*
    Esta función simula una llamada a una API real.

    Debe:
    - obtener los datos del archivo local
    - comprobar que la respuesta es correcta
    - devolver los datos necesarios para la aplicación

    Si ocurre un error, debe propagarse para que main() lo gestione.
  */
 try {
  const respuesta=await fetch("./data/pedidos.json");
  if (!respuesta.ok) {
    throw new Error("No hay resultados en la busqueda");    
  }
  const datos= await respuesta.json();
  return datos;
 } catch (error) {
  console.log("Error en el tryCatch al cargar los datos");
 }
}

// =====================================
// Cálculos
// =====================================

function calcularTotalPedido(pedido, listaProductos) {
  /*
    Calcula el importe total de un pedido.

    Para ello debes:
    - recorrer las líneas del pedido
    - obtener la información de cada producto
    - sumar el coste de cada línea

    Devuelve un número.
  */
//  console.log("calcularPedido");
//   const lineas=pedido.lineas;
//   const totalLineas=lineas.reduce((acumulador,linea)=>{
//     const producto=listaProductos.find((prod=>prod.id===linea.productoId));
//     const cantidad=Number(linea.cantidad);
//     console.log(cantidad);
//     console.log(acumulador);
//     return acumulador+=producto.precio*cantidad;
//   },0);

//   console.log("aqui")
//     console.log(totalLineas.toFixed(3));

//   return totalLineas.toFixed(2);
 }

function prepararPedidosConTotal(listaPedidos, listaProductos) {
  /*
    Genera una nueva lista de pedidos preparada para la interfaz.

    Cada pedido debe incluir su importe total calculado.
    La lista original no debe modificarse.
  */ let pedidosconTotal;
 elLista.innerHTML="";
 pedidosconTotal=listaPedidos.map((pedido) =>{
  return {
    total: calcularTotalPedido(pedido,listaProductos),
    cliente:pedido.cliente,
    fecha:pedido.fecha,
    id:pedido.id
    }
 });
 return pedidosconTotal;
}
function aplicarFiltros(listaPedidos) {
  /*
    Aplica los filtros definidos por el usuario:

    - texto de búsqueda por cliente
    - opción de mostrar solo pedidos grandes

    Devuelve únicamente los pedidos que cumplan las condiciones.
    
  */
 textoBusqueda=elBuscador.value.trim().toLowerCase();
 const lista_cliente=listaPedidos.filter((pedido)=>pedido.cliente.toLowerCase().includes(textoBusqueda));
 return lista_cliente;
 
}

function calcularResumen(listaPedidosFiltrados) {
  /*
    Calcula los datos de resumen a partir de los pedidos visibles.

    El resumen debe permitir mostrar:
    - número de pedidos
    - importe total
    - pedido de mayor importe
    - importe medio

    Devuelve un único objeto con estos valores.
  */
  
  elKpiPedidos.value=listaPedidosFiltrados.lenght;

  let importeTotal=0;
  let mayor=calcularTotalPedido(listaPedidosFiltrados[0],productos);

  listaPedidosFiltrados.forEach(pedido => {
    const total=calcularTotalPedido(pedido,productos);
    if (total>mayor) {
      mayor=total;
    }
     importeTotal+=total;
  });
  elKpiTotal.textContent=importeTotal;
  elKpiMax.textContent=mayor;
  let media=importeTotal/listaPedidosFiltrados.length;
  elKpiMedia.textContent=media.toFixed(2);

}

// =====================================
// UI
// =====================================

function crearTarjetaPedido(pedido) {
  /*
    HTML base proporcionado.

    Rellena los campos necesarios usando la información
    contenida en el objeto pedido.

    No modifiques la estructura ni las clases Tailwind.
  */
//  console.log("creandoTarjeta");

  const total=calcularTotalPedido(pedido,productos);
 

  return `
    <article class="rounded-xl border bg-white p-4 shadow-sm">
      <p class="text-xs text-slate-500">Pedido</p>
      <h3 class="text-lg font-semibold text-slate-900">
        ${pedido.id }
      </h3>

      <p class="mt-2 text-sm text-slate-700">
        <span class="font-medium">Cliente:</span>
        ${pedido.cliente}
      </p>

      <p class="mt-1 text-sm text-slate-700">
        <span class="font-medium">Fecha:</span>
        ${pedido.fecha}
      </p>

      <p class="mt-3 text-lg font-bold text-slate-800">
        ${total} €
      </p>
    </article>
  `;
}

function pintarLista(listaPedidosFiltrados) {
  /*
    Pinta la lista de pedidos visibles.

    - Si no hay resultados, muestra un mensaje.
    - Si hay resultados, muestra tarjetas.
  */
//  console.log("pintandoLista");
 elLista.innerHTML="";
 
 if (listaPedidosFiltrados.length===0) {
    const pError=document.createElement("p");
    pError.textContent="No hay resultados";
    elLista.appendChild(pError);
    return;
  }
  // const tarjeta=prepararPedidosConTotal(listaPedidosFiltrados,productos);
  listaPedidosFiltrados.forEach(pedido => {
  // console.log("pintandoLista");
//  console.log("pintandoLista");
    
    const html=crearTarjetaPedido(pedido);
 console.log("pintandoLista");

    elLista.innerHTML+=html;
  });

}

function pintarResumen(resumen) {
  /*
    Muestra el resumen en los cuatro KPI:

    - pedidos visibles
    - total ventas
    - ticket medio
    - pedido más caro
    
  */

 calcularResumen();
}

// =====================================
// Flujo principal (NO modificar)
// =====================================

// (código proporcionado)
function actualizarVista() {
  // console.log("actualizarVista");
  const pedidosConTotal = prepararPedidosConTotal(pedidos, productos);
  const pedidosFiltrados = aplicarFiltros(pedidosConTotal);
  // console.log("actualizarVista");

  pintarLista(pedidosFiltrados);

  const resumen = calcularResumen(pedidosFiltrados);
  pintarResumen(resumen);
}

// =====================================
// Eventos
// =====================================

function configurarEventos() {
  elBuscador.addEventListener("input", function () {
    console.log("buscador");
    textoBusqueda = elBuscador.value;
    actualizarVista();
  });

  /*
    EVENTO CHECKBOX "SOLO PEDIDOS GRANDES"

    Debes gestionar el cambio de este checkbox.

    Al cambiar su estado:
    - se debe actualizar la variable que controla este filtro
    - se debe volver a calcular y mostrar la información en pantalla

    El comportamiento debe ser similar al del buscador.
  */

  elSoloGrandes.addEventListener("change", function () {
    // TODO: completar
  });
}

// -----------------------------
// Función de arranque (NO modificar)
// -----------------------------
async function main() {
  try {
    const data = await cargarDatos();
    // console.log(data);
    productos = data.productos;
    // console.log(productos)
    pedidos = data.pedidos;
    // console.log(pedidos)


    configurarEventos();
    console.log(pedidos)
    actualizarVista();
    console.log(productos);
  } catch (error) {
    console.log("Error al cargar los datos del ejercicio:");
  }
}

main();
