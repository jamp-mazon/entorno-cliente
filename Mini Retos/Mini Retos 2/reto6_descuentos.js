let descuento_aplicado=document.getElementById("r6-descuento");
let btn_calcular=document.getElementById("r6-calc");
let precio_final=document.getElementById("r6-final");
let p=document.getElementById("r6-msg");

btn_calcular.addEventListener("click",function () {
    p.textContent="";
    let precio=Number(document.getElementById("r6-precio").value);
    let descuento=Number(document.getElementById("r6-dto").value);
    if (descuento<0 || descuento>100 || typeof precio !== "number" || precio<=0 ) {
        p.textContent="ERROR:formato incorrecto";
        return;
    }
    let descuento_apli=Number(precio)*(Number(descuento)/100);
    descuento_aplicado.textContent=Number(descuento_apli);
    total=Number(precio)-Number(descuento_apli);
    precio_final.textContent=Number(total);
});
