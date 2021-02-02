// Déclaraztion des variables / constantes
const array1 = ["Paragraphe 1", "Paragraphe 2", "Paragraphe 3", "Paragraphe 4", "Paragraphe 5", "Paragraphe 6"];
let button = document.getElementById("ajout");
let div = document.querySelector(".paragraphes");
let i = 0;

// Création de la fonction "ajouter" pour ajouter un paragraphe
function ajouter() {
    let newP = document.createElement("p");
    if (i < array1.length) {
        newP.innerHTML = array1[i];
        div.appendChild(newP);
        i++;
    } else {
        newP.innerHTML = "Il n'y a plus de paragraphes !";
        div.appendChild(newP);
        // Suppression de l'écouteur d'événements
        button.removeEventListener("click", ajouter);
    }
}

// Écouteur d'événement sur le bouton Ajouter
button.addEventListener("click", ajouter);
