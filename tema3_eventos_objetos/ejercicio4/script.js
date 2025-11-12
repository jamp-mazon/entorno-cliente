// @ts-check
const btn_elemento=document.getElementById("btn_elemento");
let lista=document.getElementById("lista");
let contador=1;
btn_elemento.addEventListener("click",function () {
     let li=document.createElement("li");
    li.textContent="Elemento"+contador;
    lista.appendChild(li);
    contador++;
})
lista.addEventListener("click",function (event) {
    if (event.target.tagname==="LI") {
        alert("Has echo click en "+ event.target.textContent);
    }
})