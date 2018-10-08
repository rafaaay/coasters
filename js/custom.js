$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

// Header Switch On Scroll
$(document).ready(function(){

	var header = $(".primary-header");

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            header.removeClass("primary-header").addClass("secondary-header");
        } else {
            header.removeClass("secondary-header").addClass("primary-header");
        }
    });

});
// Header Switch On Scroll