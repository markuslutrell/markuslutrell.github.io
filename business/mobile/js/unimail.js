$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.js-overlay-campaign4').fadeIn(50);
			$('.js-overlay-campaign4').addClass('disabled');
			setTimeout(function() {
				$('.js-overlay-campaign').fadeOut();
				$('.js-overlay-campaign').removeClass('disabled');
				$('.js-overlay-campaign2').fadeOut();
				$('.js-overlay-campaign2').removeClass('disabled');
				$('.js-overlay-campaign3').fadeOut();
				$('.js-overlay-campaign3').removeClass('disabled');
				$('.js-overlay-campaign4').fadeOut();
				$('.js-overlay-campaign4').removeClass('disabled');
			}, 3000);
		});
		return false;
	});

});