$(document).ready(function() {
    $("h1").animate({
        opacity: 1,
        left: 0,
    }, 2500)
    $("#about p").animate({
        opacity: 0,
    }, 1000)
    $("#about p").animate({
        opacity: 1,
        left: 0,
    }, 2500)
    $(".name").animate({
        color: '#44BD32',
    }, 3500)
});

$( document ).on( "scroll", function() {
    $height = $(window).innerHeight();
    $iPos = $('#contact i').offset();
    if ((pageYOffset + $height) >= $iPos.top) {
        $("h2 span").animate({
            color: '#44BD32',
        }, 1500)
    };
  });
