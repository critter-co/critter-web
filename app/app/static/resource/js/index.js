$(document).ready(function(){
    $('.js--section-news').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    } , {
        offset: '60px;'
    })
}); 


/* Mobile Nav */
$('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('fa fa-bars')) {
        icon.addClass('fas fa-times');
        icon.removeClass('fas fa-bars');
    } else {
        icon.addClass('fa fa-bars');
        icon.removeClass('fas fa-times');
    }
})

/* News Section */
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
