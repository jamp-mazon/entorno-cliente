let cpu=document.getElementById("cpu");
let placa=document.getElementById("placa");
let btnComprobar=document.getElementById("btnComprobar");
let resultado=document.getElementById("resultado");

btnComprobar.addEventListener("click",function () {
    let seleccionCPU=cpu.value;
    let seleccionPlaca=placa.value;

    if (seleccionCPU===seleccionPlaca) {
        resultado.textContent="Es compatible";
    }
    else{
        resultado.textContent="No es compatible";
    }
})