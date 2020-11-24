/* Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce
que la réponse convienne. */

// let win = false;

// while (win == false) {
//     let nombre = prompt("Entrez un nombre entre 1 et 3");
//     if (nombre >= 1 && nombre <= 3) {
//         alert("Bravo !");
//         win = true;
//     } else {
//         alert("Non. Recommence !");
//     }
// }


/* Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la
réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus
petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10. */

// let win = false;

// while (win == false) {
//     let nombre = prompt("Entrez un nombre");
//     if (nombre > 20) {
//         alert("Plus petit !");
//     } else if (nombre < 10) {
//         alert("Plus grand !");
//     } else {
//         alert("Bravo !");
//         win = true;
//     }
// }


/* Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres
suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres
de 18 à 27. */

// let nombre = Number(prompt("Entrez un nombre"));
// // let nombre = 17;
// let tableau = [];
// let mini = nombre + 1;
// let max = nombre + 10;

// for (let i = mini; i <= max; i++) {
//     tableau.push(mini);
//     mini++;
// }

// alert("Voici les 10 suivants de " + nombre + " : \n" + tableau);


/* Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de
multiplication de ce nombre, présentée comme suit (cas où l'utilisateur entre le nombre 7) :
Table de 7 :
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
…
7 x 10 = 70 */

// let nombre = Number(prompt("Entrez un nombre"));
// let tableau = [];

// for (let i = 1; i <= 10; i++) {
//     tableau.push(nombre + " x " + i + " = " + nombre * i);
// }

// alert(tableau[0] + "\n" + tableau[1] + "\n" + tableau[2] + "\n" + tableau[3] + "\n" + tableau[4] + "\n" + tableau[5] + "\n" + tableau[6] + "\n" + tableau[7] + "\n" + tableau[8] + "\n" + tableau[9] + "\n")


/* Ecrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers
jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer :
1 + 2 + 3 + 4 + 5 = 15
NB : on souhaite afficher uniquement le résultat, pas la décomposition du calcul. */

// let nombre = Number(prompt("Entrez un nombre"));
// let tableau = [];

// for (let i = 1; i <= nombre; i++) {
//     tableau.push(i);
// }

// let somme = 0;

// for (let i = 0; i < tableau.length; i++) {
//     somme+= tableau[i];
// }

// alert("Voici la somme des entiers jusqu'à votre nombre : " + somme);


/* Ecrire un algorithme qui demande un nombre de départ, et qui calcule sa factorielle.
NB : la factorielle de 8, notée 8 !, vaut
1 x 2 x 3 x 4 x 5 x 6 x 7 x 8
 */

// let nombre = Number(prompt("Entrez un nombre"));
// // let nombre = 8;
// let tableau = [];

// for (let i = 1; i <= nombre; i++) {
//     tableau.push(i);
// }

// let somme = 1;

// for (let i = 1; i < tableau.length; i++) {
//     somme*= tableau[i];
// }

// alert("La factorielle de " + nombre + " est : " + somme);


/* Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise
ensuite quel était le plus grand parmi ces 20 nombres.
Modifiez ensuite l’algorithme pour que le programme affiche de surcroît en quelle position
avait été saisie ce nombre */

// let tableau = [];
// let nombre;
// let tableauCopy = [];

// creerTableau(20);

// trouverMaxEtMin();

// trierTableau();

// function creerTableau(n) {
//     for (let i = 1; i <= n; i++) {
//         nombre = Number(prompt("Entrez le nombre " + i));
//         tableau.push(nombre);
//     } 
// }

// function trouverMaxEtMin() {
//     tableauCopy = tableau.slice();
//     let tableauMini = Math.min(...tableauCopy);
//     posMini = tableauCopy.indexOf(tableauMini);
//     let tableauMaxi = Math.max(...tableauCopy);
//     posMaxi = tableauCopy.indexOf(tableauMaxi);
// }

// function trierTableau() {
//     for (let i = 0; i < tableau.length; i++) {
//         for (let j = 0; j < tableau.length; j++) {
//             if (tableau[j] > tableau[j + 1]) {
//                 let temp = tableau[j + 1];
//                 tableau[j + 1] = tableau[j];
//                 tableau[j] = temp;
//             }
//         }
//     }
// }

// alert(`Vote tableau : 
// ${tableauCopy}
// Votre tableau rangé dans l'ordre croissant :
// ${tableau}
// Le plus petit nombre est le ${tableau[0]}, c'était le nombre numéro ${posMini + 1}.
// Le plus grand nombre est le ${tableau[tableau.length - 1]}, c'était le nombre numéro ${posMaxi + 1}.
// `);


/* Réécrire l’algorithme précédent, mais cette fois - ci on ne connaît pas d’avance combien
l’utilisateur souhaite saisir de nombres.La saisie des nombres s’arrête lorsque l’utilisateur
entre un zéro. */

let tableau = [];
let nombre;
let tableauCopy = [];
let posMini;
let posMaxi;

creerTableau();

trouverMaxEtMin();

trierTableau();

function creerTableau() {
    while (nombre != 0) {
        nombre = Number(prompt("Entrez un nombre"));
        tableau.push(nombre);
    }
}

function trouverMaxEtMin() {
    tableau.pop();
    tableauCopy = tableau.slice();
    let tableauMini = Math.min(...tableauCopy);
    posMini = tableauCopy.indexOf(tableauMini);
    let tableauMaxi = Math.max(...tableauCopy);
    posMaxi = tableauCopy.indexOf(tableauMaxi);
}

function trierTableau() {
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau.length; j++) {
            if (tableau[j] > tableau[j + 1]) {
                let temp = tableau[j + 1];
                tableau[j + 1] = tableau[j];
                tableau[j] = temp;
            }
        }
    }
}

alert(`Vote tableau : 
${tableauCopy}
Votre tableau rangé dans l'ordre croissant :
${tableau}
Le plus petit nombre est le ${tableau[0]}, c'était le nombre numéro ${posMini + 1}.
Le plus grand nombre est le ${tableau[tableau.length - 1]}, c'était le nombre numéro ${posMaxi + 1}.
`);


/* Lire la suite des prix (en euros entiers et terminée par zéro) des achats d’un client. Calculer la
somme qu’il doit, lire la somme qu’il paye, et simuler la remise de la monnaie en affichant les
textes "10 Euros", "5 Euros" et "1 Euro" autant de fois qu’il y a de coupures de chaque sorte à
rendre.
 */

