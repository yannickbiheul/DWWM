let inputNom = document.getElementById("nom");
let button = document.querySelector("#button");
let nom = document.getElementById("afficheNom");

button.addEventListener("click", function() {
    
    if (inputNom.value) {
        nom.innerHTML = inputNom.value;
    } else {
        nom.innerHTML = "ça t'arracherais la gueule de rentrer un nom ?!";
    }
    
});
