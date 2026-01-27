const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

function abrirModal() {
  overlay.classList.remove("hidden");
  modal.classList.remove("opacity-0", "scale-95");
  modal.classList.add("opacity-100", "scale-100");
}

function cerrarModal() {
  modal.classList.remove("opacity-100", "scale-100");
  modal.classList.add("opacity-0", "scale-95");
  setTimeout(function () {
    overlay.classList.add("hidden");
  }, 300);
}

openBtn.addEventListener("click", function () {
  abrirModal();
});

closeBtn.addEventListener("click", function () {
  cerrarModal();
});
  
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    cerrarModal();
  }
});
