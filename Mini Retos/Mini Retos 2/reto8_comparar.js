let btn_comparar=document.getElementById("r8-comparar");
btn_comparar.addEventListener("click",function () {
    let palabra1=document.getElementById("r8-p1").value.trim();
    let palabra2=document.getElementById("r8-p2").value.trim();
    let mensaje=document.getElementById("r8-msg");
    palabra1=palabra1.toLowerCase();
    palabra2=palabra2.toLowerCase();
    if (palabra1!==palabra2) {
        mensaje.textContent="ERROR:las palabras no son iguales";
    }
    else{
        mensaje.textContent="Son iguales";
    }

})