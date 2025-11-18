// class Tarea{
//     constructor(id,titulo,completada){
//         this.id=id;
//         this.titulo=titulo;
//         this.completada=completada;
//     }
// }
const btn_anadir=document.getElementById("bn-anadir-tarea");
let contador_tareas=document.getElementById("contador-completadas");
const ul=document.getElementById("lista-tareas");
let contadorID=1;
let lista_tareas=[
    {id:1 ,titulo:"cosas",completada:false}
];
for (let i = 0; i < lista_tareas.length; i++) {
     if (!lista_tareas[i].completada) {
        let li=document.createElement("li");
        li.textContent=lista_tareas[i].titulo;
        ul.appendChild(li);    
     }  
}
btn_anadir.addEventListener("click",function () {
    let nueva_tarea=document.getElementById("input-nueva-tarea").value.trim();
    lista_tareas.push({id:contadorID++,titulo:nueva_tarea,completada:false});   
    let li=document.createElement("li");
    li.textContent=nueva_tarea;
    ul.appendChild(li);
})