let user_name=document.getElementById("user_name");
let btn_buscar=document.getElementById("btn_buscar");
btn_buscar.addEventListener("click",function () {
    let nombreEsta=false;
    const nombres=["Manolo","Pedro","Eustaquio","Paco","Pepe","Vicente"];
    let p=document.createElement("p");
    for (const nombre of nombres) {
        if (nombre===user_name.value) {
            p.textContent=`El nombre:${nombre} se encuentra en la lista`;
            nombreEsta=true;
        }
    }
    if (!nombreEsta) {
        p.textContent=`El nombre:${user_name.value} no se encuentra en la lista`;
    }
    document.body.appendChild(p);
})