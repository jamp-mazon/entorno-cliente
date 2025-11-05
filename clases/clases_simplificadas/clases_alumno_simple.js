class Contador{
    constructor(numero){
        this.numero=numero;
    }
    incrementar(){
        this.numero++;
    }
    decrementar(){
        this.numero--;
    }
    resetear(){
        this.numero=0;
    }
    mostrarNumero(){
        return this.numero;
    }
}

let btn_crear=document.getElementById("e1-crear");
let btn_incrementar=document.getElementById("e1-inc");
let btn_decrementar=document.getElementById("e1-dec");
let btn_reset=document.getElementById("e1-reset");
let div_salida=document.getElementById("e1-out");
    const miContador=null;
btn_crear.addEventListener("click",function () {
     miContador=new Contador(0);
});
btn_incrementar.addEventListener("click",function () {
    miContador.incrementar();
});
btn_decrementar.addEventListener("click",function () {
    miContador.decrementar();
});
btn_reset.addEventListener("click",function () {
    miContador.resetear();
});
div_salida.addEventListener("click",function () {
    miContador.mostrarNumero();
});
