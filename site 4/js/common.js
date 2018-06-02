$(document).ready(function() {
	$(".logo").animated("bounceInLeft");
	$("nav p").animated("bounceInRight");
	$(".main__header").animated("bounceInUp");
	$(".sports").animated("bounceInLeft");
	$(".download__button1").animated("bounceInLeft");
	$(".download__button2").animated("bounceInRight");
	$(".player-1").animated("bounceInLeft");
	$("#athlets .sports__item").animated("bounceInRight");
	$("#athlets h2").animated("bounceInRight");
	$("#players h2").animated("bounceInLeft");
	$("#players .sports__item").animated("bounceInLeft");
	$(".player-2").animated("bounceInRight");
	$(".square").animated("bounceInUp");
	$(".row__img").animated("bounceInLeft");
	$(".row2 row__img").animated("bounceInRight");
	$(".row__text").animated("bounceInRight");
	$("footer").animated("bounceInUp");
	$("#download h2").animated("bounceInDown");
})

$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
