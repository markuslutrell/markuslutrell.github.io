if ($(document).width() < 1200) {
    $('#samples .samples__items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      variableWidth: true,
      infinite: false,
      responsive: [
      {
        breakpoint: 720,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      },
    ] 
  }); 
}

if ($(document).width() < 1200) {
    $('#related .samples__items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      variableWidth: true,
      infinite: false,
      responsive: [
      {
        breakpoint: 720,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      },
    ] 
  }); 
}

if ($(document).width() < 1200) {
    $('.team__items').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: false,
      responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        }
      },
    ] 
  }); 
}

$(".header__mobile.tablet").click(function(){
  $(this).toggleClass("active");
  $(".tablet__menu").toggleClass("active");
  $("header").toggleClass("active-tablet");
});

$(".header__mobile.mobile").click(function(){
  $(".mobile-menu").addClass("active")
});

$(".header__mobile_close").click(function(){
  $(".mobile-menu").removeClass("active")
});

$(".header-search__mobile").click(function(){
  $(".mobile-search").addClass("active")
});

$(".mobile-search__close").click(function(){
  $(".mobile-search").removeClass("active")
});


$('.test__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.text__prev'),
    nextArrow: $('.test__next'),
    dots: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
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

$('#my_button').on('click', function() {
  if ($('#my_form')[0].checkValidity() == false) {
    alert("You have to select rating");
  }
});

$('.validation-form').focusout(function(){
  $(this).addClass("error");
  $(this).parent().addClass("error");
});

// $('.sample__form_input-error').focusout(function(){
//   $(this).addClass("error");
//   $(this).parent().addClass("error");
// });