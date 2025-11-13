const arriba=document.getElementById("arriba");
const relleno=document.getElementById("relleno");

window.addEventListener("scroll",function () {
    if (this.window.scrollY>300) {
        arriba.style.display="block";
    }
    else{
        arriba.style.display="none";
    }
});
arriba.addEventListener("click",function(){
    window.scrollTo(0,0);
})