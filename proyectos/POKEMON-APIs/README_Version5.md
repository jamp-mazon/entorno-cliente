# 🔴 Ejercicio Simple de Async/Await y Fetch API

## Descripción del Proyecto

Este es un ejercicio básico para aprender **programación asíncrona** en JavaScript usando `async/await` y consumir una API con `fetch()`. Crearás un buscador simple de Pokémon usando la [PokéAPI](https://pokeapi.co/).

---

## 🎯 Objetivos de Aprendizaje

Al completar este ejercicio, aprenderás a:

- Usar funciones asíncronas con `async/await`
- Consumir una API con `fetch()`
- Manejar errores con `try/catch`
- Trabajar con datos JSON
- Mostrar información de forma dinámica

---

## 📁 Estructura del Proyecto

```
ejercicio-pokemon-simple/
│
├── index.html          # Estructura HTML
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para completar
└── README.md           # Instrucciones
```

---

## 🚀 Instrucciones

### Paso 1: Crear los archivos

1. Crea una carpeta llamada `ejercicio-pokemon-simple`
2. Crea estos archivos dentro: 
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

### Paso 2: Copiar el código base

1. Copia el HTML en `index.html`
2. Copia el CSS en `styles.css`
3. Copia el JavaScript (con TODOs) en `script.js`

### Paso 3: Completar el JavaScript

Abre `script.js` y completa las funciones siguiendo los comentarios TODO.  El flujo de la aplicación debe ser:

1. **Obtener el nombre del Pokémon** que el usuario escribió en el input
2. **Validar** que el input no esté vacío
3. **Mostrar un indicador de carga** mientras se hace la petición
4. **Construir la URL** de la API con el nombre del Pokémon
5. **Hacer la petición** a la API usando `fetch()` con `await`
6. **Verificar** que la respuesta sea exitosa
7. **Convertir la respuesta** a formato JSON
8. **Mostrar los datos** del Pokémon en la pantalla
9. **Manejar errores** si algo sale mal (Pokémon no encontrado, problemas de conexión, etc.)
10. **Ocultar el indicador de carga** al finalizar

### Paso 4: Probar la aplicación

1. Abre `index.html` en tu navegador
2. Prueba buscar estos Pokémon:
   - `pikachu`
   - `charizard`
   - `mewtwo`
   - `25` (también puedes buscar por número)
3. Prueba buscar algo que no existe:  `asdfgh`
4. Verifica que aparezca el mensaje de error correspondiente

---

## 🔍 Conceptos Clave

### ¿Qué es async/await? 

`async/await` es una forma moderna de trabajar con código asíncrono en JavaScript.  Permite escribir código que parece síncrono (secuencial) pero que en realidad espera a que operaciones lentas (como peticiones HTTP) terminen.

**Diferencia entre código síncrono y asíncrono:**

```javascript
// Síncrono (bloquea la ejecución)
const resultado = calcular(); // Espera a que termine
console. log(resultado);

// Asíncrono (no bloquea)
async function obtenerDatos() {
    const datos = await fetch(url); // Espera, pero no bloquea
    console.log(datos);
}
```

**Características:**
- Una función debe declararse con `async` para poder usar `await` dentro
- `await` solo funciona dentro de funciones `async`
- `await` pausa la ejecución hasta que la promesa se resuelva
- Hace el código más legible que usar `.then()` y `.catch()`

### ¿Qué es fetch()?

`fetch()` es una función nativa de JavaScript que permite hacer peticiones HTTP a APIs o servidores para obtener o enviar datos.

**Características:**
- Devuelve una **promesa** que se resuelve con la respuesta
- La respuesta debe convertirse a JSON con `.json()`
- Requiere manejar errores adecuadamente
- No lanza error automáticamente con códigos de estado HTTP 4xx o 5xx

**Uso básico:**
```javascript
const respuesta = await fetch(url);
const datos = await respuesta. json();
```

### ¿Qué es try/catch?

`try/catch` es una estructura que permite capturar y manejar errores de forma controlada, evitando que la aplicación se rompa.

**Estructura:**
- **try**:  Bloque donde colocas código que puede fallar
- **catch**: Bloque que se ejecuta si hay un error
- **finally**: Bloque que siempre se ejecuta (opcional)

**Cuándo usar try/catch:**
- Al hacer peticiones HTTP que pueden fallar
- Al trabajar con datos que pueden no existir
- Al realizar operaciones que pueden lanzar excepciones

### ¿Qué es la PokéAPI?

La PokéAPI es una API REST gratuita que proporciona información sobre Pokémon.  No requiere autenticación ni API keys.

**Endpoint para obtener un Pokémon:**
```
https://pokeapi.co/api/v2/pokemon/{nombre-o-id}
```

**Estructura de respuesta (simplificada):**
```javascript
{
    "id": 25,
    "name": "pikachu",
    "sprites":  {
        "front_default":  "url-de-la-imagen.png"
    },
    "height": 4,
    "weight": 60,
    "types": [... ],
    "stats": [...]
}
```

### Manipulación de clases CSS

Para mostrar y ocultar elementos, usarás `classList`:

- `element.classList.add('hidden')` - Agrega una clase
- `element.classList.remove('hidden')` - Remueve una clase
- `element.classList.toggle('hidden')` - Alterna (agrega o quita)

---

## ✅ Criterios de Evaluación

Tu ejercicio está completo cuando:

- [ ] Puedes buscar un Pokémon por nombre
- [ ] Puedes buscar un Pokémon por número
- [ ] Se muestra la imagen del Pokémon
- [ ] Se muestra el nombre del Pokémon
- [ ] Se muestra el número del Pokémon
- [ ] Aparece "Buscando..." mientras carga
- [ ] Se muestra un error si el Pokémon no existe
- [ ] Funciona la búsqueda con el botón
- [ ] Funciona la búsqueda presionando Enter
- [ ] El código usa async/await correctamente
- [ ] Los errores se manejan con try/catch

---

## 🎨 Retos Adicionales (Opcional)

Si terminas el ejercicio básico, intenta agregar:

### Nivel Fácil
- [ ] Mostrar el peso y altura del Pokémon
- [ ] Limpiar el input después de cada búsqueda
- [ ] Agregar una animación al mostrar el resultado

### Nivel Medio
- [ ] Mostrar los tipos del Pokémon (fire, water, etc.)
- [ ] Agregar un botón para buscar un Pokémon aleatorio (1-898)
- [ ] Mostrar una o dos estadísticas básicas (HP, Ataque)

### Nivel Difícil
- [ ] Guardar los últimos 5 Pokémon buscados en LocalStorage
- [ ] Mostrar sprites alternativos (back, shiny)
- [ ] Crear un sistema de favoritos

---

## 🐛 Problemas Comunes y Soluciones

### Problema: "Pokémon no encontrado" siempre

**Posibles causas:**
- El nombre del Pokémon no está en minúsculas
- Hay espacios en blanco antes o después del nombre
- La URL de la API está mal construida

**Solución:** Convierte el input a minúsculas y elimina espacios con `.toLowerCase()` y `.trim()`

### Problema: La imagen no aparece

**Posibles causas:**
- La ruta al sprite no es correcta
- El elemento `src` no se está actualizando
- La respuesta de la API no tiene el sprite

**Solución:** Verifica la estructura del objeto que devuelve la API y asegúrate de acceder correctamente a `pokemon.sprites.front_default`

### Problema: "await is only valid in async functions"

**Causa:** Estás usando `await` en una función que no tiene `async`

**Solución:** Agrega la palabra clave `async` antes de la declaración de la función

### Problema: El botón no hace nada

**Posibles causas:**
- El event listener no está configurado
- El nombre de la función en el listener es incorrecto
- Hay un error en la consola que detiene la ejecución

**Solución:** Verifica que hayas agregado correctamente el `addEventListener` y revisa la consola del navegador (F12) para ver si hay errores

### Problema: "Failed to fetch" o error de CORS

**Posibles causas:**
- No hay conexión a internet
- La URL de la API está mal escrita
- Problemas del servidor de la API

**Solución:** Verifica tu conexión, asegúrate de que la URL sea exactamente `https://pokeapi.co/api/v2/pokemon/... `

---

## 💡 Consejos

- **Usa la consola del navegador (F12):** Te ayudará a ver errores y el contenido de las variables
- **Haz `console.log(datos)`:** Para ver qué estructura tiene el objeto que devuelve la API
- **Lee los mensajes de error:** Te dicen exactamente qué está fallando
- **Prueba primero con nombres simples:** Como "pikachu" o "ditto" antes de nombres complicados
- **Revisa la documentación de la PokéAPI:** Allí puedes ver ejemplos de respuestas

---

## 📚 Recursos Adicionales

- [PokéAPI Documentación](https://pokeapi.co/docs/v2)
- [MDN - Async/Await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN - Try/Catch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch)
- [MDN - Promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

## 📝 Licencia

Este material educativo es de uso libre para fines académicos. 

---

**¡Buena suerte!  🚀**

Si tienes dudas, consulta con tu profesor o revisa los recursos adicionales.