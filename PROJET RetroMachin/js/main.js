/* Articles en Json */
let consoles = `{
    "sega": [
        {"nom": "Master System", "annee": 1987, "photo": "images/masterSystem.png", "description": "Console de 3ème génération.", "prix": 80},
        {"nom": "Megadrive", "annee": 1990, "photo": "images/megadrive.png", "description": "Console de 4ème génération.", "prix": 60},
        {"nom": "Game Gear", "annee": 1991, "photo": "images/gameGear.png", "description": "Console de 4ème génération.", "prix": 149},
        {"nom": "Mega CD", "annee": 1993, "photo": "images/megaCD.png", "description": "Console de 4ème génération.", "prix": 95},
        {"nom": "Saturn", "annee": 1995, "photo": "images/saturn.png", "description": "Console de 5ème génération.", "prix": 96},
        {"nom": "Dreamcast", "annee": 1999, "photo": "images/dreamcast.png", "description": "Console de 6ème génération.", "prix": 50}                                                                                       
    ],
    "nintendo": [
        {"nom": "Nes", "annee": 1985, "photo": "images/nes.png", "description": "Console de 3ème génération.", "prix": 230},
        {"nom": "Super Nes", "annee": 1991, "photo": "images/superNes.png", "description": "Console de 4ème génération.", "prix": 100},
        {"nom": "Nintendo 64", "annee": 1996, "photo": "images/nintendo64.png", "description": "Console de 5ème génération.", "prix": 50},
        {"nom": "GameCube", "annee": 2001, "photo": "images/gamecube.png", "description": "Console de 6ème génération.", "prix": 40},
        {"nom": "Wii", "annee": 2006, "photo": "images/wii.png", "description": "Console de 7ème génération.", "prix": 190},
        {"nom": "Switch", "annee": 2017, "photo": "images/switch.png", "description": "Console de 8ème génération.", "prix": 300}
    ],
    "autres": [
        {"nom": "pong", "annee": 1976, "photo": "images/pong.png", "description": "Console de 1ère génération.", "prix": 75},
        {"nom": "atari2600", "annee": 1977, "photo": "images/atari2600.png", "description": "Console de 2ème génération.", "prix": 50},
        {"nom": "intellivision", "annee": 1979, "photo": "images/intellivision.png", "description": "Console de 2ème génération.", "prix": 30},
        {"nom": "gameAndWatch", "annee": 1980, "photo": "images/gameAndWatch.png", "description": "Console de 2ème génération.", "prix": 50},
        {"nom": "atariLynx", "annee": 1989, "photo": "images/atariLynx.png", "description": "Console de 4ème génération.", "prix": 160},
        {"nom": "commodore64", "annee": 1990, "photo": "images/commodore64.png", "description": "Console de 3ème génération.", "prix": 80}
    ]
}`

// Transformation du Json en objet
let objConsoles = JSON.parse(consoles);

// Déclaration des variables
let titre = document.querySelector("#titre");
let cards = document.body.querySelectorAll(".cardConsole");
let imgs = document.body.querySelectorAll(".img");
let titles = document.body.querySelectorAll(".title");
let annees = document.body.querySelectorAll(".annee");
let descriptions = document.body.querySelectorAll(".description");
let prix = document.querySelectorAll(".prix");
let lienSega = document.querySelector(".lienSega");
let lienNintendo = document.querySelector(".lienNintendo");
let lienAutres = document.querySelector(".lienAutres");
let bienvenue = document.querySelector(".bienvenue");
let banniere = document.querySelector("aside");

// Au démarrage, effacer toutes les "cartes" articles
for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
}

// En appuyant sur le titre, afficher le message de bienvenue et effacer les cartes articles
titre.addEventListener("click", function() {
    bienvenue.style.left = "50%";
    bienvenue.style.display = "flex";
    banniere.style.backgroundImage = "url(images/voiture.jpg)";
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
})

// En appuyant sur Sega, virer le message de bienvenue et afficher les cartes
lienSega.addEventListener("click", function() {
    banniere.style.backgroundImage = "url(images/sega.png)";
    bienvenue.style.display = "none";
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "flex";
    }
    for (let i = 0; i < objConsoles.sega.length; i++) {
        imgs[i].src = objConsoles.sega[i].photo;
        titles[i].textContent = objConsoles.sega[i].nom;
        annees[i].textContent = objConsoles.sega[i].annee;
        descriptions[i].textContent = objConsoles.sega[i].description;
        prix[i].textContent = objConsoles.sega[i].prix + " €";
    }
})

// En appuyant sur Nintendo, virer le message de bienvenue et afficher les cartes
lienNintendo.addEventListener("click", function() {
    banniere.style.backgroundImage = "url(images/nintendo.jpg)";
    bienvenue.style.display = "none";
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "flex";
    }
    for (let i = 0; i < objConsoles.nintendo.length; i++) {
        imgs[i].src = objConsoles.nintendo[i].photo;
        titles[i].textContent = objConsoles.nintendo[i].nom;
        annees[i].textContent = objConsoles.nintendo[i].annee;
        descriptions[i].textContent = objConsoles.nintendo[i].description;
        prix[i].textContent = objConsoles.nintendo[i].prix + " €";
    }
})

// En appuyant sur Autres, virer le message de bienvenue et afficher les cartes
lienAutres.addEventListener("click", function() {
    banniere.style.backgroundImage = "url(images/retro.jpg)";
    bienvenue.style.display = "none";
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "flex";
    }
    for (let i = 0; i < objConsoles.autres.length; i++) {
        imgs[i].src = objConsoles.autres[i].photo;
        titles[i].textContent = objConsoles.autres[i].nom;
        annees[i].textContent = objConsoles.autres[i].annee;
        descriptions[i].textContent = objConsoles.autres[i].description;
        prix[i].textContent = objConsoles.autres[i].prix + " €";
    }
})


/*
Refaire la page avec un tableau Json.
Créer les éléments (cardConsoles) avec javaScript.
Faire des boucles imbriquées (Sega, Nintendo, Autres).
Faire une liste dans le menu de navigation et la créer avec javascript.

Créer 3 sections : header, banniere et catalogue.
Créer une div de chaque catégorie.
Insérer cette div dans catalogue.
*/



