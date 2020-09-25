$(".accordeon dd").hide().prev().click(function() {
  $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active");
});

if ($(document).width() < 768) {
    $('.how__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
}); 
}

if ($(document).width() > 1200) {
   $(".tab_item").not(":first").hide();
$(".offer__wrapper .tab").click(function() {
  $(".offer__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

}

$(".prices__table_wrapper").mCustomScrollbar({
  theme:"dark",
  mouseWheel: { preventDefault: true }
});




let $slider2 = $('.test__slider');

if ($slider2.length) {
  let currentSlide;
  let slidesCount;
  // let sliderCounter = document.querySelector(".slider__counter");
  // console.log(sliderCounter);
  let sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  let updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).html(currentSlide + ' / ' + '<span>' + slidesCount + '</span>')
  };

  $slider2.on('init', function(event, slick) {
    $slider2.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider2.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider2.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $('#testimonials .top__prev'),
    nextArrow: $('#testimonials .top__next'),
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
}

$('.top__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $('#top .top__prev'),
    nextArrow: $('#top .top__next'),
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
  ]
}); 

$(".mobile__menu_sublist-open").click(function(){
  $(this).toggleClass("active");
  $(".mobile__submenu").toggleClass("active");
});

$(".footer__message_close").click(function(){
  $(".footer__message").slideUp();
});


$(".header__mobile").click(function(){
  $(".mobile__menu").addClass("active");
  $(".mobile__menu_overlay").addClass("active");
});

$(".close-menu").click(function(){
  $(".mobile__menu").removeClass("active");
  $(".mobile__menu_overlay").removeClass("active");
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