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


// Slick Slider Initializing
$(document).ready(function(){
  $('.product-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
// Slick Slider Initializing