var options = {
	offset: 300
}

var header = new Headhesive('.header', options);

$(".recommend__item").magnificPopup({
	type : 'image',
	gallery : {
		enabled : true
	}
});


$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});

$('.menu-icon').click(function () {
	$('.menu').toggleClass("active");
	$('.menu-icon').toggleClass("active-icon");
	$('nav').toggleClass("active-nav");
});

        //E-mail Ajax Send

    //Documentation & Example: https://github.com/agragregra/uniMail

    $(document).ready(function () {

 $(".application__form").submit(function () {

 // Получение ID формы

 var formID = $(this).attr('id');

 // Добавление решётки к имени ID

 var formNm = $('#' + formID);

 $.ajax({

 type: "POST",

 url: '../mail.php',

 data: formNm.serialize(),

 success: function (data) {

 // Вывод текста результата отправки

 $(formNm).html(data);

 },

 error: function (jqXHR, text, error) {

 // Вывод текста ошибки отправки

 $(formNm).html(error);

 }

 });

 return false;

 });

});

$('.application__btn2').click(function () {
	$(".done__text2").addClass("abv")
});
$('.application__btn1').click(function () {
	$(".done__text1").addClass("abv")
});
$('.application__btn3').click(function () {
	$(".done__text3").addClass("abv")
});