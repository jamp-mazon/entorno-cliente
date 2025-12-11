# Práctica compleja: Métodos declarativos de Arrays en JavaScript

El objetivo de esta práctica es trabajar con datos realistas de un grupo de alumnos usando **solo métodos declarativos de arrays**:

- `forEach`
- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`
- `sort`

> No se deben usar bucles `for` ni `while`.

---

## Array inicial

```js
const alumnos = [
  { id: 1, nombre: 'Laura', grupo: '1ºDAW', modulo: 'DIW', notaMedia: 8.2, faltas: 2, practicasEntregadas: 6, practicasTotales: 6, repetidor: false },
  { id: 2, nombre: 'Diego', grupo: '1ºDAW', modulo: 'DIW', notaMedia: 4.7, faltas: 7, practicasEntregadas: 4, practicasTotales: 6, repetidor: false },
  { id: 3, nombre: 'Marta', grupo: '1ºDAW', modulo: 'DIW', notaMedia: 6.5, faltas: 1, practicasEntregadas: 6, practicasTotales: 6, repetidor: true },
  { id: 4, nombre: 'Pablo', grupo: '1ºDAW', modulo: 'DIW', notaMedia: 5.1, faltas: 5, practicasEntregadas: 5, practicasTotales: 6, repetidor: false },
  { id: 5, nombre: 'Alae', grupo: '1ºDAW', modulo: 'DIW', notaMedia: 9.0, faltas: 0, practicasEntregadas: 6, practicasTotales: 6, repetidor: false },
  { id: 6, nombre: 'Naaman', grupo: '1ºDAW', modulo: 'DIW', notaMedia: 3.9, faltas: 8, practicasEntregadas: 3, practicasTotales: 6, repetidor: true }
];

```

---

## Ejercicio 1: Listado de aprobados

Genera un nuevo array con solo los alumnos aprobados (`notaMedia >= 5`).  
Luego genera otro array con solo los **nombres** de esos alumnos.

- Resuelve el ejercicio en el archivo `js/ej1-listado-aprobados.js`.
- Regla: usa `filter()` y `map()`.

---

## Ejercicio 2: Alumnos con muchas faltas

Obtén un array con los alumnos que tengan **más de 5 faltas** y muestra un mensaje por cada uno, por ejemplo:

```txt
Diego tiene 7 faltas. Revisar situación.
```

- Resuelve el ejercicio en `js/ej2-faltas.js`.
- Regla: usa `filter()` y `forEach()`.

---

## Ejercicio 3: Prácticas no entregadas

Comprueba si **al menos un alumno** no ha entregado todas las prácticas  
(`practicasEntregadas < practicasTotales`).

- Si lo hay, muestra: `Faltan prácticas por entregar`.
- Si no lo hay, muestra: `Todas las prácticas están entregadas`.

- Resuelve el ejercicio en `js/ej3-practicas-pendientes.js`.
- Regla: usa `some()`.

---

## Ejercicio 4: ¿Todo el grupo al día?

Comprueba si **todos los alumnos** tienen todas las prácticas entregadas  
(`practicasEntregadas === practicasTotales`).

- Muestra un mensaje adecuado en consola.

- Resuelve el ejercicio en `js/ej4-todos-al-dia.js`.
- Regla: usa `every()`.

---

## Ejercicio 5: Nota media de la clase

Calcula la **nota media global** del grupo a partir de la propiedad `notaMedia`.

- Muestra en consola la media, por ejemplo: `La nota media de la clase es 6.23`.

- Resuelve el ejercicio en `js/ej5-media-clase.js`.
- Regla: usa `reduce()`.

---

## Ejercicio 6: Ranking de alumnos

Crea un **nuevo array** con los alumnos ordenados de **mayor a menor nota** (`notaMedia`).

- No modifiques el array original `alumnos`.
- Muestra el ranking en consola.

- Resuelve el ejercicio en `js/ej6-ranking.js`.
- Regla: haz una copia del array y usa `sort()`.

---

## Ejercicio 7: Buscar alumno por ID

Simula que el usuario introduce el `id` **3**.  
Busca el alumno correspondiente y muestra algo así:

```txt
Alumno encontrado: Marta (nota media: 6.5)
```

- Resuelve el ejercicio en `js/ej7-buscar-por-id.js`.
- Regla: usa `find()`.

---

## Ejercicio 8: Crear resumen ligero

Crea un nuevo array llamado `resumenAlumnos` con objetos de este tipo:

```js
{ nombre: 'Laura', estado: 'APROBADO', faltas: 2 }
```

- `estado` será `"APROBADO"` si `notaMedia >= 5`, y `"SUSPENSO"` en caso contrario.
- `faltas` tendrá el mismo valor que en el objeto original.

- Resuelve el ejercicio en `js/ej8-resumen.js`.
- Regla: usa `map()`.

---

## Ejercicio 9: Porcentaje de aprobados

Calcula el **porcentaje de aprobados** del grupo.

1. Cuenta cuántos alumnos tienen `notaMedia >= 5`.
2. Calcula el porcentaje sobre el total.
3. Muestra en consola algo así: `El 50% de la clase está aprobada`.

- Resuelve el ejercicio en `js/ej9-porcentaje-aprobados.js`.
- Regla: combina `filter()` y `.length`, o resuélvelo con un solo `reduce()`.

---

## Ejercicio 10 (Extra): Repetidores y no repetidores

Crea un objeto `estadisticas` con esta estructura:

```js
const estadisticas = {
  repetidores: [...],
  noRepetidores: [...]
};
```

- `repetidores`: alumnos con `repetidor: true`.
- `noRepetidores`: el resto.

- Resuelve el ejercicio en `js/ej10-repetidores.js`.
- Regla: usa dos `filter()` o un solo `reduce()` más elaborado.

---

## Cómo usar este proyecto en VS Code

1. Abre la carpeta en VS Code.
2. Abre el archivo `index.html` en el navegador (con Live Server o doble clic).
3. Abre la **consola** del navegador (F12 → pestaña "Consola").
4. Activa en `index.html` el `<script>` del ejercicio que quieras probar.
5. Escribe el código en el archivo `.js` correspondiente y comprueba el resultado en la consola.
