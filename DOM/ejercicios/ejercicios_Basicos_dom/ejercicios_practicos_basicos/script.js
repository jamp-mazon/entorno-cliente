//Ejercicio 1
let parrafo1=document.getElementById("parrafo1");
let cambio=document.getElementById("cambio");
cambio.addEventListener("click",function () {
    parrafo1.textContent="Texto cambiado";
})
//Ejercicio2
let fondo=document.getElementById("fondo");
let boton_cambiarFondo=document.getElementById("cambiar_fondo");
boton_cambiarFondo.addEventListener("click",function () {
    fondo.style.backgroundColor="yellow";
})
//Ejercicio3
let boton_consola=document.getElementById("boton_consola");
boton_consola.addEventListener("click",function () {
    console.log("Has pulsado el boton del ejercicio 3");
})
//Ejercicio4
let lista_index=document.getElementById("lista");
let boton_crearLista=document.getElementById("crearLista");
let boton_borrar=document.getElementById("borrarLista");
boton_crearLista.addEventListener("click",function () {
    let textoLi=prompt("Escribe para añadir la lista");
    let li=document.createElement("li");
    li.textContent=textoLi;
    lista_index.appendChild(li);
})//Ejercicio 5
boton_borrar.addEventListener("click",function () {
    lista_index.lastElementChild.remove();
})
//Ejercicio 6
let imagen=document.getElementById("imagen");
imagen.addEventListener("click",function () {
    if (imagen.src==="hombre.png") {
        imagen.src="diablo.png";//no funciona....
    }
    imagen.src="hombre.png";
})
//Ejercicio 7
let contador=0;
let parrafoNumerico=document.getElementById("parrafo");
let boton_contador=document.getElementById("miBoton");
boton_contador.addEventListener("click",function () {
    parrafoNumerico.textContent=contador++;
})
//Ejercicio 8
let pEscondida=document.getElementById("escondido");
let bton_mostrar=document.getElementById("mostrar");
let bton_ocultar=document.getElementById("ocultar");

bton_mostrar.addEventListener("click",function () {
    pEscondida.style.display="block";
})
bton_ocultar.addEventListener("click",function () {
    pEscondida.style.display="none";
})
//Ejercicio 9
let parrafo_original_1=document.getElementById("parrafo1.0");
let parrafo_nuevo1=parrafo_original_2.textContent;
let parrafo_original_2=document.getElementById("parrafo2");
let parrafo_nuevo2=parrafo_original_1.textContent;
let bton_cambiar_parrafo=document.getElementById("cambiarParrafo");

bton_cambiar_parrafo.addEventListener("click",function () {
    //Ahora meto los parrafos nuevos en los originales
    parrafo_original_1=parrafo_nuevo1.textContent;
    parrafo_original_2=parrafo_nuevo2.textContent;
})

