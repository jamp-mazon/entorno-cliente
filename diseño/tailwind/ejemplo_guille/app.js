document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.querySelector("[data-modal-overlay]");
  const modal = document.querySelector("[data-modal]");
  const title = document.querySelector("[data-modal-title]");
  const image = document.querySelector("[data-modal-image]");
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeBtn = document.querySelector("[data-modal-close]");


  /* =========================
     ABRIR
  ========================= */
  function openModal({ title: t, image: img }) {
    title.textContent = t;
    image.src = img;

    overlay.classList.remove("hidden");

    requestAnimationFrame(() => {
      modal.classList.remove("opacity-0", "scale-95");
      modal.classList.add("opacity-100", "scale-100");
    });
  }


  /* =========================
     CERRAR
  ========================= */
  function closeModal() {
    modal.classList.remove("opacity-100", "scale-100");
    modal.classList.add("opacity-0", "scale-95");

    setTimeout(() => {
      overlay.classList.add("hidden");
      image.src = "";
    }, 300);
  }


  /*=========================
     EVENTOS
  ========================= */

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      openModal({
        title: btn.dataset.modalTitle,
        image: btn.dataset.modalImage
      });
    });
  });

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

})