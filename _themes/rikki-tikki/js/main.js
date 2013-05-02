/*
$(window).load(function(){
    $("#shadow").css("height", $(document).height()).hide();
    $("#shadow").css("width", $(document).width()).hide();
});

$(".lightSwitcher").click(function(){
    $("#shadow").fadeToggle("fast","swing");
});
*/

/*
$(document).ready(function() {
	$('#displaymap').click(function() {
		$('.map-container').slideToggle('slow', function() {
	});
	return false;
	});
});
*/

$(document).ready(function(){
	// Cache the Window object
	var $window = $(window);

      $(window).scroll(function() {
		// Scroll the background at var speed
		var babydistance = ($('.baby-contain').offset().top - 100), italydistance = ($('.italy-contain').offset().top - 100);
		//var yPos = $window.scrollTop(), distance = $('.img-contain').offset().top;
		if ( $window.scrollTop() >= italydistance ) {
		$('.italy').css({"left":"0" });
		}

		else {
		$('.italy').css({"left":"-400px" });
		}

		if ( $window.scrollTop() >= babydistance ) {
		// Put together our final background position

		//var coords = (0.5 * (yPos-150)) + 'px';

		//var opac = ((0.0167 * yPos) - 1.5);


		// Move the background

		//$('.parallax-image').css({"top": coords });
		//$('.img-overlay').css({"opacity": opac });

		$('.baby').css({"opacity":"1" });
		}

		else {
		$('.baby').css({"opacity":"0" });
		//$('.img-overlay').css({"opacity":"1" });
		}

}); // window scroll Ends

jQuery.easing.def = "easeInOutCubic";
$("#night-trigger").hover( function() { $("#night").fadeToggle(); } );
$("#eyes-trigger").hover( function() { $("#eyes").fadeToggle(); } );
$("#autumn-trigger").hover( function() { $("#autumn").fadeToggle(); } );
$("#cast-trigger").hover( function() { $("#cast").fadeToggle(); } );
$("#flight-trigger").hover( function() { $("#flight").fadeToggle(); } );
$("#bridge-trigger").hover( function() { $("#bridge").fadeToggle(); } );


});



