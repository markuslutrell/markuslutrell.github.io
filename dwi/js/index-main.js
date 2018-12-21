
$(document).ready(function() {
  $(".fade-left").animated("fadeInLeft");
  $(".fade-right").animated("fadeInRight");
  $(".fade-bottom").animated("fadeInUp");
});

 

$( ".glitch-img" ).mgGlitch({
  glitch1TimeMin : 300,
  glitch1TimeMax : 600,
  glitch2TimeMin : 5,
  glitch2TimeMax : 50


});

$('#fullpage').fullpage({
  sectionSelector: 'section',
  controlArrows: false,
    navigation: true,
    controlArrows: false,
    scrollingSpeed: 1000,
    menu: 'header',
    verticalCentered: true,
    responsiveWidth: 996,
    scrollOverflow: true,
    afterLoad: function(anchorLink, index) {
      if (index == 5) {
          $('#fp-nav').addClass('now');
      } else if (index == 3) {
        $('#fp-nav').addClass('now');
      }
      else {
        $('#fp-nav').removeClass('now');
      }

      if (index != 1) {
        $('header').addClass('header-shadow');
      } else {
        $('header').removeClass('header-shadow');
      }

      $('.logo').click(function () {
        index == 1;
      });
      $(".fade-left").animated("fadeInLeft", 2000);
      $(".fade-right").animated("fadeInRight", 2000);
      $(".fade-bottom").animated("fadeInUp",2000);
      $(".fade-in").animated("fadeIn",2000);
  }
});

$('.slider').slick({
  fade: true,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000
});

