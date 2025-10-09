function ej1() {
    edad=Number(prompt("Dime tu edad:"));
    dia=(prompt("Dia de la semana:")).toLocaleLowerCase();
    precio=0;
    switch (dia) {
        case "lunes":
            if (edad<14) {
             precio=5;   
            }
            else if(edad>=14 && edad<64){
                precio=8;
            }
            else{
                precio=6;
            }
            console.log(`El precio de tu entrada es:${precio}€`);
            break;
        case "martes":
            if (edad<14) {
             precio=4;   
            }
            else if(edad>14 && edad<64){
                precio=7;
            }
            else{
                precio=5;
            }
            console.log(`El precio de tu entrada es:${precio}€`);
            break;            
        case "miercoles":
            if (edad<14) {
             precio=5;   
            }
            else if(edad>14 && edad<64){
                precio=8;
            }
            else{
                precio=6;
            }
            console.log(`El precio de tu entrada es:${precio}€`);
            break;
        case "jueves":
            if (edad<14) {
             precio=5;   
            }
            else if(edad>14 && edad<64){
                precio=8;
            }
            else{
                precio=6;
            }
            console.log(`El precio de tu entrada es:${precio}€`);
            break;
        case "viernes":
            if (edad<14) {
             precio=5;   
            }
            else if(edad>14 && edad<64){
                precio=8;
            }
            else{
                precio=6;
            }
            console.log(`El precio de tu entrada es:${precio}€`);
            break;
        case "sabado":
            if (edad<14) {
             precio=5;   
            }
            else if(edad>14 && edad<64){
                precio=8;
            }
            else{
                precio=6;
            }
            console.log(`El precio de tu entrada es:${precio}€`);
            break;
        case "domingo":
            if (edad<14) {
             precio=5;   
            }
            else if(edad>14 && edad<64){
                precio=8;
            }
            else{
                precio=6;
            } 
            console.log(`El precio de tu entrada es:${precio}€`);           
            break;                                                    
        default: console.log("Dia equivocado de la semana...pruebe con otro")
            break;
    }
}
function ej2() {
    carrito=Number(prompt("Total del carrito:"));
    if (carrito>=50) {
        console.log("Tu pedido es mayor de 50€ envio gratuito!!");
    } else {
        total=carrito+3.99;
        console.log(`Gastos de envio a 3,99 TOTAL:${total.toFixed(2)}€`);
    }
}
function ej3() {
    user=prompt("Usuario");
    password=prompt("Contraseña");
    if (user==="alumno" && password==="1234") {
        console.log("Acceso concedido");
    } else {
        console.log("Acceso denegado");
        
    }
}
function ej4() {
    opcion=Number(prompt("1.Cafe\n 2.Tostada\n 3.Zumo"));
    switch (opcion) {
        case 1:
            console.log("Precio del Cafe:1.20€");
            
            break;
        case 2:
            console.log("Precio de la tostada:1.80€");
            
            break;
        case 3:
            console.log("Precio del zumo:2.00€");
            
            break;                        
    
        default: console.log("Numero incorrecto, intentelo de nuevo...");
            break;
    }
}
function ej5() {
    dia=prompt("Dia de la semana:").toLocaleLowerCase();
    switch (dia) {
        case "lunes":
            console.log("Matematicas");
            
            break;
        case "martes":
            console.log("Ciencias");

            break;            
        case "miercoles":
            console.log("Repaso");

            break;
        case "jueves":
            console.log("Historia");

            break;
        case "viernes":
            console.log("Botellon");

            break;
        case "sabado","domingo":
                console.log("No hay clase");
                
            break;
        default: console.log("Dia equivocado de la semana...pruebe con otro")
            break;
    }       
}
function ej6() {
    mes=Number("Numero del mes:");
    switch (mes) {
        case 12,1,2:
            console.log("Invierno");
            
            break;
        case 3,4,5:
            console.log("Primavera");
            break;
        case 6,7,8:
            console.log("Verano");
                break;
        case 9,10,11:
            console.log("Otoño");
            break;

        default: console.log("Opcion Invalida...");
    
            break;
    }
}
function ej7() {
    let ingresos="";
    let acumulador=0;
    
    while (ingresos!="fin") {
       ingresos=prompt("Ingresos[FIN]:");
       if (ingresos==="fin") {
        break;
       } 
       if (ingresos!=="fin") {
       let dinero=Number(ingresos);
        acumulador=dinero+acumulador;
        console.log(acumulador);
       }
       if (acumulador>=100) {
        break;
       }
    }
}
function ej8() {
    let pin=1234;
    let contador=3;
    while (contador!=0) {
        let pin_user=Number(prompt("Escribe tu pin"));
        if (pin_user===pin) {
            console.log("Pin correcto...Bienvenido");
            break;
        }
        if (pin_user!==pin) {
            contador--;
            if (contador===0) {
                console.log("Tarjeta bloqueado");
                break;
            }
            console.log(`Pin incorrecto quedan:${contador} intentos`);
        }

    }
}
function ej9() {
    let respuesta=""
    while (respuesta!=="si") {
        respuesta=prompt("Te gusta programar?").toLocaleLowerCase();
        if (respuesta==="si") {
            console.log("Gracias por responder!")
            break;
        }
        if (respuesta!=="si") {
            console.log("Respuesta invalida");
        }
    }
}
function ej10() {
    let precioUnitario=Number(prompt("Precio Unitario:"));
    for (let i = 1; i < 11; i++) {
        console.log(`Cantidad ${i}-->Total:${precioUnitario*i} €`);
    }
}
function ej11() {
    let objetivo=Number(prompt("Objetivo de pasos:"));
    for (let i = 1; i <=objetivo; i++) {
            if (i%1000==0) {
                console.log(i);
            }
    }
}
function ej12() {
    const notas=[5,7,8,4,10];
    let acumulador=notas[0];
    for (let i = 1; i < notas.length; i++) {
         acumulador =acumulador+notas[i];
    }
    console.log(`La media de las notas es:${acumulador/notas.length}`);
}
function ej13() {
    const precios=[12,25,40,18,9,30]
    let existe=false;
    for (let i = 0; i < precios.length; i++) {
        if(precios[i]<=15){
            console.log(`El precio es:${precios[i]}`);
            existe=true;
            break;
        }
    }
    if (!existe) {
        console.log("No existen precios mas bajos");
    }
}
function ej14() {
    let mensaje="";
    let contador=0;
    for (let i = 0; i < 5; i++) {
        let mensaje=prompt("Escribe una cadena");
        if (mensaje!=="") {
            console.log(mensaje);
        }
        if (mensaje==="") {
            contador++;
            continue;
        }
    }
    console.log(`Veces cadena vacia:${contador}`);
}
function ej15() {
    const supermercado=["aceite","leche","sal","beer","ambientador"];
    for (let i = 0; i < supermercado.length; i++) {
        const element = supermercado[i];
        console.log(`Linea:${i+1}-->${element}`);
    }
}
function ej16() {
    let acumulador=0;
    const precios=[10,20,15,30,25];
    for (let i = 0; i < precios.length; i++) {
        acumulador =acumulador+precios[i];
    }
    console.log(`El total es ${acumulador}`);
}
function ej17() {
    const productos=["pan","leche","huevos","arroz","manzanas"];
    let producto=prompt("Escribe el producto a buscar:");
    if (productos.includes(producto)) {
        console.log("Existe ese producto");
    }
    else{
        console.log("Ese producto no esta en la lista");
    }
}
function ej18() {
    const stock=[12,3,7,0,9,5];
    for (let i = 0; i < stock.length; i++) {
        if (stock[i]<5) {
            console.log(`Poco stock ${stock[i]}`);
        };
        
    }
}
function ej19() {
    let tareas=[];
    let tarea_user=""
    while (tarea_user!=="fin") {
        if(tarea_user!=="fin"){
            tarea_user=prompt("Escribe una tarea:[FIN PARA SALIR]").toLocaleLowerCase();
            tareas.push(tarea_user);
        }
    }
    console.log(tareas);
}
function ej20() {
    const notas=[3,7,9,4,5,10,6];
    let aprobados=0;
    let suspensos=0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i]>4) {
            aprobados++;
        }
        if (notas[i]<5) {
            suspensos++;
        }
    }
    console.log(`Aprobados:${aprobados}`);
    console.log(`Suspensos:${suspensos}`);
}
