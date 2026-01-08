// 3) Usuarios
const usuarios = [
  { id: 1, nombre: "Ana", edad: 17, activo: true,  rol: "user" },
  { id: 2, nombre: "Luis", edad: 22, activo: false, rol: "admin" },
  { id: 3, nombre: "Marta", edad: 35, activo: true,  rol: "user" },
  { id: 4, nombre: "Paco", edad: 16, activo: true,  rol: "user" },
  { id: 5, nombre: "Nora", edad: 29, activo: false, rol: "user" },
];

const activos=usuarios.filter(usuario=>{
    if (usuario.activo===true) {
        return usuario;
    }
});
const mas18=usuarios.filter(usuario=>{
    if (usuario.edad>=18) {
        return usuario;
    }
})
console.log("Ejercicio 3 Activos y +18");
console.log(activos)
console.log(mas18);