let bouton = document.querySelector(".bouton");
let tab = [];

bouton.addEventListener("click", creerTableau);

function creerTableau() {
    // Remplissage du tableau
    for (let i = 0; i < 5; i++) {
        tab.push(Number(prompt("Entrez un nombre")));
    }
    // Affichage du tableau
    alert(`Voilà l'tableau : ${tab}`);

    // Recherche du nombre le plus petit
    let mini = tab[0];
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] <= mini) {
            mini = tab[i];
        }
    }
    // Affichage du nombre le plus petit
    alert(`Le nombre le plus petit est le : ${mini}`);
    // Remise à zéro du tableau
    tab = [];
}