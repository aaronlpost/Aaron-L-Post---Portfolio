$(document).ready(function(){if($("#nav").css("text-align")!=="center"){$(".parallax").mousemove(function(e){var t=$(this).offset(),n=e.pageX-t.left,r=Math.round(n/$(this).width()*100);$(this).children("img.slide").each(function(){var e=$(".parallax").width()-$(this).width(),t=e*(r/100),n={left:t+"px"};$(this).css(n);$(this).animate({left:t},{duration:50,queue:!1,easing:"linear"})})});$(".parallax").mouseenter(function(){$(this).children("div").fadeOut(300)});$(".parallax").mouseleave(function(){$(this).children("div").fadeIn(300)})}});