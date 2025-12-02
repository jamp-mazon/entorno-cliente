
// EJERCICIO 1 - Panel de participación en clase
// Usa este archivo para completar la lógica del ejercicio.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE) 3959359

// 1. Crea la clase Alumno con los métodos que consideres oportunos
class Alumno{
    constructor(nombre){
        this.nombre=nombre;
        this.cantidad_participaciones=0;
    }
    sumar_participacion(){
        this.cantidad_participaciones++;
    }
    restar_participacion(){
        if (this.cantidad_participaciones===0) {
            this.cantidad_participaciones=0;
        }
        else{
            this.cantidad_participaciones--;
        }
        
    }
    devolverParticipacion(){
        return this.cantidad_participaciones;
    }
}
// 2. Crea un array "alumnos" con varios objetos Alumno.
//    Los nombres deberían coincidir con las opciones del <select>
    const alumnos=[
        new Alumno ("Ana"),
        new Alumno ("Luis"),
        new Alumno ("Marta"),
        new Alumno ("Pedro"),
        new Alumno ("Lucia")
    ];
// 3. Captura los elementos del DOM que vas a usar
const selectAlumno=document.getElementById("selectAlumno");
const btn_presente=document.getElementById("btnPresente");
const btn_ausente=document.getElementById("btnAusente");
const resumenAsistencia=document.getElementById("resumenAsistencia");
const mensajeInfo=document.getElementById("mensajeInfo");
const tablaAsistencia=document.getElementById("tablaAsistencia");
// 4. Crea una función "calcularTotalParticipaciones()"
function calcularTotalParticipaciones() {
    let contador_participacion=0;
    for (const alumno of alumnos) {
        contador_participacion=Number(contador_participacion+alumno.devolverParticipacion());
    }
    return contador_participacion;
}
// 5. Crea una función "pintarTabla()" que:
//    - vacíe el contenido actual del tbody
//    - recorra el array alumnos
//    - cree una fila <tr> por cada alumno
//      (Opcional) puedes añadir clases CSS distintas para los primeros
//      del ranking y para los que tienen 0 participaciones.
function pintarTabla() {
    tablaAsistencia.innerHTML="";
    for (let i = 0; i <alumnos.length; i++) {
        let tr=document.createElement("tr");
        let tdNumero=document.createElement("td");
        let tdNombre=document.createElement("td");
        let tdParticipacion=document.createElement("td");
        tdNumero.textContent=i+1;
        tdNombre.textContent=alumnos[i].nombre;
        tdParticipacion.textContent=Number(alumnos[i].devolverParticipacion());
        if (tdParticipacion.value===0) {
           tr.style.backgroundColor="darkred";
        }
        tr.appendChild(tdNumero);tr.appendChild(tdNombre);tr.appendChild(tdParticipacion);
        tablaAsistencia.appendChild(tr);

    }
}
// 7. Crea una función "actualizarResumen()" para actualizar el contenido
function actualizarResumen() {
    tablaAsistencia.innerHTML="";
    pintarTabla();
}
// 8. Crea una función "actualizarMensajeInfo(texto)" que actualice el mensaje
function actualizarMensajeInfo(texto){
    mensajeInfo.textContent=texto;
}
// 9. Crea una función "buscarAlumnoPorNombre(nombre)" que:
function buscarAlumnoPorNombre(_nombre){
    for (const alumno of alumnos) {
        if (alumno.nombre.toLowerCase()===_nombre.toLowerCase()) {
            return alumno;
        }
    }
}
//    - recorra el array de alumnos
//    - compare el nombre de cada alumno con el parámetro recibido
//    - devuelva el objeto alumno si lo encuentra, o null si no lo encuentra

// 10. Crea una función "manejarParticipacion(cantidad)" que:
//     - obtenga el nombre seleccionado del select
//     - busque el alumno correspondiente usando buscarAlumnoPorNombre()
//     - si existe, sume/reste participaciones según la cantidad
//     - actualice la tabla y el resumen
//     - muestre un mensaje informativo
function manejarParticipacion(cantidad){
let alumno_parti=selectAlumno.value;
let alumno_encontrado=buscarAlumnoPorNombre(alumno_parti)

    for (let index = 1; index <=cantidad; index++) {
        if (cantidad<0) {
            alumno_encontrado.restar_participacion();
        }
        if (cantidad>0) {
            alumno_encontrado.sumar_participacion();
        }
    }

}
// 11. Añade el evento click de btnPresente que llame a manejarParticipacion(1)
btn_presente.addEventListener("click",function () {
    let alumn=selectAlumno.value;
     alu_suma=buscarAlumnoPorNombre(alumn)
    alu_suma.sumar_participacion();
})
// 12. Añade el evento click de btnAusente que llame a manejarParticipacion(-1)
btn_ausente.addEventListener("click",function () {
    let alu_aus=buscarAlumnoPorNombre(selectAlumno.value);
    alu_aus.restar_participacion();
})
// 13. Añade un evento "keydown" al documento para los atajos de teclado.
//     Ejemplo de funcionamiento (puedes seguir este esquema):
//     - tecla "1": sumar participación al primer alumno del array
//     - tecla "2": sumar participación al segundo alumno
//     - tecla "3": sumar participación al tercero

// 14. Por último, llama a las funciones necesarias al inicio del script:
//     - pintarTabla()
//     - actualizarResumen()
pintarTabla();
actualizarResumen();
// ¡IMPORTANTE! Revisa el archivo panel.html para ver los IDs y clases y no modifiques el HTML.
// ¡IMPORTANTE! Revisa el archivo panel.css para ver las clases CSS disponibles y no modifiques el CSS.
