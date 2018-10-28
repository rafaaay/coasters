$(document).ready(function(){

// Header Switch On Scroll
var header = $(".primary-header");

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        header.removeClass("primary-header").addClass("secondary-header");
    } else {
        header.removeClass("secondary-header").addClass("primary-header");
    }
});
// Header Switch On Scroll


// Slick Slider Initializing
$('.product-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
// Slick Slider Initializing


// Anchor Scrolls
var scrollLink = $('.scroll');
  
// Smooth scrolling
scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000 );
});
  
// Active link switching
$(window).scroll(function() {
  var scrollbarLocation = $(this).scrollTop();
  
  scrollLink.each(function() {
    
    var sectionOffset = $(this.hash).offset().top - 20;
    
    if ( sectionOffset <= scrollbarLocation ) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
  
});
// Anchor Scrolls


});
