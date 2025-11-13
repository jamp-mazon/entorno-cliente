const cuadro=document.getElementById("cuadro");

cuadro.addEventListener("mouseenter",function(){
    cuadro.style.backgroundColor="green";
    cuadro.addEventListener("mousemove",function(){
        let coords=document.getElementById("coords");
        coords.textContent=event.offsetX+event.offsetY;
    });
})
cuadro.addEventListener("mouseleave",function () {
    cuadro.style.backgroundColor="";
    let coords=document.getElementById("coords");
    coords.textContent="--";
})