//Ejercicio 1
let recuadro_borde=document.getElementById("borde_recuadro");
let bton_recuadro=document.getElementById("boton_borde");
bton_recuadro.addEventListener("click",function () {
    recuadro_borde.style.border="3px solid red";
})
//Ejercicio 2
let area_texto=document.getElementById("area_texto");
//let contenido_texto=area_texto.value
let pre=document.getElementById("pre_funciona");
let btn_text_area=document.getElementById("btn_text_area");
btn_text_area.addEventListener("click",function () {
    pre.textContent=area_texto.value;
})
//Ejercicio 3
let input=document.getElementById("input");
let p=document.getElementById("parrafo_escrito");

input.addEventListener("input",function () {
    
    p.textContent=`La cantidad de letras es:${input.value.length} letras`;
})
//Ejercicio 4
let imagen=document.getElementById("imagen");
let aumentar=document.getElementById("aumentar");
let tamaño=150;
let disminuir=document.getElementById("disminuir");
aumentar.addEventListener("click",function () {
    imagen.style.width=`${tamaño++}px`;
});
disminuir.addEventListener("click",function () {
    imagen.style.width=`${tamaño--}px`; 
})
//Ejercicio 5
let bton_generar=document.getElementById("bton_generar");
bton_generar.addEventListener("click",function () {
    let h2=document.createElement("h2");
    h2.textContent="Nuevo titulo añadido";
    document.body.appendChild(h2);
})
//Ejercicio 6
let pes=document.querySelectorAll(".parrafo")
let bton_borrar=document.getElementById("bton_borrar");
bton_borrar.addEventListener("click",function () {
    for (let i = 0; i < pes.length; i++) {
        pes[i].remove();
    }
})
//Ejercicio 7
let div_colores=document.getElementById("div_colores");
let bton_rojo=document.getElementById("bton_rojo");
let bton_verde=document.getElementById("bton_verde");
let bton_azul=document.getElementById("bton_azul");

bton_rojo.addEventListener("click",function () {
    div_colores.style.backgroundColor="red";
    div_colores.textContent="texto Rojo";
})
bton_verde.addEventListener("click",function () {
    div_colores.style.backgroundColor="green";
    div_colores.textContent="texto verde";
})
bton_azul.addEventListener("click",function () {
    div_colores.style.backgroundColor="blue";
    div_colores.textContent="texto azul";
})
//Ejercicio 8
let parrafo_alineado=document.getElementById("parrafo_alineado");
let bton_izq=document.getElementById("bton_izq");
let bton_centro=document.getElementById("bton_centro");
let bton_der=document.getElementById("bton_der");

bton_izq.addEventListener("click",function () {
    parrafo_alineado.style.textAlign="left";
})
bton_centro.addEventListener("click",function () {
    parrafo_alineado.style.textAlign="center";
})
bton_der.addEventListener("click",function () {
    parrafo_alineado.style.textAlign="right";
})
//Ejercicio 9
let imagen_opaca=document.getElementById("imagen_opaca");
let rango=document.getElementById("rango");

rango.addEventListener("input",function () {
    imagen_opaca.style.opacity=`${rango.value/100}`;
});
//Ejercicio 10
let parrafo_clicks=document.getElementById("parrafo_clicks");
let bton_clicks=document.getElementById("bton_clicks");
let contador=0;
document.addEventListener("click",function () {
    parrafo_clicks.textContent=contador++;
})
//Ejercicio 11

let parrafo_encima=document.getElementById("parrafo_encima");
let parrafo_original=parrafo_encima.textContent;
parrafo_encima.addEventListener("mouseover",function () {
    parrafo_encima.textContent="Estas encima del texto";
});
parrafo_encima.addEventListener("mouseout",function () {
    
    parrafo_encima.textContent=parrafo_original;
})
//Ejercicio 12
let boton_listas=document.getElementById("boton_listas");
let ul_lista=document.getElementById("ul_lista");
let contador_lista =1;
boton_listas.addEventListener("click",function () {
    let li=document.createElement("li");
    li.textContent=contador_lista++;
    ul_lista.appendChild(li);
});
//Ejercicio 13
let imagen_oculta=document.getElementById("imagen_oculta");
let boton_alternar=document.getElementById("boton_alternar");
let oculta=false;
boton_alternar.addEventListener("click",function () {
    if (oculta) {
        imagen_oculta.style.display="block";
        oculta=false;
    }
    else{
       imagen_oculta.style.display="none";
        oculta=true; 
    }
});
//Ejercicio 14
let boton_cambiante=document.getElementById("boton_cambiante");
boton_cambiante.addEventListener("click",function () {
    boton_cambiante.textContent="Gracias!!";
});
//Ejercicio 15
let coordenadas=document.getElementById("coordenadas");
document.addEventListener("mousemove",function (e) {
    let ejeX=e.clientX;
    let ejeY=e.clientY;
    coordenadas.textContent=`X:${ejeX}---Y:${ejeY}`;
})
