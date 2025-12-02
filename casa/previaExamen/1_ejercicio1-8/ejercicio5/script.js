const tarjetas=document.querySelectorAll("div")
for (const div of tarjetas) {
    div.addEventListener("mouseover",function () {
        div.classList.add("activa");
        console.log("Entrando en:"+div.textContent);
    })
    div.addEventListener("mouseout",function (event) {
        div.className="card";
        console.log("Saliendo en:"+div.textContent);
    })   
}