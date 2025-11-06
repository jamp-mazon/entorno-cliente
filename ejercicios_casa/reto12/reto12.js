let lista_compra=[];

let btnFinal=document.getElementById("btnFinal");
let btnInicio=document.getElementById("btnInicio");
let lista=document.getElementById("lista");
let mensaje=document.getElementById("mensaje");

btnInicio.addEventListener("click",function () {
    mensaje.textContent="";
let producto=document.getElementById("producto").value.trim();
    if (producto==="") {
        mensaje.textContent="ERROR: el campo no puede estar vacio...";
        mensaje.style.color="red";
        return
    }
    lista_compra.unshift(producto);
    lista.innerHTML="";
    for (let i = 0; i < lista_compra.length; i++) {
        let li=document.createElement("li");
        li.textContent=lista_compra[i];
        lista.appendChild(li);
    }
    // let li=document.createElement("li");
    // li.textContent="-----------------";       
    // lista.appendChild(li);
    // producto.value="";
    document.getElementById("producto").value="";
});
btnFinal.addEventListener("click",function () {
    mensaje.textContent="";
let producto=document.getElementById("producto").value.trim();    
    if (producto==="") {
        mensaje.textContent="ERROR: el campo no puede estar vacio...";
        mensaje.style.color="red";
        return
    }
    lista_compra.push(producto);
    lista.innerHTML="";
    for (let i = 0; i < lista_compra.length; i++) {
        let li=document.createElement("li");
        li.textContent=lista_compra[i];
        lista.appendChild(li);
    }
    // let li=document.createElement("li");
    // li.textContent="-----------------";  
    // lista.appendChild(li);   
    document.getElementById("producto").value="";
})