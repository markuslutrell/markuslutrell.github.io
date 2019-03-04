$(window).on('load', function(){
  $(".preloader").fadeOut("slow");
});


// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function(){ 
  $('.js-overlay-campaign').fadeIn(250)
  $('.js-overlay-campaign').addClass('disabled')
});



// закрыть на крестик
$('.js-close-campaign').click(function(){
  $('.js-overlay-campaign').fadeOut()
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $('.js-popup-campaign');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0)
    $('.js-overlay-campaign').fadeOut()
  
});

// Модальное окно 2

// открыть по кнопке
$('.js-button-campaign2').click(function(){ 
  $('.js-overlay-campaign2').fadeIn(250)
  $('.js-overlay-campaign2').addClass('disabled')
});



// закрыть на крестик
$('.js-close-campaign').click(function(){
  $('.js-overlay-campaign2').fadeOut()
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $('.js-popup-campaign2');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0)
    $('.js-overlay-campaign2').fadeOut()
  
});


$('.feedback__slider').slick()

$(".tab_item").not(":first").hide()
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active")
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active")

$(".tab_item2").not(":first").hide()
$(".wrapper2 .tab2").click(function() {
  $(".wrapper2 .tab2").removeClass("active").eq($(this).index()).addClass("active")
  $(".tab_item2").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active")

$(".tab_item3").not(":first").hide()
$(".wrapper3 .tab3").click(function() {
  $(".wrapper3 .tab3").removeClass("active").eq($(this).index()).addClass("active")
  $(".tab_item3").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active")


$(window).scroll(function() { 
  if ($(this).scrollTop() > $(".note").offset().top - 200) 
    $(".dots__container").addClass('dots__animation')
});

$(function (){ 
    $(' .textillate-demo ').textillate({
        in: {
            effect: 'fadeIn',
            delay: 15,
            delayScale: 1
        },
        type: 'char'
    })
});

$(document).ready(function() {
  $(".main__subheader").animated("fadeIn")
  $(".main__contact").animated("fadeIn")
  $("#main .tab_content").animated("fadeIn")
  $(".main__container .pr-text").animated("fadeIn")
  $(".services__item").animated("fadeIn")
  $(".promotion__text_subheader").animated("fadeIn")
  $(".promotion__text").animated("fadeIn")
  $(".section__btn").animated("fadeIn")
  $(".note").animated("fadeInRight")
  $(".skafandr").animated("fadeIn")
  $(".coverage__text_container .section__btn").animated("fadeIn")
  $(".coverage__text").animated("fadeIn")
  $(".coverage__text_subheader").animated("fadeIn")
  $(".demo-btn").animated("fadeIn")
  $(".iphone").animated("fadeIn")
  $(".portfolio__item").animated("fadeIn")
  $(".feedback__slider").animated("fadeIn")
  $(".about__text_content").animated("fadeInUp")
  $(".about__text_title").animated("fadeInUp")
  $(".about__text_subtitle").animated("fadeInUp")
  $(".about__bottom-text").animated("fadeIn")
  $("#form").animated("fadeIn")
  $("footer").animated("fadeIn")
  $(".plate__container").animated("fadeIn")
  $(".about__img").animated("fadeIn")
  $("h2").animated("fadeIn")
});


 $(document).ready(function(){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});