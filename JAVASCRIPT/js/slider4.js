// Déclaration d'un index
let index = 1;


// Lancement de la fonction lancerSlider
lancerSlider(index);

// Création de la fonction avancerReculer
function avancerReculer(n) {
    lancerSlider(index += n);
}


// Création de la fonction lancerSlider
function lancerSlider(n) {
    let i = 0;
    let sliders = document.getElementsByClassName("slider"); // Créer un tableau des sliders
    // Repérage de l'index
    if (n > sliders.length) {
        index = 1;
    }
    if (n < 1) {
        index = sliders.length;
    }
    // Boucle sur le tableau sliders pour effacer toutes les divs
    for (i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }
    // Affichage du slider correspondant à l'index - 1
    sliders[index-1].style.display = "block";
}


