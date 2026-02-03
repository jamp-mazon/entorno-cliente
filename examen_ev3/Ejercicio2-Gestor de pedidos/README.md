# 📝 EXAMEN FINAL DEC – EJERCICIO 2 (5 puntos)

## Gestor de pedidos

En este ejercicio debes completar una aplicación web que gestiona un listado de pedidos a partir de un archivo JSON local que simula una API. Deberás cargar los datos correctamente, calcular el importe total de cada pedido relacionando pedidos y productos, aplicar filtros según la interacción del usuario y mostrar un resumen con información agregada. La interfaz visual ya está proporcionada; céntrate en la lógica JavaScript y en el uso correcto de los métodos de array para resolver el ejercicio.

Trabajarás **sin conexión a internet**, utilizando un archivo JSON local que simula una respuesta de una API.

Este ejercicio tiene un **nivel de dificultad superior** al Ejercicio 1 y está orientado a diferenciar a los alumnos con mayor dominio de los **métodos de array**.

---

## 📌 Objetivo del ejercicio

- Cargar datos desde un archivo JSON local simulando una API real.
- Relacionar información de pedidos y productos.
- Calcular importes a partir de datos estructurados.
- Aplicar filtros sobre conjuntos de datos.
- Mostrar información agregada mediante cálculos.
- Trabajar con **métodos de array** de forma correcta y clara.

---

## 📁 Estructura del proyecto

La carpeta del ejercicio mantiene la misma estructura que el Ejercicio 1:
⚠️ **No modifiques los nombres de carpetas ni archivos.**

---

## 🎨 Estilos (Tailwind CSS)

El archivo `tailwind.min.css` **ya ha sido proporcionado en clase**.

Debes:

- copiar el contenido completo del archivo local de Tailwind,
- pegarlo dentro de `assets/tailwind.min.css`.

Si el archivo no está correctamente colocado, la página se mostrará sin estilos.

---

## 📦 Fuente de datos

Los datos se encuentran en el archivo:
./data/pedidos.json
Este archivo contiene **dos bloques de información**:

- un listado de productos,
- un listado de pedidos con sus líneas.

⚠️ **Importante**:  
El archivo JSON **no contiene un array directamente**, sino un objeto con esta estructura general:

{
"productos": [ ... ],
"pedidos": [ ... ]
}
Por tanto, tras convertir la respuesta a JSON, debes acceder a cada bloque mediante su propiedad correspondiente.

## ⏱️ Duración

- Tiempo recomendado para este ejercicio: **aprox. 1 h 15 – 1 h 30**
- Puntuación máxima del ejercicio: **5 puntos**

Este ejercicio tiene un nivel de dificultad **superior al Ejercicio 1** y está pensado para valorar el dominio de los **métodos de array** y la capacidad de trabajar con datos estructurados de forma correcta.

## 📊 Rúbrica de evaluación (Ejercicio 2 – 5 puntos)

La nota final del ejercicio se obtiene sumando la puntuación de cada apartado.

> Para que un apartado puntúe, **la funcionalidad debe funcionar correctamente**.  
> Las soluciones parciales pueden obtener puntuación parcial según se indica.

---

### 1️⃣ Carga de datos (simulación de API real) – **1,00 punto**

| Nivel         | Descripción                                                                                        | Puntuación |
| ------------- | -------------------------------------------------------------------------------------------------- | ---------- |
| ✔️ Correcto   | Usa `fetch` con `async/await`, comprueba la respuesta y devuelve correctamente productos y pedidos | 1,00       |
| ◑ Parcial     | Carga los datos pero sin control de errores o con acceso incorrecto al JSON                        | 0,50       |
| ❌ Incorrecto | No carga los datos o rompe la aplicación                                                           | 0,00       |

---

### 2️⃣ Cálculo del total de pedidos – **1,50 puntos**

| Nivel         | Descripción                                                                   | Puntuación |
| ------------- | ----------------------------------------------------------------------------- | ---------- |
| ✔️ Correcto   | Calcula correctamente el total de cada pedido relacionando líneas y productos | 1,50       |
| ◑ Parcial     | Cálculos incompletos o errores menores en alguna línea                        | 0,75       |
| ❌ Incorrecto | No calcula correctamente los totales                                          | 0,00       |

---

### 3️⃣ Preparación y filtrado de pedidos – **1,00 punto**

| Nivel         | Descripción                                                          | Puntuación |
| ------------- | -------------------------------------------------------------------- | ---------- |
| ✔️ Correcto   | Prepara los pedidos para la vista y aplica correctamente los filtros | 1,00       |
| ◑ Parcial     | Filtrado o preparación incompletos                                   | 0,50       |
| ❌ Incorrecto | No filtra o rompe la aplicación                                      | 0,00       |

---

### 4️⃣ Resumen de datos (cálculos agregados) – **1,00 punto**

| Nivel         | Descripción                                                    | Puntuación |
| ------------- | -------------------------------------------------------------- | ---------- |
| ✔️ Correcto   | Calcula correctamente número de pedidos, total, media y máximo | 1,00       |
| ◑ Parcial     | Solo calcula parte del resumen o con errores                   | 0,50       |
| ❌ Incorrecto | No calcula el resumen o genera errores                         | 0,00       |

---

### 5️⃣ Interacción y actualización de la vista – **0,50 puntos**

| Nivel         | Descripción                                             | Puntuación |
| ------------- | ------------------------------------------------------- | ---------- |
| ✔️ Correcto   | Gestiona correctamente los eventos y actualiza la vista | 0,50       |
| ❌ Incorrecto | No gestiona eventos o la vista no se actualiza          | 0,00       |

---

## ⚠️ Penalizaciones generales

Estas penalizaciones se aplican **sobre la nota final**:

- Uso de `dataset` o `closest`: **–0,25 puntos**
- Uso de bucles infinitos: **–0,25 puntos**
- Modificar HTML base o clases Tailwind: **–0,25 puntos**
- Código desordenado o difícil de seguir: **–0,25 puntos**

> Las penalizaciones **no pueden reducir la nota por debajo de 0**.

---

## 🧮 Nota final

- **Puntuación máxima del ejercicio:** 5,00 puntos
- La corrección se realizará siguiendo estrictamente esta rúbrica.

---

👉 **Lee todo el enunciado antes de empezar** y revisa tu solución antes de entregar.

¡Suerte! 💪
