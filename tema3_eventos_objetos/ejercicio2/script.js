let input=document.getElementById("input");

let parrafo=document.getElementById("parrafo");

input.addEventListener("keydown",function () {
    parrafo.textContent=event.key;
})