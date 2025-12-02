document.addEventListener('DOMContentLoaded', init);

let conta_ID=0;
class NotasApp{
    constructor(descripcion,fecha){
        this.id=conta_ID++;
        this.descripcion=descripcion;
        this.fecha=fecha
    }
}
const lista_notas=[];
function init(){
let inpNota=document.getElementById("inpNota");
let btn_add=document.getElementById("btnAdd");
let ulNotas=document.getElementById("listaNotas");

btn_add.addEventListener("click",function () {
    const descripcion=inpNota.value.trim();
    inpNota.value="";
    const fecha=new Date().toLocaleDateString();
    const nota=new NotasApp(descripcion,fecha);
    lista_notas.push(nota);
    ulNotas.innerHTML="";
    for (const notilla of lista_notas) {
        let li=document.createElement("li");
        li.textContent=`Fecha:${notilla.fecha}|||${notilla.descripcion}`;
        ulNotas.appendChild(li);
    }

})

}
