// 4) Productos
const productos = [
  { id: 1, nombre: "Teclado", categoria: "perifericos", precio: 29.99, stock: 10, tags: ["pc","oficina"] },
  { id: 2, nombre: "Raton", categoria: "perifericos", precio: 14.50, stock: 0,  tags: ["pc"] },
  { id: 3, nombre: "Monitor", categoria: "pantallas",   precio: 129.00, stock: 3,  tags: ["pc","gaming"] },
  { id: 4, nombre: "HDMI",    categoria: "cables",      precio: 7.99,  stock: 25, tags: [] },
  { id: 5, nombre: "USB-C",   categoria: "cables",      precio: 9.99,  stock: 2,  tags: ["movil"] },
  { id: 6, nombre: "Silla",   categoria: "oficina",     precio: 89.90, stock: 1,  tags: ["oficina"] },
];
const conStock=productos.filter(producto=>{
    if (producto.stock>0) {
        return producto;
    }
});
const cablesPrecio=productos.filter(producto=>{
    if (producto.categoria==="cables" && producto.precio<10) {
        return producto;
    }
});
console.log("ej4");
console.log(conStock);
console.log(cablesPrecio);