console.log("Est-ce que la classe est rouge ?" + " " + $(".laClasse").hasClass("rouge"));

$(".laClasse").removeClass("rouge");

console.log("Est-ce que la classe est rouge ?" + " " + $(".laClasse").hasClass("rouge"));

$(".laClasse").addClass("rouge");

console.log("Est-ce que la classe est rouge ?" + " " + $(".laClasse").hasClass("rouge"));

$(".laClasse").removeClass("rouge");

$(".un").click(function() {
    $(".laClasse").removeClass("rouge");
    $(".laClasse").addClass("vert");
})

$(".deux").click(function () {
    $(".laClasse").removeClass("vert");
    $(".laClasse").addClass("rouge");
})

$(".trois").click(function () {
    $(".laClasse").removeClass("vert");
    $(".laClasse").addClass("rouge");
})


/* DATABINDING */

$("#tape").keyup(function(event) {
    var deja = $("#affiche").text();
    console.log("deja : " + deja);
    console.log(event.key);
    $("#affiche").text(deja+event.key);
})