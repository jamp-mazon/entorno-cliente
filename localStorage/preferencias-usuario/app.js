// EJERCICIO: Preferencias de usuario con LocalStorage
// Trabaja únicamente en este archivo.
//
// OBJETIVO:
// - Leer una preferencia desde localStorage al cargar la página
// - Guardar cambios cuando el usuario interactúa
// - Comprobar que la preferencia se mantiene al recargar

// PISTA GENERAL:
// localStorage guarda STRINGS, no booleanos reales.

// 1️⃣ Leer la preferencia al cargar la página
// - Usa la clave: "modoOscuro"
// - Si el valor es "true", activa el modo oscuro
// - Si no existe o es "false", deja el modo claro
const modoBtn=document.getElementById("modoBtn");
let pEstado=document.getElementById("pEstado");
// TODO: Lee el valor desde localStorage

const existeOscuro=localStorage.getItem("modoOscuro")==="true";
actualizarInterfaz(existeOscuro);
// 2️⃣ Referencias al DOM
// TODO: Obtén el botón y el párrafo de estado


// 3️⃣ Función para actualizar la interfaz
// - Añade o quita la clase "oscuro" al body
// - Actualiza el texto del párrafo
// TODO: Crea la función
function actualizarInterfaz(existeOscuro) {
    if (existeOscuro) {
        document.body.classList.add("oscuro");
        pEstado.textContent="Modo Oscuro activado";
    }
    else{
        document.body.classList.remove("oscuro");
        pEstado.textContent="modo claro activado";
    }
}

// 4️⃣ Evento del botón
// - Cambia el modo actual
// - Guarda la nueva preferencia en localStorage
// TODO: Añade el addEventListener
modoBtn.addEventListener("click",()=>{
    const estadoActual=localStorage.getItem("modoOscuro")==="true";
    const nuevoEstado=! estadoActual;
    localStorage.setItem("modoOscuro",nuevoEstado.toString());
    actualizarInterfaz(nuevoEstado);
})

