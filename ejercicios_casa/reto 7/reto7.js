let btnRojo=document.getElementById("btnRojo");
let btnAzul=document.getElementById("btnAzul");
let btnVerde=document.getElementById("btnVerde");

btnRojo.addEventListener("click",function () {
    document.body.style.backgroundColor="red";
})
btnAzul.addEventListener("click",function () {
    document.body.style.backgroundColor="blue";
})
btnVerde.addEventListener("click",function () {
    document.body.style.backgroundColor="green";
})  