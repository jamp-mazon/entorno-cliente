# EXAMEN DIW – Tailwind CSS
## Maquetación de una web con tarjetas y modal

---

## 🎯 Objetivo

Maquetar una **página web completa** usando **Tailwind CSS**, aplicando correctamente:

- la estructura de la página (header, main y footer)
- la distribución de tarjetas
- estilos visuales coherentes
- un **modal reutilizable** ya conectado con JavaScript

El ejercicio se centra **exclusivamente en DIW**.  
La lógica JavaScript **ya está resuelta** y no debe modificarse.

---

## 📌 Requisitos obligatorios

1. La página debe incluir:
   - un **header** con efecto *glassmorphism*
   - una sección principal con **6 tarjetas**
   - un **footer** estructurado
2. Las tarjetas deben mostrarse:
   - 1 por fila en móvil
   - 2 por fila en pantallas medianas
   - 3 por fila en pantallas grandes
3. Cada tarjeta debe incluir un botón **“Ver más”** que:
   - abra el modal
   - muestre el contenido correspondiente a esa tarjeta
4. El modal debe:
   - aparecer centrado en la pantalla
   - mostrar un overlay oscuro
   - incluir una animación de entrada y salida
   - cerrarse con el botón **Cerrar** y pulsando fuera
5. **Todo el diseño debe realizarse con Tailwind CSS**

---

## 🚫 Restricciones importantes

- ❌ No se permite usar CSS externo
- ❌ No se permite usar estilos en línea (`style=""`)
- ❌ No se permite modificar el archivo `main.js`
- ❌ No se deben cambiar los IDs ni las clases usadas por JavaScript

El incumplimiento de estas normas puede suponer que el ejercicio **no sea evaluable**.

---

## 🧠 Pistas

- Piensa primero en la **estructura** y después en los estilos
- Usa utilidades de Tailwind para:
  - distribución de elementos
  - espaciado
  - tipografía
  - colores y fondos
  - estados (`hover`, `transition`)
- El efecto *glassmorphism* del header se basa en:
  - fondo semitransparente
  - desenfoque
  - sombra o borde sutil
- El JavaScript **solo añade y quita clases** para mostrar u ocultar el modal

---

## 📂 Archivos del ejercicio

- `index.html` → estructura base (añade aquí las clases de Tailwind)
- `main.js` → lógica del modal (**NO TOCAR**)

---

## 📝 Entrega

- Entrega únicamente los archivos proporcionados
- Comprueba antes de entregar que:
  - la página se visualiza correctamente
  - el modal funciona en todas las tarjetas
  - el código es legible y está ordenado

---

## 📊 Rúbrica de evaluación (5 puntos)

Este ejercicio supone **5 puntos sobre 10** del examen total.

---

### 1️⃣ Estructura general de la página (1,00 punto)

- **1,00** → Header, main y footer correctamente estructurados  
- **0,50** → Estructura incompleta o poco clara  
- **0,00** → Falta alguna sección principal

---

### 2️⃣ Header con glassmorphism (1,00 punto)

- **1,00** → Efecto glassmorphism claro (transparencia + desenfoque) e integrado correctamente  
- **0,50** → Header presente pero efecto incompleto  
- **0,00** → Header sin el efecto solicitado o mal maquetado

---

### 3️⃣ Distribución y maquetación de tarjetas (1,50 puntos)

- **1,50** → 6 tarjetas bien distribuidas y responsive (1 / 2 / 3 por fila)  
- **0,75** → Tarjetas presentes pero con errores de distribución o coherencia  
- **0,00** → Faltan tarjetas o no se cumple la distribución requerida

---

### 4️⃣ Modal reutilizable (1,00 punto)

- **1,00** → Modal funciona correctamente en todas las tarjetas  
- **0,50** → Modal funciona parcialmente o con errores visuales leves  
- **0,00** → Modal no funciona o no está correctamente integrado

---

### 5️⃣ Uso de Tailwind CSS (0,50 puntos)

- **0,50** → Uso correcto y coherente de Tailwind  
- **0,25** → Uso con errores menores o poco ordenado  
- **0,00** → Uso incorrecto o incumplimiento de las normas

---

## ⚠️ Errores comunes a evitar

- No completar las 6 tarjetas
- Romper IDs necesarios para el modal
- No aplicar responsive
- Usar clases sin coherencia
- Modificar el archivo `main.js`

---

💡 **Consejo final**  
No se busca una web “perfecta”, sino una **maquetación correcta, clara y coherente**, aplicando lo trabajado en clase.
