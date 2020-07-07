if ($(document).width() > 740) {
	$(".how__tab_item").not(":first").hide();
	$(".how__wrapper .how__tab").click(function() {
	$(".how__wrapper .how__tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".how__tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
}


if ($(document).width() < 740) {
	$(".accordeon dd").hide().prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});
}

$('.testimonials__slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    },
    
  ]
}); 
$("main").mCustomScrollbar({
	theme:"dark"
});

$(".mobile__menu").click(function(){
	$(".header__menu").addClass("active");
	$(".menu__overlay").addClass("active");
});

$(".close-menu").click(function(){
	$(".header__menu").removeClass("active");
	$(".menu__overlay").removeClass("active");
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

const select = document.querySelector('#select1');

 select.addEventListener('blur', () => selectEvent());
 select.addEventListener('click', () => selectEvent());

 selectEvent = () => {
     if (event.type == 'click') {
         if (select.classList.contains('change')) {
             select.classList.remove('change');
         } else {
             select.classList.add('change');
         }
     }
     if (event.type == 'blur') {
         select.classList.remove('change');
     }
 };


const select2 = document.querySelector('#select2');

 select2.addEventListener('blur', () => selectEvent2());
 select2.addEventListener('click', () => selectEvent2());

 selectEvent2 = () => {
     if (event.type == 'click') {
         if (select2.classList.contains('change')) {
             select2.classList.remove('change');
         } else {
             select2.classList.add('change');
         }
     }
     if (event.type == 'blur') {
         select2.classList.remove('change');
     }
 };

const select3 = document.querySelector('#select3');

 select3.addEventListener('blur', () => selectEvent3());
 select3.addEventListener('click', () => selectEvent3());

 selectEvent3 = () => {
     if (event.type == 'click') {
         if (select3.classList.contains('change')) {
             select3.classList.remove('change');
         } else {
             select3.classList.add('change');
         }
     }
     if (event.type == 'blur') {
         select3.classList.remove('change');
     }
 };

const select4 = document.querySelector('#select4');

 select4.addEventListener('blur', () => selectEvent4());
 select4.addEventListener('click', () => selectEvent4());

 selectEvent4 = () => {
     if (event.type == 'click') {
         if (select4.classList.contains('change')) {
             select4.classList.remove('change');
         } else {
             select4.classList.add('change');
         }
     }
     if (event.type == 'blur') {
         select4.classList.remove('change');
     }
 };

if (navigator.platform === 'MacIntel' || navigator.platform === 'MacPPC') {
 $('.calculator__price span').css("font-family", "Arial");
}​