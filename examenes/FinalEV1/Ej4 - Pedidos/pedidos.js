// EJERCICIO 4 - Gestor de pedidos del bar
// Usa varias clases relacionadas, arrays y eventos.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)

// 1. Crea la clase ProductoBar
class Producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}
// 2. Crea la clase LineaPedido con los métodos que consideres oportunos:
let conta_id=0;
class LineaPedido{
    constructor(producto, cantidad){
        this.id=conta_id++;
        this.nombre=producto.nombre;
        this.precio=producto.precio;
        this.cantidad=cantidad;
        this.total_linea=Number(producto.precio*this.cantidad);
    }
}
// 3. Crea la clase Pedido con:
//    - propiedades:
//        * lineas (array de LineaPedido)
//        * estado ("abierto" o "confirmado")
//    - métodos:
//        * agregarProducto(producto)
//            - si el producto ya existe en alguna línea, aumenta la cantidad
//            - si no, crea una nueva línea con cantidad 1
//        * cambiarCantidad(producto, delta)
//            - busca la línea del producto
//            - suma delta a cantidad (delta puede ser +1 o -1)
//            - si la cantidad llega a 0, elimina la línea del array
//        * total()
//            - recorre las líneas y devuelve la suma de todos los subtotales
//        * vaciar()
//            - deja el array de lineas vacío
//        * confirmar()
//            - cambia el estado a "confirmado"
class Pedido{
    constructor(lista_lineas_pedido){
        this.lista_lineas_pedido=lista_lineas_pedido;
        this.estado="abierto";
    }
    agregarProducto(producto){
        for (const linea_producto of this.lista_lineas_pedido) {
            if (linea_producto.nombre.includes(producto.nombre)) {
                linea_producto.cantidad++;
                linea_producto.total_linea=linea_producto.cantidad*linea_producto.precio
                return;
            }
        }
        const nueva_linea = new LineaPedido(producto, 1);
        this.lista_lineas_pedido.push(nueva_linea);
    }
    cambiarCantidad(nombre_producto,delta){
        for (let i = 0; i < this.lista_lineas_pedido.length; i++) {
            if (this.lista_lineas_pedido[i].nombre.includes(nombre_producto)) {
                    this.lista_lineas_pedido[i].cantidad+=delta;
                    this.lista_lineas_pedido[i].total_linea=this.lista_lineas_pedido[i].precio*this.lista_lineas_pedido[i].cantidad;
                }
                if (this.lista_lineas_pedido[i].cantidad<=0) {
                    this.lista_lineas_pedido[i].splice(i,1);
                }
            }   
        }
    devolverProducto(nombre_producto){
        for (const linea of this.lista_lineas_pedido) {
            if (linea.nombre.includes(nombre_producto)) {
                return 
            }
        }
    }
    total_pedido(){
        let total=0;
        for (const linea of this.lista_lineas_pedido) {
            total=total+(linea.cantidad*linea.precio);
        }
        return total;
    }
    vaciar_pedido(){
        this.lista_lineas_pedido=[];
    }
    cerrar_pedido(){
        this.estado="cerrado";
    }

}
// 4. Crea un array "productosBar" con varios objetos ProductoBar,
//    por ejemplo: agua, café, bocadillo, refresco, etc.
//    Cada uno con su nombre y precio.
const productosBar = [
    new Producto("Agua", 1.2),
    new Producto("Cafe", 1.4),
    new Producto("Bocadillo", 3.5),
    new Producto("Refresco", 2.2),
    new Producto("Tortilla", 2.8),
];

// 5. Crea una instancia de Pedido, por ejemplo llamada "pedidoActual".
const depu_producto=new Producto("Depuracion",1);
const lista_lineas=[
    // new LineaPedido(depu_producto,1)
];
const pedidoActual=new Pedido(lista_lineas);
// 6. Captura los elementos del DOM que vas a usar.
// ¡IMPORTANTE! Revisa el archivo pedidos.html para ver los IDs y clases.
// ¡IMPORTANTE! No modifiques el HTML ni el CSS.
// ¡IMPORTANTE! Ningún elemento del DOM debe quedar sin capturar ni sin usar.
const listaProductos = document.getElementById("listaProductos");
const listaCarrito = document.getElementById("listaCarrito");
const textoEstado = document.getElementById("textoEstado");
const estadoPedido = document.getElementById("estadoPedido");
const totalPedido = document.getElementById("totalPedido");
const btnVaciarPedido = document.getElementById("btnVaciarPedido");
const btnConfirmarPedido = document.getElementById("btnConfirmarPedido");
const mensajeInfo = document.getElementById("mensajeInfo");

// 7. Crea una función "pintarProductosBar()" que:
//    - recorra el array productosBar
//    - para cada producto cree una tarjeta con:
//        * nombre
//        * precio
//        * botón "Añadir"
//      El botón puede tener un atributo data-nombre o data-index
//      para saber qué producto se ha pulsado.
//    - añada todas las tarjetas a listaProductos
function pintarProductosBar() {
    for (const producto of productosBar) {
        const div_tarjeta=document.createElement("div");
        div_tarjeta.classList.add("tarjeta-producto");

        const h3=document.createElement("h3");
        const p=document.createElement("p");
        const btn_add=document.createElement("button");
        
        h3.textContent=producto.nombre;
        p.textContent=producto.precio;
        btn_add.textContent="Añadir";

        btn_add.classList.add("btn-add");
        btn_add.setAttribute("data-nombre",producto.nombre);

        div_tarjeta.appendChild(h3);
        div_tarjeta.appendChild(p);
        div_tarjeta.appendChild(btn_add);

        listaProductos.appendChild(div_tarjeta);
    }
}
// 8. Crea una función "pintarCarrito()" que:
//    - vacíe listaCarrito
//    - recorra pedidoActual.lineas
//    - para cada línea cree un <li> con:
//        * nombre del producto
//        * cantidad
//        * subtotal
//        * botones "+" y "-" para cambiar cantidad
//      Los botones pueden tener data-nombre o data-index
//      para saber a qué producto pertenecen.
//    - actualice el total mostrando pedidoActual.total()
//      en el elemento totalPedido
function pintarCarrito() {
    console.log("Estoy en pintar carrito");
    listaCarrito.innerHTML="";
    
    for (const lineas of pedidoActual.lista_lineas_pedido) {
        console.log(lineas.nombre);
        const li=document.createElement("li");
        li.classList.add("linea-carrito");
        const pNombre=document.createElement("p");
        pNombre.classList.add("linea-nombre");
        const pCantidad=document.createElement("p");

        const pSubtotal=document.createElement("p");
        const add=document.createElement("button");
        const restar=document.createElement("button");

        pNombre.textContent=lineas.nombre;
        pCantidad.textContent=`Cantidad:${lineas.cantidad}`;
        pCantidad.classList.add("linea-detalle");
        pSubtotal.textContent=`Coste:${lineas.total_linea.toFixed(2)}`;
        pCantidad.classList.add("linea-detalle");
        add.textContent="+";
        add.classList.add("linea-controles");
        restar.textContent="-";
        restar.classList.add("linea-controles");
        add.setAttribute("data-nombre",lineas.nombre);
        restar.setAttribute("data-nombre",lineas.nombre);
        add.setAttribute("data-text","sumar");
        restar.setAttribute("data-text","restar");
        
        li.appendChild(pNombre);
        li.appendChild(pCantidad);
        li.appendChild(pSubtotal);
        li.appendChild(add);
        li.appendChild(restar);

        listaCarrito.appendChild(li);
    }
    console.log(pedidoActual.lista_lineas_pedido);
    totalPedido.textContent=`Total: ${pedidoActual.total_pedido().toFixed(2)} € `;

}
// 9. Crea una función "actualizarEstadoPedido()" que:
//    - lea pedidoActual.estado
//    - actualice el texto de textoEstado
//    - cambie la clase CSS (pedido-abierto / pedido-confirmado)
//    - si el estado es "confirmado":
//        * muestra un mensaje en mensajeInfo indicando que
//          el pedido ya no se puede modificar
//      si es "abierto":
//        * mensaje indicando que se pueden añadir productos
function actualizarEstadoPedido() {
    const estado=pedidoActual.estado;
    if (estado==="abierto") {
        textoEstado.textContent="ABIERTO ";
        textoEstado.classList.add("pedido-abierto");
    }
    else{
         textoEstado.textContent="CERRADO ";
        textoEstado.classList.add("pedido-confirmado");    
        mensajeInfo.textContent="No se puede modificar el pedido";   
    }
    
}
// 10. Añade un listener de "click" a listaProductos (delegación de eventos):
//     - si el botón pulsado tiene la clase "btn-add":
//         * comprobar si el pedido está "abierto"
//         * buscar el producto correspondiente en productosBar
//         * llamar a pedidoActual.agregarProducto(producto)
//         * llamar a pintarCarrito()
//         * actualizar el mensajeInfo
//     - si el pedido está "confirmado", no debe permitir añadir productos.
listaProductos.addEventListener("click",function (event) {
    if (event.target.className === "btn-add") {
        const nombre_producto=event.target.getAttribute("data-nombre");

        if (pedidoActual.estado==="abierto") {

            if (pedidoActual.lista_lineas_pedido.includes(nombre_producto)) {
                for (const linea of pedidoActual.lista_lineas_pedido) {
                    if (linea.nombre.includes(nombre_producto)) {
                        linea.aumentar_cantidad();
                        pintarCarrito();
                        actualizarEstadoPedido();
                        return;
                }
            }
            }
            for (const producto of productosBar) {
                if (producto.nombre.includes(nombre_producto)) {
                    pedidoActual.agregarProducto(producto);
                    pintarCarrito();
                    actualizarEstadoPedido();
                }
            }
        }
        else{
            pintarCarrito();
            actualizarEstadoPedido();
        }
    }
})
// 11. Gestiona las interacciones en listaCarrito:
//     - Implementa delegación de eventos en el contenedor del carrito
//     - Identifica qué tipo de acción quiere realizar el usuario
//     - Localiza el producto correspondiente a la acción
//     - Modifica la cantidad según la acción realizada
//     - Verifica que el pedido pueda ser modificado antes de hacer cambios
//     - Actualiza la visualización después de cada modificación
listaCarrito.addEventListener("click",function (event) {
    if (event.target.tagName==="BUTTON") {
        const nombre_prod=event.target.getAttribute("data-nombre");
        for (const linea of pedidoActual.lista_lineas_pedido) {
                if (linea.nombre.includes(nombre_prod)) {
                    const liBotone=event.target.getAttribute("data-text");
                    if (liBotone.includes("sumar")) {
                        pedidoActual.cambiarCantidad(nombre_prod,1);
                        break;
                    }
                    else{
                        pedidoActual.cambiarCantidad(nombre_prod,-1);
                        break;
                    }
                }
        }
    }
    pintarCarrito();
    actualizarEstadoPedido();
})
// 12. Evento en btnVaciarPedido:
//     - Verifica el estado del pedido antes de realizar acciones
//     - Limpia el contenido del pedido si es posible
//     - Actualiza la interfaz para reflejar los cambios
//     - Proporciona feedback al usuario sobre la acción realizada
btnVaciarPedido.addEventListener("click",function () {
    if (pedidoActual.estado.includes("cerrado")) {
        return;
    }
    else{
        pedidoActual.vaciar_pedido();
        pintarCarrito();
        actualizarEstadoPedido();
    }
})
// 13. Evento en btnConfirmarPedido:
//     - llamar a pedidoActual.confirmar()
//     - actualizarEstadoPedido()
//     - actualizar mensajeInfo
btnConfirmarPedido.addEventListener("click",function () {
    pedidoActual.cerrar_pedido();
    actualizarEstadoPedido();
    mensajeInfo.textContent="CERRADO";
})
// 14. Al cargar la página:
//     - llama a pintarProductosBar()
//     - llama a pintarCarrito() (estará vacío al principio)
//     - llama a actualizarEstadoPedido()
//     - escribe un mensaje inicial en mensajeInfo
pintarProductosBar();
pintarCarrito();
