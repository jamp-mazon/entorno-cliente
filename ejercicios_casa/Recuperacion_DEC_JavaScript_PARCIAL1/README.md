# Recuperación JavaScript — DEC (CFGS DAW)

## 📌 Instrucciones generales

- Abre el archivo `index.html` en el navegador.
- **No modifiques el HTML ni el CSS**.
- Resuelve cada ejercicio **únicamente en su archivo JavaScript correspondiente**.
- El examen es **offline**.
- Duración total: **2 horas**.

### Reglas importantes
- ❌ No usar arrow functions.
- ❌ No usar métodos declarativos de arrays (`map`, `filter`, `reduce`, `find`, `some`, `every`, etc.).
- ❌ No usar programación orientada a objetos (clases).
- ❌ **No usar bucles infinitos** (`while(true)` ni variantes).
- ✅ Se permiten `for`, `while` con condición clara, `if`, `Number()`, `isNaN()`, `trim()`, `includes()`.

---

## 🧪 Estructura del examen

El examen consta de **4 ejercicios**, cada uno valorado con **2,5 puntos**.  
Para aprobar es necesario completar correctamente **al menos 2 ejercicios** (5/10).

---

## 🟦 Ejercicio 1 — Mini-biblioteca (catálogo + sugerencias)
**Archivo:** `app_rec.js`

### Objetivo
Crear un pequeño buscador de libros con sugerencias.

### Qué debes hacer
1. Crea un array con **8 títulos de libros** (strings).
2. Al cargar la página, muestra el **catálogo completo** en el contenedor `#catalogoLibros` (un título por línea).
3. Al escribir en el campo `#buscarLibro`:
   - Muestra en `#sugerenciasLibros` **hasta 5 títulos** que incluyan el texto escrito.
   - Usa `.includes()` y no distingas entre mayúsculas y minúsculas.
   - Si el input está vacío, limpia las sugerencias.
4. Al hacer click en una sugerencia:
   - El input se rellena con ese título.
   - Las sugerencias se limpian.

### Se evalúa
- Funcionamiento del catálogo y las sugerencias.
- Limpieza del DOM y control del input vacío.
- Código claro y bien estructurado.

---

## 🟦 Ejercicio 2 — Lista de recados (toggle visual)
**Archivo:** `recados.js`

### Objetivo
Gestionar una lista simple de recados.

### Qué debes hacer
1. Al pulsar **Añadir**:
   - Si el campo está vacío o solo contiene espacios, muestra un error en `#errorRecado` y **no añadas** el recado.
   - Si es válido, añade el recado a la lista y limpia el input y el error.
2. Al hacer **click sobre un recado**, debe alternar su estado visual:
   - Añadir o quitar la clase `.hecha` (toggle).
3. El contador debe mostrar el **total de recados**.
4. El botón **Borrar todo** debe vaciar la lista y actualizar el contador.

### Se evalúa
- Añadir, toggle visual y borrado.
- Validación del input.
- Uso correcto de eventos y DOM.

---

## 🟦 Ejercicio 3 — Estadísticas de tiempos (prompt)
**Archivo:** `tiempos.js`

### Objetivo
Recoger datos con `prompt()` y calcular estadísticas.

### Qué debes hacer
1. Pedir tiempos en minutos usando `prompt()` hasta que el usuario:
   - Escriba `"fin"`, o
   - Pulse Cancelar.
2. Solo se aceptan números entre **1 y 600**, permitiendo **decimales**.
3. Mostrar en `#salidaTiempos`:
   - Cantidad de valores introducidos.
   - Suma total.
   - Media (con 2 decimales).
   - Valor mínimo y máximo.
   - Cuántos valores son mayores o iguales a 120.

### Importante
- No se permiten bucles infinitos.
- Usa un bucle con **condición clara basada en la entrada del usuario**.

### Se evalúa
- Cálculos correctos.
- Validación de datos.
- Formato claro del resultado.

---

## 🟦 Ejercicio 4 — Formulario de inscripción
**Archivo:** `inscripcion.js`

### Objetivo
Validar un formulario y mostrar un resumen.

### Qué debes hacer
1. Al enviar el formulario:
   - Usa `preventDefault()`.
2. Valida los siguientes campos:
   - **Nombre:** mínimo 8 caracteres (tras `trim()`).
   - **Email:** usa la función proporcionada (copiar y pegar tal cual):
     ```js
     function validarEmail(email) {
       const e = email.trim();
       const exp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return exp.test(e);
     }
     ```
   - **Edad:** número entero entre 16 y 70.
   - **Turno:** obligatorio.
   - **Motivo:** mínimo **10 caracteres**.
3. Muestra los errores en los `<small>` correspondientes.
4. Si todo es correcto:
   - Muestra un mensaje en `#ok`.
   - Muestra un resumen con los datos en `#resumen`.

### Se evalúa
- Validación correcta de los campos.
- Uso adecuado de la función `validarEmail`.
- Organización y claridad del código.

---

## 🧠 Consejo final
No se evalúa solo que “funcione”, sino:
- Validaciones.
- Control de errores.
- Claridad del código.
- Uso correcto del DOM y los eventos.
