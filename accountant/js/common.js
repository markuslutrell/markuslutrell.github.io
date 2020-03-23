
  
    $.afterlag(function() {
      document.body.classList.add('loaded');
      $("section").animated("fadeIn", 2000);
      $(".branch-1, .branch-4, .branch-6").animated("fadeInLeft", 2000);
      $(".branch-2, .branch-3, .branch-5").animated("fadeInRight", 2000);
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

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('.js-overlay-campaign').fadeIn();
            $('.js-overlay-campaign').addClass('disabled');
            $('#fullpage').css('filter', 'blur(10px)');
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
  $('body').css('filter', 'blur(10px)');
  $('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign').fadeOut();
  $('.js-overlay-campaign2').fadeOut();
  $('#fullpage').css('filter', 'none');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign').fadeOut();
    $('#fullpage').css('filter', 'none');
  }
});

$(".accordeon dd").hide().prev().click(function() {
  $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active");
});
