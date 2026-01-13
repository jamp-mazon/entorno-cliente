/* EJERCICIO 2
Objetivo:
- Cargar usuarios desde la API y pintarlos en <ul>.
- Mientras carga: estado "Cargando..."
- Al terminar: estado "Usuarios cargados: X"

API:
https://jsonplaceholder.typicode.com/users
*/

const btn = document.getElementById("btn");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

function pintarUsuarios(usuarios) {
  // TODO: vacía la lista
  lista.innerHTML="";
  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    const li=document.createElement("li");
    li.textContent=usuario.name;
    lista.appendChild(li);
  }
  // TODO: crea <li> por cada usuario con su nombre
}

async function cargarUsuarios() {
  estado.textContent = "Cargando...";
  // TODO 1: fetch
  try {
      const response= await fetch("https://jsonplaceholder.typicode.com/users");
  // TODO 2: response.ok + throw
  if (!response.ok) {
    throw new Error("HTTP"+response.status);
  }
    const usuarios= await response.json();
    pintarUsuarios(usuarios);
    estado.textContent="Usuarios cargados con exito";
  } catch (error) {
    estado.textContent="Error al cargar los usuarios";
    console.log(`Error:${error}`);
  }
  // TODO 3: json
  // TODO 4: pintarUsuarios
  // TODO 5: estado final con total
}

btn.addEventListener("click", function () {
  cargarUsuarios();
});
