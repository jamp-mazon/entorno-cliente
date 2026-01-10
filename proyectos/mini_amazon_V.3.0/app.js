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

   const filtro_sidebar={
      categoria:null,
      rango:1000,
      checkbox:false,
      texto:""
      };

   function aplicarFiltros() {
      const textoBusqueda=filtro_sidebar.texto.trim().toLowerCase();
      let nueva_lista=[...productos];

      if (textoBusqueda!=="") {
         nueva_lista=nueva_lista.filter(producto=>producto.nombre.toLowerCase().includes(textoBusqueda));
      }

      if (filtro_sidebar.categoria) {
         nueva_lista=nueva_lista.filter(producto=>producto.categoria.toLowerCase()===filtro_sidebar.categoria);
      }

      if (typeof filtro_sidebar.rango==="number") {
         textoPrecioMaximo.textContent="Hasta "+filtro_sidebar.rango+" €";
         nueva_lista=nueva_lista.filter(producto=>producto.precio<=filtro_sidebar.rango);
      }

      if (filtro_sidebar.checkbox) {
         nueva_lista=nueva_lista.filter(producto=>producto.hayStock);
      }

      pintarProductos(nueva_lista);
   }

   chipsCategorias.addEventListener("click",function (event) {
      if (event.target.tagName!=="BUTTON") {
         return;
      }
      const categoriaSeleccionada=event.target.getAttribute("data-nombre");
      if (filtro_sidebar.categoria===categoriaSeleccionada) {
         filtro_sidebar.categoria=null;
      } else {
         filtro_sidebar.categoria=categoriaSeleccionada;
      }
      aplicarFiltros();
   });

   rangoPrecioMaximo.addEventListener("input",function () {
      filtro_sidebar.rango=Number(rangoPrecioMaximo.value);
      aplicarFiltros();
   });

   checkSoloStock.addEventListener("change",function () {
      filtro_sidebar.checkbox=checkSoloStock.checked;
      aplicarFiltros();
   });

   inputBusqueda.addEventListener("input",function () {
      filtro_sidebar.texto=inputBusqueda.value;
      aplicarFiltros();
   });

   btnLimpiarFiltros.addEventListener("click",function () {
      filtro_sidebar.categoria=null;
      filtro_sidebar.rango=Number(rangoPrecioMaximo.max ?? 1000);
      filtro_sidebar.checkbox=false;
      filtro_sidebar.texto="";

      inputBusqueda.value="";
      rangoPrecioMaximo.value=filtro_sidebar.rango;
      textoPrecioMaximo.textContent="Hasta "+filtro_sidebar.rango+" €";
      checkSoloStock.checked=false;

      aplicarFiltros();
   });

   const carrito=new Map();

   function renderCarrito() {
      listaCarrito.innerHTML="";
      let total=0;
      let totalUnidades=0;

      carrito.forEach((linea) => {
         const {producto, unidades}=linea;
         total+=producto.precio*unidades;
         totalUnidades+=unidades;

         const fila=document.createElement("div");
         fila.classList.add("linea-carrito");
         fila.setAttribute("data-id-producto",producto.nombre);

         const miniatura=document.createElement("img");
         miniatura.classList.add("linea-carrito__miniatura");
         miniatura.src=producto.img;
         miniatura.alt="";

         const info=document.createElement("div");
         info.classList.add("linea-carrito__info");

         const nombre=document.createElement("p");
         nombre.classList.add("linea-carrito__nombre");
         nombre.textContent=producto.nombre;

         const detalle=document.createElement("span");
         detalle.classList.add("linea-carrito__detalle");
         detalle.textContent=`${unidades} × ${producto.precio.toFixed(2)} €`;

         info.appendChild(nombre);
         info.appendChild(detalle);
         fila.appendChild(miniatura);
         fila.appendChild(info);
         listaCarrito.appendChild(fila);
      });

      if (carrito.size===0) {
         listaCarrito.textContent="El carrito está vacío";
      }

      totalCarrito.textContent=total.toFixed(2)+" €";
      contadorCarrito.textContent=totalUnidades.toString();
   }

   function anadirAlCarrito(nombreProducto) {
      const producto=productos.find(prod=>prod.nombre===nombreProducto);
      if (!producto) return;
      if (!producto.hayStock || producto.cantidad<=0) return;

      const lineaExistente=carrito.get(nombreProducto) || {producto, unidades:0};
      if (lineaExistente.unidades>=producto.cantidad) {
         return;
      }

      lineaExistente.unidades+=1;
      carrito.set(nombreProducto,lineaExistente);
      renderCarrito();
   }

   gridProductos.addEventListener("click",(event)=>{
      const boton=event.target;
      if (boton.classList.contains("boton-anadir")) {
         const nombreProducto=boton.getAttribute("data-nombre");
         anadirAlCarrito(nombreProducto);
      }
   });

   listaCarrito.innerHTML="";
   aplicarFiltros();
   renderCarrito();
});


