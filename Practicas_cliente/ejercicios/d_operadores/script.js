//ej1
num1=Number(prompt("Primer numero"));
num2=Number(prompt("segundo numero"));
let result=num1 + num2;
console.log(`La suma es ${result}`);
//ej2
num1=Number(prompt("Primer Numero"));
num2=Number(prompt("Segundo numero"));
alert ("Resta:"+(num1-num2)+"\nMultiplicacion: "+(a*b) + "\nDivision: "+(b===0 ? "No se puede": num1/num2));
//ej3
num1=Number(prompt("Primer Numero"));
let cuadrado=num1*num1;
//console.log(`El cuadrado del primer numero es:${cuadrado}`);
alert ("Cuadrado: "+(num1*num1) + "\nResto entre 3:" +(n%3));
//ej4
  const precio = Number(prompt("Precio unitario (€)"));
  const unidades = Number(prompt("Unidades"));
  const base = precio * unidades;
  const iva = base * 0.21;
  const total = base + iva;
  alert("Base: " + base.toFixed(2) + " €\nIVA: " + iva.toFixed(2) + " €\nTotal: " + total.toFixed(2) + " €");
  
