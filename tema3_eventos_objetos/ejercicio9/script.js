let form = document.getElementById("dinamico");
let campos = document.getElementById("campos");
let btn_añadir = document.getElementById("addField");
let mensaje = document.getElementById("mensaje");
btn_añadir.addEventListener("click", function () {
    let input = document.createElement("input");
    campos.appendChild(input);
});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let campo_vacio = document.querySelectorAll("input");
    let existeVacio = false;
    for (const input of campo_vacio) {
        if (input.value === "") {
            existeVacio = true;
        }
    }
    if (existeVacio) {
        mensaje.textContent = "Campo vacio";
        mensaje.style.color = "red";
    }
    else {
        mensaje.textContent = "Todo Correcto";
        mensaje.style.color = "green";
    }


});