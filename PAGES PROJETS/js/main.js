/* BOUTON BURGER */


// $(".boutonBurger").click(function() {
//     console.log("Coucou");
//     $(".menuBurger").toggle("menuBurgerOpen");
// })

let boutonBurger = document.querySelector(".boutonBurger");
let menuBurger = document.querySelector(".menuBurger");

boutonBurger.addEventListener("click", function () {
    menuBurger.classList.toggle("menuBurgerOpen");
});



/* NAVIGATION */

$(".lienCV").click(function() {
    $("#slider").css({
        display: "none"
    });
    $("#retroMachin").css({
        display: "none"
    });
})


$(".lienSlider").click(function() {
    $("#slider").css({
        display: "flex"
    });
    $("#retroMachin").css({
        display: "none"
    });
})

$(".lienRetro").click(function() {
    $("#slider").css({
        display: "none"
    });
    $("#retroMachin").css({
        display: "flex"
    });
})

$(".lienHorloge").click(function() {
    $("#slider").css({
        display: "none"
    });
    $("#retroMachin").css({
        display: "none"
    });
})



/* SLIDER BACKGROUND */

let left = document.querySelector("#btn-1");
let right = document.querySelector("#btn-3");
let container = document.querySelector(".container");
let images = ['images/bled.jpg', 'images/forest.jpg', 'images/mountain.jpg', 'images/scotland.jpg', 'images/sunset.jpg'];
let index = 1;
lancerSlider(index);

function avancerReculer(n) {
    lancerSlider(index += n);
}

function lancerSlider(n) {
    if (n > images.length) {
        index = 1;
    }
    if (n < 1) {
        index = images.length;
    }
    container.style.backgroundImage = `url('${images[index - 1]}')`;
}

// container.style.backgroundImage = `url('${images[0]}')`;


