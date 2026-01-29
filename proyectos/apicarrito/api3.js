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
  console.log(lista);
 lista=lista.filter((prod)=>prod.nombre.toLowerCase().includes(texto));
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
    const ascendente=[...lista].sort((a,b)=>{
      return b.precio-a.precio
    });
    return ascendente
  }
  else if(orden==="desc"){
    const descendente=[...lista].sort((a,b)=>{
      return a.precio-b.precio;
    });
    return descendente;
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
  const mapeoProductos=lista.map(prod=>{
    return{
      id:prod.id,
      nombre:prod.nombre,
      precio:prod.precio,
      textoBoton:"Añadir a Carrito"
    }
  });
  return mapeoProductos;
}

// =====================================
// 4) Cargar productos (fetch + async/await)
// =====================================
async function cargarProductos() {
  // TODO:
  // 1) Fetch de "./data/productos.json"
  // 2) Convertir a JSON
  // 3) Guardar el array de productos en la variable productos
  // const url="./data/productos.json";
  try {
    const respuesta= await fetch("./data/productos.json");
    if (!respuesta.ok) {
      throw new Error("No se ha obtenido respuesta");
    }
    const datos=await respuesta.json();

    productos=datos.productos;
  } catch (error) {
    console.log(`Error al cargar Productos(${error})`);
  }
}

// =====================================
// 5) LocalStorage carrito
// =====================================
function cargarCarrito() {
  // TODO:
  // - Obtener el carrito desde localStorage
  // - Si no existe, devolver un array vacío
  carrito=JSON.parse(localStorage.getItem("carrito"))||[];
  return carrito;

}

function guardarCarrito() {
  // TODO:
  // - Guardar el carrito en localStorage
  localStorage.setItem("carrito",JSON.stringify(carrito));
}

// =====================================
// 6) Pintar productos
// =====================================
const divProductos = document.getElementById("lista-productos");

function pintarProductos(lista) {
  // TODO:
  // - Limpiar el contenedor
  // - Recorrer la lista recibida
  // - Pintar nombre, precio y botón
  // - El botón debe llevar el id del producto
  divProductos.innerHTML="";
  lista.forEach(prod => {
    const divProducto=document.createElement("div");
    divProductos.appendChild(divProducto);

    const h3=document.createElement("h3");
    h3.textContent=prod.nombre;
    divProducto.appendChild(h3);

    const pPrecio=document.createElement("p");
    pPrecio.textContent=`${prod.precio}€`;
    divProducto.appendChild(pPrecio);

    const btnCarrito=document.createElement("button");
    btnCarrito.textContent="Añadir Carrito";
    btnCarrito.setAttribute("data-op","añadir");
    btnCarrito.setAttribute("data-producto",JSON.stringify(prod));
    divProducto.appendChild(btnCarrito);
  });
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
  carrito.forEach(prod => {
    const div=document.createElement("div");
    divCarrito.appendChild(div);

    const h3=document.createElement("h3");
    h3.textContent=prod.nombre;
    divCarrito.appendChild(h3);

    const pPrecio=document.createElement("p");
    pPrecio.textContent=`${prod.precio}€`;
    divCarrito.appendChild(pPrecio);

    const btnCarrito=document.createElement("button");
    btnCarrito.textContent="Eliminar Carrito";
    btnCarrito.setAttribute("data-op","eliminar");
    btnCarrito.setAttribute("data-producto",JSON.stringify(prod));
    divCarrito.appendChild(btnCarrito);    
  });

  const btnVaciar=document.createElement("button");
  btnVaciar.textContent="Vaciar Carrito";
  btnVaciar.setAttribute("data-vaciar","vaciar");
  divCarrito.appendChild(btnVaciar);

  const total=calcularTotalCarrito();
  document.getElementById("total-carrito").textContent=`${total.toFixed(2)}€`;
}

// =====================================
// 8) Calcular total (reduce)
// =====================================
const pTotal = document.getElementById("total-carrito");

function calcularTotalCarrito() {
  // TODO:
  // - Usar reduce para sumar los precios
  // - Mostrar el total con 2 decimales
  const total=carrito.reduce((acumulador,prod)=>{
    return acumulador+=prod.precio;
  },0);
  return total;
}

// =====================================
// 9) Vaciar carrito
// =====================================
function vaciarCarrito() {
  // TODO:
  // - Vaciar el array carrito
  // - Guardar en localStorage
  // - Volver a pintar el carrito
  carrito=[];
  localStorage.removeItem("carrito");
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
    console.log("inputBusqueda")
    let textoBusqueda=event.target.value;
    console.log(textoBusqueda);
    const productos_filtrados=filtrarProductos(productos,textoBusqueda);
    pintarProductos(productos_filtrados);
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
  const btnAñadir=event.target;
  const producto=JSON.parse(btnAñadir.getAttribute("data-producto"));
  carrito.push(producto);
  pintarCarrito();
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
    if (event.target.getAttribute("data-vaciar")==="vaciar") {
      vaciarCarrito();
      return;
    }
    if (event.target.getAttribute("data-op")==="eliminar") {
      const producto=JSON.parse(event.target.getAttribute("data-producto"));
      carrito=carrito.filter(prod=>prod.id!==producto.id);
      guardarCarrito();
      pintarCarrito();

    }

  })
  // TODO:
  // - Evento click en botón "Vaciar carrito"

  // TODO:
  // - Evento click en botón "Ordenar por precio"
  //   · Cambiar ordenActual ("asc" ↔ "desc")
  //   · Reaplicar filtro + orden + map
  //   · Volver a pintar productos
  const btnOrdenar=document.getElementById("ordenar");
  btnOrdenar.addEventListener("click",function () {
    if (ordenActual==="asc") {
      const lista_ordenada=ordenarProductos(productos,ordenActual);
      pintarProductos(lista_ordenada);
      ordenActual="desc";
      return;
    }
    else{
      const lista_ordenada=ordenarProductos(productos,ordenActual);
      pintarProductos(lista_ordenada);
      ordenActual="asc";
    }
  })
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
