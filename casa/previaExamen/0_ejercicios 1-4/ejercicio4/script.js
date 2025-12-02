const formUser=document.getElementById("formUser");
const inpNombre=document.getElementById("inpNombre");
const inpEmail=document.getElementById("inpEmail");
const selRol=document.getElementById("selRol");
let mensaje=document.getElementById("msg");
const seccion_usuarios=document.getElementById("listaUsers");

class RegistroUsuarios{
    constructor (lista_usuarios){
        this.lista_usuarios=lista_usuarios;
    }
}
class Usuario{
    constructor(nombre,email,rol){
        this.nombre=nombre;
        this.email=email;
        this.rol=rol;
    }
}
const lista_usuarios=[];
formUser.addEventListener("submit",function (event) {
    event.preventDefault();
    todoOK=true;
    let nombre=inpNombre.value.trim();
    let email=inpEmail.value.trim();
    let rol=selRol.value;
    if (nombre==="") {
        todoOK=false;
    }
    if (email==="" ||!email.includes("@") ) {
        todoOK=false;
    }
    if (rol==="") {
        todoOK=false
    }
    if (todoOK) {
        const miUsuario=new Usuario(nombre,email,rol);
        lista_usuarios.push(miUsuario);
            let div_usuario=document.createElement("div");
            let pNombre=document.createElement("p");
            let pEmail=document.createElement("p");
            let pRol=document.createElement("p");
            
            pNombre.textContent=miUsuario.nombre;
            pEmail.textContent=miUsuario.email;
            pRol.textContent=miUsuario.rol;

            let btn_eliminar=document.createElement("button");
            btn_eliminar.textContent="Eliminar";
            div_usuario.appendChild(pNombre);
            div_usuario.appendChild(pEmail);
            div_usuario.appendChild(pRol);
            div_usuario.appendChild(btn_eliminar);
            div_usuario.classList.add("user-card");

            btn_eliminar.addEventListener("click",function (event) {
                event.stopPropagation();
                seccion_usuarios.removeChild(div_usuario)
            })
            div_usuario.addEventListener("click",function () {
                alert(`${miUsuario.nombre} ${miUsuario.email} ${miUsuario.rol}`);
            })

            seccion_usuarios.appendChild(div_usuario)
    }
    else{
        mensaje.textContent="Error en los campos revisar";
        return;
    }
})