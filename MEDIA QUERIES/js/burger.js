
$(".boutonBurger").click(function() {

    if ($("nav").css("display") == "none") {

        $("nav").css({
            display: "flex"
        })

    } else {
        
        $("nav").css({
            display: "none"
        })
    }
})