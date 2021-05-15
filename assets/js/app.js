$(function() {


/* Fixed Header */ 

    var header = $('#header'),
        introH = $('#header').innerHeight(),
        scrollOffset = $(window).scrollTop();
        
        
        checkScroll (scrollOffset);

    $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();
        checkScroll (scrollOffset);

    });

    function checkScroll (scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
    }
}

/* Smooth Scroll */

$('[data-scroll]').on('click', function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;
        blockOffset_1 = (blockOffset-30);

    $('#nav a').removeClass('active');
    $this.addClass('active');
        
    $('html, body').animate({
        scrollTop: blockOffset_1
    }, 500);

    $('#nav').removeClass('active');
    $('#nav_toggle').removeClass('active');
});


/* Menu nav toggle */

$("#nav_toggle").on("click", function(event) {
   event.preventDefault();
   
   $(this).toggleClass('active');
   $("#nav").toggleClass("active");

});

/* Collapse */

$('[data-collapse]').on('click', function(event) {
   event.preventDefault();

   var $this = $(this),
   blockId = $this.data('collapse');

   $this.toggleClass('active');
   $('#accordion__item').removeClass('active');


//    2Й вариант
//    $(blockId).slideToggle();
})

/* Slider*/

$('[data-slider]').slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
});




});