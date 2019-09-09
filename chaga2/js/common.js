$(".feedback__slider").slick({
  arrows: true,
  slidesToShow: 5,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },        
    {
      breakpoint: 996,
      settings: "unslick"
    },
  ],
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
  $(".leave").animated("fadeInDown", 100000);
  $(".fade-left").animated("fadeInLeft", 5000);
  $(".fade-right").animated("fadeInRight", 5000);
  $(".fade-up").animated("fadeInUp", 2000);
  $(".fade-down").animated("fadeInUp", 2000);
});

(function($){
  $(function() {
    $('.mobile__menu_btn').on('click', function() {
      $('.menu').toggleClass('active');
    });
  });
})(jQuery);

(function($){
  $(function() {
    $('.js-more').on('click', function() {
      $('.feedback__slide-hide').toggleClass('active');
      $(this).addClass("hide");
      $('.js-less').toggleClass('hide');
    });
  });
})(jQuery);

(function($){
  $(function() {
    $('.js-less').on('click', function() {
      $('.feedback__slide-hide').toggleClass('active');
      $(this).addClass("hide");
      $('.js-more').toggleClass('hide');
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

$(".authorisation__tab_item").not(":first").hide();
$(".authorisation__wrapper .authorisation__tab").click(function() {
    $(".authorisation__wrapper .authorisation__tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".authorisation__tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".cabinet-main__tab_item").not(":first").hide();
$(".cabinet-main__wrapper .cabinet-main__menu-item").click(function() {
    $(".cabinet-main__wrapper .cabinet-main__menu-item").removeClass("active").eq($(this).index()).addClass("active");
    $(".cabinet-main__tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".orders__content_item").not(":first").hide();
$(".cabinet-main__orders_content .orders__content_navigation-item").click(function() {
    $(".cabinet-main__orders_content .orders__content_navigation-item").removeClass("active").eq($(this).index()).addClass("active");
    $(".orders__content_item").hide().eq($(this).index()).fadeIn()
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

// открыть по кнопке
$('.js-button-campaign5').click(function() { 
  
  $('.js-overlay-campaign5').fadeIn();
  $('.js-overlay-campaign5').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign5').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign5');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign5').fadeOut();
    
  }
});

// открыть по кнопке
$('.js-button-campaign6').click(function() { 
  
  $('.js-overlay-campaign6').fadeIn();
  $('.js-overlay-campaign6').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign6').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign6');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign6').fadeOut();
    
  }
});

// открыть по кнопке
$('.js-button-campaign7').click(function() { 
  
  $('.js-overlay-campaign7').fadeIn();
  $('.js-overlay-campaign7').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign7').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign7');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign7').fadeOut();
    
  }
});

$(".accordeon dd").hide().prev().click(function() {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
});