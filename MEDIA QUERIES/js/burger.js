

$(".boutonBurger").click(function() {

    if ($(".boutonBurger").css("display") == "flex") {

        if ($("nav").css("display") == "none") {

            $("nav").css({
                display: "flex"
            })

        } else {

            if ($(".boutonBurger").css("display") == "flex") {
                $("nav").css({
                    display: "none"
                })
            } else {
                $("nav").css("display") == "flex";
            }
            
        }

    } else {
        $("nav").css("dsiplay") == "flex";
    }
    
})

