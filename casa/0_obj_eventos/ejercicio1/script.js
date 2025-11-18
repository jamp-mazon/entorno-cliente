const productos=[
    {id:1 , Nombre:"Raton", Precio:10},
    {id:2 , Nombre:"Teclado",Precio:15},
    {id:3 , Nombre:"Auriculares",Precio:20}
];

const input_productos=document.getElementById("contador-carrito");
const input_total=document.getElementById("total-carrito");
let cantidad_productos=0;
let total_carrito=0;
const botones_carrito=document.querySelectorAll(".btn-anadir-carrito");
botones_carrito.forEach(boton_carrito => {
    boton_carrito.addEventListener("click",function (event) {
    const id = Number(event.target.dataset.id)
    
    for (const producto of productos) {
        if (producto.id===id) {
            cantidad_productos++;
            total_carrito+=producto.Precio;
        }        
    }
    input_productos.textContent=cantidad_productos;
    input_total.textContent=total_carrito;
    
});
});