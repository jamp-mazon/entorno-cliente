function plantilla() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
    const valor = Number(prompt("Número " + (i + 1) + ":"));
    numeros.push(valor);
    }
    return numeros;
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
}
function ej5() {
    numeros=plantilla_sinMostrar();
    sum=0;
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        sum+=numero;    
    }
    media=sum/numeros.length;
    console.log(`La suma de los numeros es:${sum} y la media es:${media}`);
}
function ej6() {
    numeros=plantilla_sinMostrar();
    x=0
    y=0
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (numero %2==0) {
            x++;
        }
        if (numero %2==1) {
            y++;
        }
    }
    console.log(`Pares:${x}--Impares:${y}`);
}
function ej7() {
    numeros=plantilla_sinMostrar();
    min=numeros[0];
    max=numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (numero<min) {
            min=numero;
        }
        else if(numero>max){
            max=numero;
        }
    }
    console.log(`El numero mayor es:${max} y el número menor es:${min}`);
}
function ej8() {
    numeros=plantilla_sinMostrar();
    num_user=Number(prompt("Número a buscar:"));
    encontrado=false;
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (numero===num_user) {
            encontrado=true;
            console.log(`Indice 1ºCoincidencia:${i}`);
            break;
        }
    }
    if (!encontrado) {
        console.log("No encontrado");
    }
}
function ej9() {
    numeros=plantilla();
    numeros_X_2=[];
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        numeros_X_2.push(numero*2);
    }
    console.log("Array original");
    console.log(numeros);
    console.log("Array *2");
    console.log(numeros_X_2)
}
function ej10() {
    //Entiendo con esto que le pido el array de siempre y si hay numeros por encima de 10 hago un nuevo array con ellos
    numeros=plantilla_sinMostrar();
    mayoresQue10=[];
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (numero>10) {
            mayoresQue10.push(numero);
        }
    }
    console.log("Array original");
    console.log(numeros);
    console.log("Array Mayor que 10");
    console.log(mayoresQue10);
}
