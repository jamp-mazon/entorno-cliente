let btn_contar=document.getElementById("btnContar");
let p=document.getElementById("resultado");
let numero=0;
btn_contar.addEventListener("click",function () {
    numero++;
    p.textContent=`Has hecho ${numero} clics.`;
})