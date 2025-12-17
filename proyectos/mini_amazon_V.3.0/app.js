/* =========================================================
   Mini-Amazon · app.js
   SOLO selección de elementos del DOM (sin lógica todavía)
   ========================================================= */

// =========================
// HEADER
// =========================
const encabezado = document.getElementById("encabezado");

const zonaLogo = document.getElementById("zona-logo");
const logoIcono = document.getElementById("logo-icono");
const logoTexto = document.getElementById("logo-texto");

const zonaBuscador = document.getElementById("zona-buscador");
const inputBusqueda = document.getElementById("input-busqueda");

const zonaCarrito = document.getElementById("zona-carrito");
const botonCarrito = document.getElementById("boton-carrito");
const textoCarrito = document.getElementById("texto-carrito");
const contadorCarrito = document.getElementById("contador-carrito");

// =========================
// LAYOUT PRINCIPAL
// =========================
const principal = document.getElementById("principal");

// =========================
// FILTROS (ASIDE)
// =========================
const panelFiltros = document.getElementById("panel-filtros");
const tituloFiltros = document.getElementById("titulo-filtros");

// Categorías
const filtroCategorias = document.getElementById("filtro-categorias");
const tituloCategorias = document.getElementById("titulo-categorias");
const chipsCategorias = document.getElementById("chips-categorias");

const btnCategoriaPerifericos = document.getElementById("btn-categoria-perifericos");
const btnCategoriaComponentes = document.getElementById("btn-categoria-componentes");
const btnCategoriaAccesorios = document.getElementById("btn-categoria-accesorios");

// Precio
const filtroPrecio = document.getElementById("filtro-precio");
const tituloPrecio = document.getElementById("titulo-precio");

const rangoPrecioMaximo = document.getElementById("rango-precio-maximo");
const textoPrecioMaximo = document.getElementById("texto-precio-maximo");

// Stock
const filtroStock = document.getElementById("filtro-stock");
const etiquetaSoloStock = document.getElementById("etiqueta-solo-stock");
const checkSoloStock = document.getElementById("check-solo-stock");

// =========================
// PRODUCTOS (SECCIÓN CENTRAL)
// =========================
const seccionProductos = document.getElementById("seccion-productos");
const cabeceraProductos = document.getElementById("cabecera-productos");
const tituloProductos = document.getElementById("titulo-productos");
const btnLimpiarFiltros = document.getElementById("btn-limpiar-filtros");

const gridProductos = document.getElementById("grid-productos");

// Colecciones (por clase) dentro del grid
const tarjetasProducto = gridProductos?.querySelectorAll(".tarjeta-producto") ?? [];
const botonesAnadir = gridProductos?.querySelectorAll(".boton-anadir") ?? [];

// =========================
// CARRITO (PANEL DERECHO)
// =========================
const panelCarrito = document.getElementById("panel-carrito");
const tituloCarrito = document.getElementById("titulo-carrito");

const listaCarrito = document.getElementById("lista-carrito");
const zonaTotal = document.getElementById("zona-total");
const totalCarrito = document.getElementById("total-carrito");

const btnFinalizarCompra = document.getElementById("btn-finalizar-compra");

document.addEventListener("DOMContentLoaded",function () {
   class Producto{
      constructor(nombre,categoria,precio,cantidad,img){
         this.nombre=nombre;
         this.categoria=categoria;
         this.precio=precio;
         this.img=img;
         this.cantidad=cantidad;

         if (this.cantidad<=0) {
            this.hayStock=false;
         }
         else{
            this.hayStock=true;
         }
         
      }
   }
// URLs placeholder estables (misma imagen por producto gracias a /seed/)
      const productos = [
         // Periféricos
         new Producto("Ratón inalámbrico", "perifericos", 19.99, 12, "https://picsum.photos/seed/raton-inalambrico/800/600"),
         new Producto("Teclado mecánico", "perifericos", 59.90, 6, "https://picsum.photos/seed/teclado-mecanico/800/600"),
         new Producto("Auriculares gaming", "perifericos", 34.50, 0, "https://picsum.photos/seed/auriculares-gaming/800/600"),
         new Producto("Webcam Full HD", "perifericos", 29.99, 9, "https://picsum.photos/seed/webcam-full-hd/800/600"),

         // Componentes
         new Producto("SSD NVMe 1TB", "Componentes", 79.95, 4, "https://picsum.photos/seed/ssd-nvme-1tb/800/600"),
         new Producto("RAM 16GB DDR4", "Componentes", 44.99, 10, "https://picsum.photos/seed/ram-16gb-ddr4/800/600"),
         new Producto("Fuente 650W 80+ Bronze", "Componentes", 54.90, 3, "https://picsum.photos/seed/fuente-650w/800/600"),
         new Producto("Placa base B550", "Componentes", 109.00, 2, "https://picsum.photos/seed/placa-base-b550/800/600"),

         // Accesorios
         new Producto("Alfombrilla XL", "Accesorios", 12.99, 15, "https://picsum.photos/seed/alfombrilla-xl/800/600"),
         new Producto("Hub USB 3.0", "Accesorios", 16.50, 7, "https://picsum.photos/seed/hub-usb-3/800/600"),
         new Producto("Soporte para portátil", "Accesorios", 18.90, 0, "https://picsum.photos/seed/soporte-portatil/800/600"),
         new Producto("Cable HDMI 2m", "Accesorios", 7.99, 20, "https://picsum.photos/seed/cable-hdmi-2m/800/600"), 
      ];
   
function pintarProductos(lista){
   // const gridProductos = document.getElementById("grid-productos");
   gridProductos.innerHTML="";
   lista.forEach(producto => {
      const articulo=document.createElement("article");
      articulo.classList.add("tarjeta-producto");

      const img=document.createElement("img");
      img.classList.add("tarjeta-producto__imagen");
      img.src=producto.img;

      const div_contenido=document.createElement("div");
      div_contenido.classList.add("tarjeta-producto__contenido");

      const h3=document.createElement("h3");
      h3.textContent=producto.nombre;
      h3.classList.add("tarjeta-producto__nombre");

      const pCategoria=document.createElement("p");
      pCategoria.textContent=producto.categoria;
      pCategoria.classList.add("tarjeta-producto__categoria");

      div_contenido.appendChild(h3);
      div_contenido.appendChild(pCategoria);

      const div_producto_pie=document.createElement("div");
      div_producto_pie.classList.add("tarjeta-producto__pie");

      const spanPrecio=document.createElement("span");
      spanPrecio.textContent=producto.precio+"€";
      spanPrecio.classList.add("tarjeta-producto__precio");

      const btn_añadir=document.createElement("button");
      btn_añadir.textContent="Añadir";
      btn_añadir.classList.add("boton-anadir");
      btn_añadir.setAttribute("data-nombre",producto.nombre);
      
      div_producto_pie.appendChild(spanPrecio);
      div_producto_pie.appendChild(btn_añadir);

      articulo.appendChild(img);
      articulo.appendChild(div_contenido);
      articulo.appendChild(div_producto_pie);

      gridProductos.appendChild(articulo);
   });

}
// const inputBusqueda = document.getElementById("input-busqueda");
// inputBusqueda.addEventListener("input",function () {
//    const busqueda=inputBusqueda.value;
//    const nueva_lista=productos.filter(producto=>producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));
//    pintarProductos(nueva_lista);

// }) 
// pintarProductos(productos);
const filtro_sidebar={
   categoria:"",
   rango:0,
   checkbox:false
   };

// filtro_sidebar.categoria.push("prueba");
// console.log(filtro_sidebar.categoria);

chipsCategorias.addEventListener("click",function (event) {
   if (event.target.tagName!=="BUTTON") {
      return;
   }
   else{
      if (event.target.getAttribute("data-nombre").includes("perifericos")) {
         if (filtro_sidebar.categoria.includes("perifericos")) {

            console.log(true);//seguir por aqui <------
         }
            filtro_sidebar.categoria="perifericos";
            aplicarFiltros();
      }
      if (event.target.getAttribute("data-nombre").includes("componentes")) {
            filtro_sidebar.categoria="componentes";

            aplicarFiltros();

      }
      if (event.target.getAttribute("data-nombre").includes("accesorios")) {
            filtro_sidebar.categoria="accesorios";

            aplicarFiltros();

      }
   }
});
rangoPrecioMaximo.addEventListener("change",function () {
   filtro_sidebar.rango=rangoPrecioMaximo.value;
})
checkSoloStock.addEventListener("change",function () {
   if (checkSoloStock.checked) {
      filtro_sidebar.checkbox=true;
   }
   else{
      filtro_sidebar.checkbox=false;
   }
})


function aplicarFiltros() {
   
   let copia_lista=[...productos];
   let nueva_lista=[];
   let texto=inputBusqueda.value.toLowerCase();
   if (texto!=="") {
      nueva_lista=copia_lista.filter(producto=>producto.nombre.toLowerCase().includes(texto));
      pintarProductos(nueva_lista);
   }
   if (filtro_sidebar.categoria.includes("perifericos")) {
      nueva_lista=copia_lista.filter(producto=>producto.categoria.toLowerCase().includes("perifericos"));
      pintarProductos(nueva_lista);
   }
   if (filtro_sidebar.categoria.includes("componentes")) {
      nueva_lista=copia_lista.filter(producto=>producto.categoria.toLowerCase().includes("componentes"));
      pintarProductos(nueva_lista);
   }
   if (filtro_sidebar.categoria.includes("accesorios")) {
      nueva_lista=copia_lista.filter(producto=>producto.categoria.toLowerCase().includes("accesorios"));
      pintarProductos(nueva_lista);
   }
   console.log(filtro_sidebar.categoria)
   console.log(nueva_lista);
   if (!filtro_sidebar.rango<=0 ||!filtro_sidebar.rango>=1000) {
      nueva_lista=copia_lista.filter(producto=>producto.precio<=filtro_sidebar.rango);
      textoPrecioMaximo.textContent="Hasta "+filtro_sidebar.rango+" €";
      pintarProductos(nueva_lista);
   }      
   
   if (filtro_sidebar.checkbox) {
      nueva_lista=copia_lista.filter(producto=>producto.hayStock);
      pintarProductos(nueva_lista);
   }
   //depuracion
   pintarProductos(nueva_lista);

}
// pintarProductos(productos);
inputBusqueda.addEventListener("input",aplicarFiltros);
document.body.addEventListener("change",aplicarFiltros);
aplicarFiltros();
pintarProductos(productos);
});


