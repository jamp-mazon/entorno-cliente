//result = confirm(pregunta);
//ej1
continuar=confirm("Quieres continuar?");
if (continuar) {
    alert("Has continuado con exito...")
}
else{
    alert("Fallo al continuar")
}
//ej2
borrar=confirm("Quieres borrar los datos?");
if (borrar) {
    alert ("Borrado")
} else {
    alert ("Cancelado")
}
//ej3
entrar=confirm("Entrar??");
if (entrar) {
    recordar_sesion=confirm("Recordar Sesion??");
    if (recordar_sesion) {
        console.log("Has entrado y has recordardo sesion")
    } else {
        console.log("Has entrado pero no recuerdas la sesion")
    }
} else {
    console.log("No has querido entrar")
}
