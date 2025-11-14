const form=document.getElementById("registro");
let estado=document.getElementById("estado")
form.addEventListener("submit",function (evento) {
    evento.preventDefault();
    let nombre=document.getElementById("nombre").value.trim();
    let correo=document.getElementById("correo").value.trim();
    if (nombre===""||correo==="") {
        estado.textContent="ERROR:Campos vacios...";
        estado.style.color="red";
    }
    else{
        estado.textContent="Todo Correcto!!!";
        estado.style.color="green";
    }
})
//SECCION 2:
const btnTema=document.getElementById("btnTema");
btnTema.addEventListener("click",function () {

    if (document.body.style.backgroundColor==="black" ) {
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        
    }
    else{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";        
    }
})
//SECCION 3:
const btn_add=document.getElementById("addItem");
let lista=document.getElementById("lista");

btn_add.addEventListener("click",function () {
    input=document.getElementById("nuevoTexto").value.trim();
    document.getElementById("nuevoTexto").value="";
    if (input==="") {
        return;
    }
    let li=document.createElement("li");
    li.textContent=input;
    lista.appendChild(li);
})
lista.addEventListener("click",function (ev) {
    if (ev.target.tagName==="LI") {
        ev.target.remove();
    }
})
//SECCION 4:
const contadorEl = document.getElementById("contador");
let valor = 0;

document.addEventListener("keydown", (ev) => {
  if (ev.key === "+" || ev.key === "=") { // en muchos teclados el + requiere Shift
    valor++;
  } else if (ev.key === "-") {
    valor--;
  } else {
    return;
  }
  contadorEl.textContent = valor;
});
