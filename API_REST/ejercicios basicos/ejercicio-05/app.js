/* EJERCICIO 5
Objetivo:
1) Pedir usuario 1: https://jsonplaceholder.typicode.com/users/1
2) Pedir posts del usuario: https://jsonplaceholder.typicode.com/posts?userId=1
3) Mostrar:
   - Nombre del usuario en #nombre
   - 5 títulos de posts en #posts

Pistas:
- Usa await en dos fetch distintos (uno después del otro)
- Reutiliza una función comprobarOk(response)
*/

const btn = document.getElementById("btn");
const estado = document.getElementById("estado");
const nombre = document.getElementById("nombre");
const posts = document.getElementById("posts");

function comprobarOk(response) {
  // TODO: si !response.ok -> throw new Error("HTTP ...")
}

function pintarPosts(listaPosts) {
  posts.innerHTML = "";
  for (let i = 0; i < listaPosts.length; i++) {
    const li = document.createElement("li");
    li.textContent = listaPosts[i].title;
    posts.appendChild(li);
  }
}

async function cargar() {
  estado.textContent = "Cargando...";
  nombre.textContent = "";
  posts.innerHTML = "";

  // TODO: try/catch
  // TODO: fetch usuario, comprobarOk, json
  // TODO: fetch posts, comprobarOk, json
  // TODO: quedarte con 5 (slice)
  // TODO: pintar y estado final
}

btn.addEventListener("click", function () {
  cargar();
});
