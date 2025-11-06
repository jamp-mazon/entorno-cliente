let btnAgregar=document.getElementById("btnAgregar");
let btnEliminar=document.getElementById("btnEliminar");
let pila=document.getElementById("pila");
let pila_tareas=[];
btnAgregar.addEventListener("click",function () {
    let tarea=document.getElementById("tarea").value.trim();
    document.getElementById("tarea").value="";
    pila_tareas.push(tarea);
    let ul=document.createElement("ul");
    pila.appendChild(ul);
    ul.innerHTML="";
    for (let i = 0; i < pila_tareas.length; i++) {
        let li=document.createElement("li");
        li.textContent=pila_tareas[i];
        ul.appendChild(li);
    }
});
btnEliminar.addEventListener("click",function () {
    let tarea=document.getElementById("tarea").value.trim();
    document.getElementById("tarea").value="";
    pila_tareas.pop();
    let ul=document.createElement("ul");
    pila.appendChild(ul);
    ul.innerHTML="";
    for (let i = 0; i < pila_tareas.length; i++) {
        let li=document.createElement("li");
        li.textContent=pila_tareas[i];
        ul.appendChild(li);
    }    
})