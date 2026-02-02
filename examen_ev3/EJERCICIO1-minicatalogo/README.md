# 📝 EXAMEN FINAL DEC – EJERCICIO 1 (5 puntos)

## MiniCatálogo Fitness

En este ejercicio debes desarrollar una pequeña aplicación web en **JavaScript** que simula el funcionamiento básico de un **catálogo de productos**, similar a lo que se haría en una aplicación real que consume datos de una API.

Trabajarás **sin conexión a internet**, utilizando un archivo JSON local como fuente de datos.

---

## 📌 Objetivo del ejercicio

- Cargar un listado de productos desde un archivo JSON usando `fetch` y `async/await`.
- Permitir la **búsqueda de productos por nombre**.
- Mostrar los productos dinámicamente en pantalla.
- Implementar un sistema de **favoritos persistente** usando `localStorage`.
- Gestionar la interacción del usuario mediante **delegación de eventos**.

---

## 📁 Estructura del proyecto

> ⚠️ No modifiques los nombres de carpetas ni archivos.

---

## 🎨 Estilos (Tailwind CSS)

El archivo `tailwind.min.css` **ya ha sido proporcionado en clase**.

Debes:

- Copiar el contenido completo del archivo local de Tailwind.
- Pegar ese contenido dentro de `assets/tailwind.min.css`.

> Si el archivo no está correctamente colocado, la página se mostrará sin estilos.

---

## 📦 Fuente de datos

Los productos se encuentran en:
./data/productos.json

⚠️ **Importante**: el JSON **no contiene un array directamente**, sino un objeto con esta estructura:

"productos": [ ... ]

Por tanto, tras convertir la respuesta a JSON, debes acceder al array mediante la propiedad correspondiente.

## ⚙️ Funcionalidades a implementar

Debes completar el archivo `app.js` para que la aplicación funcione correctamente.

### 1) Carga de productos

- Implementa la función `cargarProductos()`.
- Debe comportarse como una **llamada a una API real**:
  - Comprueba si la respuesta es correcta.
  - Si ocurre un error, lanza una excepción para que sea capturada en `main()`.

### 2) Búsqueda de productos

- Permite buscar productos por nombre.
- La búsqueda debe actualizar la lista **en tiempo real** al escribir.

### 3) Pintado de productos

- Muestra los productos en pantalla usando las funciones proporcionadas.
- Si no hay resultados, debe mostrarse un mensaje indicándolo.

### 4) Favoritos (LocalStorage)

- Permite marcar y desmarcar productos como favoritos.
- Los favoritos deben guardarse en `localStorage`.
- El estado de favoritos debe mantenerse al recargar la página.

### 5) Interacción del usuario

- Gestiona los clicks del botón de favoritos usando **delegación de eventos**.
- No se permite el uso de `dataset` ni `closest`.

---

## 🚫 Restricciones importantes

- ❌ No usar internet.
- ❌ No modificar el HTML base ni las clases de Tailwind.
- ❌ No usar `dataset` ni `closest`.
- ❌ No usar bucles infinitos.
- ✅ Usar `let` y `const`.
- ✅ Usar `async/await`.

---

## ⏱️ Duración

- Tiempo recomendado: **aprox. 1 h 30 – 1 h 45**
- Puntuación máxima del ejercicio: **5 puntos**

## 📊 Rúbrica de evaluación (Ejercicio 1 – 5 puntos)

La nota final del ejercicio se obtiene sumando la puntuación de cada apartado.

> Para que un apartado puntúe, **la funcionalidad debe funcionar correctamente**.  
> Las soluciones parciales pueden obtener puntuación parcial según se indica.

---

### 1️⃣ Carga de productos (fetch + async/await) – **1,25 puntos**

| Nivel         | Descripción                                                                                  | Puntuación |
| ------------- | -------------------------------------------------------------------------------------------- | ---------- |
| ✔️ Correcto   | Usa `fetch` con `async/await`, comprueba errores y devuelve correctamente `data.productos`   | 1,25       |
| ◑ Parcial     | Usa `fetch` y `async/await` pero sin comprobación de errores o con acceso incorrecto al JSON | 0,75       |
| ❌ Incorrecto | No carga los datos o provoca errores en la aplicación                                        | 0,00       |

---

### 2️⃣ Búsqueda de productos – **1,00 punto**

| Nivel         | Descripción                                                                    | Puntuación |
| ------------- | ------------------------------------------------------------------------------ | ---------- |
| ✔️ Correcto   | Filtra correctamente los productos por nombre y actualiza la vista al escribir | 1,00       |
| ◑ Parcial     | Filtrado incompleto o con errores menores                                      | 0,50       |
| ❌ Incorrecto | No filtra o rompe la aplicación                                                | 0,00       |

---

### 3️⃣ Pintado de productos – **1,00 punto**

| Nivel         | Descripción                                                    | Puntuación |
| ------------- | -------------------------------------------------------------- | ---------- |
| ✔️ Correcto   | Pinta correctamente la lista y gestiona el caso sin resultados | 1,00       |
| ◑ Parcial     | Pinta productos pero con errores estructurales                 | 0,50       |
| ❌ Incorrecto | No pinta productos o genera errores                            | 0,00       |

---

### 4️⃣ Favoritos (LocalStorage) – **1,25 puntos**

| Nivel         | Descripción                                                            | Puntuación |
| ------------- | ---------------------------------------------------------------------- | ---------- |
| ✔️ Correcto   | Añade y quita favoritos, guarda en `localStorage` y mantiene el estado | 1,25       |
| ◑ Parcial     | Lógica incompleta o errores menores                                    | 0,75       |
| ❌ Incorrecto | No funciona o rompe la aplicación                                      | 0,00       |

---

### 5️⃣ Delegación de eventos – **0,50 puntos**

| Nivel         | Descripción                                           | Puntuación |
| ------------- | ----------------------------------------------------- | ---------- |
| ✔️ Correcto   | Delegación bien implementada (botón, clase y `value`) | 0,50       |
| ❌ Incorrecto | Delegación incorrecta o inexistente                   | 0,00       |

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
