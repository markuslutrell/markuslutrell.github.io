$(window).on('load', function () {
    $preloader = $('.preloader'),
      $loader = $preloader.find('.preloader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
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