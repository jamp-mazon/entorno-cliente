let txtBuscar=document.getElementById("txtBuscar");
let btnBuscar=document.getElementById("btnBuscar");
let ul=document.getElementById("resultado");
let usuarios=["manolo","paco","pepe","eustaquio"];

btnBuscar.addEventListener("click",function () {
    let texto = txtBuscar.value;
    for (const nombre of usuarios) {
        if (nombre===texto) {
            let li=document.createElement("li");
            li.textContent=nombre;
            ul.appendChild(li);
        }
    }  
})