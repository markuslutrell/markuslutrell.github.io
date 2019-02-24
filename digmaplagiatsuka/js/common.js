$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollOverflow: true,
        anchors:['firstSection', 'secondSection', 'thirdSection', 'foursSection', 'fifthSection'],
        verticalCentered: true,
    });
});

$("#navToggle").click(function() {
    $("#fullpage").addClass("blur");
    $("header").addClass("blur");
    $(".menu__container").fadeIn(500);
    $(".overlay").fadeIn(500);

});

$(".close-menu").click(function() {
    $("#fullpage").removeClass("blur");
    $("header").removeClass("blur");
    $(".menu__container").fadeOut(500);
    $(".overlay").fadeOut(500);
});


// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 
  $('.js-overlay-campaign').fadeIn(250);
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

// Модальное окно 2

// открыть по кнопке
$('.js-button-campaign-2').click(function() { 
  $('.js-overlay-campaign-2').fadeIn(250);
  $('.js-overlay-campaign-2').addClass('disabled');
});



// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign-2').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign-2');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign-2').fadeOut();
  }
});