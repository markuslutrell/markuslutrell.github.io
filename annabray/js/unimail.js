$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.js-typography-thanks-overlay-campaign').fadeIn(50);
			$('.js-typography-thanks-overlay-campaign').addClass('disabled');
			setTimeout(function() {
				$('.js-typography-thanks-overlay-campaign').fadeOut();
				$('.js-typography-thanks-overlay-campaign').removeClass('disabled');
			}, 5000);
		});
		return false;
	});

});