let nombre=prompt("Nombre");
let apellidos=prompt("Apellidos");
let salario=Number(prompt("Salario"));
let edad=Number(prompt("Edad"));
let salarioTotal=1;
salario.toFixed(2);
if (salario===2000) {
    salarioTotal=salario;
}else if(salario>=1000 && salario<2000){
    if (edad>45) {
        salarioTotal=salario+(salario*0.03);
    }
    else if(edad<=45){
        salarioTotal=salario+(salario*0.1);
    }
} 
else {
    if (edad<30) {
        salarioTotal=1100;
    }
    else if(edad>=30 && edad<=45){
        salarioTotal=salario+(salario*0.03);
    } 
    else if(edad>45){
        salarioTotal=salario+(salario*0.15);
    }
}
let mensaje=`Nombre:${nombre} Apellidos:${apellidos} Salario:${salarioTotal} Edad:${edad}`
alert(mensaje);
console.log(mensaje);