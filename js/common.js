$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function () {
	$('.mobile-menu').fadeIn();
});

$('.mobile-menu__close').on('click', function () {
	$('.mobile-menu').fadeOut();
});