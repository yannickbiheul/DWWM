// Créer un fichier input.txt avec des données
// let fs = require("fs");

// let data = fs.readFileSync('input.txt');
// console.log(data.toString());

// console.log("Fin du programme");

// Créer un fichier input.txt avec des données
let fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

console.log("Fin du programme");