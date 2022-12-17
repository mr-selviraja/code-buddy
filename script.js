const btnNavToggle = document.getElementById("btn-nav-toggle");
const navEl = document.getElementById("nav-el");

// TOGGLING NAVBAR
btnNavToggle.addEventListener("click", () => {
  btnNavToggle.classList.toggle("active");
  navEl.classList.toggle("active");
});
