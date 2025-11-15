/**
 * menu.js
 * Controle acessível do menu mobile
 * Versão: Entrega IV — ONG Conecta
 * Autor: Lucas Silva de Oliveira
 */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const links = menu.querySelectorAll("a");

  // Segurança: se não existir menu, não executa.
  if (!menuToggle || !menu) return;

  /**
   * Alterna abertura e fechamento do menu mobile
   */
  menuToggle.addEventListener("click", () => {
    const isActive = menu.classList.toggle("active");
    menuToggle.classList.toggle("open");

    // Acessibilidade: controla aria-expanded e aria-label
    menuToggle.setAttribute("aria-expanded", isActive.toString());
    menuToggle.setAttribute(
      "aria-label",
      isActive ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );

    // Foco automático no primeiro link ao abrir
    if (isActive) {
      setTimeout(() => links[0].focus(), 150);
    }
  });

  /**
   * Fecha o menu quando o usuário clica em um link
   */
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  /**
   * Fecha o menu com tecla ESC
   * — Requisito WCAG 2.1 (navegação por teclado)
   */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      menu.classList.remove("active");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");

      // Foco volta para o botão para manter acessibilidade
      menuToggle.focus();
    }
  });
});
