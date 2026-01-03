// inscripcion.js (VERSIÓN ALUMNO)
// EJERCICIO 4 — Formulario (validación + resumen)
// Objetivo:
// - Al enviar el form: preventDefault()
// - Validar campos y mostrar errores en los <small>
// - Si todo OK: mostrar mensaje en #ok y resumen en #resumen
//
// Reglas del examen:
// - Motivo mínimo 10 caracteres.
// - Email: usa la función proporcionada (copiar/pegar).

"use strict";

// 1) CAPTURA DE ELEMENTOS
const form = document.getElementById("formInscripcion");

const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputEdad = document.getElementById("edad");
const selectTurno = document.getElementById("turno");
const textareaMotivo = document.getElementById("motivo");

const errNombre = document.getElementById("errNombre");
const errEmail = document.getElementById("errEmail");
const errEdad = document.getElementById("errEdad");
const errTurno = document.getElementById("errTurno");
const errMotivo = document.getElementById("errMotivo");

const pOk = document.getElementById("ok");
const preResumen = document.getElementById("resumen");

// 2) FUNCIÓN PROPORCIONADA (COPIA Y PEGA TAL CUAL)
function validarEmail(email) {
  const e = email.trim();
  const exp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return exp.test(e);
}

// 3) FUNCIONES DE APOYO

function limpiarMensajes() {
  // PISTA: Vacía todos los elementos de error, ok y resumen
  errNombre.innerHTML="";
  errEmail.innerHTML="";
  errEdad.innerHTML="";
  errTurno.innerHTML="";
  errMotivo.innerHTML="";
  pOk.innerHTML="";
  preResumen.innerHTML="";
}

function validarNombre(nombre) {
  if (nombre==="") {
    errNombre.textContent="Error en el nombre";
    return false;
  }
  else{
    return true;
  }
}

function validarEdad(edadTexto) {
  // PISTA:
  // Realiza las conversiones necesarias
  // Haz las comprobaciones y devuelve true/false
  let edad=Number(edadTexto);
  if (isNaN(edad) || edad<=0 || edad>160) {
    errEdad.textContent="Error en la edad";
    return false;
  }
  else{
    return true;
  }
}


function validarTurno(turno) {
  // PISTA: return turno !== '';
  if (turno==="") {
    errTurno.textContent="Error en el turno";
    return false
  }
  else{
    return true;
  }
}

function validarMotivo(motivo) {
  if (motivo.length<=10) {
    errMotivo.textContent="Error en el motivo";
    return false;
  }
  else{
    return true;
  }

}

function construirResumen(nombre, email, edad, turno, motivo) {
  // PISTA:
  // - crea un string con varias líneas \n
  // - incluye nombre/email/edad/turno/motivo
  // - return texto
  let todoOK=true;
  let texto="";
  if (!validarNombre(nombre) || !validarEmail(email)||!validarEdad(edad)||!validarTurno(turno)||!validarMotivo(motivo)) {
    todoOK=false;
  }
  if (todoOK) {
    texto=`
    ${nombre}\n.
    ${email}\n.
    ${edad}\n.
    ${turno}\n.
    ${motivo}\n.
    `
  }
  else{
    return null;
  }
  return texto;
}

// 4) EVENTO SUBMIT
// PISTA (estructura):
// form.addEventListener('submit', function (evento) {
//   evento.preventDefault();
//   limpiarMensajes();
//
//   Recoge valores de inputs
//
//   Genera una variable para controlar si todo OK
//
//   Realiza las validaciones, mostrando mensajes en los <small> si hay error
//
//   Si todo OK:
//     Muestra mensaje en pOk
//     Construye resumen y lo muestra en preResumen
// });
form.addEventListener("submit",function (evento){
  evento.preventDefault();
  limpiarMensajes();
  let texto=construirResumen(inputNombre.value,inputEmail.value,inputEdad.value,selectTurno.value,textareaMotivo.value);
  if (texto===null) {
    preResumen.textContent="Algo salio mal....";
  }
  else{
    preResumen.textContent=texto;
  }
});
