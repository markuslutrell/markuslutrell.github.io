$('.posts__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	  dots: true,
	  infinite: true,
	  arrows: true
	});

$('.complication__item_btn').click(function() {
	$('complication__item_content-hover').css({'display' : 'block'})
	$('complication__item_content-hover').mouseleave(function() {
		$('complication__item_content-hover').css({'display' : 'none'})
	})
});

$(document).ready(function() {
  
  var $wrapper = $('.tab-wrapper'),
      $allTabs = $wrapper.find('.tab-content > div'),
      $tabMenu = $wrapper.find('.tab-menu li'),
      $line = $('<div class="line"></div>').appendTo($tabMenu);
  
  $allTabs.not(':first-of-type').addClass('tab-hide');  
  $tabMenu.filter(':first-of-type').find(':first').width('100%')
  
  $tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $tabMenu.on('click', function() {
    
    var dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);
    
    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');
    
    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({'width':'100%'}, 'fast');
    $getWrapper.find($allTabs).addClass('tab-hide');
    $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').removeClass('tab-hide');
  });

});//end ready

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$(document).ready(function() { 
  $(".main__header_alt").animated("fadeInLeft");
  $("section").animated("fadeIn", 1000);
});

$(function() {
  function init() {
    $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
    $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
  };
  
  function toggleMenuIcon() {
    $(this).toggleClass('menu-icon--open');
    $('[data-element="toggle-nav"]').toggleClass('nav--active');
  };
  
  function toggleSubMenu() {
    $(this).toggleClass('nav__link--plus nav__link--minus');
    $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
  };
  
  init()
});

$(function(){
	$('.menu__block_list').slicknav();
});