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
*/$(document).ready(function(){var e=$(window);$(window).scroll(function(){var t=e.scrollTop();if(t<150){var n=-450+3*t+"px",r=.0167*t-1.5;$(".img-overlay").css({top:n});$(".img-overlay").css({opacity:r})}else{$(".img-overlay").css({top:"0"});$(".img-overlay").css({opacity:"1"})}})});