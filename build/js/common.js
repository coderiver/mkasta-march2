$(document).ready(function() {
	$('.slider').slick({
		slidesToShow: 1,
		cssEase: 'linear',
		fade: true,
		autoplay: true,
		autoplaySpeed: 10000,
	});
	$('.js-time a').on('click', function(e) {
		e.preventDefault();
		var section = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(section).offset().top - 30
		}, 500);
		return false;
	});
});