(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Configura o link do WhatsApp. Substitua o numero abaixo pelo numero oficial.
  // Formato: DDI + DDD + numero, apenas digitos. Ex.: 55 11 91234-5678 -> 5511912345678
  const WHATSAPP_NUMBER = "5585992831740"; // TODO: substituir
  const DEFAULT_MESSAGE = "Ol%C3%A1%2C%20vim%20pelo%20Linktree%20da%20Novix!";

  const whatsappEl = document.getElementById("whatsapp-link");
  if (whatsappEl) {
    const hasNumber = /^\d{10,15}$/.test(WHATSAPP_NUMBER);
    const href = hasNumber
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`
      : `https://wa.me/?text=${DEFAULT_MESSAGE}`; // fallback: abre o WhatsApp com mensagem
    whatsappEl.setAttribute("href", href);
  }

  // No mobile, emula um estado "touch-active" para dar feedback ao toque
  const cards = Array.from(document.querySelectorAll(".card"));
  let touchTimeoutId = null;
  cards.forEach((card) => {
    card.addEventListener(
      "touchstart",
      () => {
        card.classList.add("touch-active");
        if (touchTimeoutId) clearTimeout(touchTimeoutId);
      },
      { passive: true }
    );

    card.addEventListener(
      "touchend",
      () => {
        touchTimeoutId = setTimeout(
          () => card.classList.remove("touch-active"),
          150
        );
      },
      { passive: true }
    );
  });
})();
