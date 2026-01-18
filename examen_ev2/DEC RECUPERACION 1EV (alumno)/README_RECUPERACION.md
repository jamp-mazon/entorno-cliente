# 📘 Examen de Recuperación - Entorno Cliente (1ª Evaluación)

## 📋 Información General

**Asignatura:** Desarrollo Web en Entorno Cliente  
**Curso:** 2º DAW (Desarrollo de Aplicaciones Web)  
**Evaluación:** Recuperación 1ª Evaluación  
**Duración:** 2 horas  
**Puntuación Total:** 10 puntos

---

## 🎯 Objetivos de Evaluación

Este examen evalúa tu dominio de JavaScript básico a través de casos reales:

- ✅ **POO básica**: clases, constructores, métodos, propiedades
- ✅ **DOM**: capturar elementos, crear elementos, pintar listados/tablas
- ✅ **Eventos**: click, change, keydown y **delegación de eventos**
- ✅ **Arrays y objetos**: crear, recorrer, buscar, modificar y filtrar
- ✅ **Validación**: campos obligatorios, números válidos, rangos, `isNaN`
- ✅ **Lógica de estados** (máquina simple) en un caso práctico

---

## 📊 Distribución de Ejercicios

| Ejercicio            | Descripción                          | Dificultad          | Tiempo Est. | Puntuación |
| -------------------- | ------------------------------------ | ------------------- | ----------- | ---------- |
| **Ej1 - Asistencia** | Registro rápido de asistencia/puntos | ⭐⭐ Básico         | 25-30 min   | **3 pts**  |
| **Ej2 - Entregas**   | Gestor de entregas de tareas         | ⭐⭐⭐ Medio        | 30-35 min   | **3 pts**  |
| **Ej3 - Soporte**    | Tickets de soporte con estados       | ⭐⭐⭐⭐ Medio-Alto | 45-50 min   | **4 pts**  |

---

## 📝 Descripción de los Ejercicios

### 🟢 Ejercicio 1 - Registro de Asistencia y Puntos (3 puntos)

**Caso de uso:** En una clase, el profe marca la asistencia y suma puntos de participación.

**Funcionalidades:**

- Lista de alumnos (array de objetos/clase)
- Marcar **presente/ausente** y sumar/restar **puntos**
- Pintar una tabla de asistencia (sin ordenar)
- Atajos de teclado para registrar rápido
- Resumen con totales

**Archivos:**

- `asistencia.html` - NO MODIFICAR
- `asistencia.css` - NO MODIFICAR
- `asistencia.js` - **COMPLETAR** siguiendo las instrucciones numeradas

---

### 🟡 Ejercicio 2 - Gestor de Entregas (3 puntos)

**Caso de uso:** Registrar entregas de tareas de un módulo y ver su estado.

**Funcionalidades:**

- Registrar entrega: alumno, tarea, módulo, nota
- Calcular estado: **Aprobado/Suspenso** según nota
- Filtrar por módulo y por “solo aprobadas”
- Resumen con totales (entregas, aprobadas, suspensas)
- Validaciones de formulario

**Archivos:**

- `entregas.html` - NO MODIFICAR
- `entregas.css` - NO MODIFICAR
- `entregas.js` - **COMPLETAR** siguiendo las instrucciones numeradas

---

### 🟠 Ejercicio 3 - Tickets de Soporte (4 puntos)

**Caso de uso:** En el aula de informática se registran tickets (hardware/software) y se gestionan por estados.

**Funcionalidades:**

- Registrar tickets con: descripción, aula, prioridad
- Estado del ticket (máquina simple): **nuevo → en-progreso → cerrado**
- Filtros combinados por aula y estado
- Delegación de eventos para botones de “Avanzar” y “Reabrir”
- Resumen por estados

**Archivos:**

- `soporte.html` - NO MODIFICAR
- `soporte.css` - NO MODIFICAR
- `soporte.js` - **COMPLETAR** siguiendo las instrucciones numeradas

---

## ⚠️ Normas Importantes

### 🚫 Prohibido

1. ❌ Modificar HTML o CSS
2. ❌ Librerías externas
3. ❌ `var`
4. ❌ Bucles infinitos (nada de `while(true)` ni variantes)
5. ❌ “Trucos” avanzados fuera del nivel visto en clase

### ✅ Obligatorio

1. ✅ Usa `let`/`const`
2. ✅ Estructura el código siguiendo las instrucciones numeradas
3. ✅ Recorre arrays con `for` (si usas métodos declarativos, que sea porque tú quieres, no porque sea obligatorio)
4. ✅ Funciones tradicionales con `function` (JS básico)
5. ✅ Probar en navegador y **cero errores en consola** al entregar

### 🟡 Sobre `map/filter/find/reduce`

- **Son opcionales**: puedes usarlos si te sientes cómodo.
- **No los necesitas** para aprobar: con `for` se resuelve todo.

---

## 🔧 Instrucciones de Trabajo

1. Lee el `.js` completo antes de escribir
2. Completa por orden (1 → 2 → 3…)
3. Prueba cada botón/filtro cuando lo implementes
4. Si algo falla: mira consola, usa `console.log()` y revisa IDs

---

## 📤 Entrega

1. Comprime la carpeta completa del examen en ZIP
2. Nombra el ZIP como: **Apellido1_Apellido2_Nombre_NRE.zip**
3. Entrega según indique el profesor

---

## 🍀 ¡Suerte!

Recuerda: primero lo fácil, luego lo difícil, y al final repasar consola y funcionalidades.
