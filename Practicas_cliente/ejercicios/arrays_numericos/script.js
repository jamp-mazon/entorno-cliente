function plantilla() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
    const valor = Number(prompt("Número " + (i + 1) + ":"));
    numeros.push(valor);
    }
}
function plantilla_sinMostrar() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
    const valor = Number(prompt("Número " + (i + 1) + ":"));
    numeros.push(valor);
}
 return numeros;
}
function ej1() {
    numeros=plantilla();
    console.log(numeros.length);
}
function ej2() {
    numeros=plantilla();
    numeros.unshift(prompt("Escribe un numero para ponerla al principio:"));
    numeros.push(prompt("Escribe un numero para ponerlo al final"));
    console.log(numeros);
}
function ej3() {
    numeros=plantilla();
    console.log(numeros.pop());
    console.log(numeros.shift());
    console.log(numeros);
    console.log(numeros.length);

}
function ej4() {
    numeros=plantilla_sinMostrar();
    do {
        posi=Number(prompt("Indice nuevo:"));    
    } while (posi>numeros.length);//compruebo que no me meta numeros mas altos del array para que no me pete.
    valor=Number(prompt("Valor"));
    console.log("Array actual...")
    console.log(numeros);
    numeros[posi]=valor;
    console.log("Nuevo Array....");
    console.log(numeros);
    /* Pensaba que habia que crear un nuevo array
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (i===posi) {
            
        }
        else
        nuevoNumeros.push(numero);
        
    }
    */
    
}