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
  $(".ajax-popup").magnificPopup({type:"ajax"});
  $(".lazy").lazyload({threshold : 200, effect : "fadeIn"});
  $('.open-popup-link').click(function() {
  $('#email-popup').slideToggle('fast', function() {
    // Animation complete.
  });
});
  	if ($('.baby-container').length > 0) { 
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
    };

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
});

// Contact Form
$("#contact").submit(function(e){
  e.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var text = $("#text").val();
  var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  };
 
  if (isValidEmail(email) && (text.length > 1) && (name.length > 1)){
    $.ajax({
    type: "POST",
    url: "/_themes/rikki-tikki/js/email.php",
    data: dataString,
    success: function(){
      $('.error').hide();
      $('.success').fadeIn(500);
      $('.email-popup').delay(1500).slideToggle(fast);
    }
    });
  } else{
    $('.error').fadeIn(1000);
  }
 
  ;
  if ((name.length < 2)) {
	$('.errorname').fadeIn(1000);
  } 
  else if ((name.length > 1)) {
	$('.errorname').fadeOut(1000);
  } 
  ;
  if (!isValidEmail(email)) {
	$('.erroremail').fadeIn(1000);
  } 
  else if (isValidEmail(email)) {
	$('.erroremail').fadeOut(1000);
  } 
  ;
  if ((text.length < 2)) {
	$('.errormessage').fadeIn(1000);
  } 
  else if ((text.length > 1)) {
	$('.errormessage').fadeOut(1000);
  } 

  return false;

});


