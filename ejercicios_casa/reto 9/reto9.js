let p=document.getElementById("texto");
let imagen=document.getElementById("imagen");

p.addEventListener("mouseover",function () {
    imagen.style.display="block";
});
p.addEventListener("mouseout",function () {
    imagen.style.display="none";
})