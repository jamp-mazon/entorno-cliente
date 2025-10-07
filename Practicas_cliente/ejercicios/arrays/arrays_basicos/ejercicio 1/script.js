function ej1() {
    //en console log se muestran los resultados.
    animales=["perro","gato","pez"];
    animales.push(prompt("Escribe un animal"));
    console.log(animales);
    animales.unshift(prompt("Escribe otro animal:"));
    console.log(animales);
    animales.pop();
    console.log(animales);
    animales.shift();
    console.log(animales);
    console.log(animales.length);
    for (let i = 0; i < animales.length; i++) {
        const element = animales[i];
        console.log(element);
        
    }
}    
function ej2() {
    colores=["rojo","verde","azul","amarillo"];
    console.log(`El primer elemento es:${colores[0]} y el ultimo elemento es ${colores[colores.length -1]}`);
    colores.push(prompt("Nuevo color:"));//hay que usar push para añadirlo cenutrio.
    console.log(`El ultimo elemento ahora es:${colores[colores.length -1]}`);
    for (let i = 0; i < colores.length; i++) {
        const color = colores[i];
        console.log(color);
    }
}
function ej3(){
    numeros=[1,2,3,4,5];
    numeros.push(6,7);
    console.log(numeros);
    for (const numero of numeros) {
        if (numero % 2 === 0){
            console.log(numero);
        }
    }
    console.log(numeros.length);
}
function ej4() {
    alumnos=["manolo","paco","pepe"];
    alumnos.unshift("Mazón");
    console.log(`Añado a: ${alumnos[0]}`);
    for (const alumno of alumnos) {
        console.log(`Hola ${alumno}`);
    }
    console.log("------------------------------")
    alumnos.pop();
    for (const alumno of alumnos) {
        console.log (`Hola ${alumno}`);
    }
}