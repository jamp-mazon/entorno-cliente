const btn_contar=document.getElementById("r10-contar");

btn_contar.addEventListener("click",function () {
    let total=document.getElementById("r10-total");
    total.textContent="Palabras: 0";
    let texto=document.getElementById("r10-texto").value;

    if (texto==="") {
        total.textContent="ERROR: el texto no puede estar vacio";
        total.style.color="red";
        return;
    }
    texto=texto.trim().split(' ');
    let cantidadPalabras=texto.length;
    total.textContent=`Palabras: ${cantidadPalabras}`;

})