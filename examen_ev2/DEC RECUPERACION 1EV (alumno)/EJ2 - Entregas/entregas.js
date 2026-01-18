// EJERCICIO 2 - Gestor de Entregas
// JS básico: clase, validación, filtros simples y DOM.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE): ____________

/*
  CONTEXTO
  Necesitas registrar entregas de tareas de alumnos:
  - alumno, tarea, módulo y nota (0 a 10)
  - ver si está aprobada
  - filtrar por módulo y por “solo aprobadas”
*/

/* =========================================================
   1) Clase Entrega
   - Constructor: alumno, tarea, modulo, nota
   - Método estaAprobada(): true si nota >= 5
========================================================= */


/* =========================================================
   2) Array "entregas"
========================================================= */
const entregas = [];

/* =========================================================
   3) Captura de DOM (revisa entregas.html)
   - Inputs: alumnoEntrega, tareaEntrega, moduloEntrega, notaEntrega
   - Botón: btnRegistrarEntrega
   - Filtros: filtroModulo, filtroSoloAprobadas (checkbox)
   - Visualización: contenedorEntregas, resumenEntregas, mensajeVacio
========================================================= */

// TODO: const alumnoEntrega = ...
// TODO: captura el resto

/* =========================================================
   4) Función crearTarjetaEntrega(entrega)
   - Devuelve un <article> con clase "tarjeta"
   - Contenido recomendado:
     * h3: tarea
     * p: alumno, módulo, nota
     * p estado: "APROBADA" o "SUSPENSA" con clase según estado
========================================================= */

function crearTarjetaEntrega(entrega) {
  // TODO
  return document.createElement("article");
}

/* =========================================================
   5) Función pintarEntregas(lista)
   - Vacía contenedorEntregas
   - Si lista vacía: mostrar mensajeVacio y return
   - Si no: ocultar mensajeVacio y pintar tarjetas
========================================================= */

function pintarEntregas(lista) {
  // TODO
}

/* =========================================================
   6) Función actualizarResumen()
   - Recorre el array ORIGINAL entregas con for
   - Cuenta:
     * total
     * aprobadas
     * suspensas
   - Actualiza resumenEntregas con:
     "Total: X | Aprobadas: Y | Suspensas: Z"
========================================================= */

function actualizarResumen() {
  // TODO
}

/* =========================================================
   7) Función aplicarFiltros()
   - Crea una copia de entregas usando for
   - Filtro por módulo si filtroModulo.value !== "todos"
   - Si filtroSoloAprobadas.checked: deja solo aprobadas
   - Llama a pintarEntregas(listaFiltrada) y actualizarResumen()
   - NOTA: puedes usar for o métodos declarativos (opcionales)
========================================================= */

function aplicarFiltros() {
  // TODO
}

/* =========================================================
   8) Click en btnRegistrarEntrega
   Validaciones:
   - alumno, tarea, módulo NO vacíos
   - nota: número válido (usa isNaN) entre 0 y 10
   Si error: alert y return
   Si ok:
   - crea Entrega y push
   - limpia formulario
   - llama a aplicarFiltros()
========================================================= */

// TODO: btnRegistrarEntrega.addEventListener("click", function() { ... })

/* =========================================================
   9) Eventos de filtros (change)
   - filtroModulo: change -> aplicarFiltros
   - filtroSoloAprobadas: change -> aplicarFiltros
========================================================= */

// TODO

/* =========================================================
   10) Inicio
   - (Opcional) crea 1-2 entregas de ejemplo
   - Llama a aplicarFiltros() y actualizarResumen()
========================================================= */

// TODO
