// EJERCICIO 2 - Gestor de proyectos del ciclo
// Usa este archivo para completar la lógica del ejercicio.

// 1. Crea la clase Proyecto con:
//    - Constructor que reciba: titulo, grupo, modulo, notaPresentacion, notaTecnica
//    - Método media(): debe devolver la media de las dos notas
//    - Método estaAprobado(): debe devolver true si la media es >= 5, false en caso contrario
class Proyecto{
    constructor(titulo,grupo,modulo,notaPresentacion,notaTecnica){
        this.titulo=titulo;
        this.grupo=grupo;
        this.modulo=modulo;
        this.notaPresentacion;
        this.notaTecnica;
        this.media=Number((this.notaPresentacion+this.notaTecnica)/2);
    }
}
// 2. Crea un array "proyectos" para guardar todos los proyectos
//    que se vayan creando desde el formulario.
const proyectos=[
    new Proyecto("Ejemplo1","grupo2","Sistemas",8,8)
];

// 3. Captura los elementos del DOM que vas a usar:
//    - Inputs del formulario: tituloProyecto, grupoProyecto, moduloProyecto, notaPresentacion, notaTecnica
//    - Botón: btnAgregarProyecto
//    - Controles de filtrado: filtroModulo, filtroSoloAprobados
//    - Elementos de visualización: contenedorProyectos, resumenProyectos, mensajeVacio
const tituloProyecto=document.getElementById("tituloProyecto");
const grupoProyecto=document.getElementById("grupoProyecto");
const selectModulo=document.getElementById("moduloProyecto");
const notaPresentacion=document.getElementById("notaPresentacion");
const notaTecnica=document.getElementById("notaTecnica");

const btnAgregarProyecto=document.getElementById("btnAgregarProyecto");

const filtroModulo=document.getElementById("filtroModulo");
const filtroSoloAprobados=document.getElementById("filtroSoloAprobados");

const resumenProyectos=document.getElementById("resumenProyectos");
const contenedorProyectos=document.getElementById("contenedorProyectos");
let mensajeVacio=document.getElementById("mensajeVacio");
// 4. Crea una función "crearTarjetaProyecto(proyecto)" que:
//    - cree un elemento <article> con clase "tarjeta-proyecto"
//    - dentro, añade:
//        * un <h3> con el título del proyecto
//        * párrafos <p> con clase "proyecto-detalle" para: grupo, módulo y media
//        * un párrafo para el estado (APROBADO/SUSPENSO) con clases "estado-aprobado" o "estado-suspenso"
//    - devuelva el elemento article creado
function crearTarjetaProyecto(proyecto) {
    let articulo=document.createElement("article");
    articulo.classList.add("tarjeta-proyecto");
    let h3=document.createElement("h3");
    let pGrupo=document.createElement("p");
    pGrupo.classList.add("proyecto-detalle");
    let pModulo=document.createElement("p");
    pModulo.classList.add("proyecto-detalle");
    let pMedia=document.createElement("p");
    pMedia.classList.add("proyecto-media");
    let pEstado=document.createElement("p");

    
    h3.textContent=proyecto.titulo;
    pGrupo.textContent=proyecto.grupo;
    pModulo.textContent=proyecto.modulo;

    pMedia.textContent=proyecto.media;

    if (proyecto.media<5) {
        pEstado.textContent="SUSPENSO";
        pEstado.classList.add("estado-suspenso");
    }
    else{
        pEstado.textContent="APROBADO";
        pEstado.classList.add("estado-aprobado");
    }

    articulo.appendChild(h3);
    articulo.appendChild(pGrupo);
    articulo.appendChild(pModulo);
    articulo.appendChild(pMedia);
    articulo.appendChild(pEstado);

    return articulo;
}
// 5. Crea una función "pintarProyectos(lista)" que:
//    - vacíe el contenedorProyectos
//    - si la lista está vacía, muestre el mensajeVacio
//    - si no, oculte mensajeVacio y recorra la lista creando una tarjeta por cada proyecto
function pintarProyectos(lista) {
    contenedorProyectos.innerHTML="";
    if (lista.length===0) {
        mensajeVacio.textContent="No hay proyectos registrados";
        mensajeVacio.style.display="block";
        return;
    }
    else{
        mensajeVacio.style.display="none";
        for (let i = 0; i < lista.length; i++) {
            let articulo;
            articulo=crearTarjetaProyecto(lista[i]);
            contenedorProyectos.appendChild(articulo);
            
        }
    }
    
}
// 6. Crea una función "actualizarResumen()" que:
//    - calcule usando bucles:
//        * total de proyectos
//        * cuántos están aprobados
//        * cuántos están suspensos
//    - actualice el texto de resumenProyectos con esa información.
// const resumenProyectos=document.getElementById("resumenProyectos");
// const contenedorProyectos=document.getElementById("contenedorProyectos");
// let mensajeVacio=document.getElementById("mensajeVacio");
function actualizarResumen() {
    let totales=0;
    let aprobados=0;
    let suspensos=0;
    let media=0
    for (const proyecto of proyectos) {
            totales++;
            
            if (proyecto.media <5) {
                suspensos++;
            }
            else{
                aprobados++;
            }        
    }
    resumenProyectos.textContent=`Proyectos totales:${totales} | Aprobados:${aprobados} | Suspensos:${suspensos}`;
}
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)3959359

// 7. Crea una función "aplicarFiltros()" que:
//    - cree una copia del array proyectos usando un bucle for
//    - aplique el filtro de módulo si no está en "todos" (usando bucle for)
//    - aplique el filtro de aprobados si el checkbox está marcado (usando bucle for)
//    - llame a pintarProyectos() con la lista filtrada
//    - llame a actualizarResumen()
// const filtroModulo=document.getElementById("filtroModulo");
// const filtroSoloAprobados=document.getElementById("filtroSoloAprobados");
function aplicarFiltros() {
    const nueva_lista=[];
    let modulo_filtrado=filtroModulo.value.trim().toLowerCase();
    let checked_filtrado=filtroSoloAprobados.checked;
    let media_proyecto=0;
    for (const proyecto of proyectos) {
        if (checked_filtrado) {
          media_proyecto = proyecto.media();
          if (media_proyecto > 4) {
            if (modulo_filtrado === "todos") {
              nueva_lista.push(modulo_filtrado);
            } else {
              if (proyecto.modulo.toLowerCase().includes(modulo_filtrado)) {
                nueva_lista.push(modulo_filtrado);
              }
            }
          }

        } else {
          if (modulo_filtrado === "todos") {
            nueva_lista.push(modulo_filtrado);
          } else {
            if (proyecto.modulo.toLowerCase().includes(modulo_filtrado)) {
              nueva_lista.push(modulo_filtrado);
            }
          }
        }
    }
    return nueva_lista;
}
// 8. En el evento click de btnAgregarProyecto:
//    - valida que:
//        * título, grupo y módulo no estén vacíos
//        * las notas sean números válidos entre 0 y 10 (usa isNaN para comprobar)
//    - si hay errores, muestra un alert() y detén la ejecución con return
//    - si todo es correcto:
//        * crea un nuevo objeto Proyecto y añádelo al array proyectos
//        * limpia los campos del formulario (ponlos en "")
//        * llama a aplicarFiltros() para actualizar la visualización
// const tituloProyecto=document.getElementById("tituloProyecto");
// const grupoProyecto=document.getElementById("grupoProyecto");
// const selectModulo=document.getElementById("moduloProyecto");
// const notaPresentacion=document.getElementById("notaPresentacion");
// const notaTecnica=document.getElementById("notaTecnica");
let titulo=tituloProyecto.value.trim();
console.log(titulo)
let grupo=grupoProyecto.value.trim();
console.log(grupoProyecto.value)
console.log(grupo)
let modulo=selectModulo.value.trim();
let notaPre=Number(notaPresentacion.value);
let nota_tecnica=Number(notaTecnica.value);
btnAgregarProyecto.addEventListener("click",function () {
   let todoOK=true;
    if (titulo==="") {
        alert("Error:el titulo no puede estar vacio");
        todoOK=false;
        return;
    }
    if (grupo==="") {
        todoOK=false;

        alert("Error:el grupo no puede estar vacio");
        return;
    }
    if (modulo==="") {
        todoOK=false;

        alert("Error:Seleccione un modulo");
        return;
    }
    if (notaPre<0 || notaPre>10) {
        todoOK=false;

        alert("Error la nota tiene que estar entre 0 y 10");
        return;
    }
    if (todoOK) {
        let project=new Proyecto(titulo,grupo,modulo,notaPre,nota_tecnica);
        proyectos.push(project);
        tituloProyecto.textContent="";
        grupoProyecto.textContent="";
        selectModulo.value="";
        notaPresentacion.textContent=""
        notaTecnica.textContent="";

    }    
});
filtroModulo.addEventListener("change",function () {
    let lista_filtrada=aplicarFiltros()
    pintarProyectos(lista_filtrada);
    actualizarResumen();

});
filtroSoloAprobados.addEventListener("change",function () {
     let lista_filtrada=aplicarFiltros()
    pintarProyectos(lista_filtrada);
    actualizarResumen();
})
// 9. Añade eventos change a filtroModulo y filtroSoloAprobados:
//    - El evento "change" se dispara cuando el usuario modifica el valor de un select o checkbox
//    - En este caso, queremos que cada vez que el usuario cambie el filtro, se actualice la lista
//    - cada vez que cambien, llama a aplicarFiltros()
//    Estructura: elemento.addEventListener("change", function() { ... });
pintarProyectos(proyectos);
actualizarResumen();
