$(window).on('load', function () {
    $preloader = $('.preloader'),
      $loader = $preloader.find('.preloader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

$(document).ready(function() {
	$(".why__item_img").animated("tada", "bounceOut");
	$("h2").animated("bounceInLeft", "bounceOutLeft");
	$(".measure").animated("fadeInRight", "fadeOutRight");

	$(".feedback__icon_first").animated("bounceInLeft", "fadeOutRight");
	$(".feedback__icon_second").animated("bounceInLeft", "fadeOutRight");
	$(".feedback__slider_img-first").animated("bounceInLeft", "fadeOutRight");
	$(".feedback__slider_img-second").animated("bounceInLeft", "fadeOutRight");
})

$(document).ready(function(){
  $('.feedback__slider').slick({
   slidesToShow: 2,
   slidesToScroll: 2,
   dots: true,
   responsive: [
   	{
   		breakpoint: 996,
   		settings: {
   			slidesToShow: 1,
   			slidesToScroll: 1
   		}
   	}
   ]
  });
});