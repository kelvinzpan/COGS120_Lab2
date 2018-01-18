/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height(); //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar-default').addClass("scrolled");
    }else{
        $('.navbar-default').removeClass("scrolled");
    }
}

if($('.navbar-default').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}