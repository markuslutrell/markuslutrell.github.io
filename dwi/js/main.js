$(document).ready(function() {
    $preloader = $('.preloader'),
    $loader = $preloader.find('.preloader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-tab");


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