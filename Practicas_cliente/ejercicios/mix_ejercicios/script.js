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
        Number(ingresos)+acumulador=acumulador;
        console.log(acumulador);
       }
       if (ingresos>=100) {
        break;
       }
    }

}