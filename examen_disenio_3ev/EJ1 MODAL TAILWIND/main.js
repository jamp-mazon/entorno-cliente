"use strict";

const gridTarjetas = document.getElementById("gridTarjetas");

const closeBtn = document.getElementById("cerrarModal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function abrirModal() {
  overlay.classList.remove("hidden");

  modal.classList.remove("opacity-0");
  modal.classList.remove("scale-95");
  modal.classList.add("opacity-100");
  modal.classList.add("scale-100");
}

function cerrarModal() {
  modal.classList.remove("opacity-100");
  modal.classList.remove("scale-100");
  modal.classList.add("opacity-0");
  modal.classList.add("scale-95");

  setTimeout(function () {
    overlay.classList.add("hidden");
  }, 300);
}

function cargarContenidoEnModal(id) {
  const bloque = document.getElementById("contenido-" + id);

  if (!bloque) {
    modalBody.innerHTML =
      '<p class="text-slate-700">No se encontró el contenido de esta tarjeta.</p>';
    return;
  }

  modalBody.innerHTML = bloque.innerHTML;
}

// Delegación de eventos: un solo listener para todas las tarjetas
gridTarjetas.addEventListener("click", function (event) {
  if (event.target.matches(".btn-abrir")) {
    const id = event.target.value; // "1", "2", ...
    cargarContenidoEnModal(id);
    abrirModal();
  }
});

closeBtn.addEventListener("click", function () {
  cerrarModal();
});

overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    cerrarModal();
  }
});