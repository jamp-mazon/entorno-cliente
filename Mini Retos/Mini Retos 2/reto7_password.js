let btn_comprobar=document.getElementById("r7-check");
btn_comprobar.addEventListener("click",function () {
    let error=document.getElementById("r7-resultado");
    error.textContent="";
    let password=document.getElementById("r7-pwd");
    let existeNumero=false;
    for (let i = 0; i < password.value.length; i++) {
        if (!isNaN(Number(password.value[i]))) {
            existeNumero=true;
            break;
        }
    }
   if (password.value.length<6 || existeNumero==false) {
        error.textContent="Error:es menor de 6 caracteres o no tiene numero";
        error.style.color="red";
        return;
   }
   error.textContent="Contraseña correcta!!";
   error.style.color="green";
})