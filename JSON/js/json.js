// var jsonString = '{"nom": "Biheul", "prenom": "Yannick"}';
// console.log(typeof jsonString);

// var obj = JSON.parse(jsonString);
// console.log(obj);

// console.log(obj.nom);

// document.getElementById("nom").textContent = `Nom : ${obj.nom}`;

// var jsonString2 = `[{"nom": "Smith", "prenom": "John"}, {"nom": "Bigood", "prenom": "Johnny"}]`;

// let lesNoms = document.getElementById("lesNoms");

// // function addNomPrenom(n, p){
// //     var newP = document.createElement("p");
// //     newP.innerHTML = `<span>${n} ${p}</span>`;
// //     lesNoms.appendChild(newP);
// // };

// var tobj = JSON.parse(jsonString2);
// for (let i = 0; i < tobj.length; i++) {
//     // addNomPrenom(tobj[i].nom, tobj[i].prenom);
//     $("#lesNoms").append(`<p>${tobj[i].nom} ${tobj[i].prenom}</p>`);
// }


// // "<span>" + n + " " + p + "</span>"

// $("#bouton").click(function() {
   
//     alert(`Tu as appuyé sur le bouton 2 !`);
    
// });

// $(document).keydown(function(touche) {
//     console.log(touche.keyCode);
// })


// $("#bouton2").click(function() {
//     $("#bouton").trigger('click');
// })

// $("#unBouton").addClass("orange");  // removeClass pour enlever

// // Créer des éléments en json avec une vatégorie :
// // {femmes [nom, descrition, prix, photo]}, {hommes[nom, description, prix, photo]}
// // Créer une page web qui affiche ces produits classés par catégories.

// var jsonEmployes = `{
//     {"hommes": [
//         {"nom": "Smith", "prenom": "John"},
//     ]
//     },
//     {"femmes": [
//         {"nom": "Smith", "prenom": "Josianne"},
//     ]}
// }`

// var tabJson = JSON.parse(jsonEmployes);

// var clefs = Object.keys(tabJson);
// console.log(clefs);

$("#id1").html("<p>Salut !</p>");
$("#id1").css({"background-color": "blue"});

