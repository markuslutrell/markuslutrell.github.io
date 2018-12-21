$(document).ready(function() {
    $preloader = $('.preloader'),
    $loader = $preloader.find('.preloader');
    $loader.fadeOut();
    $preloader.delay(450).fadeOut('slow');
});

$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-tab");


// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 
  
  $('.js-overlay-campaign').fadeIn(150);
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

// Модальное окно

// открыть по кнопке
$('.js-button-campaign2').click(function() { 
  
  $('.js-overlay-campaign2').fadeIn(150);
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

// Модальное окно

// открыть по кнопке
$('.js-button-campaign10').click(function() { 
  
  $('.js-overlay-campaign10').fadeIn(50);
  $('.js-overlay-campaign10').addClass('disabled');
});



// закрыть на крестик
$('.js-close-campaign10').click(function() { 
  $('.js-overlay-campaign10').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign10');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign10').fadeOut();
    
  }
});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign11').click(function() { 
  
  $('.js-overlay-campaign11').fadeIn(50);
  $('.js-overlay-campaign11').addClass('disabled');
});



// закрыть на крестик
$('.js-close-campaign11').click(function() { 
  $('.js-overlay-campaign11').fadeOut();
  
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign11');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign11').fadeOut();
    
  }
});