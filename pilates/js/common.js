window.onload = function () {
  document.body.classList.add('loaded');
}



let screen = $(window).width();

if (screen < 1310 && screen > 760) {
  $( ".club__key" ).addClass("js-button-campaign");
} else {
  $( ".club__key" ).click(function() {
    $('.club__form').addClass("active");
  });
}


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

// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() {  
  $('.js-overlay-campaign').fadeIn();
  $('.js-overlay-campaign').addClass('disabled');
});

$('.js-button-campaign2').click(function() {  
  $('.js-overlay-campaign2').fadeIn();
  $('.js-overlay-campaign2').addClass('disabled');
});

$('.js-button-campaign3').click(function() { 
  $('.js-overlay-campaign3').fadeIn();
  $('.js-overlay-campaign3').addClass('disabled');
});

$('.js-button-campaign4').click(function() { 
  $('.js-overlay-campaign4').fadeIn();
  $('.js-overlay-campaign4').addClass('disabled');
});

$('.js-button-campaign5').click(function() { 
  $('.js-overlay-campaign5').fadeIn();
  $('.js-overlay-campaign5').addClass('disabled');
});

$('.js-button-campaign6').click(function() { 
  $('.js-overlay-campaign6').fadeIn();
  $('.js-overlay-campaign6').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign').fadeOut();
  $('.js-overlay-campaign2').fadeOut();
  $('.js-overlay-campaign3').fadeOut();
  $('.js-overlay-campaign4').fadeOut();
  $('.js-overlay-campaign5').fadeOut();
  $('.js-overlay-campaign6').fadeOut();
  $('.club__overlay').removeClass("active");
  $('.club__form').removeClass("active");
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign').fadeOut();  }
});

$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign2');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign2').fadeOut();
  }
});

$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign3');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign3').fadeOut();
  }
});

$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign4');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign4').fadeOut();
  }
});
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign5');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign5').fadeOut();
  }
});
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign6');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign6').fadeOut();
  }
});

$(".accordeon dd").hide().prev().click(function() {
  $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active");
});


$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn(1000)
}).eq(0).addClass("active");

if ($(window).width() < 760) {
  $('.why__items').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000
  });
}

if ($(window).width() < 760) {
  $('#level').removeClass("desktop-slick");
  $('#feedback').removeClass("desktop-slick");
}
 

$(".backpack__course .backpack__course_slider").hide();

$(".backpack__course_lessons-btn").click(function() {
  $(this).parents(".backpack__course").find(".backpack__course_slider").not(this).slideUp().prev().removeClass("active");
  $(this).parents(".backpack__course").find(".backpack__course_slider").not(":visible").slideDown().prev().addClass("active");
});

$(".news__item .opened").hide();

$(".news__item_more.mini").click(function() {
  $(this).parents(".news__item").find(".opened").not(this).slideUp().prev().removeClass("active");
  $(this).parents(".news__item").find(".opened").not(":visible").slideDown().prev().addClass("active");
  $(this).parents(".news__item").find(".mini").not(this).slideUp().prev().removeClass("active");
  $(this).parents(".news__item").find(".mini").not(":visible").slideDown().prev().addClass("active");
  $(this).hide();
});

$(".news__item_more.opened").click(function() {
  $(this).parents(".news__item").find(".opened").not(this).slideUp().prev().removeClass("active");
  $(this).parents(".news__item").find(".opened").not(":visible").slideDown().prev().addClass("active");
  $(this).parents(".news__item").find(".mini").not(this).slideUp().prev().removeClass("active");
  $(this).parents(".news__item").find(".mini").not(":visible").slideDown().prev().addClass("active");
  $(this).hide();
});

$(".login-popup__register").click(function() {
  $(".register-form").addClass("active");
  $(".login-form").removeClass("active");
});

$(".show-password").click(function() {
  if ($(this).text() === "Показать пароль") {
    $(this).text("Скрыть пароль");
    $(this).next().attr("type", "text");    
  } else {
    $(this).text("Показать пароль");
    $(this).next().attr("type", "password");
  }
});

$('.what-is__slider').slick({
  centerMode: true,
  dots: false,
  infinite: true,
  arrows: false,
  variableWidth: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 1000
});

$('.lessons__slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  variableWidth: true,
  slidesToShow: 1,
});

$('.level__slider').slick({
  centerMode: true,
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 1,
  speed: 10,
  variableWidth: true,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        speed: 500,
        initialSlide: 0,
        infinite: true
      }
    }
  ]
});

$('.feedback__slider').slick({
  centerMode: true,
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 1,
  speed: 10,
  variableWidth: true,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        speed: 500,
        initialSlide: 0,
        infinite: true
      }
    }
  ]
});

$('.backpack__course_slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  variableWidth: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1310,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    }
  ]
});

$(document).ready(function() { // Ждём загрузки страницы
  $(".news__small-photo, .news__item_main-photo, .c-courses__small_photo, .c-courses__main_img").click(function(){ // Событие клика на маленькое изображение
    var img = $(this);  // Получаем изображение, на которое кликнули
    var src = img.attr('data-src'); // Достаем из этого изображения путь до картинки
    $("body").append("<div class='popup-img'>"+ //Добавляем в тело документа разметку всплывающего окна
             "<div class='popup_bg-img'></div>"+ // Блок, который будет служить фоном затемненным
             "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
             "</div>"); 
    $(".popup-img").fadeIn(300); // Медленно выводим изображение
    $(".popup_bg-img").click(function(){  // Событие клика на затемненный фон    
      $(".popup-img").fadeOut(300); // Медленно убираем всплывающее окно
      setTimeout(function() { // Выставляем таймер
        $(".popup-img").remove(); // Удаляем разметку всплывающего окна
      }, 300);
    });
  });
  
});

$(".c-courses__item_opened").hide();

$(".courses__img").click(function(){
  let opened = $(this).parent().next();
  let header = $(this).parent().find(".c-courses__item_header").text();
  $(this).parent().parent().parent().find(".tab__item_header").html(header+'<img src="img/arrow.png" alt="Arrow" class="back">');
  $(this).parent().parent().parent().find(".tab__item_header").addClass("mobile-header");
  opened.fadeIn(500)
  $(this).parent().parent().find(".c-courses__item").hide(500);
  $(".tab__item_header .back").click(function(){
    $(this).parent().removeClass("mobile-header");
    $(this).parent().parent().find(".c-courses__item:first-child").show(500);
    $(this).parent().parent().find(".c-courses__item").show();
    $(this).parent().parent().find(".c-courses__item_opened").hide(500);
    $(this).parent().html("Курсы");
    
  });
});

