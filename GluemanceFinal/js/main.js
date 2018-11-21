$("head").ready(function () {
    $("#header").ready(function () {
      $("#portfolio").ready(function () {
      $preloader = $('.preloader'),
        $loader = $preloader.find('.preloader');
      $loader.fadeOut();
      $preloader.delay(350).fadeOut('slow');
    });
  });
});


$(document).ready(function() {
  $(".adv-item").animated("zoomIn");
  $(".adv-man").animated("zoomIn");
  $("header").animated("fadeIn");
  $("#clients").animated("fadeIn");
  $("#commerce").animated("fadeIn");
  $("#advantages").animated("fadeIn");
  $(".works-characteristic__item").animated("bounceIn");
  $(".portfolio__item").animated("fadeIn");
  $(".adv-bg-rec").animated("fadeIn");
  $(".what-we-do-bg-rect").animated("fadeIn");
  $("#boss").animated("fadeIn");
  $("#family").animated("fadeIn");
  $(".light").animated("fadeInRight");
  $(".light__circles").animated("fadeInRight");
  $("#deal").animated("fadeIn");
  $("#money").animated("fadeIn");
  $(".feedback__item").animated("fadeIn");
});

$('.advantages__mobile').slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  accessibility: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider').slick({
  dots: true,
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 10000,
      settings: "unslick"
    },
    {
      breakpoint: 996,
      settings: "slick" 
    }
  ]
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
 
$(document).ready(function(){
  $(".feedback__more_link1").click(function() {
    $(".feedback__more_link1").addClass("dn");
    $(".feedback__more_link2").removeClass("dn");
    $(".more__feedback").addClass("db");
  });

  $(".feedback__more_link2").click(function() {
    $(".feedback__more_link1").removeClass("dn");
    $(".feedback__more_link2").addClass("dn");
    $(".more__feedback").removeClass("db");
  });


  $(".feedback__link_more1").click(function() {
    $(".feedback__link_more1").toggleClass("dn");
    $(".feedback__item_text2-1").toggleClass("db");
    $(".feedback__link_back1").toggleClass("db");
  });

  $(".feedback__link_back1").click(function() {
    $(".feedback__link_more1").removeClass("dn");
    $(".feedback__item_text2-1").removeClass("db");
    $(".feedback__link_back1").removeClass("db");
  });


  $(".feedback__link_more2").click(function() {
    $(".feedback__link_more2").toggleClass("dn");
    $(".feedback__item_text2-2").toggleClass("db");
    $(".feedback__link_back2").toggleClass("db");
  });

  $(".feedback__link_back2").click(function() {
    $(".feedback__link_more2").removeClass("dn");
    $(".feedback__item_text2-2").removeClass("db");
    $(".feedback__link_back2").removeClass("db");
  });

  $(".feedback__link_more3").click(function() {
    $(".feedback__link_more3").toggleClass("dn");
    $(".feedback__item_text2-3").toggleClass("db");
    $(".feedback__link_back3").toggleClass("db");
  });

  $(".feedback__link_back3").click(function() {
    $(".feedback__link_more3").removeClass("dn");
    $(".feedback__item_text2-3").removeClass("db");
    $(".feedback__link_back3").removeClass("db");
  });

  $(".feedback__link_more4").click(function() {
    $(".feedback__link_more4").toggleClass("dn");
    $(".feedback__item_text2-4").toggleClass("db");
    $(".feedback__link_back4").toggleClass("db");
  });

  $(".feedback__link_back4").click(function() {
    $(".feedback__link_more4").removeClass("dn");
    $(".feedback__item_text2-4").removeClass("db");
    $(".feedback__link_back4").removeClass("db");
  });

  $(".feedback__link_more5").click(function() {
    $(".feedback__link_more5").toggleClass("dn");
    $(".feedback__item_text2-5").toggleClass("db");
    $(".feedback__link_back5").toggleClass("db");
  });

  $(".feedback__link_back5").click(function() {
    $(".feedback__link_more5").removeClass("dn");
    $(".feedback__item_text2-5").removeClass("db");
    $(".feedback__link_back5").removeClass("db");
  });
  $(".feedback__link_more6").click(function() {
    $(".feedback__link_more6").toggleClass("dn");
    $(".feedback__item_text2-6").toggleClass("db");
    $(".feedback__link_back6").toggleClass("db");
  });

  $(".feedback__link_back6").click(function() {
    $(".feedback__link_more6").removeClass("dn");
    $(".feedback__item_text2-6").removeClass("db");
    $(".feedback__link_back6").removeClass("db");
  });

  $(".feedback__link_more7").click(function() {
    $(".feedback__link_more7").toggleClass("dn");
    $(".feedback__item_text2-7").toggleClass("db");
    $(".feedback__link_back7").toggleClass("db");
  });

  $(".feedback__link_back7").click(function() {
    $(".feedback__link_more7").removeClass("dn");
    $(".feedback__item_text2-7").removeClass("db");
    $(".feedback__link_back7").removeClass("db");
  });

  $(".feedback__link_more8").click(function() {
    $(".feedback__link_more8").toggleClass("dn");
    $(".feedback__item_text2-8").toggleClass("db");
    $(".feedback__link_back8").toggleClass("db");
  });

  $(".feedback__link_back8").click(function() {
    $(".feedback__link_more8").removeClass("dn");
    $(".feedback__item_text2-8").removeClass("db");
    $(".feedback__link_back8").removeClass("db");
  });
});


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

// Модальное окно

// открыть по кнопке
$('.js-button-campaign5').click(function() { 
  
  $('.js-overlay-campaign5').fadeIn(50);
  $('.js-overlay-campaign5').addClass('disabled');
});



// закрыть на крестик
$('.js-close-campaign5').click(function() { 
  $('.js-overlay-campaign5').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign5');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign5').fadeOut();
    
  }
});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign6').click(function() { 
  
  $('.js-overlay-campaign6').fadeIn(50);
  $('.js-overlay-campaign6').addClass('disabled');
});



// закрыть на крестик
$('.js-close-campaign6').click(function() { 
  $('.js-overlay-campaign6').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign6');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign6').fadeOut();
    
  }
});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign7').click(function() { 
  
  $('.js-overlay-campaign7').fadeIn(50);
  $('.js-overlay-campaign7').addClass('disabled');
});



// закрыть на крестик
$('.js-close-campaign7').click(function() { 
  $('.js-overlay-campaign7').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign7');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign7').fadeOut();
    
  }
});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign8').click(function() { 
  
  $('.js-overlay-campaign8').fadeIn(50);
  $('.js-overlay-campaign8').addClass('disabled');
});



// закрыть на крестик
$('.js-close-campaign8').click(function() { 
  $('.js-overlay-campaign8').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign8');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign8').fadeOut();
    
  }
});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign9').click(function() { 
  
  $('.js-overlay-campaign9').fadeIn(50);
  $('.js-overlay-campaign9').addClass('disabled');
});



// закрыть на крестик
$('.js-close-campaign9').click(function() { 
  $('.js-overlay-campaign9').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign9');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign9').fadeOut();
    
  }
});


$("feedback__more_link").click(function() {
  $(".feedback__more_link").addClass("dn");
});