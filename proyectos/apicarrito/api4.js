"use strict";

// =====================================
// Estado
// =====================================
let productos = [];
let carrito = [];
// let textoBusqueda = "";
let ordenActual = "asc"; // "asc" | "desc"

// =====================================
// 1) Filtrar productos por nombre (filter)
// =====================================
function filtrarProductos(lista, texto) {
  // TODO:
  // - Si el texto está vacío, devolver un array vacío
  // - Si hay texto, devolver los productos cuyo nombre incluya el texto
  texto=texto.trim().toLowerCase();
  if (texto==="") {
    return lista=[];
  }
  lista=lista.filter(prod=>prod.nombre.toLowerCase().includes(texto));
  return lista;
}

// =====================================
// 2) Ordenar productos por precio (sort)
// =====================================
function ordenarProductos(lista, orden) {
  // TODO:
  // - NO modificar el array original
  // - Si orden === "asc" → precio menor a mayor
  // - Si orden === "desc" → precio mayor a menor
  if (orden==="asc") {
    const lista_ordenada=lista.sort((a,b)=>{
      return b.precio-a.precio;
    })
    return lista_ordenada;
  }
  else if(orden==="desc"){
    const lista_ordenada=lista.sort((a,b)=>{
      return a.precio-b.precio;
    });
    return lista_ordenada;
  }
}

// =====================================
// 3) Transformar productos para pintar (map)
// =====================================
function mapearProductos(lista) {
  // TODO:
  // - Usar map para devolver un nuevo array de objetos
  // - Cada objeto debe tener:
  //   · id
  //   · nombre
  //   · precio
  //   · textoBoton (string)

}

// =====================================
// 4) Cargar productos (fetch + async/await)
// =====================================
async function cargarProductos() {
  // TODO:
  // 1) Fetch de "./data/productos.json"
  // 2) Convertir a JSON
  // 3) Guardar el array de productos en la variable productos
  const url="./data/productos.json";
  try {
    const respuesta= await fetch(url);
    if (!respuesta.ok) {
      throw new Error("No se han encontrado resultados");
    }
    const datos=await respuesta.json();
    productos=datos.productos;
  } catch (error) {
    console.log(`Error en tryCatch (${error})`);
  }
}

// =====================================
// 5) LocalStorage carrito
// =====================================
function cargarCarrito() {
  // TODO:
  // - Obtener el carrito desde localStorage
  // - Si no existe, devolver un array vacío
return JSON.parse(localStorage.getItem("carrito"))||[];
}

function guardarCarrito() {
  // TODO:
  // - Guardar el carrito en localStorage
  localStorage.setItem("carrito",JSON.stringify(carrito));
}

// =====================================
// 6) Pintar productos
// =====================================
const divProductos=document.getElementById("lista-productos");

function pintarProductos(lista) {
  // TODO:

  
  // - Limpiar el contenedor
  // - Recorrer la lista recibida
  // - Pintar nombre, precio y botón
  // - El botón debe llevar el id del producto
  divProductos.innerHTML="";
  lista.forEach(prod => {
      const divInterno=document.createElement("div");
      divProductos.appendChild(divInterno);

      const h3=document.createElement("h3");
      h3.textContent=prod.nombre;
      divInterno.appendChild(h3);

      const pPrecio=document.createElement("p");
      pPrecio.textContent=`${prod.precio}€`;
      divInterno.appendChild(pPrecio);

      const btnAñadir=document.createElement("button");
      btnAñadir.textContent="Añadir Carrito";
      btnAñadir.setAttribute("data-op","añadir");
      btnAñadir.setAttribute("data-producto",JSON.stringify(prod));
      divInterno.appendChild(btnAñadir);
  });
  const btnOrdenar=document.createElement("button");
  btnOrdenar.textContent="Ordenar";
  btnOrdenar.setAttribute("data-op","ordenar");
  divProductos.appendChild(btnOrdenar);
}

// =====================================
// 7) Pintar carrito
// =====================================
const divCarrito = document.getElementById("carrito");

function pintarCarrito() {
  // TODO:
  // - Limpiar el contenedor
  // - Pintar los productos del carrito
  // - Cada producto debe tener botón "Eliminar"
  // - Al final, llamar a calcularTotalCarrito()
  divCarrito.innerHTML="";
  console.log("carrito")
  console.log(carrito)
  carrito.forEach(prod => {
      const divInterno=document.createElement("div");
      divCarrito.appendChild(divInterno);

      const h3=document.createElement("h3");
      h3.textContent=prod.nombre;
      divInterno.appendChild(h3);

      const pPrecio=document.createElement("p");
      pPrecio.textContent=`${prod.precio}€`;
      divInterno.appendChild(pPrecio);

      const btnEliminar=document.createElement("button");
      btnEliminar.textContent="Eliminar";
      btnEliminar.setAttribute("data-op","eliminar");
      btnEliminar.setAttribute("data-producto",JSON.stringify(prod));
      divInterno.appendChild(btnEliminar);
  });
  const btnVaciar=document.createElement("button");
  btnVaciar.textContent="Vaciar Carrito";
  btnVaciar.setAttribute("data-op","vaciar");
  divCarrito.appendChild(btnVaciar);
  document.getElementById("total-carrito").textContent=`${calcularTotalCarrito()}€`;
}  

// =====================================
// 8) Calcular total (reduce)
// =====================================
const pTotal = document.getElementById("total-carrito");

function calcularTotalCarrito() {
  // - Usar reduce para sumar los precios
  // - Mostrar el total con 2 decimales
  const total=carrito.reduce((acumulador,prod)=>{
    return acumulador+=prod.precio
  },0);
  return total.toFixed(2);

}

// =====================================
// 9) Vaciar carrito
// =====================================
function vaciarCarrito() {
  // - Vaciar el array carrito
  // - Guardar en localStorage
  // - Volver a pintar el carrito
  carrito=[];
  guardarCarrito();
  pintarCarrito();
}

// =====================================
// Eventos
// =====================================
const btnVaciar = document.getElementById("vaciar-carrito");
const inputBusqueda = document.getElementById("busqueda");
const btnOrdenar = document.getElementById("ordenar-precio");

function configurarEventos() {
  // TODO:
  // - Evento input en el buscador
  //   · Actualizar textoBusqueda
  //   · Filtrar productos
  //   · Ordenar productos
  //   · Mapear productos
  //   · Pintar productos
  inputBusqueda.addEventListener("input",function (event) {
    let textoBuscado=event.target.value;
    const lista_filtrada=filtrarProductos(productos,textoBuscado);
    ordenarProductos(lista_filtrada,ordenActual)
    pintarProductos(lista_filtrada);
  })

  // TODO:
  // - Evento click en lista de productos
  //   · Añadir producto al carrito
  //   · Guardar carrito
  //   · Pintar carrito
divProductos.addEventListener("click",function (event) {
  if (event.target.tagName!=="BUTTON") {
    return;
  }
  if (event.target.getAttribute("data-op")==="añadir") {
    const btnCarrito=event.target;
    const producto=JSON.parse(btnCarrito.getAttribute("data-producto"));
    carrito.push(producto);
    guardarCarrito();
    pintarCarrito();
  }
  if (event.target.getAttribute("data-op")==="ordenar") {
    if (ordenActual==="asc") {
      const lista_ordenada=ordenarProductos(productos,ordenActual);
      pintarProductos(lista_ordenada);
      ordenActual="desc";
    }
    else if (ordenActual==="desc"){
      const lista_ordenada=ordenarProductos(productos,ordenActual);
      pintarProductos(lista_ordenada);
      ordenActual="asc";
    }
  }
})
  // TODO:
  // - Evento click en carrito
  //   · Eliminar producto
  //   · Guardar carrito
  //   · Pintar carrito
divCarrito.addEventListener("click",function (event) {
  if (event.target.tagName!=="BUTTON") {
    return;
  }
  if (event.target.getAttribute("data-op")==="eliminar") {
    const btnEliminar=event.target;
    const producto=JSON.parse(btnEliminar.getAttribute("data-producto"));
    carrito=carrito.filter(prod=>prod.id!==producto.id);
    guardarCarrito()
    pintarCarrito()
    return;
  }
  if (event.target.getAttribute("data-op")==="vaciar") {
    vaciarCarrito()
    pintarCarrito()
  }
})
  // TODO:
  // - Evento click en botón "Vaciar carrito"

  // TODO:
  // - Evento click en botón "Ordenar por precio"
  //   · Cambiar ordenActual ("asc" ↔ "desc")
  //   · Reaplicar filtro + orden + map
  //   · Volver a pintar productos
}

// =====================================
// Inicio
// =====================================
cargarProductos().then(() => {
  carrito = cargarCarrito();
  // ⚠️ NO pintar productos al inicio
  // Solo se muestran cuando el usuario escribe
  pintarCarrito();
  configurarEventos();
});
