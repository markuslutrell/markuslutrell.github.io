$('.main__btn_item1').hover(function () {
    $('.js-hover').attr('src', 'img/btn-unlocked-min.png');
    $(this).css('transition', '.3s ease');
}, function () {
    $('.js-hover').attr('src', 'img/btn-locked-min.png');
});


$('.main__btn_item2').hover(function () {
    $('.js-hover2').attr('src', 'img/btn-unlocked-min.png');
    $(this).css('transition', '.3s ease');
}, function () {
    $('.js-hover2').attr('src', 'img/locked2.png');
});


$('.swiper-wrapper').slick({
  centerMode: true,
  centerPadding: '250px',
  slidesToShow: 1,
  focusOnSelect: true,
  dots: true,
  responsive: [
    {
      breakpoint: 996,
      settings: {
        centerPadding: '120px',
        centerMode: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px'
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: false,
      }
    }
  ]
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
