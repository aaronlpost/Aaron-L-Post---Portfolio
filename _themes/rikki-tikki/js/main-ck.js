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
*/$(document).ready(function(){var e=$(window);$(window).scroll(function(){var t=e.scrollTop();t<75?$(".img-overlay").css({opacity:"0"}):$(".img-overlay").css({opacity:"1"})})});