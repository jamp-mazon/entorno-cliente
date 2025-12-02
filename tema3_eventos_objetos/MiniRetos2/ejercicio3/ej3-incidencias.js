// EJERCICIO 3 - PANEL DE INCIDENCIAS TÉCNICAS
// Enlazar este archivo al final de ej3-incidencias.html

// 1. Referencias principales del DOM
// Sugerencia: const formIncidencia = document.getElementById("#formIncidencia");
const formIncidencia = document.getElementById("formIncidencia");
const errTituloIncidencia = document.getElementById("errTituloIncidencia");
const errDescIncidencia = document.getElementById("errDescIncidencia");
const msgOkIncidencia = document.getElementById("msgOkIncidencia");
const contadorAbiertas = document.getElementById("contadorAbiertas");
const tituloIncidencia = document.getElementById("tituloIncidencia");
const descIncidencia = document.getElementById("descIncidencia");
const listaIncidencias = document.getElementById("listaIncidencias");


// 2. Estructura de datos para guardar las incidencias
// Sugerencia: usa un array de objetos.
// Cada objeto puede tener al menos: id, titulo, descripcion, estado.
let incidencias = [];
let siguienteId = 1; // puedes usarlo para asignar identificadores únicos

// 3. Función para limpiar mensajes de error y de éxito
function limpiarMensajes() {
    // Deja vacíos los textos de error y el mensaje OK
    // ...
    errTituloIncidencia.textContent="";
    errDescIncidencia.textContent="";
    msgOkIncidencia.textContent="";
}

// 4. Función para validar el formulario
// Devuelve true/false según si los datos son válidos
function validarFormulario(titulo, descripcion) {
    let esValido = true;

    // Borra mensajes anteriores
    limpiarMensajes();
    if (titulo==="") {
        errTituloIncidencia.textContent="Error el titulo no puede ser vacio";
        esValido=false;
    }
    if (descripcion==="") {
        errDescIncidencia.textContent="Error la descripcion no puede estar vacia";
        esValido=false;
    }

    // Comprueba que el título no esté vacío
    // Comprueba que la descripción no esté vacía
    // Muestra mensajes en errTitulo y errDescripcion si hace falta
    // Si hay errores, esValido = false;

    return esValido;
}

// 5. Función para crear una incidencia (objeto) y guardarla en el array
function crearIncidencia(titulo, descripcion) {
    const incidencia={
        id:siguienteId,
        titulo:titulo,
        descripcion:descripcion,
        estado:"abierta"
    }
    siguienteId++;
    incidencias.push(incidencia);
    // Crea un objeto con las propiedades necesarias
    // Usa siguienteId para el id
    // Asigna el estado inicial "abierta"
    // Guarda la incidencia en el array incidencias
    // Incrementa siguienteId
}

// 6. Función para actualizar el contador de incidencias abiertas
function actualizarContador() {
    let conta_abiertas=0;
    // Recorre el array incidencias
    // Cuenta cuántas están con estado "abierta"
    // Actualiza el texto de contadorAbiertas
    for (const incidencia of incidencias) {
        if (incidencia.estado==="abierta") {
            conta_abiertas++;
        }
    }
    contadorAbiertas.textContent="Incidencias abiertas:"+conta_abiertas;
}

// 7. Función para "pintar" todas las incidencias en la lista <ul>
function renderizarIncidencias() {
    // Borra el contenido actual de listaIncidencias
    listaIncidencias.innerHTML="";
    // Recorre el array incidencias
    // Por cada incidencia:
    //  - crea un <li> con clase "item-incidencia"
    //  - dentro, crea elementos para el título, la descripción y el estado
    //  - añade dos botones:
    //      * "Marcar como resuelta" (clase btn-peque btn-resuelta)
    //      * "Eliminar" (clase btn-peque btn-eliminar)
    //  - usa data-atributos (por ejemplo data-id) para guardar el id de la incidencia
    //  - añade el <li> a la lista
    for (const incidencia of incidencias) {
        let li=document.createElement("li");
        li.classList.add("item-incidencia");
        li.setAttribute("data-id",incidencia.id);
        //CREANDO H3 Y 2 P para la lista
        let h3=document.createElement("h3");
        h3.textContent=incidencia.titulo;
        let pDescripcion=document.createElement("p");
        pDescripcion.textContent=incidencia.descripcion;
        let pEstado=document.createElement("p");
        pEstado.textContent=incidencia.estado;
        //Boton resolver
        const btn_resuelta=document.createElement("button");
        btn_resuelta.textContent="Resolver";
        btn_resuelta.classList.add("btn-resuelta","btn-peque");
        btn_resuelta.setAttribute("data-id","btn_resuelta");
        // Boton borrar
        const btn_borrar=document.createElement("button");
        btn_borrar.textContent="Borrar";
        btn_borrar.classList.add("btn-eliminar","btn-peque");
        btn_borrar.setAttribute("data-id","btn_borrar");
        //Añado los campos del li.
        li.appendChild(h3);
        li.appendChild(pDescripcion);
        li.appendChild(pEstado);
        li.appendChild(btn_resuelta);
        li.appendChild(btn_borrar);
        //Añado a la lista el li creado.
        listaIncidencias.appendChild(li);

    }
}

// 8. Manejador del envío del formulario (crear incidencia)
formIncidencia.addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = tituloIncidencia.value.trim();
    const descripcion = descIncidencia.value.trim();

    // Valida los datos. Si no son válidos, termina aquí.
    if (!validarFormulario(titulo, descripcion)) {
        return;
    }

    // Crea la incidencia y guárdala
    crearIncidencia(titulo, descripcion);

    // Limpia el formulario y muestra un mensaje de éxito
    formIncidencia.reset();
    msgOkIncidencia.textContent = "Incidencia creada correctamente.";

    // Vuelve a pintar la lista y actualiza el contador
    renderizarIncidencias();
    actualizarContador();
});

// 9. Delegación de eventos en la lista de incidencias
// Aquí se gestionan clicks en "Marcar como resuelta" y "Eliminar"
listaIncidencias.addEventListener("click", function(event) {
    const elemento = event.target;
    if (!elemento.classList.contains("btn-resuelta") && !elemento.classList.contains("btn-eliminar")) {
        return;
    }

    const li=elemento.parentNode;
    const idTexto=li.getAttribute("data-id");
    const idIncidencia=Number(idTexto);
    for (let i = 0; i < incidencias.length; i++) {
         if (incidencias[i].id==idIncidencia) {
            if (elemento.classList.contains("btn-resuelta")) {
                incidencias[i].estado="resuelta";
            }
            if (elemento.classList.contains("btn-eliminar")) {
                incidencias.splice(i,1);
            }
            break;
        }
    }
    renderizarIncidencias();
    actualizarContador();   
    // Comprueba si se ha pulsado un botón de resuelta o de eliminar
    // Usa clases (classList.contains) o data-atributos para decidir qué hacer

    // 1) Obtener el id de la incidencia desde el elemento pulsado (por ejemplo, del li padre)
    // 2) Si es botón "resuelta": cambia el estado de la incidencia en el array
    // 3) Si es botón "eliminar": elimina la incidencia del array
    // 4) Llama a renderizarIncidencias() y actualizarContador() después de cambiar datos
});
renderizarIncidencias();
actualizarContador();