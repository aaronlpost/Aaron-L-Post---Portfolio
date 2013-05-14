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
  $(".image-popup").magnificPopup({type:"image"});
  $(".lazy").lazyload({threshold : 200, effect : "fadeIn"});

	// Cache the Window object

	var $window = $(window);

      $(window).scroll(function() {
		// Scroll the background at var speed
		var babydistance = ($('.baby-container').offset().top - 100);
		//var yPos = $window.scrollTop(), distance = $('.img-contain').offset().top;


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
$("#night-trigger").hover( function() { $("#night img").attr("src", $("#night img").attr("data-original")); $("#night img").removeAttr("data-original"); $("#night").fadeToggle(); } );
$("#eyes-trigger").hover( function() { $("#eyes img").attr("src", $("#eyes img").attr("data-original")); $("#eys img").removeAttr("data-original"); $("#eyes").fadeToggle(); } );
$("#autumn-trigger").hover( function() { $("#autumn img").attr("src", $("#autumn img").attr("data-original")); $("#autumn img").removeAttr("data-original"); $("#autumn").fadeToggle(); } );
$("#cast-trigger").hover( function() { $("#cast img").attr("src", $("#cast img").attr("data-original")); $("#cast img").removeAttr("data-original"); $("#cast").fadeToggle(); } );
$("#flight-trigger").hover( function() { $("#flight img").attr("src", $("#flight img").attr("data-original")); $("#flight img").removeAttr("data-original"); $("#flight").fadeToggle(); } );
$("#bridge-trigger").hover( function() { $("#bridge img").attr("src", $("#bridge img").attr("data-original")); $("#bridge img").removeAttr("data-original"); $("#bridge").fadeToggle(); } );
$("#beth-trigger").hover( function() { $("#beth img").attr("src", $("#beth img").attr("data-original")); $("#beth img").removeAttr("data-original"); $("#beth").fadeToggle(); } );
$("#fred-trigger").hover( function() { $("#fred img").attr("src", $("#fred img").attr("data-original")); $("#fred img").removeAttr("data-original"); $("#fred").fadeToggle(); } );
$("#aaron-trigger").hover( function() { $("#aaron img").attr("src", $("#aaron img").attr("data-original")); $("#aaron img").removeAttr("data-original"); $("#aaron").fadeToggle(); } );
$(".rslides").responsiveSlides();
$("a[title]").qtip({position: {
		my: 'top center',  
		at: 'bottom center', 
		target: $('.soon') 
	}})
});



