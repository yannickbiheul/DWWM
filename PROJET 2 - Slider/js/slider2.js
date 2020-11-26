let images = document.getElementsByClassName("image");

for (let i = 0; i < images.length; i++) {
    if (i == 0) {
        images[i].style.display = "flex";
    } else {
        images[i].style.display = "none";
    }
}