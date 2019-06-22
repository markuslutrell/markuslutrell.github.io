$(".feedback__slider").slick({
  dots: true,
  arrows: false
});

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

//Что бы сменить время таймера нужно поменять его во всех четырех местах, отмеченными комментариями

startTimer(2*60*60 + 0*60 + 0, '#time1'); //Здесь меняется время таймера
                                          // Шаблон: startTimer(количество часов*60*60 + количество минут*60 + количество секунд)

function startTimer(goal, timer) {
  let i = a => (a-a%1+"").padStart(2, "0"), m=60, h=m*m; 
  timer = document.querySelector(timer); 
  goal += new Date/1000;
  setInterval(() => {
    let t = goal - new Date/1000;
    timer.textContent = [t/h, t%h/m, t%h%m].map(i).join(" : ");
  }, 999);
}

startTimer(2*60*60 + 0*60 + 0, '#time2'); //Здесь меняется время таймера
                                          // Шаблон: startTimer(количество часов*60*60 + количество минут*60 + количество секунд)

function startTimer(goal, timer) {
  let i = a => (a-a%1+"").padStart(2, "0"), m=60, h=m*m; 
  timer = document.querySelector(timer); 
  goal += new Date/1000;
  setInterval(() => {
    let t = goal - new Date/1000;
    timer.textContent = [t/h, t%h/m, t%h%m].map(i).join(" : ");
  }, 999);
}

startTimer(2*60*60 + 0*60 + 0, '#time3'); //Здесь меняется время таймера
                                          // Шаблон: startTimer(количество часов*60*60 + количество минут*60 + количество секунд)

function startTimer(goal, timer) {
  let i = a => (a-a%1+"").padStart(2, "0"), m=60, h=m*m; 
  timer = document.querySelector(timer); 
  goal += new Date/1000;
  setInterval(() => {
    let t = goal - new Date/1000;
    timer.textContent = [t/h, t%h/m, t%h%m].map(i).join(" : ");
  }, 999);
}

startTimer(2*60*60 + 0*60 + 33, '#time4'); //Здесь меняется время таймера
                                          // Шаблон: startTimer(количество часов*60*60 + количество минут*60 + количество секунд)

function startTimer(goal, timer) {
  let i = a => (a-a%1+"").padStart(2, "0"), m=60, h=m*m; 
  timer = document.querySelector(timer); 
  goal += new Date/1000;
  setInterval(() => {
    let t = goal - new Date/1000;
    timer.textContent = [t/h, t%h/m, t%h%m].map(i).join(" : ");
  }, 999);
}