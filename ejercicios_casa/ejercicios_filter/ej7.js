const proyectos = [
  { titulo: "Gestion Almacen", grupo: "grupoA", modulo: "Sistemas", aprobado: true },
  { titulo: "Pokemon API",     grupo: "grupoB", modulo: "JS",       aprobado: false },
  { titulo: "Portfolio",       grupo: "grupoA", modulo: "HTML/CSS",  aprobado: true },
  { titulo: "Gestor Pedidos",  grupo: "grupoC", modulo: "JS",       aprobado: true },
  { titulo: "BD Biblioteca",   grupo: "grupoB", modulo: "BBDD",     aprobado: false },
];

function filtrarProyectos(lista, { modulo="todos", soloAprobados=false, grupo="todos", texto="" }) {
    texto=texto.toLocaleLowerCase();
    const lista_filtrada=lista.filter(proyecto=>

        (modulo==="todos"||proyecto.modulo.includes(modulo)) &&
        (!soloAprobados|| proyecto.aprobado===true) &&
        (grupo==="todos"|| proyecto.grupo.includes(grupo)) &&
        (texto==="" || proyecto.titulo.toLowerCase().includes(texto))
    );
    return lista_filtrada;
}    