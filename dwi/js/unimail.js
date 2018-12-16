$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.js-overlay-campaign').fadeIn(50);
			$('.js-overlay-campaign').addClass('disabled');
			setTimeout(function() {
				$('.js-overlay-campaign').fadeOut();
				$('.js-overlay-campaign').removeClass('disabled');
			}, 5000);
		});
		return false;
	});

});