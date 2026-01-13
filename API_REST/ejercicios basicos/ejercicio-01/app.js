/* EJERCICIO 1
Objetivo (con async/await):
1) Pedir usuarios a: https://jsonplaceholder.typicode.com/users
2) Mostrar en consola:
   - total de usuarios
   - nombre del primer usuario

Pistas:
- fetch devuelve una PROMESA
- response.json() devuelve OTRA PROMESA
- Comprueba response.ok y usa throw si es false
*/

const btn = document.getElementById("btn");
const estado = document.getElementById("estado");

async function cargarUsuarios() {
  estado.textContent = "Cargando...";
  try {
    const respuesta= await fetch("https://jsonplaceholder.typicode.com/users");
    if (!respuesta.ok) {
      throw new Error("HTTP"+respuesta.status);
    }
    const usuarios= await respuesta.json();
    console.log("Total Usuarios:"+usuarios.length);
    console.log(`Nombre del primer usuario ${usuarios[0].name}`);
    estado.textContent="Usuarios cargados...";
  } catch (error) {
    estado.textContent="Error al cargar usuarios";
    console.error("ERROR:",error.message);
  }
  // TODO 1: haz fetch a la URL

  // TODO 2: comprueba response.ok
  // TODO 3: convierte a JSON
  // TODO 4: console.log con total y primer nombre
  // TODO 5: actualiza estado a "Listo"
}

btn.addEventListener("click", function () {
  cargarUsuarios();
});
