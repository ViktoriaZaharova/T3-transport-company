$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function () {
	$('.mobile-menu').fadeIn();
});

$('.mobile-menu__close').on('click', function () {
	$('.mobile-menu').fadeOut();
});

$('.our-fleet-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	centerMode: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	appendArrows: '.our-fleet-slider__nav',
	dots: true
});

$('.reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	centerMode: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	appendArrows: '.reviews-slider__nav',
});