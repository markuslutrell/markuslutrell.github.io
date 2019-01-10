$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.posts__slider').slick();
$('.posts__slider2').slick();
$('.posts__slider3').slick();
$('.posts__slider4').slick();
$('.posts__slider5').slick();