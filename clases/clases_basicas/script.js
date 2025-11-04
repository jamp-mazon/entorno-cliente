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
    class Usuario{
        constructor(nombre,correo,rol){
            this.nombre=nombre;
            this.correo=correo;
            this.rol=rol;
        }
        mostrarRol(){
            if (this.rol==="admin") {
                return `Soy ${this.nombre} y tengo permisos de administrador`;
            }
            else if(this.rol==="editor"){
                return `Soy ${this.nombre} y tengo permisos de ediccion , pero no de administrador`;
            }
            else if(this.rol==="visitante"){
                return `Soy ${this.nombre} y solo tengo permisos de lectura, no tengo permisos de ningun tipo`;
            }
            else{
                return `Soy ${this.nombre} y tengo un Rol incorrecto`;
            }
        }
    }
    const usuario1=new Usuario("Paco","paco@kk.com","admin");
    const usuario2=new Usuario("Pepe","pepe@kk.com","editor");
    const usuario3=new Usuario("Eustaquio","eustaquio@kk.com","visitante");
    const usuario4=new Usuario("Paca","paca@kk.com","miRol");
    let lista_usuarios=[];
    lista_usuarios.push(usuario1,usuario2,usuario3,usuario4);
    for (const user of lista_usuarios) {
        console.log(user.mostrarRol());
    }
}
//Ejercicio 7
function ejercicio7(){
    class Tarea{
        constructor(nombre,descripcion,estado){
            this.nombre=nombre;
            this.descripcion=descripcion;
            this.estado=estado;
        }
        mostrarEstado(){
            return `Tarea:${this.nombre} esta en estado ${this.estado}`;
        }
        completarTarea(){
            if (this.estado==="pendiente") {
                this.estado="completada"
                return `Tarea:${this.nombre} ha pasado a estar ${this.estado}`;
            }
        }
    }
    class GestorTareas{
        constructor(lista_tareas){
            this.lista_tareas=lista_tareas;
        }
        nuevaTarea(Tarea){
            this.lista_tareas.push(Tarea);
        }
        listarTareas(){
            for (let i = 1; i <=this.lista_tareas.length; i++) {
                const tarea = this.lista_tareas[i-1];
                 console.log(`${i}.${tarea.mostrarEstado()}`);
            }
        }
        borrarTareas(indice){
            this.lista_tareas.splice(indice-1);
        }
    }
    const tarea1=new Tarea("Limpiar clase","Limpiar la clase 104","pendiente");
    const tarea2=new Tarea("Romper Ordenadores","Romper los ordenadores clase 102","completada");
    const tarea3=new Tarea("Perder Material","Perder los materiales de oficina","pendiente");
    let lista_tareas=[];
    lista_tareas.push(tarea1,tarea2,tarea3);
    
    const miGestor=new GestorTareas(lista_tareas);
    miGestor.listarTareas();
    console.log("-----------AÑADO TAREA----------------------");
    const tarea4=new Tarea("Nueva Tarea","Nueva tarea desde mi gestor","pendiente");
    miGestor.nuevaTarea(tarea4);
    miGestor.listarTareas();
    console.log("------------BORRO ULTIMA TAREA------------");
    miGestor.borrarTareas(4);
    miGestor.listarTareas();
}
