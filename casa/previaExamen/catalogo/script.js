// EJERCICIO 5 - CATÁLOGO INTERACTIVO
// Enlazar al final de ej5-catalogo.html

// Clase Producto: nombre, categoria, precio, stock (true/false)
class Producto {
    constructor(nombre,categoria,precio,stock){
        this.nombre=nombre;
        this.categoria=categoria;
        this.precio=precio;
        this.stock=stock;//boolean
    }
    // Crea un constructor con esos parámetros
    // Puedes añadir métodos auxiliares si lo ves útil (por ejemplo, para texto de stock)
}

// Array con algunos productos de ejemplo (instancias de Producto)
// Ejemplo de categorías: "periferico", "almacenamiento", "pantalla", "otro"

const productos = [
    new Producto("Teclado mecánico", "periferico", 49.99, true),
    new Producto("Ratón inalámbrico", "periferico", 24.5, true),
    new Producto("Alfombrilla XXL", "periferico", 15.99, true),
    new Producto("Monitor 27\" 144Hz", "pantalla", 259.99, false),
    new Producto("SSD NVMe 1TB", "almacenamiento", 89.9, true),
    new Producto("Disco externo 2TB", "almacenamiento", 79.5, true),
    new Producto("Auriculares gaming", "audio", 39.95, false),
    new Producto("Altavoz Bluetooth", "audio", 29.99, true),
    new Producto("Webcam 1080p", "periferico", 34.99, true),
    new Producto("Hub USB-C 6 puertos", "otro", 27.0, true)
    // new Producto("Teclado mecánico", "periferico", 49.99, true),
    // ...
];

// Referencias al DOM: buscador, selectCategoria, checkSoloStock, contenedorTarjetas, mensajeSinResultados
const buscador = document.getElementById("buscadorNombre");
const selectCategoria = document.getElementById("selectCategoria");
const checkSoloStock = document.getElementById("checkSoloStock");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const mensajeSinResultados = document.getElementById("mensajeSinResultados");
// Función que recibe un array de productos y los "pinta" en el contenedor
function renderizarProductos(lista) {
    // Vacía el contenedor de tarjetas
    contenedorTarjetas.innerHTML="";
    // Si la lista está vacía:
    //  - mostrar el mensajeSinResultados
    //  - y salir de la función
    if (lista.length==0) {
        mensajeSinResultados.style.display="block";
        mensajeSinResultados.textContent="No se encuentran resultados";
        return;
    }
    else{
        mensajeSinResultados.style.display="none";
        for (const producto of lista) {
            const div_tarjeta=document.createElement("div");
            div_tarjeta.classList.add("tarjeta");
            let h3=document.createElement("h3");
            h3.textContent=producto.nombre
            let pCategoria=document.createElement("p");
            pCategoria.textContent=producto.categoria;
            pCategoria.classList.add("badge-categoria");
            let pPrecio=document.createElement("p");
            pPrecio.textContent=producto.precio;
            let pStock=document.createElement("p");
            if (producto.stock) {
                pStock.textContent="Si hay Stock";
                pStock.classList.add("stock-ok");
            }
            else{
                pStock.textContent="No hay Stock";
                pStock.classList.add("stock-no");
            }
            div_tarjeta.appendChild(h3);div_tarjeta.appendChild(pCategoria);
            div_tarjeta.appendChild(pPrecio);div_tarjeta.appendChild(pStock);
            contenedorTarjetas.appendChild(div_tarjeta);
            // div_tarjeta.addEventListener("mouseover",function (event) {
            //     div_tarjeta.classList.add("hover");
            //     event.stopPropagation();
            // });
            // div_tarjeta.addEventListener("mouseout",function (event) {
            //     div_tarjeta.className="tarjeta";
            //     event.stopPropagation();
            // })

            }

    }
    // Si hay elementos:
    //  - ocultar mensajeSinResultados
    //  - recorrer la lista y crear un div.tarjeta por cada producto
    //  - dentro de la tarjeta, crear:
    //      * h3 con el nombre
    //      * span o p con la categoría (badge-categoria)
    //      * p con el precio
    //      * p indicando si hay stock (stock-ok o stock-no)
    //  - añadir listeners de mouseover / mouseout si se quiere cambiar ligeramente el estilo
}

// Función que aplica los filtros actuales al array de productos
function obtenerProductosFiltrados() {
    // Leer el texto del buscador, la categoría seleccionada y el checkbox de stock
    let nombre_filtrado=buscador.value.toLowerCase();
    let select_filtrado=selectCategoria.value.toLowerCase();
    let checkbox_filtrado;
    if (checkSoloStock.checked) {
         checkbox_filtrado=true;
    }
    else{
        checkbox_filtrado=false;
    }
    const lista_filtrada=[];
    if (checkbox_filtrado) {
        for (const producto of productos) {
            if (!producto.stock) {
                continue;
            }
            else{
                if (producto.nombre.toLowerCase().includes(nombre_filtrado)) {
                    if (select_filtrado==="todos") {
                        lista_filtrada.push(producto)
                    }
                    else if(select_filtrado===producto.categoria){
                        lista_filtrada.push(producto)
                    }
                    
                }
            }
            
        }
    }
    else{
        for (const producto of productos) {
            if (producto.nombre.toLowerCase().includes(nombre_filtrado)) {
                if (select_filtrado === "todos") {
                    lista_filtrada.push(producto)
                }
                else if (select_filtrado === producto.categoria) {
                    lista_filtrada.push(producto)
                }

            }
        }   
    }
    return lista_filtrada;
    // Crear un nuevo array filtrado a partir de productos:
    //  - por nombre: incluye si contiene el texto del buscador (toLowerCase)
    //  - por categoría: si selectCategoria no es "todos", filtra por esa categoría
    //  - por stock: si checkSoloStock está marcado, filtra para que solo aparezcan los que tienen stock true

    // Devolver el array filtrado
}

// Función principal que actualiza la vista según los filtros
function actualizarVista() {
    // Llama a obtenerProductosFiltrados()
    // Llama a renderizarProductos() con el resultado
    const nueva_lista=obtenerProductosFiltrados();
    renderizarProductos(nueva_lista);
}

buscador.addEventListener("input",function (event) {
    actualizarVista();
});
selectCategoria.addEventListener("change",function () {
    actualizarVista();
})
checkSoloStock.addEventListener("change",function () {
    actualizarVista();
});
actualizarVista();
// Eventos:
// - input en el buscador (para filtrar en tiempo real)
// - change en el selectCategoria
// - change en el checkSoloStock

// En cada evento, llamar a actualizarVista()

// Llamar a actualizarVista() una vez al cargar la página para mostrar el catálogo inicial