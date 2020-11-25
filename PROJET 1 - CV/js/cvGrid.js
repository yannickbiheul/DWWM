let boutonBurger = document.querySelector(".boutonBurger");
let menuBurger = document.querySelector(".menuBurger");
let elts = document.querySelectorAll(".elt");
let ligne1 = document.querySelector(".ligne");

boutonBurger.addEventListener("click", toggleMenu);

for (let i = 0; i < elts.length; i++) {
    elts[i].addEventListener("click", toggleMenu);
}

function toggleMenu() {
    menuBurger.classList.toggle("menuBurgerOpen");
}