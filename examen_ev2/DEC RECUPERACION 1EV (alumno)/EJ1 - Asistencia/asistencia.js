// EJERCICIO 1 - Registro de Asistencia y Puntos
// JS básico: clases, arrays, DOM y eventos.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE): ____________

/*
  CONTEXTO
  En clase tienes un listado de alumnos. El profesor:
  - Marca presente/ausente (asistencia)
  - Suma/resta puntos de participación
  - Quiere ver un ranking y un resumen rápido
*/

/* =========================================================
   1) Clase Alumno
   - Propiedades mínimas:
     * nombre (string)
     * asistencias (number)  -> empieza en 0
     * ausencias (number)    -> empieza en 0
     * puntos (number)       -> empieza en 0
   - Métodos recomendados:
     * marcarPresente(): suma 1 asistencia
     * marcarAusente(): suma 1 ausencia
     * sumarPuntos(cantidad): suma/resta puntos
========================================================= */

class Alumno {
  // TODO
  constructor(nombre,asistencias,ausencias){
    this.nombre=nombre;
    this.asistencias=Number(asistencias);
    this.ausencias=Number(ausencias);
    this.puntos=0;
  }
  marcarPresente(){
    this.asistencias++;
  }
  marcarAusente(){
    this.ausencias++;
  }
  sumarPuntos(cantidad){
    this.puntos+=cantidad;
  }
  restarPuntos(cantidad){
    if (this.puntos-cantidad<=0) {
      this.puntos=0;
    }
    else{
      this.puntos=this.puntos-(cantidad);
    }
  }  
}


/* =========================================================
   2) Array inicial "alumnos"
   - Crea un array con varios alumnos (4-6)
   - Los nombres DEBEN coincidir con las opciones del <select> del HTML
========================================================= */

let alumnos = [
  new Alumno("Antonio",0,0),
  new Alumno("Laura",0,0),
  new Alumno("Diego",0,0),
  new Alumno("Guillermo",0,0),
  new Alumno("Sara",0,0),
  new Alumno("Pablo",0,0),

]; // TODO: crea varios alumnos y añádelos al array
// Recuerda que deben coincidir con los del select en el HTML

/* =========================================================
   3) Captura de DOM (revisa asistencia.html, NO lo modifiques)
   - selectAlumno
   - btnPresente, btnAusente
   - btnSumar, btnRestar  (para puntos)
   - inputCantidad (cantidad de puntos a sumar/restar)
   - tbodyTabla (donde pintas filas)
   - resumen (texto con totales)
   - mensajeInfo (zona para mensajes al usuario)
========================================================= */
const selectAlumno=document.getElementById("selectAlumno");
const btnPresente=document.getElementById("btnPresente");
const btnSumar=document.getElementById("btnSumar");
const btnAusente=document.getElementById("btnAusente");
const btnRestar=document.getElementById("btnRestar");
const inputCantidad=document.getElementById("inputCantidad");
const tbodyTabla=document.getElementById("tbodyTabla");
const resumen=document.getElementById("resumen");
const mensajeInfo=document.getElementById("mensajeInfo");
// TODO: const selectAlumno = ...
// TODO: captura el resto de elementos

/* =========================================================
   4) Función buscarAlumnoPorNombre(nombre)
   - Recorre el array con for
   - Devuelve el alumno encontrado o null
========================================================= */
function buscarAlumnoPorNombre(nombre) {
  nombre=nombre.toLowerCase();
  for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];
    if (alumno.nombre.toLowerCase().includes(nombre)) {
      return alumno;
    }
  }
  return null;
}
/* =========================================================
   5) Función calcularTotales()
   - Recorre alumnos con for
   - Devuelve un objeto con:
     { totalAsistencias, totalAusencias, totalPuntos }
========================================================= */

function calcularTotales() {
  // TODO
  let totalAsistencias=0;
  let totalAusencias=0;
  let totalPuntos=0;
  for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];
    totalAsistencias+=alumno.asistencias;
    totalAusencias+=alumno.ausencias;
    totalPuntos+=alumno.puntos;
  }
  const totales={totalAsistencias,totalAusencias,totalPuntos};
  return totales;
}
/* =========================================================
   6) Función pintarTabla()
   - Vacía tbodyTabla
   - Pinta los alumnos en el orden original (sin ordenar)
   - Por cada alumno crea un <tr> con:
     * nombre
     * asistencias
     * ausencias
     * puntos
========================================================= */

function pintarTabla() {
  // TODO
  tbodyTabla.innerHTML="";
  for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];
    const tr=document.createElement("tr");
    const tdNombre=document.createElement("td");
    tdNombre.textContent=alumno.nombre;
    tr.appendChild(tdNombre);

    const tdAsistencia=document.createElement("td");
    tdAsistencia.textContent=alumno.asistencias;
    tr.appendChild(tdAsistencia);

    const tdAusencias=document.createElement("td");
    tdAusencias.textContent=alumno.ausencias;
    tr.appendChild(tdAusencias);

    const tdPuntos=document.createElement("td");
    tdPuntos.textContent=alumno.puntos;
    tr.appendChild(tdPuntos);

    tbodyTabla.appendChild(tr);
  }
}

/* =========================================================
   7) Función actualizarResumen()
   - Usa calcularTotales()
   - Actualiza el texto de "resumen"
   - Ejemplo:
     "Asistencias: X | Ausencias: Y | Puntos totales: Z"
========================================================= */

function actualizarResumen() {
  // TODO
  const totales=calcularTotales();
  resumen.textContent=`
  Asistencias: ${totales.totalAsistencias} | Ausencias: ${totales.totalAusencias} | Puntos totales: ${totales.totalPuntos}
  `;
}

/* =========================================================
   8) Función actualizarMensaje(texto)
   - Muestra un mensaje en pantalla (mensajeInfo)
   - No uses alert para esto, solo para errores graves si hace falta
========================================================= */

function actualizarMensaje(texto) {
  // TODO
  mensajeInfo.textContent=texto;
}

/* =========================================================
   9) Función obtenerAlumnoSeleccionado()
   - Lee el nombre del select
   - Usa buscarAlumnoPorNombre()
   - Si no existe, devuelve null
========================================================= */

function obtenerAlumnoSeleccionado() {
  // TODO
  const nombre_alumno=selectAlumno.value;
  if (nombre_alumno==="") {
    return null
  }
  return buscarAlumnoPorNombre(nombre_alumno);
}

/* =========================================================
   10) Eventos de botones
   - btnPresente: marcarPresente del alumno seleccionado
   - btnAusente: marcarAusente del alumno seleccionado
   - btnSumar: leer inputCantidad (número) y sumar puntos
   - btnRestar: leer inputCantidad (número) y restar puntos (cantidad negativa)
   - En todos:
     * valida selección
     * valida cantidad (si aplica): número y no NaN
     * tras cambiar datos: pintarTabla() y actualizarResumen()
========================================================= */
btnPresente.addEventListener("click",function () {
  const alu_tabla=obtenerAlumnoSeleccionado();
  if (alu_tabla===null) {
    console.log("alu_tabla es null");
    return;
  }
  else{
    alu_tabla.marcarPresente();
  }
  pintarTabla();
  actualizarResumen();
});

btnAusente.addEventListener("click",function () {
  const alu_tabla=obtenerAlumnoSeleccionado();
    if (alu_tabla===null) {
    console.log("alu_tabla es null");
    return;
  }
  else{
    alu_tabla.marcarAusente();
  }

  pintarTabla();
  actualizarResumen();  
});

btnSumar.addEventListener("click",function () {
  console.log("btnSumar")
  const cantidad_puntos=Number(inputCantidad.value);
  const alu_tabla=obtenerAlumnoSeleccionado();
  if (isNaN(cantidad_puntos)) {
    console.log(cantidad_puntos);

    actualizarMensaje("Cantidad_puntos isNan");
    return;
  }
  if (alu_tabla===null) {
    console.log("alu_tabla es null");
  return;
  }
  //si llego aqui todo va bien.
  console.log(alu_tabla);
  alu_tabla.sumarPuntos(cantidad_puntos);
  pintarTabla();
  actualizarMensaje();
   console.log(alu_tabla.puntos);
});

btnRestar.addEventListener("click",function () {
  console.log("btnRestar")
  const cantidad_puntos=Number(inputCantidad.value);
  console.log(cantidad_puntos);
  const alu_tabla=obtenerAlumnoSeleccionado();
  console.log(alu_tabla);
  if (isNaN(cantidad_puntos)) {
    actualizarMensaje("Cantidad_puntos isNan");
    console.log("cantidad puntos mal");
    return;
  }
  if (alu_tabla===null) {
    console.log("alu_tabla es null");
  return;
  }
  //si llego aqui todo va bien.
  alu_tabla.restarPuntos(cantidad_puntos);
  pintarTabla();
  actualizarMensaje();
  console.log(alu_tabla.puntos);

});
// TODO: addEventListener("click", function() { ... }) a cada botón

/* =========================================================
   11) Atajos de teclado (keydown)
   - Tecla "1": marca presente al primer alumno del array
   - Tecla "2": marca presente al segundo
   - Tecla "3": marca presente al tercero
   - (Opcional) Tecla "0": limpiar mensaje
========================================================= */
document.addEventListener("keydown",function (event) {
  if (event.key==="1") {
    alumnos[0].marcarPresente();
  }
  if (event.key==="2") {
    alumnos[1].marcarPresente();
  }
  if(event.key==="3"){
    alumnos[2].marcarPresente();
  }

  pintarTabla();
  actualizarMensaje();
  actualizarResumen();
});
// TODO: document.addEventListener("keydown", function(event) { ... })

/* =========================================================
   12) Inicio
   - Llama a pintarTabla()
   - Llama a actualizarResumen()
   - Muestra un mensaje tipo: "Sistema listo"
========================================================= */
pintarTabla();
actualizarResumen();

// TODO
