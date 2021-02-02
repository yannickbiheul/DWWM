// JAVASCRIPT
document.getElementById("button1").addEventListener("click", function() {
    console.log("CLICK BOUTON JAVASCRIPT !!!");
})

// JQUERY fonction click
$("#button2").click(function() {
    console.log("CLICK BOUTON JQUERY CLICK !!!");
})

// JQUERY fonction on
$("#button3").on("click", function() {
    console.log("CLICK BOUTON JQUERY ON !!!");
})