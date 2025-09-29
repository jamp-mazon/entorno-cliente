//ej1
function ej1() {
    let edad=Number(prompt("Cual es tu edad?"));
    let mensaje=(edad<0||edad>150) ? "Introduce una edad válida":
    (edad>=18) ? "Eres mayor de edad": "Eres menor de edad";
    alert(mensaje);
    console.log(mensaje);
}
function ej2() {
    let num=Number(prompt("Escribe un Numero"));
    let mensaje=(num<0) ? "Tu numero es negativo o cero" : "Tu numero es positivo";
    alert(mensaje);
    console.log(mensaje);
}
function ej3() {
   const contra="abc123";
   let pass_user=prompt("Escribe la contraseña");
   let mensaje=(contra===pass_user) ? "Acceso Permitido" : "Acceso Denegado";
   alert(mensaje);
   console.log(mensaje);
}
function ej4() {
   let num=Number(prompt("Dime un número"));
   let mensaje=(num<0) ? "Numero negativo..." :
   (num%2==0) ? "El numero es par" : "El numero es impar";
   alert(mensaje);
   console.log(mensaje);

}
function ej5() {
    let num1=Number(prompt("Primer Numero"));
    let num2=Number(prompt("Segundo Numero"));
    let mensaje=(num1===num2) ? "Los numeros son iguales" : (num1>num2) ? "El primer numero es mayor" : "El segundo numero es mayor";
    alert (mensaje);
    console.log(mensaje);
}
function ej6() {
    let nota=Number(prompt("Calificacion"));
    let mensaje=(nota<0||nota>10) ? "Nota fuera de rango" : (nota>=5) ? "Has aprobado" : "Has suspendido";
    alert(mensaje);
    console.log(mensaje);
}
function ej7() {
    let nota=Number(prompt("Dime la nota"));
    let mensaje=(nota<0||nota>10) ? "Nota fuera de rango" : 
    (nota==0 ||nota<=4) ? "Suspenso" : 
    (nota==5 ||nota==6) ? "Aprobado" :
    (nota==7 ||nota==8) ? "Notable"  : "Sobresaliente";
//    (nota==9 ||nota==10)? "Sobresaliente"
    alert(mensaje);
    console.log(mensaje);
}
function ej8() {
    let dia=Number(prompt("Dime el dia de la semana:[1=Lunes, 2=Martes ....]")); 

        switch (dia) {
        case 1: alert("Es lunes")
            break;
        case 2: alert("Es Martes")    
            break;
        case 3: alert("Es Miercoles")    
            break;
        case 4: alert("Es Jueves")    
            break;
        case 5: alert("Es Viernes")    
            break;
        case 6: alert("Es Sabado")    
            break;
        case 7: alert("Es Domingo")    
            break;                                                                                                
        default: alert("Dia invalido")
            break;
    }
}
function ej9() {
    let num1 = Number(prompt("Primer número"));
    let num2 = Number(prompt("Segundo número"));
    let num3 = Number(prompt("Tercer número"));

    if (num1 >= num2 && num1 >= num3) {
        console.log("El mayor es: " + num1);
        alert("El mayor es: " + num1);

    } else if (num2 >= num1 && num2 >= num3) {
        console.log("El mayor es: " + num2);
        alert("El mayor es: " + num2);

    } else {
        console.log("El mayor es: " + num3);
        alert("El mayor es: " + num3);
    }
}
function ej10() {
    //ya lo hice en su momento es el ejercicio 1....
    let edad=Number(prompt("Cual es tu edad?"));
    let mensaje=(edad<0||edad>150) ? "Introduce una edad válida":
    (edad>=18) ? "Eres mayor de edad": "Eres menor de edad";
    alert(mensaje);
    console.log(mensaje);    
}
function ej11() {
    let num=Number(prompt("Dime un número"));
   let mensaje=(num<0) ? "Numero negativo..." :
   (num%2==0) ? "El numero es par" : "El numero es impar";
   alert(mensaje);
   console.log(mensaje);
}
function ej12() {
    let precio=Number(prompt("Dime el precio"));
    if (precio<=0) {
        alert ("El valor tiene que ser superior a 0")
    }
    else{
        if (precio>100) {
            let resultado=precio-(precio*10/100);
            alert ("El resultado es:"+resultado);
        }
        else{
            alert("El resultado es:"+precio)
        }
    }

    //let mensaje=(precio>100) ? ("Con el descuento seria:"+precio -((precio *10)/100)) : alert("El precio se queda igual:"+precio);
}
function ej13() {
    let mensaje1=prompt("Escribe un texto");
    let mensaje2=prompt("Escribe otro texto");
    let resultado=(mensaje1===mensaje2) ? "Los mensajes son iguales" : "Los mensajes son diferentes"
    alert(resultado);
    console.log(resultado);
}
function ej14() {
    let hora=Number(prompt("Escribe la hora"))
    let mensaje=(hora<0 || hora>24) ? "Hora fuera de rango" :
    (hora >=0 && hora<=11) ? "Buenos dias" :
    (hora >=12 && hora <=18) ? "Buenas Tardes" : "Buenas noches"; 
    alert (mensaje);
    console.log(mensaje);
    //(hora =>19 || hora <=23) ? 
}
function ej15() {
    let edad=Number(prompt("Edad"));
    let nombre=prompt("Nombre").toLowerCase();
    let mensaje=(edad<0||edad>150) ? "Edad fuera de rango,Enhorabuena!!":
    (edad>=18 && nombre==="admin") ? "Acceso especial" :
    (edad>=18) ? "Acceso normal" : "Acceso Denegado";
    alert(mensaje);
    console.log(mensaje);
}
function ej16() {
    let num=Number(prompt("Numero"));
    let mensaje=(num>0 && num<11) ? "Dentro de rango" : "Fuera de rango";
    alert(mensaje);
    console.log(mensaje);
}
function ej17() {
    let edad=Number(prompt("Edad"));
    let mensaje=(edad<0||edad>150) ? "Edad fuera de rango":
    (edad<=12) ? "Entrada gratuita" :
    (edad>=13 && edad<=64) ? "Entrada normal" : "Entrada reducida";
    alert(mensaje);
    console.log(mensaje);
}
function ej18() {
    let texto=prompt("escribe [sol] o [lluvia]").toLowerCase();
    let mensaje=(!texto==="sol" || !texto==="lluvia") ? "No entiendo la respuesta" :
    (texto==="sol") ? "Puedes salir a pasear" : "Mejor lleva paraguas";
    alert(mensaje);
    console.log(mensaje);
}


