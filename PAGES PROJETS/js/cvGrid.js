let boutonBurger = document.querySelector(".boutonBurger");
let menuBurger = document.querySelector(".menuBurger");
let elts = document.querySelectorAll(".elt");
let ligne1 = document.querySelector(".ligne");

boutonBurger.addEventListener("click", toggleMenu);

for (let i = 0; i < elts.length; i++) {
    elts[i].addEventListener("click", toggleMenu);
}

function toggleMenu() {
    menuBurger.classList.toggle("menuBurgerOpen");
}

/* Compétences en json */

let langages = {
    nom: "Langages",
    l1: "HTML",
    l2: "CSS",
    l3: "JavaScript",
    l4: "Json"
};

let frameworks = {
    nom: "Frameworks",
    f1: "Bootstarp",
    f2: "jQuery"
};

let outils = {
    nom: "Outils",
    o1: "Visual Studio Code",
    o2: "Git / GitHub",
    o3: "Filezilla"
};

let tabComp = [langages, frameworks, outils];
console.log(tabComp);
let clefs = Object.keys(tabComp);
let valeurs = Object.values(tabComp);


let containerLangages = document.querySelectorAll(".langages");


let tab = JSON.stringify(tabComp);


let tabListe = [];

console.log(valeurs[0].length);

for (let i = 0; i < containerLangages.length; i++) {
    $(containerLangages[i]).append(`<h3>${tabComp[i].nom}</h3>`);
    $(containerLangages[i]).append(`<ul class="liste"></<ul>`);
    console.log(tabComp[i].length);
    for (let j = 0; j < tabComp[j].length; j++) {
        console.log("Coucou !");
    }
}

