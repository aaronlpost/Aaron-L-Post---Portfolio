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
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = $window.scrollTop();

		if (yPos < 75) {
		// Put together our final background position
/*
		var coords = (-450 + (3 * yPos)) + 'px';
		var opac = ((0.0167 * yPos) - 1.5);
*/

		// Move the background
/*
		$('.img-overlay').css({"top": coords });
		$('.img-overlay').css({"opacity": opac });
*/
		$('.img-overlay').css({"opacity":"0" });
		}

		else {
/*		$('.img-overlay').css({"top":"0" }); */
		$('.img-overlay').css({"opacity":"1" });
		}

}); // window scroll Ends


});