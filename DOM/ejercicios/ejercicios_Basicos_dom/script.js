function cambiarTexto() {
    
    document.getElementById("titulo").innerHTML=("HolaQueTal");
}
function cambiarColor() {
    document.getElementById("parrafo").style.color="red";
}
function ocultar() {
    document.getElementById("mensaje").style.display="none";
}
function mostrar() {
    document.getElementById("mensaje").style.display="block";
}
function cambiarImagen() {
    document.getElementById("foto").setAttribute("src","hombre.png");
    //document.getElemntById("foto").src="hombre.png";
}
function crearParrafo() {
    let parrafo=document.createElement("p");
    let container=document.getElementById("contenedor");
    parrafo.textContent="texto del hijo";
    container.appendChild(parrafo);
}