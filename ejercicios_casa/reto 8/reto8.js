
let btn_agregar=document.getElementById("btnAgregar");
let p=document.getElementById("mensaje");
let ul=document.getElementById("lista");

btn_agregar.addEventListener("click",function () {
    let item=document.getElementById("item").value.trim();
    if (item==="") {
        p.textContent="ERROR no puede estar vacio";
        p.style.color="red";
    }
    else{
        let li=document.createElement("li");
        li.textContent=item;
        ul.appendChild(li);
    }
})