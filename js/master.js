const navbar = document.querySelector("#navbar");
const abrirNav = document.querySelector("#abrirNavbar");
const cerrarNav = document.querySelector("#cerrarNavbar");

abrirNav.addEventListener("click", () => {
  navbar.classList.add("navbarVisible");
});

cerrarNav.addEventListener("click", () => {
  navbar.classList.remove("navbarVisible");
});
