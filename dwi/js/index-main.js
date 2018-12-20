
$(document).ready(function() {
  $(".fade-left").animated("fadeInLeft");
  $(".fade-right").animated("fadeInRight");
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
  }
});

$('.slider').slick({
  fade: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000
});