document.addEventListener("DOMContentLoaded",init());

function init() {
    const form_login=document.getElementById("form-login");
    let user=document.getElementById("user");
    let pass=document.getElementById("pass");
    let mensaje=document.getElementById("msg");

    form_login.addEventListener("submit",function (event) {
        event.preventDefault();
        todoOK=true;
        if (user.value=="") {
            mensaje.textContent="Error campo Nombre vacio...";
            mensaje.style.color="darkred";
            todoOK=false;
        }
        if (pass.value=="") {
            mensaje.textContent="Error campo contraseña vacio...";
            mensaje.style.color="darkred";
            todoOK=false;
        }
       if(todoOK){
        mensaje.textContent="Login Correcto:"+user.value;
        mensaje.style.color="green";
       }
       else{
        return;
       }
       form_login.submit();
                
    })
}