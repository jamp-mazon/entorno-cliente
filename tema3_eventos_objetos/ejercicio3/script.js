const formulario=document.getElementById("form");
let input=document.getElementById("input");
formulario.addEventListener("submit",function () {
    
    let nombre=input.value;
    if (nombre==="") {
        event.preventDefault();
        // let p=document.getElementById("error");
        // p.textContent="El campo no puede estar vacio";
        alert("el campo no puede estar vacio");
    }

    /**  */ 
})