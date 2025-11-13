let form=document.getElementById("dinamico");
let campos=document.getElementById("campos");
let btn_añadir=document.getElementById("addField");
let mensaje=document.getElementById("mensaje");
btn_añadir=addEventListener("click",function () {
    let input=document.createElement("input");
    campos.appendChild(input);
});
form.addEventListener("submit",function () {
    event.preventDefault();
    let campo_vacio=document.body.querySelectorAll("input");
    for (let i = 0; i < campo_vacio.length; i++) {
        if (campo_vacio.value==="") {
            mensaje.textContent="Campo Vacio"+[i];
            mensaje.style.color="red";
        }
    }
});