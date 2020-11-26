// var compteur_minutes=0;
	// var compteur_heures=0;

	// function tourne()
	// 	{
// 1) utiliser la fonction setTimeout( uneFonction(){} , 1000 ) => execute la fonction dans une seconde
// 2) modulo sur un entier   =>   1 % 40 = 1  , 2 % 12 = 2 ...etc
// 3) modifier la fonction pour l'effectuer avec setInterval() 
//	https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_clearinterval


// 		if (indic) window.setTimeout("tourne()", "1000");
// .....
// 		}

// Déclaration des variables chiffres et aiguilles
let chiffres = document.getElementsByClassName("chiffre");
let aiguilleHeures = document.getElementById("aiguilleheure");
let aiguilleMinutes = document.getElementById("aiguilleminute");
// Déclaration d'un index pour savoir où que c'est que j'en suis
let index = 0;
let indexH = 0;
// L'indic pour le bouton
let indic = false;

// Un tableau pour les positions top et left des chiffres
let positionChiffresTop = [];
let positionChiffresLeft = [];

// Une boucle pour remplir ce tableau
for (let i = 0; i < chiffres.length; i++) {
	positionChiffresTop.push(window.getComputedStyle(chiffres[i]).top);
	positionChiffresLeft.push(window.getComputedStyle(chiffres[i]).left);
}

console.log("Tops : " + positionChiffresTop);
console.log("Lefts : " + positionChiffresLeft);


// La fonction tourne() fait avancer l' aiguille minutes toutes les secondes
function tourne() {
	setInterval(function () {
		if (indic) {
			if (index < 12) {
				for (let i = index; i < chiffres.length; i++) {
					aiguilleMinutes.style.top = positionChiffresTop[index];
					aiguilleMinutes.style.left = positionChiffresLeft[index];
				}
			} else {
				index = 0;
				for (let i = index; i < chiffres.length; i++) {
					aiguilleMinutes.style.top = positionChiffresTop[index];
					aiguilleMinutes.style.left = positionChiffresLeft[index];
					aiguilleHeures.style.top = positionChiffresTop[indexH];
					aiguilleHeures.style.left = positionChiffresLeft[indexH];
				}
				indexH++;
			}
			index++;
		} else {
			clearInterval(tourne());
		}
	}, 500);
}

// let tourne = function() {
// 	if (indic) {
// 		if (index < 12) {
// 			for (let i = index; i < chiffres.length; i++) {
// 				aiguilleMinutes.style.top = positionChiffresTop[index];
// 				aiguilleMinutes.style.left = positionChiffresLeft[index];
// 			}
// 		} else {
// 			index = 0;
// 			for (let i = index; i < chiffres.length; i++) {
// 				aiguilleMinutes.style.top = positionChiffresTop[index];
// 				aiguilleMinutes.style.left = positionChiffresLeft[index];
// 				aiguilleHeures.style.top = positionChiffresTop[indexH];
// 				aiguilleHeures.style.left = positionChiffresLeft[indexH];
// 			}
// 			indexH++;
// 		}
// 		index++;
// 	} else {
// 		clearInterval(tourne);
// 	}
// };

// setInterval(tourne(), 1000);


