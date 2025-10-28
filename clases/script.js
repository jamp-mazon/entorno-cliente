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
        let descuento=this.precio*(porcentaje /100);
        let total=this.precio-descuento;
        return total;
    }
}
function ejercicio3() {
   const producto1=new Producto("Audi A3",10000,20);
   const producto2=new Producto("Audi A5",15000,20);
   const producto3=new Producto("Audi A7",29999,10);
   
   let lista_productos=[];
   lista_productos.push(producto1,producto2,producto3);
   for (const producto of lista_productos) {
    console.log(`Nombre:${producto.nombre}||Precio:${producto.precio}€`);
   }
   console.log("PRECIO CON REBAJA DE LOS PRODUCTOS 20%");
   for (const producto of lista_productos) {
    let total=producto.aplicarDescuento(20);
    console.log(`Nombre:${producto.nombre}||Precio:${producto.precio}€||Precio con descuento:${total}€`);
   } 
}
//Ejercicio 4
function ejercicio4() {
    class Persona{
        constructor (nombre,edad){
            this.nombre=nombre;
            this.edad=edad;
        }
    
    }
    class Empleado extends Persona{
        constructor(nombre,edad,puesto,salario){
            super(nombre,edad);
            this.puesto=puesto;
            this.salario=salario;
        }
        presentarse(){
            return (`Hola me llamo ${this.nombre} tengo ${this.edad} y soy ${this.puesto}`);
        }
    }
    const empleado1=new Empleado("Paco",45,"Desarrollador Front-End",1500);
    const empleado2=new Empleado("Manolo",55,"Desarrollador Back-End", 1700);
    const empleado3=new Empleado("Eustaquio",65,"Desarrollador Full-Stack",2000 );
    let lista_empleados=[];
    lista_empleados.push(empleado1,empleado2,empleado3);
    for (const empleado of lista_empleados) {
        console.log(empleado.presentarse());
    }    
}
//Ejercicio 5
function ejercicio5() {
    class Venta{
        constructor(producto,cantidad){
            this.producto=producto;
            this.cantidad=cantidad;
            this.total;
        }
        calcularTotal(precioUnitario){
             return this.total=this.cantidad*precioUnitario;
        }
    }
    const venta1=new Venta("Alfombrillas",50);
    const venta2=new Venta("ratones Logitech",20);
    const venta3=new Venta("Teclados CORSAIR",5);

    let lista_ventas=[];
    lista_ventas.push(venta1,venta2,venta3);
    let precio_alfombrillas=lista_ventas[0].calcularTotal(5);
    let precio_ratones=lista_ventas[1].calcularTotal(25);
    let precio_teclados=lista_ventas[2].calcularTotal(40);
    console.log(`El total de la venta de Alfombrillas es:${precio_alfombrillas}€`);
    console.log(`El total de la venta de ratones es:${precio_ratones}€`);
    console.log(`El total de la venta de teclados es:${precio_teclados}€`);
    let total=0;
    for (const venta of lista_ventas) {
        total+=venta.total;
    }
    console.log(`El total de todos los productos es:${total}€`);

}
//Ejercicio 6
function ejercicio6() {
    
}
