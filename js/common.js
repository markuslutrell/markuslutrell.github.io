window.onload = function () {
   $.afterlag(function() {
    document.body.classList.add('loaded');
    // $("section").animated("fadeIn", 2000);
    // $(".branch-1, .branch-4, .branch-6").animated("fadeInLeft", 2000);
    // $(".branch-2, .branch-3, .branch-5").animated("fadeInRight", 2000);
  });
}


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

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('.js-overlay-campaign4').fadeIn();
            $('.js-overlay-campaign4').addClass('disabled');
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});



// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() {  
  $('.js-overlay-campaign').fadeIn();
  $('.js-overlay-campaign').addClass('disabled');
});

$('.js-button-campaign2').click(function() {  
  $('.js-overlay-campaign2').fadeIn();
  $('.js-overlay-campaign2').addClass('disabled');
});

$('.js-button-campaig3').click(function() { 
  $('.js-overlay-campaign3').fadeIn();
  $('.js-overlay-campaign3').addClass('disabled');
});

$('.js-button-campaign5').click(function() { 
  $('.js-overlay-campaign5').fadeIn();
  $('.js-overlay-campaign5').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign').fadeOut();
  $('.js-overlay-campaign2').fadeOut();
  $('.js-overlay-campaign3').fadeOut();
  $('.js-overlay-campaign4').fadeOut();
  $('.js-overlay-campaign5').fadeOut();
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign').fadeOut();  }
});

$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign2');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign2').fadeOut();
  }
});

$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign3');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign3').fadeOut();
  }
});

$(".accordeon dd").hide().prev().click(function() {
  $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active");
});



if ($(window).width() < 1200) {
    $('.work__items').slick({
      centerMode: true,
      dots: false,
      infinite: true,
      arrows: true
    });
  }

// if ($(window).width() < 760) {
//     $('.tarif__items').slick({
//       centerMode: true,
//       dots: true,
//       infinite: true,
//       arrows: true,
//       variableWidth: true
//     });
//   }