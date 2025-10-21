let txtBuscar=document.getElementById("txtBuscar");
let btnBuscar=document.getElementById("btnBuscar");
let ul=document.getElementById("resultado");
let usuarios=["manolo","paco","pepe","eustaquio"];
txtBuscar=txtBuscar.textContent.toLocaleLowerCase();
btnBuscar.addEventListener("click",function () {
    for (const nombre of usuarios) {
        if (nombre===txtBuscar.textContent) {
            let li=document.createElement("li");
            ul.appendChild(li);
            li.textContent=""
        }
    }  
})