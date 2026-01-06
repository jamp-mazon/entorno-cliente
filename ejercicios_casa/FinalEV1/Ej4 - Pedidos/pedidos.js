// ======================================================
// Archivo JS vaciado para que lo completes tú
// (se ha borrado el contenido original)
// ======================================================
// EJERCICIO 4 - Gestor de pedidos del bar
// Usa varias clases relacionadas, arrays y eventos.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)
// 1. Crea la clase ProductoBar
class ProductoBar{
    constructor(nombre,precioUnitario){
        this.nombre=nombre;
        this.precioUnitario=precioUnitario;
    }
}
// 2. Crea la clase LineaPedido con los métodos que consideres oportunos:
class LineaPedido{
    constructor(producto,cantidad){
        this.producto=producto;
        this.cantidad=cantidad;
    }
    totalLinea(){
        const total=Number(this.producto.precioUnitario*this.cantidad);
        return total;
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
//            - si al restar llega a 0, elimina la línea
//        * getTotal()
//            - devuelve el total del pedido
//        * confirmar()
//            - cambia el estado a "confirmado" si hay al menos 1 línea
class Pedido{
    constructor(lista_lineas){
        this.lista_lineas=lista_lineas;
        this.estado="abierto";
    }
    agregarProducto(producto){
        const nombreBuscado=producto.nombre.toLowerCase();
        let encontrada=false;
        for (let i = 0; i < this.lista_lineas.length; i++) {
            if (this.lista_lineas[i].producto.nombre.toLowerCase()===nombreBuscado) {
                this.lista_lineas[i].cantidad++;
                encontrada=true;
                break;
            }
        }
        if (!encontrada){
            const nueva_linea=new LineaPedido(producto,1);
            this.lista_lineas.push(nueva_linea);
        }
    }
    cambiarCantidad(producto,delta){
        const nombreBuscado=producto.nombre.toLowerCase();
        for (let i = 0; i < this.lista_lineas.length; i++) {
            const linea=this.lista_lineas[i];
            if (linea.producto.nombre.toLowerCase()===nombreBuscado) {
                const nuevaCantidad=linea.cantidad+delta;
                if (nuevaCantidad>0){
                    linea.cantidad=nuevaCantidad;
                }else{
                    this.lista_lineas.splice(i,1);
                }
                break;
            }
        }
    }
    getTotal(){
        let total=0;
        for (let i = 0; i < this.lista_lineas.length; i++) {
            const linea=this.lista_lineas[i];
            total+=linea.totalLinea();
        }
        return total;
    }
    confirmarPedido(){
        if (this.lista_lineas.length>0) {
            if (this.estado==="abierto") {
                this.estado="confirmado";
            }
        }
    }
}
// 4. Crea un array "productosBar" con varios productos (nombre y precio)
const productosBar=[
    new ProductoBar("Solo",1),
    new ProductoBar("Cortado",1.2),
    new ProductoBar("Cafe con Leche",1.4),
    new ProductoBar("Refresco",1.5),
    new ProductoBar("Mixto",2.5)
];
// 5. Crea un objeto "pedidoActual" de tipo Pedido
const lista_lineas=[];
const pedidoActual=new Pedido(lista_lineas);
// 6. Captura los elementos del DOM que vas a usar:
//    - contenedorProductos, listaCarrito, totalCarrito, estadoPedido, mensajeInfo
//    - botones: btnConfirmarPedido, btnNuevoPedido
const contenedorProductos=document.getElementById("listaProductos");
const listaCarrito=document.getElementById("listaCarrito");
const totalPedido=document.getElementById("totalPedido");
const textoEstado=document.getElementById("textoEstado");
const mensajeInfo=document.getElementById("mensajeInfo");

const btnConfirmarPedido=document.getElementById("btnConfirmarPedido");
const btnNuevoPedido=document.getElementById("btnNuevoPedido");
// 7. Crea una función "pintarProductosBar()" que:
//    - vacíe contenedorProductos
//    - recorra productosBar y pinte cada producto como una tarjeta con botón "Añadir"
//    - el botón debe llevar data-op="add" y data-index con el índice del producto
function pintarProductosBar() {
    contenedorProductos.innerHTML="";
    for (let i = 0; i < productosBar.length; i++) {
        const producto=productosBar[i];
        const articulo=document.createElement("article");
        articulo.classList.add("tarjeta-producto");
        const h3=document.createElement("h3");
        h3.textContent=producto.nombre;
        articulo.appendChild(h3);
        const precio=document.createElement("p");
        precio.textContent=producto.precioUnitario+"€";
        precio.classList.add("precio-producto")
        articulo.appendChild(precio);
        const btnAdd=document.createElement("button");
        btnAdd.textContent="Añadir";
        btnAdd.setAttribute("data-op","add");
        btnAdd.setAttribute("data-index",i);
        btnAdd.classList.add("btn-add");
        articulo.appendChild(btnAdd);
        contenedorProductos.appendChild(articulo);
    }
}
//FUncion para comprobar si existe la linea en una lista de lineas.
function existeLinea(lista_lineas,linea_nueva) {
    for (let i = 0; i < lista_lineas.length; i++) {
        const linea = lista_lineas[i];
        if (linea.producto.nombre.toLowerCase().includes(linea_nueva.producto.nombre.toLowerCase())) {
            return true;
        }
    }
    return false;
}
function devolverLinea(lista_lineas,linea_nueva){
    for (let i = 0; i < lista_lineas.length; i++) {
        const linea = lista_lineas[i];
        if (linea.producto.nombre.toLowerCase().includes(linea_nueva.producto.nombre.toLowerCase())){
            return linea;
        }
    }
    return null;
}
// 8. Crea una función "pintarCarrito()" que:
//    - vacíe listaCarrito
//    - recorra pedidoActual.lineas y pinte cada línea con:
//        * nombre del producto
//        * cantidad
//        * subtotal de la línea
//        * botones + y -
//          - botón + : data-op="inc" y data-index con el índice de la línea
//          - botón - : data-op="dec" y data-index con el índice de la línea
//    - actualice totalCarrito con pedidoActual.getTotal()
function pintarCarrito() {
    listaCarrito.innerHTML="";
    const liCabecera=document.createElement("li");
    liCabecera.textContent=
    "PRODUCTO     CANTIDAD          COSTE";
    listaCarrito.appendChild(liCabecera);
    for (let i = 0; i < pedidoActual.lista_lineas.length; i++) {
        const linea = pedidoActual.lista_lineas[i];
        const totalLinea= linea.totalLinea();
        const li=document.createElement("li");
        li.classList.add("linea-carrito")
        const pContenido=document.createElement("p");
        pContenido.textContent=`
        ${linea.producto.nombre}             ${linea.cantidad}             ${totalLinea}€
        `;
        li.appendChild(pContenido);
        listaCarrito.appendChild(li);
    }
}
// 9. Crea una función "actualizarEstadoPedido()" que:
//    - muestre el estado del pedido (abierto/confirmado)
//    - deshabilite/oculte botones según corresponda
function actualizarEstadoPedido() {
    if (pedidoActual.estado==="abierto") {
        console.log("entro en estado");
        textoEstado.textContent="Abierto";
    }
    else{
        textoEstado.textContent="CONFIRMADO";
    }
}
// 10. Delegación de eventos en contenedorProductos (click):
//     - si el click viene de un botón con data-op="add"
//       añade el producto correspondiente al pedido y repinta carrito + estado
contenedorProductos.addEventListener("click",function (event) {
    if (event.target.tagName!=="BUTTON") {
        return
    }
    else{
        const btnAdd=event.target;
        if (btnAdd.getAttribute("data-op")==="add") {
            const index=Number(btnAdd.getAttribute("data-index"));
            const nueva_linea=new LineaPedido(productosBar[index],1);
            if (existeLinea(lista_lineas,nueva_linea)) {
                const linea_existente=devolverLinea(lista_lineas,nueva_linea);
                linea_existente.cantidad++;
                pintarCarrito()
                actualizarEstadoPedido()
                const total=pedidoActual.getTotal();
                console.log("entro aqui.");
                console.log(total+"€");
                totalPedido.textContent=`Total: ${total} € `;
            }
            else{
                lista_lineas.push(nueva_linea);
                pintarCarrito();
                actualizarEstadoPedido();
                const total=pedidoActual.getTotal();
                totalPedido.textContent=`Total: ${total} € `;
            }
        }   
    }
})
// 11. Delegación de eventos en listaCarrito (click):
//     - si data-op="inc": aumenta cantidad
//     - si data-op="dec": reduce cantidad y si llega a 0 elimina línea
//     - tras cambios, repinta carrito + estado

// 12. Evento en btnNuevoPedido:
//     - Crea un nuevo Pedido si el actual está confirmado o si el carrito está vacío
//     - Limpia el contenido del pedido si es posible
//     - Actualiza la interfaz para reflejar los cambios
//     - Proporciona feedback al usuario sobre la acción realizada

// 13. Evento en btnConfirmarPedido:
//     - llamar a pedidoActual.confirmar()
//     - actualizarEstadoPedido()
//     - actualizar mensajeInfo
btnConfirmarPedido.addEventListener("click",function () {
    pedidoActual.confirmarPedido();
    actualizarEstadoPedido();
})
// 14. Al cargar la página:
//     - llama a pintarProductosBar()
//     - llama a pintarCarrito() (estará vacío al principio)
//     - llama a actualizarEstadoPedido()
//     - escribe un mensaje inicial en mensajeInfo
pintarProductosBar();
pintarCarrito()
actualizarEstadoPedido()

