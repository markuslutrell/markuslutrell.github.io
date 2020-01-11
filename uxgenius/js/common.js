$.afterlag(function() {  
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

  $("section, header").animated("fadeIn", 2000);
  $(".main-block__left").animated("fadeInLeft", 2000);
  $(".main-block__right").animated("fadeInRight", 2000);
  $(".form__offer").animated("pulse", 2000);
  $(".advantages__item-1 img, .advantages__item-3 img").animated("fadeInLeft", 2000);
  $(".advantages__item-2 img, .advantages__item-5 img").animated("fadeInRight", 2000);
});