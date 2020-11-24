$("button").click(function() {
    $("#main").append(`<div class="essai" id="dossier4">Dossier 4</div>`);
})

// $(".essai").click(function() {
//     var id = $(this).attr('id');
//     alert(id);
// }) 

$(document).on("click", ".essai", function() {
    var id = $(this).attr('id');
    alert(id);
});