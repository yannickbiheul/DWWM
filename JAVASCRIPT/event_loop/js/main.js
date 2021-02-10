// Vanilla javascript
function loop() {
    console.log("coucou");
    setTimeout(loop, 0);
}

var bouton = document.querySelector('button');
bouton.addEventListener('click', function (event) {
    loop();
});