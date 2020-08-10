$(".accordeon dd").hide().prev().click(function() {
  $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active");
});

if ($(document).width() < 1180) {
    $('.steps__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
}); 
}

$('.feedback__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 730,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 0.5,
        slidesToScroll: 0.5,
      }
    },
  ]
}); 

$('.top__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
}); 


$(".mobile__menu").click(function(){
  $("#mobilemenu").addClass("active");
});

$(".close-menu").click(function(){
  $("#mobilemenu").removeClass("active");
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