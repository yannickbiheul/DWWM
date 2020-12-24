$(function() {

    function ajouter() {
        $.get("https://api.coindesk.com/v1/bpi/currentprice.json", function(data) {
            console.log(data);
            $("#vrac").html(data);
        })
    }

    $("#get").on("click", ajouter);



});