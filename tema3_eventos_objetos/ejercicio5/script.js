const padre=document.getElementById("padre");
const hijo=document.getElementById("hijo");
const nieto=document.getElementById("nieto");

padre.addEventListener("click",function () {
    alert("Soy el padre")
},true);
hijo.addEventListener("click",function () {
    alert("Soy el hijo");
    
},true);
nieto.addEventListener("click",function () {
    alert("Soy el nieto");
    
},true);