const menuButton = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", navLinks.classList.contains("open"));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}
