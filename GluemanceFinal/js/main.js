$("head").ready(function () {
    $("#header").ready(function () {
      $preloader = $('.preloader'),
        $loader = $preloader.find('.preloader');
      $loader.fadeOut();
      $preloader.delay(350).fadeOut('slow');

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
  $("#form").animated("fadeIn");
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

 
$(document).ready(function(){
  $("body").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 800);
  });
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