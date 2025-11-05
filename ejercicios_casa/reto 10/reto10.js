let num_1=document.getElementById("num1");
let num_2=document.getElementById("num2");

let btn_sumar=document.getElementById("sumar");
let btn_restar=document.getElementById("restar");
let btn_multiplicar=document.getElementById("multiplicar");
let btn_dividir=document.getElementById("dividir");
let p=document.getElementById("resultado");

btn_sumar.addEventListener("click",function () {
    let num_1=Number(document.getElementById("num1").value);
    let num_2=Number(document.getElementById("num2").value);
    p.textContent=num_1+num_2;
});
btn_restar.addEventListener("click",function () {
    let num_1=document.getElementById("num1");
    let num_2=document.getElementById("num2");
    p.textContent=num_1.value-num_2.value;
});
btn_multiplicar.addEventListener("click",function () {
    let num_1=document.getElementById("num1");
    let num_2=document.getElementById("num2");
    p.textContent=num_1.value*num_2.value;
});
btn_dividir.addEventListener("click",function () {
    let num_1=document.getElementById("num1");
    let num_2=document.getElementById("num2");
    p.textContent=num_1.value/num_2.value;
});