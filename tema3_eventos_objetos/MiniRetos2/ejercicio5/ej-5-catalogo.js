// EJERCICIO 5 - CATÁLOGO INTERACTIVO
// Enlazar al final de ej5-catalogo.html

// Clase Producto: nombre, categoria, precio, stock (true/false)
class Producto {
    // Crea un constructor con esos parámetros
    // Puedes añadir métodos auxiliares si lo ves útil (por ejemplo, para texto de stock)
    constructor(nombre,categoria,precio,stock){
        this.nombre=nombre;
        this.categoria=categoria;
        this.precio=precio;
        this.stock=stock;
    }
}

// Array con algunos productos de ejemplo (instancias de Producto)
// Ejemplo de categorías: "periferico", "almacenamiento", "pantalla", "otro"

const productos = [
    new Producto("Teclado mecanico","periferico",49.99,true),
    new Producto("Monitor LCD","periferico",120,true),
    new Producto("MSI intel-4521","hardware",531.23,false)    // new Producto("Teclado mecánico", "periferico", 49.99, true),
    // ...
];

// Referencias al DOM: buscador, selectCategoria, checkSoloStock, contenedorTarjetas, mensajeSinResultados
let buscadorNombre=document.getElementById("buscadorNombre");
let selectCategoria=document.getElementById("selectCategoria");
let checkSoloStock=document.getElementById("checkSoloStock");
let contenedorTarjetas=document.getElementById("contenedorTarjetas");
let mensajesSinResultados=document.getElementById("mensajeSinResultados");
// Función que recibe un array de productos y los "pinta" en el contenedor
function renderizarProductos(lista) {
    // Vacía el contenedor de tarjetas
    contenedorTarjetas.innerHTML="";
    // Si la lista está vacía:
    //  - mostrar el mensajeSinResultados
    //  - y salir de la función
    if (lista.length==0) {
        mensajesSinResultados.style.display="block";
        return;
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
    for (const producto of lista) {
        let div_tarjeta=document.createElement("div");
        let h3=document.createElement("h3");
        let span_categoria=document.createElement("span");
        let pPrecio=document.createElement("p");
        let pStock=document.createElement("p");
        //EMPIEZO A RELLENAR
        h3.textContent=producto.nombre;
        span_categoria.textContent=producto.categoria;
        pPrecio.textContent=producto.precio;
        if (producto.stock) {
            pStock.textContent="en Stock";
        } else {
            pStock.textContent="Sin Stock";
        }
        div_tarjeta.appendChild(h3);
        div_tarjeta.appendChild(span_categoria);
        div_tarjeta.appendChild(pPrecio);
        div_tarjeta.appendChild(pStock);
        contenedorTarjetas.appendChild(div_tarjeta);
    }
}

// Función que aplica los filtros actuales al array de productos
function obtenerProductosFiltrados(lista_productos) {
    // Leer el texto del buscador, la categoría seleccionada y el checkbox de stock
    buscadorNombre.addEventListener("input",function () {
            
    })
    
    
    let productos_filtrados=[];
    let textoBuscador=buscadorNombre.value.trim().toLowerCase();
    let categoria_buscar=selectCategoria.value;


    if (checkSoloStock.checked) {
        
        for (const producto of lista_productos) {
            if (textoBuscador===producto.nombre && producto.stock==true) {
                if (categoria_buscar=="todos") {
                    productos_filtrados.push(producto);
                }
                else if(categoria_buscar===producto.categoria){
                    productos_filtrados.push(producto);
                }
                else{
                    mensajesSinResultados.style.display="block";
                }
            }
            else{
                    mensajesSinResultados.style.display="block";
            }
        }
    }
    else{
        for (const producto of productos) {
            if (textoBuscador===producto.nombre) {
                productos_filtrados.push(producto);
            }
            else if(categoria_buscar===producto.categoria){
                productos_filtrados.push(producto);
            }
            else{
                mensajesSinResultados.style.display="block"
            }
        }
    }    
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
    obtenerProductosFiltrados(productos)
    renderizarProductos(productos)
}

// Eventos:
// - input en el buscador (para filtrar en tiempo real)
// - change en el selectCategoria
// - change en el checkSoloStock

// En cada evento, llamar a actualizarVista()

// Llamar a actualizarVista() una vez al cargar la página para mostrar el catálogo inicial