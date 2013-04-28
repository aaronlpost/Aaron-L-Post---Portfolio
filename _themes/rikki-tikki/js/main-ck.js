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
*/$(document).ready(function(){var e=$(window);$(window).scroll(function(){var t=$(".baby-contain").offset().top-100,n=$(".italy-contain").offset().top-100;e.scrollTop()>=n?$(".italy").css({left:"0"}):$(".italy").css({left:"-400px"});e.scrollTop()>=t?$(".baby").css({opacity:"1"}):$(".baby").css({opacity:"0"})})});