$(".accordeon dd").hide().prev().click(function() {
  $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
  $(this).parents(".accordeon").find("dl").not(this).removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active").parents("dl").toggleClass("active");
});

widthh = $(window).width();

if (widthh > 1200) {
  $("html").niceScroll({
    scrollspeed: 100,
  });
}

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

window.onload = function () {
  setTimeout(document.body.classList.add('loaded'), 1000);
}

$(window).scroll(function() {
  if ($(this).scrollTop() > 100){
    $('.fixed-header').addClass("sticky");
  }
  else{
    $('.fixed-header').removeClass("sticky");
  }
});

$(".feedback__full_close").click(function() {
  $(this).parent().parent().removeClass("active");
});

$(".popup-section__form_close").click(function() {
  $(this).parent().parent().parent().removeClass("active");
});

$(".js-button").click(function() {
  $("#popup1").addClass("active");
});
$(".js-button2").click(function() {
  $("#popup2").addClass("active");
});
$(".js-button3").click(function() {
  $("#popup3").addClass("active");
});
$(".js-button4").click(function() {
  $("#popup4").addClass("active");
});

$(".feedback__slide1 .feedback__slide_more").click(function() {
  $(".feedback__full_overlay1").addClass("active");
});
$(".feedback__slide2 .feedback__slide_more").click(function() {
  $(".feedback__full_overlay2").addClass("active");
});
$(".feedback__slide3 .feedback__slide_more").click(function() {
  $(".feedback__full_overlay3").addClass("active");
});

$(document).ready(function() { 
  $(".report__item").animated("fadeInRight", 2000);
  $(".task__item").animated("fadeInRight", 2000);
});

$(".portfolio__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      
    ]
  });

$(".feedback__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      
    ]
  });

if (widthh > 770) {
  $(".about__items").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 1500,
    infinite: true,
  });
}

$(".about__skills").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 1500,
    infinite: true,
  });


$(".header__mobile").click(function(){
  $("#mobile__menu").addClass("active");
});

$(".header__close").click(function(){
  $("#mobile__menu").removeClass("active");
});

let calcInput = $("#calc4");

let value = calcInput.attr("value");
let plus = $(".plus");
let minus = $(".minus");

plus.click(function(){
  calcInput.attr("value", ++value);
  if (value == "") {
    calcInput.attr("value", "1");
  }
});

minus.click(function(){
  if (value > 1) {
    calcInput.attr("value", --value);
  }
});


$(".page-select").click(function(e){
  $(this).toggleClass("rotate");
  if ($(this).has(e.target).length === 0){
     $(this).toggleClass("rotate");
  }
});


// if (navigator.platform === 'MacIntel' || navigator.platform === 'MacPPC') {
//  $('.calculator__price span').css("font-family", "Arial");
// }​