(() => {
  // =========================
  // MODAL
  // =========================
  const modalRoot = document.querySelector("[data-modal-root]");
  const modalPanel = document.querySelector("[data-modal-panel]");
  const modalImage = document.querySelector("[data-modal-image]");
  const modalTitle = document.querySelector("#modal-heading");

  if (!modalRoot || !modalPanel || !modalImage || !modalTitle) return;

  let previouslyFocusedElement = null;

  const openModalButtons = document.querySelectorAll("[data-modal-open]");
  const closeModalTriggers = document.querySelectorAll("[data-modal-close]");

  // Clases utilitarias para mostrar/ocultar cuando el modal está maquetado solo con Tailwind
  const hiddenClasses = ["opacity-0", "pointer-events-none", "invisible"];
  const visibleClasses = ["opacity-100", "pointer-events-auto", "visible"];

  // Aseguramos estado inicial oculto si el HTML no lo tenía
  if (!modalRoot.classList.contains("is-open")) {
    hiddenClasses.forEach((cl) => modalRoot.classList.add(cl));
    modalPanel.classList.add("translate-y-3", "scale-95", "opacity-0");
  }

  function openModal({ titleText, imageUrl }) {
    previouslyFocusedElement = document.activeElement;

    modalTitle.textContent = titleText || "Detalle";
    modalImage.src = imageUrl || "";
    modalImage.style.display = imageUrl ? "block" : "none";

    modalRoot.setAttribute("aria-hidden", "false");
    modalRoot.classList.add("is-open");

    hiddenClasses.forEach((cl) => modalRoot.classList.remove(cl));
    visibleClasses.forEach((cl) => modalRoot.classList.add(cl));

    // animación simple del panel si se usan utilidades de Tailwind
    modalPanel.classList.add("transition", "duration-300", "ease-out");
    modalPanel.classList.remove("translate-y-3", "scale-95", "opacity-0");
    modalPanel.classList.add("translate-y-0", "scale-100", "opacity-100");

    document.documentElement.classList.add("modal-open"); // Para bloquear scroll si quieres
    modalPanel.focus();
  }

  function closeModal() {
    modalRoot.setAttribute("aria-hidden", "true");
    modalRoot.classList.remove("is-open");

    visibleClasses.forEach((cl) => modalRoot.classList.remove(cl));
    hiddenClasses.forEach((cl) => modalRoot.classList.add(cl));

    modalPanel.classList.add("translate-y-3", "scale-95", "opacity-0");
    modalPanel.classList.remove("translate-y-0", "scale-100", "opacity-100");

    document.documentElement.classList.remove("modal-open");

    if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === "function") {
      previouslyFocusedElement.focus();
    }
  }

  openModalButtons.forEach((buttonElement) => {
    buttonElement.addEventListener("click", () => {
      const titleText = buttonElement.getAttribute("data-modal-title");
      const imageUrl = buttonElement.getAttribute("data-modal-image");
      openModal({ titleText, imageUrl });
    });
  });

  closeModalTriggers.forEach((closeElement) => {
    closeElement.addEventListener("click", closeModal);
  });

  window.addEventListener("keydown", (keyboardEvent) => {
    const isModalOpen = modalRoot.classList.contains("is-open");
    if (!isModalOpen) return;

    if (keyboardEvent.key === "Escape") {
      closeModal();
    }
  });

  // =========================
  // ANIMACIONES (añadir clases)
  // =========================
  const previewElement = document.querySelector(".animation-preview");
  const animationButtons = document.querySelectorAll("[data-animate]");

  if (previewElement && animationButtons.length > 0) {
    function clearAnimationClasses() {
      previewElement.classList.remove(
        "anim-bounce",
        "anim-shake",
        "anim-pulse",
        "anim-flip"
      );
    }

    function runAnimation(animationName) {
      clearAnimationClasses();

      // Forzamos “reflow” para que la animación se pueda re-disparar
      void previewElement.offsetWidth;

      const animationClassByName = {
        bounce: "anim-bounce",
        shake: "anim-shake",
        pulse: "anim-pulse",
        flip: "anim-flip"
      };

      const classToAdd = animationClassByName[animationName];
      if (classToAdd) previewElement.classList.add(classToAdd);
    }

    animationButtons.forEach((buttonElement) => {
      buttonElement.addEventListener("click", () => {
        const animationName = buttonElement.getAttribute("data-animate");

        if (animationName === "reset") {
          clearAnimationClasses();
          return;
        }

        runAnimation(animationName);
      });
    });

    // Cuando termine la animación, puedes quitar la clase si quieres:
    previewElement.addEventListener("animationend", () => {
      // Si prefieres que se quede la clase, comenta esto:
      // clearAnimationClasses();
    });
  }
})();
