// ======================================================
// Archivo JS vaciado para que lo completes tú
// (se ha borrado el contenido original)
// ======================================================
// EJERCICIO 3 - Panel de incidencias
// Usa clases, arrays, filtros combinados y delegación de eventos.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)
// 1. Crea la clase Incidencia con:
//    - Constructor que reciba: descripcion, aula, tipo
//    - Propiedad estado: debe inicializarse automáticamente en "abierta"
//    - Método avanzarEstado(): debe cambiar el estado siguiendo esta lógica:
//        * si está en "abierta" → cambia a "en-curso"
//        * si está en "en-curso" → cambia a "resuelta"
//        * si está en "resuelta" → no hace nada (ya está en el estado final)
//    - Método resetEstado(): debe volver el estado a "abierta"
class Incidencia{
    constructor(descripcion,aula,tipo){
        this.descripcion=descripcion;
        this.aula=aula;
        this.tipo=tipo;
        this.estado="abierta";
    }
    avanzarEstado(){
        if (this.estado==="abierta") {
            this.estado="en-curso";
        }
        else if (this.estado==="en-curso"){
            this.estado="resuelta";
        }
    }
    resetEstado(){
        this.estado="abierta";
    }

}
// 2. Crea un array "incidencias" que guardará todos los objetos Incidencia.
const incidencias=[
    new Incidencia("El teclado no funciona","305","Hardware")
];
// 3. Captura los elementos del DOM que vas a usar:
//    - Inputs del formulario: descripcionIncidencia, aulaIncidencia, tipoIncidencia
//    - Botón: btnRegistrarIncidencia
//    - Controles de filtrado: filtroAula, filtroEstado
//    - Elementos de visualización: listaIncidencias, resumenIncidencias, mensajeVacio
const descripcionIncidencia=document.getElementById("descripcionIncidencia");
const aulaIncidencia=document.getElementById("aulaIncidencia");
const tipoIncidencia=document.getElementById("tipoIncidencia");

const btnRegistrarIncidencia=document.getElementById("btnRegistrarIncidencia");

const filtroAula=document.getElementById("filtroAula");
const filtroEstado=document.getElementById("filtroEstado");

const listaIncidencias=document.getElementById("contenedorIncidencias");
const resumenIncidencias=document.getElementById("resumenIncidencias");
const mensajeVacio=document.getElementById("mensajeVacio");
// 4. Crea una función "crearTarjetaIncidencia(incidencia, index)" que:
//    - cree un <article> con clase "tarjeta-incidencia"
//    - muestre descripción, aula, tipo y estado
//    - incluya 2 botones:
//        * "Avanzar estado"  (data-op="avanzar" y data-index=index)
//        * "Reset"          (data-op="reset" y data-index=index)
//    - añade una clase extra según estado: "abierta", "en-curso" o "resuelta"
//    - devuelve el <article>
function crearTarjetaIncidencia(incidencia,index) {
    const article=document.createElement("article");
    article.classList.add("tarjeta-incidencia");

    const pDescripcion=document.createElement("p");
    pDescripcion.textContent=incidencia.descripcion;
    article.appendChild(pDescripcion);

    const pAula=document.createElement("p");
    pAula.textContent=incidencia.aula;
    article.appendChild(pAula);

    const pTipo=document.createElement("p");
    pTipo.textContent=incidencia.tipo;
    article.appendChild(pTipo);

    const pEstado=document.createElement("p");
    pEstado.textContent=incidencia.estado;
    article.appendChild(pEstado);

    const btnAvanzar=document.createElement("button");
    const btnReset=document.createElement("button");

    btnAvanzar.textContent="Avanzar Estado";
    btnAvanzar.setAttribute("data-op","avanzar");
    btnAvanzar.setAttribute("data-index",index);

    btnReset.textContent="Reset";
    btnReset.setAttribute("data-op","reset");
    btnReset.setAttribute("data-index",index);

    article.appendChild(btnAvanzar);
    article.appendChild(btnReset);

    return article;

}
// 5. Crea una función "pintarIncidencias(listaFiltrada)" que:
//    - vacíe listaIncidencias
//    - si listaFiltrada está vacía:
//        * muestra mensajeVacio
//      si no:
//        * oculta mensajeVacio
//        * recorre la lista filtrada y pinta cada tarjeta
function pintarIncidencias(listaFiltrada) {
    listaIncidencias.innerHTML="";
    if (listaFiltrada.length===0) {
        mensajeVacio.textContent="No hay incidencias registradas.";
    }
    else{
        mensajeVacio.textContent="";
        for (let i = 0; i < listaFiltrada.length; i++) {
            const articulo=crearTarjetaIncidencia(listaFiltrada[i],i);
            listaIncidencias.appendChild(articulo);
        }
    }
}
// 6. Crea una función "actualizarResumen(listaFiltrada)" que:
//    - calcule total incidencias
//    - cuente cuántas están en cada estado
//    - muestre el resumen en resumenIncidencias
function actualizarResumen(listaFiltrada) {
    const totalIncidencias=listaFiltrada.length;
    let abiertas=0;
    let en_curso=0;
    let resueltas=0;
    for (let i = 0; i < listaFiltrada.length; i++) {
        if (listaFiltrada[i].estado==="abierta") {
            abiertas++;
        }
        else if(listaFiltrada[i].estado==="en-curso"){
            en_curso++;
        }
        else{
            resueltas++;
        }
    }
    resumenIncidencias.textContent=`
    Abiertas: ${abiertas} | En curso: ${en_curso} | Resueltas: ${resueltas}
    `;
}
// 7. Crea una función "aplicarFiltros()" que:
//    - empiece desde el array completo incidencias
//    - si filtroAula tiene un valor distinto de "todas":
//        * filtra por ese aula
//    - si filtroEstado tiene un valor distinto de "todas":
//        * filtra por ese estado
//    - llama a pintarIncidencias() con el resultado
//    - llama a actualizarResumen() con el mismo resultado
function aplicarFiltros() {
    const listaFiltrada=[];
    let aulaActual=filtroAula.value;
    let estadoActual=filtroEstado.value;
    for (let i = 0; i < incidencias.length; i++) {
        if (aulaActual!=="todas") {
            if (estadoActual!=="todas") {
                if (incidencias[i].aula.includes(aulaActual) && incidencias[i].estado.includes(estadoActual)) {
                    listaFiltrada.push(incidencias[i]);
                }
            }
            else{
                if (incidencias[i].aula.includes(aulaActual)) {
                    listaFiltrada.push(incidencias[i]);
                }
            }
        }
        else{
            if (estadoActual!=="todas") {
                if (incidencias[i].estado.includes(estadoActual)) {
                    listaFiltrada.push(incidencias[i]);
                }
            }
            else{
                listaFiltrada.push(incidencias[i]);
            }
        }
        
    }
    pintarIncidencias(listaFiltrada);
    actualizarResumen(listaFiltrada);
}
// 8. Evento click para registrar incidencias (btnRegistrarIncidencia):
//    - lee valores del formulario
//    - valida que descripción no esté vacía
//    - si hay error, alert() y return
//    - crea un nuevo objeto Incidencia y lo mete en el array incidencias
//    - limpia el formulario
//    - llama a aplicarFiltros()
btnRegistrarIncidencia.addEventListener("click",function () {
    const descripcion=descripcionIncidencia.value;
    const aula=aulaIncidencia.value;
    const tipo=tipoIncidencia.value;
    if (descripcion==="") {
        console.log("La descripcion no puede estar vacia");
        return;
    }
    if (aula==="") {
        console.log("Es obligatorio elegir un aula");
        return;
    }
    const nueva_incidencia=new Incidencia(descripcion,aula,tipo);
    incidencias.push(nueva_incidencia);
    descripcionIncidencia.textContent="";
    aulaIncidencia.value="";
    aplicarFiltros();
})
// 9. Delegación de eventos en listaIncidencias (click):
//    - escucha los clicks en el contenedor de tarjetas
//    - si el click no viene de un botón, no hace nada
//    - lee data-op y data-index
//    - valida que el índice existe en el array incidencias
//    - según data-op:
//        * "avanzar": incidencias[index].avanzarEstado()
//        * "reset":   incidencias[index].resetEstado()
//    - después llama a aplicarFiltros()
listaIncidencias.addEventListener("click",function (event) {
    if (event.target.tagName!=="BUTTON") {
        return;
    }
    else{
        let boton=event.target;
        let tipo_boton=boton.getAttribute("data-op");
        let indice=Number(boton.getAttribute("data-index"));
        if (tipo_boton==="avanzar") {
            incidencias[indice].avanzarEstado();
        }
        else if(tipo_boton==="reset"){
            incidencias[indice].resetEstado();
        }
    }
    aplicarFiltros();
})
// 10. Eventos de filtros:
//    - filtroAula.addEventListener("change", aplicarFiltros)
//    - filtroEstado.addEventListener("change", aplicarFiltros)
filtroAula.addEventListener("change",aplicarFiltros);
filtroEstado.addEventListener("change",aplicarFiltros);
// 11. Al cargar la página puedes dejar todo vacío o crear
//     1–2 incidencias de ejemplo.
//     Luego llama a aplicarFiltros() y a actualizarResumen().
aplicarFiltros();
actualizarResumen(incidencias);