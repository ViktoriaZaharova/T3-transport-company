$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function () {
	$('.mobile-menu').fadeIn();
});

$('.mobile-menu__close').on('click', function () {
	$('.mobile-menu').fadeOut();
});

$('.advantages-slider').slick({
	slidesToShow: 1,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.our-fleet-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	centerMode: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	appendArrows: '.our-fleet-slider__nav',
	dots: true,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				variableWidth: false,
				centerMode: false,
			}
		}
	]
});

$('.reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	centerMode: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	appendArrows: '.reviews-slider__nav',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				variableWidth: true,
				centerMode: false,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				centerMode: false,
			}
		}
	]
});

$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	$('.mobile-menu').fadeOut();
	return false;
});

$('.btn-toggle').on('click', function (e) {
	e.preventDefault();
	$('.faces-col:hidden').fadeIn();
	var onBlock = $('.faces-col:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

// animate number
var target = $('.benefits__inner');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function () {
	var winScrollTop = $(this).scrollTop();
	if (winScrollTop > scrollToElem) {
		$({ blurRadius: 5 }).animate(
			{ blurRadius: 0 },
			{
				duration: 3500,
				easing: "swing",
			}
		);
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
			" "
		);
		$(".benefits__number").each(function () {
			var tcount = $(this).data("count");
			$(this).animateNumber(
				{
					number: tcount,
					easing: "easeInQuad",
					numberStep: comma_separator_number_step
				},
				1000
			);
		});
	}
});

new WOW().init();

// parallax
var rellax = new Rellax('.rellax');