/* EJERCICIO 7 (RETO)
Objetivo:
- Botón A: carga usuarios con async/await (te dejo el ejemplo completo)
- Botón B: consigue LO MISMO pero con then/catch

Qué debe verse:
- estado "Cargando..."
- lista con 5 usuarios (nombre)
- si hay error: estado "Error" + console.error

API:
https://jsonplaceholder.typicode.com/users
*/

const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

function pintar(usuarios) {
  lista.innerHTML = "";
  for (let i = 0; i < usuarios.length; i++) {
    const li = document.createElement("li");
    li.textContent = usuarios[i].name;
    lista.appendChild(li);
  }
}

function comprobarOk(response) {
  if (!response.ok) {
    throw new Error("HTTP " + response.status);
  }
}

async function cargarConAsyncAwait() {
  estado.textContent = "Cargando...";
  lista.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    comprobarOk(response);

    const usuarios = await response.json();
    const cinco = usuarios.slice(0, 5);

    pintar(cinco);
    estado.textContent = "Listo (async/await)";
  } catch (error) {
    estado.textContent = "Error (async/await)";
    console.error("ERROR:", error.message);
  }
}

function cargarConThenCatch() {
  estado.textContent = "Cargando...";
  lista.innerHTML = "";

  // TODO: Reescribe el flujo anterior con then/catch:
  // - fetch(...)
  // - .then(function (response) { comprobarOk(response); return response.json(); })
  // - .then(function (usuarios) { ...slice(0,5)... pintar... estado final })
  // - .catch(function (error) { estado error; console.error(...) })
}

btnA.addEventListener("click", function () {
  cargarConAsyncAwait();
});

btnB.addEventListener("click", function () {
  cargarConThenCatch();
});
