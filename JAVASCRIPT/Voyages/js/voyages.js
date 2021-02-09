let left = document.querySelector(".left");
let right = document.querySelector(".right");
let container = document.querySelector("#main-image");
let images = ['images/main1.jpg', 'images/bled.jpg', 'images/forest.jpg', 'images/mountain.jpg', 'images/scotland.jpg', 'images/sunset.jpg'];
let titre = document.querySelector(".wrapper>h2");
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
    if (index == 3 || index == 5 || index == 6) {
        titre.style.color = "#fff";
    } else {
        titre.style.color = "#444";
    }
}


