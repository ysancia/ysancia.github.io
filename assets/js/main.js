(function($){
	"use strict";

	/* helper : scroll function */

	function scrollToAnchor(aid){
		$('html,body').animate({scrollTop: aid.offset().top-mainNavHeight}, 600, 'swing');
	}

	/* variable used for sticky menu calculations */
	var mainNavHeight;



	$(window).on('resize', function(){
		if ($(this).scrollTop() >= 199) {
			$('.arrow-up').fadeIn();
		} else {
			$('.arrow-up').fadeOut();
		}
	});

	$(window).on('scroll', function(){

		if ($(this).scrollTop() >= 199) {
			$('.arrow-up').fadeIn();
		} else {
			$('.arrow-up').fadeOut();
		}
	});


	$(document).ready(function(){
		mainNavHeight = $('#MainNav').height();

		var $arrows = $('.arrow-down, .arrow-up');

		$arrows.click(function(e){
			e.preventDefault();
			var $this = $(this);
			scrollToAnchor($($this.attr('href')));
		});

		if ($(this).scrollTop() >= 199) {
			$('.arrow-up').fadeIn();
		} else {
			$('.arrow-up').fadeOut();
		}

		/* pager # */

		(function(){
			var $pager = $('.pager');
			$('.prev, .next', $pager).each(function(){
				var $this = $(this);
				var href = $this.attr('href');
				$this.attr('href', href + '#BlogBody');
			});
		})();

		/* cover image */

		(function(){
			var $contentCover = $('.post-template [alt="cover"]');
			var $cover = $('#MainHeader');
			if($contentCover.length) {
				$contentCover = $($contentCover[0]);
				var $src = $contentCover.attr('src');
				$contentCover.css({'display' : 'none'});
				$cover.css({'background-image' : 'url(' + $src + ')'});
			}
		})();

		/* video */

		(function(){
			$('.post-content > div > iframe, .post-media > iframe').wrap('<div class="video" />');
			$('.video').fitVids();
		})();

		/* flexslider */

		(function(){
			var $gallery = $('.post-template .gallery');
			$gallery.each(function(){
				var $this = $('this');
				$this.css({'display' : 'none'});

				var flexMarkup = {};
				flexMarkup.start =
					'<div class="flexslider">' +
						'<div class="sliderBox">' +
                            '<div class="navFlexFull">' +
                                '<ol class="flex-control-nav flex-control-paging">' +
                                '</ol>' +
                                '<ul class="flex-direction-nav">' +
                                    '<li><a class="flex-prev" href="#">Previous</a></li>' +
                                    '<li><a class="flex-next" href="#">Next</a></li>' +
                                '</ul>' +
                            '</div>' +
						'</div>' +
						'<ul class="slides">';
				flexMarkup.middle = '';
				flexMarkup.end =
					    '</ul>' +
					'</div>';

				$('img', this).each(function(){
					flexMarkup.middle +=
						'<li>' +
							$(this).wrap("<div />").parent().html() +
						'</li>';
				});

				flexMarkup.full = flexMarkup.start + flexMarkup.middle + flexMarkup.end;
				$(flexMarkup.full).insertAfter(this);

				$(this).css({'display' : 'none'});
			});

			/* flexslider */
			$('.slider-cover .flexslider').flexslider({slideshow:true, controlNav: true, controlsContainer: '.navFlexFull'});
			$('.post-content .flexslider').flexslider({slideshow:false, controlsContainer: ".sliderBox", smoothHeight: true});
		})();

	});



	$(window).load(function(){

		/* parallax */

		//.parallax(xPosition, speedFactor, outerHeight) options:
		//xPosition - Horizontal position of the element
		//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
		//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
		$('.parallax').each(function(){
			$(this).parallax("20%", 0.2);
		});
	});
})(jQuery);