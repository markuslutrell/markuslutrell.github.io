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

$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});

	
});

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


  $('#menu').slicknav({
  	label: ''
  })
});


// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn(50);
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});



/*----*/



// Модальное окно

// открыть по кнопке
$('.js-button-campaign2').click(function() { 
	
	$('.js-overlay-campaign2').fadeIn(50);
	$('.js-overlay-campaign2').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign2').click(function() { 
	$('.js-overlay-campaign2').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign2');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign2').fadeOut();
		
	}
});



/*------*/


// Модальное окно

// открыть по кнопке
$('.js-button-campaign3').click(function() { 
	
	$('.js-overlay-campaign3').fadeIn(50);
	$('.js-overlay-campaign3').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign3').click(function() { 
	$('.js-overlay-campaign3').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign3');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign3').fadeOut();
		
	}
});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign4').click(function() { 
	
	$('.js-overlay-campaign4').fadeIn(50);
	$('.js-overlay-campaign4').addClass('disabled');
	$('.js-overlay-campaign').addClass('dn2');
	$('.js-overlay-campaign2').addClass('dn2');
	$('.js-overlay-campaign3').addClass('dn2');
});

// закрыть на крестик
$('.js-close-campaign4').click(function() { 
	$('.js-overlay-campaign4').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign4');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign4').fadeOut();
		
	}
});



