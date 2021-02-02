// Position de la souris en jQuery
$(document).on("mousemove", "#zone", function(event) {
    console.log(`Position de la souris : X = ${event.clientX} | Y = ${event.clientY}`);
});

// Écouteur d'événement en javaScript
let zone = document.getElementById("zone");
zone.addEventListener("click", function() {
    zone.style.backgroundColor = "green";
})

// Ajout de paragraphe en javaScript
let button = document.getElementById("button");
button.addEventListener("click", function() {
    let newP = document.createElement("p");
    newP.innerHTML = "Hello World";
    document.body.appendChild(newP);
})
