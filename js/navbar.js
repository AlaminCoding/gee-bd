const nav = document.querySelector(".main-nav");
const toggler = document.querySelector(".toggler");
const menu = document.getElementById("menu");

let menuOpen = false;

toggler.addEventListener("click", function () {
  if (menuOpen === false) {
    menu.classList.add("open-menu");
    toggler.innerHTML = `<i class="bi bi-x-square"></i>`;
    document.body.style.position = "fixed";
    menuOpen = true;
  } else {
    menu.classList.remove("open-menu");
    toggler.innerHTML = `<i class="bi bi-list"></i>`;
    document.body.style.position = "static";
    menuOpen = false;
  }
});
