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

$(window).scroll(function() {
  if ($(this).scrollTop() > 100){
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
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

$(".about__items").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 1500,
    infinite: true,
    responsive: [
      
    ]
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