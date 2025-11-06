let btn_nuevo=document.getElementById("btnNuevo");
let btn_atender=document.getElementById("btnAtender");
let lista_clientes=["Manolo","Paco","Mario","Zamora","Rodrigo","Fermin","Roberto"];
let cola=document.getElementById("cola");
btn_nuevo.addEventListener("click",function () {
    let nuevo_cliente=document.getElementById("cliente").value.trim();
    if (nuevo_cliente==="") {
        return;
    }
    lista_clientes.push(nuevo_cliente);
    cola.innerHTML="";
    for (let i = 0; i < lista_clientes.length; i++) {
        let li=document.createElement("li");
        li.textContent=lista_clientes[i];
        cola.appendChild(li);
    }
});
btn_atender.addEventListener("click",function () {
    let cliente_atendido=lista_clientes.shift();
    let p=document.getElementById("atendido");
    if (lista_clientes.length<1) {
        return;
    }
    p.textContent=`Atendido:${cliente_atendido}`;
    cola.innerHTML="";
        for (let i = 0; i < lista_clientes.length; i++) {
        let li=document.createElement("li");
        li.textContent=lista_clientes[i];
        cola.appendChild(li);
    }
})