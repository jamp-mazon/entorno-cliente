// EJERCICIO 3 - Tickets de Soporte
// JS básico: clases, estados, filtros combinados y delegación de eventos.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE): 3959359

/*
  CONTEXTO
  En el aula hay tickets de soporte:
  - descripción, aula, prioridad (Baja/Media/Alta)
  - estado: "nuevo" -> "en-progreso" -> "cerrado"
  - el profesor quiere filtrar por aula y por estado
  - y tener botones en cada ticket para avanzar o reabrir
*/

/* =========================================================
   1) Clase Ticket
   - Constructor: descripcion, aula, prioridad
   - Propiedad estado: empieza en "nuevo"
   - Método avanzarEstado():
     * nuevo -> en-progreso
     * en-progreso -> cerrado
     * cerrado -> no cambia
   - Método reabrir(): vuelve a "nuevo"
========================================================= */

class Ticket {
  // static num=0;
  constructor(descripcion,aula,prioridad){
    this.descripcion=descripcion;
    this.aula=aula;
    this.prioridad=prioridad;
    this.estado="nuevo";
    // this.id=num;
    // num++;
  }
  avanzarEstado(){
    if (this.estado==="nuevo") {
      this.estado="en-progreso";
    }
    else if(this.estado==="en-progreso"){
      this.estado="cerrado";
    }
  }
  reabrir(){
    this.estado="nuevo";
  }
  // TODO
}

/* =========================================================
   2) Array "tickets"
========================================================= */

let tickets = [
  new Ticket ("PC ROTO","Aula 1","Baja"),
  new Ticket ("Pantalla lagueada", "Aula 2","media"),
  new Ticket ("null","null","null")

];

/* =========================================================
   3) Captura de DOM (revisa soporte.html)
   - Inputs: descripcionTicket, aulaTicket, prioridadTicket
   - Botón: btnRegistrarTicket
   - Filtros: filtroAula, filtroEstado
   - Visualización: contenedorTickets, mensajeVacio, resumenTickets
========================================================= */

// TODO
const descripcionTicket=document.getElementById("descripcionTicket");
const aulaTicket=document.getElementById("aulaTicket");
const prioridadTicket=document.getElementById("prioridadTicket");

const btnRegistrarTicket=document.getElementById("btnRegistrarTicket");

const filtroAula=document.getElementById("filtroAula");
const filtroEstado=document.getElementById("filtroEstado");

const contenedorTickets=document.getElementById("contenedorTickets");
const mensajeVacio=document.getElementById("mensajeVacio");
const resumenTickets=document.getElementById("resumenTickets");
/* =========================================================
   4) Función pintarTickets(lista)
   - Vacía contenedorTickets
   - Si lista vacía: mostrar mensajeVacio y return
   - Si no: ocultar mensajeVacio
   - Por cada ticket crea una tarjeta <div class="tarjeta">
     * h3: "Ticket #N"
     * p: descripción, aula, prioridad
     * p estado: con clases según estado:
       - estado-nuevo, estado-en-progreso, estado-cerrado
     * div acciones con DOS botones:
       - "Avanzar"  class "btn-mini" data-op="avanzar" data-index="..."
       - "Reabrir"  class "btn-mini" data-op="reabrir" data-index="..."
========================================================= */

function pintarTickets(lista) {
  // TODO
  contenedorTickets.innerHTML="";
  if (lista.length===0) {
    mensajeVacio.textContent="No hay tickets";
    return;
  }
  else{
    mensajeVacio.textContent="";
    for (let i = 0; i < lista.length; i++) {
      const ticket = lista[i];
      const divTicket=document.createElement("div");
      divTicket.classList.add("tarjeta");

      const h3=document.createElement("h3");
      h3.textContent=`N:${i+1}`;
      divTicket.appendChild(h3);

      const pDescr_aula_prioridad=document.createElement("p");
      pDescr_aula_prioridad.textContent=`
      ${ticket.descripcion} | ${ticket.aula} | ${ticket.prioridad}
      `;
      divTicket.appendChild(pDescr_aula_prioridad);

      const pEstado=document.createElement("p");
      pEstado.textContent=ticket.estado;
      if (ticket.estado==="nuevo") {
        pEstado.classList.add("estado-nuevo");
      }
      else if(ticket.estado==="en-progreso"){
        pEstado.classList.add("estado-en-progreso");
      }
      else{
        pEstado.classList.add("estado-cerrado");
      }
      divTicket.appendChild(pEstado);

      const divBotones=document.createElement("div");
      
      const btnAvanzar=document.createElement("button");
      btnAvanzar.textContent="Avanzar";
      btnAvanzar.setAttribute("data-op","avanzar");
      btnAvanzar.setAttribute("data-index",i);
      btnAvanzar.classList.add("btn-mini");
      divBotones.appendChild(btnAvanzar);

      const btnReabrir=document.createElement("button");
      btnReabrir.textContent="Reabrir";
      btnReabrir.setAttribute("data-op","reabrir");
      btnReabrir.setAttribute("data-index",i);
      btnReabrir.classList.add("btn-mini");
      divBotones.appendChild(btnReabrir);
      
      divTicket.appendChild(divBotones);
      contenedorTickets.appendChild(divTicket);
    }
  }
}

/* =========================================================
   5) Función actualizarResumen()
   - Recorre tickets (array original)
   - Cuenta: nuevos, en-progreso, cerrados
   - Muestra:
     "Nuevos: X | En progreso: Y | Cerrados: Z"
========================================================= */

function actualizarResumen() {
  // TODO
  let nuevos=0;
  let en_progreso=0;
  let cerrados=0;
  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];
    if (ticket.estado==="nuevo") {
      nuevos++;
    }
    else if(ticket.estado==="en-progreso"){
      en_progreso++;
    }
    else if(ticket.estado==="cerrado"){
      cerrados++;
    }
  }
  resumenTickets.textContent=`
    Nuevos: ${nuevos} | En progreso: ${en_progreso} | Cerrados: ${cerrados}
    `;
}

/* =========================================================
   6) Función aplicarFiltros()
   - Crea copia de tickets con for
   - Aplica filtros según los seleccionados en los selectores
   - Cuando el selector indica "todas", no filtres por ese criterio
   - Llama a pintarTickets(listaFiltrada) y actualizarResumen()
========================================================= */

function aplicarFiltros() {

 const selec_aula=filtroAula.value;
//  console.log(selec_aula);
 const selec_estado=filtroEstado.value;
//  console.log(selec_estado);
 const lista_filtrada=[];
  // TODO
  // lista_filtrada=tickets.filter(ticket=>{
  //   return 
  //   (selec_aula==="todas" || ticket.aula===selec_aula) &&
  //   (selec_estado==="todas" || ticket.estado.includes(estado))
  // }
  // );
  if (selec_aula!=="todas") {
      for (let i = 0; i < tickets.length; i++) {
        const ticket = tickets[i];
        if (selec_estado!=="todas") {
            if (ticket.aula===selec_aula && ticket.estado===selec_estado) {
                lista_filtrada.push(ticket);
            }
        }
        else{
          if (ticket.aula===selec_aula) {
            lista_filtrada.push(ticket)
          }
        }
      } 
  }
  else{
    for (let i = 0; i < tickets.length; i++) {
      const ticket = tickets[i];
      if (selec_estado!=="todas") {
        if (ticket.estado===selec_estado) {
          lista_filtrada.push(ticket);
        }
      }
      else{
        lista_filtrada.push(ticket);
      }
    }
    
  }
  // console.log("estoy");
  // console.log(lista_filtrada);
  pintarTickets(lista_filtrada);
  actualizarResumen();
}

/* =========================================================
   7) Click en btnRegistrarTicket
   - Validar: descripcion y aula no vacías
   - Si error: alert y return
   - Si ok:
     * crear Ticket
     * push en tickets
     * limpiar campos (""), prioridad por defecto "Baja"
     * aplicarFiltros()
========================================================= */

// TODO
btnRegistrarTicket.addEventListener("click",function () {
//   const descripcionTicket=document.getElementById("descripcionTicket");
// const aulaTicket=document.getElementById("aulaTicket");
// const prioridadTicket=document.getElementById("prioridadTicket");
let regis_descr=descripcionTicket.value;
let regis_aula=aulaTicket.value;
let regis_prior=prioridadTicket.value;
if (regis_descr==="") {
  console.log("La descripcion es obligatoria");
  return;
}
if (regis_aula==="") {
  console.log("El aula no puede estar vacia");
  return;
}
 const nuevo_ticket=new Ticket(regis_descr,regis_aula,regis_prior);
 tickets.push(nuevo_ticket);
 descripcionTicket.textContent="";
 aulaTicket.textContent="";
 prioridadTicket.value="Baja";
 aplicarFiltros();
})
/* =========================================================
   8) Delegación de eventos en contenedorTickets
   - Un solo addEventListener("click", ...)
   - Detecta el botón pulsado con event.target
   - Lee data-op y data-index, index a Number()
   - Si op === "avanzar": tickets[index].avanzarEstado()
   - Si op === "reabrir": tickets[index].reabrir()
   - Luego aplicarFiltros()
========================================================= */

// TODO
contenedorTickets.addEventListener("click",function (event) {
  if (event.target.tagName!=="BUTTON") {
    return;
  }
  else{
    const boton=event.target;
    const tipoBoton=boton.getAttribute("data-op");
    const indice=Number(boton.getAttribute("data-index"));

    if (tipoBoton==="avanzar") {
      tickets[indice].avanzarEstado();
    }
    else if(tipoBoton==="reabrir"){
      tickets[indice].reabrir();
    }
    aplicarFiltros();
  }
})
/* =========================================================
   9) Eventos change en filtros
   - filtroAula change -> aplicarFiltros
   - filtroEstado change -> aplicarFiltros
========================================================= */
filtroAula.addEventListener("change",aplicarFiltros);
filtroEstado.addEventListener("change",aplicarFiltros);
// TODO

/* =========================================================
   10) Inicio
   - (Opcional) crea 1 ticket de ejemplo
   - Llama a aplicarFiltros() y actualizarResumen()
========================================================= */
aplicarFiltros();
actualizarResumen();
// pintarTickets(tickets);
// TODO
