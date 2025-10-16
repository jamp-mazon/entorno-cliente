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
let parrafo_original_1=document.getElementById("parrafo9");
let parrafo_original_2=document.getElementById("parrafo2");
let bton_cambiar_parrafo=document.getElementById("cambiarParrafo");
bton_cambiar_parrafo.addEventListener("click",function () {
    const parrafo2 = parrafo_original_1.textContent;//guardo en una constante el texto del 2 campo
    parrafo_original_1.textContent = parrafo_original_2.textContent;
    //sobreescribo el original 1 el parrafo del original 2
    parrafo_original_2.textContent = parrafo2;
    //no puedo sobreescribir el original 1 en el 2 porque seria el 2 porque lo sobrrescrito arriba
    //le meto la constante parrafo2 que es el texto original uno!
})
//Ejercicio 10
let texto_prueba=document.getElementById("texto_prueba");
let btn_aumentar=document.getElementById("aumentar");
let btn_disminuir=document.getElementById("disminuir");
let tamanio_texto=20;

btn_aumentar.addEventListener("click",function () {
    tamanio_texto++;
    texto_prueba.style.fontSize=tamanio_texto+"px";
})
btn_disminuir.addEventListener("click",function () {
    tamanio_texto--;
    texto_prueba.style.fontSize=tamanio_texto+"px";
})
//Ejercicio 12
let ol=document.getElementById("lista_desordenada");
let btn_desordenado=document.getElementById("btn_desordenado");

btn_desordenado.addEventListener("click",function () {
    let texto="";
    while (texto!="fin") {
        texto=prompt("Escribe los elementos[FIN para salir]:").toLocaleLowerCase();
        if (texto==="fin") break ;    
        let list=document.createElement("li");
        list.textContent=texto;
        ol.appendChild(list);
    }    
})
//Ejercicio 13
let ol_padre=document.getElementById("ol_padre");
btn_totalLista=document.getElementById("totalista");

btn_totalLista.addEventListener("click",function () {
    alert(`Hay un total de ${ol_padre.children.length} elementos.`);
})
//Ejercicio 14
let btn_cambiar=document.getElementById("btn_cambiar");
let parrafos=document.querySelectorAll(".parrafo14");
btn_cambiar.addEventListener("click",function () {
    for (const parrafo of parrafos) {
        parrafo.textContent=prompt("Escribe en el parrafo:");
    }
})
