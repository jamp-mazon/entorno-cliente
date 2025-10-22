const horario =[
    {Lunes:"Despliegue"},
    {Martes:"PHP"},
    {Miercoles:"HTML"},
    {Jueves:"JavaScript"},
    {Viernes:"CSS"},

];
let btnMostrar=document.getElementById("btnMostrar");
let divHorario=document.getElementById("horario");
btnMostrar.addEventListener("click",function () {
    // for (const dia of horario) {
    //     let p=document.createElement("p");
    //     p.textContent=dia.;
    //     divHorario.appendChild(p);
    // }
    for (let i = 0; i < horario.length; i++) {
        let dia=Object.keys(horario[i])[0];
        const valor = horario[i][dia];
        let p=document.createElement("p");
        p.textContent=dia + ":" + valor;
        divHorario.appendChild(p);
    }
})
