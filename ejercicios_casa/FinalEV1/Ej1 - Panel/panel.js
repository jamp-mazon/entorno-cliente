// ======================================================
// Archivo JS vaciado para que lo completes tú
// (se ha borrado el contenido original)
// ======================================================

// EJERCICIO 1 - Panel de participación en clase
// Usa este archivo para completar la lógica del ejercicio.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE) 3959359
// 1. Crea la clase Alumno con los métodos que consideres oportunos
class Alumno{
    constructor(nombre){
        this.nombre=nombre;
        this.participacion=0;
    }
}

// 2. Crea un array "alumnos" con varios objetos Alumno.
//    Los nombres deberían coincidir con las opciones del <select>
const alumnos=[
    new Alumno("Luis"),
    new Alumno("Ana"),
    new Alumno("Marta"),
    new Alumno("Pedro"),
    new Alumno("Lucia")
];
// 3. Captura los elementos del DOM que vas a usar
const selectAlumno=document.getElementById("selectAlumno");
    //botones
const btnPresente=document.getElementById("btnPresente");
const btnAusente=document.getElementById("btnAusente");
    //resumen
const resumenAsistencia=document.getElementById("resumenAsistencia");
const mensajeInfo=document.getElementById("mensajeInfo"); 
    //tabla
const tablaAsistencia=document.getElementById("tablaAsistencia");    
// 4. Crea una función "calcularTotalParticipaciones()"
function calcularTotalParticipaciones() {
    let contaParticipaciones=0;
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].participacion>0) {
            contaParticipaciones+=alumnos[i].participacion;
        }    
    }
    return contaParticipaciones;
}
// 5. Crea una función "pintarTabla()" que:
//    - vacíe el contenido actual del tbody
//    - recorra el array alumnos
//    - cree una fila <tr> por cada alumno
//      (Opcional) puedes añadir clases CSS distintas para los primeros
//      del ranking y para los que tienen 0 participaciones.
function pintarTabla() {
    tablaAsistencia.innerHTML="";
    for (let i = 0; i < alumnos.length; i++) {
        const filaAlumno=document.createElement("tr");
        if (alumnos[i].participacion===0) {
            filaAlumno.classList.add("fila-baja");
        }
        else{
            filaAlumno.classList.add("tabla-asistencia")
        }
        const numeroAlumno=document.createElement("td");
        numeroAlumno.textContent=i+1;
        const nombreAlumno=document.createElement("td");
        nombreAlumno.textContent=alumnos[i].nombre;
        const participacionAlumno=document.createElement("td");
        participacionAlumno.textContent=alumnos[i].participacion;

        filaAlumno.appendChild(numeroAlumno);
        filaAlumno.appendChild(nombreAlumno);
        filaAlumno.appendChild(participacionAlumno);
        tablaAsistencia.appendChild(filaAlumno);
    }
}
// 7. Crea una función "actualizarResumen()" para actualizar el contenido
function actualizarResumen() {
   const totalParticipantes=calcularTotalParticipaciones();
   resumenAsistencia.textContent=`Total interveciones: ${totalParticipantes}`;

}
// 8. Crea una función "actualizarMensajeInfo(texto)" que actualice el mensaje
function actualizarMensajeInfo(texto) {
    mensajeInfo.textContent=texto;
}
// 9. Crea una función "buscarAlumnoPorNombre(nombre)" que:
//    - recorra el array de alumnos
//    - compare el nombre de cada alumno con el parámetro recibido
//    - devuelva el objeto alumno si lo encuentra, o null si no lo encuentra
function buscarAlumnoPorNombre(nombre) {
    for (let i = 0; i < alumnos.length; i++) {
        if(alumnos[i].nombre.toLowerCase().includes(nombre.toLowerCase())){
            console.log(alumnos[i].nombre);
            return alumnos[i];
        }
    }
    console.log("buscarAlumnoPorNombre ha devuelto null por el nombre del alumno");
    return null;
}
// 10. Crea una función "manejarParticipacion(cantidad)" que:
//     - obtenga el nombre seleccionado del select
//     - busque el alumno correspondiente usando buscarAlumnoPorNombre()
//     - si existe, sume/reste participaciones según la cantidad
//     - actualice la tabla y el resumen
//     - muestre un mensaje informativo
function manejarParticipacion(cantidad) {
    const nombre=selectAlumno.value;
    const alumno=buscarAlumnoPorNombre(nombre);
    let partiAlumno="No se ha registrado ninguna acción todavía.";
    if (alumno===null) {
        console.log("manejarParticipacion ha devuelto null porque el alumno es null");
        return null
    }
    else{
        if (cantidad>0) {
            console.log(`${alumno.nombre} tiene ${alumno.participacion} participaciones`);
            alumno.participacion+=cantidad;
            partiAlumno=`${alumno.nombre} :sumo una participación`;
        }
        else if (cantidad<0){
            alumno.participacion+=cantidad;
            partiAlumno=`${alumno.nombre} :resto una participación`;

        }
    }
    actualizarResumen();
    actualizarMensajeInfo(partiAlumno);
    pintarTabla();
}
// 11. Añade el evento click de btnPresente que llame a manejarParticipacion(1)
btnPresente.addEventListener("click",function () {
    manejarParticipacion(1);
});
// 12. Añade el evento click de btnAusente que llame a manejarParticipacion(-1)
btnAusente.addEventListener("click",function () {
    manejarParticipacion(-1);
});
// 13. Añade un evento "keydown" al documento para los atajos de teclado.
//     Ejemplo de funcionamiento (puedes seguir este esquema):
//     - tecla "1": sumar participación al primer alumno del array
//     - tecla "2": sumar participación al segundo alumno
//     - tecla "3": sumar participación al tercero
document.addEventListener("keydown",function (event) {
    if (event.key==="1") {
        alumnos[0].participacion+=1;
        actualizarMensajeInfo(`${alumnos[0].nombre} sumo una participacion`);
    }
    else if (event.key==="2"){
        alumnos[1].participacion+=1;
        actualizarMensajeInfo(`${alumnos[1].nombre} sumo una participacion`);

    }
    else if(event.key==="3"){
        alumnos[2].participacion+=1;
        actualizarMensajeInfo(`${alumnos[2].nombre} sumo una participacion`);

    }
    pintarTabla();
    actualizarResumen();123123
})
// 14. Por último, llama a las funciones necesarias al inicio del script:
//     - pintarTabla()
//     - actualizarResumen()
pintarTabla();
actualizarResumen();
console.log(`Estoy al final:${calcularTotalParticipaciones()}`)
console.log("COMPROBACION DE TODOS LOS ALUMNOS");
for (let i = 0; i < alumnos.length; i++) {
    console.log(`${alumnos[i].nombre} tiene un total de ${alumnos[i].participacion} participaciones`);
    
}
// ¡IMPORTANTE! Revisa el archivo panel.html para ver los IDs y clases y no modifiques el HTML.
// ¡IMPORTANTE! Revisa el archivo panel.css para ver las clases CSS disponibles y no modifiques el CSS.