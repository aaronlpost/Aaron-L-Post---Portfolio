$(document).ready(function() {
	if ($('#nav').css('text-align') !== 'center') {
	$('.parallax').mousemove(
		function(e){
			/* Work out mouse position */
			var offset = $(this).offset();
			var xPos = e.pageX - offset.left;

			/* Get percentage positions */
			var mouseXPercent = Math.round(xPos / $(this).width() * 100);

			/* Position Each Layer */
			$(this).children('img.slide').each(
				function(){
					var diffX = $('.parallax').width() - $(this).width();

					var myX = diffX * (mouseXPercent / 100); //) / 100) / 2;

					var cssObj = {
						'left': myX + 'px'
					};
					$(this).css(cssObj);
					$(this).animate({left: myX},{duration: 50, queue: false, easing: 'linear'});

				}
			);
		}
	);

	$('.parallax').mouseenter(
		function(){
			$(this).children('div').fadeOut(
				300
			);
		}
	);

	$('.parallax').mouseleave(
		function(){
			$(this).children('div').fadeIn(
				300
			);
		}
	);
	}
 });
