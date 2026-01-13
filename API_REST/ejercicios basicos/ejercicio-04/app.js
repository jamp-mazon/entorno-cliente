/* EJERCICIO 4
Objetivo:
- Manejar errores con try/catch
- Mostrar mensaje amigable en pantalla
- Mostrar mensaje técnico en consola

Pistas:
- response.ok puede ser false (404/500) y fetch NO entra en catch por eso.
- Si !response.ok: throw new Error("HTTP ...")
*/

const btn = document.getElementById("btn");
const romper = document.getElementById("romper");
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

async function probarCarga() {
  estado.textContent = "Cargando...";
  lista.innerHTML = "";

  const urlBuena = "https://jsonplaceholder.typicode.com/users";
  const urlMala = "https://jsonplaceholder.typicode.com/usuarios"; // 404
  const url = romper.checked ? urlMala : urlBuena;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP:"+response.status);
    }
    const usuarios= await response.json();
    pintar(usuarios);
    estado.textContent=`Usuarios encontrados:${usuarios.length}`;
  } catch (error) {
    estado.textContent="Error al cargar usuarios";
    console.log("Error:"+error.message);
  }
  // TODO: envuelve en try/catch
  // TODO: fetch(url)
  // TODO: if (!response.ok) throw new Error(...)
  // TODO: json, pintar, estado final
  // TODO (catch): estado "Error al cargar" y console.error con error.message
}

btn.addEventListener("click", function () {
  probarCarga();
});
