# Ejercicios de JavaScript: `filter()` (de fácil a difícil)

> **Fecha:** 2026-01-08  
> **Instrucciones:** Resuelve **sin mirar soluciones**. Devuelve siempre un **array nuevo** usando `.filter()`.  
> Cuando termines (por ejemplo del 1 al 6), pégame tu código y te lo corrijo.

---

## Datos base (cópialos tal cual)

```js
// 1) Números
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -2, 0, 15];

// 2) Palabras
const palabras = ["casa", "perro", "sol", "murciélago", "js", "programacion", "a", "CSS"];

// 3) Usuarios
const usuarios = [
  { id: 1, nombre: "Ana", edad: 17, activo: true,  rol: "user" },
  { id: 2, nombre: "Luis", edad: 22, activo: false, rol: "admin" },
  { id: 3, nombre: "Marta", edad: 35, activo: true,  rol: "user" },
  { id: 4, nombre: "Paco", edad: 16, activo: true,  rol: "user" },
  { id: 5, nombre: "Nora", edad: 29, activo: false, rol: "user" },
];

// 4) Productos
const productos = [
  { id: 1, nombre: "Teclado", categoria: "perifericos", precio: 29.99, stock: 10, tags: ["pc","oficina"] },
  { id: 2, nombre: "Raton", categoria: "perifericos", precio: 14.50, stock: 0,  tags: ["pc"] },
  { id: 3, nombre: "Monitor", categoria: "pantallas",   precio: 129.00, stock: 3,  tags: ["pc","gaming"] },
  { id: 4, nombre: "HDMI",    categoria: "cables",      precio: 7.99,  stock: 25, tags: [] },
  { id: 5, nombre: "USB-C",   categoria: "cables",      precio: 9.99,  stock: 2,  tags: ["movil"] },
  { id: 6, nombre: "Silla",   categoria: "oficina",     precio: 89.90, stock: 1,  tags: ["oficina"] },
];

// 5) Proyectos (similar a lo tuyo)
const proyectos = [
  { titulo: "Gestion Almacen", grupo: "grupoA", modulo: "Sistemas", aprobado: true },
  { titulo: "Pokemon API",     grupo: "grupoB", modulo: "JS",       aprobado: false },
  { titulo: "Portfolio",       grupo: "grupoA", modulo: "HTML/CSS",  aprobado: true },
  { titulo: "Gestor Pedidos",  grupo: "grupoC", modulo: "JS",       aprobado: true },
  { titulo: "BD Biblioteca",   grupo: "grupoB", modulo: "BBDD",     aprobado: false },
];

// 6) Pedidos (fechas como string)
const pedidos = [
  { id: 101, cliente: "Ana", total: 49.90, estado: "enviado",   fecha: "2026-01-02" },
  { id: 102, cliente: "Luis", total: 12.50, estado: "pendiente",fecha: "2026-01-03" },
  { id: 103, cliente: "Marta",total: 109.00,estado: "enviado",  fecha: "2026-01-05" },
  { id: 104, cliente: "Ana", total: 9.99,  estado: "cancelado", fecha: "2025-12-30" },
];
```

---

## Ejercicios (nivel 1 → 10)

### Nivel 1
1. Saca de `nums` solo los **pares**.  
2. Saca de `nums` solo los **mayores que 5**.

### Nivel 2
3. De `palabras`, quédate con las que tengan **longitud >= 4**.  
4. De `palabras`, quédate con las que empiecen por **"p"** (sin distinguir mayúsculas/minúsculas).

### Nivel 3
5. De `usuarios`, saca los **activos**.  
6. De `usuarios`, saca los **mayores de edad** (edad >= 18).

### Nivel 4
7. De `productos`, saca los que tengan **stock > 0**.  
8. De `productos`, saca los de categoría **"cables"** y precio **< 10**.

### Nivel 5
9. De `productos`, saca los que tengan el tag **"pc"** en `tags`.  
10. De `productos`, saca los que **NO tengan** tags (array vacío).

### Nivel 6
11. De `proyectos`, filtra por `modulo === "JS"` **y** `aprobado === true`.  
12. De `proyectos`, filtra por `grupo === "grupoA"` **o** `aprobado === false`.

### Nivel 7 (multi-filtro tipo “interfaz”)
13. Crea una función:

```js
function filtrarProyectos(lista, { modulo="todos", soloAprobados=false, grupo="todos", texto="" }) {}
```

Que devuelva el array filtrado con estas reglas:

- si `modulo !== "todos"` filtra por módulo  
- si `soloAprobados` es `true`, filtra por aprobados  
- si `grupo !== "todos"` filtra por grupo  
- si `texto` no está vacío, filtra por `titulo` que incluya ese texto (**case-insensitive**)

### Nivel 8 (fechas)
14. De `pedidos`, filtra los que estén entre `"2026-01-01"` y `"2026-01-04"` (**incluidos**).  
   > Pista: como están en formato `YYYY-MM-DD`, puedes comparar strings o convertir a `Date`.

### Nivel 9 (condición compuesta)
15. De `pedidos`, filtra los que sean:
- estado `"enviado"` **y** `total >= 50`  
  **o**
- cliente `"Ana"` y estado **no** sea `"cancelado"`

### Nivel 10 (pro)
16. Haz un filtro “seguro” sobre `productos`:
- `precio` válido (number y no `NaN`)  
- `stock` válido (number)  
- y que `nombre` no esté vacío  
> Simula que podrían venir mal datos.

---

## Entrega rápida
- Pégame tu solución del **1 al 6** y te digo qué está bien y qué falla (sin darte la solución si no la pides).
