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


  $("section, header").animated("fadeIn", 2000);
  $(".main-block__left").animated("fadeInLeft", 2000);
  $(".main-block__right").animated("fadeInRight", 2000);
  $(".form__offer").animated("pulse", 2000);
  $(".advantages__item-1 img, .advantages__item-3 img").animated("fadeInLeft", 2000);
  $(".advantages__item-2 img, .advantages__item-5 img").animated("fadeInRight", 2000);
});

let inputs = document.querySelectorAll(".form__input_item > input");
let btns = document.querySelectorAll("a.btn");

for(i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function() {
      this.nextElementSibling.style.fontSize = "12px";
      this.nextElementSibling.style.transform = "translateY(-295%)";
  });

  inputs[i].addEventListener("focusout", function() {
    if(this.value !== "") {
      this.nextElementSibling.style.fontSize = "12px";
      this.nextElementSibling.style.transform = "translateY(-295%)";
    }
    else {
      this.nextElementSibling.style.fontSize = "15px";
      this.nextElementSibling.style.transform = "translateY(-50%)";
    }
  });
}

for(i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    setTimeout(function(){
      document.querySelector("#form-address").focus();
    }, 300);
  }
}