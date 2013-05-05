/*
$(window).load(function(){
    $("#shadow").css("height", $(document).height()).hide();
    $("#shadow").css("width", $(document).width()).hide();
});

$(".lightSwitcher").click(function(){
    $("#shadow").fadeToggle("fast","swing");
});
*//*
$(document).ready(function() {
	$('#displaymap').click(function() {
		$('.map-container').slideToggle('slow', function() {
	});
	return false;
	});
});
*/$(document).ready(function(){var e=$(window);$(window).scroll(function(){var t=$(".baby-container").offset().top-100;e.scrollTop()>=t?$(".baby").css({opacity:"1"}):$(".baby").css({opacity:"0"})});jQuery.easing.def="easeInOutCubic";$("#night-trigger").hover(function(){$("#night").fadeToggle()});$("#eyes-trigger").hover(function(){$("#eyes").fadeToggle()});$("#autumn-trigger").hover(function(){$("#autumn").fadeToggle()});$("#cast-trigger").hover(function(){$("#cast").fadeToggle()});$("#flight-trigger").hover(function(){$("#flight").fadeToggle()});$("#bridge-trigger").hover(function(){$("#bridge").fadeToggle()});$("#beth-trigger").hover(function(){$("#beth").fadeToggle()});$("#fred-trigger").hover(function(){$("#fred").fadeToggle()});$("#aaron-trigger").hover(function(){$("#aaron").fadeToggle()})});