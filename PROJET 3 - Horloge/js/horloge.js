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

let chiffres = document.getElementsByClassName("chiffre");
let aiguilleHeures = document.getElementById("aiguilleheure");
let aiguilleMinutes = document.getElementById("aiguilleminute");
let index = 0;
let indic = false;

let positionChiffresTop = [];
let positionChiffresLeft = [];

for (let i = 0; i < chiffres.length; i++) {
	positionChiffresTop.push(window.getComputedStyle(chiffres[i]).top);
	positionChiffresLeft.push(window.getComputedStyle(chiffres[i]).left);
}

console.log(positionChiffresTop);
console.log(positionChiffresLeft);

function tourne() {
	setInterval(function () {
		if (indic) {
			aiguilleMinutes.style.top = positionChiffresTop[index];
			aiguilleMinutes.style.left = positionChiffresLeft[index];
			index++;
		} else {
			clearInterval();
		}
	}, 1000);
}

// setInterval(tourne(), 1000);