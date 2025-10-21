let btnMostrar=document.getElementById("btnMostrar");
let tabla=document.getElementById("tabla");

btnMostrar.addEventListener("click",function () {
    const inventario=[
        {nombre:"raton",cantidad:5},
        {nombre:"teclado",cantidad:10},
        {nombre:"monitor",cantidad:15},
        {nombre:"auriculares",cantidad:20},
    ];
    let ul=document.createElement("ul");
    tabla.appendChild(ul);
    for (const objeto of inventario) {
        let li=document.createElement("li");
        li.textContent=objeto.nombre+":"+objeto.cantidad;
        ul.appendChild(li);
    }
})