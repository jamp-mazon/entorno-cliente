// EJERCICIO 3 - PANEL DE INCIDENCIAS TÉCNICAS
// Enlazar este archivo al final de ej3-incidencias.html

// 1. Referencias principales del DOM
// Sugerencia: const formIncidencia = document.getElementById("#formIncidencia");
 const formIncidencia=document.getElementById("formIncidencia");
 const tituloIncidencia=document.getElementById("tituloIncidencia");
 const errTituloIncidencia=document.getElementById("errTituloIncidencia");
 const descIncidencia=document.getElementById("descIncidencia");
 const errDescIncidencia=document.getElementById("errDescIncidencia");
 const btnCrearIncidencia=document.getElementById("btnCrearIncidencia");
 const contadorAbiertas=document.getElementById("contadorAbiertas");
 const msgOkIncidencia=document.getElementById("msgOkIncidencia");
 const listaIncidencias=document.getElementById("listaIncidencias");

 

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

    // Comprueba que el título no esté vacío
    // Comprueba que la descripción no esté vacía
    // Muestra mensajes en errTitulo y errDescripcion si hace falta
    // Si hay errores, esValido = false;
    if (titulo==="") {
        errTituloIncidencia.textContent="Error:el titulo no puede estar vacio";
        esValido=false;
    }
    if (descripcion==="") {
        errDescIncidencia.textContent="Error:la descripcion no puede estar vacia";
        esValido=false;
    }

    return esValido;
}

// 5. Función para crear una incidencia (objeto) y guardarla en el array
function crearIncidencia(titulo, descripcion) {
    // Crea un objeto con las propiedades necesarias
    // Usa siguienteId para el id
    // Asigna el estado inicial "abierta"
    // Guarda la incidencia en el array incidencias
    // Incrementa siguienteId
    const incidencia={
        id:siguienteId,
        titulo:titulo,
        descripcion:descripcion,
        estado:"abierta"
    }
    siguienteId++;
    incidencias.push(incidencia);
}

// 6. Función para actualizar el contador de incidencias abiertas
function actualizarContador() {
    // Recorre el array incidencias
    // Cuenta cuántas están con estado "abierta"
    // Actualiza el texto de contadorAbiertas
    let contador=0;
    for (const incidencia of incidencias) {
        if (incidencia.estado=="abierta") {
            contador++;
        }
    }
    contadorAbiertas.textContent=">Incidencias abiertas:"+contador;
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
        //Creando LI
        let li=document.createElement("li");
        li.classList.add("item-incidencia");
        //le meto al li el id de la incidencia para despues poder usarlo y buscarlo
        li.setAttribute("data-id",incidencia.id);
        //creando H3
        let h3=document.createElement("h3");
        h3.textContent=incidencia.titulo;
        //creando p descripcion
        let pDescripcion=document.createElement("p");
        pDescripcion.textContent=incidencia.descripcion;
        //creadno p para estado
        let pEstado=document.createElement("p");
        pEstado.textContent=incidencia.estado;
        //me creo el boton resolver
        let btn_resolver=document.createElement("button");
        btn_resolver.classList.add("btn-peque","btn-resuelta");
        btn_resolver.textContent="Resolver";
        //me creo el boton eliminar
        let btn_eliminar=document.createElement("button");
        btn_eliminar.classList.add("btn-peque","btn-eliminar");
        btn_eliminar.textContent="Eliminar";
        //Incluyo el h3 , las 2 p y los botones a li y li a la listaIncidencias
        li.appendChild(h3);li.appendChild(pDescripcion);li.appendChild(pEstado);
        li.appendChild(btn_resolver);li.appendChild(btn_eliminar);
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
        return ;
        
    }

    const li=elemento.parentNode;
    const liText=li.getAttribute("data-id");
    const idIncidencia=Number(liText);


    for (let i = 0; i < incidencias.length; i++) {
        if (incidencias[i].id===idIncidencia) {
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