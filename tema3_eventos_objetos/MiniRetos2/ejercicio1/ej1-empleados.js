// EJERCICIO 1 - GESTOR DE EMPLEADOS
// Este archivo se debe enlazar en ej1-empleados.html al final del body.

// 1. Captura las referencias a los elementos del DOM
// const formEmpleado = document.getElementById("formEmpleado");
const formEmpleado=document.getElementById("formEmpleado");
const btn_agregar=document.getElementById("btnAgregar");
const btnMostrar=document.getElementById("btnMostrar");
let totalEmpleadosSpan=document.getElementById("totalEmpleados");
let tbodyEmpleados=document.getElementById("tablaEmpleados");
let p_nombre=document.getElementById("errNombre");
let p_puesto=document.getElementById("errPuesto");
let p_salario=document.getElementById("errSalario");
let p_ok=document.getElementById("msgOk");


// 2. Array donde se guardarán los empleados
// Cada empleado puede ser un objeto con: nombre, puesto, salario
const empleados = [
    {nombre:"Mazon",puesto:"Administrativo",salario:1300}
];

// 3. Función opcional para limpiar mensajes de error y OK
function limpiarMensajes() {
    // PISTA: deja los .textContent de los errores y del mensaje OK en cadena vacía
    // errNombre.textCotent = "";
    // ...
    p_nombre.innerHTML="";
    p_puesto.innerHTML="";
    p_salario.innerHTML="";
    p_ok.innerHTML="";
}

// 4. Manejador del envío del formulario
formEmpleado.addEventListener("submit", function(event) {
    event.preventDefault(); // evita que se recargue la página
    limpiarMensajes();
    // PISTA: crea una variable valido = true y cámbiala a false cuando haya errores
    let valido = true;

    // 4.1. Leer los valores de los inputs (usa .value y .trim())
    let nombre=document.getElementById("nombre").value.trim();
    let puesto=document.getElementById("puesto").value.trim();
    let salario=Number(document.getElementById("salario").value);
    // 4.2. Comprobar que nombre y puesto no están vacíos


    // Si están vacíos, muestra un mensaje en el <p> de error correspondiente
    // y marca valido = false
    if (nombre==="") {
        p_nombre.textContent="Error el campo no puede estar vacio";
        valido=false;
    }
    if (puesto==="") {
        p_puesto.textContent="Error el puesto no puede estar vacio";
        valido=false;
    }

    // 4.3. Comprobar que salario tiene un número correcto (> 0)
    // PISTA: Number(salario) o parseFloat(salario)
    if (salario<=0) {
        p_salario.textContent="Error el salario no puede ser inferior a 0";
        valido=false;
    }
    // 4.4. Si NO es válido, termina la función aquí (return;)
    
    if (!valido) {
        p_ok.textContent="No soy valido";
        return;
    }
    

    // 4.5. Crear el objeto empleado con las propiedades necesarias
     const empleado = {
        nombre: nombre ,
        puesto: puesto,
        salario: salario
    };

    // 4.6. Añadir el empleado al array empleados (método .push)
    empleados.push(empleado);
    // 4.7. Mostrar un mensaje de éxito en msgOk (por ejemplo: "Empleado agregado correctamente")
    // msgOk.textContent = "...";
    
    p_ok.textContent="Empleado agregado correctamente";
    // 4.8. Limpiar el formulario (puedes usar formEmpleado.reset())
    formEmpleado.reset();
    
});

// 5. Función para actualizar la tabla de empleados en el DOM
function mostrarEmpleadosEnTabla() {
    // 5.1. Vaciar el cuerpo de la tabla antes de volver a rellenarlo
    // PISTA: tbodyEmpleados.innerHTML = "";
    tbodyEmpleados.innerHTML="";

    // 5.2. Recorrer el array empleados (for clásico o for...of)
    // por cada empleado:
    //  - crear una fila <tr>
    //  - crear tres celdas <td> (nombre, puesto, salario)
    //  - añadir las celdas a la fila
    //  - añadir la fila al tbody
    for (const empleado of empleados) {
        let tr=document.createElement("tr");
        let tdNombre=document.createElement("td");
        tdNombre.textContent=empleado.nombre;
        let tdPuesto=document.createElement("td");
        tdPuesto.textContent=empleado.puesto;
        let tdSalario=document.createElement("td");
        tdSalario.textContent=empleado.salario;

        tr.appendChild(tdNombre);
        tr.appendChild(tdPuesto);
        tr.appendChild(tdSalario);

        tbodyEmpleados.appendChild(tr);
    }

    // 5.3. Actualizar el texto de totalEmpleadosSpan
    // PISTA: "Total empleados: " + empleados.length
    totalEmpleadosSpan.textContent=empleados.length;
}

// 6. Evento del botón "Mostrar empleados"
btnMostrar.addEventListener("click", function() {
    // Llama a la función que se encarga de pintar la tabla
    // mostrarEmpleadosEnTabla();
    mostrarEmpleadosEnTabla();
});