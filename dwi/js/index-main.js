 $(".sidemenu").square_menu({
    flyDirection: "bottom", // The direction where the menu will fly from. Available options are "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" and "bottom-right". The default value is "bottom".
    button: false, // You can define text inside the auto-generated button here. If you want to prevent the plugin from generating a menu button, change this to false. The default value is "Menu".
    animationStyle: "vertical", // The type of animation style you will see after it flew in. Available options are "vertical" which expands vertically and "horizontal" which expands horizontally. Vertical works best with "top" or "bottom" flyDirection whereas Horizontal works best with "left" or "right" flyDirection. The default value is "vertical".
    closeButton: "&#215;" // You can define the content of the close button appears after animates are completed here. Change this to false to hide the close button. The default value is X.
});


$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-tab");

$(document).ready(function() {

  $(".fade-left").animated("fadeInLeft");
  $(".fade-right").animated("fadeInRight");
});

$(window).resize(function() {
    width = $(window).width();
    if (width > 996) {
         $(".main__img").animated("fadeInRight");
    }
});

 

$( ".glitch-img" ).mgGlitch({
  glitch1TimeMin : 300,
  glitch1TimeMax : 600,
  glitch2TimeMin : 5,
  glitch2TimeMax : 50


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