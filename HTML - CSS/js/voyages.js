let index = 1;
lancerSlider(index);

function avancerReculer(n) {
    lancerSlider(index += n);
}

function lancerSlider(n) {
    let i;
    let sliders = document.getElementsByClassName("slider");
    if (n > sliders.length) {
        index = 1;
    }
    if (n < 1) {
        index = sliders.length;
    }
    for (i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }
    sliders[index-1].style.display = "block";
}


