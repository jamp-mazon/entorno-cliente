// EJERCICIO: Notas rápidas con LocalStorage (versión alumno)
//
// OBJETIVO:
// - Guardar una nota escrita por el usuario
// - Recuperarla al cargar la página
// - Comprobar la persistencia con LocalStorage
//
// REGLAS:
// - No modificar el HTML
// - Trabajar solo en este archivo
// - localStorage solo guarda strings
//
// CLAVE a usar en localStorage:
const CLAVE_NOTA = "notaUsuario";

let textarea;
let boton;
let parrafoEstado;
// 1) Leer la nota al cargar la página
// TODO: Lee la nota desde localStorage y colócala en el textarea
let nota
document.addEventListener("DOMContentLoaded",()=> {
    
// 2) Referencias al DOM
// TODO: Obtén el textarea, el botón y el párrafo de estado
    textarea=document.getElementById("nota");
    boton=document.getElementById("guardarBtn");
    parrafoEstado=document.getElementById("estado");
    nota=localStorage.getItem(CLAVE_NOTA) || "";
    textarea.value=nota;
    boton.addEventListener("click",guardarNota);
})
// 3) Guardar la nota
// - Al pulsar el botón:
//   - Lee el contenido del textarea
//   - Guárdalo en localStorage
//   - Muestra un mensaje de confirmación
// TODO: Implementa la lógica
function guardarNota() {
    const notaNueva=textarea.value;
    if (notaNueva ==="") {
        parrafoEstado.textContent="Nota no puede estar vacia";
        return;
    }
    localStorage.setItem(CLAVE_NOTA,notaNueva);
    parrafoEstado.textContent="Se ha guardado la nota";
}

// 4) Pista para comprobar
// - Recarga la página
// - Abre Application → Local Storage
// - Comprueba la clave "notaUsuario"

