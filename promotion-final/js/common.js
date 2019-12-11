$("footer").animated(".preloader", 2000);



$(window).on('load',(function() {
setTimeout(function () { 
$(".preloader").delay(100).fadeOut(2000).remove();   
}, 1500); 
if (screen.width > 1200) {
  setTimeout(function(){
       $('#fullpage').fullpage({
      autoScrolling:true,
      navigation: true,
      responsiveWidth: 1200,
      scrollOverflow: true,
      scrollingSpeed: 1200,
      anchors: ['main-section', 'offer', 'steps', 'main-form', 'sevenp-section', 'team-section', 'footer-section'],
      afterLoad: function(anchorLink, index){
        $(".main-block__item-1, .main-block__item-3").animated("fadeInLeft", 2000);
        $(".main-block__item-2, .main-block__item-4").animated("fadeInRight", 2000);
        $(".heart, .heart__shadow").animated("fadeIn", 2000);
        $(".advantages__item").animated("fadeInLeft", 2000);
        $(".advantages__header, .advantages__offer").animated("fadeInDown", 2000);
        $("#form h2, #footer h2").animated("fadeIn", 1000);
        $("#form input, #form button, #footer input, #footer button").animated("fadeInUp", 1000);
        $(".sevenP__item-1, .sevenP__item-2, .sevenP__item-3").animated("fadeInLeft", 2000);
        $(".sevenP__item-5, .sevenP__item-6, .sevenP__item-7").animated("fadeInRight", 2000);
        $(".sevenP__item-4").animated("fadeInUp", 2000);
        $(".sevenP-img").animated("fadeIn", 3000);
        $(".sevenP-shadow").animated("fadeInUp", 2000);
        $(".team__slider").animated("fadeInUp", 2000);
        $("h2").animated("fadeIn", 2000);
        $("footer").animated("fadeIn", 2000);
        $(".left-card").animated("fadeInDown", 2000);
        $(".right-card").animated("fadeInUp", 2000);
        $(".advantages__item_animated-text").animated("fadeIn", 2000);
      }
    });
     }, 1000);
}
}));

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


$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('.js-overlay-campaign').fadeIn();
            $('.js-overlay-campaign').addClass('disabled');
            $('#fullpage').css('filter', 'blur(10px)');
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

$(document).ready(function() {
  $(".team__slider").slick({
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    speed: 700,
    responsive: [
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    }]
  })
});




// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 
  
  $('.js-overlay-campaign').fadeIn();
  $('body').css('filter', 'blur(10px)');
  $('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
  $('.js-overlay-campaign').fadeOut();
  $('.js-overlay-campaign2').fadeOut();
  $('#fullpage').css('filter', 'none');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
  var popup = $('.js-popup-campaign');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-campaign').fadeOut();
    $('#fullpage').css('filter', 'none');
  }
});


$( ".heart" ).mgGlitch({
  glitch1TimeMin : 50,
  glitch1TimeMax : 100,
  glitch2TimeMin : 30,
  glitch2TimeMax : 100
});
$( ".heart__shadow" ).mgGlitch({
  glitch1TimeMin : 50,
  glitch1TimeMax : 200,
  glitch2TimeMin : 10,
  glitch2TimeMax : 15,
  zIndexStart : 1
});
 

var item = document.querySelector("#moveItem");
var itemRect = item.getBoundingClientRect();

document.addEventListener("mousemove", followMouse, false);

function followMouse(e) {
    var xPos = e.pageX - itemRect.width / 2;
    var yPos = e.pageY - itemRect.height / 2;

    // console.log(xPos + " " + yPos);

    item.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}