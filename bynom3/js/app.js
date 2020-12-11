widthh = $(window).width();

if (widthh > 1200) {
  $("html").niceScroll({
    scrollspeed: 150,
  });
}

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

window.onload = function () {
  setTimeout(document.body.classList.add('loaded'), 1000);
  $("#preloader").fadeOut(1000);
}



$('.team__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: false,
  prevArrow: $('.team__slider_arrows .slider__prev'),
  nextArrow: $('.team__slider_arrows .slider__next'),
//   responsive: [
//   {
//     breakpoint: 720,
//     settings: {
//       slidesToShow: 1,
//     }
//   },
// ] 
}); 

$(".mobile-menu").click(function(){
  $(".mobile__menu").toggleClass("active");
});

$(".close-menu").click(function(){
  $(".mobile__menu").removeClass("active")
});

$('.test__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.test__slider_arrows .slider__prev'),
    nextArrow: $('.test__slider_arrows .slider__next'),
    dots: false,
}); 

$('.blog__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.blog__slider_arrows .slider__prev'),
    nextArrow: $('.blog__slider_arrows .slider__next'),
    dots: false,
}); 

if ($(window).width() < 970) {
  $('.test__slider-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.test__slider_arrows .slider__prev'),
    nextArrow: $('.test__slider_arrows .slider__next'),
    dots: false,
}); 
}
$( function() {
  //On Scroll Functionality
  $(window).scroll( function() {
    var windowTop = $(window).scrollTop();
  });
  
  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on('click', function(e){
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    },1000);
    e.preventDefault();
  });
}); 


$(".cases__item, .main-case__item, .preloader__logo").animated("fadeIn", 2000);
$(".main__img img, .preloader__load").animated("fadeInUp", 2000);
$(".preloader__logo").animated("fadeInDown", 2000);
$(".main__text_left, .main__text_right").animated("fadeInUp", 2000);
$(".logo, .logo2, .main-nav__category, .main-case__header_text").animated("fadeInLeft", 2000);
$(".header__links, .main-nav__year, .main-case__header_year").animated("fadeInRight", 2000);

$('.footer__projects_up img').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 100){
//     $('header').addClass("sticky");
//   }
//   else{
//     $('header').removeClass("sticky");
//   }
// });

// body.addEventListener('scroll', () => { 
//     let scrollTop = window.scrollY;
//     console.log(scrollTop);

//   let headerWrapper = document.querySelector('header');
//   console.log(headerWrapper);

//   if(scrollTop >= 100){
//       headerWrapper.classList.add('sticky');
//   }else{    
//       headerWrapper.classList.remove('sticky');
//   }
// });


var lastScrollTop = 0;
$(window).scroll(function(event){
var st = $(this).scrollTop();
if (st > lastScrollTop){
  document.querySelector('header').classList.add('sticky');
  document.querySelector('header').classList.remove('non-sticky');
} else {
  document.querySelector('header').classList.add('non-sticky');
  document.querySelector('header').classList.remove('sticky');
}
lastScrollTop = st;
});

function nextMsg(i) {
    if (messages.length == i) {
        i = 0;
    }
    $('.main-404__text').html(messages[i]).fadeIn(500).delay(1000).fadeOut(500, function() {
        nextMsg(i + 1);
    });

};

var messages = [
  "<span>404</span>",
  "извините,",
  "страница",
  "в разработке"
];

nextMsg(0);

// window.onload = function () {
//   setTimeout(function(){
//     $("#main-404").addClass("active");
//   }, 500); 
//  setInterval(function(){
//     $("#main-404").toggleClass("active");
//   }, 6500)
// }