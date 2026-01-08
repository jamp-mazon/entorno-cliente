// 5) Proyectos (similar a lo tuyo)
const proyectos = [
  { titulo: "Gestion Almacen", grupo: "grupoA", modulo: "Sistemas", aprobado: true },
  { titulo: "Pokemon API",     grupo: "grupoB", modulo: "JS",       aprobado: false },
  { titulo: "Portfolio",       grupo: "grupoA", modulo: "HTML/CSS",  aprobado: true },
  { titulo: "Gestor Pedidos",  grupo: "grupoC", modulo: "JS",       aprobado: true },
  { titulo: "BD Biblioteca",   grupo: "grupoB", modulo: "BBDD",     aprobado: false },
];
const jsAprobados=proyectos.filter(proyecto=>{
    if (proyecto.modulo==="JS" && proyecto.aprobado===true) {
        return proyecto;
    }
});
console.log("ej6");
console.log(jsAprobados);
const grupoAoSuspenso=proyectos.filter(proyecto=>{
    if (proyecto.grupo==="grupoA" || proyecto.aprobado===false) {
        return proyecto;
    }
});
console.log("Grupo A o suspensos");
console.log(grupoAoSuspenso);

//v.2
const jsAprobados2=proyectos.filter(proyecto=>proyecto.modulo==="JS" && proyecto.aprobado===true);
console.log(jsAprobados2);