"use strict";

// =====================================
// Estado (en memoria)
// =====================================
let productos = []; // productos cargados del JSON
let textoBusqueda = "";
let productosFav=[];
const lista=document.getElementById("lista");
const total=document.getElementById("total");
productosFav=cargarFavoritos();
pintarFavoritos(productosFav);

// =====================================
// 1) Cargar datos (fetch + async/await)
// =====================================
async function cargarProductos() {
  // TODO:
  // 1) Haz fetch del archivo local
  //    PISTA: "./data/productos.json"
  // 2) Convierte la respuesta a JSON
  // 3) Devuelve el array de productos (data.productos)
  const url="./data/productos.json";
  try {
    const respuesta=await fetch(url);
    if (!respuesta.ok) {
      throw new Error("No se ha obtenido respuesta");
    }
    const datos=await respuesta.json();
    productos=datos.productos;
  } catch (error) {
    console.log(`Error al cargar productos:(${error})`);
  }
}

// =====================================
// 2) Filtrar productos (filter)
// =====================================
function filtrarProductos(lista, texto) {
  // TODO:
  // - Si texto está vacío -> devuelve la lista completa
  // - Si no:
  //   devuelve solo los productos cuyo nombre incluya el texto
  texto=texto.trim().toLowerCase();
  if (texto==="") {
    return lista;
  }
  lista=lista.filter(producto=>producto.nombre.toLowerCase().includes(texto));
  return lista;
}

// =====================================
// 3) Calcular total (reduce)
// =====================================
function calcularTotal(listaFiltrada) {
  // TODO:
  // - Usa reduce para sumar los precios
  // - El acumulador debe empezar en 0
  const suma=listaFiltrada.reduce((acumulador,producto)=>{
    let precioUnitario=producto.precio;
    return acumulador+=precioUnitario;
  },0);
  return suma;
}

// =====================================
// 4) Pintar en pantalla
// =====================================
function pintar(listaFiltrada, total) {
  const contLista = document.getElementById("lista");
  contLista.innerHTML="";
  const contTotal = document.getElementById("total");
  contTotal.innerHTML="";

  // TODO:
  // - Construir el HTML de los productos
  // - Ejemplo de estructura:
  //
  // <div class="item">
  //   <span class="name">Nombre</span>
  //   <span class="price">Precio €</span>
  // </div>
  //
  // - Pintar el total con 2 decimales
  //   PISTA: total.toFixed(2)
  listaFiltrada.forEach(producto => {
    // data-producto debe ir entre comillas porque JSON.stringify contiene comillas dobles
    const html=`<div class="item">
     <span class="name">${producto.nombre}</span>
     <span class="price">${producto.precio} €</span>
     <button data-producto='${JSON.stringify(producto)}'>FAV</button>
   </div>`;
   contLista.innerHTML+=html;
  });
  const pTotal=document.createElement("p");
  pTotal.textContent=total.toFixed(2)+"€";
  contTotal.appendChild(pTotal);
}
function cargarFavoritos(){
  let favoritos=JSON.parse(localStorage.getItem("fav"))||[];
  return favoritos
}
function guardarFavoritos(){
  localStorage.setItem("fav",JSON.stringify(productosFav));
}
function pintarFavoritos(listaFavoritos){
  if (listaFavoritos.length===0) {
    return;
  }
  const divFavoritos=document.getElementById("lista2");
  divFavoritos.innerHTML="";
  listaFavoritos.forEach(producto => {
    console.log(`fav:${producto}`);
      const html=`<div class="item">
     <span class="name">${producto.nombre}</span>
     <span class="price">${producto.precio} €</span>
     <button data-producto='${JSON.stringify(producto)}'>DEL</button>
    </div>`;
    divFavoritos.innerHTML+=html;
  });
  
}

function agregarFavoritos(producto) {
    let existe=productosFav.some(prod=>prod.id===producto.id);
    if (existe) {
      return;
    }
    productosFav.push(producto);
}
function eliminarFavoritos(producto){
  let existe=productosFav.some(prod=>prod.id===producto.id);
  if (existe) {
    productosFav=productosFav.filter(prod=>prod.id!==producto.id);
    return;
  }
}

// =====================================
// Eventos
// =====================================
function configurarEventos() {
  const input = document.querySelector("#busqueda");
  const divProductos=document.getElementById("lista");
  const divFavoritos=document.getElementById("lista2");

  input.addEventListener("input", function (e) {
    textoBusqueda = e.target.value;
    const listaFiltrada=filtrarProductos(productos,textoBusqueda);
    const total=calcularTotal(listaFiltrada);
    pintar(listaFiltrada,total);  

    // TODO:
  });
  divProductos.addEventListener("click",function (e) {
    // console.log("pincho en fav");
    if (e.target.tagName!=="BUTTON") {
      return;
    }
    // console.log("pincho en fav");
    const btnFav=e.target;
    console.log(productosFav);
    const producto=JSON.parse(btnFav.getAttribute("data-producto"));
    console.log(producto);
    agregarFavoritos(producto);
    guardarFavoritos();
    pintarFavoritos(productosFav);
  });
  divFavoritos.addEventListener("click",function (e) {
    if (e.target.tagName!=="BUTTON") {
      return;
    }
    console.log("pincho en del");
    const btnDel=e.target;
    const producto=JSON.parse(btnDel.getAttribute("data-producto"));
    eliminarFavoritos(producto);
    guardarFavoritos();
    pintarFavoritos(productosFav);
  })
}

// =====================================
// Inicio del programa (ARRANQUE LINEAL)
// =====================================

// 1) Cargar productos desde el JSON local
cargarProductos().then(function () {
// 2) Estado inicial (sin filtro)
  const listaFiltrada = filtrarProductos(productos, "");
  const total = calcularTotal(listaFiltrada);
// 3) Pintado inicial
  pintar(listaFiltrada, total);
// 4) Activar eventos
  configurarEventos();
});
