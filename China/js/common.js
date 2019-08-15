$(".examples__slider").slick({
  arrows: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        infinite: true,
      },
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }]
});

$( function() {
  
  //On Scroll Functionality
  $(window).scroll( function() {
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

$(document).ready(function() { 
  $("section").animated("fadeIn", 2000); 
});

(function($){
  $(function() {
    $('.mobile-menu').on('click', function() {
      $('.menu').toggleClass('menu--open');
      $(this).toggleClass('menu-icon-open')
    });
  });
})(jQuery);

$(".calc-form__tab-item").not(":first").hide();
$(".calc-form__wrapper .calc-form__tab").click(function() {
    $(".calc-form__wrapper .calc-form__tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".calc-form__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".form-tab_item").not(":first").hide();
$(".form-tabs__wrapper .form-tab").click(function() {
    $(".form-tabs__wrapper .form-tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".form-tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");




// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 
  
  $('.js-overlay-campaign').fadeIn();
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


// открыть по кнопке
$('.js-button-campaign2').click(function() { 
  
  $('.js-overlay-campaign2').fadeIn();
  $('.js-overlay-campaign2').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign2').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign2');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign2').fadeOut();
    
  }
});


// открыть по кнопке
$('.js-button-campaign3').click(function() { 
  
  $('.js-overlay-campaign3').fadeIn();
  $('.js-overlay-campaign3').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign3').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign3');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign3').fadeOut();
    
  }
});

// открыть по кнопке
$('.js-button-campaign4').click(function() { 
  
  $('.js-overlay-campaign4').fadeIn();
  $('.js-overlay-campaign4').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign4').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign4');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign4').fadeOut();
    
  }
});