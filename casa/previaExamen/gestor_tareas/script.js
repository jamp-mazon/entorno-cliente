class Tarea{
    constructor(titulo,descripcion,prioridad,hecha,fecha){
        this.contador=4;
        this.id=this.contador++;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.prioridad=prioridad;
        this.tags=[];
        this.hecha=hecha;
        this.fecha=fecha;
        
    }
    toglleHecha() {
        if (this.hecha) {
            this.hecha = false;
        }
        else {
            this.hecha = true;
        }
    }
    addTag(tag){
        tag=tag.toLowerCase();
        if (!this.tags.includes(tag)) {
            this.tags.push(tag);
        }
    }
    removeTag(tag){
        tag=tag.toLowerCase();

        for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].includes(tag)) {
            this.tags.splice(i,1);
        }            
            
        }
    }
    matches(texto_filtrado){
        if(this.titulo===texto_filtrado||this.descripcion===texto_filtrado||this.tags.includes(texto_filtrado)){
            return true;
        }
        else{return false;}
    }
}
class GestorTareas{
    constructor(tareas=[]){
        this.tareas=[];
    }
    addTarea(tarea){
        this.tareas.push(tarea);       
    }
    deleteTarea(id){
        for (let i = 0; i < this.tareas.length; i++) {
            if (this.tareas[i].id===id) {
                this.tareas.splice(i,1);
            }
        }
    }
    getTarea(id){
        for (const tarea of this.tareas) {
            if (tarea.id===id) {
                return tarea;
            }
        }
    }
    filtrar(texto_filtrado){
        lista_filtrada=[];
        for (const tarea of this.tareas) {
            if(tarea.matches(texto_filtrado)){
                lista_filtrada.push(tarea);
            }
        }
        return lista_filtrada;
    }
    devolverTareas(){
        return this.tareas;
    }
    loadDemo(){
        let tarea1=new Tarea(1,"Hacer caca","Me estoy haciendo mucha caca","alta",false,"2025");
        let tarea2=new Tarea(2,"Limpiar caca","Tengo el culo sucio","media",true,"2025");
        let tarea3=new Tarea(3,"Tirar Pantalones","No llegue al baño","baja",false,"2025");
        this.tareas.push(tarea1);
        this.tareas.push(tarea2);
        this.tareas.push(tarea3);
    }
}
const input_Filtro=document.getElementById("inpFiltro");
const formTarea=document.getElementById("formTarea");
const inputTitulo=document.getElementById("inpTitulo");
const txtArea_Decripcion=document.getElementById("inpDesc");
let contador_Caracteres=document.getElementById("contadorDesc");
let selectPrioridad=document.getElementById("selPrio");
const inputTag=document.getElementById("inpTag");
const btn_add=document.getElementById("btn_add");
let mensaje=document.getElementById("msg");
let prevTitulo=document.getElementById("prevTitulo");
let prevDesc=document.getElementById("prevDesc");
let prevPrioridad=document.getElementById("prevPrio");
let prevTags=document.getElementById("prevTags");
let ulTareas=document.getElementById("listaTareas");
const miGestor_tareas=new GestorTareas();


formTarea.addEventListener("submit",function (event) {
    event.preventDefault();
    let titulo=inputTitulo.value.trim();
    let descripcion=txtArea_Decripcion.value.trim();
    let prioridad=selectPrioridad.value;
    let tag=inputTag.value.trim();

    let miTarea= new Tarea(titulo,descripcion,prioridad,false,"2025");
    miTarea.addTag(tag);
    miGestor_tareas.addTarea(miTarea);
    let li=document.createElement("li");
    let h3=document.createElement("h3");
    h3.textContent=miTarea.titulo;
    let pdescripcion=document.createElement("p");
    pdescripcion.textContent=miTarea.descripcion;
    let pPrioridad=document.createElement("p");
    pPrioridad.textContent=miTarea.prioridad;
    li.appendChild(h3);
    li.appendChild(pdescripcion);
    li.appendChild(pPrioridad);
    li.className="task-card";
//BOTON ELIMINAR
    let btn_eliminar=document.createElement("button");
    btn_eliminar.textContent="Eliminar";
    btn_eliminar.setAttribute("id","btn_eliminar");
    btn_eliminar.classList.add("btn-del");
    btn_eliminar.setAttribute("data-id",miTarea.id);
//BOTON HACER TAREA.
    let btn_hecha=document.createElement("button");
    btn_hecha.textContent="Hecha";
    btn_hecha.setAttribute("id","btn_hecha");
    btn_hecha.classList.add("btn-done");
    btn_hecha.setAttribute("data-id",miTarea.id);
//LOS AÑADO A LA LISTA    
    li.appendChild(btn_eliminar);
    li.appendChild(btn_hecha);

    ulTareas.appendChild(li);    
})
let conta_letras = 0;

formTarea.addEventListener("keyup", function (event) {

    if (event.target===txtArea_Decripcion) {
    conta_letras++;
    contador_Caracteres.textContent = `${conta_letras}`;
    prevDesc.textContent=txtArea_Decripcion.value;        
    }
    if (event.target===inputTitulo) {
        prevTitulo.textContent=inputTitulo.value;
    }
            
});
selectPrioridad.addEventListener("change", function (event) {

    if (event.target === selectPrioridad) {

        if (selectPrioridad.selectedIndex == 0) {
            prevPrioridad.className = "prio-baja";
            prevPrioridad.textContent="Prioridad baja";
        }
        else if (selectPrioridad.selectedIndex == 1) {
            prevPrioridad.className = "prio-media";
            prevPrioridad.textContent="Prioridad media";

        }
        else if (selectPrioridad.selectedIndex == 2) {
            prevPrioridad.className = "prio-alta";
            prevPrioridad.textContent="Prioridad alta";

        }
    }
})
// miGestor_tareas.loadDemo();
// const lista_tareas=miGestor_tareas.devolverTareas();
// for (const tarea of lista_tareas) {
//     let li=document.createElement("li");
//     let h3=document.createElement("h3");
//     h3.textContent=tarea.titulo;
//     let pdescripcion=document.createElement("p");
//     pdescripcion.textContent=tarea.descripcion;
//     let pPrioridad=document.createElement("p");
//     pPrioridad.textContent=tarea.prioridad;
//     li.appendChild(h3);
//     li.appendChild(pdescripcion);
//     li.appendChild(pPrioridad);
//     ulTareas.appendChild(li);
// }
ulTareas.addEventListener("mouseover",function (event) {
    if (event.target.tagName==="LI") {
        event.target.classList.add("hover");
    }
})
ulTareas.addEventListener("mouseout",function (event) {
    if (event.target.tagName==="LI") {
        event.target.className="task-card";
    }
})
ulTareas.addEventListener("click",function (event) {
    if (event.target.tagName==="BUTTON") {
        let li=event.target.parentNode;
        if (event.target.classList.contains("btn-del")) {
            ulTareas.removeChild(li);
        }
        if (event.target.classList.contains("btn-done")) {
           li.classList.add("hecha");
        }
    }
})

 
input_Filtro.addEventListener("input", function () {

    
    if (input_Filtro.value==="") {
        return;
    }
        ulTareas.innerHTML = "";
        const lista_mis_tareas = miGestor_tareas.devolverTareas();
    for (const tarea of lista_mis_tareas) {
        let titulo = tarea.titulo;
        if (titulo.toLowerCase().indexOf(input_Filtro.value.toLowerCase())!==-1) {
            let li = document.createElement("li");
            let h3 = document.createElement("h3");
            h3.textContent = tarea.titulo;
            let pdescripcion = document.createElement("p");
            pdescripcion.textContent = tarea.descripcion;
            let pPrioridad = document.createElement("p");
            pPrioridad.textContent = tarea.prioridad;
            li.appendChild(h3);
            li.appendChild(pdescripcion);
            li.appendChild(pPrioridad);
            li.className = "task-card";
            //BOTON ELIMINAR
            let btn_eliminar = document.createElement("button");
            btn_eliminar.textContent = "Eliminar";
            btn_eliminar.setAttribute("id", "btn_eliminar");
            btn_eliminar.classList.add("btn-del");
            btn_eliminar.setAttribute("data-id", tarea.id);
            //BOTON HACER TAREA.
            let btn_hecha = document.createElement("button");
            btn_hecha.textContent = "Hecha";
            btn_hecha.setAttribute("id", "btn_hecha");
            btn_hecha.classList.add("btn-done");
            btn_hecha.setAttribute("data-id", tarea.id);
            //LOS AÑADO A LA LISTA    
            li.appendChild(btn_eliminar);
            li.appendChild(btn_hecha);

            ulTareas.appendChild(li);
        }
    }
})




