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
console.log(window.getComputedStyle(chiffres[0]).left);
let aiguilleHeures = document.getElementById("aiguilleheure");
let aiguilleMinutes = document.getElementById("aiguilleminute");

function tourne() {
    
    aiguilleHeures.style.left += 50;
        
}

setTimeout("tourne()", "3000");