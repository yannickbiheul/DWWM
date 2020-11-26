
// $(".boutonBurger").click(function() {
//     $(".menuBurger").toggle("menuBurgerOpen");
// })

let boutonBurger = document.querySelector(".boutonBurger");
let menuBurger = document.querySelector(".menuBurger");

boutonBurger.addEventListener("click", function() {
    menuBurger.classList.toggle("menuBurgerOpen");
});