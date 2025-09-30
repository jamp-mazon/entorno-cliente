# Copilot Instructions for entorno-cliente

## Descripción general
Este repositorio contiene prácticas y ejercicios de JavaScript y HTML para el aprendizaje de programación en el entorno cliente. La estructura está organizada por temas y ejercicios, cada uno en su propia carpeta, facilitando la navegación y el trabajo incremental.

## Estructura del proyecto
- `Practicas_cliente/` es la carpeta principal de trabajo.
  - `index.html`, `script.js`, `estilos.css`: archivos base para pruebas generales.
  - `ejercicios/`: contiene subcarpetas para cada conjunto de ejercicios temáticos (por ejemplo, `bucles/`, `d_operadores/`, etc.).
    - Cada ejercicio suele tener su propio `index.html` y `script.js`.

## Patrones y convenciones
- Cada ejercicio es autocontenible: los archivos HTML y JS de cada ejercicio no dependen de los de otros ejercicios.
- El código JavaScript se escribe directamente en archivos `script.js` o dentro de etiquetas `<script>` en el HTML.
- No se utilizan frameworks ni herramientas de build: todo es HTML, CSS y JS puro.
- Los estilos pueden estar en archivos CSS globales o en etiquetas `<style>` dentro del HTML.
- Los nombres de carpetas y archivos pueden contener espacios y caracteres especiales, por lo que los scripts deben manejar rutas cuidadosamente.

## Flujos de trabajo
- No hay scripts de build, test ni automatización: simplemente abre el archivo `index.html` correspondiente en el navegador para probar cada ejercicio.
- No existen dependencias externas ni integración con npm, node, etc.
- No hay convenciones de testing automatizado; las pruebas son manuales.

## Ejemplo de patrón de ejercicio
```
ejercicios/bucles/ejercicio 3/
  index.html  <-- HTML con posible <script> embebido
  (opcional) script.js  <-- JS separado si es necesario
```

## Recomendaciones para agentes AI
- Mantén el código simple y didáctico, orientado a la comprensión de conceptos básicos.
- No introduzcas herramientas externas ni complejidad innecesaria.
- Si creas nuevos ejercicios, sigue la estructura de carpetas existente.
- Usa español para los comentarios y mensajes, salvo que el ejercicio indique lo contrario.

## Archivos clave
- `Practicas_cliente/index.html`, `script.js`: ejemplos generales.
- `Practicas_cliente/ejercicios/`: fuente principal de ejercicios temáticos.

---
¿Falta algún flujo, convención o patrón importante? Indícalo para mejorar estas instrucciones.
