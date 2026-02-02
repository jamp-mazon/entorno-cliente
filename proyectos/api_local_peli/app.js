"use strict";

// ===========================
// ESTADO
// ===========================
let productos = [];             // Array de productos
let productosFiltrados = [];   
let favoritosProductos = [];    // Favoritos productos

let peliculas = [];             // Array resultados búsqueda películas
let favoritosPeliculas = [];    // Favoritos películas

// ===========================
// REFERENCIAS DOM
// ===========================
const inputProducto = document.getElementById("inputProducto");
const listaProductosDiv = document.getElementById("listaProductos");
const totalProductosSpan = document.getElementById("totalProductos");
const favoritosProductosDiv = document.getElementById("favoritosProductos");

const inputPelicula = document.getElementById("inputPelicula");
const btnBuscar = document.getElementById("btnBuscar");
const resultadosDiv = document.getElementById("resultados");
const favoritosPeliculasDiv = document.getElementById("favoritosPeliculas");
const totalFavoritosSpan = document.getElementById("totalFavoritos");

// ===========================
// FUNCIONES PRODUCTOS
// ===========================
async function cargarProductos() {
  // TODO: Cargar productos desde JSON
}

function filtrarProductos(texto) {
  // TODO: Filtrar productos por texto
}

function calcularTotal(lista) {
  // TODO: Calcular total precios de la lista
}

function pintarProductos(lista) {
  // TODO: Pintar productos en el DOM
}

function guardarFavoritosProductos() {
  // TODO: Guardar favoritos productos en LocalStorage
}

function cargarFavoritosProductos() {
  // TODO: Cargar favoritos productos desde LocalStorage
}

function pintarFavoritosProductos() {
  // TODO: Pintar favoritos productos en el DOM
}

function eliminarFavoritoProducto(id) {
  // TODO: Eliminar un producto de favoritos
}

// ===========================
// FUNCIONES PELÍCULAS
// ===========================
async function buscarPeliculas() {
  // TODO: Buscar películas usando API OMDb
}

function pintarPeliculas(lista) {
  // TODO: Pintar resultados películas en el DOM
}

function cargarFavoritosPeliculas() {
  // TODO: Cargar favoritos películas desde LocalStorage
}

function guardarFavoritosPeliculas() {
  // TODO: Guardar favoritos películas en LocalStorage
}

function pintarFavoritosPeliculas() {
  // TODO: Pintar favoritos películas en el DOM
}

function calcularTotalFavoritosPeliculas() {
  // TODO: Contar total de favoritos películas
}

function eliminarFavoritoPelicula(imdbID) {
  // TODO: Eliminar película de favoritos
}

// ===========================
// EVENTOS
// ===========================


// ===========================
// INICIO
// ===========================

