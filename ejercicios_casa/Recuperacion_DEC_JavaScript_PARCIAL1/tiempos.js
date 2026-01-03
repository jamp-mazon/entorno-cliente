// tiempos.js (VERSIÓN ALUMNO)
// EJERCICIO 3 — Estadísticas de tiempos (prompt)
// Objetivo:
// - Pedir tiempos (1..600) con prompt hasta "fin" o Cancelar.
// - Acepta decimales.
// - Guardar solo valores válidos.
// - Mostrar en #salidaTiempos: cantidad, suma, media (2 decimales), mínimo, máximo, >=120.
//


'use strict';

const salida = document.getElementById('salidaTiempos');
const tiempos = []; // números válidos

function esNumeroValido(texto) {
  // PISTA:
  // Recoge el número con Number
  // Comprueba que se trate de un número y rango 1..600 
  // Devuelve true/false
  const numero=Number(texto);
  if (isNaN(numero) || numero<1 || numero>600) {
    return false;
  }
  else{return true};
}

function pedirTiempos() {
  // PISTA (estructura sin bucles infinitos):
  // Recoge respuesta con prompt
  // Mientras respuesta no sea null y no sea 'fin':
  //   Si es número válido: añádelo al array
  //   Vuelve a pedir respuesta con prompt
  let respuesta = prompt('Tiempo:');
  // Usa && para salir cuando sea null o escriban 'fin'
  while (respuesta !== null && respuesta !== 'fin') {
    if (esNumeroValido(respuesta)) {
      tiempos.push(Number(respuesta));
    }
    respuesta = prompt('Tiempo:');
  }
}

function mostrarEstadisticas() {
  // PISTA:
  // -Comprueba si hay tiempos; si no, muestra "No hay datos" y return
  // -Calcula cantidad, suma, media, mínimo, máximo, >=120
  // -Muestra los resultados en salida.innerHTML
  if (tiempos.length<=0) {
    salida.innerHTML="No hay datos";
  }
  else{
    let suma=0; let media=0; let minimo=tiempos[0]; let maximo=tiempos[0];
    for (const tiempo of tiempos) {
      suma+=tiempo;
      if (tiempo<minimo) {
        minimo=tiempo;
      }
      if (tiempo>maximo) {
        maximo=tiempo;
      }
    }
    media=suma/tiempos.length;
    salida.innerHTML=
    `
    La suma total es:${suma}.\n
    La media total es: ${media}.\n
    El tiempo minimo es: ${minimo}.\n
    El tiempo maximo es: ${maximo}.\n
    `
  }
}

// EJECUCIÓN
// PISTA:
// LLama a las funciones pedirTiempos() y mostrarEstadisticas()
// pedirTiempos()
mostrarEstadisticas();
