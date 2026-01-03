// app_rec.js (VERSIÓN ALUMNO)
// EJERCICIO 1 — Mini-biblioteca (S1)
// Objetivo:
// 1) Pintar un catálogo de libros en #catalogoLibros
// 2) Al escribir en #buscarLibro, mostrar sugerencias (máx. 5) en #sugerenciasLibros
// 3) Click en sugerencia: rellenar el input y limpiar sugerencias.


// "use strict";

// 1) DATOS (8 títulos)
const libros = [
  // PISTA: escribe 8 títulos en formato string
  // "Clean Code",
  "origen","malditos bastardos","los otros","el cantar del mio cid","1936","barrio pinto"
];

// 2) CAPTURA DE ELEMENTOS DEL DOM
//const inputBuscar
//const ulSugerencias
//const divCatalogo
const inputBuscar=document.getElementById("buscarLibro");
const ulSugerencias=document.getElementById("sugerenciasLibros");
const divCatalogo=document.getElementById("catalogoLibros");
// 3) FUNCIONES AUXILIARES

function limpiarElemento(elemento) {
  // PISTA: elemento.innerHTML = '';
  elemento.innerHTML="";
}

function pintarCatalogo() {
  // PISTA:
  // - Limpia divCatalogo
  // - Recorre libros
  // - Crea un <p> por cada título y lo añades al catálogo
  limpiarElemento(divCatalogo);
  for (const libro of libros) {
    const pTitulo=document.createElement("p");
    pTitulo.textContent=libro;
    divCatalogo.appendChild(pTitulo);
  }
}

function pintarSugerencias(textoBusqueda) {
  // PISTA:
  // - Limpia ulSugerencias
  // - Recorre libros y filtra por búsqueda (minúsculas)
  // - Crea <li> con click que rellena input y limpia
  // - Máximo 5 sugerencias
  limpiarElemento(ulSugerencias);
  for (const libro of libros) {
    if (libro.toLowerCase().includes(textoBusqueda.toLowerCase())) {
      const li=document.createElement("li");
      li.textContent=libro;
      li.addEventListener("click",function () {
        inputBuscar.value=libro;
        limpiarElemento(ulSugerencias);
      })
      ulSugerencias.appendChild(li);
    }
    if (ulSugerencias.children.length===4) {
      break;
    }
  }
  if (ulSugerencias.children.length===0) {
    const li=document.createElement("li");
    li.textContent="No hay coincidencias";
    ulSugerencias.appendChild(li);
    limpiarElemento(divCatalogo);
  }
}

// 4) INICIALIZACIÓN
// PISTA: pinta el catálogo nada más cargar
// pintarCatalogo();
limpiarElemento(divCatalogo);
pintarCatalogo();
// 5) EVENTO INPUT
// PISTA: Escucha 'input' en inputBuscar, trimea el valor,
// limpia sugerencias si está vacío o busca si hay texto
inputBuscar.addEventListener("input",function () {
  if (inputBuscar.value==="") {
    limpiarElemento(ulSugerencias);
    return;
  }
  limpiarElemento(divCatalogo);
  
  pintarSugerencias(inputBuscar.value.trim());

})
