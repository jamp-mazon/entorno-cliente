¡Perfecto! Te hago un **README** explicando la **función de cada función y su rol dentro del ejercicio**, sin entrar en los pasos internos, solo lo que **se espera que hagan**:

---

# MiniTienda y Buscador de Películas - README de Funciones

Este proyecto combina dos módulos: **gestión de productos** y **buscador de películas con favoritos**, usando **JavaScript**, **DOM**, **LocalStorage**, y **fetch / async**. A continuación se describe la función y propósito de cada función en el proyecto.

---

## ✅ Funciones del módulo de productos

* **cargarProductos()**
  Se encarga de cargar la lista de productos desde un archivo JSON y preparar el estado inicial del sistema.

* **filtrarProductos(texto)**
  Devuelve un listado de productos filtrado según el texto ingresado por el usuario; si el texto está vacío, devuelve todos los productos.

* **calcularTotal(lista)**
  Calcula y devuelve la suma de los precios de todos los productos de la lista proporcionada.

* **pintarProductos(lista)**
  Muestra en el DOM los productos de la lista proporcionada, incluyendo su nombre, precio y botón para agregarlos a favoritos.

* **guardarFavoritosProductos()**
  Guarda la lista de productos marcados como favoritos en LocalStorage para mantenerlos persistentes entre recargas.

* **cargarFavoritosProductos()**
  Recupera la lista de productos favoritos desde LocalStorage y actualiza la vista correspondiente.

* **pintarFavoritosProductos()**
  Muestra los productos que han sido marcados como favoritos en el DOM, incluyendo un botón para eliminarlos de la lista de favoritos.

* **eliminarFavoritoPelicula(imdbID)**
    Elimina una película de la lista de favoritos según su imdbID, actualiza LocalStorage y refresca la vista de favoritos y resultados.

---

## ✅ Funciones del módulo de películas

* **cargarFavoritosPeliculas()**
  Carga las películas favoritas desde LocalStorage y actualiza la visualización en pantalla.

* **guardarFavoritosPeliculas()**
  Guarda las películas marcadas como favoritas en LocalStorage para mantenerlas persistentes.

* **calcularTotalFavoritosPeliculas()**
  Devuelve el total de películas marcadas como favoritas (usualmente para mostrarlo en la interfaz).

* **buscarPeliculas()**
  Realiza una búsqueda en la API de OMDb según el título ingresado por el usuario y guarda los resultados en el estado.

* **pintarPeliculas(lista)**
  Muestra en pantalla los resultados de la búsqueda de películas, incluyendo título, año, póster y botón para agregarlas a favoritos.

* **pintarFavoritosPeliculas()**
  Muestra las películas marcadas como favoritas, con información básica y botón para eliminarlas de la lista de favoritos.

---

## ✅ Funciones de eventos

* **inputProducto.addEventListener("input", …)**
  Permite filtrar y actualizar la lista de productos en tiempo real según lo que escriba el usuario.

* **btnBuscar.addEventListener("click", …)**
  Ejecuta la búsqueda de películas en la API al hacer clic en el botón de búsqueda.

* **inputPelicula.addEventListener("keydown", …)**
  Permite buscar películas al presionar la tecla Enter en el campo de búsqueda.

---

## ✅ Resumen general

El proyecto permite al usuario:

1. Buscar productos y películas.
2. Filtrar productos por texto ingresado.
3. Ver los resultados en pantalla con nombre, precio y póster (en el caso de películas).
4. Marcar productos y películas como favoritos.
5. Eliminar favoritos cuando lo desee.
6. Mantener los favoritos persistentes usando LocalStorage, incluso después de recargar la página.

Cada función tiene como objetivo **gestionar datos en memoria, actualizar la vista del DOM y mantener la persistencia** mediante LocalStorage.

---
