// ======================================================
// Archivo JS vaciado para que lo completes tú
// (se ha borrado el contenido original)
// ======================================================
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
        this.notaPresentacion=notaPresentacion;
        this.notaTecnica=notaTecnica;
        this.media_nota=0;
    }
    media(){
        const presentacion=Number(this.notaPresentacion);
        const tecnica=Number(this.notaTecnica);
        const media=(presentacion+tecnica)/2;
        this.media_nota=media;
        return media;
    }
    estaAprobado(){
        if (this.media_nota>=5) {return true;}
        else{return false;}
    }
}
// 2. Crea un array "proyectos" para guardar todos los proyectos
//    que se vayan creando desde el formulario.
const proyectos=[
    new Proyecto ("Gestion Almacen","grupoA","Sistemas",5,6)
];
// 3. Captura los elementos del DOM que vas a usar:
//    - Inputs del formulario: tituloProyecto, grupoProyecto, moduloProyecto, notaPresentacion, notaTecnica
//    - Botón: btnAgregarProyecto
//    - Controles de filtrado: filtroModulo, filtroSoloAprobados
//    - Elementos de visualización: contenedorProyectos, resumenProyectos, mensajeVacio
const tituloProyecto=document.getElementById("tituloProyecto");
const grupoProyecto=document.getElementById("grupoProyecto");
const moduloProyecto=document.getElementById("moduloProyecto");
const notaPresentacion=document.getElementById("notaPresentacion");
const notaTecnica=document.getElementById("notaTecnica");

const btnAgregarProyecto=document.getElementById("btnAgregarProyecto");

const filtroModulo=document.getElementById("filtroModulo");
const filtroSoloAprobados=document.getElementById("filtroSoloAprobados");

const contenedorProyectos=document.getElementById("contenedorProyectos");
const resumenProyectos=document.getElementById("resumenProyectos");
const mensajeVacio=document.getElementById("mensajeVacio");
// 4. Crea una función "crearTarjetaProyecto(proyecto)" que:
//    - cree un elemento <article> con clase "tarjeta-proyecto"
//    - dentro, añade:
//      * un <h3> con el título del proyecto
//      * un <p> con el grupo y el módulo
//      * un <p> con las notas y la media
//      * un <span> con clase "badge" que muestre "APROBADO" o "SUSPENSO"
//    - añade clase extra "aprobado" si está aprobado o "suspenso" si no lo está
//    - devuelve el <article>
function crearTarjetaProyecto(proyecto) {
    const media=proyecto.media();
    const article=document.createElement("article");

    const h3=document.createElement("h3");
    const pGrupoyModulo=document.createElement("p");
    const pNotasyMedia=document.createElement("p");
    const spanEstado=document.createElement("span");

    h3.textContent=proyecto.titulo;
    pGrupoyModulo.textContent=`
    Grupo:${proyecto.grupo} 
    Modulo:${proyecto.modulo}`;
    pNotasyMedia.textContent=`
    Presentacion:${proyecto.notaPresentacion} 
    Tecnica:${proyecto.notaTecnica} 
    Media:${media}`;
    if (media>=5) {
        spanEstado.textContent="APROBADO";
        spanEstado.classList.add("aprobado");
    }
    else{
        spanEstado.textContent="SUSPENSO";
        spanEstado.classList.add("suspenso");
    }
    article.appendChild(h3);
    article.appendChild(pGrupoyModulo);
    article.appendChild(pNotasyMedia);
    article.appendChild(spanEstado);

    return article;
}
// 5. Crea una función "pintarProyectos(lista)" que:
//    - vacíe contenedorProyectos
//    - si lista está vacía:
//        * muestra mensajeVacio
//      si no:
//        * oculta mensajeVacio
//        * recorre lista y añade cada tarjeta al contenedor
function pintarProyectos(proyectos) {
    contenedorProyectos.innerHTML="";
    if (proyectos.length===0) {
        mensajeVacio.textContent="Todavía no hay proyectos registrados";
    }
    else{
        mensajeVacio.textContent="";
        for (let i = 0; i < proyectos.length; i++) {
            const tarjeta=crearTarjetaProyecto(proyectos[i]);
            contenedorProyectos.appendChild(tarjeta);
        }
    }
}
// 6. Crea una función "actualizarResumen(listaFiltrada)" que:
//    - calcule:
//      * total de proyectos
//      * número de aprobados
//      * media general de las medias
//    - muestre esos datos dentro de resumenProyectos
function actualizarResumen(listaFiltrada) {
    const totalProyectos=listaFiltrada.length;
    let num_aprobados=0;
    let num_suspensos=0;
    let media_medias=0;
    for (let i = 0; i < listaFiltrada.length; i++) {
        if (listaFiltrada[i].estaAprobado()) {
            num_aprobados++;
        }
        else{
            num_suspensos++;
        }
        media_medias+=listaFiltrada[i].media();
    }
    let media_general=media_medias/totalProyectos;
    resumenProyectos.textContent=`
    Proyectos totales: ${totalProyectos} | Aprobados: ${num_aprobados} | Suspensos: ${num_suspensos} | Media grupo: ${media_general}
    `;
}
// 7. Crea una función "aplicarFiltros()" que:
//    - empiece desde el array completo proyectos
//    - si filtroModulo tiene un valor distinto de "todos":
//        * filtra por ese módulo
//    - si filtroSoloAprobados está marcado:
//        * filtra solo los aprobados
//    - llama a pintarProyectos() con la lista final
//    - llama a actualizarResumen() con esa misma lista
function aplicarFiltros(){
    const moduloActual=filtroModulo.value;
    const soloAprobados=filtroSoloAprobados.checked;
    const lista_filtrada=[];
    if (moduloActual!=="todos") {
        for (let i = 0; i < proyectos.length; i++) {
            if (proyectos[i].modulo.includes(moduloActual)) {
                if (soloAprobados) {
                    if (proyectos[i].estaAprobado()) {
                        lista_filtrada.push(proyectos[i]);
                    }
                }
                else{
                    lista_filtrada.push(proyectos[i]);
                }
                
            }    
        }
    }
    else{
        for (let i = 0; i < proyectos.length; i++) {
            if (soloAprobados) {
                if (proyectos[i].estaAprobado()) {
                    lista_filtrada.push(proyectos[i]);
                }
            }
            else{
                lista_filtrada.push(proyectos[i]);
            }
        }
    }
    pintarProyectos(lista_filtrada);
    actualizarResumen(lista_filtrada);
}
// 8. Añade evento click al botón btnAgregarProyecto para:
//    - leer los valores del formulario
//    - validar:
//        * el título no puede estar vacío
//        * la nota de presentación y técnica deben estar entre 0 y 10
//    - si hay errores, muestra un alert() y detén la ejecución con return
//    - si todo es correcto:
//        * crea un nuevo objeto Proyecto y añádelo al array proyectos
//        * limpia los campos del formulario (ponlos en "")
//        * llama a aplicarFiltros() para actualizar la visualización
btnAgregarProyecto.addEventListener("click",function () {
    if (tituloProyecto.value==="") {
        console.log("Titulo no puede estar vacio");
        return;
    }
    if (notaPresentacion<0 || notaPresentacion>10) {
        console.log("La nota de presentacion no tiene un rango de 0 a 10");
        return;
    }
    if (notaTecnica<0 || notaPresentacion>10){
        console.log("La nota tecnica no tiene un rango de 0 a 10");
        return;
    }
    const nuevo_proyecto=new Proyecto(tituloProyecto.value,grupoProyecto.value,moduloProyecto.value,notaPresentacion.value,notaTecnica.value);
    proyectos.push(nuevo_proyecto);

    tituloProyecto.textContent="";
    grupoProyecto.textContent="";
    notaPresentacion.textContent="";
    notaTecnica.textContent="";

    aplicarFiltros();
})
// const tituloProyecto=document.getElementById("tituloProyecto");
// const grupoProyecto=document.getElementById("grupoProyecto");
// const selectModulo=document.getElementById("moduloProyecto");
// const notaPresentacion=document.getElementById("notaPresentacion");
// const notaTecnica=document.getElementById("notaTecnica");
// 9. Añade eventos change a filtroModulo y filtroSoloAprobados:
//    - El evento "change" se dispara cuando el usuario modifica el valor de un select o checkbox
//    - En este caso, queremos que cada vez que el usuario cambie el filtro, se actualice la lista
//    - cada vez que cambien, llama a aplicarFiltros()
//    Estructura: elemento.addEventListener("change", function() { ... });
filtroModulo.addEventListener("change",function () {
    aplicarFiltros();
})
filtroSoloAprobados.addEventListener("change",function () {
    aplicarFiltros();
})
pintarProyectos(proyectos);
