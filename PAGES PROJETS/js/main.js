/* BOUTON BURGER */


// $(".boutonBurger").click(function() {
//     console.log("Coucou");
//     $(".menuBurger").toggle("menuBurgerOpen");
// })

let boutonBurger = document.querySelector(".boutonBurger");
let menuBurger = document.querySelector(".menuBurger");
let elts = document.querySelectorAll(".elt");

for (let i = 0; i < elts.length; i++) {
    elts[i].addEventListener("click", function() {
        menuBurger.classList.toggle("menuBurgerOpen");
    })
}

boutonBurger.addEventListener("click", function () {
    menuBurger.classList.toggle("menuBurgerOpen");
});



$(".navAccueil").click(function() {
    $("#demarrage").css({
        display: "flex"
    });
    $("#slider").css({
        display: "none"
    });
    $("#retroMachin").css({
        display: "none"
    });
    $("#monCV").css({
        display: "none"
    });
})

$(".navCV").click(function() {
    $("#demarrage").css({
        display: "none"
    });
    $("#slider").css({
        display: "none"
    });
    $("#retroMachin").css({
        display: "none"
    });
    $("#monCV").css({
        display: "flex"
    });
})

$(".navSlider").click(function() {
    $("#demarrage").css({
        display: "none"
    });
    $("#slider").css({
        display: "flex"
    });
    $("#retroMachin").css({
        display: "none"
    });
    $("#monCV").css({
        display: "none"
    });
})

$(".navRetro").click(function() {
    $("#demarrage").css({
        display: "none"
    });
    $("#slider").css({
        display: "none"
    });
    $("#retroMachin").css({
        display: "flex"
    });
    $("#monCV").css({
        display: "none"
    });
})



/* NAVIGATION */

$(".lienAccueil").click(function() {
    $("#demarrage").css({
        display: "flex"
    });
    $("#monCV").css({
        display: "none"
    });
    $("#slider").css({
        display: "none"
    });
    $("#retroMachin").css({
        display: "none"
    });
})

$(".lienCV").click(function() {
    $("#demarrage").css({
        display: "none"
    });
    $("#slider").css({
        display: "none"
    });
    $("#retroMachin").css({
        display: "none"
    });
    $("#monCV").css({
        display: "flex"
    });
})

$(".lienSlider").click(function() {
    $("#demarrage").css({
        display: "none"
    });
    $("#slider").css({
        display: "flex"
    });
    $("#retroMachin").css({
        display: "none"
    });
    $("#monCV").css({
        display: "none"
    });
})

$(".lienRetro").click(function() {
    $("#demarrage").css({
        display: "none"
    });
    $("#slider").css({
        display: "none"
    });
    $("#retroMachin").css({
        display: "flex"
    });
    $("#monCV").css({
        display: "none"
    });
})

$(".lienHorloge").click(function() {
    $("#demarrage").css({
        display: "none"
    });
    $("#slider").css({
        display: "none"
    });
    $("#retroMachin").css({
        display: "none"
    });
    $("#monCV").css({
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


