/* EJERCICIO 3
Objetivo:
1) Traer usuarios
2) Filtrar: username que empiece por "C"
3) Pintar en pantalla (nombre + username)

Pistas:
- usuario.username[0] === "C" (o startsWith)
- usa filter
*/

const btn = document.getElementById("btn");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

function pintar(usuariosFiltrados) {
  // TODO: vacía lista y pinta li con "nombre (username)"
  lista.innerHTML="";
  for (let i = 0; i < usuariosFiltrados.length; i++) {
    const usuario = usuariosFiltrados[i];
    const li=document.createElement("li");
    li.textContent=usuario.name;
    lista.appendChild(li);
  }  

}

async function cargarYFiltrar() {
  estado.textContent = "Cargando...";
  // TODO: fetch + ok + json
  try {
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("HTTP:"+response.status);      
    }
    const usuarios= await response.json();
    const usuariosC=usuarios.filter(usuario=>usuario.username.startsWith("D"));
    console.log(usuariosC);
    pintar(usuariosC);
    estado.textContent=`Usuarios con C:${usuariosC.length}`;
  } catch (error) {
    estado.textContent="Error al cargar los usuarios";
    console.log("Error:"+error.message);
  }
  // TODO: filtra
  // TODO: pinta
  // TODO: estado final: "Mostrados: X"
}

btn.addEventListener("click", function () {
  cargarYFiltrar();
});
