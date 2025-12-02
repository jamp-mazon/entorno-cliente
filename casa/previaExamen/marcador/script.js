// EJERCICIO 4 - MARCADOR INTERACTIVO

class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
    }

    sumarPuntos(cantidad) {
        this.puntos+=Number(cantidad);
    }

    reiniciar() {
        this.puntos=0;
    }
}

const equipoA = new Equipo("Equipo A");
const equipoB = new Equipo("Equipo B");

const puntosA = document.getElementById("puntosA");
const puntosB = document.getElementById("puntosB");

const btnReiniciar = document.getElementById("btnReiniciar");
const btnDeshacer = document.getElementById("btnDeshacer");

const botonesSuma = document.querySelectorAll(".btn-sumar");

const historialAcciones = [];

function actualizarMarcador() {
   puntosA.textContent=Number(equipoA.puntos);
   puntosB.textContent=Number(equipoB.puntos);
}

function obtenerEquipoPorLetra(letra) {
    let letra_equipo=letra.toLowerCase();
    if (letra_equipo==="a") {
        return equipoA;
    }
    else{
        return equipoB;
    }
}

function registrarAccion(letraEquipo, puntosSumados) {

    historialAcciones.push({ equipo: letraEquipo, puntos: puntosSumados });
}

function sumarAPartirDeDatos(letraEquipo, cantidad) {
    let letra_equipo=letraEquipo.toLowerCase();
    if (letra_equipo==="a") {
        equipoA.sumarPuntos(cantidad);
    }    
    else{
        equipoB.sumarPuntos(cantidad);
        
    }
    registrarAccion(letraEquipo,cantidad);
    actualizarMarcador();
}

function manejarClickSuma(event) {
    const boton = event.target;

    if (!boton.classList.contains("btn-sumar")) {
        return;
    }

    const letraEquipo = boton.getAttribute("data-equipo");
    const cantidadTexto = boton.getAttribute("data-suma");
    let cantidadSumada=Number(cantidadTexto);
    const nuevo_equipo=obtenerEquipoPorLetra(letraEquipo);
    nuevo_equipo.sumarPuntos(cantidadSumada);
    registrarAccion(letraEquipo,cantidadSumada);
    actualizarMarcador();
    
}

function manejarTeclado(event) {
    const tecla = event.key.toLowerCase();

    switch (tecla) {
        case "q": equipoA.sumarPuntos(1);
                  registrarAccion("a",1);
            
            break;
        case "w": equipoA.sumarPuntos(2);
                  registrarAccion("a",2);

            
            break;            
        case "e":equipoA.sumarPuntos(3);
                  registrarAccion("a",3);

            
            break;
        case "i":equipoB.sumarPuntos(1);
                  registrarAccion("b",1);

            
            break;
        case "o":equipoB.sumarPuntos(2);
                  registrarAccion("b",2);

            
            break;
        case "p":equipoB.sumarPuntos(3);
                  registrarAccion("b",3);
        
            
            break;                                        
        default: 
            break;
    }
    actualizarMarcador();
}

function reiniciarMarcador() {
    equipoA.reiniciar();
    equipoB.reiniciar();
    actualizarMarcador();
}

function deshacerUltimaAccion() {
    const ultimaAccion=historialAcciones.pop();
    if (!ultimaAccion) {
        return;
    }
    const equipo=obtenerEquipoPorLetra(ultimaAccion.equipo);
    equipo.puntos-=Number(ultimaAccion.puntos);
    actualizarMarcador();   
    
}

for (let i = 0; i < botonesSuma.length; i++) {
    botonesSuma[i].addEventListener("click", manejarClickSuma);

}

document.addEventListener("keydown", manejarTeclado);

btnReiniciar.addEventListener("click", reiniciarMarcador);

btnDeshacer.addEventListener("click", deshacerUltimaAccion);