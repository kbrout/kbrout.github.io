(function ($) {


	$('#testimonial').layerSlider({
		sliderVersion: '6.0.0',
		type: 'fullwidth',
		responsiveUnder: 1280,
		maxRatio: 1,
		slideBGSize: 'auto',
		hideUnder: 0,
		hideOver: 100000,
		skin: 'v5',
		globalBGRepeat: 'repeat',
		globalBGAttachment: 'fixed',
		globalBGSize: 'contain',
		skinsPath: './skins/'
	});
	$('.carousel-main').owlCarousel({
		loop: !0,
		autoplay: !0,
		autoplayTimeout: 2000,
		margin: 30,
		nav: !0,
		dots: !1,
		autoplayHoverPause: !0,
		navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1024: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});

})(jQuery)











$(document).ready(function() {
	try {
		$('.a,.b,.c').ripples({
			resolution: 480,
			perturbance: 0.04
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}


});

$("a").on('click', function (event) {
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function () {
			window.location.hash = hash
		})
	}
});
	  
var num = 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.black_nav').addClass('fixed');
    } else {
        $('.black_nav').removeClass('fixed');
    }
});
$('.portfolio-slide').owlCarousel({
		loop: !0,
		autoplay: !0,
		autoplayTimeout: 2000,
		margin: 30,
		nav: !0,
		dots: !1,
		autoplayHoverPause: !0,
		navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1024: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});

$('#main_banner').ripples({
			resolution: 700,
	dropRadius: 20,
	perturbance: 0.09,
	});

