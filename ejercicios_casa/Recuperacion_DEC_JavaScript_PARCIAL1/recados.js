// recados.js (VERSIÓN ALUMNO)
// EJERCICIO 2 — Lista de recados (simplificado)
// Objetivo:
// 1) Añadir recados (validando vacío) y mostrarlos en #listaRecados
// 2) Click en un <li> -> toggle de clase 'hecha' (visual)
// 3) Contador = total de recados
// 4) Borrar todo vacía lista y contador
//
// Pistas:
// - Guarda los recados en un array de strings.
// - Para repintar: borra ul y vuelve a crear los <li>.
// - Para el toggle: usa classList.toggle('hecha') en el <li> pulsado.

'use strict';

// 1) CAPTURA DE ELEMENTOS
const inputRecado = document.getElementById('txtRecado');
const btnAdd = document.getElementById('btnAddRecado');
const pError = document.getElementById('errorRecado');
const ulRecados = document.getElementById('listaRecados');
let spanContador = document.getElementById('contadorRecados');
const btnBorrarTodo = document.getElementById('btnBorrarTodo');

// 2) DATOS
let recados = []; // array de strings

// 3) FUNCIONES

function limpiarElemento(elemento) {
  elemento.innerHTML="";
}

function setError(mensaje) {
  mensaje.textContent="El campo esta vacio";
}

function actualizarContador() {
  // PISTA: actualiza spanContador con el número de recados
  spanContador.textContent=recados.length;
}

function pintarRecados() {
  // PISTA:
  // Limpia ulRecados
  // Recorre el array recados
  // Por cada recado:
  //   Crea un <li>
  //   Añade el <li>
  // Al final, actualiza el contador
  limpiarElemento(ulRecados);
  for (const recado of recados) {
    const li=document.createElement("li");
    li.textContent=recado;
    ulRecados.appendChild(li);
    actualizarContador();
  }
}

// 4) EVENTO: AÑADIR
// PISTA:
// btnAdd.addEventListener('click', function () {
//   Recoge y trimea el valor del input
//   Si está vacío: muestra error y return
//   Si no:
//     Limpia el error
//     Añade el recado al array
//     Limpia el input
//     Repinta los recados
// });
btnAdd.addEventListener("click",function () {
  if (inputRecado.value.trim()==="") {
    setError(pError);
    return;
  }
  else{
    limpiarElemento(pError);
    recados.push(inputRecado.value.trim());
    inputRecado.value="";
    pintarRecados();
  }
  
})
// 5) EVENTO: TOGGLE VISUAL (delegación)
// PISTA:
// ulRecados.addEventListener('click', function (evento) {
//   Recoge el elemento clicado 
//   Si no es un <li>, return
//   Si es un <li>:
//     Haz toggle de clase 'hecha' en el <li>
//     (no hace falta modificar el array de recados)
// });
ulRecados.addEventListener("click",function (evento) {
  if (evento.target.tagName!=="LI") {
    return;
  }
  else{
    evento.target.classList.toggle("hecha");
  }
});
// 6) EVENTO: BORRAR TODO
// PISTA:
// btnBorrarTodo.addEventListener('click', function () {
// Inicializa el array de recados a vacío
// Repinta los recados
// });
btnBorrarTodo.addEventListener("click",function () {
  recados=[];
  actualizarContador();
  pintarRecados();

})
// 7) INICIAL
// PISTA: pintarRecados();
pintarRecados();