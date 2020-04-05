$(".preloader img").animated("zoomIn", 3000);
window.onload = function(){
    setTimeout(function(){
    $(".preloader").animated("fadeOut", 3000);
    $.afterlag(function() {
    let mainBtn = document.querySelector(".main__btn");
    let header = document.querySelector(".glitch")
    let body = document.querySelector("body")
    mainBtn.onclick = function(){
      this.classList.add("visited");
      body.classList.add("red");
      header.classList.add("unglitch");
    }

    let menu = document.querySelector(".menu")
    let menuContent = document.querySelector(".menu__content")
    menu.onclick = function(){
      menu.classList.toggle("active");
      menuContent.classList.toggle("active");
    }
  });
  }, 2000);
}



// $(document).ready(function() {

//     //E-mail Ajax Send
//     $("form").submit(function() { //Change
//         var th = $(this);
//         $.ajax({
//             type: "POST",
//             url: "mail.php", //Change
//             data: th.serialize()
//         }).done(function() {
//             $('.js-overlay-campaign2').fadeIn();
//             $('.js-overlay-campaign2').addClass('disabled');
//             setTimeout(function() {
//                 // Done Functions
//                 th.trigger("reset");
//             }, 1000);
//         });
//         return false;
//     });

// });

// $(function() {
// $('form').submit(function(e) {
// var $mainForm = $(this);
// $.ajax({
// type: $mainForm.attr('method'),
// url: $mainForm.attr('action'),
// data: $mainForm.serialize()
// }).done(function() {
// $('.js-overlay-campaign2').fadeIn();
//  $('.js-overlay-campaign2').addClass('disabled');
// });
// //отмена действия по умолчанию для кнопки submit
// e.preventDefault();
// });
// });

// $(document).ready(function() {
//   $(".auto__slider").slick({
//   arrows: true,
//   slidesToShow: 1,
//   infinite: true,
//   slidesToScroll: 1,
//   speed: 500
// });

// $(".auto__inner-slider").slick({
//   arrows: true,
//   slidesToShow: 1,
//   infinite: true,
//   slidesToScroll: 1,
//   swipe: false,
// });
// });



// increment = 1;

// $(".accordeon dd").hide().prev().click(function() {
//     $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
//     $(this).next().not(":visible").slideDown().prev().addClass("active");
//     if (increment % 2 != 0) {
//       $(this).text('Скрыть');
//       increment++;
//     } else {
//       $(this).text('Читать');
//       increment++;
//     }

// });

// increment2 = 1;

// $(".more__btn").click(function() {
//     if (increment % 2 != 0) {
//       $(".hidden__content").slideDown();
//       $(this).text('Скрыть');
//       increment++;
//     } else {
//       $(".hidden__content").slideUp();
//       $(this).text('Читать ещё');
//       increment++;
//     }

// });


// $( function() {
  
//   //On Scroll Functionality
//   $(window).scroll( function() {
//     var windowTop = $(window).scrollTop();
//     windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
//     windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
//   });
  
//   //Smooth Scrolling Using Navigation Menu
//   $('a[href*="#"]').on('click', function(e){
//     $('html,body').animate({
//       scrollTop: $($(this).attr('href')).offset().top - 100
//     },500);
//     e.preventDefault();
//   });

  
// }); 

// $(document).ready(function() { 
//   $("section").animated("fadeIn", 2000);
//   $("footer").animated("fadeIn", 2000);
//   $("header").animated("fadeIn", 2000);
//   $("h1").animated("fadeInDown", 1000); 
//   $(".main__item").animated("fadeInDown", 1000);
//   // $(".main__btn").animated("fadeInUp", 1000);
//   $(".main__arrow img").animated("fadeInDown", 5000);
//   $(".dop-form").animated("fadeInRight", 5000);
//   $(".advantages__items_left").animated("fadeInLeft", 2000);
//   $(".advantages__item_2").animated("fadeInRight", 2000);
//   $(".advantages__item_3").animated("fadeInRight", 2000);
//   $("h2").animated("fadeInUp", 2000);
//   $(".subheader").animated("fadeInUp", 2000);
//   $(".fade-down").animated("fadeInUp", 2000);
//   $(".auto__slider").animated("fadeIn", 2000);
//   $("#form form").animated("fadeInUp", 2000);
//   $("footer form").animated("fadeInUp", 2000);
//   $("dl").animated("fadeInUp", 2000);
//   $(".buy__item").animated("fadeInLeft", 2000);
//   $(".more__section").animated("fadeIn", 2000);
// });

// $(document).ready(function() { // Ждём загрузки страницы
  
//   $(".mini").click(function(){ // Событие клика на маленькое изображение
//     var img = $(this);  // Получаем изображение, на которое кликнули
//     var src = img.attr('src'); // Достаем из этого изображения путь до картинки
//     $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
//              "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
//              "<div class='popup_img_block'><img src='"+src+"' class='popup_img' /></div>"+
//              "<div class='close-popup'><span></span><span></span></div>"+ // Само увеличенное фото
//              "</div>"); 
//     $(".popup").fadeIn(500); // Медленно выводим изображение
//     $(".popup_bg").click(function(){  // Событие клика на затемненный фон    
//       $(".popup").fadeOut(500); // Медленно убираем всплывающее окно
//       setTimeout(function() { // Выставляем таймер
//         $(".popup").remove(); // Удаляем разметку всплывающего окна
//       }, 500);
//     });
//     $(".close-popup").click(function(){  // Событие клика на затемненный фон    
//       $(".popup").fadeOut(500); // Медленно убираем всплывающее окно
//       setTimeout(function() { // Выставляем таймер
//         $(".popup").remove(); // Удаляем разметку всплывающего окна
//       }, 500);
//     });
//   });
  
// });

// $(".fake-btn").click(function(){ 
//      $(".dop-form").addClass("active-input");
// });

// $(".close-form").click(function(){ 
//      $(".dop-form").removeClass("active-input");
// });



// // Модальное окно

// // открыть по кнопке
// $('.js-button-campaign').click(function() { 
  
//   $('.js-overlay-campaign').fadeIn();
//   $('.js-overlay-campaign').addClass('disabled');
// });

// // закрыть на крестик
// $('.js-close-campaign').click(function() { 
//   $('.js-overlay-campaign').fadeOut();
//   $('.js-overlay-campaign2').fadeOut();
// });

// // закрыть по клику вне окна
// $(document).mouseup(function (e) { 
//   var popup = $('.js-popup-campaign');
//   if (e.target!=popup[0]&&popup.has(e.target).length === 0){
//     $('.js-overlay-campaign').fadeOut();
    
//   }
// });


// // function getCookie(name) {
// //     var matches = document.cookie.match(new RegExp(
// //     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
// //     ));
// //     return matches ? decodeURIComponent(matches[1]) : undefined;
// // }
// // function writeCookie() {
// // // функция записывает cookie на 1 день, с которой мы не показываем окно
// //     var date = new Date;
// //     date.setDate(date.getDate() + 1);    
// //     document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();        
// // }    
// // // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
// // var alertwin = getCookie("alertwin");
// // if (alertwin != "no") {
// //     window.setTimeout(function() { // запускаем таймер на 15 секунд
// //         if ($(".exitblock").is(':hidden')) { // если блок не показывается, то убираем его навсегда
// //             $(".exitblock").remove();     
// //         }
// //         writeCookie(); 
// // // Устанавливаем куку через 15 секунд, видел ли или нет посетитель всплывающее окно
// //     }, 15000);        
// //     $(document).mouseleave(function(e){
// //         if (e.clientY < 0) {
// //             $(".exitblock").fadeIn("fast");      
// //             writeCookie(); 
// // // Устанавливаем куку когда посетитель увидел окно, даже если не прошло 15 секунд
// //         }    
// //     });
// //     $(document).click(function(e) {
// //         if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
// //             $(".exitblock").remove();
// //         }
// //     });  
// // }

// window.setTimeout(function() {
//     $(document).mouseleave(function(e){
//   if (e.clientY < 10) {
//     $(".exitblock").fadeIn("fast");
//   }    
// });
// $(document).click(function(e) {
//   if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
//     $(".exitblock").remove();
//   }
// });

// }, 10000);