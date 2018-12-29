
$(document).ready(function() {
  $(".fade-left0").animated("fadeInLeft");
      $(".fade-right0").animated("fadeInRight");
      $(".fade-bottom0").animated("fadeInUp");
      $(".fade-in0").animated("fadeIn");
      $(".fade-left1").animated("fadeInLeft");
      $(".fade-right1").animated("fadeInRight");
      $(".fade-bottom1").animated("fadeInUp");
      $(".fade-in1").animated("fadeIn");
      $(".fade-left2").animated("fadeInLeft");
      $(".fade-right2").animated("fadeInRight");
      $(".fade-bottom2").animated("fadeInUp");
      $(".fade-in2").animated("fadeIn");
      $(".fade-left3").animated("fadeInLeft");
      $(".fade-right3").animated("fadeInRight");
      $(".fade-bottom3").animated("fadeInUp");
      $(".fade-in3").animated("fadeIn");
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
    scrollingSpeed: 800,
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
      $(".fade-left0").animated("fadeInLeft");
      $(".fade-right0").animated("fadeInRight");
      $(".fade-bottom0").animated("fadeInUp");
      $(".fade-in0").animated("fadeIn");
      $(".fade-left1").animated("fadeInLeft");
      $(".fade-right1").animated("fadeInRight");
      $(".fade-bottom1").animated("fadeInUp");
      $(".fade-in1").animated("fadeIn");
      $(".fade-left2").animated("fadeInLeft");
      $(".fade-right2").animated("fadeInRight");
      $(".fade-bottom2").animated("fadeInUp");
      $(".fade-in2").animated("fadeIn");
      $(".fade-left3").animated("fadeInLeft");
      $(".fade-right3").animated("fadeInRight");
      $(".fade-bottom3").animated("fadeInUp");
      $(".fade-in3").animated("fadeIn");
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

$('.typography-slider').slick({
  fade: true,
  dots: false,
  arrows: true,
  speed: 1000,
  swipe: false,
    responsive: [
    {
      breakpoint: 580,
      settings: {
        swipe: true
      }
    }
  ]
});

$('#fullpage2').fullpage({
  sectionSelector: 'section',
    navigation: true,
    controlArrows: false,
    scrollingSpeed: 800,
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
      $(".fade-left0").animated("fadeInLeft");
      $(".fade-right0").animated("fadeInRight");
      $(".fade-bottom0").animated("fadeInUp");
      $(".fade-in0").animated("fadeIn");
      $(".fade-left1").animated("fadeInLeft");
      $(".fade-right1").animated("fadeInRight");
      $(".fade-bottom1").animated("fadeInUp");
      $(".fade-in1").animated("fadeIn");
      $(".fade-left2").animated("fadeInLeft");
      $(".fade-right2").animated("fadeInRight");
      $(".fade-bottom2").animated("fadeInUp");
      $(".fade-in2").animated("fadeIn");
      $(".fade-left3").animated("fadeInLeft");
      $(".fade-right3").animated("fadeInRight");
      $(".fade-bottom3").animated("fadeInUp");
      $(".fade-in3").animated("fadeIn");
  }
});

$(function() {
var el;
$("#polzunok__item").change(function() {
el = $(this);
el
.next("#ong")
.text(el.val() + ' (шт)');
})
.trigger('change');
});

$(function() {
var el;
$("#polzunok__item2").change(function() {
el = $(this);
el
.next("#ong2")
.text(el.val() + ' (шт)');
})
.trigger('change');
});


$(function() {
var el;
$("#polzunok__item3").change(function() {
el = $(this);
el
.next("#ong3")
.text(el.val() + ' (шт)');
})
.trigger('change');
});


$(function() {
var el;
$("#polzunok__item4").change(function() {
el = $(this);
el
.next("#ong4")
.text(el.val() + ' (шт)');
})
.trigger('change');
});


$(function() {
var el;
$("#polzunok__item5").change(function() {
el = $(this);
el
.next("#ong5")
.text(el.val() + ' (шт)');
})
.trigger('change');
});


$(function() {
var el;
$("#polzunok__item6").change(function() {
el = $(this);
el
.next("#ong6")
.text(el.val() + ' (шт)');
})
.trigger('change');
});


$(function() {
var el;
$("#polzunok__item7").change(function() {
el = $(this);
el
.next("#ong7")
.text(el.val() + ' (шт)');
})
.trigger('change');
});


$(function() {
var el;
$("#polzunok__item8").change(function() {
el = $(this);
el
.next("#ong8")
.text(el.val() + ' (шт)');
})
.trigger('change');
});

