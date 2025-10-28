//Ejercicio 1
class Empleado{
    constructor(nombre,puesto,salario){
        this.nombre=nombre;
        this.puesto=puesto;
        this.salario=salario;
    }
    mostrarDatos(){
        return (`Nombre:${this.nombre}||Puesto:${this.puesto}||Salario:${this.salario}€`);

    }
}
function ejercicio1() {
  let empleado1=new Empleado("Paco","Desarrollador",1500);
  let empleado2=new Empleado("Manolo","Administrativo",1200);
  let empleado3=new Empleado("Eustaquio","Director",2000);

  console.log(empleado1.mostrarDatos());
  console.log(empleado2.mostrarDatos());
  console.log(empleado3.mostrarDatos());

}
//Ejercicio 2
class Proyecto{
    constructor(nombre,cliente,estado){
        this.nombre=nombre;
        this.cliente=cliente;
        this.estado=estado;
    }
    actualizarEstado(nuevoEstado){
       return this.estado=nuevoEstado;
    }
}
function ejercicio2() {
    let proyecto1=new Proyecto("Avance Tecnologico","NTT DATA","Iniciado");
    let proyecto2=new Proyecto("Gestios de BBDD","Capgenemi","Finalizado");
    let proyecto3=new Proyecto("Actualizacion Web","Inetum","Pausa");

    let lista_proyectos=[];
    lista_proyectos.push(proyecto1,proyecto2,proyecto3);
    //Muestro mostrarDatos
    console.log(`ESTADO DE PROYECTOS INICIAL:`);

    for (const proyecto of lista_proyectos) {
        console.log(`Nombre:${proyecto.nombre}--Estado:${proyecto.estado}`);
    }
    console.log(`CAMBIO DE ESTADO DE PROYECTOS`);
    proyecto2.actualizarEstado("Iniciado");
    proyecto3.actualizarEstado("Finalizado");
    //Vuelvo a mostrar
    for (const proyecto of lista_proyectos) {
        console.log(`Nombre:${proyecto.nombre}--Estado:${proyecto.estado}`);
    }    
}
//Ejercicio 3
class Producto{
    constructor(nombre,precio,stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
    aplicarDescuento(porcentaje){
        let descuento=this.precio/porcentaje;
        let total=this.precio-descuento;
        return total;
    }
}
function ejercicio3() {
    producto1=new Producto("Audi A3",100000,20);
    producto2=new Producto("Audi")
}