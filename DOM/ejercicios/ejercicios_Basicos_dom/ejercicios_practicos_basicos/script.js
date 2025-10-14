function ej1() {

    document.getElementById("parrafo1").textContent=("Texto Cambiado");
}
function ej2() {
    document.getElementById("fondo").style.backgroundColor=("yellow");
}
function ej3() {
    console.log("Hola , que tal?");
    
}
function ej4() {
    let texto=prompt("Lista de compra");
    let lista=document.createElement("li");
    lista.textContent=(texto);
    document.getElementById("lista").appendChild(lista);
}
function ej5() {
    document.getElementById("lista").lastElementChild.remove();
}
function ej6() {
    document.getElementById("imagen").src="hombre.png";
}
let boton=document.getElementById("miBoton");
let parrafo=document.getElementById("parrafo");
let contador=0;
function ej7() {
    parrafo.textContent=contador++;
}
boton.addEventListener('click',ej7);