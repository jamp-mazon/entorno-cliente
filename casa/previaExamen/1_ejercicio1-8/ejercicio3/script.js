let textarea=document.getElementById("descripcion");
let previsualizacion=document.getElementById("preview");
let pCaracteres=document.getElementById("contador");

textarea.addEventListener("input",function (event) {
    
    previsualizacion.textContent=textarea.value;
    pCaracteres.textContent=textarea.value.length;
    
})
