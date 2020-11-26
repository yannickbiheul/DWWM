$(".menuBurgerOpen").css({
    flexDirection: "column"
})

$(".boutonBurger").click(function() {
    $(".menuBurger").toggle("menuBurgerOpen");
})
