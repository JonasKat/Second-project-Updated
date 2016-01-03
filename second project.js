/* global $ */
$(document).ready(function() {
	$('.box').on('click', function () {
		var animations = [ 'crawl', 'dangle', 'jump', 'bounceOut', 'tada', 'shake'];
		var animation = animations[Math.floor(Math.random() * 6)];

		$(this).addClass(animation);

		setTimeout(function () {
    	$(".box").removeClass(animation);
		}, 4000);
	});
    $(".fourth").on("click", function() {
		$(this).toggleClass("toggleFourth")
		if ($(this).hasClass("toggleFourth")) {
		$(this).animate({"top": "10px"});
		}else {
			$(this).animate({"top": "0"});
		}
    });
});
