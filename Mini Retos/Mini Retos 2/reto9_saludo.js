let btn_saludar=document.getElementById("r9-saludar");

btn_saludar.addEventListener("click",function () {
    let hora=Number(document.getElementById("r9-hora").value);
    let saludo=document.getElementById("r9-saludo");
    saludo.textContent="";
    if (typeof hora !=="number" || hora<0 || hora>23) {
        saludo.textContent="ERROR:formato de la hora invalido";
        saludo.style.color="red";
        return;
    }
    if (hora>0 && hora<13) {
        saludo.textContent="Buenos dias!!";
    }
    else if(hora>12 && hora<20){
        saludo.textContent="Buenas tardes!!";
    }
    else if(hora>19 && hora<24){
        saludo.textContent="Buenas Noches!!";
    }
})