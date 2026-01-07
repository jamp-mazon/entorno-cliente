class Incidencia{
    constructor(descripcion,aula,tipo,urgente){
        this.descripcion=descripcion;
        this.aula=aula;
        this.tipo=tipo;
        this.urgente=urgente;
        this.estado="abierta";
    }
    confirmarEstado(){
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
//recogemos los elementos del dom
const descripcionIncidencia=document.getElementById("descripcionIncidencia");
const aulaIncidencia=document.getElementById("aulaIncidencia");
const tipoIncidencia=document.getElementById("tipoIncidencia");
const urgenteIncidencia=document.getElementById("urgenteIncidencia");
//botones formulario
const btnRegistrarIncidencia=document.getElementById("btnRegistrarIncidencia");
const btnCrearDemo=document.getElementById("btnCrearDemo");
const btnVaciarTodo=document.getElementById("btnVaciarTodo");
const mensajeInfo=document.getElementById("mensajeInfo");
//DOM en filtros
const filtroAula=document.getElementById("filtroAula");
const filtroEstado=document.getElementById("filtroEstado");
const busqueda=document.getElementById("busqueda");
const filtroSoloUrgentes=document.getElementById("filtroSoloUrgentes");
//botones filtro
const btnAplicarFiltros=document.getElementById("btnAplicarFiltros");
const btnResetFiltros=document.getElementById("btnResetFiltros");
const bTotal=document.getElementById("total");
const bAbiertas=document.getElementById("abiertas");
const benCurso=document.getElementById("enCurso");
const bResueltas=document.getElementById("resueltas");

//LISTA
const mensajeVacio=document.getElementById("mensajeVacio");
const listaIncidencias=document.getElementById("listaIncidencias");

//Me creo un array vacio con las incidencias
const incidencias=[
    new Incidencia("El PC no enciende","A1","Hardware",false)
];
function pintarIncidencias(lista_incidencias){
    listaIncidencias.innerHTML="";//limpio la lista.
    for (let i = 0; i < listaIncidencias.length; i++) {
        const incidencia = listaIncidencias[i];
        //=============ARTICLE====================
        const article=document.createElement("article");
        article.classList.add("item");
        //============HEADER=====================
        const header=document.createElement("header");
        article.appendChild(header);

        const divHeader=document.createElement("div");
        header.appendChild(divHeader);

        const divEstado=document.createElement("div");
        divEstado.classList.add("estado","js-estado");
        divEstado.textContent=incidencia.estado;
        divHeader.appendChild(divEstado);

        const divDescripcion=document.createElement("div");
        const bDescripcion=document.createElement("b");
        bDescripcion.classList.add("js-descripcion");
        bDescripcion.textContent=incidencia.descripcion;
        divDescripcion.appendChild(bDescripcion);
        divHeader.appendChild(divDescripcion);
        //=========FIN HEADER========================
        //=========CHIPS SELECTS=====================
        const divChips=document.createElement("div");
        divChips.classList.add("chips");
        article.appendChild(divChips);
        const spanAula=document.createElement("span");
        spanAula.classList.add("chip","js-chip-aula");
        spanAula.textContent=`Aula:${incidencia.aula}`;
        divChips.appendChild(spanAula);

    }
}