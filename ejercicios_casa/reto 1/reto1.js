const btn_mostrar=document.getElementById("mostrar");
btn_mostrar.addEventListener("click",function () {

    inventario=[
       { pieza:"Tornillos", cantidad: 20},
       { pieza:"Arandelas", cantidad: 30},
       { pieza:"Tuercas", cantidad: 10},
    ];//creo el array
    let ul=document.createElement("ul");//me creo ul en el body
    for (const item of inventario) {//recorro el array con for of
        let li=document.createElement("li");//por cada pieza me creo un li
        li.textContent=`${item.pieza} : ${item.cantidad}`//le añado el contenido de la pieza al li
        ul.appendChild(li);//indico que li es hijo de ul 
    }
    document.body.appendChild(ul);
})