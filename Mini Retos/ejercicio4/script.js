let nombre=document.getElementById("nombre");
let btnCorreo=document.getElementById("btnCorreo");
let salida=document.getElementById("salida");

btnCorreo.addEventListener("click",function () {
    let correo=nombre.value.toLocaleLowerCase();
    correo=correo.replace(/\s+/g,"");
    if (correo.includes('@')) {
        if (correo.includes(".")) {
            salida.textContent=correo;
        }
        else{
            salida.textContent=correo+".local";
        }
    }
    else{
        salida.textContent=correo+"@centrofp.local";
    }

})